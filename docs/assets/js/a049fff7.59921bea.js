"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:16,tags:["Linux","toold"]},l="Awesome Tools",i={unversionedId:"linux/tools",id:"linux/tools",title:"Awesome Tools",description:"Shell",source:"@site/docs/linux/tools.md",sourceDirName:"linux",slug:"/linux/tools",permalink:"/Tutorials/linux/tools",draft:!1,tags:[{label:"Linux",permalink:"/Tutorials/tags/linux"},{label:"toold",permalink:"/Tutorials/tags/toold"}],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,tags:["Linux","toold"]},sidebar:"tutorialSidebar",previous:{title:"GRUB",permalink:"/Tutorials/linux/grub"},next:{title:"Network",permalink:"/Tutorials/network/"}},s={},p=[{value:"Shell",id:"shell",level:2},{value:"Bash It",id:"bash-it",level:3},{value:"System monitoring",id:"system-monitoring",level:2},{value:"htop",id:"htop",level:3},{value:"prettyping",id:"prettyping",level:3},{value:"Network Monitoring",id:"network-monitoring",level:2},{value:"bmon",id:"bmon",level:3},{value:"Files",id:"files",level:2},{value:"bat",id:"bat",level:3},{value:"ccat",id:"ccat",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"awesome-tools"},"Awesome Tools"),(0,a.kt)("h2",{id:"shell"},"Shell"),(0,a.kt)("h3",{id:"bash-it"},"Bash It"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it\n~/.bash_it/install.sh\n\nsource ~/.bashrc\n\nbashit\nbash-it show aliases\nbash-it show plugins\nbash-it show completions\n\nbash-it enable completion all\nbash-it update\nbash-it reload\n\nls ~/.bash_it/themes/\n\n\ncd $BASH_IT\n./uninstall.sh\n")),(0,a.kt)("h2",{id:"system-monitoring"},"System monitoring"),(0,a.kt)("h3",{id:"htop"},"htop"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"htop\n")),(0,a.kt)("h3",{id:"prettyping"},"prettyping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S prettyping\nprettyping\n")),(0,a.kt)("h2",{id:"network-monitoring"},"Network Monitoring"),(0,a.kt)("h3",{id:"bmon"},"bmon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S bmon\nbmon\n")),(0,a.kt)("h2",{id:"files"},"Files"),(0,a.kt)("h3",{id:"bat"},"bat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S bat\nbat .ssh/id_rsa.pub \n")),(0,a.kt)("h3",{id:"ccat"},"ccat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pamac isntall ccat\nccat file.txt\n")))}m.isMDXComponent=!0}}]);