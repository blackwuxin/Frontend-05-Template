# CSS 选择器

## 选择器语法

- 简单的选择器

  - `*`

    通用选择器，可以选中任何元素

  - div svg|a

    选中 tagName 属性，单竖线一个我们命名空间的分隔符，在 html 里面，它的命名空间的分隔符是冒号。svg 和 html 命令空间中重名的元素只有一个 a。

  - .cls

    以.开头的 class 选择器，class 可以用空白做分隔符，指定多个 class

  - #id

    以#开头的 id 选择器,必须是严格匹配。id 里面可以加减号等各种符号

  - `[attr=value]`

    属性选择器，囊括了 class 属性选择器和 id 属性选择器。前半部分是 name，后半部分是值。

    =号前面可以加~，表示和 class 一样，支持拿空格分隔的值得序列。

    如果在前面加单竖线，表示这个属性以这个值开头即可

  - :hover

    伪类是以冒号开头，它主要是一些元素的特殊状态，多半用于交互。带函数的伪类选择。

  - ::before

    伪元素原则器，一般以双冒号开头，但实际上你书写的时候你以单冒号开头也算对。

    它相对来说是选中一些原本不存在的元素。

- 复合选择器

  与的关系，必须同时 match

  - `<简单选择器> <简单选择器> <简单选择器>`
  - `*`或`div`必须写在最前面，伪类、伪元素一定要写在最后面

- 复杂选择器

  - `<复合选择器> <sp> <复合选择器>`

    表示子孙选择器，即当前选择必须要空格左边的一个父节点

  - `<复合选择器> ">" <复合选择器>`

    父子选择器，必须是它的直接父元素

  - `<复合选择器> "~" <复合选择器>`
  - `<复合选择器> "+" <复合选择器>`

    针对邻接关系进行选择

  - `<复合选择器> "||" <复合选择器>`

    selecotor Level 4 才有的，当我们做表格的是，表示可以选中某一个列

## 选择器优先级

- 简单选择器计数
- !important > 行内样式>ID 选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

CSS 优先级：是由四个级别和各级别的出现次数决定的。

四个级别分别为：行内选择符、ID 选择符、类别选择符、元素选择符。

优先级的算法：

每个规则对应一个初始"四位数"：0、0、0、0

若是 行内选择符，则加 1、0、0、0

若是 ID 选择符，则加 0、1、0、0

若是 类选择符/属性选择符/伪类选择符，则分别加 0、0、1、0

若是 元素选择符/伪元素选择符，则分别加 0、0、0、1

算法：将每条规则中，选择符对应的数相加后得到的”四位数“，从左到右进行比较，大的优先级越高。　　
```
#id div.a#id
[0,2,1,1]
S= 0*N^3 + 2*N^2+1*N^1+1
取N=1000000
S=20000001000001
```
练习：

- `div#a.b .c[id=x]`

    [0,1,3,1]
- `#a:not(#b)`

    [0,2,1,0]
- `*.a`

    [0,0,1,0]

- `div.a`

    [0,0,1,1]
## 伪类
- 链接/行为
    - :any-link

         匹配所有的超链接

         link+vistied = any-link
    - :link :visited

      :link 匹配还没有访问过的超链接
      :visited 匹配已经访问过的超链接
      
    - :hover
    - :active
    - :focus
    - :target

     给作为锚点的a标签使用

- 树形结构
    - :empty
    - :nth-child()
    - :nth-last-child()
    - :first-child :last-child :only-child

- 逻辑型
    - :not伪类
    - :where :has （Level 4)
## 伪元素
- ::before
- ::after

    一旦应用了before和after的属性，declaration里面就可以写content属性。像一个真正的DOM元素一样，可以生成盒，来参与后续的排版和渲染不正常的元素是没法写content属性的。

    可以理解为通过选择器向界面上添加了一个不存在的元素。
- ::first-line

    选中第一行，第一行是已经完成排版之后的结果

    - font系列
    - color系列
    - background系列
    - word-spacing
    - letter-spacing
    - text-decoration
    - text-transform
    - line-height
- ::first-letter

    选中第一个字母

    - font系列
    - color系列
    - background系列
    - word-spacing
    - letter-spacing
    - text-decoration
    - text-transform
    - line-height
    - float
    - vertical-align
    - 盒模型系列：margin,padding,border

两种伪元素机制，一种是无中生有，第二种是把一些特定逻辑意义的文字给括起来。


   
思考题：

- 为什么first-letter可以设置float之类的，而first-line不行？

第一行是已经完成排版之后的结果，不能再设置float之类进行重新布局。