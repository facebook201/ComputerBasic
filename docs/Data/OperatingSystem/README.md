# 操作系统 OperatingSystem

>  **操作系统的下面内容主要来自清华大学的理论知识课件、以及其他地方的资料自己总结而来的。**



## 什么是操作系统？

简单来说 操作系统也是一个软件。它是管理下层硬件，为上层软件提供统一的、容易理解的抽象API的软件。



* 操作系统是一个控制程序
* 是一个资源管理器
  * 应用程序与硬件之间的中间层
  * 管理各种计算机软硬件资源
  * 提供访问计算机软硬件资源的高效手段
  * 解决资源访问冲突、确保资源公平使用



### 操作系统的地位

![border](https://raw.githubusercontent.com/facebook201/ComputerBasic/master/docs/img/operatingsystem/op1.png)

操作系统是对计算机硬件进行一层隔离，对上层应用提供常见逻辑的一些资源。

![border](https://raw.githubusercontent.com/facebook201/ComputerBasic/master/docs/img/operatingsystem/op2.png)


### ucore操作系统的内核

![border](https://raw.githubusercontent.com/facebook201/ComputerBasic/master/docs/img/operatingsystem/os.png);


### 操作系统内核特征

* 并发
  * 计算机系统中同时存在多个运行的程序、需要OS管理和调度资源
* 共享
  * 同时访问
  * 互斥共享 内存访问的时候 怎么管理
* 虚拟
  * 利用躲到程序设计技术、让每个用户都觉得有一个计算机在为他服务
* 异步
  * 程序的执行不是一贯到底、而是走走停停，向前推进的速度不可预知
  * 只要运行环境相同 OS需要保证程序运行的结果也要相同 相同的输入有相同的输出





## 为什么学习操作系统

* 学习操作系统有挑战 
* 操作系统很有用处 熟悉工作原理
* 操作系统更好的帮助你工作





> * 它是计算机系统的基本组成部分
> * 硬件的发展和应用需求所驱动 就像 windows 有那么多版本的操作系统是一个概念
> * 学术和工业的持续推进



