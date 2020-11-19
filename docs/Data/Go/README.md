# Go 基础知识



## 声明变量

* 单个变量
* 多个变量
* 声明和初始化一个变量
* 声明和初始化多个变量
* new函数声明一个指针变量



```go
	// 单个
	var name string = "李四"; // 字符串用双引号

	// 多个
	var (
		name string
		age int
		address string
	);

	// := 符号 推导声明写法或者短类型声明法，编译器会自动根据右值类型推断出左值的对应类型
	name := "编程";

	// 等价于
	var name string = "编程";
	var name = "编程";

	// 多个赋值
	name, age := "张三", 23;

	// new函数 声明的是一个指针
	ptr := new(int)
  fmt.Println("ptr address: ", ptr)
  fmt.Println("ptr value: ", *ptr)  // * 后面接指针变量，表示从内存地址中取出值
```





## 数据类型



* 布尔型    bool
* 数字类型   int、float32、float64 大小跟操作系统有关

* 字符串      string  

* 派生类型
  * 指针（Pointer）
  * 数组类型
  * 结构化类型（struct）
  * Channel 类型
  * 函数类型
  * 切片类型
  * 接口类型（interface）
  * Map类型



### 整形 浮点数

![border](http://image.iswbm.com/20200120204329.png)



int 和 uint 的区别就在于一个 `u`，有 `u` 说明是无符号，没有 `u` 代表有符号。以 `int8` 和 `uint8` 举例，8 代表 8个bit，能表示的数值个数有 2^8 = 256。uint8 是无符号，能表示的都是正数，0-255，刚好256个数。int8有符号就是 -128~127







### 单引号 双引号

**Go 中双引号和单引号是不一样的，这里要一定要使用双引号，表示字符串，而在单引号表示 rune 类型的字符（*表示的是一个 Unicode字符*），rune，占用4个字节，共32位比特位，所以它和 uint32 本质上也没有区别。**






### 字符串

**string 的本质，其实是一个 byte数组*也可以使用 `` 反引号 同时反引号可以不写换行符（因为没法写）来表示一个多行的字符串。**

```go
var mystr01 string = `hello`;
	var mystr02 [5]byte = [5]byte{104, 101, 108, 108, 111}
	fmt.Printf("mystr01: %s\n", mystr01)
	fmt.Printf("mystr02: %s\n", mystr02)
```




### 指针变量



**存放的是变量的内存地址**

```go
var name string = "zhangsan";

var ptr = &name;
fmt.Println("ptr: ", ptr);
fmt.Println("ptr: ", *ptr);
```





## 流程控制















