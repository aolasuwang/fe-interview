(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{1399:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、认识mobx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、认识mobx"}},[t._v("#")]),t._v(" 一、认识MobX")]),t._v(" "),a("blockquote",[a("p",[t._v("打印"),a("code",[t._v("mobx")]),t._v("，看看"),a("code",[t._v("mobx")]),t._v("中有什么")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/20191001/8.png",alt:"mobx"}})]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("MobX")]),t._v("的整个流程")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/20191001/9.png",alt:"mobx"}})]),t._v(" "),a("p",[a("strong",[t._v("MobX 和 Redux 的比较")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Redux")]),t._v(" 是单一数据源，而 "),a("code",[t._v("MobX")]),t._v(" 往往是多个 "),a("code",[t._v("store")]),t._v("。"),a("code",[t._v("MobX")]),t._v(" 可以根据应用的 "),a("code",[t._v("UI")]),t._v("、数据或业务逻辑来组织 "),a("code",[t._v("store")]),t._v("，具体如何进行需要你自己进行权衡")]),t._v(" "),a("li",[a("code",[t._v("Redux store")]),t._v(" 使用普通的 "),a("code",[t._v("JavaScript")]),t._v(" 对象结构，"),a("code",[t._v("MobX")]),t._v(" 将常规 "),a("code",[t._v("JavaScript")]),t._v(" 对象包裹，赋予 "),a("code",[t._v("observable")]),t._v(" 的能力，通过隐式订阅，自动跟踪 "),a("code",[t._v("observable")]),t._v(" 的变化。"),a("code",[t._v("MobX")]),t._v(" 是观察引用的，在跟踪函数中（例如："),a("code",[t._v("computed value")]),t._v("、"),a("code",[t._v("reactions")]),t._v("等等），任何被引用的 "),a("code",[t._v("observable")]),t._v(" 的属性都会被记录，一旦引用改变，"),a("code",[t._v("MobX")]),t._v(" 将作出反应。注意，不在跟踪函数中的属性将不会被跟踪，在异步中访问的属性也不会被跟踪")]),t._v(" "),a("li",[a("code",[t._v("Redux")]),t._v(" 的 "),a("code",[t._v("state")]),t._v(" 是只读的，只能通过将之前的 "),a("code",[t._v("state")]),t._v(" 与触发的 "),a("code",[t._v("action")]),t._v(" 结合，产生新的 "),a("code",[t._v("state")]),t._v("，因此是纯净的（"),a("code",[t._v("pure")]),t._v("）。而 "),a("code",[t._v("MobX")]),t._v(" 的 "),a("code",[t._v("state")]),t._v(" 即可读又可写，"),a("code",[t._v("action")]),t._v(" 是非必须的，可以直接赋值改变，因此是不纯净的（Impure）")]),t._v(" "),a("li",[a("code",[t._v("Redux")]),t._v(" 需要你去规范化你的 "),a("code",[t._v("state")]),t._v("，"),a("code",[t._v("Immutable")]),t._v(" 数据使 "),a("code",[t._v("Reducer")]),t._v(" 在更新时需要将状态树的祖先数据进行复制和更新，新的对象会导致与之 "),a("code",[t._v("connect")]),t._v("的所有 "),a("code",[t._v("UI")]),t._v(" 组件都重复渲染。因此"),a("code",[t._v("Redux state")]),t._v(" 不建议进行深层嵌套，或者需要我们在组件中用 "),a("code",[t._v("shouldComponentUpdate")]),t._v(" 优化。而 "),a("code",[t._v("MobX")]),t._v(" 只自动更新你所关心的，不必担心嵌套带来的重渲染问题")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("redux")]),t._v(" 管理的是 ("),a("code",[t._v("STORE")]),t._v(" -> "),a("code",[t._v("VIEW")]),t._v(" -> "),a("code",[t._v("ACTION")]),t._v(") 的整个闭环，而 "),a("code",[t._v("mobx")]),t._v(" 只关心 "),a("code",[t._v("STORE")]),t._v(" -> "),a("code",[t._v("VIEW")]),t._v(" 的部分")])]),t._v(" "),a("p",[a("strong",[t._v("优点")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("基于运行时的数据订阅")]),t._v(" "),a("code",[t._v("mobx")]),t._v(" 的数据依赖始终保持了最小，而且还是基于运行时。而如果用 "),a("code",[t._v("redux")]),t._v("，可能一不小心就多订阅或者少订阅了数据。所以为了达到高性能，我们需要借助 "),a("code",[t._v("PureRenderMixin")]),t._v(" 以及 "),a("code",[t._v("reselect")]),t._v(" 对 "),a("code",[t._v("selector")]),t._v(" 做缓存")]),t._v(" "),a("li",[a("strong",[t._v("通过 OOP 的方式组织领域模型 (domain model)")]),t._v(" "),a("code",[t._v("OOP")]),t._v(" 的方式在某些场景下会比较方便，尤其是容易抽取 "),a("code",[t._v("domain model")]),t._v(" 的时候。进而由于 "),a("code",[t._v("mobx")]),t._v(" 支持引用的方式引用数据，所以可以非常容易得形成模型图 (model graph )，这样可以更好地理解我们的应用。")]),t._v(" "),a("li",[a("strong",[t._v("修改数据方便自然")]),t._v(" "),a("code",[t._v("mobx")]),t._v(" 是基于原生的 "),a("code",[t._v("JavaScript")]),t._v(" 对象、数组和 "),a("code",[t._v("Class")]),t._v("实现的。所以修改数据不需要额外语法成本，也不需要始终返回一个新的数据，而是直接操作数据")])]),t._v(" "),a("p",[a("strong",[t._v("缺点")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("缺最佳实践和社区")]),t._v("  mobx 比较新，遇到的问题可能社区都没有遇到过。并且，mobx 并没有很好的扩展/插件机制")]),t._v(" "),a("li",[a("strong",[t._v("随意修改 store")]),t._v(" 我们都知道 redux 里唯一可以改数据的地方是 reducer，这样可以保证应用的安全稳定；而 mobx 可以随意修改数据，触发更新，给人一种不安全的感觉\n"),a("ul",[a("li",[t._v("最新的"),a("code",[t._v("mobx 2.2")]),t._v(" 加入了 "),a("code",[t._v("action")]),t._v(" 的支持。并且在开启 "),a("code",[t._v("strict mode")]),t._v(" 之后，就只有 "),a("code",[t._v("action")]),t._v(" 可以对数据进行修改，限制数据的修改入口。可以解决这个问题")])])]),t._v(" "),a("li",[a("strong",[t._v("逻辑层的限制")]),t._v(" "),a("ul",[a("li",[t._v("如果更新逻辑不能很好地封装在 "),a("code",[t._v("domain class")]),t._v(" 里，用 "),a("code",[t._v("redux")]),t._v(" 会更合适。另外，"),a("code",[t._v("mobx")]),t._v("缺类 "),a("code",[t._v("redux-saga")]),t._v(" 的库，业务逻辑的整合不知道放哪合适")])])])]),t._v(" "),a("h2",{attrs:{id:"二、核心api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、核心api"}},[t._v("#")]),t._v(" 二、核心API")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/20191001/10.png",alt:"mobx"}})]),t._v(" "),a("h3",{attrs:{id:"_2-1-observable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-observable"}},[t._v("#")]),t._v(" 2.1 @observable")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Observable")]),t._v(" 值可以是JS基本数据类型、引用类型、普通对象、类实例、数组和映射。其修饰的state会暴露出来供观察者使用")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Observable 值可以是JS基本数据类型、引用类型、普通对象、类实例、数组和映射")]),t._v("\n@observable title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is about page'")]),t._v("\n@observable num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算值(computed values)是可以根据现有的状态或其它计算值衍生出的值")]),t._v("\n@computed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("我是computed经过计算的getter,currenct num:")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：当你使用装饰器模式时，@action 中的 this 没有绑定在当前这个实例上，要用过 @action.bound 来绑定 使得 this 绑定在实例对象上")]),t._v("\n@action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bound "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bound "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-observer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-observer"}},[t._v("#")]),t._v(" 2.2 observer")]),t._v(" "),a("blockquote",[a("p",[t._v("可以用作包裹 "),a("code",[t._v("React")]),t._v(" 组件的高阶组件。 在组件的 "),a("code",[t._v("render")]),t._v(" 函数中的任何已使用的 "),a("code",[t._v("observable")]),t._v(" 发生变化时，组件都会自动重新渲染。 注意 "),a("code",[t._v("observer")]),t._v(" 是由 "),a("code",[t._v('"mobx-react"')]),t._v(" 包提供的，而不是 "),a("code",[t._v("mobx")]),t._v(" 本身")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Observer")]),t._v(" 是一个注解，本质上是用 "),a("code",[t._v("mobx.autorun")]),t._v(" 包装了组件的 "),a("code",[t._v("render")]),t._v(" 函数以确保任何组件渲染中使用的数据变化时都可以强制刷新组件")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-computed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-computed"}},[t._v("#")]),t._v(" 2.3 @computed")]),t._v(" "),a("ul",[a("li",[t._v("计算值("),a("code",[t._v("computed values")]),t._v(")是可以根据现有的状态或其它计算值衍生出的值")]),t._v(" "),a("li",[t._v("用于获取由基础 "),a("code",[t._v("state")]),t._v("衍生出来的值。如果基础值没有变，获取衍生值时就会走缓存，这样就不会引起虚拟 DOM 的重新渲染")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[t._v("getter")]),t._v("：获得计算得到的新"),a("code",[t._v("state")]),t._v("并返回。")]),t._v(" "),a("li",[a("code",[t._v("setter")]),t._v("： 不能用来直接改变计算属性的值，但是它们可以用来作“逆向”衍生。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("通过 "),a("code",[t._v("@computed + getter")]),t._v("函数来定义衍生值")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @observable length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    @computed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("squared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("squared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是一个自动的动作，不需要注解")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"_2-4-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-actions"}},[t._v("#")]),t._v(" 2.4 @actions")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("只有在 "),a("code",[t._v("actions")]),t._v(" 中，才可以修改 "),a("code",[t._v("Mobx")]),t._v(" 中 "),a("code",[t._v("state")]),t._v(" 的值")]),t._v(" "),a("li",[t._v("注意：当你使用装饰器模式时，"),a("code",[t._v("@action")]),t._v(" 中的 "),a("code",[t._v("this")]),t._v(" 没有绑定在当前这个实例上，要用过 "),a("code",[t._v("@action.bound")]),t._v(" 来绑定 使得 "),a("code",[t._v("this")]),t._v(" 绑定在实例对象上")])])]),t._v(" "),a("ul",[a("li",[t._v("通过引入 "),a("code",[t._v("mobx")]),t._v(" 定义的严格模式，强制使用 "),a("code",[t._v("action")]),t._v(" 来修改状态")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("configure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mobx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enforceActions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'always'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启严格模式")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("@action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bound "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bound "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-5-autorun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-autorun"}},[t._v("#")]),t._v(" 2.5 autorun")]),t._v(" "),a("ul",[a("li",[t._v("当可观察对象中保存的值发生变化时，可以在"),a("code",[t._v("mobx.autorun")]),t._v("中被观察到。"),a("code",[t._v("observable")]),t._v(" 的值初始化或改变时，自动运行")]),t._v(" "),a("li",[t._v("如果你想响应式的产生一个可以被其它 "),a("code",[t._v("observer")]),t._v(" 使用的值，请使用 "),a("code",[t._v("@computed")]),t._v("，如果你不想产生一个新值，而想要达到一个效果，请使用 "),a("code",[t._v("autorun")]),t._v("。 举例来说，效果是像打印日志、发起网络请求等这样命令式的副作用")])]),t._v(" "),a("h3",{attrs:{id:"_2-6-reactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-reactions"}},[t._v("#")]),t._v(" 2.6 reactions")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Reactions")]),t._v("和计算值很像，但它不是产生一个新的值，而是会产生一些副作用，比如打印到控制台、网络请求、递增地更新 "),a("code",[t._v("React")]),t._v("组件树以修补"),a("code",[t._v("DOM")]),t._v("、等等。 简而言之，"),a("code",[t._v("reactions")]),t._v(" 在 响应式编程和命令式编程之间建立沟通的桥梁")])]),t._v(" "),a("h3",{attrs:{id:"_2-7-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-flow"}},[t._v("#")]),t._v(" 2.7 Flow")]),t._v(" "),a("blockquote",[a("p",[t._v("用法: "),a("code",[t._v("flow(function* (args) { })")])])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("flow()")]),t._v(" 接收 "),a("code",[t._v("generator")]),t._v(" 函数作为它唯一的输入")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" configure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mobx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不允许在动作外部修改状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enforceActions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Store")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @observable githubProjects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    @observable state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pending"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "pending" / "done" / "error"')]),t._v("\n\n\n    fetchProjects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchProjects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <- 注意*号，这是生成器函数！")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("githubProjects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pending"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" projects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchGithubProjectsSomehow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用 yield 代替 await")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" filteredProjects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("somePreprocessing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("projects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步代码自动会被 `action` 包装")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"done"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("githubProjects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" filteredProjects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"三、计数器例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、计数器例子"}},[t._v("#")]),t._v(" 三、计数器例子")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" observer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mobx-react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结合react")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autorun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("computed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mobx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义数据store")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @observable number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  @computed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number:'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用action改变数据，避免混乱")]),t._v("\n  @action "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  @action "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("decrement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把属性注入react组件")]),t._v("\n@observer\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("br "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleInc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleDec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleInc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleDec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"四、应用案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、应用案例"}},[t._v("#")]),t._v(" 四、应用案例")]),t._v(" "),a("blockquote",[a("p",[t._v("https://github.com/poetries/react-mobx-template")])]),t._v(" "),a("h2",{attrs:{id:"五、参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、参考"}},[t._v("#")]),t._v(" 五、参考")]),t._v(" "),a("blockquote",[a("p",[t._v("文档学习 https://cn.mobx.js.org/")])])])}),[],!1,null,null,null);s.default=e.exports}}]);