(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))T(L);new MutationObserver(L=>{for(const R of L)if(R.type==="childList")for(const M of R.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&T(M)}).observe(document,{childList:!0,subtree:!0});function c(L){const R={};return L.integrity&&(R.integrity=L.integrity),L.referrerPolicy&&(R.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?R.credentials="include":L.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function T(L){if(L.ep)return;L.ep=!0;const R=c(L);fetch(L.href,R)}})();function lm(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var $i={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku;function im(){if(Ku)return te;Ku=1;var m=Symbol.for("react.element"),h=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),M=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),x=Symbol.iterator;function O(p){return p===null||typeof p!="object"?null:(p=x&&p[x]||p["@@iterator"],typeof p=="function"?p:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,F={};function g(p,k,X){this.props=p,this.context=k,this.refs=F,this.updater=X||G}g.prototype.isReactComponent={},g.prototype.setState=function(p,k){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,k,"setState")},g.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Z(){}Z.prototype=g.prototype;function J(p,k,X){this.props=p,this.context=k,this.refs=F,this.updater=X||G}var ie=J.prototype=new Z;ie.constructor=J,E(ie,g.prototype),ie.isPureReactComponent=!0;var Ee=Array.isArray,an=Object.prototype.hasOwnProperty,Le={current:null},fe={key:!0,ref:!0,__self:!0,__source:!0};function oe(p,k,X){var ee,re={},ae=null,pe=null;if(k!=null)for(ee in k.ref!==void 0&&(pe=k.ref),k.key!==void 0&&(ae=""+k.key),k)an.call(k,ee)&&!fe.hasOwnProperty(ee)&&(re[ee]=k[ee]);var se=arguments.length-2;if(se===1)re.children=X;else if(1<se){for(var he=Array(se),Oe=0;Oe<se;Oe++)he[Oe]=arguments[Oe+2];re.children=he}if(p&&p.defaultProps)for(ee in se=p.defaultProps,se)re[ee]===void 0&&(re[ee]=se[ee]);return{$$typeof:m,type:p,key:ae,ref:pe,props:re,_owner:Le.current}}function Mn(p,k){return{$$typeof:m,type:p.type,key:k,ref:p.ref,props:p.props,_owner:p._owner}}function Je(p){return typeof p=="object"&&p!==null&&p.$$typeof===m}function Ae(p){var k={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(X){return k[X]})}var ze=/\/+/g;function be(p,k){return typeof p=="object"&&p!==null&&p.key!=null?Ae(""+p.key):k.toString(36)}function Ke(p,k,X,ee,re){var ae=typeof p;(ae==="undefined"||ae==="boolean")&&(p=null);var pe=!1;if(p===null)pe=!0;else switch(ae){case"string":case"number":pe=!0;break;case"object":switch(p.$$typeof){case m:case h:pe=!0}}if(pe)return pe=p,re=re(pe),p=ee===""?"."+be(pe,0):ee,Ee(re)?(X="",p!=null&&(X=p.replace(ze,"$&/")+"/"),Ke(re,k,X,"",function(Oe){return Oe})):re!=null&&(Je(re)&&(re=Mn(re,X+(!re.key||pe&&pe.key===re.key?"":(""+re.key).replace(ze,"$&/")+"/")+p)),k.push(re)),1;if(pe=0,ee=ee===""?".":ee+":",Ee(p))for(var se=0;se<p.length;se++){ae=p[se];var he=ee+be(ae,se);pe+=Ke(ae,k,X,he,re)}else if(he=O(p),typeof he=="function")for(p=he.call(p),se=0;!(ae=p.next()).done;)ae=ae.value,he=ee+be(ae,se++),pe+=Ke(ae,k,X,he,re);else if(ae==="object")throw k=String(p),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return pe}function dn(p,k,X){if(p==null)return p;var ee=[],re=0;return Ke(p,ee,"","",function(ae){return k.call(X,ae,re++)}),ee}function Ue(p){if(p._status===-1){var k=p._result;k=k(),k.then(function(X){(p._status===0||p._status===-1)&&(p._status=1,p._result=X)},function(X){(p._status===0||p._status===-1)&&(p._status=2,p._result=X)}),p._status===-1&&(p._status=0,p._result=k)}if(p._status===1)return p._result.default;throw p._result}var de={current:null},I={transition:null},V={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:I,ReactCurrentOwner:Le};function A(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:dn,forEach:function(p,k,X){dn(p,function(){k.apply(this,arguments)},X)},count:function(p){var k=0;return dn(p,function(){k++}),k},toArray:function(p){return dn(p,function(k){return k})||[]},only:function(p){if(!Je(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},te.Component=g,te.Fragment=c,te.Profiler=L,te.PureComponent=J,te.StrictMode=T,te.Suspense=H,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,te.act=A,te.cloneElement=function(p,k,X){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var ee=E({},p.props),re=p.key,ae=p.ref,pe=p._owner;if(k!=null){if(k.ref!==void 0&&(ae=k.ref,pe=Le.current),k.key!==void 0&&(re=""+k.key),p.type&&p.type.defaultProps)var se=p.type.defaultProps;for(he in k)an.call(k,he)&&!fe.hasOwnProperty(he)&&(ee[he]=k[he]===void 0&&se!==void 0?se[he]:k[he])}var he=arguments.length-2;if(he===1)ee.children=X;else if(1<he){se=Array(he);for(var Oe=0;Oe<he;Oe++)se[Oe]=arguments[Oe+2];ee.children=se}return{$$typeof:m,type:p.type,key:re,ref:ae,props:ee,_owner:pe}},te.createContext=function(p){return p={$$typeof:M,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:R,_context:p},p.Consumer=p},te.createElement=oe,te.createFactory=function(p){var k=oe.bind(null,p);return k.type=p,k},te.createRef=function(){return{current:null}},te.forwardRef=function(p){return{$$typeof:U,render:p}},te.isValidElement=Je,te.lazy=function(p){return{$$typeof:Y,_payload:{_status:-1,_result:p},_init:Ue}},te.memo=function(p,k){return{$$typeof:_,type:p,compare:k===void 0?null:k}},te.startTransition=function(p){var k=I.transition;I.transition={};try{p()}finally{I.transition=k}},te.unstable_act=A,te.useCallback=function(p,k){return de.current.useCallback(p,k)},te.useContext=function(p){return de.current.useContext(p)},te.useDebugValue=function(){},te.useDeferredValue=function(p){return de.current.useDeferredValue(p)},te.useEffect=function(p,k){return de.current.useEffect(p,k)},te.useId=function(){return de.current.useId()},te.useImperativeHandle=function(p,k,X){return de.current.useImperativeHandle(p,k,X)},te.useInsertionEffect=function(p,k){return de.current.useInsertionEffect(p,k)},te.useLayoutEffect=function(p,k){return de.current.useLayoutEffect(p,k)},te.useMemo=function(p,k){return de.current.useMemo(p,k)},te.useReducer=function(p,k,X){return de.current.useReducer(p,k,X)},te.useRef=function(p){return de.current.useRef(p)},te.useState=function(p){return de.current.useState(p)},te.useSyncExternalStore=function(p,k,X){return de.current.useSyncExternalStore(p,k,X)},te.useTransition=function(){return de.current.useTransition()},te.version="18.3.1",te}var $u;function nc(){return $u||($u=1,$i.exports=im()),$i.exports}var ce=nc();const l=lm(ce);var Za={},Gi={exports:{}},rn={},Yi={exports:{}},Xi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu;function om(){return Gu||(Gu=1,(function(m){function h(I,V){var A=I.length;I.push(V);e:for(;0<A;){var p=A-1>>>1,k=I[p];if(0<L(k,V))I[p]=V,I[A]=k,A=p;else break e}}function c(I){return I.length===0?null:I[0]}function T(I){if(I.length===0)return null;var V=I[0],A=I.pop();if(A!==V){I[0]=A;e:for(var p=0,k=I.length,X=k>>>1;p<X;){var ee=2*(p+1)-1,re=I[ee],ae=ee+1,pe=I[ae];if(0>L(re,A))ae<k&&0>L(pe,re)?(I[p]=pe,I[ae]=A,p=ae):(I[p]=re,I[ee]=A,p=ee);else if(ae<k&&0>L(pe,A))I[p]=pe,I[ae]=A,p=ae;else break e}}return V}function L(I,V){var A=I.sortIndex-V.sortIndex;return A!==0?A:I.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var R=performance;m.unstable_now=function(){return R.now()}}else{var M=Date,U=M.now();m.unstable_now=function(){return M.now()-U}}var H=[],_=[],Y=1,x=null,O=3,G=!1,E=!1,F=!1,g=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(I){for(var V=c(_);V!==null;){if(V.callback===null)T(_);else if(V.startTime<=I)T(_),V.sortIndex=V.expirationTime,h(H,V);else break;V=c(_)}}function Ee(I){if(F=!1,ie(I),!E)if(c(H)!==null)E=!0,Ue(an);else{var V=c(_);V!==null&&de(Ee,V.startTime-I)}}function an(I,V){E=!1,F&&(F=!1,Z(oe),oe=-1),G=!0;var A=O;try{for(ie(V),x=c(H);x!==null&&(!(x.expirationTime>V)||I&&!Ae());){var p=x.callback;if(typeof p=="function"){x.callback=null,O=x.priorityLevel;var k=p(x.expirationTime<=V);V=m.unstable_now(),typeof k=="function"?x.callback=k:x===c(H)&&T(H),ie(V)}else T(H);x=c(H)}if(x!==null)var X=!0;else{var ee=c(_);ee!==null&&de(Ee,ee.startTime-V),X=!1}return X}finally{x=null,O=A,G=!1}}var Le=!1,fe=null,oe=-1,Mn=5,Je=-1;function Ae(){return!(m.unstable_now()-Je<Mn)}function ze(){if(fe!==null){var I=m.unstable_now();Je=I;var V=!0;try{V=fe(!0,I)}finally{V?be():(Le=!1,fe=null)}}else Le=!1}var be;if(typeof J=="function")be=function(){J(ze)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,dn=Ke.port2;Ke.port1.onmessage=ze,be=function(){dn.postMessage(null)}}else be=function(){g(ze,0)};function Ue(I){fe=I,Le||(Le=!0,be())}function de(I,V){oe=g(function(){I(m.unstable_now())},V)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(I){I.callback=null},m.unstable_continueExecution=function(){E||G||(E=!0,Ue(an))},m.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Mn=0<I?Math.floor(1e3/I):5},m.unstable_getCurrentPriorityLevel=function(){return O},m.unstable_getFirstCallbackNode=function(){return c(H)},m.unstable_next=function(I){switch(O){case 1:case 2:case 3:var V=3;break;default:V=O}var A=O;O=V;try{return I()}finally{O=A}},m.unstable_pauseExecution=function(){},m.unstable_requestPaint=function(){},m.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var A=O;O=I;try{return V()}finally{O=A}},m.unstable_scheduleCallback=function(I,V,A){var p=m.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?p+A:p):A=p,I){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=A+k,I={id:Y++,callback:V,priorityLevel:I,startTime:A,expirationTime:k,sortIndex:-1},A>p?(I.sortIndex=A,h(_,I),c(H)===null&&I===c(_)&&(F?(Z(oe),oe=-1):F=!0,de(Ee,A-p))):(I.sortIndex=k,h(H,I),E||G||(E=!0,Ue(an))),I},m.unstable_shouldYield=Ae,m.unstable_wrapCallback=function(I){var V=O;return function(){var A=O;O=V;try{return I.apply(this,arguments)}finally{O=A}}}})(Xi)),Xi}var Yu;function sm(){return Yu||(Yu=1,Yi.exports=om()),Yi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu;function um(){if(Xu)return rn;Xu=1;var m=nc(),h=sm();function c(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T=new Set,L={};function R(e,n){M(e,n),M(e+"Capture",n)}function M(e,n){for(L[e]=n,e=0;e<n.length;e++)T.add(n[e])}var U=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),H=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y={},x={};function O(e){return H.call(x,e)?!0:H.call(Y,e)?!1:_.test(e)?x[e]=!0:(Y[e]=!0,!1)}function G(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,n,t,r){if(n===null||typeof n>"u"||G(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function F(e,n,t,r,a,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];g[n]=new F(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function J(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Z,J);g[n]=new F(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Z,J);g[n]=new F(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Z,J);g[n]=new F(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,n,t,r){var a=g.hasOwnProperty(n)?g[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,t,a,r)&&(t=null),r||a===null?O(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ee=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,an=Symbol.for("react.element"),Le=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),Mn=Symbol.for("react.profiler"),Je=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),dn=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),I=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,p;function k(e){if(p===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);p=n&&n[1]||""}return`
`+p+e}var X=!1;function ee(e,n){if(!e||X)return"";X=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(v){var r=v}Reflect.construct(e,[],n)}else{try{n.call()}catch(v){r=v}e.call(n.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{X=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function re(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fe:return"Fragment";case Le:return"Portal";case Mn:return"Profiler";case oe:return"StrictMode";case be:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ae:return(e.displayName||"Context")+".Consumer";case Je:return(e._context.displayName||"Context")+".Provider";case ze:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dn:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case Ue:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}function pe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(n);case 8:return n===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oe(e){var n=he(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ct(e){e._valueTracker||(e._valueTracker=Oe(e))}function Xt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=he(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Nt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zt(e,n){var t=n.checked;return A({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Hr(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=se(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Vr(e,n){n=n.checked,n!=null&&ie(e,"checked",n,!1)}function S(e,n){Vr(e,n);var t=se(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?$(e,n.type,t):n.hasOwnProperty("defaultValue")&&$(e,n.type,se(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function b(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $(e,n,t){(n!=="number"||Nt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Te=Array.isArray;function Ce(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+se(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function vn(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(c(91));return A({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function er(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(c(92));if(Te(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:se(t)}}function Ln(e,n){var t=se(n.value),r=se(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function lo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function io(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?io(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,oo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function nr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uc=["Webkit","ms","Moz","O"];Object.keys(tr).forEach(function(e){uc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),tr[n]=tr[e]})});function so(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||tr.hasOwnProperty(e)&&tr[e]?(""+n).trim():n+"px"}function uo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=so(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var cc=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,n){if(n){if(cc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(c(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(c(61))}if(n.style!=null&&typeof n.style!="object")throw Error(c(62))}}function sl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,xt=null,Pt=null;function co(e){if(e=Nr(e)){if(typeof dl!="function")throw Error(c(280));var n=e.stateNode;n&&(n=fa(n),dl(e.stateNode,e.type,n))}}function mo(e){xt?Pt?Pt.push(e):Pt=[e]:xt=e}function po(){if(xt){var e=xt,n=Pt;if(Pt=xt=null,co(e),n)for(e=0;e<n.length;e++)co(n[e])}}function fo(e,n){return e(n)}function ho(){}var ml=!1;function yo(e,n,t){if(ml)return e(n,t);ml=!0;try{return fo(e,n,t)}finally{ml=!1,(xt!==null||Pt!==null)&&(ho(),po())}}function rr(e,n){var t=e.stateNode;if(t===null)return null;var r=fa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var pl=!1;if(U)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){pl=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{pl=!1}function dc(e,n,t,r,a,i,o,s,u){var v=Array.prototype.slice.call(arguments,3);try{n.apply(t,v)}catch(C){this.onError(C)}}var lr=!1,Qr=null,Jr=!1,fl=null,mc={onError:function(e){lr=!0,Qr=e}};function pc(e,n,t,r,a,i,o,s,u){lr=!1,Qr=null,dc.apply(mc,arguments)}function fc(e,n,t,r,a,i,o,s,u){if(pc.apply(this,arguments),lr){if(lr){var v=Qr;lr=!1,Qr=null}else throw Error(c(198));Jr||(Jr=!0,fl=v)}}function dt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function go(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vo(e){if(dt(e)!==e)throw Error(c(188))}function hc(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return vo(a),e;if(i===r)return vo(a),n;i=i.sibling}throw Error(c(188))}if(t.return!==r.return)t=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===t){o=!0,t=a,r=i;break}if(s===r){o=!0,r=a,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=a;break}if(s===r){o=!0,r=i,t=a;break}s=s.sibling}if(!o)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function So(e){return e=hc(e),e!==null?Eo(e):null}function Eo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Eo(e);if(n!==null)return n;e=e.sibling}return null}var ko=h.unstable_scheduleCallback,wo=h.unstable_cancelCallback,yc=h.unstable_shouldYield,gc=h.unstable_requestPaint,xe=h.unstable_now,vc=h.unstable_getCurrentPriorityLevel,hl=h.unstable_ImmediatePriority,Co=h.unstable_UserBlockingPriority,Kr=h.unstable_NormalPriority,Sc=h.unstable_LowPriority,No=h.unstable_IdlePriority,$r=null,Tn=null;function Ec(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot($r,e,void 0,(e.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:Cc,kc=Math.log,wc=Math.LN2;function Cc(e){return e>>>=0,e===0?32:31-(kc(e)/wc|0)|0}var Gr=64,Yr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~a;s!==0?r=ir(s):(i&=o,i!==0&&(r=ir(i)))}else o=t&~a,o!==0?r=ir(o):i!==0&&(r=ir(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&a)===0&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Sn(n),a=1<<t,r|=e[t],n&=~a;return r}function Nc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Sn(i),s=1<<o,u=a[o];u===-1?((s&t)===0||(s&r)!==0)&&(a[o]=Nc(s,n)):u<=n&&(e.expiredLanes|=s),i&=~s}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xo(){var e=Gr;return Gr<<=1,(Gr&4194240)===0&&(Gr=64),e}function gl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function or(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Sn(n),e[n]=t}function Pc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Sn(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function vl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Sn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var me=0;function Po(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Mo,Sl,Lo,To,Io,El=!1,Zr=[],Vn=null,qn=null,Qn=null,sr=new Map,ur=new Map,Jn=[],Mc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ro(e,n){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":sr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(n.pointerId)}}function cr(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Nr(n),n!==null&&Sl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Lc(e,n,t,r,a){switch(n){case"focusin":return Vn=cr(Vn,e,n,t,r,a),!0;case"dragenter":return qn=cr(qn,e,n,t,r,a),!0;case"mouseover":return Qn=cr(Qn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return sr.set(i,cr(sr.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,ur.set(i,cr(ur.get(i)||null,e,n,t,r,a)),!0}return!1}function Do(e){var n=mt(e.target);if(n!==null){var t=dt(n);if(t!==null){if(n=t.tag,n===13){if(n=go(t),n!==null){e.blockedOn=n,Io(e.priority,function(){Lo(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ea(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=wl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ul=r,t.target.dispatchEvent(r),ul=null}else return n=Nr(t),n!==null&&Sl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ao(e,n,t){ea(e)&&t.delete(n)}function Tc(){El=!1,Vn!==null&&ea(Vn)&&(Vn=null),qn!==null&&ea(qn)&&(qn=null),Qn!==null&&ea(Qn)&&(Qn=null),sr.forEach(Ao),ur.forEach(Ao)}function dr(e,n){e.blockedOn===n&&(e.blockedOn=null,El||(El=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Tc)))}function mr(e){function n(a){return dr(a,e)}if(0<Zr.length){dr(Zr[0],e);for(var t=1;t<Zr.length;t++){var r=Zr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&dr(Vn,e),qn!==null&&dr(qn,e),Qn!==null&&dr(Qn,e),sr.forEach(n),ur.forEach(n),t=0;t<Jn.length;t++)r=Jn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(t=Jn[0],t.blockedOn===null);)Do(t),t.blockedOn===null&&Jn.shift()}var Mt=Ee.ReactCurrentBatchConfig,na=!0;function Ic(e,n,t,r){var a=me,i=Mt.transition;Mt.transition=null;try{me=1,kl(e,n,t,r)}finally{me=a,Mt.transition=i}}function Rc(e,n,t,r){var a=me,i=Mt.transition;Mt.transition=null;try{me=4,kl(e,n,t,r)}finally{me=a,Mt.transition=i}}function kl(e,n,t,r){if(na){var a=wl(e,n,t,r);if(a===null)Ol(e,n,r,ta,t),Ro(e,r);else if(Lc(a,e,n,t,r))r.stopPropagation();else if(Ro(e,r),n&4&&-1<Mc.indexOf(e)){for(;a!==null;){var i=Nr(a);if(i!==null&&Mo(i),i=wl(e,n,t,r),i===null&&Ol(e,n,r,ta,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ol(e,n,r,null,t)}}var ta=null;function wl(e,n,t,r){if(ta=null,e=cl(r),e=mt(e),e!==null)if(n=dt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=go(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ta=e,null}function zo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vc()){case hl:return 1;case Co:return 4;case Kr:case Sc:return 16;case No:return 536870912;default:return 16}default:return 16}}var Kn=null,Cl=null,ra=null;function bo(){if(ra)return ra;var e,n=Cl,t=n.length,r,a="value"in Kn?Kn.value:Kn.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[i-r];r++);return ra=a.slice(e,1<r?1-r:void 0)}function aa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function la(){return!0}function jo(){return!1}function ln(e){function n(t,r,a,i,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?la:jo,this.isPropagationStopped=jo,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),n}var Lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=ln(Lt),pr=A({},Lt,{view:0,detail:0}),Dc=ln(pr),xl,Pl,fr,ia=A({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(xl=e.screenX-fr.screenX,Pl=e.screenY-fr.screenY):Pl=xl=0,fr=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Fo=ln(ia),Ac=A({},ia,{dataTransfer:0}),zc=ln(Ac),bc=A({},pr,{relatedTarget:0}),Ml=ln(bc),jc=A({},Lt,{animationName:0,elapsedTime:0,pseudoElement:0}),Fc=ln(jc),_c=A({},Lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oc=ln(_c),Wc=A({},Lt,{data:0}),_o=ln(Wc),Bc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hc[e])?!!n[e]:!1}function Ll(){return Vc}var qc=A({},pr,{key:function(e){if(e.key){var n=Bc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=aa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?aa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?aa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qc=ln(qc),Jc=A({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=ln(Jc),Kc=A({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),$c=ln(Kc),Gc=A({},Lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yc=ln(Gc),Xc=A({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zc=ln(Xc),ed=[9,13,27,32],Tl=U&&"CompositionEvent"in window,hr=null;U&&"documentMode"in document&&(hr=document.documentMode);var nd=U&&"TextEvent"in window&&!hr,Wo=U&&(!Tl||hr&&8<hr&&11>=hr),Bo=" ",Uo=!1;function Ho(e,n){switch(e){case"keyup":return ed.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function td(e,n){switch(e){case"compositionend":return Vo(n);case"keypress":return n.which!==32?null:(Uo=!0,Bo);case"textInput":return e=n.data,e===Bo&&Uo?null:e;default:return null}}function rd(e,n){if(Tt)return e==="compositionend"||!Tl&&Ho(e,n)?(e=bo(),ra=Cl=Kn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wo&&n.locale!=="ko"?null:n.data;default:return null}}var ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ad[e.type]:n==="textarea"}function Qo(e,n,t,r){mo(r),n=da(n,"onChange"),0<n.length&&(t=new Nl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var yr=null,gr=null;function ld(e){cs(e,0)}function oa(e){var n=zt(e);if(Xt(n))return e}function id(e,n){if(e==="change")return n}var Jo=!1;if(U){var Il;if(U){var Rl="oninput"in document;if(!Rl){var Ko=document.createElement("div");Ko.setAttribute("oninput","return;"),Rl=typeof Ko.oninput=="function"}Il=Rl}else Il=!1;Jo=Il&&(!document.documentMode||9<document.documentMode)}function $o(){yr&&(yr.detachEvent("onpropertychange",Go),gr=yr=null)}function Go(e){if(e.propertyName==="value"&&oa(gr)){var n=[];Qo(n,gr,e,cl(e)),yo(ld,n)}}function od(e,n,t){e==="focusin"?($o(),yr=n,gr=t,yr.attachEvent("onpropertychange",Go)):e==="focusout"&&$o()}function sd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oa(gr)}function ud(e,n){if(e==="click")return oa(n)}function cd(e,n){if(e==="input"||e==="change")return oa(n)}function dd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var En=typeof Object.is=="function"?Object.is:dd;function vr(e,n){if(En(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!H.call(n,a)||!En(e[a],n[a]))return!1}return!0}function Yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xo(e,n){var t=Yo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Yo(t)}}function Zo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function es(){for(var e=window,n=Nt();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Nt(e.document)}return n}function Dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function md(e){var n=es(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Zo(t.ownerDocument.documentElement,t)){if(r!==null&&Dl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Xo(t,i);var o=Xo(t,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pd=U&&"documentMode"in document&&11>=document.documentMode,It=null,Al=null,Sr=null,zl=!1;function ns(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zl||It==null||It!==Nt(r)||(r=It,"selectionStart"in r&&Dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&vr(Sr,r)||(Sr=r,r=da(Al,"onSelect"),0<r.length&&(n=new Nl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=It)))}function sa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Rt={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},bl={},ts={};U&&(ts=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function ua(e){if(bl[e])return bl[e];if(!Rt[e])return e;var n=Rt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ts)return bl[e]=n[t];return e}var rs=ua("animationend"),as=ua("animationiteration"),ls=ua("animationstart"),is=ua("transitionend"),os=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){os.set(e,n),R(n,[e])}for(var jl=0;jl<ss.length;jl++){var Fl=ss[jl],fd=Fl.toLowerCase(),hd=Fl[0].toUpperCase()+Fl.slice(1);$n(fd,"on"+hd)}$n(rs,"onAnimationEnd"),$n(as,"onAnimationIteration"),$n(ls,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(is,"onTransitionEnd"),M("onMouseEnter",["mouseout","mouseover"]),M("onMouseLeave",["mouseout","mouseover"]),M("onPointerEnter",["pointerout","pointerover"]),M("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function us(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,fc(r,n,void 0,e),e.currentTarget=null}function cs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,v=s.currentTarget;if(s=s.listener,u!==i&&a.isPropagationStopped())break e;us(a,s,v),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,v=s.currentTarget,s=s.listener,u!==i&&a.isPropagationStopped())break e;us(a,s,v),i=u}}}if(Jr)throw e=fl,Jr=!1,fl=null,e}function ge(e,n){var t=n[ql];t===void 0&&(t=n[ql]=new Set);var r=e+"__bubble";t.has(r)||(ds(n,e,2,!1),t.add(r))}function _l(e,n,t){var r=0;n&&(r|=4),ds(t,e,r,n)}var ca="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[ca]){e[ca]=!0,T.forEach(function(t){t!=="selectionchange"&&(yd.has(t)||_l(t,!1,e),_l(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ca]||(n[ca]=!0,_l("selectionchange",!1,n))}}function ds(e,n,t,r){switch(zo(n)){case 1:var a=Ic;break;case 4:a=Rc;break;default:a=kl}t=a.bind(null,n,t,e),a=void 0,!pl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ol(e,n,t,r,a){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;s!==null;){if(o=mt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}yo(function(){var v=i,C=cl(t),N=[];e:{var w=os.get(e);if(w!==void 0){var D=Nl,j=e;switch(e){case"keypress":if(aa(t)===0)break e;case"keydown":case"keyup":D=Qc;break;case"focusin":j="focus",D=Ml;break;case"focusout":j="blur",D=Ml;break;case"beforeblur":case"afterblur":D=Ml;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=zc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=$c;break;case rs:case as:case ls:D=Fc;break;case is:D=Yc;break;case"scroll":D=Dc;break;case"wheel":D=Zc;break;case"copy":case"cut":case"paste":D=Oc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Oo}var W=(n&4)!==0,Pe=!W&&e==="scroll",f=W?w!==null?w+"Capture":null:w;W=[];for(var d=v,y;d!==null;){y=d;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,f!==null&&(P=rr(d,f),P!=null&&W.push(wr(d,P,y)))),Pe)break;d=d.return}0<W.length&&(w=new D(w,j,null,t,C),N.push({event:w,listeners:W}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",w&&t!==ul&&(j=t.relatedTarget||t.fromElement)&&(mt(j)||j[jn]))break e;if((D||w)&&(w=C.window===C?C:(w=C.ownerDocument)?w.defaultView||w.parentWindow:window,D?(j=t.relatedTarget||t.toElement,D=v,j=j?mt(j):null,j!==null&&(Pe=dt(j),j!==Pe||j.tag!==5&&j.tag!==6)&&(j=null)):(D=null,j=v),D!==j)){if(W=Fo,P="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(W=Oo,P="onPointerLeave",f="onPointerEnter",d="pointer"),Pe=D==null?w:zt(D),y=j==null?w:zt(j),w=new W(P,d+"leave",D,t,C),w.target=Pe,w.relatedTarget=y,P=null,mt(C)===v&&(W=new W(f,d+"enter",j,t,C),W.target=y,W.relatedTarget=Pe,P=W),Pe=P,D&&j)n:{for(W=D,f=j,d=0,y=W;y;y=Dt(y))d++;for(y=0,P=f;P;P=Dt(P))y++;for(;0<d-y;)W=Dt(W),d--;for(;0<y-d;)f=Dt(f),y--;for(;d--;){if(W===f||f!==null&&W===f.alternate)break n;W=Dt(W),f=Dt(f)}W=null}else W=null;D!==null&&ms(N,w,D,W,!1),j!==null&&Pe!==null&&ms(N,Pe,j,W,!0)}}e:{if(w=v?zt(v):window,D=w.nodeName&&w.nodeName.toLowerCase(),D==="select"||D==="input"&&w.type==="file")var B=id;else if(qo(w))if(Jo)B=cd;else{B=sd;var q=od}else(D=w.nodeName)&&D.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(B=ud);if(B&&(B=B(e,v))){Qo(N,B,t,C);break e}q&&q(e,w,v),e==="focusout"&&(q=w._wrapperState)&&q.controlled&&w.type==="number"&&$(w,"number",w.value)}switch(q=v?zt(v):window,e){case"focusin":(qo(q)||q.contentEditable==="true")&&(It=q,Al=v,Sr=null);break;case"focusout":Sr=Al=It=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,ns(N,t,C);break;case"selectionchange":if(pd)break;case"keydown":case"keyup":ns(N,t,C)}var Q;if(Tl)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Tt?Ho(e,t)&&(K="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(K="onCompositionStart");K&&(Wo&&t.locale!=="ko"&&(Tt||K!=="onCompositionStart"?K==="onCompositionEnd"&&Tt&&(Q=bo()):(Kn=C,Cl="value"in Kn?Kn.value:Kn.textContent,Tt=!0)),q=da(v,K),0<q.length&&(K=new _o(K,e,null,t,C),N.push({event:K,listeners:q}),Q?K.data=Q:(Q=Vo(t),Q!==null&&(K.data=Q)))),(Q=nd?td(e,t):rd(e,t))&&(v=da(v,"onBeforeInput"),0<v.length&&(C=new _o("onBeforeInput","beforeinput",null,t,C),N.push({event:C,listeners:v}),C.data=Q))}cs(N,n)})}function wr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function da(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=rr(e,t),i!=null&&r.unshift(wr(e,i,a)),i=rr(e,n),i!=null&&r.push(wr(e,i,a))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ms(e,n,t,r,a){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,u=s.alternate,v=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&v!==null&&(s=v,a?(u=rr(t,i),u!=null&&o.unshift(wr(t,u,s))):a||(u=rr(t,i),u!=null&&o.push(wr(t,u,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var gd=/\r\n?/g,vd=/\u0000|\uFFFD/g;function ps(e){return(typeof e=="string"?e:""+e).replace(gd,`
`).replace(vd,"")}function ma(e,n,t){if(n=ps(n),ps(e)!==n&&t)throw Error(c(425))}function pa(){}var Wl=null,Bl=null;function Ul(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,Sd=typeof clearTimeout=="function"?clearTimeout:void 0,fs=typeof Promise=="function"?Promise:void 0,Ed=typeof queueMicrotask=="function"?queueMicrotask:typeof fs<"u"?function(e){return fs.resolve(null).then(e).catch(kd)}:Hl;function kd(e){setTimeout(function(){throw e})}function Vl(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),mr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);mr(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function hs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var At=Math.random().toString(36).slice(2),In="__reactFiber$"+At,Cr="__reactProps$"+At,jn="__reactContainer$"+At,ql="__reactEvents$"+At,wd="__reactListeners$"+At,Cd="__reactHandles$"+At;function mt(e){var n=e[In];if(n)return n;for(var t=e.parentNode;t;){if(n=t[jn]||t[In]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=hs(e);e!==null;){if(t=e[In])return t;e=hs(e)}return n}e=t,t=e.parentNode}return null}function Nr(e){return e=e[In]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function fa(e){return e[Cr]||null}var Ql=[],bt=-1;function Yn(e){return{current:e}}function ve(e){0>bt||(e.current=Ql[bt],Ql[bt]=null,bt--)}function ye(e,n){bt++,Ql[bt]=e.current,e.current=n}var Xn={},He=Yn(Xn),Xe=Yn(!1),pt=Xn;function jt(e,n){var t=e.type.contextTypes;if(!t)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return e=e.childContextTypes,e!=null}function ha(){ve(Xe),ve(He)}function ys(e,n,t){if(He.current!==Xn)throw Error(c(168));ye(He,n),ye(Xe,t)}function gs(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(c(108,pe(e)||"Unknown",a));return A({},t,r)}function ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,pt=He.current,ye(He,e),ye(Xe,Xe.current),!0}function vs(e,n,t){var r=e.stateNode;if(!r)throw Error(c(169));t?(e=gs(e,n,pt),r.__reactInternalMemoizedMergedChildContext=e,ve(Xe),ve(He),ye(He,e)):ve(Xe),ye(Xe,t)}var Fn=null,ga=!1,Jl=!1;function Ss(e){Fn===null?Fn=[e]:Fn.push(e)}function Nd(e){ga=!0,Ss(e)}function Zn(){if(!Jl&&Fn!==null){Jl=!0;var e=0,n=me;try{var t=Fn;for(me=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Fn=null,ga=!1}catch(a){throw Fn!==null&&(Fn=Fn.slice(e+1)),ko(hl,Zn),a}finally{me=n,Jl=!1}}return null}var Ft=[],_t=0,va=null,Sa=0,mn=[],pn=0,ft=null,_n=1,On="";function ht(e,n){Ft[_t++]=Sa,Ft[_t++]=va,va=e,Sa=n}function Es(e,n,t){mn[pn++]=_n,mn[pn++]=On,mn[pn++]=ft,ft=e;var r=_n;e=On;var a=32-Sn(r)-1;r&=~(1<<a),t+=1;var i=32-Sn(n)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,_n=1<<32-Sn(n)+a|t<<a|r,On=i+e}else _n=1<<i|t<<a|r,On=e}function Kl(e){e.return!==null&&(ht(e,1),Es(e,1,0))}function $l(e){for(;e===va;)va=Ft[--_t],Ft[_t]=null,Sa=Ft[--_t],Ft[_t]=null;for(;e===ft;)ft=mn[--pn],mn[pn]=null,On=mn[--pn],mn[pn]=null,_n=mn[--pn],mn[pn]=null}var on=null,sn=null,Se=!1,kn=null;function ks(e,n){var t=gn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ws(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,on=e,sn=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,on=e,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ft!==null?{id:_n,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=gn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,on=e,sn=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(Se){var n=sn;if(n){var t=n;if(!ws(e,n)){if(Gl(e))throw Error(c(418));n=Gn(t.nextSibling);var r=on;n&&ws(e,n)?ks(r,t):(e.flags=e.flags&-4097|2,Se=!1,on=e)}}else{if(Gl(e))throw Error(c(418));e.flags=e.flags&-4097|2,Se=!1,on=e}}}function Cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function Ea(e){if(e!==on)return!1;if(!Se)return Cs(e),Se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ul(e.type,e.memoizedProps)),n&&(n=sn)){if(Gl(e))throw Ns(),Error(c(418));for(;n;)ks(e,n),n=Gn(n.nextSibling)}if(Cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){sn=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=on?Gn(e.stateNode.nextSibling):null;return!0}function Ns(){for(var e=sn;e;)e=Gn(e.nextSibling)}function Ot(){sn=on=null,Se=!1}function Xl(e){kn===null?kn=[e]:kn.push(e)}var xd=Ee.ReactCurrentBatchConfig;function xr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var r=t.stateNode}if(!r)throw Error(c(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=a.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function ka(e,n){throw e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function xs(e){var n=e._init;return n(e._payload)}function Ps(e){function n(f,d){if(e){var y=f.deletions;y===null?(f.deletions=[d],f.flags|=16):y.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function a(f,d){return f=ot(f,d),f.index=0,f.sibling=null,f}function i(f,d,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<d?(f.flags|=2,d):y):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,y,P){return d===null||d.tag!==6?(d=Hi(y,f.mode,P),d.return=f,d):(d=a(d,y),d.return=f,d)}function u(f,d,y,P){var B=y.type;return B===fe?C(f,d,y.props.children,P,y.key):d!==null&&(d.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ue&&xs(B)===d.type)?(P=a(d,y.props),P.ref=xr(f,d,y),P.return=f,P):(P=qa(y.type,y.key,y.props,null,f.mode,P),P.ref=xr(f,d,y),P.return=f,P)}function v(f,d,y,P){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=Vi(y,f.mode,P),d.return=f,d):(d=a(d,y.children||[]),d.return=f,d)}function C(f,d,y,P,B){return d===null||d.tag!==7?(d=Ct(y,f.mode,P,B),d.return=f,d):(d=a(d,y),d.return=f,d)}function N(f,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hi(""+d,f.mode,y),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case an:return y=qa(d.type,d.key,d.props,null,f.mode,y),y.ref=xr(f,null,d),y.return=f,y;case Le:return d=Vi(d,f.mode,y),d.return=f,d;case Ue:var P=d._init;return N(f,P(d._payload),y)}if(Te(d)||V(d))return d=Ct(d,f.mode,y,null),d.return=f,d;ka(f,d)}return null}function w(f,d,y,P){var B=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return B!==null?null:s(f,d,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case an:return y.key===B?u(f,d,y,P):null;case Le:return y.key===B?v(f,d,y,P):null;case Ue:return B=y._init,w(f,d,B(y._payload),P)}if(Te(y)||V(y))return B!==null?null:C(f,d,y,P,null);ka(f,y)}return null}function D(f,d,y,P,B){if(typeof P=="string"&&P!==""||typeof P=="number")return f=f.get(y)||null,s(d,f,""+P,B);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case an:return f=f.get(P.key===null?y:P.key)||null,u(d,f,P,B);case Le:return f=f.get(P.key===null?y:P.key)||null,v(d,f,P,B);case Ue:var q=P._init;return D(f,d,y,q(P._payload),B)}if(Te(P)||V(P))return f=f.get(y)||null,C(d,f,P,B,null);ka(d,P)}return null}function j(f,d,y,P){for(var B=null,q=null,Q=d,K=d=0,_e=null;Q!==null&&K<y.length;K++){Q.index>K?(_e=Q,Q=null):_e=Q.sibling;var ue=w(f,Q,y[K],P);if(ue===null){Q===null&&(Q=_e);break}e&&Q&&ue.alternate===null&&n(f,Q),d=i(ue,d,K),q===null?B=ue:q.sibling=ue,q=ue,Q=_e}if(K===y.length)return t(f,Q),Se&&ht(f,K),B;if(Q===null){for(;K<y.length;K++)Q=N(f,y[K],P),Q!==null&&(d=i(Q,d,K),q===null?B=Q:q.sibling=Q,q=Q);return Se&&ht(f,K),B}for(Q=r(f,Q);K<y.length;K++)_e=D(Q,f,K,y[K],P),_e!==null&&(e&&_e.alternate!==null&&Q.delete(_e.key===null?K:_e.key),d=i(_e,d,K),q===null?B=_e:q.sibling=_e,q=_e);return e&&Q.forEach(function(st){return n(f,st)}),Se&&ht(f,K),B}function W(f,d,y,P){var B=V(y);if(typeof B!="function")throw Error(c(150));if(y=B.call(y),y==null)throw Error(c(151));for(var q=B=null,Q=d,K=d=0,_e=null,ue=y.next();Q!==null&&!ue.done;K++,ue=y.next()){Q.index>K?(_e=Q,Q=null):_e=Q.sibling;var st=w(f,Q,ue.value,P);if(st===null){Q===null&&(Q=_e);break}e&&Q&&st.alternate===null&&n(f,Q),d=i(st,d,K),q===null?B=st:q.sibling=st,q=st,Q=_e}if(ue.done)return t(f,Q),Se&&ht(f,K),B;if(Q===null){for(;!ue.done;K++,ue=y.next())ue=N(f,ue.value,P),ue!==null&&(d=i(ue,d,K),q===null?B=ue:q.sibling=ue,q=ue);return Se&&ht(f,K),B}for(Q=r(f,Q);!ue.done;K++,ue=y.next())ue=D(Q,f,K,ue.value,P),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?K:ue.key),d=i(ue,d,K),q===null?B=ue:q.sibling=ue,q=ue);return e&&Q.forEach(function(am){return n(f,am)}),Se&&ht(f,K),B}function Pe(f,d,y,P){if(typeof y=="object"&&y!==null&&y.type===fe&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case an:e:{for(var B=y.key,q=d;q!==null;){if(q.key===B){if(B=y.type,B===fe){if(q.tag===7){t(f,q.sibling),d=a(q,y.props.children),d.return=f,f=d;break e}}else if(q.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ue&&xs(B)===q.type){t(f,q.sibling),d=a(q,y.props),d.ref=xr(f,q,y),d.return=f,f=d;break e}t(f,q);break}else n(f,q);q=q.sibling}y.type===fe?(d=Ct(y.props.children,f.mode,P,y.key),d.return=f,f=d):(P=qa(y.type,y.key,y.props,null,f.mode,P),P.ref=xr(f,d,y),P.return=f,f=P)}return o(f);case Le:e:{for(q=y.key;d!==null;){if(d.key===q)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){t(f,d.sibling),d=a(d,y.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=Vi(y,f.mode,P),d.return=f,f=d}return o(f);case Ue:return q=y._init,Pe(f,d,q(y._payload),P)}if(Te(y))return j(f,d,y,P);if(V(y))return W(f,d,y,P);ka(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(t(f,d.sibling),d=a(d,y),d.return=f,f=d):(t(f,d),d=Hi(y,f.mode,P),d.return=f,f=d),o(f)):t(f,d)}return Pe}var Wt=Ps(!0),Ms=Ps(!1),wa=Yn(null),Ca=null,Bt=null,Zl=null;function ei(){Zl=Bt=Ca=null}function ni(e){var n=wa.current;ve(wa),e._currentValue=n}function ti(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ut(e,n){Ca=e,Zl=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(en=!0),e.firstContext=null)}function fn(e){var n=e._currentValue;if(Zl!==e)if(e={context:e,memoizedValue:n,next:null},Bt===null){if(Ca===null)throw Error(c(308));Bt=e,Ca.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return n}var yt=null;function ri(e){yt===null?yt=[e]:yt.push(e)}function Ls(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,ri(n)):(t.next=a.next,a.next=t),n.interleaved=t,Wn(e,r)}function Wn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var et=!1;function ai(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ts(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function nt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(le&2)!==0){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Wn(e,t)}return a=r.interleaved,a===null?(n.next=n,ri(r)):(n.next=a.next,a.next=n),r.interleaved=n,Wn(e,t)}function Na(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vl(e,t)}}function Is(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function xa(e,n,t,r){var a=e.updateQueue;et=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,v=u.next;u.next=null,o===null?i=v:o.next=v,o=u;var C=e.alternate;C!==null&&(C=C.updateQueue,s=C.lastBaseUpdate,s!==o&&(s===null?C.firstBaseUpdate=v:s.next=v,C.lastBaseUpdate=u))}if(i!==null){var N=a.baseState;o=0,C=v=u=null,s=i;do{var w=s.lane,D=s.eventTime;if((r&w)===w){C!==null&&(C=C.next={eventTime:D,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var j=e,W=s;switch(w=n,D=t,W.tag){case 1:if(j=W.payload,typeof j=="function"){N=j.call(D,N,w);break e}N=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=W.payload,w=typeof j=="function"?j.call(D,N,w):j,w==null)break e;N=A({},N,w);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,w=a.effects,w===null?a.effects=[s]:w.push(s))}else D={eventTime:D,lane:w,tag:s.tag,payload:s.payload,callback:s.callback,next:null},C===null?(v=C=D,u=N):C=C.next=D,o|=w;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;w=s,s=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);if(C===null&&(u=N),a.baseState=u,a.firstBaseUpdate=v,a.lastBaseUpdate=C,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);St|=o,e.lanes=o,e.memoizedState=N}}function Rs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(c(191,a));a.call(r)}}}var Pr={},Rn=Yn(Pr),Mr=Yn(Pr),Lr=Yn(Pr);function gt(e){if(e===Pr)throw Error(c(174));return e}function li(e,n){switch(ye(Lr,n),ye(Mr,e),ye(Rn,Pr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:il(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=il(n,e)}ve(Rn),ye(Rn,n)}function Ht(){ve(Rn),ve(Mr),ve(Lr)}function Ds(e){gt(Lr.current);var n=gt(Rn.current),t=il(n,e.type);n!==t&&(ye(Mr,e),ye(Rn,t))}function ii(e){Mr.current===e&&(ve(Rn),ve(Mr))}var ke=Yn(0);function Pa(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oi=[];function si(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Ma=Ee.ReactCurrentDispatcher,ui=Ee.ReactCurrentBatchConfig,vt=0,we=null,Re=null,je=null,La=!1,Tr=!1,Ir=0,Pd=0;function Ve(){throw Error(c(321))}function ci(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!En(e[t],n[t]))return!1;return!0}function di(e,n,t,r,a,i){if(vt=i,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ma.current=e===null||e.memoizedState===null?Id:Rd,e=t(r,a),Tr){i=0;do{if(Tr=!1,Ir=0,25<=i)throw Error(c(301));i+=1,je=Re=null,n.updateQueue=null,Ma.current=Dd,e=t(r,a)}while(Tr)}if(Ma.current=Ra,n=Re!==null&&Re.next!==null,vt=0,je=Re=we=null,La=!1,n)throw Error(c(300));return e}function mi(){var e=Ir!==0;return Ir=0,e}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?we.memoizedState=je=e:je=je.next=e,je}function hn(){if(Re===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var n=je===null?we.memoizedState:je.next;if(n!==null)je=n,Re=e;else{if(e===null)throw Error(c(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},je===null?we.memoizedState=je=e:je=je.next=e}return je}function Rr(e,n){return typeof n=="function"?n(e):n}function pi(e){var n=hn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=Re,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=o=null,u=null,v=i;do{var C=v.lane;if((vt&C)===C)u!==null&&(u=u.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var N={lane:C,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};u===null?(s=u=N,o=r):u=u.next=N,we.lanes|=C,St|=C}v=v.next}while(v!==null&&v!==i);u===null?o=r:u.next=s,En(r,n.memoizedState)||(en=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,we.lanes|=i,St|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function fi(e){var n=hn(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);En(i,n.memoizedState)||(en=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function As(){}function zs(e,n){var t=we,r=hn(),a=n(),i=!En(r.memoizedState,a);if(i&&(r.memoizedState=a,en=!0),r=r.queue,hi(Fs.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||je!==null&&je.memoizedState.tag&1){if(t.flags|=2048,Dr(9,js.bind(null,t,r,a,n),void 0,null),Fe===null)throw Error(c(349));(vt&30)!==0||bs(t,n,a)}return a}function bs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function js(e,n,t,r){n.value=t,n.getSnapshot=r,_s(n)&&Os(e)}function Fs(e,n,t){return t(function(){_s(n)&&Os(e)})}function _s(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!En(e,t)}catch{return!0}}function Os(e){var n=Wn(e,1);n!==null&&xn(n,e,1,-1)}function Ws(e){var n=Dn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},n.queue=e,e=e.dispatch=Td.bind(null,we,e),[n.memoizedState,e]}function Dr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Bs(){return hn().memoizedState}function Ta(e,n,t,r){var a=Dn();we.flags|=e,a.memoizedState=Dr(1|n,t,void 0,r===void 0?null:r)}function Ia(e,n,t,r){var a=hn();r=r===void 0?null:r;var i=void 0;if(Re!==null){var o=Re.memoizedState;if(i=o.destroy,r!==null&&ci(r,o.deps)){a.memoizedState=Dr(n,t,i,r);return}}we.flags|=e,a.memoizedState=Dr(1|n,t,i,r)}function Us(e,n){return Ta(8390656,8,e,n)}function hi(e,n){return Ia(2048,8,e,n)}function Hs(e,n){return Ia(4,2,e,n)}function Vs(e,n){return Ia(4,4,e,n)}function qs(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qs(e,n,t){return t=t!=null?t.concat([e]):null,Ia(4,4,qs.bind(null,n,e),t)}function yi(){}function Js(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ci(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ks(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ci(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function $s(e,n,t){return(vt&21)===0?(e.baseState&&(e.baseState=!1,en=!0),e.memoizedState=t):(En(t,n)||(t=xo(),we.lanes|=t,St|=t,e.baseState=!0),n)}function Md(e,n){var t=me;me=t!==0&&4>t?t:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),n()}finally{me=t,ui.transition=r}}function Gs(){return hn().memoizedState}function Ld(e,n,t){var r=lt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ys(e))Xs(n,t);else if(t=Ls(e,n,t,r),t!==null){var a=Ge();xn(t,e,r,a),Zs(t,n,r)}}function Td(e,n,t){var r=lt(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ys(e))Xs(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(a.hasEagerState=!0,a.eagerState=s,En(s,o)){var u=n.interleaved;u===null?(a.next=a,ri(n)):(a.next=u.next,u.next=a),n.interleaved=a;return}}catch{}finally{}t=Ls(e,n,a,r),t!==null&&(a=Ge(),xn(t,e,r,a),Zs(t,n,r))}}function Ys(e){var n=e.alternate;return e===we||n!==null&&n===we}function Xs(e,n){Tr=La=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zs(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vl(e,t)}}var Ra={readContext:fn,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Id={readContext:fn,useCallback:function(e,n){return Dn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:Us,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ta(4194308,4,qs.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ta(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ta(4,2,e,n)},useMemo:function(e,n){var t=Dn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Dn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ld.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var n=Dn();return e={current:e},n.memoizedState=e},useState:Ws,useDebugValue:yi,useDeferredValue:function(e){return Dn().memoizedState=e},useTransition:function(){var e=Ws(!1),n=e[0];return e=Md.bind(null,e[1]),Dn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=we,a=Dn();if(Se){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Fe===null)throw Error(c(349));(vt&30)!==0||bs(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,Us(Fs.bind(null,r,i,e),[e]),r.flags|=2048,Dr(9,js.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Dn(),n=Fe.identifierPrefix;if(Se){var t=On,r=_n;t=(r&~(1<<32-Sn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ir++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Pd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Rd={readContext:fn,useCallback:Js,useContext:fn,useEffect:hi,useImperativeHandle:Qs,useInsertionEffect:Hs,useLayoutEffect:Vs,useMemo:Ks,useReducer:pi,useRef:Bs,useState:function(){return pi(Rr)},useDebugValue:yi,useDeferredValue:function(e){var n=hn();return $s(n,Re.memoizedState,e)},useTransition:function(){var e=pi(Rr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:As,useSyncExternalStore:zs,useId:Gs,unstable_isNewReconciler:!1},Dd={readContext:fn,useCallback:Js,useContext:fn,useEffect:hi,useImperativeHandle:Qs,useInsertionEffect:Hs,useLayoutEffect:Vs,useMemo:Ks,useReducer:fi,useRef:Bs,useState:function(){return fi(Rr)},useDebugValue:yi,useDeferredValue:function(e){var n=hn();return Re===null?n.memoizedState=e:$s(n,Re.memoizedState,e)},useTransition:function(){var e=fi(Rr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:As,useSyncExternalStore:zs,useId:Gs,unstable_isNewReconciler:!1};function wn(e,n){if(e&&e.defaultProps){n=A({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function gi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:A({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Da={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ge(),a=lt(e),i=Bn(r,a);i.payload=n,t!=null&&(i.callback=t),n=nt(e,i,a),n!==null&&(xn(n,e,a,r),Na(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ge(),a=lt(e),i=Bn(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=nt(e,i,a),n!==null&&(xn(n,e,a,r),Na(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ge(),r=lt(e),a=Bn(t,r);a.tag=2,n!=null&&(a.callback=n),n=nt(e,a,r),n!==null&&(xn(n,e,r,t),Na(n,e,r))}};function eu(e,n,t,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!vr(t,r)||!vr(a,i):!0}function nu(e,n,t){var r=!1,a=Xn,i=n.contextType;return typeof i=="object"&&i!==null?i=fn(i):(a=Ze(n)?pt:He.current,r=n.contextTypes,i=(r=r!=null)?jt(e,a):Xn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Da,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function tu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Da.enqueueReplaceState(n,n.state,null)}function vi(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},ai(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=fn(i):(i=Ze(n)?pt:He.current,a.context=jt(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(gi(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Da.enqueueReplaceState(a,a.state,null),xa(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Vt(e,n){try{var t="",r=n;do t+=re(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Si(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ei(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ad=typeof WeakMap=="function"?WeakMap:Map;function ru(e,n,t){t=Bn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Oa||(Oa=!0,bi=r),Ei(e,n)},t}function au(e,n,t){t=Bn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Ei(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ei(e,n),typeof r!="function"&&(rt===null?rt=new Set([this]):rt.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function lu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ad;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Jd.bind(null,e,n,t),n.then(e,e))}function iu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ou(e,n,t,r,a){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Bn(-1,1),n.tag=2,nt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var zd=Ee.ReactCurrentOwner,en=!1;function $e(e,n,t,r){n.child=e===null?Ms(n,null,t,r):Wt(n,e.child,t,r)}function su(e,n,t,r,a){t=t.render;var i=n.ref;return Ut(n,a),r=di(e,n,t,r,i,a),t=mi(),e!==null&&!en?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Un(e,n,a)):(Se&&t&&Kl(n),n.flags|=1,$e(e,n,r,a),n.child)}function uu(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Ui(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,cu(e,n,i,r,a)):(e=qa(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&a)===0){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:vr,t(o,r)&&e.ref===n.ref)return Un(e,n,a)}return n.flags|=1,e=ot(i,r),e.ref=n.ref,e.return=n,n.child=e}function cu(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(vr(i,r)&&e.ref===n.ref)if(en=!1,n.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,Un(e,n,a)}return ki(e,n,t,r,a)}function du(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Qt,un),un|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ye(Qt,un),un|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ye(Qt,un),un|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ye(Qt,un),un|=r;return $e(e,n,a,t),n.child}function mu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ki(e,n,t,r,a){var i=Ze(t)?pt:He.current;return i=jt(n,i),Ut(n,a),t=di(e,n,t,r,i,a),r=mi(),e!==null&&!en?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Un(e,n,a)):(Se&&r&&Kl(n),n.flags|=1,$e(e,n,t,a),n.child)}function pu(e,n,t,r,a){if(Ze(t)){var i=!0;ya(n)}else i=!1;if(Ut(n,a),n.stateNode===null)za(e,n),nu(n,t,r),vi(n,t,r,a),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var u=o.context,v=t.contextType;typeof v=="object"&&v!==null?v=fn(v):(v=Ze(t)?pt:He.current,v=jt(n,v));var C=t.getDerivedStateFromProps,N=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function";N||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==v)&&tu(n,o,r,v),et=!1;var w=n.memoizedState;o.state=w,xa(n,r,o,a),u=n.memoizedState,s!==r||w!==u||Xe.current||et?(typeof C=="function"&&(gi(n,t,C,r),u=n.memoizedState),(s=et||eu(n,t,s,r,w,u,v))?(N||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=v,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Ts(e,n),s=n.memoizedProps,v=n.type===n.elementType?s:wn(n.type,s),o.props=v,N=n.pendingProps,w=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=fn(u):(u=Ze(t)?pt:He.current,u=jt(n,u));var D=t.getDerivedStateFromProps;(C=typeof D=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==N||w!==u)&&tu(n,o,r,u),et=!1,w=n.memoizedState,o.state=w,xa(n,r,o,a);var j=n.memoizedState;s!==N||w!==j||Xe.current||et?(typeof D=="function"&&(gi(n,t,D,r),j=n.memoizedState),(v=et||eu(n,t,v,r,w,j,u)||!1)?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,j,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,j,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=j),o.props=r,o.state=j,o.context=u,r=v):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),r=!1)}return wi(e,n,t,r,i,a)}function wi(e,n,t,r,a,i){mu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return a&&vs(n,t,!1),Un(e,n,i);r=n.stateNode,zd.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Wt(n,e.child,null,i),n.child=Wt(n,null,s,i)):$e(e,n,s,i),n.memoizedState=r.state,a&&vs(n,t,!0),n.child}function fu(e){var n=e.stateNode;n.pendingContext?ys(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ys(e,n.context,!1),li(e,n.containerInfo)}function hu(e,n,t,r,a){return Ot(),Xl(a),n.flags|=256,$e(e,n,t,r),n.child}var Ci={dehydrated:null,treeContext:null,retryLane:0};function Ni(e){return{baseLanes:e,cachePool:null,transitions:null}}function yu(e,n,t){var r=n.pendingProps,a=ke.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ye(ke,a&1),e===null)return Yl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Qa(o,r,0,null),e=Ct(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ni(t),n.memoizedState=Ci,e):xi(n,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return bd(e,n,o,r,s,a,t);if(i){i=r.fallback,o=n.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=ot(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=ot(s,i):(i=Ct(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Ni(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Ci,r}return i=e.child,e=i.sibling,r=ot(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function xi(e,n){return n=Qa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Aa(e,n,t,r){return r!==null&&Xl(r),Wt(n,e.child,null,t),e=xi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bd(e,n,t,r,a,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Si(Error(c(422))),Aa(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=Qa({mode:"visible",children:r.children},a,0,null),i=Ct(i,a,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&Wt(n,e.child,null,o),n.child.memoizedState=Ni(o),n.memoizedState=Ci,i);if((n.mode&1)===0)return Aa(e,n,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(c(419)),r=Si(i,r,void 0),Aa(e,n,o,r)}if(s=(o&e.childLanes)!==0,en||s){if(r=Fe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|o))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Wn(e,a),xn(r,e,a,-1))}return Bi(),r=Si(Error(c(421))),Aa(e,n,o,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Kd.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,sn=Gn(a.nextSibling),on=n,Se=!0,kn=null,e!==null&&(mn[pn++]=_n,mn[pn++]=On,mn[pn++]=ft,_n=e.id,On=e.overflow,ft=n),n=xi(n,r.children),n.flags|=4096,n)}function gu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ti(e.return,n,t)}function Pi(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function vu(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if($e(e,n,r.children,t),r=ke.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gu(e,t,n);else if(e.tag===19)gu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye(ke,r),(n.mode&1)===0)n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Pa(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Pi(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Pa(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Pi(n,!0,t,null,i);break;case"together":Pi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function za(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),St|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=ot(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ot(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jd(e,n,t){switch(n.tag){case 3:fu(n),Ot();break;case 5:Ds(n);break;case 1:Ze(n.type)&&ya(n);break;case 4:li(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;ye(wa,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ye(ke,ke.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?yu(e,n,t):(ye(ke,ke.current&1),e=Un(e,n,t),e!==null?e.sibling:null);ye(ke,ke.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return vu(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(ke,ke.current),r)break;return null;case 22:case 23:return n.lanes=0,du(e,n,t)}return Un(e,n,t)}var Su,Mi,Eu,ku;Su=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Mi=function(){},Eu=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,gt(Rn.current);var i=null;switch(t){case"input":a=Zt(e,a),r=Zt(e,r),i=[];break;case"select":a=A({},a,{value:void 0}),r=A({},r,{value:void 0}),i=[];break;case"textarea":a=vn(e,a),r=vn(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pa)}ol(t,r);var o;t=null;for(v in a)if(!r.hasOwnProperty(v)&&a.hasOwnProperty(v)&&a[v]!=null)if(v==="style"){var s=a[v];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(L.hasOwnProperty(v)?i||(i=[]):(i=i||[]).push(v,null));for(v in r){var u=r[v];if(s=a!=null?a[v]:void 0,r.hasOwnProperty(v)&&u!==s&&(u!=null||s!=null))if(v==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(v,t)),t=u;else v==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(v,u)):v==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(v,""+u):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(L.hasOwnProperty(v)?(u!=null&&v==="onScroll"&&ge("scroll",e),i||s===u||(i=[])):(i=i||[]).push(v,u))}t&&(i=i||[]).push("style",t);var v=i;(n.updateQueue=v)&&(n.flags|=4)}},ku=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ar(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Fd(e,n,t){var r=n.pendingProps;switch($l(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return Ze(n.type)&&ha(),qe(n),null;case 3:return r=n.stateNode,Ht(),ve(Xe),ve(He),si(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ea(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kn!==null&&(_i(kn),kn=null))),Mi(e,n),qe(n),null;case 5:ii(n);var a=gt(Lr.current);if(t=n.type,e!==null&&n.stateNode!=null)Eu(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(c(166));return qe(n),null}if(e=gt(Rn.current),Ea(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[In]=n,r[Cr]=i,e=(n.mode&1)!==0,t){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(a=0;a<Er.length;a++)ge(Er[a],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Hr(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":er(r,i),ge("invalid",r)}ol(t,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ma(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ma(r.textContent,s,e),a=["children",""+s]):L.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ge("scroll",r)}switch(t){case"input":ct(r),b(r,i,!0);break;case"textarea":ct(r),lo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pa)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=io(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[In]=n,e[Cr]=r,Su(e,n,!1,!1),n.stateNode=e;e:{switch(o=sl(t,r),t){case"dialog":ge("cancel",e),ge("close",e),a=r;break;case"iframe":case"object":case"embed":ge("load",e),a=r;break;case"video":case"audio":for(a=0;a<Er.length;a++)ge(Er[a],e);a=r;break;case"source":ge("error",e),a=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),a=r;break;case"details":ge("toggle",e),a=r;break;case"input":Hr(e,r),a=Zt(e,r),ge("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=A({},r,{value:void 0}),ge("invalid",e);break;case"textarea":er(e,r),a=vn(e,r),ge("invalid",e);break;default:a=r}ol(t,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?uo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&oo(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&nr(e,u):typeof u=="number"&&nr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(L.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ge("scroll",e):u!=null&&ie(e,i,u,o))}switch(t){case"input":ct(e),b(e,r,!1);break;case"textarea":ct(e),lo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+se(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ce(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ce(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=pa)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return qe(n),null;case 6:if(e&&n.stateNode!=null)ku(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(t=gt(Lr.current),gt(Rn.current),Ea(n)){if(r=n.stateNode,t=n.memoizedProps,r[In]=n,(i=r.nodeValue!==t)&&(e=on,e!==null))switch(e.tag){case 3:ma(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[In]=n,n.stateNode=r}return qe(n),null;case 13:if(ve(ke),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&sn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ns(),Ot(),n.flags|=98560,i=!1;else if(i=Ea(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[In]=n}else Ot(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),i=!1}else kn!==null&&(_i(kn),kn=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ke.current&1)!==0?De===0&&(De=3):Bi())),n.updateQueue!==null&&(n.flags|=4),qe(n),null);case 4:return Ht(),Mi(e,n),e===null&&kr(n.stateNode.containerInfo),qe(n),null;case 10:return ni(n.type._context),qe(n),null;case 17:return Ze(n.type)&&ha(),qe(n),null;case 19:if(ve(ke),i=n.memoizedState,i===null)return qe(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)Ar(i,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=Pa(e),o!==null){for(n.flags|=128,Ar(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ye(ke,ke.current&1|2),n.child}e=e.sibling}i.tail!==null&&xe()>Jt&&(n.flags|=128,r=!0,Ar(i,!1),n.lanes=4194304)}else{if(!r)if(e=Pa(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Se)return qe(n),null}else 2*xe()-i.renderingStartTime>Jt&&t!==1073741824&&(n.flags|=128,r=!0,Ar(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=xe(),n.sibling=null,t=ke.current,ye(ke,r?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Wi(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(un&1073741824)!==0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),null;case 24:return null;case 25:return null}throw Error(c(156,n.tag))}function _d(e,n){switch($l(n),n.tag){case 1:return Ze(n.type)&&ha(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ht(),ve(Xe),ve(He),si(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ii(n),null;case 13:if(ve(ke),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ve(ke),null;case 4:return Ht(),null;case 10:return ni(n.type._context),null;case 22:case 23:return Wi(),null;case 24:return null;default:return null}}var ba=!1,Qe=!1,Od=typeof WeakSet=="function"?WeakSet:Set,z=null;function qt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ne(e,n,r)}else t.current=null}function Li(e,n,t){try{t()}catch(r){Ne(e,n,r)}}var wu=!1;function Wd(e,n){if(Wl=na,e=es(),Dl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,u=-1,v=0,C=0,N=e,w=null;n:for(;;){for(var D;N!==t||a!==0&&N.nodeType!==3||(s=o+a),N!==i||r!==0&&N.nodeType!==3||(u=o+r),N.nodeType===3&&(o+=N.nodeValue.length),(D=N.firstChild)!==null;)w=N,N=D;for(;;){if(N===e)break n;if(w===t&&++v===a&&(s=o),w===i&&++C===r&&(u=o),(D=N.nextSibling)!==null)break;N=w,w=N.parentNode}N=D}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bl={focusedElem:e,selectionRange:t},na=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var j=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var W=j.memoizedProps,Pe=j.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?W:wn(n.type,W),Pe);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(P){Ne(n,n.return,P)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return j=wu,wu=!1,j}function zr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Li(n,t,i)}a=a.next}while(a!==r)}}function ja(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ti(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Cu(e){var n=e.alternate;n!==null&&(e.alternate=null,Cu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[In],delete n[Cr],delete n[ql],delete n[wd],delete n[Cd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nu(e){return e.tag===5||e.tag===3||e.tag===4}function xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=pa));else if(r!==4&&(e=e.child,e!==null))for(Ii(e,n,t),e=e.sibling;e!==null;)Ii(e,n,t),e=e.sibling}function Ri(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,n,t),e=e.sibling;e!==null;)Ri(e,n,t),e=e.sibling}var We=null,Cn=!1;function tt(e,n,t){for(t=t.child;t!==null;)Pu(e,n,t),t=t.sibling}function Pu(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount($r,t)}catch{}switch(t.tag){case 5:Qe||qt(t,n);case 6:var r=We,a=Cn;We=null,tt(e,n,t),We=r,Cn=a,We!==null&&(Cn?(e=We,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):We.removeChild(t.stateNode));break;case 18:We!==null&&(Cn?(e=We,t=t.stateNode,e.nodeType===8?Vl(e.parentNode,t):e.nodeType===1&&Vl(e,t),mr(e)):Vl(We,t.stateNode));break;case 4:r=We,a=Cn,We=t.stateNode.containerInfo,Cn=!0,tt(e,n,t),We=r,Cn=a;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&Li(t,n,o),a=a.next}while(a!==r)}tt(e,n,t);break;case 1:if(!Qe&&(qt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Ne(t,n,s)}tt(e,n,t);break;case 21:tt(e,n,t);break;case 22:t.mode&1?(Qe=(r=Qe)||t.memoizedState!==null,tt(e,n,t),Qe=r):tt(e,n,t);break;default:tt(e,n,t)}}function Mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Od),n.forEach(function(r){var a=$d.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Nn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:We=s.stateNode,Cn=!1;break e;case 3:We=s.stateNode.containerInfo,Cn=!0;break e;case 4:We=s.stateNode.containerInfo,Cn=!0;break e}s=s.return}if(We===null)throw Error(c(160));Pu(i,o,a),We=null,Cn=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(v){Ne(a,n,v)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Lu(n,e),n=n.sibling}function Lu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nn(n,e),An(e),r&4){try{zr(3,e,e.return),ja(3,e)}catch(W){Ne(e,e.return,W)}try{zr(5,e,e.return)}catch(W){Ne(e,e.return,W)}}break;case 1:Nn(n,e),An(e),r&512&&t!==null&&qt(t,t.return);break;case 5:if(Nn(n,e),An(e),r&512&&t!==null&&qt(t,t.return),e.flags&32){var a=e.stateNode;try{nr(a,"")}catch(W){Ne(e,e.return,W)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Vr(a,i),sl(s,o);var v=sl(s,i);for(o=0;o<u.length;o+=2){var C=u[o],N=u[o+1];C==="style"?uo(a,N):C==="dangerouslySetInnerHTML"?oo(a,N):C==="children"?nr(a,N):ie(a,C,N,v)}switch(s){case"input":S(a,i);break;case"textarea":Ln(a,i);break;case"select":var w=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var D=i.value;D!=null?Ce(a,!!i.multiple,D,!1):w!==!!i.multiple&&(i.defaultValue!=null?Ce(a,!!i.multiple,i.defaultValue,!0):Ce(a,!!i.multiple,i.multiple?[]:"",!1))}a[Cr]=i}catch(W){Ne(e,e.return,W)}}break;case 6:if(Nn(n,e),An(e),r&4){if(e.stateNode===null)throw Error(c(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(W){Ne(e,e.return,W)}}break;case 3:if(Nn(n,e),An(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{mr(n.containerInfo)}catch(W){Ne(e,e.return,W)}break;case 4:Nn(n,e),An(e);break;case 13:Nn(n,e),An(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(zi=xe())),r&4&&Mu(e);break;case 22:if(C=t!==null&&t.memoizedState!==null,e.mode&1?(Qe=(v=Qe)||C,Nn(n,e),Qe=v):Nn(n,e),An(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!C&&(e.mode&1)!==0)for(z=e,C=e.child;C!==null;){for(N=z=C;z!==null;){switch(w=z,D=w.child,w.tag){case 0:case 11:case 14:case 15:zr(4,w,w.return);break;case 1:qt(w,w.return);var j=w.stateNode;if(typeof j.componentWillUnmount=="function"){r=w,t=w.return;try{n=r,j.props=n.memoizedProps,j.state=n.memoizedState,j.componentWillUnmount()}catch(W){Ne(r,t,W)}}break;case 5:qt(w,w.return);break;case 22:if(w.memoizedState!==null){Ru(N);continue}}D!==null?(D.return=w,z=D):Ru(N)}C=C.sibling}e:for(C=null,N=e;;){if(N.tag===5){if(C===null){C=N;try{a=N.stateNode,v?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=N.stateNode,u=N.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=so("display",o))}catch(W){Ne(e,e.return,W)}}}else if(N.tag===6){if(C===null)try{N.stateNode.nodeValue=v?"":N.memoizedProps}catch(W){Ne(e,e.return,W)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;C===N&&(C=null),N=N.return}C===N&&(C=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Nn(n,e),An(e),r&4&&Mu(e);break;case 21:break;default:Nn(n,e),An(e)}}function An(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Nu(t)){var r=t;break e}t=t.return}throw Error(c(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(nr(a,""),r.flags&=-33);var i=xu(e);Ri(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=xu(e);Ii(e,s,o);break;default:throw Error(c(161))}}catch(u){Ne(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bd(e,n,t){z=e,Tu(e)}function Tu(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var a=z,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||ba;if(!o){var s=a.alternate,u=s!==null&&s.memoizedState!==null||Qe;s=ba;var v=Qe;if(ba=o,(Qe=u)&&!v)for(z=a;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?Du(a):u!==null?(u.return=o,z=u):Du(a);for(;i!==null;)z=i,Tu(i),i=i.sibling;z=a,ba=s,Qe=v}Iu(e)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,z=i):Iu(e)}}function Iu(e){for(;z!==null;){var n=z;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Qe||ja(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Qe)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:wn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Rs(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Rs(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var v=n.alternate;if(v!==null){var C=v.memoizedState;if(C!==null){var N=C.dehydrated;N!==null&&mr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Qe||n.flags&512&&Ti(n)}catch(w){Ne(n,n.return,w)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function Ru(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function Du(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ja(4,n)}catch(u){Ne(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(u){Ne(n,a,u)}}var i=n.return;try{Ti(n)}catch(u){Ne(n,i,u)}break;case 5:var o=n.return;try{Ti(n)}catch(u){Ne(n,o,u)}}}catch(u){Ne(n,n.return,u)}if(n===e){z=null;break}var s=n.sibling;if(s!==null){s.return=n.return,z=s;break}z=n.return}}var Ud=Math.ceil,Fa=Ee.ReactCurrentDispatcher,Di=Ee.ReactCurrentOwner,yn=Ee.ReactCurrentBatchConfig,le=0,Fe=null,Ie=null,Be=0,un=0,Qt=Yn(0),De=0,br=null,St=0,_a=0,Ai=0,jr=null,nn=null,zi=0,Jt=1/0,Hn=null,Oa=!1,bi=null,rt=null,Wa=!1,at=null,Ba=0,Fr=0,ji=null,Ua=-1,Ha=0;function Ge(){return(le&6)!==0?xe():Ua!==-1?Ua:Ua=xe()}function lt(e){return(e.mode&1)===0?1:(le&2)!==0&&Be!==0?Be&-Be:xd.transition!==null?(Ha===0&&(Ha=xo()),Ha):(e=me,e!==0||(e=window.event,e=e===void 0?16:zo(e.type)),e)}function xn(e,n,t,r){if(50<Fr)throw Fr=0,ji=null,Error(c(185));or(e,t,r),((le&2)===0||e!==Fe)&&(e===Fe&&((le&2)===0&&(_a|=t),De===4&&it(e,Be)),tn(e,r),t===1&&le===0&&(n.mode&1)===0&&(Jt=xe()+500,ga&&Zn()))}function tn(e,n){var t=e.callbackNode;xc(e,n);var r=Xr(e,e===Fe?Be:0);if(r===0)t!==null&&wo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&wo(t),n===1)e.tag===0?Nd(zu.bind(null,e)):Ss(zu.bind(null,e)),Ed(function(){(le&6)===0&&Zn()}),t=null;else{switch(Po(r)){case 1:t=hl;break;case 4:t=Co;break;case 16:t=Kr;break;case 536870912:t=No;break;default:t=Kr}t=Uu(t,Au.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Au(e,n){if(Ua=-1,Ha=0,(le&6)!==0)throw Error(c(327));var t=e.callbackNode;if(Kt()&&e.callbackNode!==t)return null;var r=Xr(e,e===Fe?Be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Va(e,r);else{n=r;var a=le;le|=2;var i=ju();(Fe!==e||Be!==n)&&(Hn=null,Jt=xe()+500,kt(e,n));do try{qd();break}catch(s){bu(e,s)}while(!0);ei(),Fa.current=i,le=a,Ie!==null?n=0:(Fe=null,Be=0,n=De)}if(n!==0){if(n===2&&(a=yl(e),a!==0&&(r=a,n=Fi(e,a))),n===1)throw t=br,kt(e,0),it(e,r),tn(e,xe()),t;if(n===6)it(e,r);else{if(a=e.current.alternate,(r&30)===0&&!Hd(a)&&(n=Va(e,r),n===2&&(i=yl(e),i!==0&&(r=i,n=Fi(e,i))),n===1))throw t=br,kt(e,0),it(e,r),tn(e,xe()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(c(345));case 2:wt(e,nn,Hn);break;case 3:if(it(e,r),(r&130023424)===r&&(n=zi+500-xe(),10<n)){if(Xr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Hl(wt.bind(null,e,nn,Hn),n);break}wt(e,nn,Hn);break;case 4:if(it(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var o=31-Sn(r);i=1<<o,o=n[o],o>a&&(a=o),r&=~i}if(r=a,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ud(r/1960))-r,10<r){e.timeoutHandle=Hl(wt.bind(null,e,nn,Hn),r);break}wt(e,nn,Hn);break;case 5:wt(e,nn,Hn);break;default:throw Error(c(329))}}}return tn(e,xe()),e.callbackNode===t?Au.bind(null,e):null}function Fi(e,n){var t=jr;return e.current.memoizedState.isDehydrated&&(kt(e,n).flags|=256),e=Va(e,n),e!==2&&(n=nn,nn=t,n!==null&&_i(n)),e}function _i(e){nn===null?nn=e:nn.push.apply(nn,e)}function Hd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!En(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function it(e,n){for(n&=~Ai,n&=~_a,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Sn(n),r=1<<t;e[t]=-1,n&=~r}}function zu(e){if((le&6)!==0)throw Error(c(327));Kt();var n=Xr(e,0);if((n&1)===0)return tn(e,xe()),null;var t=Va(e,n);if(e.tag!==0&&t===2){var r=yl(e);r!==0&&(n=r,t=Fi(e,r))}if(t===1)throw t=br,kt(e,0),it(e,n),tn(e,xe()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wt(e,nn,Hn),tn(e,xe()),null}function Oi(e,n){var t=le;le|=1;try{return e(n)}finally{le=t,le===0&&(Jt=xe()+500,ga&&Zn())}}function Et(e){at!==null&&at.tag===0&&(le&6)===0&&Kt();var n=le;le|=1;var t=yn.transition,r=me;try{if(yn.transition=null,me=1,e)return e()}finally{me=r,yn.transition=t,le=n,(le&6)===0&&Zn()}}function Wi(){un=Qt.current,ve(Qt)}function kt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Sd(t)),Ie!==null)for(t=Ie.return;t!==null;){var r=t;switch($l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ha();break;case 3:Ht(),ve(Xe),ve(He),si();break;case 5:ii(r);break;case 4:Ht();break;case 13:ve(ke);break;case 19:ve(ke);break;case 10:ni(r.type._context);break;case 22:case 23:Wi()}t=t.return}if(Fe=e,Ie=e=ot(e.current,null),Be=un=n,De=0,br=null,Ai=_a=St=0,nn=jr=null,yt!==null){for(n=0;n<yt.length;n++)if(t=yt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}t.pending=r}yt=null}return e}function bu(e,n){do{var t=Ie;try{if(ei(),Ma.current=Ra,La){for(var r=we.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}La=!1}if(vt=0,je=Re=we=null,Tr=!1,Ir=0,Di.current=null,t===null||t.return===null){De=1,br=n,Ie=null;break}e:{var i=e,o=t.return,s=t,u=n;if(n=Be,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var v=u,C=s,N=C.tag;if((C.mode&1)===0&&(N===0||N===11||N===15)){var w=C.alternate;w?(C.updateQueue=w.updateQueue,C.memoizedState=w.memoizedState,C.lanes=w.lanes):(C.updateQueue=null,C.memoizedState=null)}var D=iu(o);if(D!==null){D.flags&=-257,ou(D,o,s,i,n),D.mode&1&&lu(i,v,n),n=D,u=v;var j=n.updateQueue;if(j===null){var W=new Set;W.add(u),n.updateQueue=W}else j.add(u);break e}else{if((n&1)===0){lu(i,v,n),Bi();break e}u=Error(c(426))}}else if(Se&&s.mode&1){var Pe=iu(o);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),ou(Pe,o,s,i,n),Xl(Vt(u,s));break e}}i=u=Vt(u,s),De!==4&&(De=2),jr===null?jr=[i]:jr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=ru(i,u,n);Is(i,f);break e;case 1:s=u;var d=i.type,y=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(rt===null||!rt.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var P=au(i,s,n);Is(i,P);break e}}i=i.return}while(i!==null)}_u(t)}catch(B){n=B,Ie===t&&t!==null&&(Ie=t=t.return);continue}break}while(!0)}function ju(){var e=Fa.current;return Fa.current=Ra,e===null?Ra:e}function Bi(){(De===0||De===3||De===2)&&(De=4),Fe===null||(St&268435455)===0&&(_a&268435455)===0||it(Fe,Be)}function Va(e,n){var t=le;le|=2;var r=ju();(Fe!==e||Be!==n)&&(Hn=null,kt(e,n));do try{Vd();break}catch(a){bu(e,a)}while(!0);if(ei(),le=t,Fa.current=r,Ie!==null)throw Error(c(261));return Fe=null,Be=0,De}function Vd(){for(;Ie!==null;)Fu(Ie)}function qd(){for(;Ie!==null&&!yc();)Fu(Ie)}function Fu(e){var n=Bu(e.alternate,e,un);e.memoizedProps=e.pendingProps,n===null?_u(e):Ie=n,Di.current=null}function _u(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Fd(t,n,un),t!==null){Ie=t;return}}else{if(t=_d(t,n),t!==null){t.flags&=32767,Ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Ie=null;return}}if(n=n.sibling,n!==null){Ie=n;return}Ie=n=e}while(n!==null);De===0&&(De=5)}function wt(e,n,t){var r=me,a=yn.transition;try{yn.transition=null,me=1,Qd(e,n,t,r)}finally{yn.transition=a,me=r}return null}function Qd(e,n,t,r){do Kt();while(at!==null);if((le&6)!==0)throw Error(c(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Pc(e,i),e===Fe&&(Ie=Fe=null,Be=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Wa||(Wa=!0,Uu(Kr,function(){return Kt(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=yn.transition,yn.transition=null;var o=me;me=1;var s=le;le|=4,Di.current=null,Wd(e,t),Lu(t,e),md(Bl),na=!!Wl,Bl=Wl=null,e.current=t,Bd(t),gc(),le=s,me=o,yn.transition=i}else e.current=t;if(Wa&&(Wa=!1,at=e,Ba=a),i=e.pendingLanes,i===0&&(rt=null),Ec(t.stateNode),tn(e,xe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Oa)throw Oa=!1,e=bi,bi=null,e;return(Ba&1)!==0&&e.tag!==0&&Kt(),i=e.pendingLanes,(i&1)!==0?e===ji?Fr++:(Fr=0,ji=e):Fr=0,Zn(),null}function Kt(){if(at!==null){var e=Po(Ba),n=yn.transition,t=me;try{if(yn.transition=null,me=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,Ba=0,(le&6)!==0)throw Error(c(331));var a=le;for(le|=4,z=e.current;z!==null;){var i=z,o=i.child;if((z.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var v=s[u];for(z=v;z!==null;){var C=z;switch(C.tag){case 0:case 11:case 15:zr(8,C,i)}var N=C.child;if(N!==null)N.return=C,z=N;else for(;z!==null;){C=z;var w=C.sibling,D=C.return;if(Cu(C),C===v){z=null;break}if(w!==null){w.return=D,z=w;break}z=D}}}var j=i.alternate;if(j!==null){var W=j.child;if(W!==null){j.child=null;do{var Pe=W.sibling;W.sibling=null,W=Pe}while(W!==null)}}z=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,z=o;else e:for(;z!==null;){if(i=z,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:zr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,z=f;break e}z=i.return}}var d=e.current;for(z=d;z!==null;){o=z;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,z=y;else e:for(o=d;z!==null;){if(s=z,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ja(9,s)}}catch(B){Ne(s,s.return,B)}if(s===o){z=null;break e}var P=s.sibling;if(P!==null){P.return=s.return,z=P;break e}z=s.return}}if(le=a,Zn(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot($r,e)}catch{}r=!0}return r}finally{me=t,yn.transition=n}}return!1}function Ou(e,n,t){n=Vt(t,n),n=ru(e,n,1),e=nt(e,n,1),n=Ge(),e!==null&&(or(e,1,n),tn(e,n))}function Ne(e,n,t){if(e.tag===3)Ou(e,e,t);else for(;n!==null;){if(n.tag===3){Ou(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rt===null||!rt.has(r))){e=Vt(t,e),e=au(n,e,1),n=nt(n,e,1),e=Ge(),n!==null&&(or(n,1,e),tn(n,e));break}}n=n.return}}function Jd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ge(),e.pingedLanes|=e.suspendedLanes&t,Fe===e&&(Be&t)===t&&(De===4||De===3&&(Be&130023424)===Be&&500>xe()-zi?kt(e,0):Ai|=t),tn(e,n)}function Wu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Yr,Yr<<=1,(Yr&130023424)===0&&(Yr=4194304)));var t=Ge();e=Wn(e,n),e!==null&&(or(e,n,t),tn(e,t))}function Kd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Wu(e,t)}function $d(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(n),Wu(e,t)}var Bu;Bu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xe.current)en=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return en=!1,jd(e,n,t);en=(e.flags&131072)!==0}else en=!1,Se&&(n.flags&1048576)!==0&&Es(n,Sa,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;za(e,n),e=n.pendingProps;var a=jt(n,He.current);Ut(n,t),a=di(null,n,r,e,a,t);var i=mi();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ze(r)?(i=!0,ya(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ai(n),a.updater=Da,n.stateNode=a,a._reactInternals=n,vi(n,r,e,t),n=wi(null,n,r,!0,i,t)):(n.tag=0,Se&&i&&Kl(n),$e(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(za(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Yd(r),e=wn(r,e),a){case 0:n=ki(null,n,r,e,t);break e;case 1:n=pu(null,n,r,e,t);break e;case 11:n=su(null,n,r,e,t);break e;case 14:n=uu(null,n,r,wn(r.type,e),t);break e}throw Error(c(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:wn(r,a),ki(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:wn(r,a),pu(e,n,r,a,t);case 3:e:{if(fu(n),e===null)throw Error(c(387));r=n.pendingProps,i=n.memoizedState,a=i.element,Ts(e,n),xa(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=Vt(Error(c(423)),n),n=hu(e,n,r,t,a);break e}else if(r!==a){a=Vt(Error(c(424)),n),n=hu(e,n,r,t,a);break e}else for(sn=Gn(n.stateNode.containerInfo.firstChild),on=n,Se=!0,kn=null,t=Ms(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ot(),r===a){n=Un(e,n,t);break e}$e(e,n,r,t)}n=n.child}return n;case 5:return Ds(n),e===null&&Yl(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Ul(r,a)?o=null:i!==null&&Ul(r,i)&&(n.flags|=32),mu(e,n),$e(e,n,o,t),n.child;case 6:return e===null&&Yl(n),null;case 13:return yu(e,n,t);case 4:return li(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Wt(n,null,r,t):$e(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:wn(r,a),su(e,n,r,a,t);case 7:return $e(e,n,n.pendingProps,t),n.child;case 8:return $e(e,n,n.pendingProps.children,t),n.child;case 12:return $e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,o=a.value,ye(wa,r._currentValue),r._currentValue=o,i!==null)if(En(i.value,o)){if(i.children===a.children&&!Xe.current){n=Un(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Bn(-1,t&-t),u.tag=2;var v=i.updateQueue;if(v!==null){v=v.shared;var C=v.pending;C===null?u.next=u:(u.next=C.next,C.next=u),v.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),ti(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(c(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),ti(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}$e(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Ut(n,t),a=fn(a),r=r(a),n.flags|=1,$e(e,n,r,t),n.child;case 14:return r=n.type,a=wn(r,n.pendingProps),a=wn(r.type,a),uu(e,n,r,a,t);case 15:return cu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:wn(r,a),za(e,n),n.tag=1,Ze(r)?(e=!0,ya(n)):e=!1,Ut(n,t),nu(n,r,a),vi(n,r,a,t),wi(null,n,r,!0,e,t);case 19:return vu(e,n,t);case 22:return du(e,n,t)}throw Error(c(156,n.tag))};function Uu(e,n){return ko(e,n)}function Gd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,n,t,r){return new Gd(e,n,t,r)}function Ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yd(e){if(typeof e=="function")return Ui(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ze)return 11;if(e===dn)return 14}return 2}function ot(e,n){var t=e.alternate;return t===null?(t=gn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function qa(e,n,t,r,a,i){var o=2;if(r=e,typeof e=="function")Ui(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fe:return Ct(t.children,a,i,n);case oe:o=8,a|=8;break;case Mn:return e=gn(12,t,n,a|2),e.elementType=Mn,e.lanes=i,e;case be:return e=gn(13,t,n,a),e.elementType=be,e.lanes=i,e;case Ke:return e=gn(19,t,n,a),e.elementType=Ke,e.lanes=i,e;case de:return Qa(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Je:o=10;break e;case Ae:o=9;break e;case ze:o=11;break e;case dn:o=14;break e;case Ue:o=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return n=gn(o,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function Ct(e,n,t,r){return e=gn(7,e,r,n),e.lanes=t,e}function Qa(e,n,t,r){return e=gn(22,e,r,n),e.elementType=de,e.lanes=t,e.stateNode={isHidden:!1},e}function Hi(e,n,t){return e=gn(6,e,null,n),e.lanes=t,e}function Vi(e,n,t){return n=gn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Xd(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gl(0),this.expirationTimes=gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function qi(e,n,t,r,a,i,o,s,u){return e=new Xd(e,n,t,s,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=gn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ai(i),e}function Zd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Le,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Hu(e){if(!e)return Xn;e=e._reactInternals;e:{if(dt(e)!==e||e.tag!==1)throw Error(c(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ze(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(Ze(t))return gs(e,t,n)}return n}function Vu(e,n,t,r,a,i,o,s,u){return e=qi(t,r,!0,e,a,i,o,s,u),e.context=Hu(null),t=e.current,r=Ge(),a=lt(t),i=Bn(r,a),i.callback=n??null,nt(t,i,a),e.current.lanes=a,or(e,a,r),tn(e,r),e}function Ja(e,n,t,r){var a=n.current,i=Ge(),o=lt(a);return t=Hu(t),n.context===null?n.context=t:n.pendingContext=t,n=Bn(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=nt(a,n,o),e!==null&&(xn(e,a,o,i),Na(e,a,o)),o}function Ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Qi(e,n){qu(e,n),(e=e.alternate)&&qu(e,n)}function em(){return null}var Qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ji(e){this._internalRoot=e}$a.prototype.render=Ji.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));Ja(e,n,null,null)},$a.prototype.unmount=Ji.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Et(function(){Ja(null,e,null,null)}),n[jn]=null}};function $a(e){this._internalRoot=e}$a.prototype.unstable_scheduleHydration=function(e){if(e){var n=To();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Jn.length&&n!==0&&n<Jn[t].priority;t++);Jn.splice(t,0,e),t===0&&Do(e)}};function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function nm(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var v=Ka(o);i.call(v)}}var o=Vu(n,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=o,e[jn]=o.current,kr(e.nodeType===8?e.parentNode:e),Et(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var v=Ka(u);s.call(v)}}var u=qi(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=u,e[jn]=u.current,kr(e.nodeType===8?e.parentNode:e),Et(function(){Ja(n,u,t,r)}),u}function Ya(e,n,t,r,a){var i=t._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var u=Ka(o);s.call(u)}}Ja(n,o,e,a)}else o=nm(t,n,e,a,r);return Ka(o)}Mo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ir(n.pendingLanes);t!==0&&(vl(n,t|1),tn(n,xe()),(le&6)===0&&(Jt=xe()+500,Zn()))}break;case 13:Et(function(){var r=Wn(e,1);if(r!==null){var a=Ge();xn(r,e,1,a)}}),Qi(e,1)}},Sl=function(e){if(e.tag===13){var n=Wn(e,134217728);if(n!==null){var t=Ge();xn(n,e,134217728,t)}Qi(e,134217728)}},Lo=function(e){if(e.tag===13){var n=lt(e),t=Wn(e,n);if(t!==null){var r=Ge();xn(t,e,n,r)}Qi(e,n)}},To=function(){return me},Io=function(e,n){var t=me;try{return me=e,n()}finally{me=t}},dl=function(e,n,t){switch(n){case"input":if(S(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=fa(r);if(!a)throw Error(c(90));Xt(r),S(r,a)}}}break;case"textarea":Ln(e,t);break;case"select":n=t.value,n!=null&&Ce(e,!!t.multiple,n,!1)}},fo=Oi,ho=Et;var tm={usingClientEntryPoint:!1,Events:[Nr,zt,fa,mo,po,Oi]},_r={findFiberByHostInstance:mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rm={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=So(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||em,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{$r=Xa.inject(rm),Tn=Xa}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm,rn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ki(n))throw Error(c(200));return Zd(e,n,null,t)},rn.createRoot=function(e,n){if(!Ki(e))throw Error(c(299));var t=!1,r="",a=Qu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=qi(e,1,!1,null,null,t,!1,r,a),e[jn]=n.current,kr(e.nodeType===8?e.parentNode:e),new Ji(n)},rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=So(n),e=e===null?null:e.stateNode,e},rn.flushSync=function(e){return Et(e)},rn.hydrate=function(e,n,t){if(!Ga(n))throw Error(c(200));return Ya(null,e,n,!0,t)},rn.hydrateRoot=function(e,n,t){if(!Ki(e))throw Error(c(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",o=Qu;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Vu(n,null,e,1,t??null,a,!1,i,o),e[jn]=n.current,kr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new $a(n)},rn.render=function(e,n,t){if(!Ga(n))throw Error(c(200));return Ya(null,e,n,!1,t)},rn.unmountComponentAtNode=function(e){if(!Ga(e))throw Error(c(40));return e._reactRootContainer?(Et(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1},rn.unstable_batchedUpdates=Oi,rn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ga(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ya(e,n,t,!1,r)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var Zu;function cm(){if(Zu)return Gi.exports;Zu=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(h){console.error(h)}}return m(),Gi.exports=um(),Gi.exports}var ec;function dm(){if(ec)return Za;ec=1;var m=cm();return Za.createRoot=m.createRoot,Za.hydrateRoot=m.hydrateRoot,Za}var mm=dm();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=m=>m.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tc=(...m)=>m.filter((h,c,T)=>!!h&&h.trim()!==""&&T.indexOf(h)===c).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=ce.forwardRef(({color:m="currentColor",size:h=24,strokeWidth:c=2,absoluteStrokeWidth:T,className:L="",children:R,iconNode:M,...U},H)=>ce.createElement("svg",{ref:H,...fm,width:h,height:h,stroke:m,strokeWidth:T?Number(c)*24/Number(h):c,className:tc("lucide",L),...U},[...M.map(([_,Y])=>ce.createElement(_,Y)),...Array.isArray(R)?R:[R]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(m,h)=>{const c=ce.forwardRef(({className:T,...L},R)=>ce.createElement(hm,{ref:R,iconNode:h,className:tc(`lucide-${pm(m)}`,T),...L}));return c.displayName=`${m}`,c};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ne("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=ne("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ne("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=ne("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ne("BookmarkPlus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=ne("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=ne("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ne("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=ne("ChartNoAxesCombined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=ne("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=ne("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=ne("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=ne("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=ne("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=ne("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=ne("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ne("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ne("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=ne("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ne("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=ne("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=ne("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=ne("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=ne("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=ne("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=ne("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ne("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=ne("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=ne("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ne("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=ne("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=ne("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=ne("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=ne("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=ne("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=ne("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=ne("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),_m=`# Complete Java Full Stack Developer Course

Zero to Job Ready · 28 courses

Prepare for Junior Java Developer, Java Full Stack Developer and Software Developer Fresher roles.

## Contents

1. Course syllabus and practical work
2. Real-world projects and job preparation
3. Completion checklist and estimated study time
4. Java interview questions (224)
5. Coding practice prompts (660)

## Phase 1 · Programming Fundamentals

### 1. Core Java

#### Java Introduction

**Programming concepts**
- What is programming?
- What is Java?
- Features of Java
- Java applications

**Development environment**
- JDK, JRE, JVM
- Installing JDK
- Setting up IDE (Eclipse / IntelliJ)
- First Java program
- Compilation and execution process

#### Java Fundamentals

**Language basics**
- Keywords
- Identifiers
- Variables
- Data types
- Primitive and non-primitive types
- Type casting
- Literals
- Constants

**Operators**
- Operators
- Arithmetic operators
- Relational operators
- Logical operators
- Assignment operators
- Unary operators
- Ternary operator
- Operator precedence

#### Input and Output

**Console output**
- Print statements
- System.out.print()
- System.out.println()
- System.out.printf()

**Reading input**
- Scanner class
- Taking user input
- Type conversion

#### Decision Making

**Conditional branches**
- if
- if-else
- else-if ladder
- Nested if

**Selection**
- switch
- Nested switch
- Real-world conditions

#### Loops

**Iteration**
- for loop
- while loop
- do-while loop
- Nested loops

**Loop control**
- break
- continue
- Infinite loops
- Pattern programming

#### Methods

**Definition and invocation**
- Method declaration
- Method calling
- Parameters and arguments
- Return types
- Void methods

**Method behavior**
- Method overloading
- Static methods
- Recursion
- Pass-by-value

#### Arrays

**Dimensions**
- One-dimensional arrays
- Two-dimensional arrays
- Multidimensional arrays

**Operations**
- Array traversal
- Searching
- Sorting basics
- Array manipulation

#### Strings

**String behavior**
- String creation
- String pool
- Immutability
- String methods
- String comparison

**Mutable strings**
- StringBuilder
- StringBuffer
- String manipulation problems

#### Object-Oriented Programming

**Classes and initialization**
- Classes and objects
- Constructors
- Default and parameterized constructors
- Constructor overloading
- this keyword
- static keyword

**Inheritance and dispatch**
- Inheritance
- Types of inheritance
- super keyword
- Method overriding
- Polymorphism
- Compile-time polymorphism
- Runtime polymorphism

**Contracts and visibility**
- Abstraction
- Abstract classes
- Interfaces
- Encapsulation
- Access modifiers
- Packages

#### Advanced Core Java

**Exceptions**
- Exception handling
- try, catch, finally
- throw and throws
- Custom exceptions
- Checked and unchecked exceptions

**Files and objects**
- File handling
- FileInputStream and FileOutputStream
- BufferedReader and BufferedWriter
- Serialization and deserialization
- POJO classes

**Types**
- Wrapper classes
- Autoboxing and unboxing
- Enum
- Inner classes
- Anonymous classes
- Generics

**Collections**
- Collections Framework
- List, Set, Queue, Map
- ArrayList and LinkedList
- HashSet and TreeSet
- HashMap and TreeMap
- Iterator and ListIterator
- Comparable and Comparator

**Modern Java**
- Lambda expressions
- Functional interfaces
- Stream API
- Optional
- Method references
- Date and Time API

**Concurrency and memory**
- Multithreading
- Thread lifecycle
- Synchronization
- ExecutorService
- JVM memory management
- Garbage collection

Practical work: 50+ basic Java programs, OOP-based applications, collections problems, exception-handling exercises.

## Phase 2 · Data Structures and Algorithms

### 2. DSA

#### Fundamentals

**Algorithm analysis**
- What is DSA?
- Time complexity
- Space complexity
- Big O notation
- Best, average and worst cases

#### Arrays

**Operations**
- Traversal
- Searching
- Sorting
- Reverse array

**Patterns**
- Two-pointer technique
- Sliding window
- Prefix sum
- Subarrays
- Matrix problems

#### Strings

**String problems**
- String reversal
- Palindrome
- Anagrams
- Frequency counting
- Duplicate characters
- Longest substring
- String pattern problems

#### Linked Lists

**Structure**
- Singly linked list
- Doubly linked list
- Circular linked list

**Operations**
- Insertion
- Deletion
- Reversal
- Middle element
- Cycle detection

#### Stack

**Implementation**
- Stack operations
- Array implementation
- Linked-list implementation

**Applications**
- Balanced parentheses
- Next greater element
- Monotonic stack

#### Queue

**Variants**
- Simple queue
- Circular queue
- Priority queue
- Deque
- Queue using stacks

#### Searching and Sorting

**Search**
- Linear search
- Binary search

**Sort**
- Bubble sort
- Selection sort
- Insertion sort
- Merge sort
- Quick sort

#### Trees

**Structure**
- Binary trees
- Binary search trees
- Height and depth
- Balanced trees basics

**Tree traversal**
- Tree traversal
- Inorder
- Preorder
- Postorder
- Level-order traversal

#### Advanced DSA

**Structures**
- Heap
- Hashing
- Graphs
- BFS
- DFS

**Problem solving**
- Greedy algorithms
- Backtracking
- Dynamic programming basics
- Recursion and backtracking problems

Target: Solve approximately 150–200 problems, progressing from easy to medium.

## Phase 3 · Database Development

### 3. SQL and MySQL

#### Relational databases

**Foundations**
- Database fundamentals
- DBMS and RDBMS
- Tables, rows and columns

**Schema and commands**
- SQL commands
- DDL, DML, DQL, DCL, TCL
- CREATE, ALTER, DROP, TRUNCATE
- INSERT, UPDATE, DELETE
- Primary key
- Foreign key
- Unique key
- Constraints

#### Querying data

**Selection**
- SELECT
- WHERE
- DISTINCT
- ORDER BY
- LIMIT
- AND, OR, NOT
- BETWEEN, IN, LIKE

**Aggregation**
- Aggregate functions
- GROUP BY
- HAVING

**Combining results**
- Joins (INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF)
- Subqueries
- Correlated subqueries
- UNION and UNION ALL

#### Database engineering

**Database objects**
- Views
- Indexes
- Stored procedures
- Functions
- Triggers

**Consistency**
- Transactions
- COMMIT and ROLLBACK
- ACID properties

**Design**
- Normalization
- 1NF, 2NF, 3NF
- Database design
- ER diagrams
- Query optimization

### 4. JDBC

#### Database connectivity

**Architecture**
- JDBC introduction
- JDBC architecture
- JDBC drivers
- Database connectivity
- Connection

**Statements**
- Statement
- PreparedStatement
- CallableStatement
- ResultSet

#### Persistence

**Data access**
- CRUD operations
- Batch processing
- Transactions
- SQL exception handling

**Application design**
- DAO pattern
- JDBC project structure

Practical project: Student Management System using Java, JDBC and MySQL.

## Phase 4 · Java Backend Development

### 5. Advanced Java / Web Fundamentals

#### Web fundamentals

**Networking**
- Client-server architecture
- HTTP and HTTPS
- Request and response
- HTTP methods
- Status codes

**Client technologies**
- HTML fundamentals
- CSS fundamentals
- JavaScript fundamentals for backend integration

#### Servlets

**Lifecycle**
- Servlet architecture
- Servlet lifecycle
- GenericServlet
- HttpServlet
- doGet() and doPost()

**Request processing**
- RequestDispatcher
- SendRedirect
- Session management
- Cookies
- Filters
- Listeners

#### Server-side views

**JSP**
- JSP introduction
- JSP lifecycle
- JSP directives
- JSP implicit objects
- Expression Language
- JSTL

**Application design**
- MVC architecture

### 6. Maven

#### Build configuration

**Setup**
- Build tools introduction
- Maven architecture
- Maven installation
- Maven project structure
- pom.xml

**Dependencies**
- Dependencies
- Dependency scopes
- Plugins
- Dependency management

#### Build execution

**Lifecycle**
- Maven lifecycle
- Clean, compile, test, package, install
- Creating JAR and WAR files

### 7. Git and GitHub

#### Local development

**Setup**
- Version control
- Git installation
- Repository creation
- git init
- git clone

**Change tracking**
- git status
- git add
- git commit
- git log
- git diff
- .gitignore
- README.md

#### Collaboration

**Branches**
- Branches
- Merge
- Merge conflicts
- Rebase basics

**Remote workflow**
- Remote repositories
- Push and pull
- Pull requests
- Forking
- GitHub collaboration workflow

### 8. Hibernate

#### Persistence

**Setup**
- ORM concepts
- Hibernate architecture
- Hibernate configuration
- Entity classes
- Mapping annotations

**Session workflow**
- SessionFactory
- Session
- Transaction
- CRUD operations
- HQL
- Criteria API
- Hibernate lifecycle

#### Entity mapping

**Relationships**
- Relationships
- One-to-One
- One-to-Many
- Many-to-One
- Many-to-Many

**Loading and caching**
- Lazy loading
- Eager loading
- Cascading
- First-level cache
- Second-level cache

### 9. JPA

#### Persistence model

**Foundations**
- JPA introduction
- JPA architecture
- JPA and Hibernate differences

**Entity management**
- Entity management
- Entity lifecycle
- EntityManager
- Persistence context
- Entity states
- Transactions

#### Querying and mapping

**Query languages**
- JPQL
- Native SQL queries

**Associations**
- Relationships
- Fetch types
- Cascading

### 10. Spring Framework

#### Spring Fundamentals

**Core concepts**
- Spring introduction
- Spring architecture
- IoC
- Dependency Injection

**Container**
- Spring Container
- BeanFactory
- ApplicationContext
- Spring Beans
- Bean lifecycle
- Bean scopes

#### Spring Configuration

**Configuration styles**
- XML configuration
- Java-based configuration
- Annotation-based configuration

**Annotations**
- @Component
- @Service
- @Repository
- @Controller
- @Autowired
- @Qualifier
- @Primary
- @Value
- @Bean
- @Configuration
- Component scanning

#### Advanced Spring

**Injection and environment**
- Constructor injection
- Setter injection
- Field injection
- Profiles
- Environment abstraction

**Cross-cutting concerns**
- Spring AOP
- Aspect
- Advice
- Pointcut
- Spring transaction management
- @Transactional

### 11. Spring Boot

#### Getting started

**Bootstrap**
- Spring Boot introduction
- Spring vs Spring Boot
- Spring Initializr
- Project setup
- Auto-configuration
- Starter dependencies
- Embedded servers

#### Application configuration

**Settings**
- application.properties
- application.yml
- Spring Boot annotations
- Dependency injection
- Configuration properties
- Profiles
- Custom configuration

**Operations**
- Logging
- Exception handling
- Validation
- Spring Boot Actuator
- Application lifecycle

### 12. Spring MVC

#### Request lifecycle

**MVC components**
- MVC architecture
- DispatcherServlet
- Controller
- Model
- View
- ViewResolver
- ModelAndView

#### Controllers

**Routing**
- @Controller
- @RestController
- @RequestMapping
- @GetMapping
- @PostMapping
- @PutMapping
- @DeleteMapping

**Binding**
- @PathVariable
- @RequestParam
- @RequestBody
- @ResponseBody
- Form handling
- Validation
- Global exception handling

### 13. REST API Development

#### REST foundations

**Protocol**
- REST architecture
- REST principles
- HTTP methods
- HTTP status codes
- JSON
- Request and response

**API implementation**
- CRUD APIs
- DTO pattern
- Entity and DTO mapping
- Validation
- Exception handling

#### API delivery

**Collection endpoints**
- Pagination
- Sorting
- Filtering

**Contracts and testing**
- API versioning
- API documentation
- Swagger / OpenAPI
- Postman
- CORS
- API testing

### 14. Spring Security

#### Access control

**Security model**
- Authentication
- Authorization
- Security architecture
- SecurityFilterChain

**User accounts**
- Password hashing
- BCrypt
- UserDetails
- UserDetailsService
- Role-based authorization

#### API protection

**Tokens**
- JWT
- JWT generation and validation
- Access tokens
- Refresh tokens

**Enforcement**
- Spring Security with REST APIs
- Method-level security
- CORS and CSRF

### 15. Microservices

#### Service architecture

**Decomposition**
- Monolithic architecture
- Microservices architecture
- Service decomposition

**Communication**
- REST communication
- Inter-service communication
- API Gateway
- Service discovery
- Eureka
- OpenFeign
- Load balancing

#### Service operations

**Configuration and resilience**
- Centralized configuration
- Config Server
- Circuit breaker
- Resilience4j

**Observability and delivery**
- Distributed tracing
- Logging
- Dockerized services
- Microservice security

## Phase 5 · Frontend Development

### 16. HTML5

#### Page structure

**Markup**
- HTML introduction
- Document structure
- Elements and attributes
- Headings and paragraphs
- Semantic HTML

**Content**
- Links and images
- Lists
- Tables
- Audio and video
- Iframes

#### User interaction

**Forms and accessibility**
- Forms
- Input types
- Accessibility basics

### 17. CSS3

#### Styling

**Rules**
- CSS introduction
- Inline, internal and external CSS
- Selectors
- Colors
- Backgrounds
- Typography
- Pseudo-classes
- Pseudo-elements

#### Layout

**Box model**
- Box model
- Margin and padding
- Borders
- Units
- Display
- Position

**Adaptive layouts**
- Flexbox
- Grid
- Media queries
- Responsive design

**Motion**
- Transitions
- Animations

### 18. JavaScript

#### Language foundations

**Syntax**
- JavaScript introduction
- Variables
- Data types
- Operators
- Conditions
- Loops
- Functions
- Arrow functions

**Data**
- Arrays
- Objects
- Strings
- Array methods
- Object methods

**Execution**
- Scope
- Hoisting
- Closures
- this keyword

#### Browser programming

**DOM and events**
- DOM
- DOM manipulation
- Events
- Event bubbling
- Event delegation

**Modern syntax**
- ES6+
- Destructuring
- Spread and rest
- Modules

**Async and storage**
- Promises
- Async/await
- Fetch API
- JSON
- LocalStorage
- SessionStorage
- Error handling

### 19. React.js

#### UI foundations

**Components**
- React introduction
- React environment setup
- JSX
- Components
- Functional components
- Props
- Component composition

**Interactive views**
- State
- useState
- Event handling
- Conditional rendering
- Lists and keys
- Forms
- Controlled components

#### Application development

**Hooks**
- useEffect
- useRef
- useMemo
- useCallback
- useContext
- Custom hooks
- Component lifecycle concepts

**Navigation and data**
- React Router
- Nested routes
- Protected routes
- API integration
- Loading and error states
- Context API

**Maintenance**
- Performance optimization
- React project structure

### 20. Redux Toolkit

#### State architecture

**Redux model**
- State management
- Redux fundamentals
- Store
- Actions
- Reducers
- Dispatch
- Selectors

#### Toolkit implementation

**Store setup**
- Redux Toolkit
- configureStore
- createSlice
- useSelector
- useDispatch

**Async and debugging**
- Async thunks
- API state management
- Redux DevTools

### 21. TypeScript

#### Type system

**Basic types**
- TypeScript introduction
- Type annotations
- Primitive types
- Arrays
- Tuples
- Enums
- Functions
- Objects

**Type composition**
- Interfaces
- Type aliases
- Union types
- Intersection types
- Optional properties
- Generics

#### Typed applications

**Language features**
- Classes
- Access modifiers
- Type narrowing
- Modules

**Frontend**
- React with TypeScript basics

## Phase 6 · Testing and Quality

### 22. Testing – JUnit 5 and Mockito

#### Testing foundations

**Approaches**
- Software testing fundamentals
- Manual testing basics
- Unit testing
- Integration testing

**JUnit 5**
- JUnit introduction
- Test lifecycle
- Assertions
- Test annotations
- Parameterized tests
- Exception testing

#### Testing applications

**Mockito**
- Mockito introduction
- Mock objects
- Stubbing
- Verification
- Argument matchers

**Spring tests**
- Testing service classes
- Testing controllers
- Spring Boot testing
- @SpringBootTest
- MockMvc
- @WebMvcTest
- Test coverage

## Phase 7 · DevOps and Cloud Fundamentals

### 23. Linux

#### Command line

**Environment**
- Linux introduction
- Linux file system
- Shell basics

**Files and navigation**
- pwd
- ls
- cd
- mkdir
- touch
- cp
- mv
- rm
- cat
- less
- grep
- find

#### Administration

**Permissions**
- chmod
- chown

**Operations**
- Process management
- Environment variables
- SSH
- Package management
- Log inspection

### 24. Docker

#### Container foundations

**Core concepts**
- Containerization
- Virtual machines vs containers
- Docker architecture
- Images
- Containers

**Build and operate**
- Dockerfile
- Docker commands
- Docker Compose
- Volumes
- Networks
- Environment variables
- Container logs

#### Application delivery

**Full-stack containers**
- Dockerizing Spring Boot
- Dockerizing React
- Running application with MySQL containers

### 25. AWS

#### Cloud foundations

**Infrastructure**
- Cloud computing fundamentals
- AWS global infrastructure
- IAM
- EC2
- S3
- RDS

**Networking**
- VPC basics
- Security groups
- Load balancing basics
- Auto Scaling basics

#### Cloud operations

**Deployment**
- CloudWatch
- Deploying a Spring Boot application
- Deploying a React application

### 26. CI/CD

#### Delivery fundamentals

**Workflow**
- DevOps fundamentals
- Software delivery lifecycle
- Continuous Integration
- Continuous Delivery
- Continuous Deployment

#### Pipelines

**Automation**
- Build automation
- Automated testing
- Deployment pipelines
- Environment variables

**Release process**
- Pipeline stages
- Artifact management
- Deployment strategies

### 27. Jenkins

#### Jenkins setup

**Fundamentals**
- Jenkins introduction
- Jenkins installation
- Jenkins dashboard
- Jobs
- Freestyle projects
- Pipeline projects

**Pipeline definition**
- Jenkinsfile
- Declarative pipeline

#### Automation

**Integrations**
- GitHub integration
- Maven integration
- Docker integration

**Execution**
- Build automation
- Test automation
- Deployment pipeline

### 28. SonarQube

#### Code analysis

**Quality indicators**
- Code quality fundamentals
- Static code analysis
- Code smells
- Bugs
- Vulnerabilities
- Technical debt

**Policies**
- Quality profiles
- Quality gates

#### Tool integration

**Setup and reporting**
- SonarQube installation
- Maven integration
- Jenkins integration
- Code quality reports

## Phase 8 · Real-world projects

Build projects while learning, starting with small applications during each phase.

### Project 1. Student Management System

Java, OOP, Collections, JDBC, MySQL

Add, update, delete and search students. Store student records in MySQL.

### Project 2. Employee Management System

Spring Boot, Spring MVC, JPA, MySQL, React

Employee CRUD, search and filtering, and REST API integration.

### Project 3. E-commerce Application

Spring Boot, Spring Security, JWT, React, MySQL

Registration and login, products and categories, cart and orders, admin and customer roles.

### Project 4. Microservices Application

Spring Boot, Eureka, API Gateway, OpenFeign, Docker

Multiple independent services, service communication and centralized configuration.

### Project 5. Developer Portfolio

React, JavaScript, CSS

About section, skills and projects, resume and contact links, and responsive design.

## Phase 9 · Job preparation

### Technical interview preparation

- Core Java interview questions
- OOP scenario-based questions
- Collections interview questions
- Java 8 interview questions
- Exception handling
- Multithreading
- JVM and memory
- DSA coding problems
- SQL queries
- JDBC
- Hibernate and JPA
- Spring IoC and DI
- Spring Boot
- Spring MVC
- REST API
- Spring Security and JWT
- React
- JavaScript
- Git and GitHub
- Docker and AWS basics
- Project explanation

### Practical interview skills

- Explain your project architecture.
- Explain frontend-to-backend communication.
- Explain database relationships.
- Debug errors.
- Write SQL queries.
- Build REST APIs independently.
- Use Git branches and pull requests.
- Test APIs with Postman.
- Deploy an application.

### HR preparation

- Self-introduction
- Strengths and weaknesses
- Why Java Full Stack?
- Explain your projects.
- Explain your learning journey.
- Handling technical questions you don’t know.
- Salary expectations
- Relocation and availability
- Communication practice

## Job-ready completion checklist

### Programming

- [ ] Core Java fundamentals and OOP
- [ ] Advanced Java and Collections
- [ ] 150–200 DSA problems
- [ ] SQL and JDBC

### Backend

- [ ] Hibernate and JPA
- [ ] Spring Framework and Spring Boot
- [ ] Spring MVC and REST APIs
- [ ] Spring Security and JWT
- [ ] Build and test REST APIs

### Frontend

- [ ] HTML, CSS and responsive design
- [ ] JavaScript and ES6+
- [ ] React and React Router
- [ ] Redux Toolkit and TypeScript basics

### Professional tools

- [ ] Git and GitHub
- [ ] Maven
- [ ] JUnit and Mockito
- [ ] Linux and Docker basics
- [ ] AWS and CI/CD fundamentals

### Job preparation

- [ ] Build at least 3 complete projects
- [ ] Deploy at least one full-stack project
- [ ] Create a professional GitHub profile
- [ ] Prepare resume and project explanations
- [ ] Practice technical and HR interviews

## Recommended learning order and time

| Phase | Estimated time |
|---|---|
| Core Java | 5–6 weeks |
| DSA | 4–6 weeks, alongside Java |
| SQL and JDBC | 2–3 weeks |
| Advanced Java, Maven, Git | 2–3 weeks |
| Hibernate, JPA, Spring | 5–6 weeks |
| Frontend | 5–6 weeks |
| Testing, DevOps and Cloud | 3–4 weeks |
| Projects and interview preparation | 4–6 weeks |

These are estimates. Some subjects should be learned alongside each other.

## Java interview questions

### Set 1

1. What is class?
2. What is object or instance of class?
3. What is Member variables, how it is different from local variables
4. What is static variables? explain
5. What is non-static variables or instance variables? explain
6. How to access static members? Explain
7. How to access non-static members of class? Explain
8. How to create an instance of class? Explain
9. What are the difference between static and non-static members of class
10. Give example when to use static variables and non-static variables
11. What is reference variables? How to create it?
12. What is primitive variables in java? how to declare it?
13. What is non-primitive variables in Java? how to declare it?
14. Explain how many ways member variables can be initialized?
15. explain static blocks and non-static blocks
16. What is constructors? why it is required?
17. Does every class has constructor?
18. What is default constructor?
19. What is parameterized constructor?
20. What is user defined constructor?
21. What is constructor Overloading?explain its benefit
22. Explain this keyword, what it contains and how it is useful
23. Explain this() statement, explain why it is required?
24. Does constructor has return type?
25. What does new operator used for and what it returns
26. Does java supports pass by reference? why
27. Does constructor be static?
28. Does constructor be inherited?
29. Can we delcare constructor as private?
30. What is the access of default constructor?
31. Can we override Constructor of class?
32. What is constructor calling or constructor chaining?
33. Explain super() statement, explain why it is required?
34. what is the difference between this() and super()
35. Explain super keyword, what is the use of it?
36. What is the difference between super and this keyword
37. Explaing final member variables and how to initialize?
38. Give example when to use final instance variable?
39. Explaing Has-A relationship? how to achive it?
40. Explain what you mean by static reference variable?
41. Explain what you mean by instance reference variable?
42. What is inheritance? explain its advantages
43. What are the types of inheritance? Explain
44. Why does java doesn't support multiple inheritance?
45. What is super class or base class?
46. What is sub class or derived class?
47. Which members of super class can be inherited to sub class
48. Can we inherit Constructor of super class?
49. What is the role of Constructor in inhertiance?
50. From which super class the sub class cann't inherit?
51. If super class has private constructor, can sub class inherit its members?
52. What is implicit constructor call and explicit constructor call?
53. When to go for explicit constructor call?
54. What is method overloading? Explain
55. When to go for Method overloading? give real time examples
56. Can sub class overload the methods of super class?
57. Can we overload main method?
58. What is benefit of method overloading?
59. What is method overriding? Explain,give real time examples
60. What is the benefit of method overriding?
61. Which methods of super class can be overrided and which can't be overrided?
62. What do you mean by declaring instance method as final?


### Set 2

1. What is datatype casting? Explain its types
2. What is classtype casting? Explain its types
3. What is the pre-requiste to  do class casting?
4. What is widening operation?
5. What is narrowing operation?
6. What is upcasting?
7. What is downcasting?
8. What is ClassCastException?When it occurs?
9. What is the reason for ClassCastException?
10. What is the use of instanceof operator in java?
11. When to perform downcasting?
12. Why we need class type casting?
13. What is polymorphism? Explain its types
14. What is runtime polymorphism? how to achieve it?
15. What is the uses of ploymorphism?
16. How to access general properties and how to access specialized properties?
17. what is abstract method?
18. What is abstract class?explain its members
19. Can we create instance of abstract class
20. What the subclass should do if it extends from abstract class
21. Can we define constructor in abstract class?
22. How to access the instance members of abstract class?
23. Does abstract class must have abstract method?
24. Is abstract class pure abstract body?
25. What is interface? explain its characteristics?
26. Can we create instance of interface?
27. What is implementation class?
28. What must a class should do if it implements an interface?
29. How many interface a class can implement? why
30. Does interface has constructor?
31. Can an interface extend another interface?
32. Can an interface extend from a class?
33. What is  default access in interface?
34. What is default access in class?
35. What must be the access of method in class which implements an interface?Why
36. Can we declare reference variable of interface? what we can assign?
37. What is benefit of interface ?
38. What is marker interface?
39. abstract keyword can't be combined with which keywords, why?
40. Can a class extend another class and implement interface? explain
41. What is abstraction? how to achieve it?
42. What is the benefit of abstraction?
43. What is encapsulation?
44. What are the access specifier provided in java?
45. What is the use of private member variables?
46. What is the difference between package level and protected members?
47. What is package?How to declare it?
48. What is the use of import statement?
49. What is static import statement?
50. What is java bean class? where it is used?
51. What is Singleton class? Where it is used?
52. What is inner class? What are the types of inner class
53. What are the difference between abstract class and interface?


### Set 3

1. What are the members of Object class?
2. Explain toString(), hashCode() and equals() method of Object class
3. Why we need to override toString()?
4. Why we need to override hashCode() and equals();
5. What is String in java?
6. What is immutable object?
7. What are types of creating String object?
8. Explain Constant pool and non constant pool?
9. Explain difference between StringBuilder and StringBuffer class?
10. What are classtype arrays?
11. What is an exception? Explain types of Exception
12. What is checked Exception? give examples
13. What is the use of throw keyword?explain
14. What is the use of throws keyword and how it is different from throw
15. What is Throwable class?
16. What is RuntimeException class?
17. Explain try-catch block
18. Explain finally block
19. Explain Generic handler and specific handler
20. What is the difference between Exception and Error?
21. What is printStackTrace()?
22. What is custom Exception or user defined Exception?
23. Explain Java Exception Hierarchy
24. What is the difference between checked and unchecked exception?
25. What is the difference ClassNotFoundException and NoClassDefFoundError?
26. Can we write try block without catch block?
27. What is the use of multi catch block?
28. What is a Collection? Explain its benefit
29. What are the types of Collection?
30. Explain methods of Collection interface?
31. What is List ? explain its features
32. Explain the methods of List interface.
33. What are the types of List?
34. Explain ArrayList features?
35. What is the implementation data structure of ArrayList?
36. What are the constructors present in ArrayList?
37. How many interfaces ArrayList implements?
38. How to convert ArrayList to List and ArrayList to Collection?
39. How ArrayList grows dynamically?
40. When to use ArrayList?
41. Explain LinkedList? and its implementation data structure
42. How many interfaces LinkedList implements?
43. What are the difference between ArrayList and LinkedList?
44. Explain vector and its features
45. Explain how to sort elements of ArrayList?
46. How to get Synchronized List?
47. What is the set? Explain its features?
48. What are the types of Set?
49. Explain HashSet implementation in detail
50. Explain LinkedHashSet implementation in detail
51. Explain TreeSet implementation in detail
52. List the difference between HashSet, LinkedHashSet and TreeSet
53. Which Set is SortedSet?
54. What is NavigableSet?
55. What is Queue? Explain its features
56. Explain PriorityQueue implementation in details
57. How Set maintains no duplicate explain in details
58. Why should we override hashCode() and equals()
59. What is Comparable interface?
60. What is Comparator interface?
61. Explain constructors of HashSet?
62. Explain constructors of TreeSet
63. How to convert Set to Collection?
64. How to convert Set to any list like ArrayList?
65. What is Map? Explain how object are stored in Map
66. Explain important methods of Map?
67. Explain how to use Iterator on Map?
68. Explain types of Map in details
69. What is HashMap and explain its implementation
70. What is Hashtable and explain its implementation
71. What is SortedMap, give example
72. Explain TreeMap
73. What is Iterator? how to use it?
74. What is ListIterator? how to use it?
75. Explain methods of Collections class
76. Explain why we need Comparable interface?
77. Expain difference between Comparable and Comparator interface?
78. What is a Thread?
79. Explain Thread properties
80. How to create a thread and start the thread
81. Explain thread started by JVM
82. What is the difference between start() and run()
83. Explain methods provide by the thread to use thread properties
84. What is Thread priority? what are the range and what is default priorty
85. Explain the constructors of Thread
86. What is Runnable interface?
87. How to make Runnable type object to run as a thread in JVM
88. Explain join() method of thread class?
89. What is Thread Safe? how to achieve?
90. What is object lock? when it get created?
91. Waht is class lock ? when it get created?
92. How to get reference to current running thread?
93. What is thread deadlock?
94. Explain how to overcome thread deadlock?
95. Explain what is interthread communication and how to achieve it?
96. Explain wait() and wait(time) methods? where is the implementation of it?
97. Explain notify() and notifyAll() methods?where is the implementation of it?
98. What is thread synchronization?
99. What is the difference between user thread and deamon thread?
100. How to pause execution of current thread?
101. What are the difference between wait() and sleep()?
102. What is thread deadlock? how to avoid deadlock situation
103. What are different states of in life cycle of a thread?
104. What is Object Serialization?
105. What is Object de-serialization?
106. What is transient keyword in java?
107. What is Garbage collection? explain?
108. What is the use of finalize(), in which class it is present?
109. What is Garbage Collector?


## Coding practice prompts

### 1. Core Data Structure Implementation

1. Implement a dynamic array (ArrayList)
2. Implement a singly linked list
3. Implement a doubly linked list
4. Implement a circular linked list
5. Implement a stack using an array
6. Implement a circular queue using an array
7. Implement a deque
8. Implement a HashMap from scratch
9. Implement a HashSet from scratch
10. Implement a min heap
11. Implement a max heap
12. Implement a Priority Queue with a custom Comparator
13. Implement a Binary Search Tree
14. Implement a graph using an adjacency list
15. Implement a graph using an adjacency matrix
16. Implement a Trie
17. Implement a Union-Find (DSU) class
18. Implement an LRU Cache
19. Implement an LFU Cache
20. Implement a custom Iterator
21. Sort objects using Comparable and Comparator
22. ArrayList vs LinkedList operations
23. HashMap internal working and collision handling
24. Implement a time-based key-value store
25. Implement a Bloom filter

### 2. Arrays

26. Two Sum
27. Largest element in an array
28. Second largest element
29. Check if an array is sorted
30. Reverse an array
31. Rotate an array by K
32. Move zeroes to the end
33. Remove duplicates from a sorted array
34. Remove element
35. Merge two sorted arrays
36. Merge sorted array (in place)
37. Union of two sorted arrays
38. Intersection of two arrays
39. Missing number
40. Find the duplicate number
41. Find all duplicates in an array
42. Missing and repeating number
43. Single Number
44. Single Number II
45. Single Number III
46. Majority Element
47. Majority Element II
48. Maximum Subarray (Kadane)
49. Maximum Product Subarray
50. Best Time to Buy and Sell Stock
51. Buy and Sell Stock II
52. Buy and Sell Stock III
53. Buy and Sell Stock IV
54. Product of Array Except Self
55. Trapping Rain Water
56. Container With Most Water
57. Next Permutation
58. Sort Colors (Dutch National Flag)
59. Subarray Sum Equals K
60. Longest subarray with sum K
61. Longest subarray with equal 0s and 1s
62. Count subarrays with XOR K
63. Leaders in an array
64. Rearrange array elements by sign
65. Spiral Matrix
66. Rotate Image
67. Set Matrix Zeroes
68. Pascal’s Triangle
69. Search a 2D Matrix
70. Merge Intervals
71. Insert Interval
72. Non-overlapping Intervals
73. 3Sum
74. 3Sum Closest
75. 4Sum
76. Longest Consecutive Sequence
77. Count Inversions
78. Reverse Pairs
79. Maximum Sum Circular Subarray
80. First Missing Positive
81. Jump Game
82. Jump Game II
83. Equilibrium index
84. Game of Life
85. Diagonal Traverse
86. Minimum number of platforms
87. Find Peak Element
88. Kth Missing Positive Number
89. Minimum Size Subarray Sum
90. Search in a row-wise and column-wise sorted matrix

### 3. Strings

91. Reverse a string
92. Valid Palindrome
93. Valid Palindrome II
94. Valid Anagram
95. Group Anagrams
96. Longest Common Prefix
97. Longest Palindromic Substring
98. Count Palindromic Substrings
99. Longest Substring Without Repeating Characters
100. Longest Repeating Character Replacement
101. Minimum Window Substring
102. Permutation in String
103. Find All Anagrams in a String
104. String to Integer (atoi)
105. Implement strStr()
106. KMP algorithm
107. Rabin-Karp algorithm
108. Z algorithm
109. Isomorphic Strings
110. Roman to Integer
111. Integer to Roman
112. Count and Say
113. Reverse Words in a String
114. Rotate String
115. Check if a string is a rotation of another
116. Valid Parentheses
117. Generate Parentheses
118. Longest Valid Parentheses
119. Minimum Add to Make Parentheses Valid
120. Remove Invalid Parentheses
121. Zigzag Conversion
122. Compare Version Numbers
123. Multiply Strings
124. Add Strings
125. Add Binary
126. Decode String
127. Encode and Decode Strings
128. Remove All Adjacent Duplicates
129. Remove K Digits
130. Remove Duplicate Letters
131. Is Subsequence
132. Count vowels and consonants
133. First Unique Character
134. Reverse Vowels of a String
135. Sort Characters by Frequency
136. Ransom Note
137. Word Pattern
138. Shortest Palindrome
139. Text Justification
140. String Compression

### 4. Math, Number Theory and Bit Manipulation

141. Check prime number
142. Sieve of Eratosthenes
143. Count Primes
144. Prime factorization
145. GCD (HCF)
146. LCM
147. Factorial of a large number
148. Nth Fibonacci number
149. Armstrong number
150. Palindrome Number
151. Reverse Integer
152. Pow(x, n)
153. Sqrt(x)
154. Valid Perfect Square
155. Happy Number
156. Ugly Number
157. Ugly Number II
158. Excel Sheet Column Number
159. Factorial Trailing Zeroes
160. Count digits in a number
161. Modular exponentiation
162. Modular inverse
163. nCr mod p
164. Divide Two Integers
165. Fraction to Recurring Decimal
166. Count set bits
167. Power of Two
168. Power of Four
169. Swap two numbers without a temp variable
170. Reverse Bits
171. Number of 1 Bits
172. Hamming Distance
173. Total Hamming Distance
174. Counting Bits
175. Generate subsets using a bitmask
176. Maximum XOR of Two Numbers
177. Bitwise AND of Numbers Range
178. Gray Code
179. Sum of Two Integers (without +)
180. Decimal to binary conversion
181. Binary to decimal conversion
182. Minimum Bit Flips to Convert Number
183. Check if the i-th bit is set
184. Find the position of the rightmost set bit
185. Divisible by 3 check using bits

### 5. Recursion and Backtracking

186. Print 1 to N using recursion
187. Sum of digits using recursion
188. Tower of Hanoi
189. Subsets
190. Subsets II
191. Permutations
192. Permutations II
193. Combinations
194. Combination Sum
195. Combination Sum II
196. Combination Sum III
197. Letter Combinations of a Phone Number
198. N-Queens
199. N-Queens II
200. Sudoku Solver
201. Word Search
202. Word Search II
203. Rat in a Maze
204. Palindrome Partitioning
205. Restore IP Addresses
206. Generate binary strings with no consecutive 1s
207. Partition to K Equal Sum Subsets
208. Knight’s Tour
209. M-Coloring problem
210. Hamiltonian Path
211. Expression Add Operators
212. Beautiful Arrangement
213. Matchsticks to Square
214. Print all subsequences
215. Count subsequences with sum K
216. Josephus problem
217. Flood Fill
218. Binary Watch
219. Reverse a string using recursion
220. Palindrome check using recursion
221. Fibonacci with memoization
222. Permutation Sequence (Kth permutation)
223. Target Sum
224. Generate all binary numbers of length N
225. Letter Case Permutation

### 6. Searching and Sorting

226. Linear Search
227. Binary Search
228. Lower Bound
229. Upper Bound
230. Find First and Last Position of Element
231. Count occurrences in a sorted array
232. Search in Rotated Sorted Array
233. Search in Rotated Sorted Array II
234. Find Minimum in Rotated Sorted Array
235. Number of times an array is rotated
236. Single Element in a Sorted Array
237. Find Peak Element II
238. Square root using binary search
239. Nth root of a number
240. Koko Eating Bananas
241. Capacity to Ship Packages
242. Allocate Books
243. Painter’s Partition
244. Aggressive Cows
245. Split Array Largest Sum
246. Median of Two Sorted Arrays
247. Kth element of two sorted arrays
248. Minimum Days to Make M Bouquets
249. Smallest Divisor Given a Threshold
250. Search Insert Position
251. Bubble Sort
252. Selection Sort
253. Insertion Sort
254. Merge Sort
255. Quick Sort
256. Heap Sort
257. Counting Sort
258. Radix Sort
259. Bucket Sort
260. Shell Sort
261. Sort Array by Increasing Frequency
262. Largest Number
263. Sort with a custom Comparator
264. Stable vs unstable sorting
265. Sort a nearly sorted array

### 7. Two Pointers and Sliding Window

266. Two Sum II (sorted array)
267. Pair with a given difference
268. Remove Duplicates from Sorted Array II
269. Squares of a Sorted Array
270. Boats to Save People
271. Max Consecutive Ones
272. Max Consecutive Ones III
273. Fruit Into Baskets
274. Longest Substring with At Most K Distinct Characters
275. Subarrays with K Different Integers
276. Count Number of Nice Subarrays
277. Binary Subarrays With Sum
278. Sliding Window Maximum
279. Sliding Window Median
280. Maximum sum subarray of size K
281. First negative integer in every window of size K
282. Count occurrences of anagrams
283. Minimum Window Subsequence
284. Maximum Points You Can Obtain from Cards
285. Number of Substrings Containing All Three Characters
286. Subarray Product Less Than K
287. Minimum Swaps to Group All 1s Together
288. Find K Closest Elements
289. Valid Triangle Number
290. Partition Labels
291. Reverse String II
292. Shortest Unsorted Continuous Subarray
293. Longest Mountain in Array
294. Get Equal Substrings Within Budget
295. Longest Subarray of 1s After Deleting One Element

### 8. Hashing

296. Count frequency of elements
297. Top K Frequent Elements
298. Contains Duplicate
299. Contains Duplicate II
300. Contains Duplicate III
301. Intersection of Two Arrays II
302. Subarray Sums Divisible by K
303. Continuous Subarray Sum
304. 4Sum II
305. Count pairs with a given sum
306. Pairs with zero sum
307. Check if an array is a subset of another
308. Brick Wall
309. Insert Delete GetRandom O(1)
310. Design HashMap
311. Design HashSet
312. Valid Sudoku
313. Group Shifted Strings
314. Find Duplicate File in System
315. Minimum Index Sum of Two Lists
316. Custom Sort String
317. Number of Boomerangs
318. Max Points on a Line
319. Longest Harmonious Subsequence
320. Find pairs with sum K in two arrays
321. Distinct elements in every window of size K
322. Longest subarray with sum divisible by K
323. Check if two arrays are equal
324. Four elements that sum to a given value
325. Subarray with given XOR

### 9. Linked List

326. Reverse Linked List
327. Reverse Linked List II
328. Reverse Nodes in K-Group
329. Middle of the Linked List
330. Linked List Cycle
331. Linked List Cycle II (find start)
332. Length of the cycle
333. Palindrome Linked List
334. Merge Two Sorted Lists
335. Merge K Sorted Lists
336. Remove Nth Node From End
337. Delete Node in a Linked List
338. Remove Duplicates from Sorted List
339. Remove Duplicates from Sorted List II
340. Remove Linked List Elements
341. Intersection of Two Linked Lists
342. Add Two Numbers
343. Add Two Numbers II
344. Add 1 to a number represented as a linked list
345. Odd Even Linked List
346. Rotate List
347. Swap Nodes in Pairs
348. Sort List
349. Insertion Sort List
350. Partition List
351. Copy List with Random Pointer
352. Flatten a Multilevel Doubly Linked List
353. Flatten a linked list (child pointers)
354. Reorder List
355. Delete the Middle Node
356. Segregate even and odd nodes
357. Find pairs with a given sum in a sorted DLL
358. Remove duplicates from a sorted DLL
359. Delete all occurrences of a key in a DLL
360. Reverse a doubly linked list
361. Convert Binary Tree to DLL
362. Convert Sorted List to BST
363. Split Linked List in Parts
364. Linked List Components
365. Next Greater Node in Linked List

### 10. Stack and Queue

366. Implement Stack using Queues
367. Implement Queue using Stacks
368. Min Stack
369. Max Stack
370. Next Greater Element I
371. Next Greater Element II
372. Next Smaller Element
373. Previous Smaller Element
374. Daily Temperatures
375. Online Stock Span
376. Largest Rectangle in Histogram
377. Maximal Rectangle
378. Sum of Subarray Minimums
379. Sum of Subarray Ranges
380. Asteroid Collision
381. Evaluate Reverse Polish Notation
382. Infix to Postfix
383. Infix to Prefix
384. Postfix to Infix
385. Basic Calculator
386. Basic Calculator II
387. Sort a stack using recursion
388. Reverse a stack
389. Delete the middle element of a stack
390. Simplify Path
391. Find the Celebrity
392. Trapping Rain Water using a stack
393. Design Circular Queue
394. Design Circular Deque
395. Sliding Window Maximum using a deque
396. Number of Recent Calls
397. First non-repeating character in a stream
398. Rotting Oranges
399. Generate binary numbers from 1 to N using a queue
400. Reverse the first K elements of a queue
401. Interleave the first and second half of a queue
402. Task Scheduler
403. Gas Station
404. Design Hit Counter
405. Implement N stacks in one array

### 11. Trees and BST

406. Inorder Traversal (recursive)
407. Preorder Traversal
408. Postorder Traversal
409. Iterative Inorder
410. Iterative Preorder
411. Iterative Postorder
412. Morris Traversal
413. Level Order Traversal
414. Zigzag Level Order Traversal
415. Right Side View
416. Left Side View
417. Top View
418. Bottom View
419. Vertical Order Traversal
420. Boundary Traversal
421. Maximum Depth
422. Minimum Depth
423. Diameter of Binary Tree
424. Balanced Binary Tree
425. Same Tree
426. Symmetric Tree
427. Invert Binary Tree
428. Lowest Common Ancestor of a Binary Tree
429. Lowest Common Ancestor of a BST
430. Path Sum
431. Path Sum II
432. Path Sum III
433. Binary Tree Maximum Path Sum
434. Count Complete Tree Nodes
435. Children Sum Property
436. Binary Tree Paths
437. Construct Tree from Preorder and Inorder
438. Construct Tree from Inorder and Postorder
439. Serialize and Deserialize Binary Tree
440. Flatten Binary Tree to Linked List
441. Subtree of Another Tree
442. Check if two trees are mirrors
443. All Nodes Distance K in Binary Tree
444. Minimum time to burn a binary tree
445. Maximum Width of Binary Tree
446. Validate BST
447. Search in a BST
448. Insert into a BST
449. Delete Node in a BST
450. Kth Smallest Element in a BST
451. Kth Largest Element in a BST
452. Inorder Successor in BST
453. Inorder Predecessor in BST
454. Convert Sorted Array to BST
455. Two Sum IV (BST)
456. Recover Binary Search Tree
457. BST Iterator
458. Largest BST in a Binary Tree
459. Floor and Ceil in BST
460. Trim a BST
461. Range Sum of BST
462. Count of Smaller Numbers After Self
463. Cousins in Binary Tree
464. Sum Root to Leaf Numbers
465. Convert BST to Greater Tree

### 12. Heap and Priority Queue

466. Kth Largest Element in an Array
467. Kth Smallest Element in an Array
468. Kth Largest Element in a Stream
469. Top K Frequent Words
470. K Closest Points to Origin
471. Merge K Sorted Arrays
472. Find Median from Data Stream
473. Sort a K-sorted array
474. Reorganize String
475. Connect Ropes with minimum cost
476. Meeting Rooms II
477. Last Stone Weight
478. Smallest Range Covering Elements from K Lists
479. Super Ugly Number
480. Minimum Cost to Hire K Workers
481. IPO
482. Furthest Building You Can Reach
483. Maximum Performance of a Team
484. Kth Smallest Element in a Sorted Matrix
485. Find K Pairs with Smallest Sums
486. Rearrange String K Distance Apart
487. Maximum Sum Combination
488. Car Pooling
489. Check if a binary tree is a heap
490. Convert a min heap to a max heap

### 13. Graphs

491. BFS traversal
492. DFS traversal
493. Number of Provinces
494. Number of Islands
495. Max Area of Island
496. Surrounded Regions
497. 01 Matrix
498. Word Ladder
499. Word Ladder II
500. Clone Graph
501. Course Schedule
502. Course Schedule II
503. Topological Sort (DFS)
504. Kahn’s Algorithm (BFS)
505. Alien Dictionary
506. Detect cycle in an undirected graph
507. Detect cycle in a directed graph
508. Is Graph Bipartite
509. Shortest path in an unweighted graph
510. Dijkstra’s Algorithm
511. Bellman-Ford Algorithm
512. Floyd-Warshall Algorithm
513. Network Delay Time
514. Cheapest Flights Within K Stops
515. Path With Minimum Effort
516. Swim in Rising Water
517. Prim’s MST
518. Kruskal’s MST
519. Number of Operations to Make Network Connected
520. Accounts Merge
521. Redundant Connection
522. Number of Islands II
523. Most Stones Removed
524. Kosaraju’s Algorithm (SCC)
525. Tarjan’s Bridges
526. Articulation Points
527. Reconstruct Itinerary
528. Shortest Path in Binary Matrix
529. Minimum Multiplications to Reach End
530. Number of Ways to Arrive at Destination
531. Find Eventual Safe States
532. Pacific Atlantic Water Flow
533. Minimum Height Trees
534. Evaluate Division
535. Snakes and Ladders
536. Open the Lock
537. Count Sub Islands
538. Making A Large Island
539. Critical Connections in a Network
540. Find the City With the Smallest Number of Neighbors
541. Shortest Bridge

### 14. Dynamic Programming

542. Climbing Stairs
543. House Robber
544. House Robber II
545. Frog Jump
546. Min Cost Climbing Stairs
547. Ninja Training
548. Unique Paths
549. Unique Paths II
550. Minimum Path Sum
551. Triangle
552. Minimum Falling Path Sum
553. Cherry Pickup
554. Subset Sum
555. Partition Equal Subset Sum
556. Minimum Subset Sum Difference
557. Count Subsets with Sum K
558. 0/1 Knapsack
559. Unbounded Knapsack
560. Rod Cutting
561. Coin Change
562. Coin Change II
563. Longest Common Subsequence
564. Longest Common Substring
565. Longest Palindromic Subsequence
566. Minimum Insertions to Make a String Palindrome
567. Shortest Common Supersequence
568. Edit Distance
569. Distinct Subsequences
570. Wildcard Matching
571. Regular Expression Matching
572. Longest Increasing Subsequence
573. LIS in O(n log n)
574. Print the LIS
575. Largest Divisible Subset
576. Longest Bitonic Subsequence
577. Number of Longest Increasing Subsequences
578. Russian Doll Envelopes
579. Matrix Chain Multiplication
580. Burst Balloons
581. Palindrome Partitioning II
582. Partition Array for Maximum Sum
583. Maximal Square
584. Count Square Submatrices with All Ones
585. Buy and Sell Stock with Cooldown
586. Buy and Sell Stock with Transaction Fee
587. Word Break
588. Word Break II
589. Decode Ways
590. Interleaving String
591. Egg Dropping
592. Perfect Squares
593. Number of Dice Rolls With Target Sum
594. Minimum Cost For Tickets
595. Stone Game
596. Predict the Winner
597. Longest String Chain
598. Maximum Length of Pair Chain
599. Travelling Salesman (bitmask DP)
600. Digit DP (count numbers with a digit constraint)
601. Longest Palindromic Substring (DP approach)
602. Maximum Sum Increasing Subsequence

### 15. Greedy

603. Activity Selection
604. N Meetings in One Room
605. Fractional Knapsack
606. Job Sequencing with Deadlines
607. Assign Cookies
608. Lemonade Change
609. Candy
610. Minimum coins (greedy)
611. Huffman Coding
612. Shortest Job First scheduling
613. Maximum Units on a Truck
614. Minimum Number of Arrows to Burst Balloons
615. Valid Parenthesis String
616. Queue Reconstruction by Height
617. Two City Scheduling
618. Wiggle Subsequence
619. Split Array into Consecutive Subsequences
620. Minimum Swaps to Make Brackets Balanced
621. Reduce Array Size to Half
622. Hand of Straights
623. Meeting Rooms
624. Merge Triplets to Form Target Triplet
625. Maximize Sum After K Negations
626. Minimum Cost to Connect Sticks
627. Maximum Profit in Job Scheduling

### 16. Trie, DSU, Segment Tree and Advanced

628. Design Add and Search Words
629. Longest Word in Dictionary
630. Maximum XOR using a Trie
631. Replace Words
632. Search Suggestions System
633. Count distinct substrings using a Trie
634. Palindrome Pairs
635. Stream of Characters
636. DSU with path compression and union by rank
637. Satisfiability of Equality Equations
638. Smallest String With Swaps
639. Segment Tree (build, query, update)
640. Range Sum Query - Mutable
641. Sparse Table (range minimum query)
642. Fenwick Tree (BIT)
643. Count of Range Sum
644. Lazy propagation in a Segment Tree
645. The Skyline Problem
646. Sqrt Decomposition
647. Binary Lifting for LCA
648. AVL Tree (insertion and rotations)
649. Red-Black Tree basics
650. Skip List

### 17. System-Style Design Problems

651. Design Twitter
652. Design Browser History
653. Design Underground System
654. Design Parking Lot
655. Design Tic-Tac-Toe
656. Design Snake Game
657. Design File System
658. Design Leaderboard
659. Design a Rate Limiter
660. Design Autocomplete System
`,Ur=[];let Or,ut,el,Wr;for(const m of _m.split(/\r?\n/)){const h=m.trim();if(!h)continue;if(h.startsWith("## ")){Or=h.slice(3),ut=null,el=Wr="";continue}if(!Or||Or==="Contents")continue;if(h.startsWith("### ")||!ut){const T=h.startsWith("### ")?h.slice(4):Or;if(ut={id:"forma-course-"+Ur.length,name:T,group:Or,color:"#eb5667",steps:[]},Ur.push(ut),el=Wr="",h.startsWith("### "))continue}if(h.startsWith("#### ")){el=h.slice(5),Wr="";continue}if(/^\*\*.*\*\*$/.test(h)){Wr=h.slice(2,-2);continue}if(h.startsWith("| Phase")||h.startsWith("|---"))continue;const c=h.startsWith("|")?h.split("|").slice(1,-1).map(T=>T.trim()).join(" · "):h.replace(/^- (?:\[ \] )?/,"");ut.steps.push({id:ut.id+"-step-"+ut.steps.length,subjectId:ut.id,title:c,phase:el,subtopic:Wr,priority:"Normal",status:"pending"})}function Zi(m){if(m.curriculumVersion===1)return m;const h=Ur.map(({steps:c,...T})=>T);return{...m,curriculumVersion:1,subjects:[...m.subjects,...h],topics:[...m.topics,...Ur.flatMap(c=>c.steps)]}}function Om({data:m,onOpen:h,search:c}){const[T,L]=ce.useState(""),R=[...new Set(Ur.map(U=>U.group))],M=c.trim().toLowerCase();return l.createElement(l.Fragment,null,l.createElement("div",{className:"catalog-tools"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"JAVA FULL STACK"),l.createElement("h2",null,"Course collection"),l.createElement("p",null,"28 courses · 224 interview questions · 660 coding prompts")),l.createElement("label",null,"Browse collection",l.createElement("select",{value:T,onChange:U=>L(U.target.value)},l.createElement("option",{value:""},"All sections"),R.map(U=>l.createElement("option",{key:U},U))))),R.filter(U=>!T||U===T).map(U=>{const H=m.subjects.filter(_=>_.group===U).map(_=>({c:_,steps:m.topics.filter(Y=>Y.subjectId===_.id)})).filter(({c:_,steps:Y})=>!M||[_.name,U,...Y.map(x=>x.title+" "+x.subtopic+" "+x.phase)].join(" ").toLowerCase().includes(M));return H.length>0&&l.createElement("section",{key:U},l.createElement("h2",{className:"catalog-heading"},U),l.createElement("div",{className:"catalog-grid"},H.map(({c:_,steps:Y})=>l.createElement("button",{className:"course-card",key:_.id,onClick:()=>h(_.id)},l.createElement(Gt,{size:19}),l.createElement("strong",null,_.name),l.createElement("small",null,Y.filter(x=>x.status==="completed").length," / ",Y.length," completed"),l.createElement($t,{size:16})))))}))}const eo=[["Iris","#5946b2"],["Indigo","#40337d"],["Violet","#7660bd"],["Lavender","#8878b9"],["Plum","#70528e"],["Lilac","#7867ad"]];function Wm(m){const h=[];let c="",T=!1;for(const L of m.split(/\r?\n/)){const R=L.trim();if(!R)continue;const M=R.match(/^#{1,6}\s+(.+)$/);if(M){if(T)throw new Error(`Add a topic under “${c}”.`);c=M[1].trim(),T=!0}else{const U=R.replace(/^(?:[-*•]|\d+[.)])\s+/,"").trim();h.push({title:U,phase:c,subtopic:"",priority:"Normal",status:"pending"}),T=!1}}if(T)throw new Error(`Add a topic under “${c}”.`);return h}function Bm({roadmap:m,subjects:h,onClose:c,onSave:T}){const[L,R]=ce.useState((m==null?void 0:m.name)||""),[M,U]=ce.useState((m==null?void 0:m.color)||eo[0][1]),[H,_]=ce.useState(""),[Y,x]=ce.useState(""),O=ce.useRef(null);ce.useEffect(()=>{const E=O.current;return E.showModal(),()=>E.close()},[]);function G(E){E.preventDefault();const F=L.trim();if(!F)return x("Give your roadmap a name.");if(h.some(g=>g.id!==(m==null?void 0:m.id)&&g.name.trim().toLowerCase()===F.toLowerCase()))return x("A roadmap with that name already exists.");try{const g=Wm(H);T({name:F,color:M},g)}catch(g){x(g.message)}}return l.createElement("dialog",{ref:O,className:"roadmap-dialog","aria-labelledby":"roadmap-form-title",onCancel:E=>{E.preventDefault(),c()},onClick:E=>E.target===E.currentTarget&&c()},l.createElement("form",{className:"modal roadmap-form",onSubmit:G},l.createElement("div",{className:"modal-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"LEARNING ROADMAP"),l.createElement("h2",{id:"roadmap-form-title"},m?"Edit roadmap":"New roadmap")),l.createElement("button",{type:"button",className:"icon-btn","aria-label":"Close roadmap form",onClick:c},l.createElement(ao,{size:18}))),l.createElement("label",{className:"field"},l.createElement("span",null,"Roadmap name"),l.createElement("input",{autoFocus:!0,required:!0,placeholder:"e.g. Java Full Stack or Photography",value:L,onChange:E=>{R(E.target.value),x("")}})),l.createElement("fieldset",{className:"roadmap-colors"},l.createElement("legend",null,"Accent color"),eo.map(([E,F])=>l.createElement("label",{key:F,className:"color-choice",style:{"--swatch":F}},l.createElement("input",{type:"radio",name:"roadmap-accent","aria-label":E,checked:M===F,onChange:()=>U(F)}),M===F&&l.createElement(bn,{size:13,"aria-hidden":"true"})))),l.createElement("label",{className:"field"},l.createElement("span",null,m?"Append topics (optional)":"Topics (optional)"),l.createElement("textarea",{rows:"6",value:H,"aria-describedby":"outline-help",placeholder:`# Foundations
Variables and types
Control flow
# Practice
Build a small project`,onChange:E=>{_(E.target.value),x("")}})),l.createElement("p",{className:"roadmap-help",id:"outline-help"},"Paste one topic per line. Use ",l.createElement("code",null,"# Phase name")," to group topics, or leave this blank and add them later."),Y&&l.createElement("p",{role:"alert",className:"roadmap-error"},Y),l.createElement("div",{className:"modal-actions"},l.createElement("button",{type:"button",className:"btn secondary",onClick:c},"Cancel"),l.createElement("button",{type:"submit",className:"btn primary"},m?"Save changes":"Create roadmap"))))}function Um({subjects:m,topics:h,activeId:c,onSelect:T,onCreate:L,onEditRoadmap:R,onAddTopic:M,onEditTopic:U,onMove:H,onPlan:_}){const Y=m.find(E=>E.id===c);if(!Y)return l.createElement("section",{className:"panel empty-large"},l.createElement("div",{className:"empty-art"},l.createElement(rl,null)),l.createElement("h3",null,"Create your first roadmap"),l.createElement("p",null,"Give your learning plan a name, then add the topics you want to study."),l.createElement("button",{className:"btn primary",onClick:L},l.createElement(Ye,{size:16})," New roadmap"));const x=h.filter(E=>E.subjectId===Y.id),O=x.filter(E=>E.status==="completed").length,G=x.length?Math.round(100*O/x.length):0;return l.createElement("div",{className:"roadmap-workspace",style:{"--path-color":eo.some(([,E])=>E===Y.color)?Y.color:"#5946b2"}},l.createElement("section",{className:"panel roadmap-summary"},l.createElement("div",{className:"roadmap-picker"},l.createElement("label",{htmlFor:"roadmap-select",className:"eyebrow"},"YOUR ROADMAPS · ",m.length),l.createElement("select",{id:"roadmap-select","aria-label":"Choose roadmap",value:Y.id,onChange:E=>T(E.target.value)},m.map(E=>l.createElement("option",{key:E.id,value:E.id},E.name)))),l.createElement("div",{className:"roadmap-summary-title"},l.createElement("div",{className:"roadmap-title"},l.createElement("span",{className:"roadmap-symbol"},l.createElement(rl,{size:22})),l.createElement("h2",null,Y.name)),l.createElement("button",{className:"btn secondary",onClick:R},l.createElement(ro,{size:14})," Edit roadmap")),l.createElement("div",{className:"roadmap-progress"},l.createElement("span",null,O," of ",x.length," topics completed"),l.createElement("strong",null,G,"%")),l.createElement("progress",{"aria-label":"Roadmap completion",max:"100",value:G})),l.createElement("section",{className:"panel roadmap-steps"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"STUDY ORDER"),l.createElement("h2",null,"Learning steps")),l.createElement("button",{className:"btn secondary",onClick:M},l.createElement(Ye,{size:15})," Add topic")),!x.length&&l.createElement("div",{className:"empty-state"},l.createElement("div",{className:"empty-art"},l.createElement(Tm,{size:24})),l.createElement("b",null,"No topics yet"),l.createElement("p",null,"Add your first topic above, or use Edit roadmap to paste a whole outline.")),l.createElement("ol",{className:"roadmap-step-list"},x.map((E,F)=>{var g,Z;return l.createElement("li",{key:E.id},(E.phase||((g=x[F-1])==null?void 0:g.phase))&&E.phase!==((Z=x[F-1])==null?void 0:Z.phase)&&l.createElement("h3",{className:"roadmap-phase"},E.phase||"Other topics"),l.createElement("div",{className:"roadmap-step"},l.createElement("span",{className:"roadmap-number "+E.status,"aria-label":"Step "+(F+1)},F+1),l.createElement("button",{className:"roadmap-step-name",title:"Edit topic and progress",onClick:()=>U(E)},l.createElement("b",null,E.title),E.subtopic&&l.createElement("small",null,E.subtopic)),l.createElement("button",{className:"status roadmap-status "+E.status,"aria-label":"Edit status for "+E.title,onClick:()=>U(E)},E.status==="completed"?"Completed":E.status==="started"?"In progress":"Pending"),l.createElement("div",{className:"roadmap-step-tools"},l.createElement("button",{className:"icon-btn",title:"Move up","aria-label":"Move "+E.title+" up",disabled:F===0,onClick:()=>H(E,-1)},l.createElement(gm,{size:15})),l.createElement("button",{className:"icon-btn",title:"Move down","aria-label":"Move "+E.title+" down",disabled:F===x.length-1,onClick:()=>H(E,1)},l.createElement(ym,{size:15})),l.createElement("button",{className:"icon-btn",title:"Plan study","aria-label":"Plan study for "+E.title,onClick:()=>_(E)},l.createElement(Em,{size:16})))))}))))}const sc="forma-learning-data-v1",cn=()=>new Date().toISOString().slice(0,10),zn=()=>Math.random().toString(36).slice(2,10),no={subjects:[{id:"java",name:"Java",color:"#5577d8",icon:"☕"},{id:"react",name:"React",color:"#42a6a0",icon:"⚛️"},{id:"sql",name:"SQL",color:"#bd8b52",icon:"▤"}],topics:[],studies:[],tasks:[],notes:[],resources:[],revisions:[],sessions:[],goals:{dailyHours:3},theme:"light"};function Hm(){try{return Zi({...no,...JSON.parse(localStorage.getItem(sc)||"{}")})}catch{return Zi(no)}}const Yt=m=>new Date(m+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),ll=m=>m==="completed"?"Completed":m==="started"?"In progress":"Pending";function Vm(){const[m,h]=ce.useState(Hm),[c,T]=ce.useState("Overview"),[L,R]=ce.useState(new Date),[M,U]=ce.useState("Month"),[H,_]=ce.useState(cn()),[Y,x]=ce.useState(""),[O,G]=ce.useState(null),[E,F]=ce.useState(""),[g,Z]=ce.useState(!1),[J,ie]=ce.useState({running:!1,startedAt:null,elapsed:0,subject:"",topic:""}),[Ee,an]=ce.useState(0),[Le,fe]=ce.useState("");ce.useEffect(()=>{localStorage.setItem(sc,JSON.stringify(m))},[m]),ce.useEffect(()=>{if(J.running){const S=setInterval(()=>an(b=>b+1),1e3);return()=>clearInterval(S)}},[J.running]),ce.useEffect(()=>{if(Le){const S=setTimeout(()=>fe(""),2500);return()=>clearTimeout(S)}},[Le]);const oe=(S,b)=>h($=>({...$,[S]:typeof b=="function"?b($[S]):b})),Mn=[["Overview",Lm],["Course Library",tl],["Calendar",nl],["Learning Roadmap",rl],["Subjects & Topics",Gt],["Revision Center",Br],["Study Sessions",oc],["Notes",lc],["Tasks & Goals",rc],["Resources",tl],["Analytics",km]],Je=S=>{var b;return((b=m.subjects.find($=>$.id===S))==null?void 0:b.name)||"Unassigned"},Ae=m.subjects.find(S=>S.id===m.activeRoadmapId)||m.subjects.find(S=>S.id==="forma-course-0")||m.subjects[0],ze=(S,b=null)=>{G(b),x(S)},be=()=>ze("study",c==="Learning Roadmap"?{subjectId:Ae==null?void 0:Ae.id}:null),Ke=()=>ze("topic",c==="Learning Roadmap"?{subjectId:Ae==null?void 0:Ae.id}:null);function dn(S,b){const $=(O==null?void 0:O.id)||zn(),Te=b.map(Ce=>({...Ce,id:zn(),subjectId:$}));h(Ce=>({...Ce,subjects:O!=null&&O.id?Ce.subjects.map(vn=>vn.id===$?{...vn,...S}:vn):[...Ce.subjects,{id:$,...S}],topics:[...Ce.topics,...Te],activeRoadmapId:$})),x(""),fe(O!=null&&O.id?"Roadmap updated":"Roadmap created")}function Ue(S,b){oe("topics",$=>{const Te=$.filter(Ln=>Ln.subjectId===S.subjectId),Ce=Te.findIndex(Ln=>Ln.id===S.id),vn=Te[Ce+b];if(Ce<0||!vn)return $;const er=Te[Ce];return $.map(Ln=>Ln.id===er.id?vn:Ln.id===vn.id?er:Ln)})}const de=(S,b)=>{G({...S,_type:b}),x(b)},I=S=>{O!=null&&O.id?oe("studies",b=>b.map($=>$.id===O.id?{...$,...S}:$)):oe("studies",b=>[...b,{id:zn(),...S}]),S.revision&&!m.revisions.some(b=>b.topic===S.topic&&b.subjectId===S.subjectId&&b.status!=="done")&&oe("revisions",b=>[...b,{id:zn(),topic:S.topic,subjectId:S.subjectId,due:S.date,status:"due",count:0}]),x(""),fe("Study plan saved")},V=(S,b)=>{oe(S,$=>$.filter(Te=>Te.id!==b)),x(""),fe("Item deleted")};function A(S){if(O!=null&&O.id)oe("topics",b=>b.map($=>$.id===O.id?{...$,...S}:$));else{const b={...S,id:zn()};oe("topics",$=>[...$,b])}x(""),fe(O!=null&&O.id?"Topic updated":"Topic added")}const p=S=>{oe("tasks",b=>[...b,{id:zn(),...S}]),x(""),fe("Task added")},k=S=>{O!=null&&O.id?oe("notes",b=>b.map($=>$.id===O.id?{...$,...S}:$)):oe("notes",b=>[...b,{id:zn(),...S}]),x(""),fe("Note saved")},X=(S,b)=>{oe("revisions",Te=>Te.map(Ce=>Ce.id===S.id?{...Ce,status:"done",lastReviewed:cn(),level:b,count:(Ce.count||0)+1}:Ce));const $=b==="Easy"?7:b==="Difficult"?1:3;oe("revisions",Te=>[...Te,{...S,id:zn(),status:"due",due:new Date(Date.now()+$*864e5).toISOString().slice(0,10),count:(S.count||0)+1}]),fe("Revision completed · next review scheduled")},ee=()=>{J.running?ie(S=>({...S,running:!1,elapsed:S.elapsed+(Date.now()-S.startedAt),startedAt:null})):ie(S=>({...S,running:!0,startedAt:Date.now()}))},re=()=>{const S=J.elapsed+(J.running?Date.now()-J.startedAt:0);S>0&&oe("sessions",b=>{var $;return[...b,{id:zn(),date:cn(),subjectId:J.subject||(($=m.subjects[0])==null?void 0:$.id),topic:J.topic||"Focus session",minutes:Math.max(1,Math.round(S/6e4))}]}),ie({running:!1,startedAt:null,elapsed:0,subject:"",topic:""}),fe("Study session saved")},ae=J.elapsed+(J.running?Date.now()-J.startedAt:0),pe=new Date(ae).toISOString().slice(11,19),se=m.sessions.reduce((S,b)=>S+b.minutes,0),he=m.studies.filter(S=>S.date===cn()),Oe=m.revisions.filter(S=>S.status==="due"&&S.due<=cn()),ct=m.topics.filter(S=>S.status==="completed").length,Xt=m.topics.filter(S=>S.status!=="completed").length,Nt=()=>{const S=new Blob([JSON.stringify(m,null,2)],{type:"application/json"}),b=document.createElement("a");b.href=URL.createObjectURL(S),b.download="forma-backup.json",b.click(),URL.revokeObjectURL(b.href)},Zt=S=>{var Te;const b=(Te=S.target.files)==null?void 0:Te[0];if(!b)return;const $=new FileReader;$.onload=()=>{try{h(Zi({...no,...JSON.parse($.result)})),fe("Backup restored")}catch{fe("Invalid backup file")}},$.readAsText(b)},Hr=m.topics.filter(S=>(S.title+" "+S.subtopic+" "+Je(S.subjectId)).toLowerCase().includes(E.toLowerCase())),Vr=c==="Overview"?"A little progress, every day.":c;return l.createElement("div",{className:`app ${m.theme}`},l.createElement("aside",{className:`sidebar ${g?"open":""}`},l.createElement("div",{className:"brand"},l.createElement("div",{className:"brand-mark"},l.createElement(Mm,{size:20})),l.createElement("div",null,l.createElement("b",null,"forma"),l.createElement("small",null,"LEARNING SPACE")),l.createElement("button",{className:"mobile-close icon-btn",onClick:()=>Z(!1)},l.createElement(ao,null))),l.createElement("div",{className:"workspace-label"},"WORKSPACE"),l.createElement("nav",null,Mn.map(([S,b])=>l.createElement("button",{key:S,className:`nav-item ${c===S?"active":""}`,onClick:()=>{T(S),Z(!1)}},l.createElement(b,{size:18}),l.createElement("span",null,S),S==="Revision Center"&&Oe.length>0&&l.createElement("i",null,Oe.length)))),l.createElement("div",{className:"sidebar-bottom"},l.createElement("div",{className:"quote"},l.createElement(bm,{size:16}),l.createElement("p",null,"Small steps become remarkable journeys."),l.createElement("span",null,"YOUR LEARNING, YOUR PACE")),l.createElement("button",{className:`nav-item ${c==="Settings"?"active":""}`,onClick:()=>T("Settings")},l.createElement(zm,{size:18}),"Settings"),l.createElement("div",{className:"profile"},l.createElement("div",{className:"avatar"},"K"),l.createElement("div",null,l.createElement("b",null,"My learning space"),l.createElement("small",null,"Personal workspace")),l.createElement(xm,{size:18})))),g&&l.createElement("div",{className:"scrim",onClick:()=>Z(!1)}),l.createElement("main",{className:"main"},l.createElement("header",{className:"topbar"},l.createElement("button",{className:"icon-btn mobile-menu",onClick:()=>Z(!0)},l.createElement(Im,null)),l.createElement("div",{className:"crumb"},"Workspace ",l.createElement("span",null,"/")," ",l.createElement("b",null,c)),l.createElement("div",{className:"top-actions"},l.createElement("div",{className:"searchbox"},l.createElement(Am,{size:16}),l.createElement("input",{placeholder:"Search anything...",value:E,onChange:S=>F(S.target.value)}),l.createElement("kbd",null,"⌘ K")),l.createElement("button",{className:"icon-btn",title:"Toggle theme",onClick:()=>oe("theme",m.theme==="light"?"dark":"light")},m.theme==="light"?l.createElement(ac,{size:18}):l.createElement(ic,{size:18})),l.createElement("button",{className:"avatar small-avatar",title:"Settings",onClick:()=>T("Settings")},"K"))),l.createElement("div",{className:"content"},l.createElement("div",{className:"page-heading"},l.createElement("div",null,l.createElement("div",{className:"eyebrow"},new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})),l.createElement("h1",null,Vr),l.createElement("p",null,c==="Overview"?"Your personal space to plan, learn and keep moving forward.":c==="Learning Roadmap"?"Choose a roadmap or create one for any subject you want to learn.":"Keep your learning organized and intentional.")),l.createElement("div",{className:"heading-actions"},c==="Learning Roadmap"?l.createElement(l.Fragment,null,l.createElement("button",{className:"btn secondary",onClick:be},l.createElement(nl,{size:16})," Plan study"),l.createElement("button",{className:"btn primary",onClick:()=>ze("roadmap")},l.createElement(Ye,{size:16})," New roadmap")):l.createElement(l.Fragment,null,l.createElement("button",{className:"btn secondary",onClick:Ke},l.createElement(Ye,{size:16})," Add topic"),l.createElement("button",{className:"btn primary",onClick:be},l.createElement(Ye,{size:17})," Plan study")))),c==="Course Library"&&l.createElement(Om,{data:m,search:E,onOpen:S=>{oe("activeRoadmapId",S),T("Learning Roadmap")}}),c==="Overview"&&l.createElement("button",{className:"course-card library-entry",onClick:()=>T("Course Library")},l.createElement(Gt,{size:19}),l.createElement("strong",null,"Java Full Stack · Course Library"),l.createElement("small",null,"Browse the courses, projects and practice questions"),l.createElement($t,{size:16})),c==="Overview"&&l.createElement(qm,{data:m,todayStudies:he,due:Oe,completed:ct,pending:Xt,allMinutes:se,onAdd:be,onPage:T,onEdit:de,subjectName:Je}),c==="Calendar"&&l.createElement(Qm,{studies:m.studies,month:L,setMonth:R,view:M,setView:U,selected:H,setSelected:_,onAdd:be,onEdit:S=>de(S,"study")}),c==="Learning Roadmap"&&l.createElement(Um,{subjects:m.subjects,topics:m.topics,activeId:Ae==null?void 0:Ae.id,onSelect:S=>oe("activeRoadmapId",S),onCreate:()=>ze("roadmap"),onEditRoadmap:()=>de(Ae,"roadmap"),onAddTopic:Ke,onEditTopic:S=>de(S,"topic"),onMove:Ue,onPlan:S=>ze("study",{subjectId:S.subjectId,topic:S.title,subtopic:S.subtopic})}),c==="Subjects & Topics"&&l.createElement(Jm,{topics:Hr,subjects:m.subjects,onAdd:Ke,onEdit:S=>de(S,"topic"),onDelete:S=>V("topics",S),subjectName:Je}),c==="Revision Center"&&l.createElement(Km,{revisions:m.revisions,subjectName:Je,onDone:X}),c==="Study Sessions"&&l.createElement($m,{timer:J,setTimer:ie,timeText:pe,start:ee,finish:re,subjects:m.subjects,sessions:m.sessions,subjectName:Je}),c==="Notes"&&l.createElement(Gm,{notes:m.notes,onAdd:()=>{G(null),x("note")},onEdit:S=>de(S,"note"),onDelete:S=>V("notes",S),search:E}),c==="Tasks & Goals"&&l.createElement(Ym,{tasks:m.tasks,onAdd:()=>ze("task"),onDone:S=>oe("tasks",b=>b.map($=>$.id===S?{...$,status:"completed"}:$)),onDelete:S=>V("tasks",S)}),c==="Resources"&&l.createElement(Xm,{resources:m.resources,onAdd:()=>ze("resource"),onDelete:S=>V("resources",S)}),c==="Analytics"&&l.createElement(Zm,{data:m,completed:ct,pending:Xt,allMinutes:se}),c==="Settings"&&l.createElement(ep,{data:m,update:oe,exportData:Nt,importData:Zt})),l.createElement("footer",{className:"footer"},l.createElement("span",null,"FORMA ",l.createElement("b",null,"·")," MAKE LEARNING INTENTIONAL"),l.createElement("span",null,"Your progress is saved on this device."))),Y==="roadmap"&&l.createElement(Bm,{roadmap:O,subjects:m.subjects,onClose:()=>x(""),onSave:dn}),Y&&Y!=="roadmap"&&l.createElement(np,{type:Y,editing:O,data:m,onClose:()=>x(""),onStudy:I,onTopic:A,onTask:p,onNote:k,onResource:S=>{oe("resources",b=>[...b,{id:zn(),...S}]),x(""),fe("Resource saved")},onDelete:V}),Le&&l.createElement("div",{className:"toast"},l.createElement(bn,{size:16}),Le))}function Pn({label:m,value:h,sub:c,icon:T,tone:L}){return l.createElement("div",{className:"metric"},l.createElement("div",{className:`metric-icon ${L}`},l.createElement(T,{size:18})),l.createElement("div",null,l.createElement("span",null,m),l.createElement("strong",null,h),l.createElement("small",null,c)))}function qm({data:m,todayStudies:h,due:c,completed:T,pending:L,allMinutes:R,onAdd:M,onPage:U,onEdit:H,subjectName:_}){const Y=Math.floor(R/60),x=R%60,O=Array.from({length:7},(E,F)=>{const g=new Date;g.setDate(g.getDate()-6+F);const Z=g.toISOString().slice(0,10);return{day:g.toLocaleDateString("en-US",{weekday:"short"}),n:m.sessions.filter(J=>J.date===Z).reduce((J,ie)=>J+ie.minutes,0)}}),G=Math.max(60,...O.map(E=>E.n));return l.createElement(l.Fragment,null,l.createElement("div",{className:"metric-grid"},l.createElement(Pn,{label:"Topics completed",value:T,sub:`${L} still in progress`,icon:Gt,tone:"blue"}),l.createElement(Pn,{label:"Study time",value:`${Y}h ${x}m`,sub:"Total tracked time",icon:to,tone:"mint"}),l.createElement(Pn,{label:"Revisions due",value:c.length,sub:"Ready for a quick review",icon:Br,tone:"peach"}),l.createElement(Pn,{label:"Learning paths",value:m.subjects.length,sub:"Roadmaps in your space",icon:rl,tone:"lilac"})),l.createElement("div",{className:"dashboard-grid"},l.createElement("section",{className:"panel today-panel"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"YOUR FOCUS"),l.createElement("h2",null,"Today, at a glance")),l.createElement("button",{className:"text-btn",onClick:()=>U("Calendar")},"Open calendar ",l.createElement($t,{size:15}))),h.length?h.map(E=>{var F;return l.createElement("div",{className:"study-row",key:E.id},l.createElement("div",{className:"study-time"},E.time||"Anytime"),l.createElement("div",{className:"study-dot",style:{background:((F=m.subjects.find(g=>g.id===E.subjectId))==null?void 0:F.color)||"#5577d8"}}),l.createElement("div",{className:"study-info"},l.createElement("b",null,E.topic),l.createElement("small",null,_(E.subjectId)," ",E.subtopic?"· "+E.subtopic:"")),l.createElement("span",{className:`status ${E.status}`},ll(E.status)),l.createElement("button",{className:"icon-btn",onClick:()=>H(E,"study")},l.createElement(ro,{size:15})))}):l.createElement("div",{className:"empty-state"},l.createElement("div",{className:"empty-art"},l.createElement(Sm,{size:26})),l.createElement("b",null,"Your day is still open."),l.createElement("p",null,"Add a study session and give today a little direction."),l.createElement("button",{className:"btn primary",onClick:M},l.createElement(Ye,{size:16})," Plan today's study")),l.createElement("div",{className:"panel-foot"},l.createElement("span",null,h.length," planned item",h.length===1?"":"s"," today"),l.createElement("button",{className:"text-btn",onClick:()=>U("Tasks & Goals")},"View tasks ",l.createElement($t,{size:14})))),l.createElement("section",{className:"panel week-panel"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"YOUR RHYTHM"),l.createElement("h2",null,"Study activity")),l.createElement("span",{className:"mini-tag"},"LAST 7 DAYS")),l.createElement("div",{className:"chart-area"},l.createElement("div",{className:"chart-y"},l.createElement("span",null,"3h"),l.createElement("span",null,"2h"),l.createElement("span",null,"1h"),l.createElement("span",null,"0")),l.createElement("div",{className:"bars"},O.map((E,F)=>l.createElement("div",{className:"bar-col",key:F},l.createElement("div",{className:"bar-track"},l.createElement("div",{className:`bar ${F===6?"today-bar":""}`,style:{height:`${Math.max(E.n?5:0,E.n/G*100)}%`}})),l.createElement("small",null,E.day))))),l.createElement("div",{className:"chart-caption"},l.createElement("span",null,l.createElement("i",null)," Minutes studied"),l.createElement("b",null,Math.round(O.reduce((E,F)=>E+F.n,0)/60*10)/10," hrs this week")))),l.createElement("div",{className:"lower-grid"},l.createElement("section",{className:"panel"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"KEEP THE MOMENTUM"),l.createElement("h2",null,"Revision queue")),l.createElement("button",{className:"text-btn",onClick:()=>U("Revision Center")},"View all ",l.createElement($t,{size:14}))),c.length?c.slice(0,3).map(E=>l.createElement("div",{className:"simple-row",key:E.id},l.createElement("div",{className:"round-icon peach-bg"},l.createElement(Br,{size:16})),l.createElement("div",null,l.createElement("b",null,E.topic),l.createElement("small",null,_(E.subjectId)," · Due ",Yt(E.due))),l.createElement("span",{className:"due-label"},"Due now"))):l.createElement("div",{className:"quiet-empty"},l.createElement(bn,{size:17})," You're all caught up on revisions.")),l.createElement("section",{className:"panel"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"BUILD YOUR BASE"),l.createElement("h2",null,"Learning overview")),l.createElement("button",{className:"text-btn",onClick:()=>U("Subjects & Topics")},"Explore topics ",l.createElement($t,{size:14}))),m.subjects.length?m.subjects.slice(0,4).map(E=>{const F=m.topics.filter(J=>J.subjectId===E.id),g=F.filter(J=>J.status==="completed").length,Z=F.length?Math.round(g/F.length*100):0;return l.createElement("div",{className:"progress-row",key:E.id},l.createElement("div",{className:"progress-title"},l.createElement("span",{className:"subject-dot",style:{background:E.color}}),l.createElement("b",null,E.name),l.createElement("small",null,g,"/",F.length," topics")),l.createElement("div",{className:"progress-track"},l.createElement("div",{style:{width:Z+"%",background:E.color}})),l.createElement("strong",null,Z,"%"))}):l.createElement("div",{className:"quiet-empty"},"Add a subject to begin your learning map."))))}function Qm({studies:m,month:h,setMonth:c,view:T,setView:L,selected:R,setSelected:M,onAdd:U,onEdit:H}){const _=h.getFullYear(),Y=h.getMonth(),x=new Date(_,Y,1),O=new Date(_,Y,1-x.getDay()),G=Array.from({length:42},(g,Z)=>{const J=new Date(O);return J.setDate(O.getDate()+Z),J}),E=g=>{const Z=new Date(h);Z.setMonth(Z.getMonth()+g),c(Z)},F=m.filter(g=>g.date===R);return l.createElement("section",{className:"panel calendar-panel"},l.createElement("div",{className:"calendar-toolbar"},l.createElement("div",{className:"month-nav"},l.createElement("button",{className:"icon-btn",onClick:()=>E(-1)},l.createElement(wm,null)),l.createElement("h2",null,h.toLocaleDateString("en-US",{month:"long",year:"numeric"})),l.createElement("button",{className:"icon-btn",onClick:()=>E(1)},l.createElement(Cm,null)),l.createElement("button",{className:"btn secondary today-btn",onClick:()=>{c(new Date),M(cn())}},"Today")),l.createElement("div",{className:"segmented"},["Month","Week","Day"].map(g=>l.createElement("button",{className:T===g?"chosen":"",onClick:()=>L(g),key:g},g))),l.createElement("button",{className:"btn primary",onClick:U},l.createElement(Ye,{size:16})," Add study")),T==="Month"?l.createElement("div",{className:"month-grid"},l.createElement("div",{className:"weekday-row"},["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(g=>l.createElement("span",{key:g},g))),l.createElement("div",{className:"days-grid"},G.map((g,Z)=>{const J=g.toISOString().slice(0,10),ie=m.filter(Ee=>Ee.date===J);return l.createElement("button",{key:Z,className:`day-cell ${g.getMonth()!==Y?"muted-day":""} ${J===cn()?"is-today":""} ${J===R?"selected-day":""}`,onClick:()=>M(J)},l.createElement("span",{className:"day-number"},g.getDate()),l.createElement("div",{className:"day-events"},ie.slice(0,2).map(Ee=>l.createElement("span",{key:Ee.id,style:{"--event-color":Ee.color||"#5577d8"}},Ee.topic)),ie.length>2&&l.createElement("small",null,"+",ie.length-2," more")))}))):l.createElement("div",{className:"agenda-list"},(T==="Day"?[new Date(R+"T12:00:00")]:Array.from({length:7},(g,Z)=>{const J=new Date(R+"T12:00:00");return J.setDate(J.getDate()-J.getDay()+Z),J})).map(g=>{const Z=g.toISOString().slice(0,10),J=m.filter(ie=>ie.date===Z);return l.createElement("div",{className:"agenda-day",key:Z},l.createElement("div",{className:"agenda-date"},l.createElement("b",null,g.toLocaleDateString("en-US",{weekday:"short"})),l.createElement("span",null,g.getDate())),l.createElement("div",{className:"agenda-items"},J.length?J.map(ie=>l.createElement("button",{className:"agenda-item",key:ie.id,onClick:()=>H(ie)},l.createElement("b",null,ie.topic),l.createElement("small",null,ie.time||"Anytime"," · ",ie.subtopic||"Study session"),l.createElement("span",{className:`status ${ie.status}`},ll(ie.status)))):l.createElement("span",{className:"no-plan"},"Nothing planned")))})),l.createElement("div",{className:"selected-date-panel"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"SELECTED DAY"),l.createElement("h3",null,new Date(R+"T12:00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}))),l.createElement("div",{className:"selected-items"},F.length?F.map(g=>l.createElement("button",{className:"selected-chip",key:g.id,onClick:()=>H(g)},g.time||"Anytime"," · ",g.topic)):l.createElement("span",{className:"muted-text"},"No study plans for this date yet.")),l.createElement("button",{className:"btn secondary",onClick:U},l.createElement(Ye,{size:15})," Add to this day")))}function Jm({topics:m,subjects:h,onAdd:c,onEdit:T,onDelete:L,subjectName:R}){const[M,U]=ce.useState("All"),H=m.filter(_=>M==="All"||_.status===M.toLowerCase());return l.createElement(l.Fragment,null,l.createElement("div",{className:"filterbar"},l.createElement("div",{className:"segmented"},["All","Pending","Started","Completed"].map(_=>l.createElement("button",{key:_,className:M===_?"chosen":"",onClick:()=>U(_)},_))),l.createElement("span",{className:"muted-text"},H.length," topics")),H.length?l.createElement("div",{className:"topic-grid"},H.map(_=>l.createElement("div",{className:"topic-card",key:_.id},l.createElement("div",{className:"topic-card-top"},l.createElement("span",{className:"subject-pill"},R(_.subjectId)),l.createElement("button",{className:"icon-btn",onClick:()=>T(_)},l.createElement(ro,{size:15}))),l.createElement("h3",null,_.title),l.createElement("p",null,_.subtopic||"Major topic"),l.createElement("div",{className:"topic-card-bottom"},l.createElement("span",{className:`status ${_.status}`},ll(_.status)),l.createElement("button",{className:"text-btn danger-text",onClick:()=>L(_.id)},l.createElement(al,{size:14})," Delete"))))):l.createElement("div",{className:"panel empty-large"},l.createElement("div",{className:"empty-art"},l.createElement(Gt,null)),l.createElement("h3",null,"No topics here yet"),l.createElement("p",null,"Add a topic to start building your personal learning roadmap."),l.createElement("button",{className:"btn primary",onClick:c},l.createElement(Ye,{size:16})," Add your first topic")))}function Km({revisions:m,subjectName:h,onDone:c}){const T=m.filter(M=>M.status==="due"&&M.due<=cn()),L=m.filter(M=>M.status==="due"&&M.due>cn()),R=m.filter(M=>M.status==="done");return l.createElement(l.Fragment,null,l.createElement("div",{className:"metric-grid compact-metrics"},l.createElement(Pn,{label:"Due now",value:T.length,sub:"Ready to review",icon:Br,tone:"peach"}),l.createElement(Pn,{label:"Coming up",value:L.length,sub:"Scheduled reviews",icon:nl,tone:"blue"}),l.createElement(Pn,{label:"Reviewed",value:R.length,sub:"Completed reviews",icon:bn,tone:"mint"})),l.createElement("section",{className:"panel"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"SPACED REPETITION"),l.createElement("h2",null,"Ready for another look")),l.createElement("span",{className:"mini-tag"},"1 · 3 · 7 · 15 · 30 DAYS")),T.length?T.map(M=>l.createElement("div",{className:"revision-row",key:M.id},l.createElement("div",{className:"round-icon peach-bg"},l.createElement(Br,{size:17})),l.createElement("div",{className:"revision-info"},l.createElement("b",null,M.topic),l.createElement("small",null,h(M.subjectId)," · ",M.count||0," previous reviews · Due ",Yt(M.due))),l.createElement("div",{className:"revision-actions"},l.createElement("button",{className:"btn tiny secondary",onClick:()=>c(M,"Difficult")},"Difficult"),l.createElement("button",{className:"btn tiny secondary",onClick:()=>c(M,"Need practice")},"Practice"),l.createElement("button",{className:"btn tiny primary",onClick:()=>c(M,"Easy")},l.createElement(bn,{size:14})," Easy")))):l.createElement("div",{className:"quiet-empty"},l.createElement(bn,{size:18})," No revisions due. You're all caught up.")),l.createElement("section",{className:"panel section-gap"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"UP NEXT"),l.createElement("h2",null,"Upcoming revisions"))),L.length?L.sort((M,U)=>M.due.localeCompare(U.due)).map(M=>l.createElement("div",{className:"simple-row",key:M.id},l.createElement("div",{className:"round-icon blue-bg"},l.createElement(nl,{size:16})),l.createElement("div",null,l.createElement("b",null,M.topic),l.createElement("small",null,h(M.subjectId))),l.createElement("span",{className:"muted-text"},Yt(M.due)))):l.createElement("div",{className:"quiet-empty"},"No upcoming revisions scheduled.")))}function $m({timer:m,setTimer:h,timeText:c,start:T,finish:L,subjects:R,sessions:M,subjectName:U}){return l.createElement("div",{className:"sessions-layout"},l.createElement("section",{className:"panel timer-panel"},l.createElement("span",{className:"eyebrow"},"FOCUS MODE"),l.createElement("h2",null,"Give this moment your attention."),l.createElement("div",{className:"timer-display"},c),l.createElement("div",{className:"timer-selects"},l.createElement("select",{value:m.subject,onChange:H=>h(_=>({..._,subject:H.target.value}))},l.createElement("option",{value:""},"Choose subject"),R.map(H=>l.createElement("option",{key:H.id,value:H.id},H.name))),l.createElement("input",{placeholder:"What are you studying?",value:m.topic,onChange:H=>h(_=>({..._,topic:H.target.value}))})),l.createElement("div",{className:"timer-buttons"},l.createElement("button",{className:"btn primary large-btn",onClick:T},m.running?l.createElement(l.Fragment,null,l.createElement(Rm,{size:17})," Pause"):l.createElement(l.Fragment,null,l.createElement(Dm,{size:17})," ",c==="00:00:00"?"Start focus":"Resume")),l.createElement("button",{className:"btn secondary large-btn",onClick:L},l.createElement(jm,{size:15})," Finish session")),l.createElement("p",{className:"muted-text"},"Your session is saved when you finish.")),l.createElement("section",{className:"panel"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"YOUR HISTORY"),l.createElement("h2",null,"Recent sessions"))),M.length?M.slice().reverse().slice(0,8).map(H=>l.createElement("div",{className:"simple-row",key:H.id},l.createElement("div",{className:"round-icon mint-bg"},l.createElement(to,{size:16})),l.createElement("div",null,l.createElement("b",null,H.topic),l.createElement("small",null,U(H.subjectId)," · ",Yt(H.date))),l.createElement("strong",null,H.minutes," min"))):l.createElement("div",{className:"quiet-empty"},"Your completed focus sessions will appear here.")))}function Gm({notes:m,onAdd:h,onEdit:c,onDelete:T,search:L}){const R=m.filter(M=>(M.title+" "+M.body).toLowerCase().includes(L.toLowerCase()));return l.createElement(l.Fragment,null,l.createElement("div",{className:"section-toolbar"},l.createElement("p",{className:"muted-text"},"A home for useful ideas, code snippets and things worth remembering."),l.createElement("button",{className:"btn primary",onClick:h},l.createElement(Ye,{size:16})," New note")),R.length?l.createElement("div",{className:"notes-grid"},R.map(M=>l.createElement("article",{className:"note-card",key:M.id,onClick:()=>c(M)},l.createElement("div",{className:"note-meta"},l.createElement("span",null,M.tag||"NOTE"),l.createElement("button",{className:"icon-btn",onClick:U=>{U.stopPropagation(),T(M.id)}},l.createElement(al,{size:14}))),l.createElement("h3",null,M.title),l.createElement("p",null,M.body),l.createElement("small",null,Yt(M.date||cn()))))):l.createElement("div",{className:"panel empty-large"},l.createElement("div",{className:"empty-art"},l.createElement(lc,null)),l.createElement("h3",null,"Your ideas deserve a home."),l.createElement("p",null,"Create notes and connect them to what you're learning."),l.createElement("button",{className:"btn primary",onClick:h},l.createElement(Ye,{size:16})," Create a note")))}function Ym({tasks:m,onAdd:h,onDone:c,onDelete:T}){return l.createElement(l.Fragment,null,l.createElement("div",{className:"section-toolbar"},l.createElement("p",{className:"muted-text"},"Keep projects, practice and small commitments moving."),l.createElement("button",{className:"btn primary",onClick:h},l.createElement(Ye,{size:16})," Add task")),l.createElement("section",{className:"panel"},m.length?m.map(L=>l.createElement("div",{className:"task-row",key:L.id},l.createElement("button",{className:`check-btn ${L.status==="completed"?"checked":""}`,onClick:()=>c(L.id)},L.status==="completed"?l.createElement(bn,{size:14}):null),l.createElement("div",{className:"task-info"},l.createElement("b",{className:L.status==="completed"?"strike":""},L.title),l.createElement("small",null,L.date?`Due ${Yt(L.date)}`:"No deadline"," · ",L.priority||"Normal"," priority")),l.createElement("span",{className:`status ${L.status}`},ll(L.status)),l.createElement("button",{className:"icon-btn",onClick:()=>T(L.id)},l.createElement(al,{size:15})))):l.createElement("div",{className:"empty-large"},l.createElement("div",{className:"empty-art"},l.createElement(rc,null)),l.createElement("h3",null,"Clear goals, calmer days."),l.createElement("p",null,"Add your first task, project or coding practice goal."),l.createElement("button",{className:"btn primary",onClick:h},l.createElement(Ye,{size:16})," Add a task"))))}function Xm({resources:m,onAdd:h,onDelete:c}){return l.createElement(l.Fragment,null,l.createElement("div",{className:"section-toolbar"},l.createElement("p",{className:"muted-text"},"Collect useful links and learning material in one place."),l.createElement("button",{className:"btn primary",onClick:h},l.createElement(Ye,{size:16})," Save resource")),l.createElement("div",{className:"resource-list"},m.length?m.map(T=>l.createElement("div",{className:"panel resource-row",key:T.id},l.createElement("div",{className:"round-icon blue-bg"},l.createElement(tl,{size:17})),l.createElement("div",null,l.createElement("b",null,T.title),l.createElement("small",null,T.url)),l.createElement("a",{href:T.url,target:"_blank",rel:"noreferrer"},l.createElement(Pm,{size:16})),l.createElement("button",{className:"icon-btn",onClick:()=>c(T.id)},l.createElement(al,{size:15})))):l.createElement("div",{className:"panel empty-large"},l.createElement("div",{className:"empty-art"},l.createElement(tl,null)),l.createElement("h3",null,"Your learning library"),l.createElement("p",null,"Save tutorials, documentation and references here."),l.createElement("button",{className:"btn primary",onClick:h},l.createElement(Ye,{size:16})," Add resource"))))}function Zm({data:m,completed:h,pending:c,allMinutes:T}){const L=(T/60).toFixed(1);return l.createElement(l.Fragment,null,l.createElement("div",{className:"metric-grid"},l.createElement(Pn,{label:"Total study time",value:`${L}h`,sub:"Tracked sessions",icon:to,tone:"blue"}),l.createElement(Pn,{label:"Completed topics",value:h,sub:"Learning milestones",icon:bn,tone:"mint"}),l.createElement(Pn,{label:"Topics in progress",value:c,sub:"Keep moving forward",icon:Gt,tone:"peach"}),l.createElement(Pn,{label:"Study sessions",value:m.sessions.length,sub:"Focus blocks saved",icon:oc,tone:"lilac"})),l.createElement("section",{className:"panel"},l.createElement("div",{className:"panel-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"YOUR LEARNING MIX"),l.createElement("h2",null,"Progress by subject"))),m.subjects.map(R=>{const M=m.topics.filter(_=>_.subjectId===R.id),U=M.filter(_=>_.status==="completed").length,H=M.length?Math.round(U/M.length*100):0;return l.createElement("div",{className:"analytics-subject",key:R.id},l.createElement("div",{className:"progress-title"},l.createElement("span",{className:"subject-dot",style:{background:R.color}}),l.createElement("b",null,R.name),l.createElement("small",null,U," of ",M.length," completed")),l.createElement("div",{className:"progress-track"},l.createElement("div",{style:{width:H+"%",background:R.color}})),l.createElement("strong",null,H,"%"))}),!m.subjects.length&&l.createElement("div",{className:"quiet-empty"},"Add subjects to see your progress.")))}function ep({data:m,update:h,exportData:c,importData:T}){var L;return l.createElement("div",{className:"settings-grid"},l.createElement("section",{className:"panel settings-panel"},l.createElement("span",{className:"eyebrow"},"PREFERENCES"),l.createElement("h2",null,"Make Forma yours."),l.createElement("div",{className:"setting-row"},l.createElement("div",null,l.createElement("b",null,"Appearance"),l.createElement("small",null,"Choose a comfortable workspace theme.")),l.createElement("div",{className:"segmented"},l.createElement("button",{className:m.theme==="light"?"chosen":"",onClick:()=>h("theme","light")},l.createElement(ic,{size:14})," Lavender Mist"),l.createElement("button",{className:m.theme==="dark"?"chosen":"",onClick:()=>h("theme","dark")},l.createElement(ac,{size:14})," Soft Iris"))),l.createElement("div",{className:"setting-row"},l.createElement("div",null,l.createElement("b",null,"Daily study target"),l.createElement("small",null,"Your ideal learning time each day.")),l.createElement("div",{className:"inline-input"},l.createElement("input",{type:"number",min:"1",max:"16",value:((L=m.goals)==null?void 0:L.dailyHours)||3,onChange:R=>h("goals",{...m.goals,dailyHours:Number(R.target.value)})}),l.createElement("span",null,"hours")))),l.createElement("section",{className:"panel settings-panel"},l.createElement("span",{className:"eyebrow"},"YOUR DATA"),l.createElement("h2",null,"Your learning belongs to you."),l.createElement("p",{className:"muted-text"},"Forma saves data in this browser. Export a backup regularly so you can move or restore your learning space."),l.createElement("div",{className:"data-actions"},l.createElement("button",{className:"btn secondary",onClick:c},l.createElement(Nm,{size:16})," Export backup"),l.createElement("label",{className:"btn secondary upload-btn"},l.createElement(Fm,{size:16})," Import backup",l.createElement("input",{type:"file",accept:"application/json",onChange:T,hidden:!0}))),l.createElement("div",{className:"privacy-note"},l.createElement(bn,{size:16})," Your data stays in this browser unless you export it.")))}function np({type:m,editing:h,data:c,onClose:T,onStudy:L,onTopic:R,onTask:M,onNote:U,onResource:H,onDelete:_}){const Y=!!(h!=null&&h.id),[x,O]=ce.useState(()=>{var g,Z;return m==="study"?{date:(h==null?void 0:h.date)||cn(),time:(h==null?void 0:h.time)||"",subjectId:(h==null?void 0:h.subjectId)||((g=c.subjects[0])==null?void 0:g.id)||"",topic:(h==null?void 0:h.topic)||"",subtopic:(h==null?void 0:h.subtopic)||"",status:(h==null?void 0:h.status)||"pending",notes:(h==null?void 0:h.notes)||"",revision:(h==null?void 0:h.revision)||!1}:m==="topic"?{phase:(h==null?void 0:h.phase)||"",subjectId:(h==null?void 0:h.subjectId)||((Z=c.subjects[0])==null?void 0:Z.id)||"",title:(h==null?void 0:h.title)||"",subtopic:(h==null?void 0:h.subtopic)||"",status:(h==null?void 0:h.status)||"pending",priority:(h==null?void 0:h.priority)||"Normal"}:m==="task"?{title:"",date:cn(),priority:"Normal",status:"pending"}:m==="note"?{title:(h==null?void 0:h.title)||"",body:(h==null?void 0:h.body)||"",tag:(h==null?void 0:h.tag)||"NOTE",date:(h==null?void 0:h.date)||cn()}:{title:"",url:""}}),G=(g,Z)=>O(J=>({...J,[g]:Z})),E={study:Y?"Edit study plan":"Plan a study session",topic:Y?"Edit topic":"Add a topic",task:"Add a task",note:Y?"Edit note":"Create a note",resource:"Save a resource"}[m],F=g=>{if(g.preventDefault(),m==="study"&&L(x),m==="topic"){if(!x.subjectId||!x.title.trim())return;R({...x,title:x.title.trim(),phase:x.phase.trim()})}m==="task"&&M(x),m==="note"&&U(x),m==="resource"&&H(x)};return l.createElement("div",{className:"modal-backdrop",onMouseDown:g=>{g.target===g.currentTarget&&T()}},l.createElement("form",{className:"modal",onSubmit:F},l.createElement("div",{className:"modal-head"},l.createElement("div",null,l.createElement("span",{className:"eyebrow"},"FORMA WORKSPACE"),l.createElement("h2",null,E)),l.createElement("button",{type:"button",className:"icon-btn",onClick:T},l.createElement(ao,null))),m==="study"&&l.createElement(l.Fragment,null,l.createElement(Me,{label:"Study date"},l.createElement("input",{type:"date",value:x.date,onChange:g=>G("date",g.target.value),required:!0})),l.createElement(Me,{label:"Roadmap / subject"},l.createElement("select",{value:x.subjectId,onChange:g=>G("subjectId",g.target.value)},c.subjects.map(g=>l.createElement("option",{value:g.id,key:g.id},g.name)))),l.createElement(Me,{label:"Major topic"},l.createElement("input",{value:x.topic,onChange:g=>G("topic",g.target.value),placeholder:"e.g. Object-oriented programming",required:!0})),l.createElement(Me,{label:"Subtopic"},l.createElement("input",{value:x.subtopic,onChange:g=>G("subtopic",g.target.value),placeholder:"e.g. Polymorphism"})),l.createElement("div",{className:"form-two"},l.createElement(Me,{label:"Start time (optional)"},l.createElement("input",{type:"time",value:x.time,onChange:g=>G("time",g.target.value)})),l.createElement(Me,{label:"Status"},l.createElement("select",{value:x.status,onChange:g=>G("status",g.target.value)},l.createElement("option",{value:"pending"},"Pending"),l.createElement("option",{value:"started"},"Started"),l.createElement("option",{value:"completed"},"Completed")))),l.createElement(Me,{label:"Notes"},l.createElement("textarea",{rows:"3",value:x.notes,onChange:g=>G("notes",g.target.value),placeholder:"What do you want to understand?"})),l.createElement("label",{className:"toggle-line"},l.createElement("input",{type:"checkbox",checked:x.revision,onChange:g=>G("revision",g.target.checked)}),l.createElement("span",null,l.createElement("b",null,l.createElement(vm,{size:16})," Save for revision"),l.createElement("small",null,"Add this topic to your revision queue.")))),m==="topic"&&l.createElement(l.Fragment,null,l.createElement(Me,{label:"Roadmap / subject"},l.createElement("select",{value:x.subjectId,onChange:g=>G("subjectId",g.target.value)},c.subjects.map(g=>l.createElement("option",{value:g.id,key:g.id},g.name)))),l.createElement(Me,{label:"Phase (optional)"},l.createElement("input",{list:"roadmap-phases",value:x.phase,onChange:g=>G("phase",g.target.value),placeholder:"e.g. Foundations"})),l.createElement("datalist",{id:"roadmap-phases"},[...new Set(c.topics.filter(g=>g.subjectId===x.subjectId&&g.phase).map(g=>g.phase))].map(g=>l.createElement("option",{key:g,value:g}))),l.createElement(Me,{label:"Major topic"},l.createElement("input",{required:!0,pattern:".*\\S.*",title:"Enter a topic name",value:x.title,onChange:g=>G("title",g.target.value),placeholder:"e.g. Collections Framework"})),l.createElement(Me,{label:"Subtopic"},l.createElement("input",{value:x.subtopic,onChange:g=>G("subtopic",g.target.value),placeholder:"e.g. ArrayList"})),l.createElement("div",{className:"form-two"},l.createElement(Me,{label:"Status"},l.createElement("select",{value:x.status,onChange:g=>G("status",g.target.value)},l.createElement("option",{value:"pending"},"Pending"),l.createElement("option",{value:"started"},"Started"),l.createElement("option",{value:"completed"},"Completed"))),l.createElement(Me,{label:"Priority"},l.createElement("select",{value:x.priority,onChange:g=>G("priority",g.target.value)},l.createElement("option",null,"Normal"),l.createElement("option",null,"High"),l.createElement("option",null,"Low"))))),m==="task"&&l.createElement(l.Fragment,null,l.createElement(Me,{label:"Task name"},l.createElement("input",{required:!0,value:x.title,onChange:g=>G("title",g.target.value),placeholder:"e.g. Solve 3 array problems"})),l.createElement(Me,{label:"Due date"},l.createElement("input",{type:"date",value:x.date,onChange:g=>G("date",g.target.value)})),l.createElement(Me,{label:"Priority"},l.createElement("select",{value:x.priority,onChange:g=>G("priority",g.target.value)},l.createElement("option",null,"Normal"),l.createElement("option",null,"High"),l.createElement("option",null,"Low")))),m==="note"&&l.createElement(l.Fragment,null,l.createElement(Me,{label:"Title"},l.createElement("input",{required:!0,value:x.title,onChange:g=>G("title",g.target.value),placeholder:"Give this note a name"})),l.createElement(Me,{label:"Tag"},l.createElement("input",{value:x.tag,onChange:g=>G("tag",g.target.value)})),l.createElement(Me,{label:"Your note"},l.createElement("textarea",{rows:"7",value:x.body,onChange:g=>G("body",g.target.value),placeholder:"Capture an idea, explanation or code reminder..."}))),m==="resource"&&l.createElement(l.Fragment,null,l.createElement(Me,{label:"Resource title"},l.createElement("input",{required:!0,value:x.title,onChange:g=>G("title",g.target.value),placeholder:"e.g. Java documentation"})),l.createElement(Me,{label:"URL"},l.createElement("input",{type:"url",required:!0,value:x.url,onChange:g=>G("url",g.target.value),placeholder:"https://..."}))),l.createElement("div",{className:"modal-actions"},l.createElement("button",{type:"button",className:"btn secondary",onClick:T},"Cancel"),l.createElement("button",{className:"btn primary",type:"submit"},l.createElement(bn,{size:16}),Y?"Save changes":"Save"))))}function Me({label:m,children:h}){return l.createElement("label",{className:"field"},l.createElement("span",null,m),h)}mm.createRoot(document.getElementById("root")).render(l.createElement(l.StrictMode,null,l.createElement(Vm,null)));
