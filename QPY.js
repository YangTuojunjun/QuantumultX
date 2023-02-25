/******************************
⚠️如果放远程，请把QPY.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:趣配音破解（配音）
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/iosapi\.peiyinxiu\.com.*?.*? url script-response-body QPY.js


[mitm]
hostname = iosapi.peiyinxiu.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/is_vip\":\d/g,'is_vip":1');
body = body.replace(/vip_end_time\":\w+/g,'vip_end_time":2077-01-08 16:42:00');
body = body.replace(/vipLevel\":\d+/g,'vipLevel":1');
body = body.replace(/code\":\d+/g,'code":0');
$done(body);