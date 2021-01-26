(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{1181:function(_,v,e){"use strict";e.r(v);var a=e(10),t=Object(a.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"服务器的缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器的缓存控制"}},[_._v("#")]),_._v(" 服务器的缓存控制")]),_._v(" "),e("p",[_._v("为了更好地说明缓存的运行机制，下面我用“生鲜速递”作为比喻，看看缓存是如何工作的。")]),_._v(" "),e("p",[_._v("夏天到了，天气很热。你想吃西瓜消暑，于是打开冰箱，但很不巧，冰箱是空的。不过没事，现在物流很发达，给生鲜超市打个电话，不一会儿，就给你送来一个 8 斤的沙瓤大西瓜，上面还贴着标签：“保鲜期 5 天”。好了，你把它放进冰箱，想吃的时候随时拿出来。")]),_._v(" "),e("p",[_._v("在这个场景里，“生鲜超市”就是 Web 服务器，“你”就是浏览器，“冰箱”就是浏览器内部的缓存。整个流程翻译成 HTTP 就是")]),_._v(" "),e("ul",[e("li",[_._v("浏览器发现缓存无数据，于是发送请求，向服务器获取资源；")]),_._v(" "),e("li",[_._v("服务器响应请求，返回资源，同时标记资源的有效期；")]),_._v(" "),e("li",[_._v("浏览器缓存资源，等待下次重用。")])]),_._v(" "),e("p",[e("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/26.png",alt:""}})]),_._v(" "),e("p",[_._v("服务器标记资源有效期使用的头字段是“Cache-Control”，里面的值“max-age=30”就是资源的有效时间，相当于告诉浏览器，“这个页面只能缓存 30 秒，之后就算是过期，不能用。”")]),_._v(" "),e("p",[_._v("你可能要问了，让浏览器直接缓存数据就好了，为什么要加个有效期呢？")]),_._v(" "),e("p",[_._v("这是因为网络上的数据随时都在变化，不能保证它稍后的一段时间还是原来的样子。就像生鲜超市给你快递的西瓜，只有 5 天的保鲜期，过了这个期限最好还是别吃，不然可能会闹肚子。")]),_._v(" "),e("p",[_._v("“Cache-Control”字段里的“max-age”和上一讲里 Cookie 有点像，都是标记资源的有效期。")]),_._v(" "),e("p",[_._v("但我必须提醒你注意，这里的 max-age 是“生存时间”（又叫“新鲜度”“缓存寿命”，类似 TTL，Time-To-Live），时间的计算起点是响应报文的创建时刻（即 Date 字段，也就是离开服务器的时刻），而不是客户端收到报文的时刻，也就是说包含了在链路传输过程中所有节点所停留的时间。")]),_._v(" "),e("p",[_._v("比如，服务器设定“max-age=5”，但因为网络质量很糟糕，等浏览器收到响应报文已经过去了 4 秒，那么这个资源在客户端就最多能够再存 1 秒钟，之后就会失效。")]),_._v(" "),e("p",[_._v("“max-age”是 HTTP 缓存控制最常用的属性，此外在响应报文里还可以用其他的属性来更精确地指示浏览器应该如何使用缓存")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("no_store")]),_._v("：不允许缓存，用于某些变化非常频繁的数据，例如秒杀页面；")]),_._v(" "),e("li",[e("code",[_._v("no_cache")]),_._v("：它的字面含义容易与 no_store 搞混，实际的意思并不是不允许缓存，而是可以缓存，但在使用之前必须要去服务器验证是否过期，是否有最新的版本；")]),_._v(" "),e("li",[e("code",[_._v("must-revalidate")]),_._v("：又是一个和 no_cache 相似的词，它的意思是如果缓存不过期就可以继续使用，但过期了如果还想用就必须去服务器验证。")])]),_._v(" "),e("p",[_._v("听的有点糊涂吧。没关系，我拿生鲜速递来举例说明一下：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("no_store")]),_._v("：买来的西瓜不允许放进冰箱，要么立刻吃，要么立刻扔掉；")]),_._v(" "),e("li",[e("code",[_._v("no_cache")]),_._v("：可以放进冰箱，但吃之前必须问超市有没有更新鲜的，有就吃超市里的；")]),_._v(" "),e("li",[e("code",[_._v("must-revalidate")]),_._v("：可以放进冰箱，保鲜期内可以吃，过期了就要问超市让不让吃")])]),_._v(" "),e("blockquote",[e("p",[_._v("把服务器的缓存控制策略画了一个流程图，对照着它你就可以在今后的后台开发里明确“Cache-Control”的用法了")])]),_._v(" "),e("p",[e("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/27.png",alt:""}})]),_._v(" "),e("h2",{attrs:{id:"客户端的缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端的缓存控制"}},[_._v("#")]),_._v(" 客户端的缓存控制")]),_._v(" "),e("p",[_._v("现在冰箱里已经有了“缓存”的西瓜，是不是就可以直接开吃了呢？")]),_._v(" "),e("p",[_._v("你可以在 Chrome 里点几次“刷新”按钮，估计你会失望，页面上的 ID 一直在变，根本不是缓存的结果，明明说缓存 30 秒，怎么就不起作用呢？")]),_._v(" "),e("p",[_._v("其实不止服务器可以发“Cache-Control”头，浏览器也可以发“Cache-Control”，也就是说请求 - 应答的双方都可以用这个字段进行缓存控制，互相协商缓存的使用策略。")]),_._v(" "),e("p",[_._v("当你点“刷新”按钮的时候，浏览器会在请求头里加一个“Cache-Control: max-age=0”。因为 max-age 是“生存时间”，max-age=0 的意思就是“我要一个最最新鲜的西瓜”，而本地缓存里的数据至少保存了几秒钟，所以浏览器就不会使用缓存，而是向服务器发请求。服务器看到 max-age=0，也就会用一个最新生成的报文回应浏览器。")]),_._v(" "),e("p",[e("strong",[_._v("Ctrl+F5 的“强制刷新”又是什么样的呢？")])]),_._v(" "),e("p",[_._v("它其实是发了一个“"),e("code",[_._v("Cache-Control: no-cache")]),_._v("”，含义和“"),e("code",[_._v("max-age=0")]),_._v("”基本一样，就看后台的服务器怎么理解，通常两者的效果是相同的")]),_._v(" "),e("h2",{attrs:{id:"条件请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条件请求"}},[_._v("#")]),_._v(" 条件请求")]),_._v(" "),e("p",[_._v("浏览器用“Cache-Control”做缓存控制只能是刷新数据，不能很好地利用缓存数据，又因为缓存会失效，使用前还必须要去服务器验证是否是最新版。")]),_._v(" "),e("p",[_._v("那么该怎么做呢？")]),_._v(" "),e("p",[_._v("浏览器可以用两个连续的请求组成“验证动作”：先是一个 HEAD，获取资源的修改时间等元信息，然后与缓存数据比较，如果没有改动就使用缓存，节省网络流量，否则就再发一个 GET 请求，获取最新的版本。")]),_._v(" "),e("p",[_._v("但这样的两个请求网络成本太高了，所以 HTTP 协议就定义了一系列“If”开头的“条件请求”字段，专门用来检查验证资源是否过期，把两个请求才能完成的工作合并在一个请求里做。而且，验证的责任也交给服务器，浏览器只需“坐享其成”。")]),_._v(" "),e("p",[_._v("条件请求一共有 5 个头字段，我们最常用的是“if-Modified-Since”和“If-None-Match”这两个。需要第一次的响应报文预先提供“Last-modified”和“ETag”，然后第二次请求时就可以带上缓存里的原值，验证资源是否是最新的。")]),_._v(" "),e("p",[_._v("如果资源没有变，服务器就回应一个“304 Not Modified”，表示缓存依然有效，浏览器就可以更新一下有效期，然后放心大胆地使用缓存了")]),_._v(" "),e("p",[e("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/28.png",alt:""}})]),_._v(" "),e("p",[_._v("“Last-modified”很好理解，就是文件的最后修改时间。ETag 是什么呢？")]),_._v(" "),e("p",[_._v("ETag 是“实体标签”（Entity Tag）的缩写，是资源的一个唯一标识，主要是用来解决修改时间无法准确区分文件变化的问题。")]),_._v(" "),e("p",[_._v("比如，一个文件在一秒内修改了多次，但因为修改时间是秒级，所以这一秒内的新版本无法区分。")]),_._v(" "),e("p",[_._v("再比如，一个文件定期更新，但有时会是同样的内容，实际上没有变化，用修改时间就会误以为发生了变化，传送给浏览器就会浪费带宽。")]),_._v(" "),e("p",[_._v("使用 ETag 就可以精确地识别资源的变动情况，让浏览器能够更有效地利用缓存。")]),_._v(" "),e("p",[_._v("ETag 还有“强”“弱”之分。")]),_._v(" "),e("p",[_._v("强 ETag 要求资源在字节级别必须完全相符，弱 ETag 在值前有个“W/”标记，只要求资源在语义上没有变化，但内部可能会有部分发生了改变（例如 HTML 里的标签顺序调整，或者多了几个空格）。")]),_._v(" "),e("p",[_._v("还是拿生鲜速递做比喻最容易理解：")]),_._v(" "),e("p",[_._v("你打电话给超市，“我这个西瓜是 3 天前买的，还有最新的吗？”。超市看了一下库存，说：“没有啊，我这里都是 3 天前的。”于是你就知道了，再让超市送货也没用，还是吃冰箱里的西瓜吧。这就是“if-Modified-Since”和“Last-modified”。")]),_._v(" "),e("p",[_._v("但你还是想要最新的，就又打电话：“有不是沙瓤的西瓜吗？”，超市告诉你都是沙瓤的（Match），于是你还是只能吃冰箱里的沙瓤西瓜。这就是“If-None-Match”和“弱 ETag”。")]),_._v(" "),e("p",[_._v("第三次打电话，你说“有不是 8 斤的沙瓤西瓜吗？”，这回超市给了你满意的答复：“有个 10 斤的沙瓤西瓜”。于是，你就扔掉了冰箱里的存货，让超市重新送了一个新的大西瓜。这就是“If-None-Match”和“强 ETag”。")]),_._v(" "),e("p",[_._v("再来看看实验环境的 URI “/20-2”。它为资源增加了 ETag 字段，刷新页面时浏览器就会同时发送缓存控制头“max-age=0”和条件请求头“If-None-Match”，如果缓存有效服务器就会返回 304")]),_._v(" "),e("blockquote",[e("p",[_._v("条件请求里其他的三个头字段是“If-Unmodified-Since”“If-Match”和“If-Range”，其实只要你掌握了“if-Modified-Since”和“If-None-Match”，可以轻易地“举一反三”。")])]),_._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),e("ul",[e("li",[_._v("缓存是优化系统性能的重要手段，"),e("code",[_._v("HTTP")]),_._v(" 传输的每一个环节中都可以有缓存；")]),_._v(" "),e("li",[_._v("服务器使用“"),e("code",[_._v("Cache-Control")]),_._v("”设置缓存策略，常用的是“"),e("code",[_._v("max-age")]),_._v("”，表示资源的有效期；")]),_._v(" "),e("li",[_._v("浏览器收到数据就会存入缓存，如果没过期就可以直接使用，过期就要去服务器验证是否仍然可用；")]),_._v(" "),e("li",[_._v("验证资源是否失效需要使用“条件请求”，常用的是“"),e("code",[_._v("if-Modified-Since")]),_._v("”和“"),e("code",[_._v("If-None-Match")]),_._v("”，收到 "),e("code",[_._v("304")]),_._v(" 就可以复用缓存里的资源；")]),_._v(" "),e("li",[_._v("验证资源是否被修改的条件有两个：“"),e("code",[_._v("Last-modified")]),_._v("”和“"),e("code",[_._v("ETag")]),_._v("”，需要服务器预先在响应报文里设置，搭配条件请求使用；")]),_._v(" "),e("li",[_._v("浏览器也可以发送“"),e("code",[_._v("Cache-Control")]),_._v("”字段，使用“"),e("code",[_._v("max-age=0")]),_._v("”或“"),e("code",[_._v("no_cache")]),_._v("”刷新数据")])]),_._v(" "),e("blockquote",[e("p",[_._v("HTTP 缓存看上去很复杂，但基本原理说白了就是一句话：“没有消息就是好消息”，“没有请求的请求，才是最快的请求。”")])]),_._v(" "),e("p",[e("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2019/12/29.png",alt:""}})])])}),[],!1,null,null,null);v.default=t.exports}}]);