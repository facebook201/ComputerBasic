# I/O 



**I/O 输入输出是操作系统里面很重要的一块，操作系统管理者设备命令的发送，捕捉中断，处理设备的错误。**



## 多路复用

> **IO多路复用是一种同步IO模型，实现一个线程可以监视多个文件句柄；一旦某个文件句柄就绪，就能够通知应用程序进行相应的读写操作；没有文件句柄就绪时会阻塞应用程序，交出cpu。多路是指网络连接，复用指的是同一个线程**。

![border](https://pic2.zhimg.com/80/18d8525aceddb840ea4c131002716221_1440w.jpg)



### IO 多路复用的出现

最早的时候，没有多路复用 使用的 BIO、NIO的实现 但是都有一些问题。



#### 同步阻塞（BIO）

* 服务端采用 单线程，当接受一个请求后，在 recv或send调用阻塞时。将无法接收上一个请求（必须要等完成）无法处理并发。

* 服务端采用多线程，当接受一个请求后，开启线程进行recv，可以完成并发处理。但是请求数量增加，大量的线程占用很大的内存空间。切换线程会带来很大的开销。

* **多线程有个问题就是 CPU上下文切换 需要处理操作句柄。代价高**

  

```bash
// 单线程伪代码描述
while(1) {
  // accept阻塞
  client_fd = accept(listen_fd)
  fds.append(client_fd)
  for (fd in fds) {
    // recv阻塞（会影响上面的accept）
    if (recv(fd)) {
      // logic
    }
  }  
}


// 多线程伪代码描述
while(1) {
  // accept阻塞
  client_fd = accept(listen_fd)
  // 开启线程read数据（fd增多导致线程数增多）
  new Thread func() {
    // recv阻塞（多线程不影响上面的accept）
    if (recv(fd)) {
      // logic
    }
  }  
}
```



### 同步非阻塞 （NIO）

* 服务器接受一个请求，加入fds集合，每次轮询一遍fds集合recv（非阻塞）数据。每次数据则立即 返回错误，每次轮询所有fd（包括没有发生读写事件的fd）会很浪费cpu。



### IO多路复用

服务器端采用单线程通过select/epoll等系统调用获取fd列表，遍历有事件的fd进行accept/recv/send，使其能`支持更多的并发连接请求`

**通过内核获取有读写事件发生的fd（文件描述符），只要有一个则返回，无则阻塞，整个过程只在调用select、poll、epoll这些调用的时候才会阻塞，accept/recv是不会阻塞**



### 多路复用的方式

* select
  * 单个进程所打开的FD是有限制的，通过FD_SETSIZE设置，默认1024
  * 每次调用select，都需要把fd集合从用户态拷贝到内核态，这个开销在fd很多时会很大
  * 对socket扫描时是线性扫描，采用轮询的方法，效率较低（高并发时）

* poll

  * poll与select相比，只是没有fd的限制，其它基本一样

  * 缺点

    * 每次调用poll，都需要把fd集合从用户态拷贝到内核态，这个开销在fd很多时会很大
    * 对socket扫描时是线性扫描，采用轮询的方法，效率较低（高并发时）

* epoll （只能在  linux下工作）

## **epoll的设计思路**

epoll是在select出现N多年后才被发明的，是select和poll的增强版本。epoll通过以下一些措施来改进效率。

**措施一：功能分离**

select低效的原因之一是将“维护等待队列”和“阻塞进程”两个步骤合二为一。如下图所示，每次调用select都需要这两步操作，然而大多数应用场景中，需要监视的socket相对固定，并不需要每次都修改。epoll将这两个操作分开，先用epoll_ctl维护等待队列，再调用epoll_wait阻塞进程。显而易见的，效率就能得到提升。

![border](https://pic2.zhimg.com/v2-5ce040484bbe61df5b484730c4cf56cd_b.jpg)

先用epoll_create创建一个epoll对象epfd，再通过epoll_ctl将需要监视的socket添加到epfd中，最后调用epoll_wait等待数据。

```c
int s = socket(AF_INET, SOCK_STREAM, 0);   
bind(s, ...)
listen(s, ...)

int epfd = epoll_create(...);
epoll_ctl(epfd, ...); //将所有需要监听的socket添加到epfd中

while(1){
    int n = epoll_wait(...)
    for(接收到数据的socket){
        //处理
    }
}
```



select低效的另一个原因在于程序不知道哪些socket收到数据，只能一个个遍历。如果内核维护一个“就绪列表”，引用收到数据的socket，就能避免遍历。如下图所示，计算机共有三个socket，收到数据的sock2和sock3被rdlist（就绪列表）所引用。当进程被唤醒后，只要获取rdlist的内容，就能够知道哪些socket收到数据。





## **epoll LT 与 ET模式的区别**

- epoll有EPOLLLT和EPOLLET两种触发模式，LT是默认的模式，ET是“高速”模式。
- LT模式下，只要这个fd还有数据可读，每次 epoll_wait都会返回它的事件，提醒用户程序去操作
- ET模式下，它只会提示一次，直到下次再有数据流入之前都不会再提示了，无论fd中是否还有数据可读。所以在ET模式下，read一个fd的时候一定要把它的buffer读完，或者遇到EAGAIN错误



#### Epoll 的应用

* redis
* nginx

![border](https://pic3.zhimg.com/v2-5061e5d3791e31a62a394b0b5ce1c986_b.jpg)







### 网卡接收器

网卡接收网线传输的数据，经过硬件电路传输，通过DMA控制器传输、IO通路选择等，然后网卡把收到的数据写入内存。



### 进程阻塞为什么不占用CPU资源

阻塞是进程调度关键的一环节，它是指进程在等待某事件发生之前的等待状态，recv、select、epoll 都是阻塞方法。比如recv方法接收数据，recv是一个阻塞方法，当程序运行到recv时，它会一直等待，直到接收数据才往下执行。阻塞的原理是什么？



### 工作队列

操作系统为了支持多任务，实现了进程调度的功能，运行状态是进程获得CPU的使用权，等待状态就是阻塞状态，比如上述程序运行到recv时，程序会从运行状态变为等待状态，接收到数据后又变回运行状态。操作系统会分时执行各个运行状态的进程，由于速度很快，看上去就像是同时执行多个任务。



### 内核接收网络数据过程

借用图一张

![border](https://pic2.zhimg.com/80/v2-b7b2427e96fb520dcfd3e94af4fc9e0d_720w.jpg)



### 问题？

* 操作系统如何知道网络数据对应哪个socket？

  **scoket 对应一个端口号，而网络数据包中包含了IP和端口号信息，内核可以通过端口号找到对应的scoket，为了提高处理速度，操作系统会维护端口号到socket的索引结构，以快速读取。**

* 如何同时监视多个socket的数据？

  **多路复用**

```c
//  epoll 实现
  // 第一步 创建epfd 白板
  int epfd = epoll_create(10);

  for (int i = 0; i < 5; i++) {
    // static struct  epoll_event ev;
    epoll_ctl(epfd, EPOLL_CTL_ADD, ev.data.fd, &ev);
  }

  while (1) {
    puts('round again!');
    nfds = epoll_wait(epfd, events, 5, 10000);

    for (int i = 0; i < nfds; i++) {
      memset(buffer, 0, MAXBUF);
      read(events[i], data.fd, buffer, MAXBUF);
      puts(buffer);
    }
  } 
```

* 1、调用 epoll_create() 创建一个 epoll对象（在epoll文件系统中为这个句柄对象分配资源）

* 2、调用 epoll_ctl() 向epoll对象中添加或删除fd与对应的事件信息（每次只要传入一个fd）

* 3、调用 epoll_wait() 阻塞等待内核返回的可读写事件，收集发生的事件的连接，无需遍历所有集合。





