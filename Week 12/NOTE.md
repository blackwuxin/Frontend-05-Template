# CSS排版

## 盒

源代码 | 语义 | 表现
---|--- | ---
Tag | Element | Box



HTML代码中可以书写开始标签，结束标签，和自封闭标签。

一对起止标签 ，表示一个元素。

DOM树中存储的是元素和其它类型的节点（Node）。

CSS选择器选中的是元素或伪元素。

CSS选择器选中的元素，在排版时可能产生多个盒。

排版和渲染的基本单位是盒。

## 盒模型

![](./box.png)

## 正常流

我们如何写字？
- 从左到右书写
- 同一行写的文字都是对齐的
- 一行写满了，就换到下一行

### 正常流排版
- 收集盒和文字进行
- 计算盒和文字在行中的排布
- 计算行的排布

![](bfc.png)

### Baseline

inline-block，行内盒，是随之自己里面文字的基线去变化的。

vertical-aglin:top,和行的顶缘对齐
vertical-algin:bottom,和行的底缘对齐

### 正常流的块级排布
float会影响生成的行盒的尺寸

**正常流程只有BFC会发生边距折叠margin collapse**

## Flex排版
- 收集盒进行（没有文字的，只有盒）
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布
- 分行
    - 根据主轴的尺寸，把元素分进行
    - 若设置了no-wrap,则强行分配进第一行
- 计算主轴方向
    - 找出所有flex元素
    - 把主轴方向剩余尺寸按比例分配给这些元素
    - 若剩余空间为负数，所有flex元素为0，等比例压缩剩余元素
- 计算交叉轴方向
    - 根据每一行最大元素尺寸计算行高
    - 根据行高flex-algin（每个元素的属性）,item-aligin（外部容器的属性）,确定元素具体位置

## Animation
- @keyframes定义
- animation:使用
- animation-name 时间曲线
- animation-duration 动画的时长
- animation-timing-function 动画的时间曲线
- animation-delay 动画开始前的延迟
- animation-iteration-count 动画播放的次数
- animation-direction 动画的方向

## Transition
- transition-property 要变换的属性
- transition-duration 要变换的时长
- transition-timing-function 要变换的时间曲线
- transition-delay 延迟

三次贝塞尔曲线
## 渲染和颜色
CMYK、RGB

HSL、HSV

## 绘制
- 几何图形
    - border
    - box-shadow
    - border-radius
- 文字
    - font
    - text-decoration
- 位图
    - background-image