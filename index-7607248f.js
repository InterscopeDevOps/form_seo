(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=window,Z=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),Q=new WeakMap;let dt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const ft=o=>new dt(typeof o=="string"?o:o+"",void 0,G),mt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new dt(e,o,G)},vt=(o,t)=>{Z?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)})},X=Z?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const L=window,Y=L.trustedTypes,$t=Y?Y.emptyScript:"",tt=L.reactiveElementPolyfillSupport,W={toAttribute(o,t){switch(t){case Boolean:o=o?$t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ht=(o,t)=>t!==o&&(t==t||o==o),B={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ht},J="finalized";let x=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=B){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||B}static finalize(){if(this.hasOwnProperty(J))return!1;this[J]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return vt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=B){var i;const n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){const r=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=i.getPropertyOptions(n),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:W;this._$El=n,this[n]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};x[J]=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},tt==null||tt({ReactiveElement:x}),((j=L.reactiveElementVersions)!==null&&j!==void 0?j:L.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const R=window,A=R.trustedTypes,et=A?A.createPolicy("lit-html",{createHTML:o=>o}):void 0,K="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,ct="?"+_,_t=`<${ct}>`,b=document,P=()=>b.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",pt=Array.isArray,gt=o=>pt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",D=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,g=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,nt=/"/g,ut=/^(?:script|style|textarea|title)$/i,yt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),T=yt(1),w=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),rt=new WeakMap,y=b.createTreeWalker(b,129,null,!1),bt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":"",r=S;for(let l=0;l<e;l++){const a=o[l];let $,d,c=-1,v=0;for(;v<a.length&&(r.lastIndex=v,d=r.exec(a),d!==null);)v=r.lastIndex,r===S?d[1]==="!--"?r=st:d[1]!==void 0?r=it:d[2]!==void 0?(ut.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=g):d[3]!==void 0&&(r=g):r===g?d[0]===">"?(r=i??S,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,$=d[1],r=d[3]===void 0?g:d[3]==='"'?nt:ot):r===nt||r===ot?r=g:r===st||r===it?r=S:(r=g,i=void 0);const M=r===g&&o[l+1].startsWith("/>")?" ":"";n+=r===S?a+_t:c>=0?(s.push($),a.slice(0,c)+K+a.slice(c)+_+M):a+_+(c===-2?(s.push(void 0),l):M)}const h=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[et!==void 0?et.createHTML(h):h,s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const h=t.length-1,l=this.parts,[a,$]=bt(t,e);if(this.el=O.createElement(a,s),y.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(i=y.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const c of i.getAttributeNames())if(c.endsWith(K)||c.startsWith(_)){const v=$[r++];if(d.push(c),v!==void 0){const M=i.getAttribute(v.toLowerCase()+K).split(_),U=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:U[2],strings:M,ctor:U[1]==="."?At:U[1]==="?"?Et:U[1]==="@"?St:z})}else l.push({type:6,index:n})}for(const c of d)i.removeAttribute(c)}if(ut.test(i.tagName)){const d=i.textContent.split(_),c=d.length-1;if(c>0){i.textContent=A?A.emptyScript:"";for(let v=0;v<c;v++)i.append(d[v],P()),y.nextNode(),l.push({type:2,index:++n});i.append(d[c],P())}}}else if(i.nodeType===8)if(i.data===ct)l.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf(_,d+1))!==-1;)l.push({type:7,index:n}),d+=_.length-1}n++}}static createElement(t,e){const s=b.createElement("template");return s.innerHTML=t,s}}function E(o,t,e=o,s){var i,n,r,h;if(t===w)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const a=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,s)),s!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=E(o,l._$AS(o,t.values),l,s)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:b).importNode(s,!0);y.currentNode=n;let r=y.nextNode(),h=0,l=0,a=i[0];for(;a!==void 0;){if(h===a.index){let $;a.type===2?$=new k(r,r.nextSibling,this,t):a.type===1?$=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&($=new Ct(r,this,t)),this._$AV.push($),a=i[++l]}h!==(a==null?void 0:a.index)&&(r=y.nextNode(),h++)}return y.currentNode=b,n}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{constructor(t,e,s,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),N(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):gt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(b.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{const r=new xt(n,this),h=r.u(this.options);r.v(s),this.$(h),this._$AH=r}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new O(t)),e}T(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new k(this.k(P()),this.k(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class z{constructor(t,e,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=E(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{const h=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=E(this,h[s+l],e,l),a===w&&(a=this._$AH[l]),r||(r=!N(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const wt=A?A.emptyScript:"";class Et extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,wt):this.element.removeAttribute(this.name)}}class St extends z{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=E(this,t,e,0))!==null&&s!==void 0?s:u)===w)return;const i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const lt=R.litHtmlPolyfillSupport;lt==null||lt(O,k),((I=R.litHtmlVersions)!==null&&I!==void 0?I:R.litHtmlVersions=[]).push("2.7.4");const Pt=(o,t,e)=>{var s,i;const n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=n._$litPart$;if(r===void 0){const h=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=r=new k(t.insertBefore(P(),h),h,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F,q;class C extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return w}}C.finalized=!0,C._$litElement$=!0,(F=globalThis.litElementHydrateSupport)===null||F===void 0||F.call(globalThis,{LitElement:C});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:C});((q=globalThis.litElementVersions)!==null&&q!==void 0?q:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=o=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(o,t):((e,s)=>{const{kind:i,elements:n}=s;return{kind:i,elements:n,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},kt=(o,t,e)=>{t.constructor.createProperty(e,o)};function m(o){return(t,e)=>e!==void 0?kt(o,t,e):Ot(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;((V=window.HTMLSlotElement)===null||V===void 0?void 0:V.prototype.assignedElements)!=null;var Mt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,f=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ut(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Mt(t,e,i),i};let p=class extends C{constructor(){super(...arguments),this.internalservice=[],this.internalToEmails=[],this.server="https://seo-form-api-f719f578653b.herokuapp.com/email",this.img="",this.estilo="",this.emailcolor="",this.tname="Name",this.tlname="Last Name",this.temail="Email",this.tphone="Phone",this.taddress="Address",this.tmessage="Message",this.tbutton="Send A Message",this.showLoader=!1,this.showModal=!1}get to(){return this.internalToEmails}set to(o){if(typeof o=="string"){const t=o.split(",");this.internalToEmails=t}else this.internalToEmails=o}get services(){return this.internalservice}set services(o){if(typeof o=="string"){const t=o.split(",");this.internalservice=t}else this.internalservice=o}get isenglish(){return this.internalboolean}set isenglish(o){const t=o==="true";this.internalboolean=t}closeModal(){this.showModal=!1}async handlesubmit(o){o.preventDefault(),this.showLoader=!0;const t=this.isenglish?"New Service Request":"Nueva Solicitud",e=new FormData(o.target),s=JSON.parse(JSON.stringify(Object.fromEntries(e))),i=this.to.map(n=>{const r={toEmail:n.trim(),nombre:s.name,lastname:s.lastName,email:s.email,asunto:`${t} From ${s.name} ${s.lastName}`,phone:s.phone,address:s.address,service:s.services,mensaje:s.message.length>0?s.message:"No Extra Info",img:this.img,color:this.emailcolor,waytocontact:s.contact};return fetch(this.server,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)})});try{await Promise.all(i),this.showLoader=!1,this.showModal=!0,this.shadowRoot.querySelector("form").reset()}catch{this.showLoader=!1}}render(){return T`
      <div class="contentForm">
        <form @submit=${this.handlesubmit} class="form_styles">
          <div class="content_inputs content_flex">
            <div class="input_wrap">
              <label for="name" class="visually-hidden span_tile_hidden">${this.tname} </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder=${this.tname}
                required
                class="input_style"
                aria-label="${this.tname}"
              />
            </div>
            <div class="input_wrap">
              <label for="lastName" class="visually-hidden span_tile_hidden">${this.tlname}</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder=${this.tlname}
                class="input_style"
                required
                aria-label="${this.tlname}"
              />
            </div>
          </div>
          <div class="content_inputs content_flex">
            <div class="input_wrap">
              <label for="email" class="visually-hidden span_tile_hidden">${this.temail} </label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder=${this.temail}
                class="input_style"
                required
                aria-label="${this.temail}"
              />
            </div>
            <div class="input_wrap">
              <label for="phone" class="visually-hidden span_tile_hidden">${this.tphone} </label>
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder=${this.tphone}
                class="input_style"
                required
                aria-label="${this.tphone}"
              />
            </div>
          </div>
          <div class="content_inputs content_flex">
            <div class="input_wrap_full">
              <label for="address" class="visually-hidden span_tile_hidden">${this.taddress}</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder=${this.taddress}
                class="input_style"
                required
                aria-label="${this.taddress}"
              />
            </div>
          </div>
          <div class="content_inputs content_flex">
            <div class="input_wrap_full">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder=${this.tmessage}
                class="input_style"
                aria-label="${this.tmessage}"
              ></textarea>
            </div>
          </div>
          <div class="content_inputs content_flex">
            <button type="submit" class="button_submit">
              ${this.showLoader?"":T`<span>${this.tbutton}</span>`}
            </button>
          </div>
        </form>
      </div>
      ${this.showLoader?T`
        <div class="loader-overlay" style="display: flex;">
          <span class="loader-send"></span>
        </div>
      `:""}
      ${this.showModal?T`
        <div class="modal">
          <div class="modal-content">
            <span class="close" @click=${this.closeModal}>&times;</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L7.03 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.071-1.05z"/>
            </svg>
            <p>Message sent successfully!</p>
            <button class="modal-button" @click=${this.closeModal}>OK</button>
          </div>
        </div>
      `:""}
    `}};p.styles=mt`
    :host {
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .contentForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .form_styles {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 95%;
      margin: 0 auto;
    }

    .content_flex {
      display: flex;
      text-align: start;
      flex-direction: row;
      gap: 20px;
    }

    .input_wrap {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input_wrap_full {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input_style {
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 6px;
      border: none;
      background-color: #f9f9f9;
      transition: border 0.3s, box-shadow 0.3s;
    }
    
    .input_style:focus {
      outline: none;
      border: 1px solid #b3e5fc;
      box-shadow: 0 0 0 2px #b3e5fc;
    }

    .span_tile_hidden {
      display: none;
    }

    .button_submit {
      margin: 20px 0;
      display: flex;
      flex-direction: row;
      align-self: center;
      justify-content: center;
      align-content: center;
      align-items: center;
      padding: 10px 30px;
      font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
      border-radius: 6px;
      border: none;
      font-size: 18px;
      color: #fff;
      background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
      background-origin: border-box;
      box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
        inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      transition: transform 0.2s, background-color 0.2s;
    }
    
    .button_submit:hover {
      transform: scale(1.05);
      background: linear-gradient(180deg, #3a79f7 0%, #2a68e6 100%);
      cursor: pointer;
    }
    
    .button_submit:focus {
      box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
        0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
        0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
      outline: 0;
    }
    
    .button_submit:active {
      transform: scale(0.95);
    }

    @media (max-width: 640px) {
      .contentForm {
        width: 100%;
      }
    }

    .loader-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      z-index: 999;
      justify-content: center;
      align-items: center;
    }

    .loader-send {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      border-top: 4px solid #FFF;
      border-right: 4px solid transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    .loader-send::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border-left: 4px solid #FF3D00;
      border-bottom: 4px solid transparent;
      animation: rotation 0.5s linear infinite reverse;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 

    .modal {
      display: flex;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.4);
      animation: fadeIn 0.3s;
    }

    .modal-content {
      background-color: #fff;
      margin: auto;
      padding: 25px;
      border: none;
      width: auto;
      max-width: 500px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      color: #333;
      animation: scaleIn 0.3s;
    }

    .close {
      position: absolute;
      right: 15px;
      top: 10px;
      color: #aaa;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
    }

    .close:hover {
      color: #333;
    }

    .modal-button {
      padding: 10px 25px;
      font-size: 16px;
      cursor: pointer;
      background-color: #3085d6;
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .modal-button:hover {
      background-color: #2574a9;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes scaleIn {
      from {
        transform: scale(0.7);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;f([m()],p.prototype,"server",2);f([m()],p.prototype,"img",2);f([m()],p.prototype,"estilo",2);f([m()],p.prototype,"emailcolor",2);f([m()],p.prototype,"tname",2);f([m()],p.prototype,"tlname",2);f([m()],p.prototype,"temail",2);f([m()],p.prototype,"tphone",2);f([m()],p.prototype,"taddress",2);f([m()],p.prototype,"tmessage",2);f([m()],p.prototype,"tbutton",2);f([m({type:Boolean})],p.prototype,"showLoader",2);f([m({type:Boolean})],p.prototype,"showModal",2);f([m()],p.prototype,"to",1);f([m()],p.prototype,"services",1);f([m()],p.prototype,"isenglish",1);p=f([Nt("form-contact")],p);
