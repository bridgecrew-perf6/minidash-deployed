"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{8823:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(462),o=n(7294),i=(n(5444),n(5127)),a=n(6179),u=n(9),l=n(9409),s=n(167),c=n(9060),f=n(246),d=n(7846),p=n(4753),g=function(e,t){return e?Math.floor((e+t)/t)-1:0},h=function(e){var t=e.children,n=e.items,r=void 0===n?[]:n,i=e.onMore,a=e.renderMarker,u=e.replace,l=e.show,c=e.step,f=void 0===c?50:c,h=(0,o.useState)(),m=h[0],v=h[1],x=(0,o.useMemo)((function(){return Math.floor(r.length/f)}),[r.length,f]),y=(0,o.useState)([0,g(l,f)]),b=y[0],E=y[1],I=(0,o.useState)([]),w=I[0],S=I[1],C=(0,o.useState)(0),T=C[0],O=C[1],k=(0,o.useRef)(),M=(0,o.useRef)();(0,o.useEffect)((function(){var e,t,n=function(){if(e){var t,n,r=e[0];if(r===document)t=document.documentElement.scrollTop||document.body.scrollTop,n=window.innerHeight;else t=r.scrollTop,n=r.getBoundingClientRect().height;for(var o=n/4,i=0,a=0,s=w[a]||0;w[a+1]&&s<t-o;)i+=1,s+=w[a+=1];for(var c=i;void 0!==w[a]&&s<t+n+o;)c+=1,s+=w[a+=1]||0;if(u||(i=0,c=Math.max(b[1],c)),l){var d=g(l,f);i=Math.min(d,i),c=Math.max(d,c)}i===b[0]&&c===b[1]||E([i,c])}},r=function(){clearTimeout(t),t=setTimeout(n,10)};return M.current&&(e=(0,p.sq)(M.current)).forEach((function(e){return e.addEventListener("scroll",r)})),window.addEventListener("resize",r),n(),function(){e&&e.forEach((function(e){return e.removeEventListener("scroll",r)})),window.removeEventListener("resize",r),clearTimeout(t)}}),[w,b,u,l,f]),(0,o.useEffect)((function(){i&&b[1]===x&&r.length>=T&&(O(r.length+1),i())}),[r.length,x,i,T,b,f]),(0,o.useEffect)((function(){0===r.length&&0===x&&0!==T&&(S([]),O(0),E([0,g(l,f)]))}),[x,T,l,f,r.length]),(0,d.b)((function(){var e=setTimeout((function(){if(l&&M.current&&l!==m){var e=l-b[0]*f+(b[0]?1:0),t=M.current.parentNode.children.item(e);if(t){var n=(0,p.xD)(t);(0,p.rc)(t,n)?t.scrollIntoView(!0):(0,p._8)(t,n)&&t.scrollIntoView(!1),v(l)}}}),100);return function(){return clearTimeout(e)}}),[b,l,f]),(0,d.b)((function(){if(M.current){var e=M.current.parentNode.children;if((k.current?1:0)+(b[1]-b[0]+1)*f+1===e.length){for(var t,n,r=b[0];r<=b[1];){var o=(k.current?1:0)+(r-b[0])*f,i=Math.min(o+f-1,e.length-1),a=void 0!==n?n:e.item(o).getBoundingClientRect().top,l=e.item(i).getBoundingClientRect().bottom,s=l-a;!l||w&&w[r]===s||(t||(t=[].concat(w||[])),t[r]=s),n=l,r+=1}for(;u&&r<=x;){if(!w[r]&&w[r]!==w[0]){t||(t=[].concat(w||[]));var c=t;t[r]=c[0]}r+=1}t&&S(t)}}}),[x,w,b,u,f]);var P=(0,o.useMemo)((function(){if(!u)return 0;for(var e=0,t=0;t<b[0];)e+=w[t]||0,t+=1;return e}),[w,b,u]),j=(0,o.useMemo)((function(){if(!u)return 0;for(var e=0,t=b[1]+1;t<=x;)e+=w[t]||0,t+=1;return e}),[x,w,b,u]),_=b[0]*f,z=Math.min((b[1]+1)*f,r.length)-1,N=[];if(P){var R=o.createElement(s.x,{key:"above",ref:k,flex:!1,height:P+"px"});a&&(R=o.cloneElement(a(R),{key:"above"})),N.push(R)}if(r.slice(_,z+1).forEach((function(e,n){var r=t(e,_+n);N.push(r)})),u||b[1]<x||i){var B=o.createElement(s.x,{key:"below",ref:!a&&M||void 0,flex:!1,height:(j||0)+"px"});if(a){var A=a(B);B=o.cloneElement(A,{key:"below",ref:function(e){M.current=e;var t=A.ref;"function"==typeof t?t(e):null!==t&&(t.current=e)}})}N.push(B)}return N},m=n(1085),v=o.createContext({useFormField:function(e){return{error:e.error,info:e.info,disabled:e.disabled}},useFormInput:function(e,t,n){var r=(0,o.useState)(void 0!==t?t:n),i=r[0],a=r[1];return[void 0!==t?t:i,function(e){void 0!==n&&a(e)}]}});n(5697);var x={},y=o.createContext((function(e,t,n){void 0===t&&(t="polite"),void 0===n&&(n=500);var r=document.body.querySelector("#grommet-announcer[aria-live]")||function(){var e=document.createElement("div");return e.id="grommet-announcer",e.style.left="-100%",e.style.right="100%",e.style.position="fixed",e.style["z-index"]="-1",document.body.insertBefore(e,document.body.firstChild),e}();r.setAttribute("aria-live","off"),r.innerHTML=e,r.setAttribute("aria-live",t),setTimeout((function(){r.innerHTML=""}),n)}));y.propTypes=x;var b=n(4192),E=n(5462),I=n(9653),w=u.default.input.withConfig({displayName:"StyledTextInput",componentId:"sc-1x30a0s-0"})([""," "," "," "," "," ",";"],b.hG,(function(e){return"full"===(t=e.plain)?(0,u.css)([""," padding:0;"],b.Zt):t&&b.Zt;var t}),(function(e){return e.icon&&(e.reverse?"padding-right: "+e.theme.global.edgeSize.large+";":"padding-left: "+e.theme.global.edgeSize.large+";")}),(function(e){return e.disabled&&(0,b.Cv)(e.theme.textInput.disabled&&e.theme.textInput.disabled.opacity)}),(function(e){return e.textAlign&&b.jt}),(function(e){return e.theme.textInput&&e.theme.textInput.extend}));w.defaultProps={},Object.setPrototypeOf(w.defaultProps,l.l);var S=u.default.div.withConfig({displayName:"StyledTextInput__StyledTextInputContainer",componentId:"sc-1x30a0s-1"})(["position:relative;width:100%;",";"],(function(e){return e.theme.textInput&&e.theme.textInput.container&&e.theme.textInput.container.extend}));S.defaultProps={},Object.setPrototypeOf(S.defaultProps,l.l);var C=u.default.div.withConfig({displayName:"StyledTextInput__StyledPlaceholder",componentId:"sc-1x30a0s-2"})(["position:absolute;left:","px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;",";"],(function(e){return(0,I.gd)((0,b.dy)(e,"left"))-(0,I.gd)(e.theme.global.control.border.width)}),(function(e){return e.theme.textInput&&e.theme.textInput.placeholder&&e.theme.textInput.placeholder.extend}));C.defaultProps={},Object.setPrototypeOf(C.defaultProps,l.l);var T=u.default.div.withConfig({displayName:"StyledTextInput__StyledIcon",componentId:"sc-1x30a0s-3"})(["position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);pointer-events:none;",""],(function(e){return e.reverse?"right: "+(0,b.dy)(e,"right")+";":"left: "+(0,b.dy)(e,"left")+";"})),O=u.default.ol.withConfig({displayName:"StyledTextInput__StyledSuggestions",componentId:"sc-1x30a0s-4"})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;",";"],(function(e){return e.theme.textInput&&e.theme.textInput.suggestions&&e.theme.textInput.suggestions.extend}));O.defaultProps={},Object.setPrototypeOf(O.defaultProps,l.l);var k=n(1287),M=["a11yTitle","defaultSuggestion","defaultValue","dropAlign","dropHeight","dropTarget","dropProps","focusIndicator","icon","id","messages","name","onBlur","onChange","onFocus","onKeyDown","onSelect","onSuggestionSelect","onSuggestionsClose","onSuggestionsOpen","placeholder","plain","readOnly","reverse","suggestions","textAlign","value"];function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=function(e){return e&&"object"==typeof e?e.label||e.value:e},_=function(e){return e&&"object"==typeof e?e.label&&"string"==typeof e.label?e.label:e.value:e},z=(0,u.default)(s.x).withConfig({displayName:"TextInput__ContainerBox",componentId:"sc-1ai0c08-0"})(["",";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}"],(function(e){return e.dropHeight?(0,b.Tq)("max-height",e.dropHeight,e.theme):"max-height: inherit;"})),N={top:"bottom",left:"left"},R=(0,o.forwardRef)((function(e,t){var n=e.a11yTitle,r=e.defaultSuggestion,i=e.defaultValue,a=e.dropAlign,d=void 0===a?N:a,g=e.dropHeight,x=e.dropTarget,b=e.dropProps,I=e.focusIndicator,R=void 0===I||I,B=e.icon,A=e.id,L=e.messages,F=e.name,D=e.onBlur,H=e.onChange,V=e.onFocus,Z=e.onKeyDown,K=e.onSelect,q=e.onSuggestionSelect,U=e.onSuggestionsClose,Y=e.onSuggestionsOpen,G=e.placeholder,W=e.plain,J=e.readOnly,Q=e.reverse,X=e.suggestions,$=e.textAlign,ee=e.value,te=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,M),ne=(0,o.useContext)(u.ThemeContext)||l.l.theme,re=(0,o.useContext)(k.E).format,oe=(0,o.useContext)(y),ie=(0,o.useContext)(v),ae=(0,E.t)(t),ue=(0,o.useRef)(),le=(0,o.useRef)(),se=ie.useFormInput(J?void 0:F,ee),ce=se[0],fe=se[1],de=(0,o.useState)(),pe=de[0],ge=de[1],he=(0,o.useState)(!1),me=he[0],ve=he[1],xe=(0,o.useMemo)((function(){return K&&!q?K:q}),[K,q]),ye=(0,o.useMemo)((function(){return K&&q?K:void 0}),[K,q]),be=(0,o.useState)(),Ee=be[0],Ie=be[1],we=(0,o.useCallback)((function(){ve(!0),oe(re({id:"textInput.suggestionIsOpen",messages:L})),oe(X.length+" "+re({id:"textInput.suggestionsCount",messages:L})),Y&&Y()}),[oe,L,re,Y,X]),Se=(0,o.useCallback)((function(){Ie(X),ve(!1),U&&U()}),[U,X]);(0,o.useEffect)((function(){!pe||me||!X||!X.length||Ee&&Ee.length===X.length||we()}),[pe,we,me,X,Ee]),(0,o.useEffect)((function(){!me||X&&X.length||Se()}),[Se,me,X]);var Ce=(0,o.useMemo)((function(){return X?X.map((function(e){return"object"==typeof e?e.value:e})).indexOf(ce):-1}),[X,ce]),Te=(0,o.useMemo)((function(){return-1===Ce&&"number"==typeof r?r:Ce}),[r,Ce]),Oe=(0,o.useState)(Te),ke=Oe[0],Me=Oe[1],Pe=(0,o.useState)(),je=Pe[0],_e=Pe[1];(0,o.useEffect)((function(){return Me(Ce)}),[Ce]),(0,o.useEffect)((function(){me||Me(Te)}),[Te,me]),(0,o.useEffect)((function(){if(ke>=0){var e=_(X[ke]);oe(e+" "+re({id:"textInput.enterSelect",messages:L}))}}),[ke,oe,L,re,X]),(0,o.useEffect)((function(){var e=setTimeout((function(){var e=le.current;if(me&&-1!==ke&&e){var t=e.parentNode,n=e.children[ke];t.scrollTo&&((0,p._8)(n,t)?t.scrollTo(0,n.offsetTop-(t.getBoundingClientRect().height-n.getBoundingClientRect().height)):(0,p.rc)(n,t)&&t.scrollTo(0,n.offsetTop))}}),50);return function(){return clearTimeout(e)}}),[ke,me]);var ze,Ne=function(e,t){if(ae.current.focus(),ae.current.value=t,Se(),xe){e.persist&&e.persist();var n=e;n.suggestion=t,xe(n)}fe(t)},Re=(0,o.useCallback)((function(e){e.preventDefault();var t=Math.min(ke+1,X.length-1);Me(t),_e(!1)}),[ke,X]),Be=(0,o.useCallback)((function(e){e.preventDefault();var t=Math.max(ke-1,0);Me(t),_e(!1)}),[ke]),Ae=(0,o.useState)(G&&"string"!=typeof G&&!(ae.current&&ae.current.value)&&!ce),Le=Ae[0],Fe=Ae[1],De={onSelect:ye};me&&(ze=o.createElement(f.U,P({ref:ue,id:A?"text-input-drop__"+A:void 0,align:d,responsive:!1,target:x||ae.current,onClickOutside:Se,onEsc:Se},b),o.createElement(z,{overflow:"auto",dropHeight:g,onMouseMove:function(){return _e(!0)}},o.createElement(O,{ref:le},o.createElement(h,{items:X,step:ne.select.step,show:-1!==ke?ke:void 0},(function(e,t,n){var r,i=j(e);return"string"!=typeof i?r=i:ne.button.option||(r=o.createElement(s.x,{align:"start",pad:"small"},i)),o.createElement("li",{key:_(e)+"-"+t,ref:n},o.createElement(c.z,{active:ke===t,fill:!0,plain:!!r||void 0,align:"start",kind:r?void 0:"option",label:r?void 0:i,onClick:function(t){return Ne(t,e)},onMouseMove:je&&ke!==t?function(){return Me(t)}:void 0},r))}))))));var He={onKeyDown:Z};return me?(He.onEnter=function(e){e.preventDefault(),ke>=0?Ne(e,X[ke]):Se()},ke>0&&(He.onUp=Be),ke<X.length-1&&(He.onDown=Re),He.onTab=Se):X&&X.length>0&&(He.onDown=we),o.createElement(S,{plain:W},Le&&o.createElement(C,null,G),B&&o.createElement(T,{reverse:Q,theme:ne},B),o.createElement(m.N,P({target:pe?"document":void 0},He),o.createElement(w,P({"aria-label":n,ref:ae,id:A,name:F,autoComplete:"off",plain:W,placeholder:"string"==typeof G?G:void 0,icon:B,reverse:Q,focus:pe,focusIndicator:R,textAlign:$},te,De,{defaultValue:j(i),value:j(ce),readOnly:J,onFocus:function(e){pe||(ge(!0),X&&X.length>0&&(oe(re({id:"textInput.suggestionsExist",messages:L})),we()),V&&V(e))},onBlur:function(e){e.relatedTarget&&e.relatedTarget===ue.current||(ge(!1),D&&D(e))},onChange:J?void 0:function(e){Fe(G&&"string"!=typeof G&&!e.target.value),fe(e.target.value),Me(Te),H&&H(e)}}))),ze)}));R.displayName="TextInput";var B=n(9448),A={theme:{global:{colors:{icon:"#666666"}},icon:{size:{small:"12px",medium:"24px",large:"48px",xlarge:"96px"}}}},L=["a11yTitle","color","size","theme"];function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=(0,u.css)([""," ",' g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill="none"]{stroke-width:0;}}*[stroke*="#"],*[STROKE*="#"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*="#"],*[FILL*="#"]{fill:inherit;stroke:none;}'],(function(e){return(0,B.u)("fill",e.color||e.theme.global.colors.icon,e.theme)}),(function(e){return(0,B.u)("stroke",e.color||e.theme.global.colors.icon,e.theme)})),H=(0,o.forwardRef)((function(e,t){var n=e.a11yTitle,r=(e.color,e.size,e.theme,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,L));return o.createElement("svg",F({ref:t,"aria-label":n},r))}));H.displayName="Icon";var V=(0,u.default)(H).withConfig({displayName:"StyledIcon",componentId:"sc-ofa7kd-0"})(["display:inline-block;flex:0 0 auto;"," "," ",""],(function(e){var t,n=e.size,r=void 0===n?"medium":n,o=e.theme,i=(e.viewBox||"0 0 24 24").split(" "),a=i[2],u=i[3],l=a/u,s=(t=o.icon.size[r]||r,parseFloat(t.match(/\d+(\.\d+)?/),10));return a<u?"\n      width: "+s+"px;\n      height: "+s/l+"px;\n    ":u<a?"\n      width: "+s*l+"px;\n      height: "+s+"px;\n    ":"\n      width: "+s+"px;\n      height: "+s+"px;\n    "}),(function(e){return"plain"!==e.color&&D}),(function(e){var t=e.theme;return t&&t.icon.extend}));function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}V.defaultProps={},Object.setPrototypeOf(V.defaultProps,A);var K=(0,o.forwardRef)((function(e,t){return o.createElement(V,Z({ref:t,viewBox:"0 0 24 24",a11yTitle:"Add"},e),o.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M12 22V2M2 12h20"}))}));K.displayName="Add";var q=function(){var e=o.useState(""),t=e[0],n=e[1],u=o.useState([]),l=u[0],f=u[1],d=function(){var e;e=t,f([].concat((0,r.Z)(l),[e])),n("")};return o.createElement(i.Z,null,o.createElement(a.Z,{title:"Home"}),o.createElement(s.x,null,o.createElement("h1",null,"Add eth address"),o.createElement(s.x,{direction:"row",gap:"small"},o.createElement(R,{placeholder:"Enter address...",value:t,onChange:function(e){return n(e.target.value)}}),o.createElement(c.z,{primary:!0,icon:o.createElement(K,{size:"small"}),color:"brand",size:"small",onClick:function(e){return d()}}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-11b0d396fe79dddbb712.js.map