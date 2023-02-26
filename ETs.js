/******************************
⚠️如果放远程，请把Ets.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:Ets
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^http?:\/\/www\.ets100\.com\/account\/info|http?:\/\/api\.ets100\.com\/user\/info|http?:\/\/api\.ets100\.com\/g\/set\/module-list|http?:\/\/api\.ets100\.com\/m\/ecard\/list|http?:\/\/api\.ets100\.com\/g\/set\/list.*? url script-response-body Ets.js


[mitm]
hostname = www.ets100.com,api.ets100.com,api.ets100.com,api.ets100.com,api.ets100.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/expire\":".*?\"/g,'expire":"2077-12-10 23:59:59"');
body = body.replace(/resource_name\":".*?"/g,'resource_name":"青青草原第一中学"');
body = body.replace(/module_is_lock\":\d+/g,'module_is_lock":0');
body = body.replace(/current_type\":\d+/g,'current_type":0');
body = body.replace(/lock\":\d+/g,'lock":0');
body = body.replace(/expire_time\":".*?\"/g,'expire_time":"2077-12-10 23:59:59"');
body = body.replace(/status\":\d/g,'status":1');
body = body.replace(/parent_name\":".*?"/g,'parent_name":"青青草原第一中学"');
body = body.replace(/gift\":\d+/g,'gift":3');
body = body.replace(/"name\":".*?",'"name":"super大羊驼","cover":"https://raw.githubusercontent.com/YangTuojunjun/QuantumultX/main/AI.png",');
$done(body);
