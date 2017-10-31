#cross-origin resource sharing

http://www.ruanyifeng.com/blog/2016/04/cors.html

Access-Control-Allow-Origin（必含） – 允许的域名，只能填通配符或者单域名
Access-Control-Allow-Methods（必含） – 这允许跨域请求的http方法（常见有POST、GET、OPTIONS）
Access-Control-Allow-Headers（当预请求中包含Access-Control-Request-Headers时必须包含） – 这是对预请求当中Access-Control-Request-Headers的回复，和上面一样是以逗号分隔的列表，可以返回所有支持的头部。
Access-Control-Allow-Credentials（可选） – 该项标志着请求当中是否包含cookies信息，只有一个可选值：true（必为小写）。如果不包含cookies，请略去该项，而不是填写false。这一项与XmlHttpRequest2对象当中的withCredentials属性应保持一致，即withCredentials为true时该项也为true；withCredentials为false时，省略该项不写。反之则导致请求失败。
Access-Control-Max-Age（可选） – 以秒为单位的缓存时间。预请求的的发送并非免费午餐，允许时应当尽可能缓存。

PS:
客户端：xhr.withCredentials  = true; 服务端：Access-Control-Allow-Credentials: true；针对cookie
