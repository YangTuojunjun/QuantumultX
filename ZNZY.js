/******************************
⚠️如果放远程，请把ZNZY.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:智能作业
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/openspeech\.bytedance\.com\/api\/v1\/mdd.*? url script-response-body ZNZY.js


[mitm]
hostname = openspeech.bytedance.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/score\":^.{1,'score":1');
$done(body);
