(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{205:function(t,_,v){t.exports=v.p+"assets/img/TCP.0752aea1.png"},252:function(t,_,v){"use strict";v.r(_);var r=v(0),P=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"internet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#internet"}},[t._v("#")]),t._v(" Internet")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"四层网络结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四层网络结构"}},[t._v("#")]),t._v(" 四层网络结构")]),t._v(" "),r("ol",[r("li",[t._v("应用层：DNS、HTTP、HTTPS、DHCP、RTMP、P2P、GTP、RPC")]),t._v(" "),r("li",[t._v("传输层：TCP、UDP")]),t._v(" "),r("li",[t._v("网络层：IP、ICMP、OSPF、BGP、IPSec、GRE")]),t._v(" "),r("li",[t._v("数据链路层：ARP、VLAN、STP")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"tcp和udp的异同点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp的异同点"}},[t._v("#")]),t._v(" TCP和UDP的异同点")]),t._v(" "),r("p",[t._v("TCP: Transmission Control Protocol，传输控制协议"),r("br"),t._v("\nUDP: User Data Protocol，用户数据报协议"),r("br"),t._v("\nTCP和UDP的相同点:\nTCP和UDP都是在网络层，都是传输协议，都是能保护网络层的传输，双方的通信都需要开放端口。"),r("br"),t._v("\nTCP和UDP的不同点:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th"),t._v(" "),r("th",[t._v("TCP (Transmission Control Protocol)")]),t._v(" "),r("th",[t._v("UDP (User Data Protocol)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("TCP的传输是可靠传输")]),t._v(" "),r("td",[t._v("UDP的传输是不可靠传输。")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("TCP是基于连接的协议，在正式收发数据前，必须和对方建立可靠的连接")]),t._v(" "),r("td",[t._v("UDP是面向非连接的协议，它不与对方建立连接，而是直接把数据包发送出去")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("TCP是一种可靠的通信服务，负载相对而言比较大，TCP采用套接字（socket）或者端口（port）来建立通信。")]),t._v(" "),r("td",[t._v("UDP是一种不可靠的网络服务，负载比较小。")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("TCP和UDP结构不同，TCP包括序号、确认信号、数据偏移、控制标志（通常说的URG、ACK、PSH、RST、SYN、FIN）、窗口、校验和、紧急指针、选项等信息。")]),t._v(" "),r("td",[t._v("UDP包含长度和校验和信息。")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("TCP提供超时重发，丢弃重复数据，检验数据，流量控制等功能，保证数据能从一端传到另一端。")]),t._v(" "),r("td",[t._v("UDP不提供可靠性，它只是把应用程序传给IP层的数据报发送出去，但是并不能保证它们能到达目的地。")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("TCP在发送数据包前在通信双方有一个三次握手机制，确保双方准备好，在传输数据包期间，TCP会根据链路中数据流量的大小来调节传送的速率，传输时如果发现有丢包，会有严格的重传机制，故而传输速度很慢。")]),t._v(" "),r("td",[t._v("UDP在传输数据报前不用在客户和服务器之间建立一个连接，且没有超时重发等机制，故而传输速度很快。")])]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[t._v("TCP支持全双工和并发的TCP连接，提供确认、重传与拥塞控制。")]),t._v(" "),r("td",[t._v("UDP适用于哪些系统对性能的要求高于数据完整性的要求，需要“简短快捷”的数据交换、需要多播和广播的应用环境。")])])])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"tcp的三次握手建立连接详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp的三次握手建立连接详解"}},[t._v("#")]),t._v(" TCP的三次握手建立连接详解")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/86426969",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官，不要再问我三次握手和四次挥手"),r("OutboundLink")],1),t._v("\n大致流程如下：")]),t._v(" "),r("ol",[r("li",[t._v("客户端向服务器发送一个SYN J")]),t._v(" "),r("li",[t._v("服务器向客户端响应一个SYN K，并对SYN J进行确认ACK J+1")]),t._v(" "),r("li",[t._v("客户端再想服务器发一个确认ACK K+1\n"),r("img",{attrs:{src:v(205),alt:"TCP三次握手"}})])]),t._v(" "),r("hr")])}),[],!1,null,null,null);_.default=P.exports}}]);