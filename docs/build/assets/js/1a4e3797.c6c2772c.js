"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[920],{8374:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(7294),c=a(2263),r=a(7019),s=a(2859),l=a(9960),u=a(6550),o=a(412);const m=function(){const e=(0,u.k6)(),t=(0,u.TH)(),{siteConfig:{baseUrl:a}}=(0,c.Z)();return{searchValue:o.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var h=a(22),i=a(8202),p=a(2539),d=a(726),f=a(1073),E=a(311),_=a(1029);function g(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}const w="searchQueryInput_5r-w",S="searchResultItem_18XW",y="searchResultItemPath_TjRL",I="searchResultItemSummary_5qSX";function b(e){let{searchResult:{document:t,type:a,page:c,tokens:r,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:c.b).slice(),h=o?t.s:t.t;return u||m.push(c.t),n.createElement("article",{className:S},n.createElement("h2",null,n.createElement(l.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,p.C)(h,r):(0,d.o)(h,(0,f.m)(s,"t"),r,100)}})),m.length>0&&n.createElement("p",{className:y},m.join(" \u203a ")),o&&n.createElement("p",{className:I,dangerouslySetInnerHTML:{__html:(0,d.o)(t.t,(0,f.m)(s,"t"),r,100)}}))}const k=function(){const{siteConfig:{baseUrl:e}}=(0,c.Z)(),{searchValue:t,updateSearchPath:a}=m(),[l,u]=(0,n.useState)(t),[o,p]=(0,n.useState)(),[d,f]=(0,n.useState)(),S=(0,n.useMemo)((()=>l?g(_.Iz.search_results_for,{keyword:l}):_.Iz.search_the_documentation),[l]);(0,n.useEffect)((()=>{a(l),o&&(l?o(l,(e=>{f(e)})):f(void 0))}),[l,o]);const y=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==l&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,h.w)(e);p((()=>(0,i.v)(t,a,100)))}()}),[e]),n.createElement(r.Z,{title:S},n.createElement(s.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"})),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,S),n.createElement("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:y,value:l,autoComplete:"off",autoFocus:!0}),!o&&l&&n.createElement("div",null,n.createElement(E.Z,null)),d&&(d.length>0?n.createElement("p",null,g(1===d.length?_.Iz.count_documents_found:_.Iz.count_documents_found_plural,{count:d.length})):n.createElement("p",null,_.Iz.no_documents_were_found)),n.createElement("section",null,d&&d.map((e=>n.createElement(b,{key:e.document.i,searchResult:e}))))))}}}]);