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
^https?:\/\/soe\.tencentcloudapi\.com\/|https?:\/\/a\.welife001\.com\/applet\/listenread\/statistics\/*.*? url script-response-body ZNZY.js


[mitm]
hostname = soe.tencentcloudapi.com,a.welife001.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/SuggestedScore\":\d+[.]\d+/g,'SuggestedScore":100');
body = body.replace(/overall\":\d+/g,'overall":0');
body = body.replace(/SuggestedScore\":0/g,'SuggestedScore":100');
$done(body);
