(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{1135:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"客户端例子：不受信任的证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端例子：不受信任的证书"}},[t._v("#")]),t._v(" 客户端例子：不受信任的证书")]),t._v(" "),a("p",[t._v("我们知道，有些网站的HTTPS证书会被浏览器标识为不受信任，有可能是以下情况导致的：")]),t._v(" "),a("ul",[a("li",[t._v("颁发证书的机构不在操作系统的受信列表里")]),t._v(" "),a("li",[t._v("办法证书的机构在操作系统的受信列表里，但证书的安全级别不够")])]),t._v(" "),a("p",[t._v("比如我们访问"),a("a",{attrs:{href:"https://kyfw.12306.cn/otn/regist/init",target:"_blank",rel:"noopener noreferrer"}},[t._v("12306"),a("OutboundLink")],1),t._v("，chrome就会提示你“您的连接不是私密连接，攻击者可能会试图从kyfw.12306.cn窃取您的信息”。")]),t._v(" "),a("p",[t._v("那么，当我们用node向12306发起请求时，又会是什么状况呢？下面就来试下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" https "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhttps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("运行上面代码，输出如下。可以看到出现报错，提示信息是“self signed certificate in certificate chain”。大意就是说证书是网站自己签发的，不安全。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Error: self signed certificate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" certificate chain\n    at Error "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("native"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at TLSSocket."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_tls_wrap.js:1055:38"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at emitNone "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("events.js:86:13"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at TLSSocket.emit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("events.js:185:7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at TLSSocket._finishInit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_tls_wrap.js:580:8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at TLSWrap.ssl.onhandshakedone "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_tls_wrap.js:412:38"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" code: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELF_SIGNED_CERT_IN_CHAIN'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("出现上述错误怎么处理呢？我们知道，如果是在浏览器里访问，有两种处理方式：")]),t._v(" "),a("ul",[a("li",[t._v("忽略浏览器的安全提示，继续访问（浏览器可能会直接禁止你访问）")]),t._v(" "),a("li",[t._v("将网站的根证书导入到操作系统的受信任根证书列表里")])]),t._v(" "),a("h2",{attrs:{id:"入门示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门示例"}},[t._v("#")]),t._v(" 入门示例")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"基础讲解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础讲解"}},[t._v("#")]),t._v(" 基础讲解")]),t._v(" "),a("p",[t._v("。。。")]),t._v(" "),a("h2",{attrs:{id:"本地证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地证书"}},[t._v("#")]),t._v(" 本地证书")]),t._v(" "),a("p",[t._v("。。。")]),t._v(" "),a("h2",{attrs:{id:"服务器：自签名证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器：自签名证书"}},[t._v("#")]),t._v(" 服务器：自签名证书")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("➜  server git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" cert\n➜  server git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" cert \n➜  cert git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ openssl genrsa -out chyingp-key.pem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\nGenerating RSA private key, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v(" bit long modulus\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".+++\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("+++\ne is "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65537")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x10001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n➜  cert git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ openssl req -new -sha256 -key chyingp-key.pem -out chyingp-csr.pem\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),t._v(", the field will be left blank.\n-----\nCountry Name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" letter code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":CN\nState or Province Name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("full name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Some-State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":Guangdong\nLocality Name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg, city"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":Shenzhen\nOrganization Name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg, company"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Internet Widgits Pty Ltd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":YH\nOrganizational Unit Name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg, section"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":web\nCommon Name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e.g. server FQDN or YOUR name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":www.chyingp.com\nEmail Address "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":416394284@qq.com\n\nPlease enter the following "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'extra'")]),t._v(" attributes\nto be sent with your certificate request\nA challenge password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":123456\nAn optional company name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":YH\n➜  cert git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ✗ openssl x509 -req -in chyingp-csr.pem -signkey chyingp-key.pem -out chyingp-cert.pem\n")])])]),a("h2",{attrs:{id:"私有ca签名的证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#私有ca签名的证书"}},[t._v("#")]),t._v(" 私有CA签名的证书")]),t._v(" "),a("p",[t._v("首先，创建自签名的CA证书")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建ca的私钥")]),t._v("\nopenssl genrsa -out my-ca.key.pem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建ca的证书")]),t._v("\nopenssl req "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -x509 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -new "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -nodes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -key my-ca.key.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -days "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -out my-ca.crt.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -subj "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/C=CN/ST=Guandong/L=Shenzhen/O=YH Inc/CN=chyingp.com"')]),t._v("\n")])])]),a("p",[t._v("然后，创建用CA的私钥进行签名的网站证书")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建私钥")]),t._v("\nopenssl genrsa "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -out my-server.key.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建证书签名请求")]),t._v("\nopenssl req -new "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -key my-server.key.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -out my-server.csr.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -subj "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/C=CN/ST=Guandong/L=Shenzhen/O=YH Inc/CN=www.chyingp.com"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建网站证书")]),t._v("\nopenssl x509 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -req -in my-server.csr.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -CA my-ca.crt.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -CAkey my-ca.key.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -CAcreateserial "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -out my-server.crt.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -days "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("  \n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);