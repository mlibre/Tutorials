"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="CLI",l={unversionedId:"blockchain/Ethereum/CLI",id:"blockchain/Ethereum/CLI",title:"CLI",description:"it is not possible to run an execution client on its own anymore. After The Merge, both execution and consensus clients must be run together in order for a user to gain access to the Ethereum network.",source:"@site/docs/blockchain/Ethereum/CLI.md",sourceDirName:"blockchain/Ethereum",slug:"/blockchain/Ethereum/CLI",permalink:"/Tutorials/blockchain/Ethereum/CLI",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DEX from scratch",permalink:"/Tutorials/blockchain/Ethereum/Build a DEX from scratch/"},next:{title:"ERC-1155 From Scratch",permalink:"/Tutorials/blockchain/Ethereum/ERC1155/"}},p={},u=[{value:"Online APIs",id:"online-apis",level:2},{value:"getblock.io",id:"getblockio",level:3},{value:"Run your own node",id:"run-your-own-node",level:2},{value:"Geth",id:"geth",level:3},{value:"Installation",id:"installation",level:4},{value:"Features",id:"features",level:4},{value:"Starting",id:"starting",level:4},{value:"Importing accounts",id:"importing-accounts",level:4},{value:"Interacting With Geth",id:"interacting-with-geth",level:4},{value:"Block info",id:"block-info",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"CLI"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"it is not possible to run an execution client on its own anymore. After The Merge, ",(0,r.kt)("strong",{parentName:"p"},"both execution")," and ",(0,r.kt)("strong",{parentName:"p"},"consensus clients")," must be run together in order for a user to gain access to the Ethereum network.")),(0,r.kt)("p",null,"You can either run your ",(0,r.kt)("inlineCode",{parentName:"p"},"own")," ethereum ",(0,r.kt)("inlineCode",{parentName:"p"},"layers")," (node) or use ",(0,r.kt)("inlineCode",{parentName:"p"},"free providers"),"."),(0,r.kt)("h2",{id:"online-apis"},"Online APIs"),(0,r.kt)("h3",{id:"getblockio"},"getblock.io"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth attach https://eth.getblock.io/token/mainnet/\n")),(0,r.kt)("h2",{id:"run-your-own-node"},"Run your own node"),(0,r.kt)("h3",{id:"geth"},"Geth"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Official implementation of the Ethereum execution layer in ",(0,r.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/"},"Go"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Geth")," is a command-line interface for the Ethereum blockchain. It is a full node, meaning that it is capable of maintaining the entire blockchain, including all transactions and state. It is also capable of running a light client, which is a subset of the full node that only contains the state of the chain and the current block.  "),(0,r.kt)("h4",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Ubuntu\nsudo add-apt-repository -y ppa:ethereum/ethereum\n\nsudo pacman -Syyuu geth nodejs\nsudo npm install -g solc@latest\n")),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Running an Ethereum node"),(0,r.kt)("li",{parentName:"ol"},"Communicating with Ethereum network"),(0,r.kt)("li",{parentName:"ol"},"Sending transactions"),(0,r.kt)("li",{parentName:"ol"},"Interacting with Smart Contracts"),(0,r.kt)("li",{parentName:"ol"},"Creating accounts"),(0,r.kt)("li",{parentName:"ol"},"Wallet Functionality"),(0,r.kt)("li",{parentName:"ol"},"Mining and ...")),(0,r.kt)("h4",{id:"starting"},"Starting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'geth --goerli --ws --ws.api="eth,net,web3,personal,txpool,,admin" --ws.origins \'*\' --syncmode=light --http --http.port 3334 --http.corsdomain "*" --http.api="eth,net,web3,personal,txpool,admin" --allow-insecure-unlock\n# make sure you 30311 and 37608 ports are open\nsudo iptables -I INPUT -p tcp --dport 30311 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 30311 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 37608 -j ACCEPT\nsudo  iptables -I INPUT -p udp --dport 37608 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 8546 -j ACCEPT\nsudo  iptables -I INPUT -p udp --dport 8546 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 8551 -j ACCEPT\nsudo  iptables -I INPUT -p udp --dport 8551 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 3334 -j ACCEPT\nsudo  iptables -I INPUT -p udp --dport 3334 -j ACCEPT\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data folder: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.ethereum/"),".  "),(0,r.kt)("li",{parentName:"ul"},"IPC file is: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.ethereum/geth.ipc"),"."),(0,r.kt)("li",{parentName:"ul"},"Accounts and Private Keys are stored: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.ethereum/keystore/"),".  "),(0,r.kt)("li",{parentName:"ul"},"For Testnet it: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.ethereum/testnet/"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/.ethereum/rinkeby/\nrm PRIVATE_KEYS, Account\n")),(0,r.kt)("h4",{id:"importing-accounts"},"Importing accounts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth account import ~/Data/myself/cryptocurrency-info-recovery/metamask/mforgood/D8_private_key\n")),(0,r.kt)("h4",{id:"interacting-with-geth"},"Interacting With Geth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'geth attach http://127.0.0.1:3334\nweb3.personal.importRawKey("111111111PRIVATEKEY1111111111", "password")\npersonal.unlockAccount("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")\npersonal.listAccounts\neth.getBalance("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")\neth.getBalance(eth.accounts[1])\nnet.peerCount\neth.getCode("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC")\nvar voter = eth.contract([{"inputs":[{"internalType":"string","name":"option","type":"string"}],"name":"addOption","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOptions","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVotes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"options","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startVoting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"optionName","type":"string"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]).at("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC");\nvoter\nvoter.addOption("mlibre" , {from: "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C"})\n')),(0,r.kt)("h2",{id:"block-info"},"Block info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"geth console\n")))}m.isMDXComponent=!0}}]);