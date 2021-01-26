(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{837:function(t,_,a){"use strict";a.r(_);var v=a(10),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://image-static.segmentfault.com/462/322/462322984-553e3da07b565_articlex",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("PC")]),t._v("优化手段在"),a("code",[t._v("Mobile")]),t._v("侧同样适用")]),t._v(" "),a("li",[t._v("在"),a("code",[t._v("Mobile")]),t._v("侧我们提出三秒种渲染完成首屏指标")]),t._v(" "),a("li",[t._v("基于第二点，首屏加载"),a("code",[t._v("3")]),t._v("秒完成或使用"),a("code",[t._v("Loading")])]),t._v(" "),a("li",[t._v("基于联通3G网络平均"),a("code",[t._v("338KB/s(2.71Mb/s")]),t._v("），所以首屏资源不应超过"),a("code",[t._v("1014KB")])]),t._v(" "),a("li",[a("code",[t._v("Mobile")]),t._v("侧因手机配置原因，除加载外渲染速度也是优化重点")]),t._v(" "),a("li",[t._v("基于第五点，要合理处理代码减少渲染损耗")]),t._v(" "),a("li",[t._v("基于第二、第五点，所有影响首屏加载和渲染的代码应在处理逻辑中后置")]),t._v(" "),a("li",[t._v("加载完成后用户交互使用时也需注意性能")])]),t._v(" "),a("h2",{attrs:{id:"二、加载优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、加载优化"}},[t._v("#")]),t._v(" 二、加载优化")]),t._v(" "),a("blockquote",[a("p",[t._v("加载过程是最为耗时的过程，可能会占到总耗时的"),a("code",[t._v("80%")]),t._v("时间，因此是优化的重点")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-缓存"}},[t._v("#")]),t._v(" 2.1 缓存")]),t._v(" "),a("blockquote",[a("p",[t._v("使用缓存可以减少向服务器的请求数，节省加载时间，所以所有静态资源都要在服务器端设置缓存，并且尽量使用长"),a("code",[t._v("Cache")]),t._v("（长"),a("code",[t._v("Cache")]),t._v("资源的更新可使用时间戳）")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-压缩html、css、javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-压缩html、css、javascript"}},[t._v("#")]),t._v(" 2.2 压缩HTML、CSS、JavaScript")]),t._v(" "),a("blockquote",[a("p",[t._v("减少资源大小可以加快网页显示速度，所以要对"),a("code",[t._v("HTML")]),t._v("、"),a("code",[t._v("CSS")]),t._v("、"),a("code",[t._v("JavaScript")]),t._v("等进行代码压缩，并在服务器端设置"),a("code",[t._v("GZip")])])]),t._v(" "),a("ul",[a("li",[t._v("a） 压缩（例如，多余的空格、换行符和缩进）")]),t._v(" "),a("li",[t._v("b） 启用"),a("code",[t._v("GZip")])])]),t._v(" "),a("h3",{attrs:{id:"_2-3-无阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-无阻塞"}},[t._v("#")]),t._v(" 2.3 无阻塞")]),t._v(" "),a("blockquote",[a("p",[t._v("写在"),a("code",[t._v("HTML")]),t._v("头部的"),a("code",[t._v("JavaScript")]),t._v("（无异步），和写在"),a("code",[t._v("HTML")]),t._v("标签中的"),a("code",[t._v("Style")]),t._v("会阻塞页面的渲染，因此"),a("code",[t._v("CSS")]),t._v("放在页面头部并使用"),a("code",[t._v("Link")]),t._v("方式引入，避免在"),a("code",[t._v("HTML")]),t._v("标签中写"),a("code",[t._v("Style")]),t._v("，"),a("code",[t._v("JavaScript")]),t._v("放在页面尾部或使用异步方式加载")])]),t._v(" "),a("h3",{attrs:{id:"_2-4-使用首屏加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-使用首屏加载"}},[t._v("#")]),t._v(" 2.4 使用首屏加载")]),t._v(" "),a("blockquote",[a("p",[t._v("首屏的快速显示，可以大大提升用户对页面速度的感知，因此应尽量针对首屏的快速显示做优化。")])]),t._v(" "),a("h3",{attrs:{id:"_2-5-按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-按需加载"}},[t._v("#")]),t._v(" 2.5 按需加载")]),t._v(" "),a("blockquote",[a("p",[t._v("将不影响首屏的资源和当前屏幕资源不用的资源放到用户需要时才加载，可以大大提升重要资源的显示速度和降低总体流量。")])]),t._v(" "),a("p",[a("strong",[t._v("PS：按需加载会导致大量重绘，影响渲染性能")])]),t._v(" "),a("ul",[a("li",[t._v("a） "),a("code",[t._v("LazyLoad")])]),t._v(" "),a("li",[t._v("b） 滚屏加载")]),t._v(" "),a("li",[t._v("c） 通过"),a("code",[t._v("Media Query")]),t._v("加载")])]),t._v(" "),a("h3",{attrs:{id:"_2-6-预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-预加载"}},[t._v("#")]),t._v(" 2.6 预加载")]),t._v(" "),a("blockquote",[a("p",[t._v("大型重资源页面（如游戏）可使用增加"),a("code",[t._v("Loading")]),t._v("的方法，资源加载完成后再显示页面。但"),a("code",[t._v("Loading")]),t._v("时间过长，会造成用户流失。")])]),t._v(" "),a("p",[t._v("对用户行为分析，可以在当前页加载下一页资源，提升速度。")]),t._v(" "),a("ul",[a("li",[t._v("a）可感知"),a("code",[t._v("Loading")])]),t._v(" "),a("li",[t._v("b）不可感知的"),a("code",[t._v("Loading")]),t._v("（如提前加载下一页）")])]),t._v(" "),a("h3",{attrs:{id:"_2-7-压缩图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-压缩图片"}},[t._v("#")]),t._v(" 2.7 压缩图片")]),t._v(" "),a("blockquote",[a("p",[t._v("图片是最占流量的资源，因此尽量避免使用他，使用时选择最合适的格式（实现需求的前提下，以大小判断），合适的大小，然后使用智图压缩，同时在代码中用"),a("code",[t._v("Srcset")]),t._v("来按需显示")])]),t._v(" "),a("p",[a("strong",[t._v("PS：过度压缩图片大小影响图片显示效果")])]),t._v(" "),a("ul",[a("li",[t._v("a）使用智图（ http://zhitu.tencent.com/ ）")]),t._v(" "),a("li",[t._v("b）使用其它方式代替图片(1. 使用"),a("code",[t._v("CSS3")]),t._v(" 2. 使用"),a("code",[t._v("SVG")]),t._v(" 3. 使用"),a("code",[t._v("IconFont")]),t._v("）")]),t._v(" "),a("li",[t._v("c）使用"),a("code",[t._v("Srcset")])]),t._v(" "),a("li",[t._v("d）选择合适的图片(1. "),a("code",[t._v("webP")]),t._v("优于"),a("code",[t._v("JPG")]),t._v("2. "),a("code",[t._v("PNG8")]),t._v("优于"),a("code",[t._v("GIF")]),t._v("）")]),t._v(" "),a("li",[t._v("e）选择合适的大小（1. 首次加载不大于"),a("code",[t._v("1014KB")]),t._v(" 2. 不宽于"),a("code",[t._v("640")]),t._v("（基于手机屏幕一般宽度））")])]),t._v(" "),a("h3",{attrs:{id:"_2-8-减少cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-减少cookie"}},[t._v("#")]),t._v(" 2.8 减少Cookie")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Cookie")]),t._v("会影响加载速度，所以静态资源域名不使用"),a("code",[t._v("Cookie")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"_2-9-避免重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-避免重定向"}},[t._v("#")]),t._v(" 2.9 避免重定向")]),t._v(" "),a("p",[t._v("重定向会影响加载速度，所以在服务器正确设置避免重定向。")]),t._v(" "),a("h3",{attrs:{id:"_2-10-异步加载第三方资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-异步加载第三方资源"}},[t._v("#")]),t._v(" 2.10 异步加载第三方资源")]),t._v(" "),a("p",[t._v("第三方资源不可控会影响页面的加载和显示，因此要异步加载第三方资源")]),t._v(" "),a("h3",{attrs:{id:"_2-11-减少http请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-减少http请求"}},[t._v("#")]),t._v(" 2.11 减少HTTP请求")]),t._v(" "),a("blockquote",[a("p",[t._v("因为手机浏览器同时响应请求为4个请求（"),a("code",[t._v("Android")]),t._v("支持4个，"),a("code",[t._v("iOS")]),t._v(" 5后可支持6个），所以要尽量减少页面的请求数，首次加载同时请求数不能超过4个")])]),t._v(" "),a("ul",[a("li",[t._v("a）合并"),a("code",[t._v("CSS")]),t._v("、"),a("code",[t._v("JavaScript")])]),t._v(" "),a("li",[t._v("b）合并小图片，使用雪碧图")])]),t._v(" "),a("h2",{attrs:{id:"三、脚本执行优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、脚本执行优化"}},[t._v("#")]),t._v(" 三、脚本执行优化")]),t._v(" "),a("blockquote",[a("p",[t._v("脚本处理不当会阻塞页面加载、渲染，因此在使用时需当注意")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("CSS")]),t._v("写在头部，"),a("code",[t._v("JavaScript")]),t._v("写在尾部或异步")]),t._v(" "),a("li",[t._v("避免图片和"),a("code",[t._v("iFrame")]),t._v("等的空"),a("code",[t._v("Src")]),t._v("，空"),a("code",[t._v("Src")]),t._v("会重新加载当前页面，影响速度和效率。")]),t._v(" "),a("li",[t._v("尽量避免重设图片大小")]),t._v(" "),a("li",[t._v("重设图片大小是指在页面、"),a("code",[t._v("CSS")]),t._v("、J"),a("code",[t._v("avaScript")]),t._v("等中多次重置图片大小，多次重设图片大小会引发图片的多次重绘，影响性能")]),t._v(" "),a("li",[t._v("图片尽量避免使用"),a("code",[t._v("DataURL")]),t._v("，"),a("code",[t._v("DataURL")]),t._v("图片没有使用图片的压缩算法文件会变大，并且要解码后再渲染，加载慢耗时长")])]),t._v(" "),a("h2",{attrs:{id:"四、css优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、css优化"}},[t._v("#")]),t._v(" 四、CSS优化")]),t._v(" "),a("blockquote",[a("p",[t._v("尽量避免写在HTML标签中写"),a("code",[t._v("Style")]),t._v("属性")])]),t._v(" "),a("h3",{attrs:{id:"_4-1-css3过渡动画开启硬件加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-css3过渡动画开启硬件加速"}},[t._v("#")]),t._v(" 4.1 css3过渡动画开启硬件加速")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"_4-2-避免css表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-避免css表达式"}},[t._v("#")]),t._v(" 4.2 避免CSS表达式")]),t._v(" "),a("p",[t._v("CSS表达式的执行需跳出CSS树的渲染，因此请避免CSS表达式。")]),t._v(" "),a("h3",{attrs:{id:"_4-3-不滥用float"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-不滥用float"}},[t._v("#")]),t._v(" 4.3 不滥用Float")]),t._v(" "),a("p",[t._v("Float在渲染时计算量比较大，尽量减少使用")]),t._v(" "),a("h3",{attrs:{id:"_4-4-值为0时不需要任何单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-值为0时不需要任何单位"}},[t._v("#")]),t._v(" 4.4 值为0时不需要任何单位")]),t._v(" "),a("p",[t._v("为了浏览器的兼容性和性能，值为"),a("code",[t._v("0")]),t._v("时不要带单位")]),t._v(" "),a("h2",{attrs:{id:"五、javascript执行优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、javascript执行优化"}},[t._v("#")]),t._v(" 五、JavaScript执行优化")]),t._v(" "),a("h3",{attrs:{id:"_5-1-减少重绘和回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-减少重绘和回流"}},[t._v("#")]),t._v(" 5.1 减少重绘和回流")]),t._v(" "),a("ul",[a("li",[t._v("避免不必要的Dom操作")]),t._v(" "),a("li",[t._v("尽量改变"),a("code",[t._v("Class")]),t._v("而不是"),a("code",[t._v("Style")]),t._v("，使用"),a("code",[t._v("classList")]),t._v("代替"),a("code",[t._v("className")])]),t._v(" "),a("li",[t._v("避免使用"),a("code",[t._v("document.write")])]),t._v(" "),a("li",[t._v("减少"),a("code",[t._v("drawImage")])])]),t._v(" "),a("h3",{attrs:{id:"_5-2-touch事件优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-touch事件优化"}},[t._v("#")]),t._v(" 5.2 TOUCH事件优化")]),t._v(" "),a("blockquote",[a("p",[t._v("使用"),a("code",[t._v("touchstart")]),t._v("、"),a("code",[t._v("touchend")]),t._v("代替"),a("code",[t._v("click")]),t._v("，因快影响速度快。但应注意"),a("code",[t._v("Touch")]),t._v("响应过快，易引发误操作")])]),t._v(" "),a("h2",{attrs:{id:"六、渲染优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、渲染优化"}},[t._v("#")]),t._v(" 六、渲染优化")]),t._v(" "),a("h3",{attrs:{id:"_6-1-html使用viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-html使用viewport"}},[t._v("#")]),t._v(" 6.1 HTML使用Viewport")]),t._v(" "),a("p",[a("strong",[t._v("Viewport可以加速页面的渲染，请使用以下代码")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<meta name=”viewport” content=”width=device-width, initial-scale=1″>\n")])])]),a("h3",{attrs:{id:"_6-2-动画优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-动画优化"}},[t._v("#")]),t._v(" 6.2 动画优化")]),t._v(" "),a("ul",[a("li",[t._v("尽量使用"),a("code",[t._v("CSS3")]),t._v("动画")]),t._v(" "),a("li",[t._v("合理使用"),a("code",[t._v("requestAnimationFrame")]),t._v("动画代替"),a("code",[t._v("setTimeout")])]),t._v(" "),a("li",[t._v("适当使用"),a("code",[t._v("Canvas")]),t._v("动画 "),a("code",[t._v("5")]),t._v("个元素以内使用"),a("code",[t._v("css")]),t._v("动画，"),a("code",[t._v("5")]),t._v("个以上使用"),a("code",[t._v("Canvas")]),t._v("动画（"),a("code",[t._v("iOS8")]),t._v("可使用"),a("code",[t._v("webGL")]),t._v("）")])]),t._v(" "),a("h3",{attrs:{id:"_6-4-高频事件优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-高频事件优化"}},[t._v("#")]),t._v(" 6.4 高频事件优化")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Touchmove")]),t._v("、"),a("code",[t._v("Scroll")]),t._v(" 事件可导致多次渲染")])]),t._v(" "),a("ul",[a("li",[t._v("使用"),a("code",[t._v("requestAnimationFrame")]),t._v("监听帧变化，使得在正确的时间进行渲染")]),t._v(" "),a("li",[t._v("增加响应变化的时间间隔，减少重绘次数")])]),t._v(" "),a("h3",{attrs:{id:"_6-5-gpu加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-gpu加速"}},[t._v("#")]),t._v(" 6.5 GPU加速")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("CSS")]),t._v("中以下属性（"),a("code",[t._v("CSS3 transitions")]),t._v("、"),a("code",[t._v("CSS3 3D transforms")]),t._v("、"),a("code",[t._v("Opacity")]),t._v("、"),a("code",[t._v("Canvas")]),t._v("、"),a("code",[t._v("WebGL")]),t._v("、"),a("code",[t._v("Video")]),t._v("）来触发"),a("code",[t._v("GPU")]),t._v("渲染，请合理使用")])]),t._v(" "),a("h2",{attrs:{id:"七、参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、参考"}},[t._v("#")]),t._v(" 七、参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/yexiaochai/p/4219523.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈移动前端的最佳实践-叶小钗"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=s.exports}}]);