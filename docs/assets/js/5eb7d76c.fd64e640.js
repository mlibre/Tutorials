"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9375],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),u=p(n),s=a,k=u["".concat(l,".").concat(s)]||u[s]||d[s]||o;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var m={};for(var l in e)hasOwnProperty.call(e,l)&&(m[l]=e[l]);m.originalType=t,m[u]="string"==typeof t?t:a,i[1]=m;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},567:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8,tags:["Linux","Automation"]},i="Automation",m={unversionedId:"linux/automation",id:"linux/automation",title:"Automation",description:"|       Command        |               Short Description                |",source:"@site/docs/linux/automation.md",sourceDirName:"linux",slug:"/linux/automation",permalink:"/Wisdom-Hub/linux/automation",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"Automation",permalink:"/Wisdom-Hub/tags/automation"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,tags:["Linux","Automation"]},sidebar:"tutorialSidebar",previous:{title:"process",permalink:"/Wisdom-Hub/linux/processes"},next:{title:"multimedia",permalink:"/Wisdom-Hub/linux/multimedia"}},l={},p=[],c={toc:p},u="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automation"},"Automation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"at")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Schedule one-time tasks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"at 2:30pm tomorrow")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Schedule a task to run at 2:30 PM the next day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"at now + 1 hour")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Schedule a task to run in 1 hour from now")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"atq")),(0,a.kt)("td",{parentName:"tr",align:"center"},"List pending 'at' tasks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"crontab")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Schedule recurring tasks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"crontab -e")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Edit your user's crontab file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"crontab -l")),(0,a.kt)("td",{parentName:"tr",align:"center"},"List your user's crontab entries")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"crontab -r")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Remove your user's crontab")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"*/15 * * * *")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Run a command every 15 minutes using cron")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"@reboot")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Run a command at system startup time")))))}d.isMDXComponent=!0}}]);