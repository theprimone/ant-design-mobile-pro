(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{BWzY:function(e,t,l){"use strict";var a=l("mZ4U"),n=l("fbTi");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l("2w0b")),c=a(l("Ws+v")),u=function(e){var t=e.title,l=e.value,a=e.align,n=e.className,u={};return"center"===a&&(u={textAlign:"center"}),r.createElement("div",{className:n},r.createElement("div",{className:c.default.item,style:u},t),r.createElement("p",{className:c.default.value,style:u},l||"-"))},d=u;t.default=d},"Ws+v":function(e,t,l){e.exports={item:"item___L9cgk",value:"value___1AcgR"}},rjcl:function(e,t,l){e.exports={hero:"hero___2IfkX",header:"header___c7Xjj",userInfo:"userInfo___3bcK8",username:"username___PDeND",lastLogin:"lastLogin___nEXsH",updatePassword:"updatePassword___rpOjH",exit:"exit___w63KH",monitor:"monitor___24fCN",menu:"menu___3caOQ"}},sJ0G:function(e,t,l){"use strict";var a=l("fbTi"),n=l("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l("p7O8");var r=n(l("YBRE"));l("F0dh");var c=n(l("lHQc"));l("DnwZ");var u=n(l("Q18d")),d=n(l("43Yg")),o=n(l("/tCh")),i=n(l("scpF")),f=n(l("O/V9")),m=n(l("8aBX")),s=a(l("2w0b")),p=l("F/R2"),E=n(l("A52P")),y=n(l("RT37")),_=n(l("f9CQ")),v=n(l("BWzY")),h=n(l("L6Mk")),g=n(l("rjcl")),k=function(e){var t=e.type,l=e.color;return s.default.createElement(h.default,{type:t.split("-")[1],size:60,style:{color:l}})},x=[{key:"all",title:s.default.createElement(s.Fragment,null,s.default.createElement(k,{type:"icon-all",color:"#3aceee"}),s.default.createElement("br",null),s.default.createElement("p",null,"\u603b\u6570\u91cf")),value:45,align:"center"},{key:"lack",title:s.default.createElement(s.Fragment,null,s.default.createElement(k,{type:"icon-empty",color:"#3aceee"}),s.default.createElement("br",null),s.default.createElement("p",null,"\uff0d\uff0d\uff0d\uff0d")),value:12,align:"center"},{key:"online",title:s.default.createElement(s.Fragment,null,s.default.createElement(k,{type:"icon-empty",color:"#3aceee"}),s.default.createElement("br",null),s.default.createElement("p",null,"\uff0d\uff0d\uff0d\uff0d")),value:2,align:"center"},{key:"offline",title:s.default.createElement(s.Fragment,null,s.default.createElement(k,{type:"icon-empty",color:"#3aceee"}),s.default.createElement("br",null),s.default.createElement("p",null,"\uff0d\uff0d\uff0d\uff0d")),value:18,align:"center"}],b=[{icon:s.default.createElement(k,{type:"icon-list",color:"#f37a3f"}),text:"\u957f\u5217\u8868",link:"/demo/standard-list"},{icon:s.default.createElement(k,{type:"icon-form",color:"#4fdde6"}),text:"\u8868\u5355",link:"/demo/form"},{icon:s.default.createElement(k,{type:"icon-map",color:"#8ad939"}),text:"\u9ad8\u5fb7\u5730\u56fe",link:"/demo/amap"},{icon:s.default.createElement(k,{type:"icon-star",color:"#ae93e7"}),text:"Avatar",link:"/demo/avatar"},{icon:s.default.createElement(k,{type:"icon-empty",color:"#43e7ae"}),text:"\uff0d\uff0d\uff0d\uff0d"},{icon:s.default.createElement(k,{type:"icon-empty",color:"#fda067"}),text:"\uff0d\uff0d\uff0d\uff0d"},{icon:s.default.createElement(k,{type:"icon-empty",color:"#ffb611"}),text:"\uff0d\uff0d\uff0d\uff0d"},{icon:s.default.createElement(k,{type:"icon-empty",color:"#57e0e2"}),text:"\uff0d\uff0d\uff0d\uff0d"}],N=function(e){function t(){var e;return(0,d.default)(this,t),e=(0,i.default)(this,(0,f.default)(t).apply(this,arguments)),e.handleExit=function(){var t=e.props.dispatch;t({type:"login/logout"})},e.handleClick=function(e){e.link&&E.default.push(e.link)},e}return(0,m.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:g.default.hero},s.default.createElement("header",{className:g.default.header},s.default.createElement("div",{className:g.default.userInfo},s.default.createElement(y.default,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",shape:"square",size:100,style:{border:"1px solid #dfdfdf"}}),s.default.createElement("span",{className:g.default.username},"admin"),s.default.createElement("span",{className:g.default.lastLogin},"2019-8-14 09:47:07"),s.default.createElement(u.default,{inline:!0,className:g.default.updatePassword},"\u4fee\u6539\u5bc6\u7801"),s.default.createElement(u.default,{inline:!0,className:g.default.exit,onClick:this.handleExit},"\u9000\u51fa"))),s.default.createElement("div",{className:g.default.monitor},s.default.createElement(_.default,{clearPadding:!0},s.default.createElement(c.default,{justify:"center",style:{width:"100%",height:"100%",margin:".2rem 0"}},x.map(function(e){return s.default.createElement(c.default.Item,{key:e.key},s.default.createElement(v.default,{title:e.title,value:e.value,align:e.align}))})))),s.default.createElement(r.default,{className:g.default.menu,data:b,hasLine:!1,columnNum:3,onClick:this.handleClick}))}}]),t}(s.default.PureComponent),w=(0,p.connect)()(N);t.default=w}}]);