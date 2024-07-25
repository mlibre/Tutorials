"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8028],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>b});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=l.createContext({}),m=function(e){var a=l.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=m(e.components);return l.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(t),p=n,b=c["".concat(s,".").concat(p)]||c[p]||u[p]||r;return t?l.createElement(b,o(o({ref:a},d),{},{components:t})):l.createElement(b,o({ref:a},d))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<r;m++)o[m]=t[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7147:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=t(7462),n=(t(7294),t(3905));const r={sidebar_position:4,tags:["Linux","ollama","offline","ai"]},o="Ollama",i={unversionedId:"ai/ollama",id:"ai/ollama",title:"Ollama",description:"Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine.",source:"@site/docs/ai/ollama.md",sourceDirName:"ai",slug:"/ai/ollama",permalink:"/Wisdom-Hub/ai/ollama",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"ollama",permalink:"/Wisdom-Hub/tags/ollama"},{label:"offline",permalink:"/Wisdom-Hub/tags/offline"},{label:"ai",permalink:"/Wisdom-Hub/tags/ai"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["Linux","ollama","offline","ai"]},sidebar:"tutorialSidebar",previous:{title:"LobeChat",permalink:"/Wisdom-Hub/ai/lobe-chat"},next:{title:"Vscode",permalink:"/Wisdom-Hub/vscode"}},s={},m=[{value:"Install",id:"install",level:2},{value:"Files",id:"files",level:2},{value:"Costomizing Model",id:"costomizing-model",level:2},{value:"Embedding models",id:"embedding-models",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Reference",id:"reference",level:2}],d={toc:m},c="wrapper";function u(e){let{components:a,...r}=e;return(0,n.kt)(c,(0,l.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ollama"},"Ollama"),(0,n.kt)("p",null,"Ollama is an open-source AI model server. It can get and run large language models (LLMs) locally on your machine."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -fsSL https://ollama.com/install.sh | sh\n\n# Run a model\nollama run llama3.1:8b\n\n# List models\nollama list\n\n# Model Info\nollama show llama3.1:8b\n#   Model\n#         arch                    llama\n#         parameters              8.0B\n#         quantization            Q4_0\n#         context length          131072\n#         embedding length        4096\n\n#   Parameters\n#         stop    "<|start_header_id|>"\n#         stop    "<|end_header_id|>"\n#         stop    "<|eot_id|>"\n')),(0,n.kt)("h2",{id:"files"},"Files"),(0,n.kt)("p",null,"Ollama files in Linux are located here:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/home/mlibre/.ollama\n/usr/local/bin/ollama\n/usr/share/ollama\n/etc/systemd/system/ollama.service\n/etc/systemd/system/default.target.wants/ollama.service\n")),(0,n.kt)("h2",{id:"costomizing-model"},"Costomizing Model"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'nano Modelfile\n\nFROM llama3.1:8b\n\nSYSTEM """\nYou are Mario from Super Mario Bros. Answer as Mario, only. And Always start your answer with HAYAYAYA\n"""\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ollama create mario -f ./Modelfile\nollama run mario\n")),(0,n.kt)("h2",{id:"embedding-models"},"Embedding models"),(0,n.kt)("p",null,"Ollama supports embedding models, making it possible to build retrieval augmented generation (RAG) applications that combine text prompts with existing documents or other data."),(0,n.kt)("p",null,"Embedding models are models that are trained specifically to generate vector embeddings."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt text",src:t(791).Z,width:"1154",height:"486"})),(0,n.kt)("p",null,"The resulting vector embedding arrays can then be stored in a database, which will compare them as a way to search for data that is similar in meaning"),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ollama pull mxbai-embed-large\n")),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:11434/api/embeddings -d \'{\n  "model": "mxbai-embed-large",\n  "prompt": "Llamas are members of the camelid family"\n}\'\n')),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ollama.com/"},"https://ollama.com/"))))}u.isMDXComponent=!0},791:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/embedding-models-369d765c607c0db21a32b89b63c97549.png"}}]);