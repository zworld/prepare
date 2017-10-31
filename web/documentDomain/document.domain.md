#document.domain
这种方案主要用于主域相同，子域不同的情况。例如：[https://jdc.jd.com/]和[https://www.jd.com/];
可以强制设置前者 document.domain = 'jd.com'。实现同源