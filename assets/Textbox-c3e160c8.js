import{S as ke,e as ge,s as we,m as C,F,o as V,g as o,N as M,h as p,G,j as ye,r as Q,u as y,v as R,w as g,k,H as U,C as ve,al as Te,t as Ee,x as Ce,a6 as O,E as T,R as S,an as E,ae as ze,p as b,b as He,B as L,Q as W,n as K,y as Ne,z as Be}from"./index-2519a27e.js";import{f as De}from"./Button-748313a7.js";import{B as Se}from"./BlockTitle-de7b2d6e.js";import{C as Ke,a as Le}from"./Copy-754acc5f.js";function je(l){let e;return{c(){e=Ee(l[3])},m(t,a){p(t,e,a)},p(t,a){a[0]&8&&Ce(e,t[3])},d(t){t&&k(e)}}}function qe(l){let e,t,a,n,u,s,d,c,r=l[6]&&l[10]&&P(l);return{c(){r&&r.c(),e=V(),t=C("textarea"),o(t,"data-testid","textbox"),o(t,"class","scroll-hide svelte-1f354aw"),o(t,"dir",a=l[11]?"rtl":"ltr"),o(t,"placeholder",l[2]),o(t,"rows",l[1]),t.disabled=l[5],t.autofocus=l[12],o(t,"style",n=l[13]?"text-align: "+l[13]:"")},m(f,_){r&&r.m(f,_),p(f,e,_),p(f,t,_),E(t,l[0]),l[36](t),s=!0,l[12]&&t.focus(),d||(c=[ze(u=l[19].call(null,t,l[0])),b(t,"input",l[35]),b(t,"keypress",l[18]),b(t,"blur",l[27]),b(t,"select",l[17]),b(t,"focus",l[28])],d=!0)},p(f,_){f[6]&&f[10]?r?(r.p(f,_),_[0]&1088&&g(r,1)):(r=P(f),r.c(),g(r,1),r.m(e.parentNode,e)):r&&(Q(),y(r,1,1,()=>{r=null}),R()),(!s||_[0]&2048&&a!==(a=f[11]?"rtl":"ltr"))&&o(t,"dir",a),(!s||_[0]&4)&&o(t,"placeholder",f[2]),(!s||_[0]&2)&&o(t,"rows",f[1]),(!s||_[0]&32)&&(t.disabled=f[5]),(!s||_[0]&4096)&&(t.autofocus=f[12]),(!s||_[0]&8192&&n!==(n=f[13]?"text-align: "+f[13]:""))&&o(t,"style",n),u&&He(u.update)&&_[0]&1&&u.update.call(null,f[0]),_[0]&1&&E(t,f[0])},i(f){s||(g(r),s=!0)},o(f){y(r),s=!1},d(f){f&&(k(e),k(t)),r&&r.d(f),l[36](null),d=!1,L(c)}}}function Fe(l){let e;function t(u,s){if(u[9]==="text")return Ye;if(u[9]==="password")return Ue;if(u[9]==="email")return Re}let a=t(l),n=a&&a(l);return{c(){n&&n.c(),e=W()},m(u,s){n&&n.m(u,s),p(u,e,s)},p(u,s){a===(a=t(u))&&n?n.p(u,s):(n&&n.d(1),n=a&&a(u),n&&(n.c(),n.m(e.parentNode,e)))},i:K,o:K,d(u){u&&k(e),n&&n.d(u)}}}function P(l){let e,t,a,n;const u=[Qe,Ge],s=[];function d(c,r){return c[15]?0:1}return e=d(l),t=s[e]=u[e](l),{c(){t.c(),a=W()},m(c,r){s[e].m(c,r),p(c,a,r),n=!0},p(c,r){let f=e;e=d(c),e===f?s[e].p(c,r):(Q(),y(s[f],1,1,()=>{s[f]=null}),R(),t=s[e],t?t.p(c,r):(t=s[e]=u[e](c),t.c()),g(t,1),t.m(a.parentNode,a))},i(c){n||(g(t),n=!0)},o(c){y(t),n=!1},d(c){c&&k(a),s[e].d(c)}}}function Ge(l){let e,t,a,n,u;return t=new Ke({}),{c(){e=C("button"),F(t.$$.fragment),o(e,"class","copy-text svelte-1f354aw")},m(s,d){p(s,e,d),G(t,e,null),a=!0,n||(u=b(e,"click",l[16]),n=!0)},p:K,i(s){a||(g(t.$$.fragment,s),a=!0)},o(s){y(t.$$.fragment,s),a=!1},d(s){s&&k(e),U(t),n=!1,u()}}}function Qe(l){let e,t,a,n;return t=new Le({}),{c(){e=C("button"),F(t.$$.fragment),o(e,"class","svelte-1f354aw")},m(u,s){p(u,e,s),G(t,e,null),n=!0},p:K,i(u){n||(g(t.$$.fragment,u),u&&(a||Ne(()=>{a=Be(e,De,{duration:300}),a.start()})),n=!0)},o(u){y(t.$$.fragment,u),n=!1},d(u){u&&k(e),U(t)}}}function Re(l){let e,t,a;return{c(){e=C("input"),o(e,"data-testid","textbox"),o(e,"type","email"),o(e,"class","scroll-hide svelte-1f354aw"),o(e,"placeholder",l[2]),e.disabled=l[5],e.autofocus=l[12],o(e,"autocomplete","email")},m(n,u){p(n,e,u),E(e,l[0]),l[34](e),l[12]&&e.focus(),t||(a=[b(e,"input",l[33]),b(e,"keypress",l[18]),b(e,"blur",l[25]),b(e,"select",l[17]),b(e,"focus",l[26])],t=!0)},p(n,u){u[0]&4&&o(e,"placeholder",n[2]),u[0]&32&&(e.disabled=n[5]),u[0]&4096&&(e.autofocus=n[12]),u[0]&1&&e.value!==n[0]&&E(e,n[0])},d(n){n&&k(e),l[34](null),t=!1,L(a)}}}function Ue(l){let e,t,a;return{c(){e=C("input"),o(e,"data-testid","password"),o(e,"type","password"),o(e,"class","scroll-hide svelte-1f354aw"),o(e,"placeholder",l[2]),e.disabled=l[5],e.autofocus=l[12],o(e,"autocomplete","")},m(n,u){p(n,e,u),E(e,l[0]),l[32](e),l[12]&&e.focus(),t||(a=[b(e,"input",l[31]),b(e,"keypress",l[18]),b(e,"blur",l[23]),b(e,"select",l[17]),b(e,"focus",l[24])],t=!0)},p(n,u){u[0]&4&&o(e,"placeholder",n[2]),u[0]&32&&(e.disabled=n[5]),u[0]&4096&&(e.autofocus=n[12]),u[0]&1&&e.value!==n[0]&&E(e,n[0])},d(n){n&&k(e),l[32](null),t=!1,L(a)}}}function Ye(l){let e,t,a,n,u;return{c(){e=C("input"),o(e,"data-testid","textbox"),o(e,"type","text"),o(e,"class","scroll-hide svelte-1f354aw"),o(e,"dir",t=l[11]?"rtl":"ltr"),o(e,"placeholder",l[2]),e.disabled=l[5],e.autofocus=l[12],o(e,"style",a=l[13]?"text-align: "+l[13]:"")},m(s,d){p(s,e,d),E(e,l[0]),l[30](e),l[12]&&e.focus(),n||(u=[b(e,"input",l[29]),b(e,"keypress",l[18]),b(e,"blur",l[21]),b(e,"select",l[17]),b(e,"focus",l[22])],n=!0)},p(s,d){d[0]&2048&&t!==(t=s[11]?"rtl":"ltr")&&o(e,"dir",t),d[0]&4&&o(e,"placeholder",s[2]),d[0]&32&&(e.disabled=s[5]),d[0]&4096&&(e.autofocus=s[12]),d[0]&8192&&a!==(a=s[13]?"text-align: "+s[13]:"")&&o(e,"style",a),d[0]&1&&e.value!==s[0]&&E(e,s[0])},d(s){s&&k(e),l[30](null),n=!1,L(u)}}}function Ae(l){let e,t,a,n,u,s;t=new Se({props:{show_label:l[6],info:l[4],$$slots:{default:[je]},$$scope:{ctx:l}}});const d=[Fe,qe],c=[];function r(f,_){return f[1]===1&&f[8]===1?0:1}return n=r(l),u=c[n]=d[n](l),{c(){e=C("label"),F(t.$$.fragment),a=V(),u.c(),o(e,"class","svelte-1f354aw"),M(e,"container",l[7])},m(f,_){p(f,e,_),G(t,e,null),ye(e,a),c[n].m(e,null),s=!0},p(f,_){const h={};_[0]&64&&(h.show_label=f[6]),_[0]&16&&(h.info=f[4]),_[0]&8|_[1]&2048&&(h.$$scope={dirty:_,ctx:f}),t.$set(h);let z=n;n=r(f),n===z?c[n].p(f,_):(Q(),y(c[z],1,1,()=>{c[z]=null}),R(),u=c[n],u?u.p(f,_):(u=c[n]=d[n](f),u.c()),g(u,1),u.m(e,null)),(!s||_[0]&128)&&M(e,"container",f[7])},i(f){s||(g(t.$$.fragment,f),g(u),s=!0)},o(f){y(t.$$.fragment,f),y(u),s=!1},d(f){f&&k(e),U(t),c[n].d()}}}function Ie(l,e,t){let{value:a=""}=e,{value_is_output:n=!1}=e,{lines:u=1}=e,{placeholder:s="Type here..."}=e,{label:d}=e,{info:c=void 0}=e,{disabled:r=!1}=e,{show_label:f=!0}=e,{container:_=!0}=e,{max_lines:h}=e,{type:z="text"}=e,{show_copy_button:Y=!1}=e,{rtl:A=!1}=e,{autofocus:I=!1}=e,{text_align:J=void 0}=e,m,j=!1,q;const H=ve();function X(){H("change",a),n||H("input")}Te(()=>{t(20,n=!1)});async function Z(){"clipboard"in navigator&&(await navigator.clipboard.writeText(a),x())}function x(){t(15,j=!0),q&&clearTimeout(q),q=setTimeout(()=>{t(15,j=!1)},1e3)}function $(i){const w=i.target,B=w.value,v=[w.selectionStart,w.selectionEnd];H("select",{value:B.substring(...v),index:v})}async function ee(i){await O(),(i.key==="Enter"&&i.shiftKey&&u>1||i.key==="Enter"&&!i.shiftKey&&u===1&&h>=1)&&(i.preventDefault(),H("submit"))}async function N(i){if(await O(),u===h||!_)return;let w=h===void 0?!1:h===void 0?21*11:21*(h+1),B=21*(u+1);const v=i.target;v.style.height="1px";let D;w&&v.scrollHeight>w?D=w:v.scrollHeight<B?D=B:D=v.scrollHeight,v.style.height=`${D}px`}function te(i,w){if(u!==h&&(i.style.overflowY="scroll",i.addEventListener("input",N),!!w.trim()))return N({target:i}),{destroy:()=>i.removeEventListener("input",N)}}function le(i){T.call(this,l,i)}function ne(i){T.call(this,l,i)}function ie(i){T.call(this,l,i)}function ue(i){T.call(this,l,i)}function ae(i){T.call(this,l,i)}function se(i){T.call(this,l,i)}function fe(i){T.call(this,l,i)}function oe(i){T.call(this,l,i)}function re(){a=this.value,t(0,a)}function _e(i){S[i?"unshift":"push"](()=>{m=i,t(14,m)})}function ce(){a=this.value,t(0,a)}function de(i){S[i?"unshift":"push"](()=>{m=i,t(14,m)})}function be(){a=this.value,t(0,a)}function he(i){S[i?"unshift":"push"](()=>{m=i,t(14,m)})}function me(){a=this.value,t(0,a)}function pe(i){S[i?"unshift":"push"](()=>{m=i,t(14,m)})}return l.$$set=i=>{"value"in i&&t(0,a=i.value),"value_is_output"in i&&t(20,n=i.value_is_output),"lines"in i&&t(1,u=i.lines),"placeholder"in i&&t(2,s=i.placeholder),"label"in i&&t(3,d=i.label),"info"in i&&t(4,c=i.info),"disabled"in i&&t(5,r=i.disabled),"show_label"in i&&t(6,f=i.show_label),"container"in i&&t(7,_=i.container),"max_lines"in i&&t(8,h=i.max_lines),"type"in i&&t(9,z=i.type),"show_copy_button"in i&&t(10,Y=i.show_copy_button),"rtl"in i&&t(11,A=i.rtl),"autofocus"in i&&t(12,I=i.autofocus),"text_align"in i&&t(13,J=i.text_align)},l.$$.update=()=>{l.$$.dirty[0]&1&&a===null&&t(0,a=""),l.$$.dirty[0]&16643&&m&&u!==h&&N({target:m}),l.$$.dirty[0]&1&&X()},[a,u,s,d,c,r,f,_,h,z,Y,A,I,J,m,j,Z,$,ee,te,n,le,ne,ie,ue,ae,se,fe,oe,re,_e,ce,de,be,he,me,pe]}class Ve extends ke{constructor(e){super(),ge(this,e,Ie,Ae,we,{value:0,value_is_output:20,lines:1,placeholder:2,label:3,info:4,disabled:5,show_label:6,container:7,max_lines:8,type:9,show_copy_button:10,rtl:11,autofocus:12,text_align:13},null,[-1,-1])}}export{Ve as T};
//# sourceMappingURL=Textbox-c3e160c8.js.map
