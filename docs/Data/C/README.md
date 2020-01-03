# C语言的深入理解



## 关于mian函数

```C
	main()

	main(void)
  
  void main(void)
    
  int main()
   
  int mian(int argc, char *agrv[])
```





关于mian函数的定义有很多种，**在不同的标准下编译都是可以编译通过的** 目前最新的是C11标准，其实很简单 我们写代码要根据标准来。例如写js 就根据ECMA标准来。

```c
#include <stdio.h>

int main(void) {
  printf("hello world!\n");
  return0; // 该有的返回值不能省
}
```



### 命令行参数

```shell
gcc -std=c11 -o hello hello.c
```

不同的参数执行不同的命令，使用不同的标准来编译代码。

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
  printf("argc:\t argv:\r\n");

  for (int i = 0; i < argc; ++i) {
    printf("%d\t %s\r\n", i, argv[i]);
  }

  printf("argc total: %d\n", argc);
  return 0;
}

```

argc    argv

0         ./hello

argc total:  1

argc跟argv的值都是有变化的 因为默认的第一个参数是当前程序的名(包含路径)，参数总个数为1。