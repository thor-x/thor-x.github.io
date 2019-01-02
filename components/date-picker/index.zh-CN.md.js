webpackJsonp([47],{1153:function(t,d){t.exports={content:["section",["p","\u53ef\u7528\u4e8e\u65e5\u671f\u9009\u62e9\uff0c\u914d\u7f6e\u7075\u6d3b\uff0c\u5982\u5e74\u6708\u65e5\u3001\u65f6\u5206\u79d2\u3001\u5e74\u6708\u65e5\u65f6\u5206\u79d2\u3001\u5e74\u6708\u7b49\u3002"]],meta:{category:"Components",type:"Data Entry",title:"DatePicker",subtitle:"\u65e5\u671f\u9009\u62e9\u5668",filename:"components/date-picker/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9e\u4f8b\u65b9\u6cd5",title:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","visible"],["td","\u9009\u62e9\u5668\u662f\u5426\u663e\u793a"],["td","Boolean"],["td",["code","false"]]],["tr",["td","title"],["td","\u5927\u6807\u9898"],["td","String"],["td","-"]],["tr",["td","subtitle"],["td","\u5b50\u6807\u9898"],["td","String"],["td","-"]],["tr",["td","confirmTxt"],["td","\u786e\u5b9a\u6309\u94ae\u6587\u6848"],["td","String"],["td",["code","\u786e\u5b9a"]]],["tr",["td","cancelTxt"],["td","\u53d6\u6d88\u6309\u94ae\u6587\u6848"],["td","String"],["td",["code","\u53d6\u6d88"]]],["tr",["td","min"],["td","\u53ef\u9009\u8303\u56f4\u7684\u6700\u5c0f\u503c"],["td","Date ","|"," Array"],["td","-"]],["tr",["td","max"],["td","\u53ef\u9009\u8303\u56f4\u7684\u6700\u5927\u503c"],["td","Date ","|"," Array"],["td","-"]],["tr",["td","value"],["td","\u5f53\u524d\u9009\u62e9\u7684\u65e5\u671f"],["td","Date ","|"," Array"],["td","-"]],["tr",["td","startColumn"],["td","\u8d77\u59cb\u5217\uff0c",["code","year"]," ",["code","month"]," ",["code","date"]," ",["code","hour"]," ",["code","minute"]," ",["code","second"],"\uff0c\u9ed8\u8ba4 ",["code","year"]],["td","String"],["td",["code","year"]]],["tr",["td","columnCount"],["td","\u5217\u6570"],["td","Number"],["td",["code","3"]]],["tr",["td","format"],["td","\u65e5\u671f\u683c\u5f0f"],["td","Object"],["td","{ year: 'YYYY', month: 'M', date: 'D', hour: 'hh', minute: 'mm', second: 'ss' }"]],["tr",["td","swipeTime"],["td","\u5feb\u901f\u6ed1\u52a8 ",["code","picker"]," \u6eda\u8f6e\u65f6\uff0c\u60ef\u6027\u6eda\u52a8\u52a8\u753b\u7684\u65f6\u957f\uff0c\u5355\u4f4d\uff1a",["code","ms"]],["td","Number"],["td",["code","600"]]],["tr",["td","maskClosable"],["td","\u70b9\u51fb\u8499\u5c42\u662f\u5426\u9690\u85cf"],["td","Boolean"],["td",["code","true"]]],["tr",["td","selectedIndex"],["td","\u88ab\u9009\u4e2d\u7684\u7d22\u5f15\u503c\uff0c\u62c9\u8d77 ",["code","picker"]," \u540e\u663e\u793a\u8fd9\u4e2a\u7d22\u5f15\u503c\u5bf9\u5e94\u7684\u5185\u5bb9"],["td","Array"],["td","[]"]],["tr",["td","transitionName"],["td","\u7ec4\u4ef6\u8fc7\u6e21\u52a8\u753b"],["td","String"],["td","-"]],["tr",["td","popupTransitionName"],["td","\u5f39\u5c42\u906e\u7f69\u8fc7\u6e21\u52a8\u753b"],["td","String"],["td","-"]],["tr",["td","onSelect"],["td","\u786e\u5b9a\u6309\u94ae\u56de\u8c03\u51fd\u6570"],["td","(...args[]): void"],["td","-"]],["tr",["td","onCancel"],["td","\u53d6\u6d88\u6309\u94ae\u56de\u8c03\u51fd\u6570"],["td","(...args[]): void"],["td","-"]],["tr",["td","onChange"],["td","\u9009\u4e2d\u540e\u7684\u56de\u8c03\u51fd\u6570\uff0c\u53ef\u4f7f\u7528",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form"]],["td","(...args[]): void"],["td","-"]]]],["p",["code","format"]," \u7684\u914d\u7f6e\u9879\u5982\u4e0b\uff1a"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","year"],["td","\u5e74\u7684\u683c\u5f0f\uff0c",["code","YYYY"]," \u4ee3\u8868\u5b8c\u6574\u5e74\u4efd\uff0c",["code","YY"]," \u4ec5\u5e74\u4efd\u540e\u4e24\u4f4d"],["td","String"],["td",["code","YYYY"]]],["tr",["td","month"],["td","\u6708\u7684\u683c\u5f0f\uff0c",["code","M"]," \u4e0d\u8865 0\uff0c",["code","MM"]," \u8865 0"],["td","String"],["td",["code","M"]]],["tr",["td","date"],["td","\u65e5\u7684\u683c\u5f0f\uff0c",["code","D"]," \u4e0d\u8865 0\uff0c",["code","DD"]," \u8865 0"],["td","String"],["td",["code","D"]]],["tr",["td","hour"],["td","\u65f6\u7684\u683c\u5f0f\uff0c",["code","h"]," \u4e0d\u8865 0\uff0c",["code","hh"]," \u8865 0"],["td","String"],["td",["code","hh"]]],["tr",["td","minute"],["td","\u5206\u7684\u683c\u5f0f\uff0c",["code","m"]," \u4e0d\u8865 0\uff0c",["code","mm"]," \u8865 0"],["td","String"],["td",["code","mm"]]],["tr",["td","second"],["td","\u79d2\u7684\u683c\u5f0f\uff0c",["code","s"]," \u4e0d\u8865 0\uff0c",["code","ss"]," \u8865 0"],["td","String"],["td",["code","ss"]]]]],["h2","\u5b9e\u4f8b\u65b9\u6cd5"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","show"],["td","\u663e\u793a"],["td","-"],["td","-"]],["tr",["td","hide"],["td","\u9690\u85cf"],["td","-"],["td","-"]]]]]}}});