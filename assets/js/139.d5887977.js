(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1376:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、浏览器如何渲染网页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、浏览器如何渲染网页"}},[t._v("#")]),t._v(" 一、浏览器如何渲染网页")]),t._v(" "),a("p",[a("strong",[t._v("概述：浏览器渲染一共有五步")])]),t._v(" "),a("ol",[a("li",[t._v("处理 "),a("code",[t._v("HTML")]),t._v(" 并构建 "),a("code",[t._v("DOM")]),t._v(" 树。")]),t._v(" "),a("li",[t._v("处理 "),a("code",[t._v("CSS")]),t._v("构建 "),a("code",[t._v("CSSOM")]),t._v(" 树。")]),t._v(" "),a("li",[t._v("将 "),a("code",[t._v("DOM")]),t._v(" 与 "),a("code",[t._v("CSSOM")]),t._v(" 合并成一个渲染树。")]),t._v(" "),a("li",[t._v("根据渲染树来布局，计算每个节点的位置。")]),t._v(" "),a("li",[t._v("调用 "),a("code",[t._v("GPU")]),t._v(" 绘制，合成图层，显示在屏幕上")])]),t._v(" "),a("blockquote",[a("p",[t._v("第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的渲染")])]),t._v(" "),a("p",[t._v("具体如下图过程如下图所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/19.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/20.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("渲染")])]),t._v(" "),a("ul",[a("li",[t._v("网页生成的时候，至少会渲染一次")]),t._v(" "),a("li",[t._v("在用户访问的过程中，还会不断重新渲染")])]),t._v(" "),a("blockquote",[a("p",[t._v("重新渲染需要重复之前的第四步(重新生成布局)+第五步(重新绘制)或者只有第五个步(重新绘制)")])]),t._v(" "),a("ul",[a("li",[t._v("在构建 "),a("code",[t._v("CSSOM")]),t._v(" 树时，会阻塞渲染，直至 "),a("code",[t._v("CSSOM")]),t._v("树构建完成。并且构建 "),a("code",[t._v("CSSOM")]),t._v(" 树是一个十分消耗性能的过程，所以应该尽量保证层级扁平，减少过度层叠，越是具体的 "),a("code",[t._v("CSS")]),t._v(" 选择器，执行速度越慢")]),t._v(" "),a("li",[t._v("当 "),a("code",[t._v("HTML")]),t._v(" 解析到 "),a("code",[t._v("script")]),t._v(" 标签时，会暂停构建 "),a("code",[t._v("DOM")]),t._v("，完成后才会从暂停的地方重新开始。也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 "),a("code",[t._v("JS")]),t._v(" 文件。并且"),a("code",[t._v("CSS")]),t._v("也会影响 "),a("code",[t._v("JS")]),t._v(" 的执行，只有当解析完样式表才会执行 "),a("code",[t._v("JS")]),t._v("，所以也可以认为这种情况下，"),a("code",[t._v("CSS")]),t._v(" 也会暂停构建 "),a("code",[t._v("DOM")])])]),t._v(" "),a("h2",{attrs:{id:"二、浏览器渲染五个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、浏览器渲染五个阶段"}},[t._v("#")]),t._v(" 二、浏览器渲染五个阶段")]),t._v(" "),a("h3",{attrs:{id:"_2-1-第一步：解析html标签，构建dom树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-第一步：解析html标签，构建dom树"}},[t._v("#")]),t._v(" 2.1 第一步：解析HTML标签，构建DOM树")]),t._v(" "),a("blockquote",[a("p",[t._v("在这个阶段，引擎开始解析"),a("code",[t._v("html")]),t._v("，解析出来的结果会成为一棵"),a("code",[t._v("dom")]),t._v("树\n"),a("code",[t._v("dom")]),t._v("的目的至少有"),a("code",[t._v("2")]),t._v("个")])]),t._v(" "),a("ul",[a("li",[t._v("作为下个阶段渲染树状图的输入")]),t._v(" "),a("li",[t._v("成为网页和脚本的交互界面。(最常用的就是"),a("code",[t._v("getElementById")]),t._v("等等)")])]),t._v(" "),a("p",[a("strong",[t._v("当解析器到达script标签的时候，发生下面四件事情")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("html")]),t._v("解析器停止解析,")]),t._v(" "),a("li",[t._v("如果是外部脚本，就从外部网络获取脚本代码")]),t._v(" "),a("li",[t._v("将控制权交给"),a("code",[t._v("js")]),t._v("引擎，执行"),a("code",[t._v("js")]),t._v("代码")]),t._v(" "),a("li",[t._v("恢复"),a("code",[t._v("html")]),t._v("解析器的控制权")])]),t._v(" "),a("blockquote",[a("p",[t._v("由此可以得到第一个结论1")])]),t._v(" "),a("ul",[a("li",[t._v("由于"),a("code",[t._v("<script>")]),t._v("标签是阻塞解析的，将脚本放在网页尾部会加速代码渲染。")]),t._v(" "),a("li",[a("code",[t._v("defer")]),t._v("和"),a("code",[t._v("async")]),t._v("属性也能有助于加载外部脚本。")]),t._v(" "),a("li",[a("code",[t._v("defer")]),t._v("使得脚本会在"),a("code",[t._v("dom")]),t._v("完整构建之后执行；")]),t._v(" "),a("li",[a("code",[t._v("async")]),t._v("标签使得脚本只有在完全"),a("code",[t._v("available")]),t._v("才执行，并且是以非阻塞的方式进行的")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-第二步：解析css标签，构建cssom树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-第二步：解析css标签，构建cssom树"}},[t._v("#")]),t._v(" 2.2 第二步：解析CSS标签，构建CSSOM树")]),t._v(" "),a("ul",[a("li",[t._v("我们已经看到"),a("code",[t._v("html")]),t._v("解析器碰到脚本后会做的事情，接下来我们看下"),a("code",[t._v("html")]),t._v("解析器碰到样式表会发生的情况")]),t._v(" "),a("li",[a("code",[t._v("js")]),t._v("会阻塞解析，因为它会修改文档("),a("code",[t._v("document")]),t._v(")。"),a("code",[t._v("css")]),t._v("不会修改文档的结构，如果这样的话，似乎看起来"),a("code",[t._v("css")]),t._v("样式不会阻塞浏览器"),a("code",[t._v("html")]),t._v("解析。但是事实上 "),a("code",[t._v("css")]),t._v("样式表是阻塞的。阻塞是指当"),a("code",[t._v("cssom")]),t._v("树建立好之后才会进行下一步的解析渲染")])]),t._v(" "),a("p",[a("strong",[t._v("通过以下手段可以减轻cssom带来的影响")])]),t._v(" "),a("ul",[a("li",[t._v("将"),a("code",[t._v("script")]),t._v("脚本放在页面底部")]),t._v(" "),a("li",[t._v("尽可能快的加载"),a("code",[t._v("css")]),t._v("样式表")]),t._v(" "),a("li",[t._v("将样式表按照"),a("code",[t._v("media type")]),t._v("和"),a("code",[t._v("media query")]),t._v("区分，这样有助于我们将"),a("code",[t._v("css")]),t._v("资源标记成非阻塞渲染的资源。")]),t._v(" "),a("li",[t._v("非阻塞的资源还是会被浏览器下载，只是优先级较低")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-第三步：把dom和cssom组合成渲染树（render-tree）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-第三步：把dom和cssom组合成渲染树（render-tree）"}},[t._v("#")]),t._v(" 2.3 第三步：把DOM和CSSOM组合成渲染树（render tree）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/21.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_2-4-第四步：在渲染树的基础上进行布局，计算每个节点的几何结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-第四步：在渲染树的基础上进行布局，计算每个节点的几何结构"}},[t._v("#")]),t._v(" 2.4 第四步：在渲染树的基础上进行布局，计算每个节点的几何结构")]),t._v(" "),a("blockquote",[a("p",[t._v("布局("),a("code",[t._v("layout")]),t._v(")：定位坐标和大小，是否换行，各种"),a("code",[t._v("position")]),t._v(", "),a("code",[t._v("overflow")]),t._v(", "),a("code",[t._v("z-index")]),t._v("属性")])]),t._v(" "),a("h3",{attrs:{id:"_2-5-调用-gpu-绘制，合成图层，显示在屏幕上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-调用-gpu-绘制，合成图层，显示在屏幕上"}},[t._v("#")]),t._v(" 2.5 调用 GPU 绘制，合成图层，显示在屏幕上")]),t._v(" "),a("blockquote",[a("p",[t._v("将渲染树的各个节点绘制到屏幕上，这一步被称为绘制"),a("code",[t._v("painting")])])]),t._v(" "),a("h2",{attrs:{id:"三、渲染优化相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、渲染优化相关"}},[t._v("#")]),t._v(" 三、渲染优化相关")]),t._v(" "),a("h3",{attrs:{id:"_3-1-load-和-domcontentloaded-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-load-和-domcontentloaded-区别"}},[t._v("#")]),t._v(" 3.1 Load 和 DOMContentLoaded 区别")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Load")]),t._v(" 事件触发代表页面中的 "),a("code",[t._v("DOM")]),t._v("，"),a("code",[t._v("CSS")]),t._v("，"),a("code",[t._v("JS")]),t._v("，图片已经全部加载完毕。")]),t._v(" "),a("li",[a("code",[t._v("DOMContentLoaded")]),t._v(" 事件触发代表初始的 "),a("code",[t._v("HTML")]),t._v(" 被完全加载和解析，不需要等待 "),a("code",[t._v("CSS")]),t._v("，"),a("code",[t._v("JS")]),t._v("，图片加载")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-图层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-图层"}},[t._v("#")]),t._v(" 3.2 图层")]),t._v(" "),a("blockquote",[a("p",[t._v("一般来说，可以把普通文档流看成一个图层。特定的属性可以生成一个新的图层。不同的图层渲染互不影响，所以对于某些频繁需要渲染的建议单独生成一个新图层，提高性能。但也不能生成过多的图层，会引起反作用。")])]),t._v(" "),a("p",[a("strong",[t._v("通过以下几个常用属性可以生成新图层")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("3D")]),t._v(" 变换："),a("code",[t._v("translate3d")]),t._v("、"),a("code",[t._v("translateZ")])]),t._v(" "),a("li",[a("code",[t._v("will-change")])]),t._v(" "),a("li",[a("code",[t._v("video")]),t._v("、"),a("code",[t._v("iframe")]),t._v(" 标签")]),t._v(" "),a("li",[t._v("通过动画实现的 "),a("code",[t._v("opacity")]),t._v(" 动画转换")]),t._v(" "),a("li",[a("code",[t._v("position: fixed")])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-重绘（repaint）和回流（reflow）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-重绘（repaint）和回流（reflow）"}},[t._v("#")]),t._v(" 3.3 重绘（Repaint）和回流（Reflow）")]),t._v(" "),a("blockquote",[a("p",[t._v("重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大")])]),t._v(" "),a("ul",[a("li",[t._v("重绘是当节点需要更改外观而不会影响布局的，比如改变 "),a("code",[t._v("color")]),t._v(" 就叫称为重绘")]),t._v(" "),a("li",[t._v("回流是布局或者几何属性需要改变就称为回流。")])]),t._v(" "),a("blockquote",[a("p",[t._v("回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流")])]),t._v(" "),a("p",[a("strong",[t._v("以下几个动作可能会导致性能问题")])]),t._v(" "),a("ul",[a("li",[t._v("改变 "),a("code",[t._v("window")]),t._v(" 大小")]),t._v(" "),a("li",[t._v("改变字体")]),t._v(" "),a("li",[t._v("添加或删除样式")]),t._v(" "),a("li",[t._v("文字改变")]),t._v(" "),a("li",[t._v("定位或者浮动")]),t._v(" "),a("li",[t._v("盒模型")])]),t._v(" "),a("p",[a("strong",[t._v("很多人不知道的是，重绘和回流其实和 Event loop 有关")])]),t._v(" "),a("ul",[a("li",[t._v("当 "),a("code",[t._v("Event loop")]),t._v(" 执行完"),a("code",[t._v("Microtasks")]),t._v(" 后，会判断 "),a("code",[t._v("document")]),t._v(" 是否需要更新。因为浏览器是 "),a("code",[t._v("60Hz")]),t._v(" 的刷新率，每 "),a("code",[t._v("16ms")]),t._v(" 才会更新一次。")]),t._v(" "),a("li",[t._v("然后判断是否有 "),a("code",[t._v("resize")]),t._v(" 或者 "),a("code",[t._v("scroll")]),t._v(" ，有的话会去触发事件，所以 "),a("code",[t._v("resize")]),t._v(" 和 "),a("code",[t._v("scroll")]),t._v(" 事件也是至少 "),a("code",[t._v("16ms")]),t._v("才会触发一次，并且自带节流功能。")]),t._v(" "),a("li",[t._v("判断是否触发了 "),a("code",[t._v("media query")])]),t._v(" "),a("li",[t._v("更新动画并且发送事件")]),t._v(" "),a("li",[t._v("判断是否有全屏操作事件")]),t._v(" "),a("li",[t._v("执行 "),a("code",[t._v("requestAnimationFrame")]),t._v(" 回调")]),t._v(" "),a("li",[t._v("执行 "),a("code",[t._v("IntersectionObserver")]),t._v(" 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好")]),t._v(" "),a("li",[t._v("更新界面")]),t._v(" "),a("li",[t._v("以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 "),a("code",[t._v("requestIdleCallback")]),t._v(" 回调")])]),t._v(" "),a("p",[a("strong",[t._v("常见的引起重绘的属性")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("color")])]),t._v(" "),a("li",[a("code",[t._v("border-style")])]),t._v(" "),a("li",[a("code",[t._v("visibility")])]),t._v(" "),a("li",[a("code",[t._v("background")])]),t._v(" "),a("li",[a("code",[t._v("text-decoration")])]),t._v(" "),a("li",[a("code",[t._v("background-image")])]),t._v(" "),a("li",[a("code",[t._v("background-position")])]),t._v(" "),a("li",[a("code",[t._v("background-repeat")])]),t._v(" "),a("li",[a("code",[t._v("outline-color")])]),t._v(" "),a("li",[a("code",[t._v("outline")])]),t._v(" "),a("li",[a("code",[t._v("outline-style")])]),t._v(" "),a("li",[a("code",[t._v("border-radius")])]),t._v(" "),a("li",[a("code",[t._v("outline-width")])]),t._v(" "),a("li",[a("code",[t._v("box-shadow")])]),t._v(" "),a("li",[a("code",[t._v("background-size")])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-常见引起回流属性和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-常见引起回流属性和方法"}},[t._v("#")]),t._v(" 3.4 常见引起回流属性和方法")]),t._v(" "),a("blockquote",[a("p",[t._v("任何会改变元素几何信息(元素的位置和尺寸大小)的操作，都会触发重排，下面列一些栗子")])]),t._v(" "),a("ul",[a("li",[t._v("添加或者删除可见的"),a("code",[t._v("DOM")]),t._v("元素；")]),t._v(" "),a("li",[t._v("元素尺寸改变——边距、填充、边框、宽度和高度")]),t._v(" "),a("li",[t._v("内容变化，比如用户在"),a("code",[t._v("input")]),t._v("框中输入文字")]),t._v(" "),a("li",[t._v("浏览器窗口尺寸改变——"),a("code",[t._v("resize")]),t._v("事件发生时")]),t._v(" "),a("li",[t._v("计算 "),a("code",[t._v("offsetWidth")]),t._v(" 和 "),a("code",[t._v("offsetHeight")]),t._v(" 属性")]),t._v(" "),a("li",[t._v("设置 "),a("code",[t._v("style")]),t._v(" 属性的值")])]),t._v(" "),a("p",[a("strong",[t._v("回流影响的范围")])]),t._v(" "),a("blockquote",[a("p",[t._v("由于浏览器渲染界面是基于流失布局模型的，所以触发重排时会对周围DOM重新排列，影响的范围有两种")])]),t._v(" "),a("ul",[a("li",[t._v("全局范围：从根节点"),a("code",[t._v("html")]),t._v("开始对整个渲染树进行重新布局。")]),t._v(" "),a("li",[t._v("局部范围：对渲染树的某部分或某一个渲染对象进行重新布局")])]),t._v(" "),a("p",[a("strong",[t._v("全局范围回流")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Name:"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("BDing"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("male"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("coding"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("loving"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("当"),a("code",[t._v("p")]),t._v("节点上发生"),a("code",[t._v("reflow")]),t._v("时，"),a("code",[t._v("hello")]),t._v("和"),a("code",[t._v("body")]),t._v("也会重新渲染，甚至"),a("code",[t._v("h5")]),t._v("和"),a("code",[t._v("ol")]),t._v("都会收到影响")])]),t._v(" "),a("p",[a("strong",[t._v("局部范围回流")])]),t._v(" "),a("blockquote",[a("p",[t._v("用局部布局来解释这种现象：把一个"),a("code",[t._v("dom")]),t._v("的宽高之类的几何信息定死，然后在"),a("code",[t._v("dom")]),t._v("内部触发重排，就只会重新渲染该"),a("code",[t._v("dom")]),t._v("内部的元素，而不会影响到外界")])]),t._v(" "),a("h3",{attrs:{id:"_3-5-减少重绘和回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-减少重绘和回流"}},[t._v("#")]),t._v(" 3.5 减少重绘和回流")]),t._v(" "),a("blockquote",[a("p",[t._v("使用 "),a("code",[t._v("translate")]),t._v(" 替代 "),a("code",[t._v("top")])])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引起回流")]),t._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100px'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("visibility")]),t._v(" 替换 "),a("code",[t._v("display: none")]),t._v(" ，因为前者只会引起重绘，后者会引发回流（改变了布局）")]),t._v(" "),a("li",[t._v("把 "),a("code",[t._v("DOM")]),t._v(" 离线后修改，比如：先把 "),a("code",[t._v("DOM")]),t._v(" 给 "),a("code",[t._v("display:none")]),t._v(" (有一次 "),a("code",[t._v("Reflow)")]),t._v("，然后你修改"),a("code",[t._v("100")]),t._v("次，然后再把它显示出来")]),t._v(" "),a("li",[t._v("不要把 "),a("code",[t._v("DOM")]),t._v(" 结点的属性值放在一个循环里当成循环里的变量")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 offsetTop 会导致回流，因为需要去获取正确的值")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("不要使用 "),a("code",[t._v("table")]),t._v(" 布局，可能很小的一个小改动会造成整个 "),a("code",[t._v("table")]),t._v(" 的重新布局")]),t._v(" "),a("li",[t._v("动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 "),a("code",[t._v("requestAnimationFrame")])]),t._v(" "),a("li",[a("code",[t._v("CSS")]),t._v("选择符从右往左匹配查找，避免 "),a("code",[t._v("DOM")]),t._v("深度过深")]),t._v(" "),a("li",[t._v("将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 "),a("code",[t._v("video")]),t._v("标签，浏览器会自动将该节点变为图层。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/22.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/23.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://blog.poetries.top/2018/01/12/fed-performance-optimization/#%E5%85%AD%E3%80%81%E9%87%8D%E7%BB%98%E4%B8%8E%E5%9B%9E%E6%B5%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("重绘与回流"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);