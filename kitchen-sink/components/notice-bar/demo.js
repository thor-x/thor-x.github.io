webpackJsonp([12],{341:function(n,a,t){n.exports={basic:t(578)}},364:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},e=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),o=function(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a.default=n,a}(t(0)),p=function(n){return n&&n.__esModule?n:{default:n}}(t(1));var c=function(n,a){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&a.indexOf(s)<0&&(t[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(s=Object.getOwnPropertySymbols(n);e<s.length;e++)a.indexOf(s[e])<0&&(t[s[e]]=n[s[e]])}return t},l=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,o.Component),e(a,[{key:"render",value:function(){var n=this.props,a=n.prefixCls,t=n.size,e=n.className,l=n.style,i=n.onClick,u=c(n,["prefixCls","size","className","style","onClick"]),r=(0,p.default)(a,a+"-"+t,e);return o.createElement("div",s({className:r,style:l,onClick:i},u))}}]),a}();a.default=l,l.defaultProps={prefixCls:"cm-whitespace",size:"md"},n.exports=a.default},365:function(n,a,t){"use strict";t(104),t(368)},368:function(n,a){},578:function(n,a,t){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u901a\u544a\u680f","en-US":"Notice Bar"},filename:"components/notice-bar/demo/basic.md",id:"components-notice-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'crpl-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NoticeBarExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>noticebar-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">marquee</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> loop<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> leading<span class="token punctuation">:</span> <span class="token number">1e3</span><span class="token punctuation">,</span> trailing<span class="token punctuation">:</span> <span class="token number">3e3</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 7.5px\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span><span class="token punctuation">></span></span>\n      \u901a\u77e5<span class="token punctuation">:</span> \u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u5df2\u8fc7\u671f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u989d\u5ea6 <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\uff01\u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u5df2\u8fc7\u671f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u989d\u5ea6 <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\uff01\u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u5df2\u8fc7\u671f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u989d\u5ea6 <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\uff01\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      \u901a\u77e5<span class="token punctuation">:</span> \u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u5df2\u8fc7\u671f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u989d\u5ea6\uff01\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Remove the <span class="token keyword">default</span> icon<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check-circle-o<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Customized icon<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>span style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#a1a1a1\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4e0d\u518d\u63d0\u793a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Closable demo <span class="token keyword">for</span> <span class="token template-string"><span class="token string">`actionText`</span></span><span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">action={&lt;span</span><span class="token punctuation">></span></span>\u53bb\u770b\u770b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'2\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n      Link demo <span class="token keyword">for</span> <span class="token template-string"><span class="token string">`actionText`</span></span><span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=t(0),a=(t(5),o(t(56))),s=o(t(579)),e=o(t(364));function o(n){return n&&n.__esModule?n:{default:n}}t(105),t(581),t(365);return n.createElement(function(){return n.createElement("div",{className:"noticebar-example"},n.createElement(e.default,{size:"lg"}),n.createElement(s.default,{marquee:{loop:!0,leading:1e3,trailing:3e3,style:{padding:"0 7.5px"}}},"\u901a\u77e5: \u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u5df2\u8fc7\u671f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u989d\u5ea6 (1)\uff01\u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u5df2\u8fc7\u671f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u989d\u5ea6 (2)\uff01\u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u5df2\u8fc7\u671f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u989d\u5ea6 (3)\uff01"),n.createElement(e.default,{size:"lg"}),n.createElement(s.default,{mode:"link",onClick:function(){return alert("1")}},"\u901a\u77e5: \u60a8\u7684\u6388\u4fe1\u989d\u5ea6\u5df2\u8fc7\u671f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u83b7\u53d6\u989d\u5ea6\uff01"),n.createElement(e.default,{size:"lg"}),n.createElement(s.default,{mode:"closable",icon:null},"Remove the default icon."),n.createElement(e.default,{size:"lg"}),n.createElement(s.default,{mode:"closable",icon:n.createElement(a.default,{type:"check-circle-o"})},"Customized icon."),n.createElement(e.default,{size:"lg"}),n.createElement(s.default,{mode:"closable",action:n.createElement("span",{style:{color:"#a1a1a1"}},"\u4e0d\u518d\u63d0\u793a")},"Closable demo for `actionText`."),n.createElement(e.default,{size:"lg"}),n.createElement(s.default,{mode:"link",action:n.createElement("span",null,"\u53bb\u770b\u770b"),onClick:function(){return alert("2")}},"Link demo for `actionText`."))},null)},style:".noticebar-example .cm-icon {\n  font-size: 15px;\n}\n.noticebar-example .cm-notice-bar-operation .cm-icon {\n  font-size: 22px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.noticebar-example</span> <span class="token class">.cm-icon</span> </span><span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.noticebar-example</span> <span class="token class">.cm-notice-bar-operation</span> <span class="token class">.cm-icon</span> </span><span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">22</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},579:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},e=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),o=function(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a.default=n,a}(t(0)),p=i(t(1)),c=i(t(56)),l=i(t(580));function i(n){return n&&n.__esModule?n:{default:n}}var u=function(n,a){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&a.indexOf(s)<0&&(t[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(s=Object.getOwnPropertySymbols(n);e<s.length;e++)a.indexOf(s[e])<0&&(t[s[e]]=n[s[e]])}return t},r=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return t.onClick=function(){var n=t.props,a=n.mode,s=n.onClick;s&&s(),"closable"===a&&t.setState({show:!1})},t.state={show:!0},t}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,o.Component),e(a,[{key:"render",value:function(){var n=this.props,a=n.mode,t=n.icon,e=n.onClick,i=n.children,r=n.className,k=n.prefixCls,f=n.action,m=n.marquee,d=u(n,["mode","icon","onClick","children","className","prefixCls","action","marquee"]),g={},h=null;"closable"===a?h=o.createElement("div",{className:k+"-operation",onClick:this.onClick,role:"button","aria-label":"close"},f||o.createElement(c.default,{type:"cross"})):("link"===a&&(h=o.createElement("div",{className:k+"-operation",role:"button","aria-label":"go to detail"},f||o.createElement(c.default,{type:"right"}))),g.onClick=e);var b=(0,p.default)(k,r);return this.state.show?o.createElement("div",s({className:b},d,g,{role:"alert"}),t&&o.createElement("div",{className:k+"-icon","aria-hidden":"true"},t),o.createElement("div",{className:k+"-content"},o.createElement(l.default,s({prefixCls:k,text:i},m))),h):null}}]),a}();a.default=r,r.defaultProps={prefixCls:"cm-notice-bar",icon:o.createElement(c.default,{type:"voice"}),onClick:function(){}},n.exports=a.default},580:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),e=c(t(0)),o=c(t(5)),p=function(n){return n&&n.__esModule?n:{default:n}}(t(64));function c(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a.default=n,a}var l=function(n){function a(){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var n=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments));return n.state={animatedWidth:0,overflowWidth:0},n}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,e.Component),s(a,[{key:"componentDidMount",value:function(){this._measureText(),this._startAnimation()}},{key:"componentDidUpdate",value:function(){this._measureText(),this._marqueeTimer||this._startAnimation()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this._leadingTimer),window.clearTimeout(this._trailingTimer),this._marqueeTimer&&p.default.cancel(this._marqueeTimer)}},{key:"_measureText",value:function(){var n=o.findDOMNode(this),a=this.textRef;if(n&&a){var t=n.offsetWidth,s=a.offsetWidth-t;s!==this.state.overflowWidth&&this.setState({overflowWidth:s})}}},{key:"_startAnimation",value:function(){var n=this;window.clearTimeout(this._leadingTimer),window.clearTimeout(this._trailingTimer),this._marqueeTimer&&p.default.cancel(this._marqueeTimer);var a=function a(){var t=n.props,s=t.loop,e=t.trailing,o=n.state.overflowWidth,c=n.state.animatedWidth+1,l=c>o;if(l){if(!s)return;c=0}l&&e?n._trailingTimer=window.setTimeout(function(){n.setState({animatedWidth:c}),n._marqueeTimer=(0,p.default)(a)},n.props.trailing):(n.setState({animatedWidth:c}),n._marqueeTimer=(0,p.default)(a))};0!==this.state.overflowWidth&&(this._leadingTimer=window.setTimeout(function(){n._marqueeTimer=(0,p.default)(a)},this.props.leading))}},{key:"render",value:function(){var n=this,a=this.props,t=a.prefixCls,s=a.className,o=a.text,p=Object.assign({position:"relative",whiteSpace:"nowrap",display:"inline-block",right:this.state.animatedWidth},this.props.style);return e.createElement("div",{className:t+"-marquee-wrap "+s,style:{overflow:"hidden"},role:"marquee"},e.createElement("div",{ref:function(a){return n.textRef=a},className:t+"-marquee",style:p},o))}}]),a}();a.default=l,l.defaultProps={text:"",className:"",loop:!1,leading:500,trailing:800},n.exports=a.default},581:function(n,a,t){"use strict";t(104),t(105),t(582)},582:function(n,a){}});