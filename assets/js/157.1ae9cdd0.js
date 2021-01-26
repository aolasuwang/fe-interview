(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1382:function(t,s,a){"use strict";a.r(s);var e=a(10),o=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"cookie-session-登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session-登录"}},[t._v("#")]),t._v(" Cookie + Session 登录")]),t._v(" "),a("blockquote",[a("p",[t._v("HTTP 是一种无状态的协议，客户端每次发送请求时，首先要和服务器端建立一个连接，在请求完成后又会断开这个连接。这种方式可以节省传输时占用的连接资源，但同时也存在一个问题：每次请求都是独立的，服务器端无法判断本次请求和上一次请求是否来自同一个用户，进而也就无法判断用户的登录状态。")])]),t._v(" "),a("p",[t._v("为了解决 HTTP 无状态的问题，Lou Montulli 在 1994 年的时候，推出了 Cookie。")]),t._v(" "),a("blockquote",[a("p",[t._v("Cookie 是服务器端发送给客户端的一段特殊信息，这些信息以文本的方式存放在客户端，客户端每次向服务器端发送请求时都会带上这些特殊信息。")])]),t._v(" "),a("p",[t._v("有了 "),a("code",[t._v("Cookie")]),t._v(" 之后，服务器端就能够获取到客户端传递过来的信息了，如果需要对信息进行验证，还需要通过 "),a("code",[t._v("Session")])]),t._v(" "),a("blockquote",[a("p",[t._v("客户端请求服务端，服务端会为这次请求开辟一块内存空间，这个便是 "),a("code",[t._v("Session")]),t._v(" 对象。")])]),t._v(" "),a("p",[t._v("有了 "),a("code",[t._v("Cookie")]),t._v(" 和 "),a("code",[t._v("Session")]),t._v("之后，我们就可以进行登录认证了")]),t._v(" "),a("h3",{attrs:{id:"cookie-session-实现流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session-实现流程"}},[t._v("#")]),t._v(" Cookie + Session  实现流程")]),t._v(" "),a("p",[t._v("Cookie + Session 的登录方式是最经典的一种登录方式，现在仍然有大量的企业在使用。")]),t._v(" "),a("p",[t._v("用户首次登录时：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/48.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("用户访问 "),a("code",[t._v("a.com/pageA")]),t._v("，并输入密码登录。")]),t._v(" "),a("li",[t._v("服务器验证密码无误后，会创建 "),a("code",[t._v("SessionId")]),t._v("，并将它保存起来。")]),t._v(" "),a("li",[t._v("服务器端响应这个 HTTP 请求，并通过 "),a("code",[t._v("Set-Cookie")]),t._v(" 头信息，将 "),a("code",[t._v("SessionId")]),t._v(" 写入 "),a("code",[t._v("Cookie")]),t._v(" 中")])]),t._v(" "),a("blockquote",[a("p",[t._v("服务器端的 "),a("code",[t._v("SessionId")]),t._v(" 可能存放在很多地方，例如：内存、文件、数据库等。")])]),t._v(" "),a("p",[t._v("第一次登录完成之后，后续的访问就可以直接使用 Cookie 进行身份验证了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/49.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("用户访问 "),a("code",[t._v("a.com/pageB")]),t._v(" 页面时，会自动带上第一次登录时写入的 "),a("code",[t._v("Cookie")]),t._v("。")]),t._v(" "),a("li",[t._v("服务器端比对 "),a("code",[t._v("Cookie")]),t._v(" 中的 "),a("code",[t._v("SessionId")]),t._v(" 和保存在服务器端的 "),a("code",[t._v("SessionId")]),t._v(" 是否一致。")]),t._v(" "),a("li",[t._v("如果一致，则身份验证成功")])]),t._v(" "),a("p",[a("strong",[t._v("Cookie + Session  存在的问题")])]),t._v(" "),a("blockquote",[a("p",[t._v("虽然我们使用 "),a("code",[t._v("Cookie + Session")]),t._v("的方式完成了登录验证，但仍然存在一些问题：")])]),t._v(" "),a("ul",[a("li",[t._v("由于服务器端需要对接大量的客户端，也就需要存放大量的 "),a("code",[t._v("SessionId")]),t._v("，这样会导致服务器压力过大。")]),t._v(" "),a("li",[t._v("如果服务器端是一个集群，为了同步登录态，需要将 "),a("code",[t._v("SessionId")]),t._v(" 同步到每一台机器上，无形中增加了服务器端维护成本。")]),t._v(" "),a("li",[t._v("由于 "),a("code",[t._v("SessionId")]),t._v(" 存放在 "),a("code",[t._v("Cookie")]),t._v(" 中，所以无法避免 "),a("code",[t._v("CSRF")]),t._v(" 攻击")])]),t._v(" "),a("h2",{attrs:{id:"token-登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-登录"}},[t._v("#")]),t._v(" Token 登录")]),t._v(" "),a("p",[t._v("为了解决 Session + Cookie 机制暴露出的诸多问题，我们可以使用 Token 的登录方式。")]),t._v(" "),a("blockquote",[a("p",[t._v("Token 是服务端生成的一串字符串，以作为客户端请求的一个令牌。当第一次登录后，服务器会生成一个 Token 并返回给客户端，客户端后续访问时，只需带上这个 Token 即可完成身份认证。")])]),t._v(" "),a("h3",{attrs:{id:"token-机制实现流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-机制实现流程"}},[t._v("#")]),t._v(" Token 机制实现流程")]),t._v(" "),a("p",[t._v("用户首次登录时：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/50.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("用户输入账号密码，并点击登录。")]),t._v(" "),a("li",[t._v("服务器端验证账号密码无误，创建 Token。")]),t._v(" "),a("li",[t._v("服务器端将 Token 返回给客户端，由***客户端自由保存***")])]),t._v(" "),a("p",[t._v("后续页面访问时：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/51.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("用户访问 "),a("code",[t._v("a.com/pageB")]),t._v(" 时，带上第一次登录时获取的 "),a("code",[t._v("Token")]),t._v("。")]),t._v(" "),a("li",[t._v("服务器端验证 "),a("code",[t._v("Token")]),t._v(" ，有效则身份验证成功")])]),t._v(" "),a("h3",{attrs:{id:"token-机制的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-机制的特点"}},[t._v("#")]),t._v(" Token 机制的特点")]),t._v(" "),a("ul",[a("li",[t._v("服务器端不需要存放 Token，所以不会对服务器端造成压力，即使是服务器集群，也不需要增加维护成本。")]),t._v(" "),a("li",[t._v("Token 可以存放在前端任何地方，可以不用保存在 Cookie 中，提升了页面的安全性。")]),t._v(" "),a("li",[t._v("Token 下发之后，只要在生效时间之内，就一直有效，如果服务器端想收回此 Token 的权限，并不容易。")])]),t._v(" "),a("h3",{attrs:{id:"token-的生成方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-的生成方式"}},[t._v("#")]),t._v(" Token 的生成方式")]),t._v(" "),a("blockquote",[a("p",[t._v("最常见的 Token 生成方式是使用 JWT（Json Web Token），它是一种简洁的，自包含的方法用于通信双方之间以 JSON 对象的形式安全的传递信息。")])]),t._v(" "),a("p",[t._v("上文中我们说到，使用 Token 后，服务器端并不会存储 Token，那怎么判断客户端发过来的 Token 是合法有效的呢？")]),t._v(" "),a("p",[t._v("答案其实就在 Token 字符串中，其实 Token 并不是一串杂乱无章的字符串，而是通过多种算法拼接组合而成的字符串，我们来具体分析一下。")]),t._v(" "),a("p",[t._v("JWT 算法主要分为 3 个部分：header（头信息），playload（消息体），signature（签名）。")]),t._v(" "),a("p",[t._v("header 部分指定了该 JWT 使用的签名算法:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('header = \'{"alg":"HS256","typ":"JWT"}\'   //\n`HS256` 表示使用了 HMAC-SHA256 来生成签名。\n')])])]),a("p",[t._v("playload 部分表明了 JWT 的意图：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('payload = \'{"loggedInAs":"admin","iat":1422779638}\'     //iat 表示令牌生成的时间\n')])])]),a("blockquote",[a("p",[a("code",[t._v("signature")]),t._v(" 部分为 "),a("code",[t._v("JWT")]),t._v(" 的签名，主要为了让 "),a("code",[t._v("JWT")]),t._v("不能被随意篡改，签名的方法分为两个步骤：")])]),t._v(" "),a("ul",[a("li",[t._v("输入 "),a("code",[t._v("base64url")]),t._v(" 编码的 "),a("code",[t._v("header")]),t._v(" 部分、 . "),a("code",[t._v("、base64url")]),t._v(" 编码的 "),a("code",[t._v("playload")]),t._v(" 部分，输出 "),a("code",[t._v("unsignedToken")])]),t._v(" "),a("li",[t._v("输入 "),a("code",[t._v("base64url")]),t._v(" 编码的 header 部分、 . 、base64url 编码的 playload 部分，输出 "),a("code",[t._v("unsignedToken")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const base64Header = encodeBase64(header)\nconst base64Payload = encodeBase64(payload)\nconst unsignedToken = `${base64Header}.${base64Payload}`\nconst key = '服务器私钥'\n\nsignature = HMAC(key, unsignedToken)\n")])])]),a("p",[t._v("最后的 Token 计算如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" base64Header "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeBase64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" base64Payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeBase64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" base64Signature "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeBase64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntoken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("base64Header"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("base64Payload"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("base64Signature"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),a("p",[t._v("服务器在判断 "),a("code",[t._v("Token")]),t._v(" 时：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("base64Header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base64Payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base64Signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signature1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeBase64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base64Signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unsignedToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("base64Header"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("base64Payload"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signature2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HMAC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'服务器私钥'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unsignedToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signature1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" signature2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'签名验证成功，token 没有被篡改'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeBase64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base64Payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token 有效期'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token 有效'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("有了 "),a("code",[t._v("Token")]),t._v(" 之后，登录方式已经变得非常高效，接下来我们介绍另外两种登录方式。")])]),t._v(" "),a("h2",{attrs:{id:"sso-单点登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sso-单点登录"}},[t._v("#")]),t._v(" SSO 单点登录")]),t._v(" "),a("p",[t._v("单点登录指的是在公司内部搭建一个公共的认证中心，公司下的所有产品的登录都可以在认证中心里完成，一个产品在认证中心登录后，再去访问另一个产品，可以不用再次登录，即可获取登录状态。")]),t._v(" "),a("h3",{attrs:{id:"sso-机制实现流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sso-机制实现流程"}},[t._v("#")]),t._v(" SSO 机制实现流程")]),t._v(" "),a("p",[t._v("用户首次访问时，需要在认证中心登录：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/52.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("用户访问网站  "),a("code",[t._v("a.com")]),t._v(" 下的 "),a("code",[t._v("pageA")]),t._v("页面。")]),t._v(" "),a("li",[t._v("由于没有登录，则会重定向到认证中心，并带上回调地址 "),a("code",[t._v("www.sso.com?return_uri=a.com/pageA")]),t._v("，以便登录后直接进入对应页面。")]),t._v(" "),a("li",[t._v("用户在认证中心输入账号密码，提交登录。")]),t._v(" "),a("li",[t._v("认证中心验证账号密码有效，然后重定向  "),a("code",[t._v("a.com?ticket=123")]),t._v(" 带上授权码 "),a("code",[t._v("ticket")]),t._v("，并将认证中心 "),a("code",[t._v("sso.com")]),t._v(" 的登录态写入 "),a("code",[t._v("Cookie")]),t._v("。")]),t._v(" "),a("li",[t._v("在 a.com 服务器中，拿着 ticket 向认证中心确认，授权码 ticket 真实有效。")]),t._v(" "),a("li",[t._v("验证成功后，服务器将登录信息写入 Cookie（此时客户端有 2 个 Cookie 分别存有 a.com 和 sso.com 的登录态）")])]),t._v(" "),a("blockquote",[a("p",[t._v("认证中心登录完成之后，继续访问 a.com 下的其他页面：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/53.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("这个时候，由于 a.com 存在已登录的 Cookie 信息，所以服务器端直接认证成功。")]),t._v(" "),a("li",[t._v("如果认证中心登录完成之后，访问 b.com 下的页面：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/54.png",alt:""}})]),t._v(" "),a("p",[t._v("这个时候，由于认证中心存在之前登录过的 "),a("code",[t._v("Cookie")]),t._v("，所以也不用再次输入账号密码，直接返回第 4 步，下发 "),a("code",[t._v("ticket")]),t._v(" 给 "),a("code",[t._v("b.com")]),t._v(" 即可")]),t._v(" "),a("h3",{attrs:{id:"sso-单点登录退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sso-单点登录退出"}},[t._v("#")]),t._v(" SSO 单点登录退出")]),t._v(" "),a("blockquote",[a("p",[t._v("目前我们已经完成了单点登录，在同一套认证中心的管理下，多个产品可以共享登录态。现在我们需要考虑退出了，即：在一个产品中退出了登录，怎么让其他的产品也都退出登录？")])]),t._v(" "),a("p",[t._v("原理其实不难，可以回过头来看第 5 步，每一个产品在向认证中心验证 ticket 时，其实可以顺带将自己的退出登录 api 发送到认证中心。")]),t._v(" "),a("p",[a("strong",[t._v("当某个产品 c.com 退出登录时：")])]),t._v(" "),a("ul",[a("li",[t._v("清空 c.com 中的登录态 Cookie。")]),t._v(" "),a("li",[t._v("请求认证中心 sso.com 中的退出 api。")]),t._v(" "),a("li",[t._v("认证中心遍历下发过 ticket 的所有产品，并调用对应的退出 api，完成退出")])]),t._v(" "),a("h2",{attrs:{id:"oauth-第三方登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-第三方登录"}},[t._v("#")]),t._v(" OAuth 第三方登录")]),t._v(" "),a("p",[t._v("在上文中，我们使用单点登录完成了多产品的登录态共享，但都是建立在一套统一的认证中心下，对于一些小型企业，未免太麻烦，有没有一种登录能够做到开箱即用？")]),t._v(" "),a("p",[t._v("其实是有的，很多大厂都会提供自己的第三方登录服务，我们一起来分析一下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/55.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"oauth-机制实现流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-机制实现流程"}},[t._v("#")]),t._v(" OAuth 机制实现流程")]),t._v(" "),a("p",[t._v("这里以微信开放平台的接入流程为例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/08/56.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("首先，a.com 的运营者需要在微信开放平台注册账号，并向微信申请使用微信登录功能。")]),t._v(" "),a("li",[t._v("申请成功后，得到申请的 appid、appsecret。")]),t._v(" "),a("li",[t._v("用户在 a.com 上选择使用微信登录。")]),t._v(" "),a("li",[t._v("这时会跳转微信的 OAuth 授权登录，并带上 a.com 的回调地址。")]),t._v(" "),a("li",[t._v("用户输入微信账号和密码，登录成功后，需要选择具体的授权范围，如：授权用户的头像、昵称等。")]),t._v(" "),a("li",[t._v("授权之后，微信会根据拉起 a.com?code=123 ，这时带上了一个临时票据 code。")]),t._v(" "),a("li",[t._v("获取 code 之后， a.com 会拿着 code 、appid、appsecret，向微信服务器申请 token，验证成功后，微信会下发一个 token。")]),t._v(" "),a("li",[t._v("有了 token 之后， a.com 就可以凭借 token 拿到对应的微信用户头像，用户昵称等信息了。")]),t._v(" "),a("li",[t._v("a.com 提示用户登录成功，并将登录状态写入 Cooke，以作为后续访问的凭证。")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("本文介绍了 4 种常见的登录方式，原理应该大家都清楚了，总结一下这 4 种方案的使用场景：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Cookie + Session")]),t._v(" 历史悠久，适合于简单的后端架构，需开发人员自己处理好安全问题。")]),t._v(" "),a("li",[a("code",[t._v("Token")]),t._v(" 方案对后端压力小，适合大型分布式的后端架构，但已分发出去的 token ，如果想收回权限，就不是很方便了。")]),t._v(" "),a("li",[a("code",[t._v("SSO")]),t._v(" 单点登录，适用于中大型企业，想要统一内部所有产品的登录方式。")]),t._v(" "),a("li",[a("code",[t._v("OAuth")]),t._v(" 第三方登录，简单易用，对用户和开发者都友好，但第三方平台很多，需要选择合适自己的第三方登录平台。")])])])}),[],!1,null,null,null);s.default=o.exports}}]);