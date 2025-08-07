# HTML相关
## HTML5 有哪些新特性、移除了那些元素 ？如何处理 HTML5 新标签的浏览器兼容问题 ？如何区分 HTML 和 HTML5 ？
HTML5 现在已经不是 SGML（标准通用标记语言）的子集，主要是关于图像，位置，存储，多任务等功能的增加。

* 新特性:
   * 绘画 canvas;
   * 用于媒介回放的 video 和 audio 元素;
   * 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
   * sessionStorage 的数据在浏览器关闭后自动删除;
   * 语义化更好的内容元素，比如 article、footer、header、nav、section;
   * 表单控件：calendar、date、time、email、url、search;
   * 新的技术：webworker, websocket, Geolocation;

* 移除的元素
   * 纯表现的元素：basefont，big，center，font, s，strike，tt，u;
   * 对可用性产生负面影响的元素：frame，frameset，noframes；

* 支持 HTML5 新标签
   * IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式。
   * 当然也可以直接使用成熟的框架、比如 html5shim;
   ```html
   <!--[if lt IE 9]>
    <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
    <![endif]-->
   ```
* H5新增属性
```js
  article: 标签定义外部的内容。
  aside:标签定义 article 以外的内容。
  audio:h5新增音频标签。没有高宽属性。
  canvas:h5新增画布标签。
  command: 定义命令按钮(未测试)
  datalist：标签定义选项列表。datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表。
  keygen:标签规定用于表单的密钥对生成器字段
  output：定义不同的输出类型，比如脚本。
  details：标签用于描述文档或文档某个部分的细节。
  figure：标签用于对元素进行组合。
  figcaption：定义 figure 元素的标题。
  footer：定义 section 或 document 的页脚。
  header：定义 section 或 document 的页眉。
  hgroup：用于对网页或区段（section）的标题进行组合。
  mark：标签定义带有记号的文本。
  meter：通过min="0" max="20"的方式定义度量衡。仅用于已知最大和最小值的度量。
  nav：定义document或section或article的导航。
  progress：定义任何类型的任务的进度。
  rp:定义若浏览器不支持 ruby 元素显示的内容
  rt：定义 ruby 注释的解释
  ruby：定义 ruby 注释
  section：标签定义文档中的节、区段。比如章节、页眉、页脚或文档中的其他部分。
  source:audio和video的属性之一。为audio和video定义媒介源。
  summary:为details定义标题。
  time:定义日期或时间。
  video：h5新增视频标签。具有高宽属性。
```
---

## 如何处理html5标签的浏览器兼容性问题？
1. 创建标签：
   简单地通过document.createElement（tagName）即可以让浏览器识别标签和CSS引擎知道该标签的存在。，但是默认样式需要自己写
2. 使用html5shiv: 在你的head中添加下面代码
    ```js
    <!--[if lt IE 9]>
    　　<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    ```
3. 使用Kill IE6
   ```js
    <!--[if lte IE 6]>
      <script src="http://letskillie6.googlecode.com/svn/trunk/letskillie6.zh_CN.pack.js"></script>
    <![endif]-->
    ```

---

## 简述一下你对 HTML 语义化的理解 ？
1. 用正确的标签做正确的事情。
2. html 语义化让页面的内容结构化，结构更清晰，
3. 便于对浏览器、搜索引擎解析;
4. 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
5. 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;
6. 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

---

## HTML5 的离线储存怎么使用，工作原理能不能解释一下 ？
在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
* 原理:
HTML5 的离线存储是基于一个新建的 .appcache 文件(manifest)的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

::: tip manifest文件格式
manifest 文件可分为三个部分：
1. CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
2. NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
3. FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）
:::

* 如何使用
   1. 页面头部像下面一样加入一个 manifest 的属性；
   ```
   <html lang="en" manifest="demo.appcache">
   ```
   2. 在 demo.appcache 文件的编写离线存储的资源；
   ```
    CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css

    NETWORK:
    resourse/logo.png

    FALLBACK:
    /offline.html
   ```
   3. 在离线状态时，操作 window.applicationCache 进行需求实现。

