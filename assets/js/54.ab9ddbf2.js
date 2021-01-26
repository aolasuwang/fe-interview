(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1301:function(e,t,v){"use strict";v.r(t);var s=v(10),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[e._v("#")]),e._v(" Vuex")]),e._v(" "),s("p",[e._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")]),e._v(" "),s("h2",{attrs:{id:"什么是“状态管理模式”？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是“状态管理模式”？"}},[e._v("#")]),e._v(" 什么是“状态管理模式”？")]),e._v(" "),s("p",[e._v("让我们从一个简单的 Vue 计数应用开始：")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// state")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("data")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// view")]),e._v("\n  template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("\n    <div>{{ count }}</div>\n  ")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// actions")]),e._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("increment")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("++")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("这个状态自管理应用包含以下几个部分：")]),e._v(" "),s("ul",[s("li",[e._v("state，驱动应用的数据源；")]),e._v(" "),s("li",[e._v("view，以声明方式将 state 映射到视图；")]),e._v(" "),s("li",[e._v("actions，响应在 view 上的用户输入导致的状态变化。")])]),e._v(" "),s("p",[e._v("以下是一个表示“单向数据流”理念的极简示意：")]),e._v(" "),s("p",[s("img",{attrs:{src:v(544),alt:""}})]),e._v(" "),s("p",[e._v("但是，当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：")]),e._v(" "),s("ul",[s("li",[e._v("多个视图依赖于同一状态。")]),e._v(" "),s("li",[e._v("来自不同视图的行为需要变更同一状态。")])]),e._v(" "),s("p",[e._v("对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。")]),e._v(" "),s("p",[e._v("因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢？在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为。")]),e._v(" "),s("h2",{attrs:{id:"vuex-核心思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-核心思想"}},[e._v("#")]),e._v(" Vuex 核心思想")]),e._v(" "),s("p",[e._v("Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。有些同学可能会问，那我定义一个全局对象，再去上层封装了一些数据存取的接口不也可以么？")]),e._v(" "),s("p",[e._v("Vuex 和单纯的全局对象有以下两点不同：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")])]),e._v(" "),s("li",[s("p",[e._v("你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。")])])]),e._v(" "),s("p",[e._v("另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，我们的代码将会变得更结构化且易维护。")]),e._v(" "),s("p",[s("img",{attrs:{src:v(545),alt:""}})])])}),[],!1,null,null,null);t.default=a.exports},544:function(e,t,v){e.exports=v.p+"assets/img/vuex.983ea11f.png"},545:function(e,t){e.exports="data:image/png;base64,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"}}]);