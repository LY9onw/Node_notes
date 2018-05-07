# Node_notes

Node_notes

-----------------------------

>- 阻塞代码 -> 在文件读取完毕之后才执行完代码

>- 非阻塞代码 -> 不需要等待文件读取完毕，在读取文件的同时执行其余代码 -> 提供程序性能

### 阻塞是按顺序执行的，而非阻塞是不需要按顺序的

> Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）
在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

-----------------------------

>- EventEmitter -> 事件触发与事件监听器功能的封装

------------------2018.05.07 YoliLin