---

## 简述一下 src 与 href 的区别
* href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
* src 是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；
* 在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将 js 脚本放在底部而不是头部。

---

## html 中 title 属性和 alt 属性的区别 ？
1. alt  
```<img src="#" alt="alt 信息" />```  
当图片不输出信息的时候，会显示 alt 信息， 鼠标放上去没有信息。当图片正常读取，不会出现 alt 信息。   
2. title   
```<img src="#" alt="alt 信息" title="title 信息" />```  
当图片不输出信息的时候，会显示 alt 信息，鼠标放上去会出现 title 信息。当图片正常输出的时候，不会出现 alt 信息，鼠标放上去会出现 title 信息。

---

## Doctype 作用 ？标准模式与兼容模式各有什么区别 ?
* 声明位于位于 HTML 文档中的第一行，处于html标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现。
* 标准模式的排版和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。

---

## DOCTYPE作用，有几种DOCTYPE类型
* 作用  
  html中doctype标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。
* 特点
   1. <!doctype>声明必须处于HTML文档的头部，在html标签之前，HTML5中不区分大小写
   2. <!doctype>声明不是一个HTML标签，是一个用于告诉浏览器当前HTMl版本的指令
   3. 现代浏览器的html布局引擎通过检查doctype决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型。
   4. 在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容
   5. HTML5不基于SGML，所以不用指定DTD
