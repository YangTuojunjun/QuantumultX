/******************************
⚠️如果放远程，请把ZY.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:班级小管家作业提交时间2077年
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/a\.welife001\.com\/applet\/notify\/checkNew2Parent.*? url script-response-body ZY.js


[mitm]
hostname = a.welife001.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/end_day\":".*?\"/g,'end_day":"2077-1-04 0:00"');
body = body.replace(/end_day_valid\":false/g,'end_day_valid":true');
$done(body);
