#jsonp
PS：只能get
function getData(data){

}
let script = docuemnt.createElement('script');
script.src = "test？name=1&callback=getData"

通过后端返回getData方法 并将参数传入，前端将此方法直接执行