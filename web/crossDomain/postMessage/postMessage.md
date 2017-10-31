#postMessage 用于在一个页面下的iframe传递信息
情景： 主页page里面嵌入一个name=child的跨域iframe
语法：
page页面
var otherWindow = window.iframe['child']
otherWindow.postMessage(data,target,[transfer])
target是用于指定所传递窗口的源，跨域设置为‘*’，transfer默认为false 指这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

iframe页面
window.addEventListener('message',function(e){})