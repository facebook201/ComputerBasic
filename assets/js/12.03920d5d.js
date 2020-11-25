(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{182:function(v,_,t){"use strict";t.r(_);var a=t(0),s=Object(a.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"组成原理核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组成原理核心"}},[v._v("#")]),v._v(" 组成原理核心")]),v._v(" "),t("h2",{attrs:{id:"cpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[v._v("#")]),v._v(" CPU")]),v._v(" "),t("p",[v._v("CPU的核心是从程序或者应用取得指令并执行计算。"),t("strong",[v._v("提取指令、解码、执行。CPU从 RAM（内存）中提取指令，然后解码执行")])]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[v._v("RAM")]),v._v(" "),t("p",[v._v("RAM 随机存取存储器，也叫主存。是CPU直接交换数据的内部存储器，可以随时读写。而且速度快。作为操作系统和其他运行中程序的"),t("strong",[v._v("临时数据存储介质")])])]),v._v(" "),t("h3",{attrs:{id:"cpu是寄存器的集合体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu是寄存器的集合体"}},[v._v("#")]),v._v(" CPU是寄存器的集合体")]),v._v(" "),t("p",[v._v("汇编语言")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("mov eax, dword ptr [ebp-8] /* 把数值从内存复制到 eax */\nadd eax, dword ptr [ebp-0Ch] /* 把 eax 的数值和内存的数值相加 */\nmov dword ptr [ebp-4], eax /* 把 eax 的数值存储在内存中 */\n")])])]),t("p",[t("strong",[v._v("汇编语言是计算机做了什么，eax、ebp 都是表示寄存器。")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("寄存器种类")]),v._v(" "),t("th",[v._v("功能")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("累加寄存器（例如物理地址的表示法，就通过两个寄存器地址来计算表示，后面会说）")]),v._v(" "),t("td",[v._v("存储运行的数据和运算后的数据")])]),v._v(" "),t("tr",[t("td",[v._v("基址寄存器")]),v._v(" "),t("td",[v._v("存储数据内存的起始位置")])]),v._v(" "),t("tr",[t("td",[v._v("变址寄存器")]),v._v(" "),t("td",[v._v("存储基址寄存器的相对地址")])]),v._v(" "),t("tr",[t("td",[v._v("指令寄存器")]),v._v(" "),t("td",[v._v("存储运行的指令，CPU内部使用，程序员无法读写")])])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic2.zhimg.com/80/0ed5f597d0418269300757988c622fb1_720w.jpg?source=1940ef5c",alt:"border"}})]),v._v(" "),t("h2",{attrs:{id:"内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[v._v("#")]),v._v(" 内存")]),v._v(" "),t("p",[v._v("是一种存储CPU运算数据的组件。主要跟CPU进行交互。它划分为若干个存储单元，每个存储单元从0开始编号。")]),v._v(" "),t("p",[t("strong",[v._v("8086有20条数据线，寻址空间是2^20, 1MB")])]),v._v(" "),t("h3",{attrs:{id:"总线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总线"}},[v._v("#")]),v._v(" 总线")]),v._v(" "),t("p",[v._v("计算机中有专门连接CPU和其他芯片的导线，称为总线。物理上是一根根导线的集合。")]),v._v(" "),t("h3",{attrs:{id:"逻辑上划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑上划分"}},[v._v("#")]),v._v(" 逻辑上划分")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("地址总线")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("用来指定存储单元")])]),v._v(" "),t("li",[v._v("地址总线宽度，就是有多少跟线，决定了可寻址的存储单元。8086有20根，所以最大是 2^20,一共1MB。"),t("strong",[v._v("但是CPU寄存器是16位的，所以用两个寄存器 通过段地址 x 16 + 偏移地址来对应物理地址")])])])]),v._v(" "),t("li",[t("p",[v._v("数据总线")]),v._v(" "),t("ul",[t("li",[v._v("CPU与内存或其他器件之间的数据传送是通过数据总线来进行的。")]),v._v(" "),t("li",[v._v("数据总线的宽度决定了cpu与外界的数据传送速度（8086 是 16位，能传16位的数据）")])])]),v._v(" "),t("li",[t("p",[v._v("控制总线")]),v._v(" "),t("ul",[t("li",[v._v("cpu通过控制总线对外部器件控制")]),v._v(" "),t("li",[v._v("是不同控制线的集合")]),v._v(" "),t("li",[v._v("控制总线宽度决定了")]),v._v(" "),t("li",[v._v("cpu对外部器件的控制能力")])])])]),v._v(" "),t("h2",{attrs:{id:"内存地址空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存地址空间"}},[v._v("#")]),v._v(" 内存地址空间")]),v._v(" "),t("ul",[t("li",[v._v("cpu地址总线宽度为n，寻址空间2^n B(字节)")]),v._v(" "),t("li",[v._v("8086CPU 的地址总线是20，所以可以寻址 1MB个内存单元。")])]),v._v(" "),t("p",[t("strong",[v._v("把所有物理存储器被看作一个由若干个存储单元组成的逻辑存储器，每个物理存储器在这个逻辑存储器占有一个地址段，即一段地址空间。")])]),v._v(" "),t("h4",{attrs:{id:"物理地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物理地址"}},[v._v("#")]),v._v(" 物理地址")]),v._v(" "),t("p",[v._v("CPU访问内存时，需要给出内存单元的地址。以8086位例，地址总线20，所以最大的寻址空间是1MB，但是CPU是16位的。")]),v._v(" "),t("p",[t("strong",[v._v("最多一次可以处理16位的数据，寄存器的最大宽度是16位。寻址能力只有64KB，所以需要使用两个地址来合成20位的物理地址")])]),v._v(" "),t("p",[t("strong",[v._v("物理地址 = 段地址 * 16（左移四位，就有了20位） + 偏移地址 。")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("      段地址：  1230\n    + 偏移地址： 00C8\n   -------------------\n      物理地址：123C8\n")])])]),t("h3",{attrs:{id:"几个重点知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#几个重点知识"}},[v._v("#")]),v._v(" 几个重点知识")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("内存的一个地址里面住的是一个字节的数据")])]),v._v(" "),t("li",[t("strong",[v._v("32位操作系统的物理地址有 2^32个，因而只能使用4GB的内存")])]),v._v(" "),t("li",[t("strong",[v._v("任何一个32位的程序可操作的逻辑地址是 2^32")])])]),v._v(" "),t("h3",{attrs:{id:"dma-控制器（直接内存访问控制器）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dma-控制器（直接内存访问控制器）"}},[v._v("#")]),v._v(" DMA 控制器（直接内存访问控制器）")]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[v._v("工作原理")]),v._v(" "),t("p",[v._v("首先从磁盘读取来看。")]),v._v(" "),t("ul",[t("li",[v._v("CPU通过设置DMA控制器的寄存器对它进行编程，所以DMA控制器知道将什么数据传送到什么地方")]),v._v(" "),t("li",[v._v("DMA向磁盘发出一个命令，通知它从磁盘读取数据到其内部的缓冲区并检验")])]),v._v(" "),t("p",[v._v("大部分的DMA控制器使用武力地址进行传输。使用物理地址需要操作系统将目标内存缓冲区的虚拟地址转换成物理地址。将该物理地址写入DMA控制器的地址寄存器中")])]),v._v(" "),t("p",[t("strong",[v._v("NodeJs 是单线程，但是读取文件过程中可以执行其他操作，读取完成之后返回一个回调。那么是怎么做到的呢？是CPU读取吗？其实是 DMA硬件支持的，这种机械的劳动是不可能CPU来做，这里是通过南桥芯片上的DMA。简单说一下过程")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("CPU要读取文件 发一个指令给DMA 要读取文件")])]),v._v(" "),t("li",[t("p",[v._v("DMA控制器读取文件到内存里面，可以直接访问内存。")])]),v._v(" "),t("li",[t("p",[v._v("DMA 中断告诉CPU 已经读取完成，放在内存的某个XX地址，"),t("strong",[v._v("这过程中CPU可以干其他的事情")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("当CPU要DMA读取文件时，总线控制权交给了DMA，所以所有的总线都可以控制，可以访问数据了。但是控制权并不是一直DMC控制，而且两个交替分时、轮换掌握 总线控制权。")])])])]),v._v(" "),t("h2",{attrs:{id:"内存分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存分页"}},[v._v("#")]),v._v(" 内存分页")]),v._v(" "),t("h3",{attrs:{id:"内存分段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存分段"}},[v._v("#")]),v._v(" 内存分段")]),v._v(" "),t("p",[v._v("程序是由若干个逻辑分段组成的，如可由代码分段、数据分段、栈段、堆段组成。"),t("strong",[v._v("不同的段是有不同的属性的，所以就用分段（*Segmentation*）的形式把这些段分离出来。")])]),v._v(" "),t("p",[v._v("但是内存分段有两个问题")]),v._v(" "),t("ul",[t("li",[v._v("第一个就是"),t("strong",[v._v("内存碎片")]),v._v("的问题。")]),v._v(" "),t("li",[v._v("第二个就是"),t("strong",[v._v("内存交换的效率低")]),v._v("的问题。")])]),v._v(" "),t("p",[v._v("假设有 1G 的物理内存，用户执行了多个程序，其中：")]),v._v(" "),t("ul",[t("li",[v._v("游戏占用了 512MB 内存")]),v._v(" "),t("li",[v._v("浏览器占用了 128MB 内存")]),v._v(" "),t("li",[v._v("音乐占用了 256 MB 内存。")])]),v._v(" "),t("p",[v._v("这个时候，如果我们关闭了浏览器，则空闲内存还有 1024 - 512 - 256 = 256MB。")]),v._v(" "),t("p",[v._v("如果这个 256MB 不是连续的，被分成了两段 128 MB 内存，这就会导致没有空间再打开一个 200MB 的程序。")]),v._v(" "),t("ul",[t("li",[v._v("外部内存碎片，也就是产生了多个不连续的小物理内存，导致新的程序无法被装载；")]),v._v(" "),t("li",[v._v("内部内存碎片，程序所有的内存都被装载到了物理内存，但是这个程序有部分的内存可能并不是很常使用，这也会导致内存的浪费；")])]),v._v(" "),t("p",[t("strong",[v._v("虽然可以内存交换，但是对于多进程的操作系统，磁盘访问速度太慢，如果内存交换的时候，交换的是一个占内存空间很大的程序，这样整个机器都会显得卡顿。所以出现了内存分页")])]),v._v(" "),t("p",[v._v("分段的好处就是能产生连续的内存空间，但是会出现内存碎片和内存交换的空间太大的问题。")]),v._v(" "),t("p",[v._v("操作系统提供一种机制 将不同进程的虚拟地址和不同内存的物理地址映射起来。如果程序访问虚拟地址的时候，由操作系统转换成不同的物理地址。")]),v._v(" "),t("ul",[t("li",[v._v("我们程序所使用的内存地址叫做"),t("strong",[v._v("虚拟内存地址")]),v._v("（"),t("em",[v._v("Virtual Memory Address")]),v._v("）")]),v._v(" "),t("li",[v._v("实际存在硬件里面的空间地址叫"),t("strong",[v._v("物理内存地址")]),v._v("（"),t("em",[v._v("Physical Memory Address")]),v._v("）。")])]),v._v(" "),t("p",[v._v("操作系统引入了虚拟内存，进程持有的虚拟地址会通过 CPU 芯片中的内存管理单元（MMU）的映射关系，来转换变成物理地址，然后再通过物理地址访问内存，如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-0204ff048148735a260fa5f94f475f14_720w.jpg",alt:"border"}})]),v._v(" "),t("h3",{attrs:{id:"内存分页-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存分页-2"}},[v._v("#")]),v._v(" 内存分页")]),v._v(" "),t("p",[t("strong",[v._v("分页是把整个虚拟和物理内存空间切成一段段固定尺寸的大小")]),v._v("。这样一个连续并且尺寸固定的内存空间，我们叫"),t("strong",[v._v("页")]),v._v("（"),t("em",[v._v("Page")]),v._v("）。在 Linux 下，每一页的大小为 "),t("code",[v._v("4KB")]),v._v("。")]),v._v(" "),t("p",[v._v("虚拟地址与物理地址之间通过"),t("strong",[v._v("页表")]),v._v("来映射，如下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-e63c20d1bace757600fccb051a29eaf6_720w.jpg",alt:"border"}})]),v._v(" "),t("p",[v._v("页表实际上存储在 CPU 的"),t("strong",[v._v("内存管理单元")]),v._v(" （"),t("em",[v._v("MMU")]),v._v("） 中，于是 CPU 就可以直接通过 MMU，找出要实际要访问的物理内存地址。")]),v._v(" "),t("p",[t("strong",[v._v("采用了分页，那么释放的内存都是以页为单位释放的，也就不会产生无法给进程使用的小内存。")])]),v._v(" "),t("p",[v._v("如果内存空间不够，操作系统会把其他正在运行的进程中的「最近没被使用」的内存页面给释放掉，也就是暂时写在硬盘上，称为"),t("strong",[v._v("换出")]),v._v("（"),t("em",[v._v("Swap Out")]),v._v("）。一旦需要的时候，再加载进来，称为"),t("strong",[v._v("换入")]),v._v("（"),t("em",[v._v("Swap In")]),v._v("）。所以，一次性写入磁盘的也只有少数的一个页或者几个页，不会花太多时间，"),t("strong",[v._v("内存交换的效率就相对比较高。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-23f19a580a47fa6c731b32d7df6b6735_720w.jpg",alt:"border"}})]),v._v(" "),t("p",[v._v("在分页机制下，虚拟地址分为两部分，"),t("strong",[v._v("页号")]),v._v("和"),t("strong",[v._v("页内偏移")]),v._v("。页号作为页表的索引，"),t("strong",[v._v("页表")]),v._v("包含物理页每页所在"),t("strong",[v._v("物理内存的基地址")]),v._v("，这个基地址与页内偏移的组合就形成了物理内存地址，")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-f81afcda08a62df36ae13be04b0ea020_720w.jpg",alt:"border"}})]),v._v(" "),t("ul",[t("li",[v._v("把虚拟内存地址，切分成页号和偏移量；")]),v._v(" "),t("li",[v._v("根据页号，从页表里面，查询对应的物理页号；")]),v._v(" "),t("li",[v._v("直接拿物理页号，加上前面的偏移量，就得到了物理内存地址。")])]),v._v(" "),t("p",[t("strong",[v._v("看起来很简单，但是在多进程下就会有问题。这就意味页表非常大")])])])}],!1,null,null,null);_.default=s.exports}}]);