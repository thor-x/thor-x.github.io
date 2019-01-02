webpackJsonp([23],{1191:function(n,s){n.exports={content:["article",["p",["code","crpl-mobile"]," \u662f\u4fe1\u8d37\u5e73\u53f0\u7684\u79fb\u52a8\u89c4\u8303\u7684 React \u5b9e\u73b0\uff0c\u501f\u9274\u81ea ",["a",{title:null,href:"https://ant.design"},"Ant Design"]," \u548c ",["a",{title:null,href:"https://mobile.ant.design"},"Ant Design Mobile"],"\u3002"],["h2","\u7279\u6027\u548c\u4f18\u52bf"],["ul",["li",["p","UI \u6837\u5f0f\u9ad8\u5ea6\u53ef\u914d\u7f6e\uff0c\u62d3\u5c55\u6027\u66f4\u5f3a\uff0c\u8f7b\u677e\u9002\u5e94\u5404\u7c7b\u4ea7\u54c1\u98ce\u683c"]],["li",["p","\u7ec4\u4ef6\u4e30\u5bcc\u3001\u80fd\u5168\u9762\u8986\u76d6\u5927\u90e8\u5206\u573a\u666f"]],["li",["p",'\u63d0\u4f9b "\u7ec4\u4ef6\u6309\u9700\u52a0\u8f7d" / "Web \u9875\u9762\u9ad8\u6e05\u663e\u793a" / "SVG Icon" \u7b49\u4f18\u5316\u65b9\u6848\uff0c\u4e00\u4f53\u5f0f\u5f00\u53d1']],["li",["p","\u4f7f\u7528 TypeScript \u5f00\u53d1\uff0c\u63d0\u4f9b\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\uff0c\u652f\u6301\u7c7b\u578b\u53ca\u5c5e\u6027\u667a\u80fd\u63d0\u793a\uff0c\u65b9\u4fbf\u4e1a\u52a1\u5f00\u53d1"]],["li",["p","\u5168\u9762\u517c\u5bb9 react"]]],["h2","\u9002\u7528\u573a\u666f"],["ul",["li",["p","\u9002\u5408\u4e8e\u4e2d\u5927\u578b\u4ea7\u54c1\u5e94\u7528"]],["li",["p","\u9002\u5408\u4e0d\u540c UI \u98ce\u683c\u7684\u9ad8\u5ea6\u5b9a\u5236\u9700\u6c42\u7684\u5e94\u7528"]]],["h2","\u5feb\u901f\u4e0a\u624b"],["blockquote",["p","\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u63a8\u8350\u5148\u5b66\u4e60 ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"]," \u548c ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"],"\u3002\u6211\u4eec\u4f7f\u7528\u4e86 ",["code","babel"],"\uff0c\u8bd5\u8bd5\u7528 ",["a",{title:null,href:"http://babeljs.io/blog/2015/06/07/react-on-es6-plus"},"ES2015"]," \u7684\u5199\u6cd5\u6765\u63d0\u5347\u7f16\u7801\u7684\u6109\u60a6\u611f\u3002"],["p","\u786e\u8ba4 ",["a",{title:null,href:"https://nodejs.org/en/"},"Node.js"]," \u5df2\u7ecf\u5347\u7ea7\u5230 v6.x \u6216\u4ee5\u4e0a\u3002"]],["h3","1. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee"],["p","\u53ef\u4ee5\u662f\u5df2\u6709\u9879\u76ee\uff0c\u6216\u8005\u662f\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," / ",["a",{title:null,href:"https://github.com/facebook/create-react-app"},"create-react-app"]," \u65b0\u521b\u5efa\u7684\u7a7a\u9879\u76ee"],["blockquote",["p","\u53c2\u8003\u66f4\u591a",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples"},"\u793a\u4f8b\u96c6"],"\n\u6216\u8005\u4f60\u53ef\u4ee5\u5229\u7528 React \u751f\u6001\u5708\u4e2d\u7684 ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"\u5404\u79cd\u811a\u624b\u67b6"]]],["h3","2. \u5b89\u88c5"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> crpl-mobile --save'},["code","$ npm install crpl-mobile --save"]],["h3","3. \u4f7f\u7528"],["p","\u7ec4\u4ef6\u4f7f\u7528\u5b9e\u4f8b\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'crpl-mobile\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Button } from 'crpl-mobile';\nReactDOM.render(<Button>Start</Button>, mountNode);"]],["p","\u5f15\u5165\u6837\u5f0f\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'crpl-mobile/dist/crpl-mobile.css\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// or \'crpl-mobile/dist/crpl-mobile.less\'</span>'},["code","import 'crpl-mobile/dist/crpl-mobile.css';  // or 'crpl-mobile/dist/crpl-mobile.less'"]],["h5","\u6309\u9700\u52a0\u8f7d"],["p",["strong","\u6ce8\u610f\uff1a\u5f3a\u70c8\u63a8\u8350\u4f7f\u7528\u3002"]],["p","\u4e0b\u9762\u4e24\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5",["strong","\u53ea\u52a0\u8f7d"],"\u7528\u5230\u7684\u7ec4\u4ef6\uff0c\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\u5373\u53ef\u3002"],["ul",["li",["p","\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],"\uff08\u63a8\u8350\uff09\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc or babel-loader option</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> libraryName<span class="token punctuation">:</span> <span class="token string">"crpl-mobile"</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">// `style: true` \u4f1a\u52a0\u8f7d less \u6587\u4ef6</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { libraryName: "crpl-mobile", style: "css" }] // `style: true` \u4f1a\u52a0\u8f7d less \u6587\u4ef6\n  ]\n}']],["p"," \u7136\u540e\u53ea\u9700\u4ece crpl-mobile \u5f15\u5165\u6a21\u5757\u5373\u53ef\uff0c\u65e0\u9700\u5355\u72ec\u5f15\u5165\u6837\u5f0f\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// babel-plugin-import \u4f1a\u5e2e\u52a9\u4f60\u52a0\u8f7d JS \u548c CSS</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'crpl-mobile\'</span><span class="token punctuation">;</span>'},["code","// babel-plugin-import \u4f1a\u5e2e\u52a9\u4f60\u52a0\u8f7d JS \u548c CSS\nimport { Button } from 'crpl-mobile';"]]],["li",["p","\u624b\u52a8\u5f15\u5165"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'crpl-mobile/lib/button\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// \u52a0\u8f7d JS</span>\n<span class="token keyword">import</span> <span class="token string">\'crpl-mobile/lib/button/style/css\'</span><span class="token punctuation">;</span>    <span class="token comment" spellcheck="true">// \u52a0\u8f7d CSS</span>\n<span class="token comment" spellcheck="true">// import \'crpl-mobile/lib/button/style\';     // \u52a0\u8f7d LESS</span>'},["code","import Button from 'crpl-mobile/lib/button';  // \u52a0\u8f7d JS\nimport 'crpl-mobile/lib/button/style/css';    // \u52a0\u8f7d CSS\n// import 'crpl-mobile/lib/button/style';     // \u52a0\u8f7d LESS"]]]],["h2","\u7248\u672c"],["ul",["li",["p","\u5f00\u53d1\u7248\uff1a\n",["a",{title:null,href:"http://npm.cbpmgt.com/package/crpl-mobile"},["img",{title:null,src:"https://img.shields.io/badge/crpl--mobile-v0.0.x-brightgreen.svg",alt:"npm type definitions"}]]]]],["h2","\u4f53\u79ef"],["ul",["li",["p","\u6309\u9700\u52a0\u8f7d\uff1a\u53ea\u9700\u5f15\u5165\u4e1a\u52a1\u4e2d\u9700\u8981\u7684\u7ec4\u4ef6\u5373\u53ef\uff0c\u672a import \u8fdb\u6765\u7684\u7ec4\u4ef6\u4e0d\u4f1a\u6253\u5305\u8fdb\u6765\u3002"]],["li",["p","`./dist/crpl-mobile.min.js`\u7684\u6587\u4ef6",["a",{href:"https://thor-x.github.io/crpl-mobile-analysis/",target:"_blank"},"\u5927\u5c0f\u53ca\u4f9d\u8d56\u5206\u6790"]]]],["h2","\u6d4f\u89c8\u5668\u652f\u6301"],["ul",["li",["p",["code","iOS 8.0+"]]],["li",["p",["code","Android 4.0+"]]]]],meta:{order:0,title:"Crpl Design Mobile of React",filename:"docs/react/introduce.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7279\u6027\u548c\u4f18\u52bf",title:"\u7279\u6027\u548c\u4f18\u52bf"},"\u7279\u6027\u548c\u4f18\u52bf"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u9002\u7528\u573a\u666f",title:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5feb\u901f\u4e0a\u624b",title:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7248\u672c",title:"\u7248\u672c"},"\u7248\u672c"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f53\u79ef",title:"\u4f53\u79ef"},"\u4f53\u79ef"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6d4f\u89c8\u5668\u652f\u6301",title:"\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"]]]}}});