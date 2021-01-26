(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1130:function(t,v,_){"use strict";_.r(v);var e=_(10),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[t._v("#")]),t._v(" 存储")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("[Point]")]),t._v(" Sql")]),t._v(" "),e("li",[e("code",[t._v("[Point]")]),t._v(" NoSql")]),t._v(" "),e("li",[e("code",[t._v("[Point]")]),t._v(" 缓存")]),t._v(" "),e("li",[e("code",[t._v("[Point]")]),t._v(" 数据一致性")])]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("科班的同学可以了解一下"),e("a",{attrs:{href:"http://www.cnblogs.com/CareySon/archive/2010/02/16/1668803.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库范式"),e("OutboundLink")],1),t._v(", 在 ElemeFe 面试不会问, 但是其他地方可能会问 (比如阿里).")]),t._v(" "),e("h2",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" Mysql")]),t._v(" "),e("p",[t._v("SQL (Structured Query Language) 是"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Relational_database",target:"_blank",rel:"noopener noreferrer"}},[t._v("关系式数据库管理系统"),e("OutboundLink")],1),t._v("的标准语言, 关于关系型数据库这里主要带大家看一下 Mysql 的几个问题")]),t._v(" "),e("h3",{attrs:{id:"存储引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[t._v("#")]),t._v(" 存储引擎")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("attr")]),t._v(" "),e("th",[t._v("MyISAM")]),t._v(" "),e("th",[t._v("InnoDB")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Locking")]),t._v(" "),e("td",[t._v("Table-level")]),t._v(" "),e("td",[t._v("Row-level")])]),t._v(" "),e("tr",[e("td",[t._v("designed for")]),t._v(" "),e("td",[t._v("need of speed")]),t._v(" "),e("td",[t._v("high volume of data")])]),t._v(" "),e("tr",[e("td",[t._v("foreign keys")]),t._v(" "),e("td",[t._v("× (DBMS)")]),t._v(" "),e("td",[t._v("✓ (RDBMS)")])]),t._v(" "),e("tr",[e("td",[t._v("transaction")]),t._v(" "),e("td",[t._v("×")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[t._v("fulltext search")]),t._v(" "),e("td",[t._v("✓")]),t._v(" "),e("td",[t._v("×")])]),t._v(" "),e("tr",[e("td",[t._v("scene")]),t._v(" "),e("td",[t._v("lots of select")]),t._v(" "),e("td",[t._v("lots of insert/update")])]),t._v(" "),e("tr",[e("td",[t._v("count rows")]),t._v(" "),e("td",[t._v("fast")]),t._v(" "),e("td",[t._v("slow")])]),t._v(" "),e("tr",[e("td",[t._v("auto_increment")]),t._v(" "),e("td",[t._v("fast")]),t._v(" "),e("td",[t._v("slow")])])])]),t._v(" "),e("ul",[e("li",[t._v("你的数据库有外键吗？")]),t._v(" "),e("li",[t._v("你需要事务支持吗？")]),t._v(" "),e("li",[t._v("你需要全文索引吗？")]),t._v(" "),e("li",[t._v("你经常使用什么样的查询模式？")]),t._v(" "),e("li",[t._v("你的数据有多大？")])]),t._v(" "),e("p",[t._v("参见 "),e("a",{attrs:{href:"http://coolshell.cn/articles/652.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MYSQL: INNODB 还是 MYISAM?"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),e("p",[t._v("索引是用空间换时间的一种优化策略. 推荐阅读: "),e("a",{attrs:{href:"http://www.cnblogs.com/cq-home/p/3482101.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql索引类型"),e("OutboundLink")],1),t._v(" 以及 "),e("a",{attrs:{href:"http://blog.mimvp.com/2015/03/the-difference-between-primary-key-and-unique-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("主键与唯一索引的区别"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" Mongodb")]),t._v(" "),e("blockquote",[e("p",[t._v("Monogdb 连接问题(超时/断开等)有可能是什么问题导致的?")])]),t._v(" "),e("ul",[e("li",[t._v("网络问题")]),t._v(" "),e("li",[t._v("任务跑不完, 超过了 driver 的默认链接超时时间 (如 30s)")]),t._v(" "),e("li",[t._v("Monogdb 宕机了")]),t._v(" "),e("li",[t._v("超过了连接空闲时间 (connection idle time) 被断开")]),t._v(" "),e("li",[t._v("fd 不够用 (ulimit 设置)")]),t._v(" "),e("li",[t._v("mongodb 最大连接数不够用 (可能是连接未复用导致)")]),t._v(" "),e("li",[t._v("etc...")])]),t._v(" "),e("h2",{attrs:{id:"replication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replication"}},[t._v("#")]),t._v(" Replication")]),t._v(" "),e("blockquote",[e("p",[t._v("备份数据库与 M/S, M/M 等部署方式的区别?")])]),t._v(" "),e("p",[t._v("关于数据库基于各种模式的特点全部可以通过以下图片分清:")]),t._v(" "),e("p",[e("img",{attrs:{src:_(511),alt:"storage"}})]),t._v(" "),e("p",[t._v("图片出处：Google App Engine 的 co-founder Ryan Barrett 在 2009 年的 google i/o 上的演讲 "),e("a",{attrs:{href:"http://snarfed.org/transactions_across_datacenters_io.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Transaction Across DataCenter》"),e("OutboundLink")],1),t._v("（视频： http://www.youtube.com/watch?v=srOgpXECblk）")]),t._v(" "),e("p",[t._v("根据上图, 我们可以知道  Master/Slave 与 Master/Master 的关系.")]),t._v(" "),e("table",[e("tr",[e("th",[t._v("attr")]),e("th",[t._v("Master/Slave")]),e("th",[t._v("Master/Master")])]),t._v(" "),e("tr",[e("td",[t._v("一致性")]),e("td",{attrs:{colspan:"2"}},[t._v("Eventually：当你写入一个新值后，有可能读不出来，但在某个时间窗口之后保证最终能读出来。比如：DNS，电子邮件、Amazon S3，Google搜索引擎这样的系统。")])]),t._v(" "),e("tr",[e("td",[t._v("事务")]),e("td",{attrs:{align:"center"}},[t._v("完整")]),e("td",{attrs:{align:"center"}},[t._v("本地")])]),t._v(" "),e("tr",[e("td",[t._v("延迟")]),e("td",{attrs:{colspan:"2",align:"center"}},[t._v("低延迟")])]),t._v(" "),e("tr",[e("td",[t._v("吞吐")]),e("td",{attrs:{colspan:"2",align:"center"}},[t._v("高吞吐")])]),t._v(" "),e("tr",[e("td",[t._v("数据丢失")]),e("td",{attrs:{colspan:"2",align:"center"}},[t._v("部分丢失")])]),t._v(" "),e("tr",[e("td",[t._v("熔断")]),e("td",{attrs:{align:"center"}},[t._v("只读")]),e("td",{attrs:{align:"center"}},[t._v("读/写")])])]),t._v(" "),e("h3",{attrs:{id:"读写分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[t._v("#")]),t._v(" 读写分离")]),t._v(" "),e("p",[t._v("读写分离是在 query 量大的情况下减轻单个 DB 节点压力, 优化数据库读/写速度的一种策略. 不论是 MySQL 还是 MongoDB 都可以进行读写分离.")]),t._v(" "),e("p",[t._v("读写分离的配置方式直接搜索一下 "),e("code",[t._v("数据库名 + 读写分离")]),t._v(" 即可找到. 通常是 M/S 的情况, 使用 Master 专门写, 用 Slave 节点专门读. 使用读写分离时, 请确认读的请求对一致性要求不高, 因为从写库同步读库是有延迟的.")]),t._v(" "),e("h2",{attrs:{id:"数据一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据一致性"}},[t._v("#")]),t._v(" 数据一致性")]),t._v(" "),e("p",[t._v("关于数据一致性推荐看陈皓的"),e("a",{attrs:{href:"http://www.infoq.com/cn/articles/distributed-system-transaction-processing",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统的事务处理"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("什么情况下数据会出现脏数据? 如何避免?")])]),t._v(" "),e("ul",[e("li",[t._v("从 A 帐号中把余额读出来")]),t._v(" "),e("li",[t._v("对 A 帐号做减法操作")]),t._v(" "),e("li",[t._v("把结果写回 A 帐号中")]),t._v(" "),e("li",[t._v("从 B 帐号中把余额读出来")]),t._v(" "),e("li",[t._v("对 B 帐号做加法操作")]),t._v(" "),e("li",[t._v("把结果写回 B 帐号中")])]),t._v(" "),e("p",[t._v("为了数据的一致性, 这6件事, 要么都成功做完, 要么都不成功, 而且这个操作的过程中, 对A、B帐号的其它访问必需锁死, 所谓锁死就是要排除其它的读写操作, 否则就会出现脏数据 ---- 即数据一致性的问题.")]),t._v(" "),e("p",[t._v("这个问题并不仅仅出现在数据库操作中, 普通的并发以及并行操作都可能导致出现脏数据. 避免出现脏数据通常是从架构上避免或者采用事务的思想处理.")]),t._v(" "),e("h3",{attrs:{id:"矛盾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#矛盾"}},[t._v("#")]),t._v(" 矛盾")]),t._v(" "),e("ul",[e("li",[t._v("1）要想让数据有高可用性，就得写多份数据")]),t._v(" "),e("li",[t._v("2）写多份的问题会导致数据一致性的问题")]),t._v(" "),e("li",[t._v("3）数据一致性的问题又会引发性能问题")])]),t._v(" "),e("p",[t._v("强一致性必然导致性能短板, 而弱一致性则有很好的性能但是存在数据安全(灾备数据丢失)/一致性(脏读/脏写等)的问题.")]),t._v(" "),e("p",[t._v("目前 Node.js 业内流行的主要是与 Mongodb 配合, 在数据一致性方面属于短板.")]),t._v(" "),e("h3",{attrs:{id:"事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),e("p",[t._v('事务并不仅仅是 sql 数据库中的一个功能, 也是分布式系统开发中的一个思想, 事务在分布式的问题中可以称为 "两阶段提交" (以下引用陈皓原文)')]),t._v(" "),e("p",[t._v("第一阶段：")]),t._v(" "),e("ul",[e("li",[t._v("协调者会问所有的参与者结点，是否可以执行提交操作。")]),t._v(" "),e("li",[t._v("各个参与者开始事务执行的准备工作：如：为资源上锁，预留资源，写undo/redo log……")]),t._v(" "),e("li",[t._v("参与者响应协调者，如果事务的准备工作成功，则回应“可以提交”，否则回应“拒绝提交”。")])]),t._v(" "),e("p",[t._v("第二阶段：")]),t._v(" "),e("ul",[e("li",[t._v("如果所有的参与者都回应“可以提交”，那么，协调者向所有的参与者发送“正式提交”的命令。参与者完成正式提交，并释放所有资源，然后回应“完成”，协调者收集各结点的“完成”回应后结束这个Global Transaction。")]),t._v(" "),e("li",[t._v("如果有一个参与者回应“拒绝提交”，那么，协调者向所有的参与者发送“回滚操作”，并释放所有资源，然后回应“回滚完成”，协调者收集各结点的“回滚”回应后，取消这个Global Transaction。")])]),t._v(" "),e("p",[t._v("异常:")]),t._v(" "),e("ul",[e("li",[t._v("如果第一阶段中，参与者没有收到询问请求，或是参与者的回应没有到达协调者。那么，需要协调者做超时处理，一旦超时，可以当作失败，也可以重试。")]),t._v(" "),e("li",[t._v("如果第二阶段中，正式提交发出后，如果有的参与者没有收到，或是参与者提交/回滚后的确认信息没有返回，一旦参与者的回应超时，要么重试，要么把那个参与者标记为问题结点剔除整个集群，这样可以保证服务结点都是数据一致性的。")]),t._v(" "),e("li",[t._v("第二阶段中，如果参与者收不到协调者的commit/fallback指令，参与者将处于“状态未知”阶段，参与者完全不知道要怎么办。")])]),t._v(" "),e("h2",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),e("blockquote",[e("p",[t._v("redis 与 memcached 的区别?")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("attr")]),t._v(" "),e("th",[t._v("memcached")]),t._v(" "),e("th",[t._v("redis")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("struct")]),t._v(" "),e("td",[t._v("key/value")]),t._v(" "),e("td",[t._v("key/value + list, set, hash etc.")])]),t._v(" "),e("tr",[e("td",[t._v("backup")]),t._v(" "),e("td",[t._v("×")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[t._v("Persistence")]),t._v(" "),e("td",[t._v("×")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[t._v("transcations")]),t._v(" "),e("td",[t._v("×")]),t._v(" "),e("td",[t._v("✓")])]),t._v(" "),e("tr",[e("td",[t._v("consistency")]),t._v(" "),e("td",[t._v("strong (by cas)")]),t._v(" "),e("td",[t._v("weak")])]),t._v(" "),e("tr",[e("td",[t._v("thread")]),t._v(" "),e("td",[t._v("multi")]),t._v(" "),e("td",[t._v("single")])]),t._v(" "),e("tr",[e("td",[t._v("memory")]),t._v(" "),e("td",[t._v("physical")]),t._v(" "),e("td",[t._v("physical & swap")])])])]),t._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("ul",[e("li",[t._v("zookeeper")]),t._v(" "),e("li",[t._v("kafka")]),t._v(" "),e("li",[t._v("storm")]),t._v(" "),e("li",[t._v("hadoop")]),t._v(" "),e("li",[t._v("spark")])])])}),[],!1,null,null,null);v.default=r.exports},511:function(t,v,_){t.exports=_.p+"assets/img/storage.61bcc00e.jpeg"}}]);