* 类型
   1. HTML4.01 strict：该 DTD 包含所有 HTML 元素和属性，但不允许使用表现性、废弃元素（如font）以及frameset(框架集)。声明：
   ```js
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
   ```
   2. HTML4.01 Transitional:该 DTD 包含所有 HTML 元素和属性，包括表现性、废弃元素（如font），不允许使用frameset。声明:
   ```js
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
   ```

   3. HTML4.01 Frameset:该 DTD 包含所有 HTML 元素和属性，允许表现性元素，废弃元素以及frameset。声明：
   ```js
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
   ```

   4. XHTML1.0 Strict:不使用允许表现性、废弃元素以及frameset。文档必须是结构良好的XML文档。声明：
   ```js
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
   ```

   5. XHTML1.0 Transitional:允许使用表现性、废弃元素，不允许frameset，文档必须是结构良好的XMl文档。声明：
   ```js
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   6. XHTML 1.0 Frameset:允许使用表现性、废弃元素以及frameset，文档必须是结构良好的XML文档。声明：
   ```js
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
   ```

   7. HTML 5: 
   ```js
   <!DOCTYPE html>
   ``` 
---

## HTML5 为什么只需要写 '<!DOCTYPE HTML>' ？   
 HTML5 不基于 SGML(标准通用标记语言（以下简称“通用标言”)，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；而 HTML4.01 基于 SGML，所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型。

---

## 行内元素有哪些 ？块级元素有哪些 ？空(void)元素有那些 ？
CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display 值。如 div 的 display 默认值为 “block”，则为“块级”元素；span 默认 display 属性值为 “inline”，是“行内”元素。空元素一般指的是无须闭合的标签.

* 行内元素有：a b i em(斜体,强调) span img input select strong（强调的语气） sub(下标) sup(上标)
* 块级元素有：div table form ul ol li dl dt dd h1 h2 h3 h4  p
* 常见的空元素：img input link meta br hr ，鲜为人知的是：area base col command embed keygen param source track wbr

---

## iframe 内嵌框架有那些缺点 ？
* 内联框架iframe是一种框架，也是一种很常见的网页嵌入方式
* 优点
   1. iframe能够原封不动的把嵌入的网页展现出来。
   2. 重载页面时不需要重载整个页面，只需要重载页面中的一个框架页(减少了数据的传输，增加了网页下载速度)
   3. 方便制作导航栏
* 缺点
   1. 会产生很多页面，不容易管理
   2. 不容易打印
   3. 浏览器的后退按钮无效
   4. 搜索引擎的检索程序无法解读这种页面，不利于 SEO 搜索引擎优化（Search Engine Optimization）
   5. 多框架的页面会增加服务器的http请求
   6. iframe 会阻塞主页面的 onload 事件；
   7. iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
* 如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上6，7两个问题。

---

## Label 的作用是什么？是怎么用的 ？
label 标签来定义表单控件间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
```
<label for="Name">Number:</label>
<input type=“text“ name="Name"  id="Name"/>
<label>Date:<input type="text" name="B"/></label>
```

---

## HTML5 的 form 如何关闭自动完成功能 ？
HTML5 中有个新属性autocomplete ，autocomplete 属性规定表单是否应该启用自动完成功能，它开启时允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。   
给不想要提示的 form 或某个 input 设置为 autocomplete=off。

---

## 如何实现浏览器内多个标签页之间的通信 ? (阿里)
* WebSocket、SharedWorker；
* 也可以调用 localStorage、cookies 等本地存储方式；
* localstorge 在另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信；注意 Safari 在无痕模式下设置 localstorge 值时会抛出 QuotaExceededError 的异常；

---

## webSocket 如何兼容低浏览器 ？(阿里)
* Adobe Flash Socket 、
* ActiveX HTMLFile (IE) 、
* 基于 multipart 编码发送 XHR 、
* 基于长轮询的 XHR。

---

## 页面可见性（Page Visibility API） 可以有哪些用途 ？
* 通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
* 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；

---

## 网页验证码是干嘛的，是为了解决什么安全问题。
* 区分用户是计算机还是人的公共全自动程序；
* 可以防止恶意破解密码、刷票、论坛灌水；
* 有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。

---

## title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别 ？
* title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取也有很大的影响；
* strong 是标明重点内容，有语气加强的含义，使用阅读设备阅读网页时：strong 会重读，而 b 是展示强调内容。 
::: tip
   1. 都展示为加粗的效果
   2. b 元素代表侧重实用目的而不带有任何额外重要性也不暗示不同语态或语气的一段文本，比如一段文本摘要中的关键词、一段审查中的产品名称、文本驱动软件中的可执行语句或者一篇文章的导语。
   3. strong 元素代表内容的强烈的重要性、严重性或者紧急性。如果说用 em 标签修饰的文本好像是在大声呼喊，那么用 strong 标签修饰的文本就无异于尖叫了
:::
* i 内容展示为斜体，em 表示强调的文本；
::: tip
   1. 都展示为斜体效果
   2. i 元素代表在普通文本中具有不同语态或语气的一段文本，某种程度上表明一段不同特性的文本，比如一个分类学名称，一个技术术语，一个外语习语，一个音译，一个想法，或者西方文本中的一艘船名。
   3. em 元素代表对其内容的强调。突出强调的位置会改变语句本身的意义。类似汉语里面重读某个词表示不同含义
:::
* Physical Style Elements -- 自然样式标签：b, i, u, s, pre
* 应该准确使用语义样式标签, 但不能滥用, 如果不能确定时，首选使用自然样式标签。

---

## 前端页面有哪三层构成，分别是什么 ？作用是什么 ？
网页分成三个层次，即：结构层、表示层、行为层。
1. 网页的结构层（structurallayer）由 HTML 或 XHTML 之类的标记语言负责创建。标签，也就是那些出现在尖括号里的单词，对网页内容的语义含义做出描述。这些标签不包含任何关于如何显示有关内容的信息。例如，P 标签表达了这样一种语义：“这是一个文本段。”
2. 网页的表示层（presentationlayer）由 CSS 负责创建。CSS 对“如何显示有关内容”的问题做出了回答。
3. 网页的行为层（behaviorlayer）负责回答 “内容应该如何对事件做出反应” 这一问题。这是 Javascript 语言和 DOM 主宰的领域。

---

## 谈谈以前端的角度出发，做好 SEO ，需要考虑什么 ？
* 了解搜索引擎如何抓取网页和如何索引网页 你需要知道一些搜索引擎的基本工作原理，各个搜索引擎之间的区别，搜索机器人（SE robot 或叫 web cra何进行工作，搜索引擎如何对搜索结果进行排序等等。

* Meta 标签优化 主要包括主题（Title)，网站描述(Description)，和关键词（Keywords）。还有一些其它的隐藏文字比如 Author(作者)，Category（目录），Language（编码语种）等。

* 如何选取关键词并在网页中放置关键词 搜索就得用关键词。关键词分析和选择是 SEO 最重要的工作之一。首先要给网站确定主关键词（一般在 5 个以上），然后针对这些关键词进行优化，包括关键词密度（Density），相关度（Relavancy），突出性（Prominency）等等。

* 了解主要的搜索引擎 虽然搜索引擎有很多，但是对网站流量起决定作用的就那么几个。比如英文的主要有 Google，Yahoo，Bing 等有百度，搜狗，有道等。不同的搜索引擎对页面的抓取和索引、排序的规则都不一样。还要了解各搜索门户和搜索的关系，比如 AOL 网页搜索用的是 Google 的搜索技术，MSN 用的是 Bing 的技术。

* 主要的互联网目录 Open Directory 自身不是搜索引擎，而是一个大型的网站目录，他和搜索引擎的主要区别是网站内容的收集方目录是人工编辑的，主要收录网站主页；搜索引擎是自动收集的，除了主页外还抓取大量的内容页面。

* 按点击付费的搜索引擎 搜索引擎也需要生存，随着互联网商务的越来越成熟，收费的搜索引擎也开始大行其道。最典型的有 Overture 当然也包括 Google 的广告项目 Google Adwords。越来越多的人通过搜索引擎的点击广告来定位商业网站，这里面化和排名的学问，你得学会用最少的广告投入获得最多的点击。

* 搜索引擎登录 网站做完了以后，别躺在那里等着客人从天而降。要让别人找到你，最简单的办法就是将网站提交（submit）给搜索引擎。如果你的是商业网站，主要的搜索引擎和目录都会要求你付费来获得收录（比如 Yahoo 要 299 美元），但是好消少到目前为止）最大的搜索引擎 Google 目前还是免费，而且它主宰着 60％ 以上的搜索市场。

* 链接交换和链接广泛度（Link Popularity） 网页内容都是以超文本（Hypertext）的方式来互相链接的，网站之间也是如此。除了搜索引擎以外，人们也不同网站之间的链接来 Surfing（“冲浪”）。其它网站到你的网站的链接越多，你也就会获得更多的访问量。更重你的网站的外部链接数越多，会被搜索引擎认为它的重要性越大，从而给你更高的排名。

* 标签的合理使用
---

## 分别写出以下几个HTML标签：文字加粗、下标、上标、居中、字体
类型|标签
-|-
加粗 | b / strong
下标 | sub
上标 | sup
居中 | center
字体 | font

---

## H5语义化标签整理
标签|说明
- | -
header | 头部 
footer | 底部 
aside | 侧边栏 
nav | 导航栏 
article | 文章 
section | 文档中的区段 
hgroup | 标题组 | 
pre | 表示这部分内容是预先排版过的，不需要浏览器排版
samp | 表示由程序或计算机输出的文本字符串
code | 表示计算机代码 
s | 划线，表示错误代码，常用于电商网站打折前价格  
hr | 横线， 表示故事走向的改变或话题的转变(用于表示上面的主题结束，接下来的内容属于另一个主题。) 
abbr | 缩写,可以通过可选的 title属性来提供对缩写的完整定义(鼠标移上去会展示完整字段，类似图片title <abbr title="People's Republic of China">PRC</abbr>)
blockquote | 段落级的引述 
q | 行内的引述 (引述其他人或来源的简短内容)
var | 表示数学表达式、程序上下文或占位符
cite | 引述的作品名 
figure | 插入文章中的复杂内容，不限于图片，代码等，只要是具有一定闭合性的内容
figcaption | 插入内容的标题 
dfn | 用来定义术语，可以通过可选的 title属性来提供对术语的准确定义
dl dt dd | 用于定义列表类型标签

---
