(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1398:function(v,_,e){"use strict";e.r(_);var t=e(10),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h3",{attrs:{id:"一、canvas-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、canvas-api"}},[v._v("#")]),v._v(" 一、Canvas API")]),v._v(" "),e("hr"),v._v(" "),e("p",[e("code",[v._v("canvas API")]),v._v("是"),e("code",[v._v("H5")]),v._v("标准中最复杂的部分， 它提供几种属性和方法，可以在"),e("code",[v._v("canvas")]),v._v("元素上创建图形应用")]),v._v(" "),e("h4",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[v._v("#")]),v._v(" 方法")]),v._v(" "),e("hr"),v._v(" "),e("p",[v._v("以下方法专门用于调用canvas API")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("getContext(context)")]),v._v("创建可绘制图形的画布上下文，接受两个值，"),e("code",[v._v("2d")]),v._v("和"),e("code",[v._v("3d")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("fillRect(x,y,width,height)")]),v._v("绘制实心矩形")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("strokeRect(x,y,width,height)")]),v._v("绘制矩形轮廓")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("clearRect(x,y,width,height)")]),v._v("清除画布指定区域内容")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("createLinearGradient(x1,y1,x2,y2)")]),v._v("创建一个线性渐变效果")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("createRadialGradient(x1,y1,r1,x2,y2,r2)")]),v._v("创建一个放射渐变效果")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("addColorStop(position,color)")]),v._v("用于声明渐变颜色"),e("code",[v._v("position")]),v._v("范围是"),e("code",[v._v("0.0-1.0")]),v._v(" 用于确定颜色开始变化位置")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("beginPath()")]),v._v("开始一条新路径")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("closePath()")]),v._v("在路径最后实现封闭该路径，它会生成一条直线，连接笔触的最后一个位置与路径的起点。如想要保持路径开放，使用"),e("code",[v._v("fill()")]),v._v("绘图，不用这个方法")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("stroke()")]),v._v(" 用于创建路径轮廓")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("fill()")]),v._v("用于绘制实心形状")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("clip()")]),v._v("用于创建一个由路径定义的裁剪区域，只有在落入形状内的内容才绘制到画布上")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("moveTo(x,y)")]),v._v("将虚拟笔触移到新位置，下一个方法会从改点的开始继续设置路径")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("lineTo(x,y)")]),v._v("在新路径上添加一条直线")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("rect(x,y,width,height)")]),v._v("在路径为"),e("code",[v._v("(x,y)")]),v._v("位置上添加"),e("code",[v._v("width")]),v._v("和"),e("code",[v._v("height")]),v._v("矩形")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("arc(x,y,radius,startAngle,endAngle,direction)")]),v._v("在路径上添加一条弧线 ,"),e("code",[v._v("x")]),v._v(","),e("code",[v._v("y")]),v._v("指定弧线的中心，角度单位为弧度，"),e("code",[v._v("direction")]),v._v("是一个表示顺时针或逆时针的布尔值。使用公式 "),e("code",[v._v("Math.PI/180x")]),v._v("角度，将角度转换为半径")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("strokeText(text,x,y,max)")]),v._v(" 直接在画布上绘制文字轮廓。可选参数，max声明文字最大尺寸")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("fillText(text,x,y,max)")]),v._v("直接在画布上绘制实心文字。可选参数，"),e("code",[v._v("max")]),v._v("声明文字最大尺寸")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("translate(x,y)")]),v._v("将画布原点移到点"),e("code",[v._v("(x,y)")]),v._v("处，原点"),e("code",[v._v("（0,0）")]),v._v("初始位置位于"),e("code",[v._v("canvas")]),v._v("所在区域的左上角")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("rorate(angle)")]),v._v("这个方法可以使画布原点为中心发生旋转，角度必须是弧度。使用公式"),e("code",[v._v("Math.PI/180x")]),v._v(" 将角度转换为弧度")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("scale(x,y)")]),v._v(" 改变画布比例 默认值是"),e("code",[v._v("（1.0,1.0）")]),v._v("这些值可以是负值")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("transform（m1,m2,m3,m4,dx,dy）")]),v._v("修改画布的转换矩阵。新矩阵是基于之前的矩阵得到的")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("setTransform（m1,m2,m3,m4,dx,dy）")]),v._v("修改画布的转换矩阵。重置之前的值，声明新的值")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("save()")]),v._v("保存画布状态，包括转换矩阵、样式属性、裁剪遮罩")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("restore()")]),v._v(" 恢复上一次保存的状态")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("drawImage()")]),v._v(" 在画布上绘制图像")])])]),v._v(" "),e("h4",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[v._v("#")]),v._v(" 属性")]),v._v(" "),e("hr"),v._v(" "),e("p",[e("code",[v._v("canvas API")]),v._v("专用属性列表")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("rect( x, y, width, height )")]),v._v("  绘制矩形")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("fillRect( x, y, width, height )")]),v._v(" 绘制被填充的矩形")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("strokeRect( x, y, width, height )")]),v._v(" 绘制矩形（无填充）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("clearRect( x, y, width, height )")]),v._v(" 清除指定的矩形内的像素")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("fill()")]),v._v(" 填充当前绘图（路径）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("stroke()")]),v._v("绘制已定义的路径")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("beginPath()")]),v._v("  起始（重置）当前路径")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("moveTo( x, y )")]),v._v(" 将笔触移动到指定的坐标(x,y)")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("lineTo( x, y )")]),v._v("  绘制一条从当前位置到指定的坐标(x,y)的直线")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("clip()")]),v._v(" 从原始画布剪切任意形状和尺寸的区域")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("quadraticCurveTo()")]),v._v(" 创建二次贝塞尔曲线")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("bezierCurveTo()")]),v._v("   创建三次贝塞尔曲线")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("arc( x, y, radius, startAngle, endAngle, anticlockwise)")]),v._v(" 绘制圆或圆弧")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("arcTo( x1, y1, x2, y2, radius)")]),v._v(" 根据给定点画圆弧，再以直线连接两个点")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("isPointInPath( x, y )")]),v._v("  检测指定的点是否在当前路径中，在则返回true。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("fillStyle")]),v._v("  设置或返回用于填充绘画的颜色、渐变或模式")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("strokeStyle")]),v._v(" 设置或返回用于笔触的颜色、渐变或模式")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("shadowColor")]),v._v(" 设置或返回用于阴影的颜色")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("shadowBlur")]),v._v("   设置或返回用于阴影的模糊级别")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("shadowOffsetX")]),v._v(" 设置或返回阴影与形状的水平距离")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("shadowOffsetY")]),v._v(" 设置或返回阴影与形状的垂直距离")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("lineCap")]),v._v(" 设置或返回线条的结束点样式（"),e("code",[v._v("butt")]),v._v("、"),e("code",[v._v("round")]),v._v("、"),e("code",[v._v("square")]),v._v("）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("lineJoin")]),v._v(" 设置或返回当两条线交汇时，边角的类型（"),e("code",[v._v("bevel")]),v._v("、"),e("code",[v._v("round")]),v._v("、miter）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("lineWidth")]),v._v(" 设置或返回当前的线条宽度")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("miterLimit")]),v._v(" 设置或返回最大斜接长度")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("createLinearGradient( x0, y0, x1, y1 )")]),v._v(" 创建线性渐变")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("createPattern( image/canvas/video, repeat )")]),v._v(" 在指定的方向内重复绘制指定的元素")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("createRadialGradient( x0, y0, r0, x1, y1, r1 )")]),v._v("创建径向渐变")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("addColorStop( stop, color )")]),v._v(" 规定渐变对象中的颜色和停止位置")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("font")]),v._v("  设置或返回文本内容的当前字体属性（和css的font一样）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("textAlign")]),v._v(" 设置或返回文本内容的当前对齐方式")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("textBaseline")]),v._v(" 设置或返回在绘制文本时使用的当前文本基线")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("fillText( text, x, y )")]),v._v(" 在画布上绘制“被填充”的文本")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("strokeText( text, x, y )")]),v._v(" 在画布上绘制文本（无填充）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("measureText( text )")]),v._v("  返回包含指定文本宽度的对象（属性width获取宽度）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("drawImage( image/canvas, x, y )")]),v._v("、drawImage( image/canvas, x, y, width, height )、drawImage( image/canvas, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight )`  在画布上绘制图像、画布或视频")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("createImageData( width, height )")]),v._v("、createImageData(imageData)  绘制ImageData对象")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("getImageData( x, y, width, height )")]),v._v("  返回ImageData对象，该对象为画布上指定的矩形复制像素数据。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("putImageData( ImageData, x, y )")]),v._v("、putImageData( imageData, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight )  把图像数据放回画布上。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("width")]),v._v("  返回ImageData对象的宽度")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("height")]),v._v("  返回"),e("code",[v._v("ImageData")]),v._v("对象的高度")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("data")]),v._v("  返回一个对象，包含指定的ImageData对象的图像数据")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("globalAlpha")]),v._v("  设置或返回绘图的当前alpha或透明度")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("globalCompositeOperation")]),v._v("  设置或返回新图像如何绘制到已有的图像上。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("scale( x, y )")]),v._v(" 缩放当前绘图")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("translate( x, y )")]),v._v(" 重新设置画布上的(0,0)位置")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("rotate( angle )")]),v._v(" 选择当前绘图，单位为“弧度”，角度转弧度公式"),e("code",[v._v("（ degrees*Math.PI/180）")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("transform( m11, m12, m21, m22, dx, dy )")]),v._v(" 替换绘图的当前转换矩阵")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("setTransform()")]),v._v(" 将当前转换重置为单元矩阵，然后运行transform()")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("save()")]),v._v("  保存当前环境的状态")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("restore()")]),v._v("  恢复之前保存过的路径状态和属性")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("getContext('2d')")]),v._v("  获取"),e("code",[v._v("2d")]),v._v("对象")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("toDataURL()")]),v._v(" 将canvas转换成图片，返回地址")])])]),v._v(" "),e("h4",{attrs:{id:"canvas常用总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#canvas常用总结"}},[v._v("#")]),v._v(" canvas常用总结")]),v._v(" "),e("hr"),v._v(" "),e("ul",[e("li",[e("p",[v._v("标签 "),e("code",[v._v("<canvas>")])]),v._v(" "),e("ul",[e("li",[v._v("不支持"),e("code",[v._v("canvas")]),v._v(" 的浏览器可以看到的内容")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("<canvas>")]),v._v(" 绘制环境")]),v._v(" "),e("ul",[e("li",[e("code",[v._v('getContext("2d")')]),v._v(";目前支持"),e("code",[v._v("2d")]),v._v("的场景")])])]),v._v(" "),e("li",[e("p",[v._v("绘制矩形")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("rect(L,T,W,H)")]),v._v(":创建一个矩形")]),v._v(" "),e("li",[e("code",[v._v("fillRect(L,T,W,H)")]),v._v(":绘制填充的矩形")]),v._v(" "),e("li",[e("code",[v._v("strokeRect(L,T,W,H)")]),v._v("绘制矩形(无填充)\n"),e("ul",[e("li",[v._v("默认一像素黑色边框")])])])])]),v._v(" "),e("li",[e("p",[v._v("设置绘图")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("fillStyle")]),v._v(":填充颜色(绘制"),e("code",[v._v("canvas")]),v._v("是有顺序的)")]),v._v(" "),e("li",[e("code",[v._v("lineWidth")]),v._v(":线宽度，笔迹粗细")]),v._v(" "),e("li",[e("code",[v._v("strokeStyle")]),v._v(":边线颜色")])])]),v._v(" "),e("li",[e("p",[v._v("绘制路径")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("stroke")]),v._v(" ：绘制，划线(黑色默认)")]),v._v(" "),e("li",[e("code",[v._v("fill")]),v._v(" :填充(黑色默认)")]),v._v(" "),e("li",[e("code",[v._v("rect(矩形区域)")])]),v._v(" "),e("li",[e("code",[v._v("clearRect")]),v._v(" 擦除一个矩形区域")]),v._v(" "),e("li",[e("code",[v._v("save")]),v._v(" 进入到XXX（高逼格）状态")]),v._v(" "),e("li",[e("code",[v._v("restore")]),v._v(" 退出xxx（高逼格）状态")])])]),v._v(" "),e("li",[e("p",[v._v("绘制圆形")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("arc(x,y,半径,起始弧度,结束弧度,旋转方向)")])]),v._v(" "),e("li",[e("code",[v._v("x")]),v._v("，"),e("code",[v._v("y")]),v._v("起始位置")]),v._v(" "),e("li",[v._v("弧度与角度："),e("code",[v._v("弧度=角度 x π / 180")])]),v._v(" "),e("li",[v._v("旋转方向：顺时针（默认："),e("code",[v._v("false")]),v._v("），逆时针（"),e("code",[v._v("true")]),v._v("）")])])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("绘制字体")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("font")]),v._v("：设置字体大小")]),v._v(" "),e("li",[e("code",[v._v("fillText")]),v._v("：填充字体")]),v._v(" "),e("li",[e("code",[v._v("strokeText")]),v._v("：绘制字体")])])])]),v._v(" "),e("h3",{attrs:{id:"二、视频音频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、视频音频"}},[v._v("#")]),v._v(" 二、视频音频")]),v._v(" "),e("hr"),v._v(" "),e("ul",[e("li",[e("p",[v._v("视频音频格式的简单介绍")]),v._v(" "),e("ul",[e("li",[v._v("常见的视频格式\n"),e("ul",[e("li",[v._v("视频的组成部分：画面、音频、编码格式")]),v._v(" "),e("li",[v._v("视频编码：H.264、Theora、VP8(google开源)")])])]),v._v(" "),e("li",[v._v("常见的音频格式\n"),e("ul",[e("li",[v._v("视频编码：ACC、MP3、Vorbis")])])])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("HTML5")]),v._v("能在完全脱离插件的情况下播放音视频,但是不是所有格式都支持。")])]),v._v(" "),e("li",[e("p",[v._v("支持的视频格式：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Ogg=")]),v._v("带有"),e("code",[v._v("Theora")]),v._v("视频编码"),e("code",[v._v("+Vorbis")]),v._v("音频编码的"),e("code",[v._v("Ogg")]),v._v("文件")]),v._v(" "),e("li",[e("code",[v._v("MEPG4=")]),v._v("带有H.264视频编码"),e("code",[v._v("+AAC")]),v._v("音频编码的"),e("code",[v._v("MPEG4")]),v._v("文件")]),v._v(" "),e("li",[e("code",[v._v("WebM=")]),v._v("带有"),e("code",[v._v("VP8")]),v._v("视频编码"),e("code",[v._v("+Vorbis")]),v._v("音频编码的"),e("code",[v._v("WebM")]),v._v("格式")])])])]),v._v(" "),e("h4",{attrs:{id:"video的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#video的使用"}},[v._v("#")]),v._v(" "),e("code",[v._v("Video")]),v._v("的使用")]),v._v(" "),e("hr"),v._v(" "),e("ul",[e("li",[v._v("单独用法\n"),e("ul",[e("li",[e("code",[v._v('<video src="文件地址" controls="controls"></video>')])])])]),v._v(" "),e("li",[v._v("带提示用法")])]),v._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[v._v('< video src="文件地址" controls="controls">\n\t您的浏览器暂不支持video标签。播放视频\n</ video >\n')])])]),e("ul",[e("li",[v._v("兼容用法")])]),v._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[v._v('< video  controls="controls"  width="300">\n\t'),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("source")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("move.ogg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),v._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("video/ogg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("source")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("move.mp4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),v._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("video/mp4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n\t您的浏览器暂不支持video标签。播放视频\n</ video >\n")])])]),e("ul",[e("li",[e("code",[v._v("Video")]),v._v("的常见属性")])]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("属性")]),v._v(" "),e("th",[v._v("值")]),v._v(" "),e("th",[v._v("描述")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("Autoplay")]),v._v(" "),e("td",[v._v("Autoplay")]),v._v(" "),e("td",[v._v("视频就绪自动播放")])]),v._v(" "),e("tr",[e("td",[v._v("controls")]),v._v(" "),e("td",[v._v("controls")]),v._v(" "),e("td",[v._v("向用户显示播放控件")])]),v._v(" "),e("tr",[e("td",[v._v("Width")]),v._v(" "),e("td",[v._v("Pixels(像素)")]),v._v(" "),e("td",[v._v("设置播放器宽度")])]),v._v(" "),e("tr",[e("td",[v._v("Height")]),v._v(" "),e("td",[v._v("Pixels(像素)")]),v._v(" "),e("td",[v._v("设置播放器高度")])]),v._v(" "),e("tr",[e("td",[v._v("Loop")]),v._v(" "),e("td",[v._v("Loop")]),v._v(" "),e("td",[v._v("播放完是否继续播放该视频，循环播放")])]),v._v(" "),e("tr",[e("td",[v._v("Preload")]),v._v(" "),e("td",[v._v("load{auto,meta,none}")]),v._v(" "),e("td",[v._v("规定是否预加载视频。")])]),v._v(" "),e("tr",[e("td",[v._v("Src")]),v._v(" "),e("td",[v._v("url")]),v._v(" "),e("td",[v._v("视频url地址")])]),v._v(" "),e("tr",[e("td",[v._v("Poster")]),v._v(" "),e("td",[v._v("Imgurl")]),v._v(" "),e("td",[v._v("加载等待的画面图片")])]),v._v(" "),e("tr",[e("td",[v._v("Autobuffer")]),v._v(" "),e("td",[v._v("Autobuffer")]),v._v(" "),e("td",[v._v("设置为浏览器缓冲方式，不设置autoply才有效")])])])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Video")]),v._v("的"),e("code",[v._v("API")]),v._v("方法")])]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("方法")]),v._v(" "),e("th",[v._v("属性")]),v._v(" "),e("th",[v._v("事件")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("play()")]),v._v(" "),e("td",[v._v("currentSrc")]),v._v(" "),e("td",[v._v("play")])]),v._v(" "),e("tr",[e("td",[v._v("pause()")]),v._v(" "),e("td",[v._v("currentTime")]),v._v(" "),e("td",[v._v("pause")])]),v._v(" "),e("tr",[e("td",[v._v("load()")]),v._v(" "),e("td",[v._v("videoWidth")]),v._v(" "),e("td",[v._v("progress")])]),v._v(" "),e("tr",[e("td",[v._v("canPlayType()")]),v._v(" "),e("td",[v._v("videoHeight")]),v._v(" "),e("td",[v._v("error")])])])]),v._v(" "),e("h3",{attrs:{id:"三、地理信息与本地存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、地理信息与本地存储"}},[v._v("#")]),v._v(" 三、地理信息与本地存储")]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"地理位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地理位置"}},[v._v("#")]),v._v(" 地理位置")]),v._v(" "),e("hr"),v._v(" "),e("ul",[e("li",[e("p",[v._v("经度  :   南北极的连接线")])]),v._v(" "),e("li",[e("p",[v._v("纬度  :   东西连接的线")])]),v._v(" "),e("li",[e("p",[v._v("位置信息从何而来")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("IP")]),v._v("地址")]),v._v(" "),e("li",[e("code",[v._v("GPS")]),v._v("全球定位系统")]),v._v(" "),e("li",[e("code",[v._v("Wi-Fi")]),v._v("无线网络")]),v._v(" "),e("li",[v._v("基站")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("avigator.geolocation")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("单次定位请求  ："),e("code",[v._v("getCurrentPosition")]),v._v("(请求成功,请求失败,数据收集方式)")])]),v._v(" "),e("li",[e("p",[v._v("请求成功函数")]),v._v(" "),e("ul",[e("li",[v._v("经度 :  "),e("code",[v._v("coords.longitude")])]),v._v(" "),e("li",[v._v("纬度 :  "),e("code",[v._v("coords.latitude")])]),v._v(" "),e("li",[v._v("准确度 :  "),e("code",[v._v("coords.accuracy")])]),v._v(" "),e("li",[v._v("海拔 : "),e("code",[v._v("coords.altitude")])]),v._v(" "),e("li",[v._v("海拔准确度 :  "),e("code",[v._v("coords.altitudeAcuracy")])]),v._v(" "),e("li",[v._v("行进方向 :  "),e("code",[v._v("coords.heading")])]),v._v(" "),e("li",[v._v("地面速度 :  "),e("code",[v._v("coords.speed")])]),v._v(" "),e("li",[v._v("请求的时间: "),e("code",[v._v("new Date(position.timestamp)")])])])]),v._v(" "),e("li",[e("p",[v._v("请求失败函数")]),v._v(" "),e("ul",[e("li",[v._v("失败编号  ："),e("code",[v._v("code")]),v._v(" "),e("ul",[e("li",[v._v("0  :  不包括其他错误编号中的错误")]),v._v(" "),e("li",[v._v("1  :  用户拒绝浏览器获取位置信息")]),v._v(" "),e("li",[v._v("2  :  尝试获取用户信息，但失败了")]),v._v(" "),e("li",[v._v("3  :   设置了"),e("code",[v._v("timeout")]),v._v("值，获取位置超时了")])])])])]),v._v(" "),e("li",[e("p",[v._v("数据收集 :  json的形式")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("enableHighAcuracy")]),v._v("  :  更精确的查找，默认"),e("code",[v._v("false")])]),v._v(" "),e("li",[e("code",[v._v("timeout")]),v._v(" :  获取位置允许最长时间，默认"),e("code",[v._v("infinity")])]),v._v(" "),e("li",[e("code",[v._v("maximumAge")]),v._v(" :  位置可以缓存的最大时间，默认"),e("code",[v._v("0")])])])]),v._v(" "),e("li",[e("p",[v._v("多次定位请求*  : "),e("code",[v._v("watchPosition")])]),v._v(" "),e("ul",[e("li",[v._v("移动设备有用，位置改变才会触发")]),v._v(" "),e("li",[v._v("配置参数："),e("code",[v._v("frequency")]),v._v(" 更新的频率")]),v._v(" "),e("li",[v._v("关闭更新请求  :  "),e("code",[v._v("clearWatch")])])])]),v._v(" "),e("li",[e("p",[v._v("百度地图"),e("code",[v._v("API")])])])])])]),v._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("script src"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[v._v('"http://api.map.baidu.com/api?v=2.0&ak=qZfInp9MaT9Qa0PoNy4Rmx3Y9W9ZXMfw"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n")])])]),e("h4",{attrs:{id:"本地存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地存储"}},[v._v("#")]),v._v(" 本地存储")]),v._v(" "),e("hr"),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("Storage")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("sessionStorage")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("session")]),v._v("临时回话，从页面打开到页面关闭的时间段")]),v._v(" "),e("li",[v._v("窗口的临时存储，页面关闭，本地存储消失")])])]),v._v(" "),e("li",[e("code",[v._v("localStorage")]),v._v(" "),e("ul",[e("li",[v._v("永久存储（可以手动删除数据）")])])])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("Storage")]),v._v("的特点")]),v._v(" "),e("ul",[e("li",[v._v("存储量限制 ( 5M )")]),v._v(" "),e("li",[v._v("客户端完成，不会请求服务器处理")]),v._v(" "),e("li",[e("code",[v._v("sessionStorage")]),v._v("数据是不共享、 "),e("code",[v._v("localStorage")]),v._v("共享")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("Storage API")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("setItem()")]),v._v(":\n"),e("ul",[e("li",[v._v("设置数据，("),e("code",[v._v("key")]),v._v(","),e("code",[v._v("value")]),v._v(")类型，类型都是字符串")]),v._v(" "),e("li",[v._v("可以用获取属性的形式操作")])])]),v._v(" "),e("li",[e("code",[v._v("getItem():")]),v._v(" "),e("ul",[e("li",[v._v("获取数据，通过"),e("code",[v._v("key")]),v._v("来获取到相应的"),e("code",[v._v("value")])])])]),v._v(" "),e("li",[e("code",[v._v("removeItem()")]),v._v(":\n"),e("ul",[e("li",[v._v("删除数据，通过key来删除相应的"),e("code",[v._v("value")])])])]),v._v(" "),e("li",[e("code",[v._v("clear()")]),v._v(":\n"),e("ul",[e("li",[v._v("删除全部存储的值")])])])])]),v._v(" "),e("li",[e("p",[v._v("存储事件:")]),v._v(" "),e("ul",[e("li",[v._v("当数据有修改或删除的情况下，就会触发"),e("code",[v._v("storage")]),v._v("事件")]),v._v(" "),e("li",[v._v("在对数据进行改变的窗口对象上是不会触发的`")]),v._v(" "),e("li",[e("code",[v._v("Key")]),v._v(" : 修改或删除的"),e("code",[v._v("key")]),v._v("值，如果调用"),e("code",[v._v("clear()")]),v._v(","),e("code",[v._v("key")]),v._v("为"),e("code",[v._v("null")])]),v._v(" "),e("li",[e("code",[v._v("newValue")]),v._v("  :  新设置的值，如果调用"),e("code",[v._v("removeStorage()")]),v._v(","),e("code",[v._v("key")]),v._v("为"),e("code",[v._v("null")])]),v._v(" "),e("li",[e("code",[v._v("oldValue")]),v._v(" :  调用改变前的"),e("code",[v._v("value")]),v._v("值")]),v._v(" "),e("li",[e("code",[v._v("storageArea")]),v._v(" : 当前的"),e("code",[v._v("storage")]),v._v("对象")]),v._v(" "),e("li",[e("code",[v._v("url")]),v._v(" :  触发该脚本变化的文档的url")]),v._v(" "),e("li",[v._v("注："),e("code",[v._v("session")]),v._v("同窗口才可以,例子："),e("code",[v._v("iframe")]),v._v("操作")])])])]),v._v(" "),e("h3",{attrs:{id:"四、html5拖拽"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、html5拖拽"}},[v._v("#")]),v._v(" 四、HTML5拖拽")]),v._v(" "),e("hr"),v._v(" "),e("ul",[e("li",[e("p",[v._v("图片自带拖拽功能")])]),v._v(" "),e("li",[e("p",[v._v("其他元素可设置"),e("code",[v._v("draggable")]),v._v("属性")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("draggable ：true")])]),v._v(" "),e("ul",[e("li",[v._v("拖拽元素(被拖拽元素对象)事件 :\n"),e("ul",[e("li",[e("code",[v._v("ondragstart")]),v._v(" : 拖拽前触发")]),v._v(" "),e("li",[e("code",[v._v("ondrag")]),v._v(" :拖拽前、拖拽结束之间，连续触发")]),v._v(" "),e("li",[e("code",[v._v("ondragend")]),v._v(" :拖拽结束触发")])])]),v._v(" "),e("li",[v._v("目标元素(拖拽元素被拖到的对象)事件 :\n"),e("ul",[e("li",[e("code",[v._v("ondragenter")]),v._v(" :进入目标元素触发")]),v._v(" "),e("li",[e("code",[v._v("ondragover")]),v._v(":进入目标、离开目标之间，连续触发")]),v._v(" "),e("li",[e("code",[v._v("ondragleave")]),v._v(" :离开目标元素触发")]),v._v(" "),e("li",[e("code",[v._v("ondrop")]),v._v(" :在目标元素上释放鼠标触发\n"),e("ul",[e("li",[v._v("需要在"),e("code",[v._v("ondragover")]),v._v("事件里面阻止默认事件")])])])])])])]),v._v(" "),e("li",[e("p",[v._v("拖拽兼容问题")]),v._v(" "),e("ul",[e("li",[v._v("火狐浏览器下需设置"),e("code",[v._v("dataTransfer")]),v._v("对象才可以拖拽除图片外的其他标签\n"),e("ul",[e("li",[e("p",[e("code",[v._v("dataTransfer")]),v._v("对象")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("setData()")]),v._v(" : 设置数据 "),e("code",[v._v("key")]),v._v("和"),e("code",[v._v("value")]),v._v("(必须是字符串)")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("getData()")]),v._v(" : 获取数据，根据"),e("code",[v._v("key")]),v._v("值，获取对应的"),e("code",[v._v("value")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("effectAllowed")]),v._v(" : 设置光标样式("),e("code",[v._v("none")]),v._v(", "),e("code",[v._v("copy")]),v._v(", "),e("code",[v._v("copyLink")]),v._v(", "),e("code",[v._v("copyMove")]),v._v(", "),e("code",[v._v("link")]),v._v(", "),e("code",[v._v("linkMove")]),v._v(","),e("code",[v._v("move")]),v._v(", "),e("code",[v._v("all")]),v._v(" 和"),e("code",[v._v("uninitialized")]),v._v(")")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("setDragImage")]),v._v(" ：三个参数（指定的元素，坐标"),e("code",[v._v("X")]),v._v("，坐标"),e("code",[v._v("Y")]),v._v("）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("files")]),v._v("： 获取外部拖拽的文件，返回一个"),e("code",[v._v("filesList")]),v._v("列表")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("filesList")]),v._v("下有个"),e("code",[v._v("type")]),v._v("属性，返回文件的类型")])])])])])])]),v._v(" "),e("li",[e("p",[v._v("读取文件信息")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("FileReader")]),v._v("(读取文件信息)\n"),e("ul",[e("li",[e("code",[v._v("readAsDataURL")])])])]),v._v(" "),e("li",[v._v("参数为要读取的文件对象\n"),e("ul",[e("li",[e("code",[v._v("onload")]),v._v("当读取文件成功完成的时候触发此事件")]),v._v(" "),e("li",[e("code",[v._v("this. result")]),v._v(" 获取读取的文件数据")])])])])])]),v._v(" "),e("h3",{attrs:{id:"五、跨文档操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、跨文档操作"}},[v._v("#")]),v._v(" 五、跨文档操作")]),v._v(" "),e("hr"),v._v(" "),e("ul",[e("li",[e("p",[v._v("跨文档请求")])]),v._v(" "),e("li",[e("p",[v._v("同域跨文档")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("iframe")]),v._v("内页：\n"),e("ul",[e("li",[v._v("父页面操作子页面："),e("code",[v._v("contentWindow")])]),v._v(" "),e("li",[v._v("子页面操作父页面："),e("code",[v._v("window.top")]),v._v("(找到最顶级的父页面)/"),e("code",[v._v("parent")]),v._v("(第一父页面)")]),v._v(" "),e("li",[v._v("新窗口页：\n"),e("ul",[e("li",[v._v("父页面操作子页面："),e("code",[v._v("window.open")])]),v._v(" "),e("li",[v._v("子页面操作父页面："),e("code",[v._v("window.opener")])])])])])])])]),v._v(" "),e("li",[e("p",[v._v("不同域跨文档")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("postMessage（“发送的数据”,”接收的域”）")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("message")]),v._v("事件监听")]),v._v(" "),e("li",[e("code",[v._v("ev.origin")]),v._v("发送数据来源的域")]),v._v(" "),e("li",[e("code",[v._v("ev.data")]),v._v(" 发送的数据")])])]),v._v(" "),e("li",[v._v("通过判断发送的数据来执行相应的需求")])])]),v._v(" "),e("li",[e("p",[v._v("ajax跨域")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("XMLHttpRequest")]),v._v(" 新增功能")]),v._v(" "),e("ul",[e("li",[v._v("跨域请求：修改服务端头信息")]),v._v(" "),e("li",[v._v("I"),e("code",[v._v("E")]),v._v("兼容："),e("code",[v._v("XDomaiRequest")])])])]),v._v(" "),e("li",[e("p",[v._v("进度事件：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("upload.onprogress(ev)")]),v._v(" 上传进度(实现文件上传进度条)\n"),e("ul",[e("li",[e("code",[v._v("ev.total")]),v._v("  发送文件的总量")]),v._v(" "),e("li",[e("code",[v._v("ev.loaded")]),v._v(" 已发送的量")])])]),v._v(" "),e("li",[e("code",[v._v("FormData")]),v._v("  构建提交二进制数据")])])])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);