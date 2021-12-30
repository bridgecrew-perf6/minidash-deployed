"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{6604:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(462),o=n(7294),i=(n(5444),n(3964)),u=n(6179),a=n(9),l=n(9409),s=n(167),c=n(9060),f=n(246),d=n(7846),p=n(4753),g=function(e,t){return e?Math.floor((e+t)/t)-1:0},m=function(e){var t=e.children,n=e.items,r=void 0===n?[]:n,i=e.onMore,u=e.renderMarker,a=e.replace,l=e.show,c=e.step,f=void 0===c?50:c,m=(0,o.useState)(),h=m[0],v=m[1],x=(0,o.useMemo)((function(){return Math.floor(r.length/f)}),[r.length,f]),y=(0,o.useState)([0,g(l,f)]),b=y[0],E=y[1],S=(0,o.useState)([]),I=S[0],C=S[1],T=(0,o.useState)(0),w=T[0],M=T[1],O=(0,o.useRef)(),k=(0,o.useRef)();(0,o.useEffect)((function(){var e,t,n=function(){if(e){var t,n,r=e[0];if(r===document)t=document.documentElement.scrollTop||document.body.scrollTop,n=window.innerHeight;else t=r.scrollTop,n=r.getBoundingClientRect().height;for(var o=n/4,i=0,u=0,s=I[u]||0;I[u+1]&&s<t-o;)i+=1,s+=I[u+=1];for(var c=i;void 0!==I[u]&&s<t+n+o;)c+=1,s+=I[u+=1]||0;if(a||(i=0,c=Math.max(b[1],c)),l){var d=g(l,f);i=Math.min(d,i),c=Math.max(d,c)}i===b[0]&&c===b[1]||E([i,c])}},r=function(){clearTimeout(t),t=setTimeout(n,10)};return k.current&&(e=(0,p.sq)(k.current)).forEach((function(e){return e.addEventListener("scroll",r)})),window.addEventListener("resize",r),n(),function(){e&&e.forEach((function(e){return e.removeEventListener("scroll",r)})),window.removeEventListener("resize",r),clearTimeout(t)}}),[I,b,a,l,f]),(0,o.useEffect)((function(){i&&b[1]===x&&r.length>=w&&(M(r.length+1),i())}),[r.length,x,i,w,b,f]),(0,o.useEffect)((function(){0===r.length&&0===x&&0!==w&&(C([]),M(0),E([0,g(l,f)]))}),[x,w,l,f,r.length]),(0,d.b)((function(){var e=setTimeout((function(){if(l&&k.current&&l!==h){var e=l-b[0]*f+(b[0]?1:0),t=k.current.parentNode.children.item(e);if(t){var n=(0,p.xD)(t);(0,p.rc)(t,n)?t.scrollIntoView(!0):(0,p._8)(t,n)&&t.scrollIntoView(!1),v(l)}}}),100);return function(){return clearTimeout(e)}}),[b,l,f]),(0,d.b)((function(){if(k.current){var e=k.current.parentNode.children;if((O.current?1:0)+(b[1]-b[0]+1)*f+1===e.length){for(var t,n,r=b[0];r<=b[1];){var o=(O.current?1:0)+(r-b[0])*f,i=Math.min(o+f-1,e.length-1),u=void 0!==n?n:e.item(o).getBoundingClientRect().top,l=e.item(i).getBoundingClientRect().bottom,s=l-u;!l||I&&I[r]===s||(t||(t=[].concat(I||[])),t[r]=s),n=l,r+=1}for(;a&&r<=x;){if(!I[r]&&I[r]!==I[0]){t||(t=[].concat(I||[]));var c=t;t[r]=c[0]}r+=1}t&&C(t)}}}),[x,I,b,a,f]);var _=(0,o.useMemo)((function(){if(!a)return 0;for(var e=0,t=0;t<b[0];)e+=I[t]||0,t+=1;return e}),[I,b,a]),P=(0,o.useMemo)((function(){if(!a)return 0;for(var e=0,t=b[1]+1;t<=x;)e+=I[t]||0,t+=1;return e}),[x,I,b,a]),j=b[0]*f,N=Math.min((b[1]+1)*f,r.length)-1,B=[];if(_){var R=o.createElement(s.x,{key:"above",ref:O,flex:!1,height:_+"px"});u&&(R=o.cloneElement(u(R),{key:"above"})),B.push(R)}if(r.slice(j,N+1).forEach((function(e,n){var r=t(e,j+n);B.push(r)})),a||b[1]<x||i){var A=o.createElement(s.x,{key:"below",ref:!u&&k||void 0,flex:!1,height:(P||0)+"px"});if(u){var D=u(A);A=o.cloneElement(D,{key:"below",ref:function(e){k.current=e;var t=D.ref;"function"==typeof t?t(e):null!==t&&(t.current=e)}})}B.push(A)}return B},h=n(1085),v=o.createContext({useFormField:function(e){return{error:e.error,info:e.info,disabled:e.disabled}},useFormInput:function(e,t,n){var r=(0,o.useState)(void 0!==t?t:n),i=r[0],u=r[1];return[void 0!==t?t:i,function(e){void 0!==n&&u(e)}]}});n(5697);var x={},y=o.createContext((function(e,t,n){void 0===t&&(t="polite"),void 0===n&&(n=500);var r=document.body.querySelector("#grommet-announcer[aria-live]")||function(){var e=document.createElement("div");return e.id="grommet-announcer",e.style.left="-100%",e.style.right="100%",e.style.position="fixed",e.style["z-index"]="-1",document.body.insertBefore(e,document.body.firstChild),e}();r.setAttribute("aria-live","off"),r.innerHTML=e,r.setAttribute("aria-live",t),setTimeout((function(){r.innerHTML=""}),n)}));y.propTypes=x;var b=n(4192),E=n(5462),S=n(9653),I=a.default.input.withConfig({displayName:"StyledTextInput",componentId:"sc-1x30a0s-0"})([""," "," "," "," "," ",";"],b.hG,(function(e){return"full"===(t=e.plain)?(0,a.css)([""," padding:0;"],b.Zt):t&&b.Zt;var t}),(function(e){return e.icon&&(e.reverse?"padding-right: "+e.theme.global.edgeSize.large+";":"padding-left: "+e.theme.global.edgeSize.large+";")}),(function(e){return e.disabled&&(0,b.Cv)(e.theme.textInput.disabled&&e.theme.textInput.disabled.opacity)}),(function(e){return e.textAlign&&b.jt}),(function(e){return e.theme.textInput&&e.theme.textInput.extend}));I.defaultProps={},Object.setPrototypeOf(I.defaultProps,l.l);var C=a.default.div.withConfig({displayName:"StyledTextInput__StyledTextInputContainer",componentId:"sc-1x30a0s-1"})(["position:relative;width:100%;",";"],(function(e){return e.theme.textInput&&e.theme.textInput.container&&e.theme.textInput.container.extend}));C.defaultProps={},Object.setPrototypeOf(C.defaultProps,l.l);var T=a.default.div.withConfig({displayName:"StyledTextInput__StyledPlaceholder",componentId:"sc-1x30a0s-2"})(["position:absolute;left:","px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;",";"],(function(e){return(0,S.gd)((0,b.dy)(e,"left"))-(0,S.gd)(e.theme.global.control.border.width)}),(function(e){return e.theme.textInput&&e.theme.textInput.placeholder&&e.theme.textInput.placeholder.extend}));T.defaultProps={},Object.setPrototypeOf(T.defaultProps,l.l);var w=a.default.div.withConfig({displayName:"StyledTextInput__StyledIcon",componentId:"sc-1x30a0s-3"})(["position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);pointer-events:none;",""],(function(e){return e.reverse?"right: "+(0,b.dy)(e,"right")+";":"left: "+(0,b.dy)(e,"left")+";"})),M=a.default.ol.withConfig({displayName:"StyledTextInput__StyledSuggestions",componentId:"sc-1x30a0s-4"})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;",";"],(function(e){return e.theme.textInput&&e.theme.textInput.suggestions&&e.theme.textInput.suggestions.extend}));M.defaultProps={},Object.setPrototypeOf(M.defaultProps,l.l);var O=n(1287),k=["a11yTitle","defaultSuggestion","defaultValue","dropAlign","dropHeight","dropTarget","dropProps","focusIndicator","icon","id","messages","name","onBlur","onChange","onFocus","onKeyDown","onSelect","onSuggestionSelect","onSuggestionsClose","onSuggestionsOpen","placeholder","plain","readOnly","reverse","suggestions","textAlign","value"];function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var P=function(e){return e&&"object"==typeof e?e.label||e.value:e},j=function(e){return e&&"object"==typeof e?e.label&&"string"==typeof e.label?e.label:e.value:e},N=(0,a.default)(s.x).withConfig({displayName:"TextInput__ContainerBox",componentId:"sc-1ai0c08-0"})(["",";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}"],(function(e){return e.dropHeight?(0,b.Tq)("max-height",e.dropHeight,e.theme):"max-height: inherit;"})),B={top:"bottom",left:"left"},R=(0,o.forwardRef)((function(e,t){var n=e.a11yTitle,r=e.defaultSuggestion,i=e.defaultValue,u=e.dropAlign,d=void 0===u?B:u,g=e.dropHeight,x=e.dropTarget,b=e.dropProps,S=e.focusIndicator,R=void 0===S||S,A=e.icon,D=e.id,H=e.messages,z=e.name,F=e.onBlur,L=e.onChange,V=e.onFocus,Z=e.onKeyDown,q=e.onSelect,K=e.onSuggestionSelect,U=e.onSuggestionsClose,Y=e.onSuggestionsOpen,G=e.placeholder,J=e.plain,Q=e.readOnly,W=e.reverse,X=e.suggestions,$=e.textAlign,ee=e.value,te=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,k),ne=(0,o.useContext)(a.ThemeContext)||l.l.theme,re=(0,o.useContext)(O.E).format,oe=(0,o.useContext)(y),ie=(0,o.useContext)(v),ue=(0,E.t)(t),ae=(0,o.useRef)(),le=(0,o.useRef)(),se=ie.useFormInput(Q?void 0:z,ee),ce=se[0],fe=se[1],de=(0,o.useState)(),pe=de[0],ge=de[1],me=(0,o.useState)(!1),he=me[0],ve=me[1],xe=(0,o.useMemo)((function(){return q&&!K?q:K}),[q,K]),ye=(0,o.useMemo)((function(){return q&&K?q:void 0}),[q,K]),be=(0,o.useState)(),Ee=be[0],Se=be[1],Ie=(0,o.useCallback)((function(){ve(!0),oe(re({id:"textInput.suggestionIsOpen",messages:H})),oe(X.length+" "+re({id:"textInput.suggestionsCount",messages:H})),Y&&Y()}),[oe,H,re,Y,X]),Ce=(0,o.useCallback)((function(){Se(X),ve(!1),U&&U()}),[U,X]);(0,o.useEffect)((function(){!pe||he||!X||!X.length||Ee&&Ee.length===X.length||Ie()}),[pe,Ie,he,X,Ee]),(0,o.useEffect)((function(){!he||X&&X.length||Ce()}),[Ce,he,X]);var Te=(0,o.useMemo)((function(){return X?X.map((function(e){return"object"==typeof e?e.value:e})).indexOf(ce):-1}),[X,ce]),we=(0,o.useMemo)((function(){return-1===Te&&"number"==typeof r?r:Te}),[r,Te]),Me=(0,o.useState)(we),Oe=Me[0],ke=Me[1],_e=(0,o.useState)(),Pe=_e[0],je=_e[1];(0,o.useEffect)((function(){return ke(Te)}),[Te]),(0,o.useEffect)((function(){he||ke(we)}),[we,he]),(0,o.useEffect)((function(){if(Oe>=0){var e=j(X[Oe]);oe(e+" "+re({id:"textInput.enterSelect",messages:H}))}}),[Oe,oe,H,re,X]),(0,o.useEffect)((function(){var e=setTimeout((function(){var e=le.current;if(he&&-1!==Oe&&e){var t=e.parentNode,n=e.children[Oe];t.scrollTo&&((0,p._8)(n,t)?t.scrollTo(0,n.offsetTop-(t.getBoundingClientRect().height-n.getBoundingClientRect().height)):(0,p.rc)(n,t)&&t.scrollTo(0,n.offsetTop))}}),50);return function(){return clearTimeout(e)}}),[Oe,he]);var Ne,Be=function(e,t){if(ue.current.focus(),ue.current.value=t,Ce(),xe){e.persist&&e.persist();var n=e;n.suggestion=t,xe(n)}fe(t)},Re=(0,o.useCallback)((function(e){e.preventDefault();var t=Math.min(Oe+1,X.length-1);ke(t),je(!1)}),[Oe,X]),Ae=(0,o.useCallback)((function(e){e.preventDefault();var t=Math.max(Oe-1,0);ke(t),je(!1)}),[Oe]),De=(0,o.useState)(G&&"string"!=typeof G&&!(ue.current&&ue.current.value)&&!ce),He=De[0],ze=De[1],Fe={onSelect:ye};he&&(Ne=o.createElement(f.U,_({ref:ae,id:D?"text-input-drop__"+D:void 0,align:d,responsive:!1,target:x||ue.current,onClickOutside:Ce,onEsc:Ce},b),o.createElement(N,{overflow:"auto",dropHeight:g,onMouseMove:function(){return je(!0)}},o.createElement(M,{ref:le},o.createElement(m,{items:X,step:ne.select.step,show:-1!==Oe?Oe:void 0},(function(e,t,n){var r,i=P(e);return"string"!=typeof i?r=i:ne.button.option||(r=o.createElement(s.x,{align:"start",pad:"small"},i)),o.createElement("li",{key:j(e)+"-"+t,ref:n},o.createElement(c.z,{active:Oe===t,fill:!0,plain:!!r||void 0,align:"start",kind:r?void 0:"option",label:r?void 0:i,onClick:function(t){return Be(t,e)},onMouseMove:Pe&&Oe!==t?function(){return ke(t)}:void 0},r))}))))));var Le={onKeyDown:Z};return he?(Le.onEnter=function(e){e.preventDefault(),Oe>=0?Be(e,X[Oe]):Ce()},Oe>0&&(Le.onUp=Ae),Oe<X.length-1&&(Le.onDown=Re),Le.onTab=Ce):X&&X.length>0&&(Le.onDown=Ie),o.createElement(C,{plain:J},He&&o.createElement(T,null,G),A&&o.createElement(w,{reverse:W,theme:ne},A),o.createElement(h.N,_({target:pe?"document":void 0},Le),o.createElement(I,_({"aria-label":n,ref:ue,id:D,name:z,autoComplete:"off",plain:J,placeholder:"string"==typeof G?G:void 0,icon:A,reverse:W,focus:pe,focusIndicator:R,textAlign:$},te,Fe,{defaultValue:P(i),value:P(ce),readOnly:Q,onFocus:function(e){pe||(ge(!0),X&&X.length>0&&(oe(re({id:"textInput.suggestionsExist",messages:H})),Ie()),V&&V(e))},onBlur:function(e){e.relatedTarget&&e.relatedTarget===ae.current||(ge(!1),F&&F(e))},onChange:Q?void 0:function(e){ze(G&&"string"!=typeof G&&!e.target.value),fe(e.target.value),ke(we),L&&L(e)}}))),Ne)}));R.displayName="TextInput";var A=function(){var e=o.useState(null),t=e[0],n=e[1],a=o.useState([]),l=a[0],f=a[1],d=function(){var e;e=t,f([].concat((0,r.Z)(l),[e])),n(null)};return o.createElement(i.Z,null,o.createElement(u.Z,{title:"Home"}),o.createElement(s.x,{header:!0},o.createElement("h1",null,"Set eth address"),o.createElement(R,{placeholder:"Enter address...",value:t,onChange:function(e){return n(e.target.value)}}),o.createElement(c.z,{onClick:function(e){return d()}},"Add address")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f9abb4af1fe59809a20e.js.map