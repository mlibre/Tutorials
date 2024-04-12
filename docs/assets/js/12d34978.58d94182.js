"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,h=u["".concat(p,".").concat(g)]||u[g]||m[g]||i;return t?a.createElement(h,l(l({ref:n},s),{},{components:t})):a.createElement(h,l({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3,tags:["Linux","langchain","ai"]},l="Langchain",o={unversionedId:"ai/langchain",id:"ai/langchain",title:"Langchain",description:"LangChain is a framework for developing applications powered by language models",source:"@site/docs/ai/langchain.md",sourceDirName:"ai",slug:"/ai/langchain",permalink:"/Wisdom-Hub/ai/langchain",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"langchain",permalink:"/Wisdom-Hub/tags/langchain"},{label:"ai",permalink:"/Wisdom-Hub/tags/ai"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Linux","langchain","ai"]},sidebar:"tutorialSidebar",previous:{title:"Prompt",permalink:"/Wisdom-Hub/ai/prompt"},next:{title:"Vscode",permalink:"/Wisdom-Hub/vscode"}},p={},c=[{value:"Install",id:"install",level:2},{value:"Simple huggingface example",id:"simple-huggingface-example",level:2},{value:"References",id:"references",level:2}],s={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"langchain"},"Langchain"),(0,r.kt)("p",null,"LangChain is a framework for developing applications powered by language models"),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv .venv\nsource .venv/bin/activate\n\npip install --upgrade pip\npip install langchain\npip install langchain[llms]\npip install langchain[all]\npip install huggingface_hub\n")),(0,r.kt)("h2",{id:"simple-huggingface-example"},"Simple huggingface example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.llms import HuggingFaceHub\nfrom langchain import PromptTemplate, LLMChain\nimport os\n\nos.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_n"\n\ntemplate = """Question: {question}\n\nAnswer: Let\'s think step by step."""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n\nrepo_id = "tiiuae/falcon-40b"\nllm = HuggingFaceHub(\n    repo_id=repo_id, model_kwargs={"temperature": 0.5, "max_length": 64}\n)\n\nquestion = "Who won the FIFA World Cup in the year 1994? "\n\nllm_chain = LLMChain(prompt=prompt, llm=llm)\nprint(llm_chain.run(question))\nprint("done")\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/get_started/introduction.html"},"https://python.langchain.com/docs/get_started/introduction.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/langchain-ai/langchain"},"https://github.com/langchain-ai/langchain"))))}m.isMDXComponent=!0}}]);