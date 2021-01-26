(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{841:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、为什么要做适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么要做适配"}},[t._v("#")]),t._v(" 一、为什么要做适配")]),t._v(" "),a("ul",[a("li",[t._v("为了适应各种移动端设备，完美呈现应有的布局效果")]),t._v(" "),a("li",[t._v("各个移动端设备，分辨率大小不一致，网页想铺满整个屏幕，并在各种分辨下等比缩放")])]),t._v(" "),a("h2",{attrs:{id:"二、适配方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、适配方案"}},[t._v("#")]),t._v(" 二、适配方案")]),t._v(" "),a("ul",[a("li",[t._v("固定高度，宽度百分比适配-布局非常均匀，适合百分比布局")]),t._v(" "),a("li",[t._v("固定宽度，改变缩放比例适配-什么情况都可以")]),t._v(" "),a("li",[a("code",[t._v("Rem")]),t._v("适配")]),t._v(" "),a("li",[t._v("像素比适配")])]),t._v(" "),a("h2",{attrs:{id:"三、单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、单位"}},[t._v("#")]),t._v(" 三、单位")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("em")]),t._v("根据元素自身的字体大小计算,元素自身 "),a("code",[t._v("16px")]),t._v(" "),a("code",[t._v("1em=16px")])]),t._v(" "),a("li",[a("code",[t._v("Rem")]),t._v(" "),a("code",[t._v("R -> root")]),t._v(" 根节点( "),a("code",[t._v("html")]),t._v(" ) 根据"),a("code",[t._v("html")]),t._v("的字体大小计算其他元素尺寸")])]),t._v(" "),a("h2",{attrs:{id:"四、百分比适配-常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、百分比适配-常用"}},[t._v("#")]),t._v(" 四、百分比适配(常用)")]),t._v(" "),a("blockquote",[a("p",[t._v("固定高度，宽度百分比适配")])]),t._v(" "),a("ul",[a("li",[t._v("根据设置的大小去设置高度，单位可以用"),a("code",[t._v("px")]),t._v(" 百分比 "),a("code",[t._v("auto")])]),t._v(" "),a("li",[t._v("常用"),a("code",[t._v("Flex")]),t._v("布局")]),t._v(" "),a("li",[t._v("百分比宽度")])]),t._v(" "),a("blockquote",[a("p",[t._v("以"),a("code",[t._v("640")]),t._v("设计稿为例，在外层容器上设置最大以及最小的宽")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#wrapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 640px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*设置设计稿的宽度*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("后面的区块布局都用百分比，具体元素大小用"),a("code",[t._v("px")]),t._v("计算")])]),t._v(" "),a("ul",[a("li",[t._v("也就是宽度用百分比，高度用"),a("code",[t._v("px")])]),t._v(" "),a("li",[t._v("高度以及图片不要定死，让它自动撑开")])]),t._v(" "),a("h2",{attrs:{id:"五、rem适配-常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、rem适配-常用"}},[t._v("#")]),t._v(" 五、Rem适配(常用)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("根据屏幕的分辨率动态设置"),a("code",[t._v("html")]),t._v("的文字大小，达到等比缩放的功能")])]),t._v(" "),a("li",[a("p",[t._v("保证"),a("code",[t._v("html")]),t._v("最终算出来的字体大小，不能小于"),a("code",[t._v("12px")])])]),t._v(" "),a("li",[a("p",[t._v("在不同的移动端显示不同的元素比例效果")])]),t._v(" "),a("li",[a("p",[t._v("如果"),a("code",[t._v("html")]),t._v("的"),a("code",[t._v("font-size:20px")]),t._v("的时候，那么此时的"),a("code",[t._v("1rem = 20px")])])]),t._v(" "),a("li",[a("p",[t._v("把设计图的宽度分成多少分之一，根据实际情况")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("rem")]),t._v("做盒子的宽度，"),a("code",[t._v("viewport")]),t._v("缩放")])])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("head")]),t._v("加入常见的"),a("code",[t._v("meta")]),t._v("属性")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("format-detection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("telephone=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-mobile-web-app-capable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-mobile-web-app-status-bar-style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--这个是关键--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0，minimum-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("把这段代码加入"),a("code",[t._v("head")]),t._v("中的"),a("code",[t._v("script")]),t._v("预先加载")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rem适配用这段代码动态计算html的font-size大小")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("win")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" docEl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeRem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" docEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 750是设计稿大小")]),t._v("\n            width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fontS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把设备宽度十等分 1rem=10px")]),t._v("\n        docEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fontS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("changeRem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageshow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persisted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//清除缓存")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("changeRem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeRem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("或者使用淘宝提供的库 https://github.com/amfe/lib-flexible")])]),t._v(" "),a("p",[a("strong",[t._v("布局细节")])]),t._v(" "),a("ul",[a("li",[t._v("结构用"),a("code",[t._v("section")]),t._v("区块划分更语义化")]),t._v(" "),a("li",[t._v("然后在"),a("code",[t._v("body")]),t._v("设置宽度")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("后面的区块都以百分比布局")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section,\nheader")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("把视觉稿中的 px 转换成 rem")])]),t._v(" "),a("blockquote",[a("p",[t._v("首先，目前日常工作当中，视觉设计师给到前端开发人员手中的视觉稿尺寸一般是基于 "),a("code",[t._v("640px")]),t._v(" 、 "),a("code",[t._v("750px")]),t._v(" 以及 "),a("code",[t._v("1125px")]),t._v(" 宽度为准。甚至为什么？大家应该懂的（考虑"),a("code",[t._v("Retina")]),t._v("屏）")])]),t._v(" "),a("blockquote",[a("p",[t._v("假定设计稿的大小为"),a("code",[t._v("750")]),t._v("，那么我们则将整个图分成"),a("code",[t._v("10")]),t._v("等份来看。"),a("code",[t._v("<html>")]),t._v(" 对应的 "),a("code",[t._v("font-size")]),t._v("为"),a("code",[t._v("75px")])])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 75px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("这样一来，对于视觉稿上的元素尺寸换算，只需要原始的 "),a("code",[t._v("px")]),t._v("值 除以 "),a("code",[t._v("rem")]),t._v("基准值 即可")])]),t._v(" "),a("blockquote",[a("p",[t._v("那么，我们现在就可以比对设计稿，比如设计稿中，有一个"),a("code",[t._v("div")]),t._v("元素，宽度，高度都为"),a("code",[t._v("20px")]),t._v(",那么我们这样写即可（可以用 "),a("code",[t._v("markman")]),t._v("标准设计稿的元素大小）")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.27rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*20/75*/")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.27rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("动态计算的"),a("code",[t._v("rem")]),t._v("最后会帮我们动态计算元素在不同屏幕下的宽高")]),t._v(" "),a("li",[t._v("对于设计稿上的每个元素的尺寸在设计稿大小已知的时候，我们需要测量出，然后在用测量的宽高除以设计稿"),a("code",[t._v("750")]),t._v("的十分之一也就是"),a("code",[t._v("75")]),t._v(",得到我们想要的"),a("code",[t._v("rem")]),t._v("。而"),a("code",[t._v("rem")]),t._v("是根据屏幕动态变化的，也就达到了适配的效果。也就是同一套设计稿运用在不同的设备上。")])]),t._v(" "),a("blockquote",[a("p",[t._v("比如当我们切换到"),a("code",[t._v("320")]),t._v("设备大小的时候，这时候"),a("code",[t._v("1rem=32px;")]),t._v(" "),a("code",[t._v("div")]),t._v("的像素实际是"),a("code",[t._v("0.27*32=8.64px")]),t._v(" "),a("code",[t._v("0.27")]),t._v("是我们在已知设计稿是"),a("code",[t._v("750")]),t._v("的情况下计算出来的，"),a("code",[t._v("rem")]),t._v("用来动态计算而已")])]),t._v(" "),a("ul",[a("li",[t._v("对于"),a("code",[t._v("margin")]),t._v(" "),a("code",[t._v("padding")]),t._v(" "),a("code",[t._v("line-height")]),t._v(" "),a("code",[t._v("width")]),t._v(" "),a("code",[t._v("height")]),t._v("使用"),a("code",[t._v("rem")]),t._v("计算")])]),t._v(" "),a("p",[a("strong",[t._v("如何快速计算")])]),t._v(" "),a("blockquote",[a("p",[t._v("在实际生产当中，如果每一次计算 "),a("code",[t._v("px")]),t._v(" 转换 "),a("code",[t._v("rem")]),t._v(" ，或许会觉得非常麻烦")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/flashlizi/cssrem",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("CSSREM")]),a("OutboundLink")],1),t._v(" 是一个"),a("code",[t._v("CSS")]),t._v("的 "),a("code",[t._v("px")]),t._v(" 值转 "),a("code",[t._v("rem")]),t._v(" 值的"),a("code",[t._v("Sublime Text3")]),t._v("自动完成插件")]),t._v(" "),a("li",[t._v("插件效果")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/poetries/cssrem/raw/master/cssrem.gif",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("插件使用方法")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装")]),t._v(" "),a("ul",[a("li",[t._v("下载本项目，比如：git clone https://github.com/flashlizi/cssrem")]),t._v(" "),a("li",[t._v("进入"),a("code",[t._v("packages")]),t._v("目录："),a("code",[t._v("Sublime Text")]),t._v(" -> "),a("code",[t._v("Preferences")]),t._v(" -> "),a("code",[t._v("Browse Packages")]),t._v("...")]),t._v(" "),a("li",[t._v("复制下载的"),a("code",[t._v("cssrem")]),t._v("目录到刚才的packges目录里。")]),t._v(" "),a("li",[t._v("重启"),a("code",[t._v("Sublime Text")])])])]),t._v(" "),a("li",[a("p",[t._v("配置参数")]),t._v(" "),a("ul",[a("li",[t._v("参数配置文件："),a("code",[t._v("Sublime Text -> Preferences -> Package Settings -> cssrem")])])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("px_to_rem")]),t._v(" - "),a("code",[t._v("px")]),t._v("转"),a("code",[t._v("rem")]),t._v("的单位比例，默认为"),a("code",[t._v("40")]),t._v("【根据设计稿来设置，如设计稿"),a("code",[t._v("750")]),t._v("，我们取十分之一即"),a("code",[t._v("75")]),t._v("】。")]),t._v(" "),a("li",[a("code",[t._v("max_rem_fraction_length")]),t._v(" - "),a("code",[t._v("px")]),t._v("转"),a("code",[t._v("rem")]),t._v("的小数部分的最大长度。默认为"),a("code",[t._v("6")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("available_file_types")]),t._v(' - 启用此插件的文件类型。默认为：["'),a("code",[t._v(".css")]),t._v('", "'),a("code",[t._v(".less")]),t._v('", "'),a("code",[t._v(".sass")]),t._v('"]。')])])])]),t._v(" "),a("p",[a("strong",[t._v("文字适配的解决方案")])]),t._v(" "),a("ul",[a("li",[t._v("对于一些标题性的文字，我们依然可以用"),a("code",[t._v("rem")]),t._v("。让他随着屏幕来进行缩放，因为标题性文字一般较大，而较大的文字，点阵对其影响就越小。这样，即使出现奇怪的尺寸，也能够让字体得到很好的渲染。")]),t._v(" "),a("li",[t._v("对于一些正文内容的文字（即站在使用者的角度，你不希望他进行缩放的文字）。我们采用"),a("code",[t._v("px")]),t._v("来进行处理")])]),t._v(" "),a("h2",{attrs:{id:"六、缩放比适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、缩放比适配"}},[t._v("#")]),t._v(" 六、缩放比适配")]),t._v(" "),a("blockquote",[a("p",[t._v("固定宽度，改变缩放比例适配")])]),t._v(" "),a("ul",[a("li",[t._v("设计图的宽度就是网页显示的宽度")]),t._v(" "),a("li",[t._v("改变视口的缩放比例")]),t._v(" "),a("li",[t._v("页面宽度固定死")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩放比例适配方案--用这个代码 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fixedW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设计稿宽度的一半")]),t._v("\n    scale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" fixedW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩放比例")]),t._v("\n    meta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    metaAttr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'viewport'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        content "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width='")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("fixedW"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', initial-scale='")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("scale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', maximum-scale='")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("scale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', user-scalable=0'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" metaAttr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" metaAttr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"七、像素比适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、像素比适配"}},[t._v("#")]),t._v(" 七、像素比适配")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("window.devicePixelRatio")])]),t._v(" "),a("li",[t._v("物理像素是手机屏幕分辨率")]),t._v(" "),a("li",[t._v("独立像素 指"),a("code",[t._v("css")]),t._v("像素 屏幕宽度")]),t._v(" "),a("li",[t._v("像素比 = 物理像素 / "),a("code",[t._v("css宽度")])]),t._v(" "),a("li",[t._v("获取设备的像素比\t"),a("code",[t._v("window.devicePixelRatio")])])]),t._v(" "),a("h2",{attrs:{id:"八、小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、小结"}},[t._v("#")]),t._v(" 八、小结")]),t._v(" "),a("blockquote",[a("p",[t._v("关于移动端布局方案有很多，"),a("code",[t._v("rem")]),t._v("和百分比运用最多的")])]),t._v(" "),a("p",[a("strong",[t._v("相关文章阅读")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.tuicool.com/articles/nmm6reE",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Flexible实现手淘H5页面的终端适配"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://liujinkai.com/2015/06/06/mobile-web-skill/",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端web开发技巧"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://ymblog.net/2015/07/01/%E7%A7%BB%E5%8A%A8%E5%89%8D%E7%AB%AFmeta%E6%A0%87%E7%AD%BE%E8%BD%AC/",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动前端meta标签"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);