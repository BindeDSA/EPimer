(this.webpackJsonpepimer=this.webpackJsonpepimer||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(2),l=n(5),s=n(13),u=n(12),p=n(1);var d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.forceUpdate.bind(this),this.props.updateInterval||33)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.start,n=e.stop,r=e.depth,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getTime();return e?t-e:0}(t,n);return a.a.createElement("div",{style:{fontWeight:"bold",fontFamily:"monospace",fontSize:"5vw",textAlign:"center"}},a.a.createElement("span",{style:{display:"inline-block",width:"40vw",textAlign:"left"}},"Time: ",i/1e3),a.a.createElement("span",null,"Digits: ",r))}}]),n}(a.a.Component),h=Object(p.b)((function(e){return{start:e.timer.start,stop:e.timer.stop,depth:e.depth}}))(d),m=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"returnAccurate",value:function(e){}}],[{key:"getDigitSet",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?this.piHundrendsArr[e]:""}},{key:"getDigits",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.getDigitSet(Math.floor(e/100)),r=e%100;return n.slice(r,r+t)}}]),e}();m.pi1="3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067",m.pi2="9821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819",m.pi3="6442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127",m.pi4="3724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609",m.pi5="4330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491",m.piHundrendsArr=[m.pi1,m.pi2,m.pi3,m.pi4,m.pi5];var E=m,g=Object(p.b)((function(e){return{depth:e.depth,error:e.error,showNext:e.settings.showNext}}))((function(e){var t=e.depth,n=e.error,r=e.showNext,i=0===t?"Start typing pi":"3."+E.getDigits(1,t-1),o={textAlign:0===t?"center":"left",padding:"",overflow:"hidden",whiteSpace:"nowrap",direction:"rtl",color:n?"red":""};return a.a.createElement("div",{style:{width:"80vw",margin:"auto",fontWeight:"bold",fontFamily:"monospace",fontSize:"5vw"}},1===t?a.a.createElement("div",null,"3."):a.a.createElement("div",{style:o},i),t&&r?"Next: "+E.getDigits(t,5):a.a.createElement("span",{style:{color:"white"}},"empty"))})),v={backgroundColor:"#fff",borderWidth:"1px",border:"1px solid #dbdbdb",color:"#363636",cursor:"pointer",justifyContent:"center",paddingBottom:"calc(.5em - 1px)",paddingLeft:"1em",paddingRight:"1em",paddingTop:"calc(.5em - 1px)",textAlign:"center",whiteSpace:"nowrap",fontSize:"5vw",fontWeight:"bold",fontFamily:"monospace",WebkitAppearance:"none",alignItems:"center",borderRadius:"4px",boxShadow:"none",display:"inline-flex",height:"2.5em",margin:"0"},f=function(e){return a.a.createElement("a",{onClick:function(){return document.dispatchEvent(new KeyboardEvent("keypress",{key:e.text}))},style:v},e.children)},y=Object(p.b)((function(e){return{running:e.timer.running}}),{})((function(e){var t=e.running;return a.a.createElement("div",{style:{margin:"auto",textAlign:"center"}},a.a.createElement("div",null,a.a.createElement(f,{text:"7"},"7"),a.a.createElement(f,{text:"8"},"8"),a.a.createElement(f,{text:"9"},"9")," ",a.a.createElement("br",null),a.a.createElement(f,{text:"4"},"4"),a.a.createElement(f,{text:"5"},"5"),a.a.createElement(f,{text:"6"},"6")," ",a.a.createElement("br",null),a.a.createElement(f,{text:"1"},"1"),a.a.createElement(f,{text:"2"},"2"),a.a.createElement(f,{text:"3"},"3"),a.a.createElement("br",null),a.a.createElement(f,{text:"r"},"reset"),a.a.createElement(f,{text:"0"},"0"),a.a.createElement(f,{text:" "},t?"pause":"start")))})),w=Object(p.b)((function(e){return{showNext:e.settings.showNext}}),{switchShowNext:function(){return{type:"SWITCH_SHOW_NEXT"}}})((function(e){e.showNext;var t=e.switchShowNext;return a.a.createElement("div",{style:{fontSize:"5vw",fontWeight:"Bold",textAlign:"center"}},"Settings ",a.a.createElement("br",null),a.a.createElement("input",{style:{width:"5vw",height:"5vw"},type:"checkbox",onChange:t,defaultChecked:!1})," Show Next")})),b=function(){return a.a.createElement("div",{style:{fontFamily:"monospace"}},a.a.createElement(h,null),a.a.createElement(g,null),a.a.createElement(y,null),a.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(3),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_DEPTH":return e+1;case"RESET_DEPTH":return 0;default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_TIMER":return{start:Date.now(),stop:void 0,running:!0};case"STOP_TIMER":return{start:e.start,stop:e.running?Date.now():e.stop,running:!1};case"RESET_TIMER":return{start:void 0,stop:void 0,running:!1};default:return e}},S=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ERROR_FALSE":return!1;case"ERROR_TRUE":return!0;default:return!1}},k=n(9),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showNext:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_SHOW_NEXT":return Object(k.a)(Object(k.a)({},e),{},{showNext:!e.showNext});default:return e}},N=Object(x.b)({depth:T,timer:R,error:S,settings:O}),_=Object(x.c)(N),j=function e(t){var n=this;Object(c.a)(this,e),this.keyPressCheck=function(e){var t=n.store.getState();e.key===E.getDigits(t.depth)?(n.store.dispatch({type:"INCREMENT_DEPTH"}),n.store.dispatch({type:"ERROR_FALSE"}),0===t.depth&&n.store.dispatch({type:"START_TIMER"})):isNaN(e.key)||n.store.dispatch({type:"ERROR_TRUE"})," "===e.key&&(t.timer.running?n.store.dispatch({type:"STOP_TIMER"}):n.store.dispatch({type:"RESET_DEPTH"})),"r"===e.key&&(n.store.dispatch({type:"RESET_DEPTH"}),n.store.dispatch({type:"RESET_TIMER"}))},this.store=t,document.addEventListener("keypress",this.keyPressCheck)};n(25);new j(_),o.a.render(a.a.createElement(p.a,{store:_},a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.808726b0.chunk.js.map