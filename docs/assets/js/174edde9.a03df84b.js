"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9029],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,d=c["".concat(s,".").concat(u)]||c[u]||h[u]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="How to transfer ERC-20 tokens to the Polygon (Matic) chain",l={unversionedId:"blockchain/docusaurus/docs/Polygon/PoS Bridge/erc20-pos-bridge",id:"blockchain/docusaurus/docs/Polygon/PoS Bridge/erc20-pos-bridge",title:"How to transfer ERC-20 tokens to the Polygon (Matic) chain",description:"In this tutorial, we will go through the process of transferring an ERC-20 custom token to the Polygon (Matic) chain, using the Polygon PoS SDK.",source:"@site/docs/blockchain/docusaurus/docs/Polygon/PoS Bridge/erc20-pos-bridge.md",sourceDirName:"blockchain/docusaurus/docs/Polygon/PoS Bridge",slug:"/blockchain/docusaurus/docs/Polygon/PoS Bridge/erc20-pos-bridge",permalink:"/Tutorials/blockchain/docusaurus/docs/Polygon/PoS Bridge/erc20-pos-bridge",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to transfer ERC-1155 tokens to the Polygon (Matic) chain",permalink:"/Tutorials/blockchain/docusaurus/docs/Polygon/PoS Bridge/erc1155-pos-bridge"},next:{title:"How to transfer ERC-721 tokens to the Polygon (Matic) chain",permalink:"/Tutorials/blockchain/docusaurus/docs/Polygon/PoS Bridge/erc721-pos-bridge"}},s={},p=[{value:"Table of content",id:"table-of-content",level:2},{value:"Goerli",id:"goerli",level:2},{value:"Mumbai",id:"mumbai",level:2},{value:"Providers",id:"providers",level:2},{value:"Goerli",id:"goerli-1",level:3},{value:"Mumbai",id:"mumbai-1",level:3},{value:"Installing helpers",id:"installing-helpers",level:2},{value:"Approve",id:"approve",level:2},{value:"Deposit",id:"deposit",level:2},{value:"Not able to run main.js",id:"not-able-to-run-mainjs",level:2},{value:"Sync &amp; Confirmation",id:"sync--confirmation",level:2}],m={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-transfer-erc-20-tokens-to-the-polygon-matic-chain"},"How to transfer ERC-20 tokens to the Polygon (Matic) chain"),(0,r.kt)("p",null,"In this tutorial, we will go through the process of transferring an ERC-20 custom token to the Polygon (Matic) chain, using the Polygon PoS SDK.",(0,r.kt)("br",{parentName:"p"}),"\n","We will use the ",(0,r.kt)("strong",{parentName:"p"},"Ethereum Goerli")," testnet and ",(0,r.kt)("strong",{parentName:"p"},"Polygon Mumbai")," testnet, and a custom ERC-20 token that has been deployed and had its source code verified on Etherscan. There is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Ethereum/ERC20"},"a step-by-step guide")," written by the author of this tutorial.",(0,r.kt)("br",{parentName:"p"}),"\n","The Polygon Proof of Stake (PoS) Bridge is a mechanism and set of contracts on both Ethereum and Polygon that will help us in moving assets between the ",(0,r.kt)("strong",{parentName:"p"},"root")," chain and ",(0,r.kt)("strong",{parentName:"p"},"child")," chain.\nIn contrast with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.matic.network/docs/develop/ethereum-matic/plasma/getting-started/"},"Plasma Bridge"),", the Polygon PoS bridge is much faster and makes it a better option for dApps that are looking for faster withdrawals."),(0,r.kt)("p",null,"This article was published ",(0,r.kt)("a",{parentName:"p",href:"https://learn.figment.io/tutorials/transferring-tokens-with-polygon-pos-bridge"},"here")),(0,r.kt)("h2",{id:"table-of-content"},"Table of content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"Getting started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Setting-up-Metamask"},"Setting up Metamask"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#goerli"},"Goerli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mumbai"},"Mumbai")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mlb-erc20-contract"},"MLB ERC20 Contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mapping"},"Mapping")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transfer-using-sdk"},"Transfer using SDK"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#providers"},"Providers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installing-helpers"},"Installing helpers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#approve"},"Approve")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deposit"},"Deposit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Not-able-to-run-main.js"},"Not able to run main.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sync--confirmation"},"Sync & Confirmation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transfer-using-web-ui"},"Transfer using Web UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,r.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In this tutorial, We will use Metamask as our wallet. If you are not familiar with it or don't know how to use it, check ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Af_lQ1zUnoM"},"this video on youtube"),".",(0,r.kt)("br",{parentName:"p"}),"\n","When you are creating a Metamask wallet, it gives you a Secret Recovery Phrase (Seed). With this seed, you can recover ",(0,r.kt)("strong",{parentName:"p"},"all")," of your accounts in Metamask.",(0,r.kt)("br",{parentName:"p"}),"\n","We will use this seed later in this tutorial. here is an article about ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase"},"How to reveal your Secret Recovery Phrase"),"  "),(0,r.kt)("h1",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/"},(0,r.kt)("strong",{parentName:"a"},"Metamask"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},(0,r.kt)("strong",{parentName:"a"},"Nodejs"))," v14.17.6 LTS or higher installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://geth.ethereum.org/docs/install-and-build/installing-geth"},(0,r.kt)("strong",{parentName:"a"},"Geth")),": version 1.10.8")),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In order to transfer assets between ",(0,r.kt)("strong",{parentName:"li"},"root")," (Ethereum) and ",(0,r.kt)("strong",{parentName:"li"},"child")," (Polygon) contracts, they should be mapped first. This is a process by which an existing token contract is mirrored between the root and child chain.",(0,r.kt)("br",{parentName:"li"}),"If the token you intend to transfer already exists on ",(0,r.kt)("strong",{parentName:"li"},"Polygon"),", this means you don't need to perform the ",(0,r.kt)("strong",{parentName:"li"},"mapping"),".",(0,r.kt)("br",{parentName:"li"}),"Check the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.matic.network/docs/develop/ethereum-matic/submit-mapping-request"},"official docs")," to learn about the mapping process."),(0,r.kt)("li",{parentName:"ol"},"Now that contracts are mapped. it's time to transfer the assets. We can either use the ",(0,r.kt)("a",{parentName:"li",href:"https://wallet.polygon.technology/login/"},"Polygon Wallet UI")," or the ",(0,r.kt)("a",{parentName:"li",href:"https://polygon.technology/polygon-sdk/"},"Polygon SDK"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We use the SDK for our ERC-20 token that is deployed on the  ",(0,r.kt)("strong",{parentName:"li"},"Goerli")," testnet"),(0,r.kt)("li",{parentName:"ul"},"We use the ",(0,r.kt)("a",{parentName:"li",href:"https://wallet.polygon.technology/login/"},"Polygon Wallet UI")," for tokens that are deployed on Ethereum mainnet")),(0,r.kt)("h1",{id:"setting-up-metamask"},"Setting up Metamask"),(0,r.kt)("p",null,"Before we get into the details of moving the tokens, let's set up ",(0,r.kt)("strong",{parentName:"p"},"Metamask")," so we can check our ",(0,r.kt)("strong",{parentName:"p"},"ETH"),", ",(0,r.kt)("strong",{parentName:"p"},"MATIC"),", and ",(0,r.kt)("strong",{parentName:"p"},"MLB")," token balances."),(0,r.kt)("h2",{id:"goerli"},"Goerli"),(0,r.kt)("p",null,"The Goerli testnet is pre-configured in Metamask's list of available networks. You can select it from the dropdown list at the top of the Metamask interface.  "),(0,r.kt)("p",null,"You can fund your account with testnet Ether from the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.goerli.mudit.blog/"},"Goerli Authenticated faucet")," as long as you are willing to make a post on a valid Twitter or Facebook account. If this is not something you wish to do, there is an alternative faucet at ",(0,r.kt)("a",{parentName:"p",href:"https://goerli-faucet.slock.it/"},"goerli-faucet.slock.it")),(0,r.kt)("h2",{id:"mumbai"},"Mumbai"),(0,r.kt)("p",null,"You can either open ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/"},"mumbai.polygonscan.com"),' and click on "Add Mumbai Network" in the footer at the bottom of the page ',(0,r.kt)("em",{parentName:"p"},"or")," add it manually using the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Name:")," Polygon Mumbai testnet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RPC URL:")," ",(0,r.kt)("a",{parentName:"li",href:"https://rpc-mumbai.maticvigil.com/"},"https://rpc-mumbai.maticvigil.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain ID:")," 80001"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currency Symbol:")," MATIC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Explorer URL:")," ",(0,r.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/"},"https://mumbai.polygonscan.com/"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mumbai",src:a(5710).Z,width:"356",height:"595"})),(0,r.kt)("p",null,"You can fund your ",(0,r.kt)("strong",{parentName:"p"},"Mumbai")," account with MATIC ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology"},"here")),(0,r.kt)("h1",{id:"mlb-erc20-contract"},"MLB ERC20 Contract"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MLB")," is the symbol of the token (deployed on the Goerli testnet) that we'll map and transfer, which is a standard OpenZeppelin ERC-20 token.",(0,r.kt)("br",{parentName:"p"}),"\n","You can find a step by step guide to creating an ERC-20 token ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Ethereum/ERC20"},"here"),"  "),(0,r.kt)("p",null,"Token info:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Name: Mlibre\nSymbol: MLB\nOwner: 0xD8f24D419153E5D03d614C5155f900f4B5C8A65C\nContract Address: 0xd2d40892B3EebdA85e4A2742A97CA787559BF92f\nGoerli etherscan: https://goerli.etherscan.io/address/0xd2d40892B3EebdA85e4A2742A97CA787559BF92f\n")),(0,r.kt)("p",null,"Gather this information for the token you intend to map."),(0,r.kt)("h1",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"Now that everything is ready. Let's map our ",(0,r.kt)("inlineCode",{parentName:"p"},"MLB")," token."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://mapper.matic.today/map/"},"mapper.matic.today")," and complete the form")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure the token you want to map has had its ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/verifyContract"},"contract verified")," on Etherscan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Gorli Testnet -> Mumbai testnet")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"map image",src:a(9253).Z,width:"1206",height:"795"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At this time the mapping process is not immediate, it can take up to 3 days to be confirmed.  "))),(0,r.kt)("p",null,"Then open ",(0,r.kt)("a",{parentName:"p",href:"https://mapper.matic.today/"},"mapper.matic.today"),", and enter the contract address to see if it has been added."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mapped image",src:a(5880).Z,width:"1210",height:"415"})),(0,r.kt)("p",null,"As you may notice, the contract address in Goerli and Mumbai are not the same. Let's remember to add it to Metamask so it shows up when we are connected to Mumbai as well."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Metamask"),(0,r.kt)("li",{parentName:"ol"},"Select the Mumbai testnet from the list of available networks"),(0,r.kt)("li",{parentName:"ol"},"Add Token"),(0,r.kt)("li",{parentName:"ol"},"Paste the contract address there (",(0,r.kt)("inlineCode",{parentName:"li"},"0x0F6886ca4476D3aAb965F2D1b9185F2dd857E653"),")")),(0,r.kt)("p",null,"Now it should be something like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metamask after map",src:a(9737).Z,width:"346",height:"580"})),(0,r.kt)("p",null,"We don't yet have any MLB tokens in Mumbai. We can transfer some across the bridge and check our Metamask balance again afterward."),(0,r.kt)("h1",{id:"transfer-using-sdk"},"Transfer using SDK"),(0,r.kt)("p",null,"Let's take a look at the workflow for transferring tokens with the SDK:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Approve:")," The owner of the token has to approve the ",(0,r.kt)("strong",{parentName:"li"},"Ethereum Predicate Contract")," which will ",(0,r.kt)("strong",{parentName:"li"},"lock")," the amount of token they want to transfer to Polygon."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deposit:")," Then a function has to be called on the ",(0,r.kt)("inlineCode",{parentName:"li"},"RootChainManger")," contract which will trigger the ",(0,r.kt)("inlineCode",{parentName:"li"},"ChildChainManager")," contract on the Mumbai testnet. The ",(0,r.kt)("inlineCode",{parentName:"li"},"ChildChainManager")," contract will then call the ",(0,r.kt)("strong",{parentName:"li"},"deposit")," function of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Child token")," contract.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("strong",{parentName:"li"},"Child")," contract is the copy of the ",(0,r.kt)("strong",{parentName:"li"},"Goerli")," token contract in ",(0,r.kt)("strong",{parentName:"li"},"Mumbai"),".  ")),(0,r.kt)("h2",{id:"providers"},"Providers"),(0,r.kt)("p",null,"To Interact with ",(0,r.kt)("strong",{parentName:"p"},"Goerli")," and ",(0,r.kt)("strong",{parentName:"p"},"Mumbai")," we can either run a local node (which is slightly more difficult) or use the RPC endpoints of infrastructure providers like DataHub or Infura (which is much simpler)."),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"Goerli"),", we will run a local Geth node. You can also use ",(0,r.kt)("a",{parentName:"p",href:"https://infura.io"},"infura"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For ",(0,r.kt)("strong",{parentName:"p"},"Mumbai"),", we will use ",(0,r.kt)("a",{parentName:"p",href:"https://datahub.figment.io/"},"DataHub")),(0,r.kt)("h3",{id:"goerli-1"},"Goerli"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/install-and-build/installing-geth"},"Install the Geth client"),", if you have not installed it already, then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'geth --goerli --http --syncmode=light --http.api="eth,net,web3,personal,txpool" --allow-insecure-unlock  --http.corsdomain "*"\n')),(0,r.kt)("p",null,"The default endpoint is ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8545"),".",(0,r.kt)("br",{parentName:"p"}),"\n","You can get attached and see if everything is fine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'geth attach http://127.0.0.1:8545\neth.getBalance("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")\n')),(0,r.kt)("h3",{id:"mumbai-1"},"Mumbai"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign up for a ",(0,r.kt)("a",{parentName:"li",href:"https://datahub.figment.io/"},"DataHub")),(0,r.kt)("li",{parentName:"ul"},"Choose the Polygon service from the ",(0,r.kt)("a",{parentName:"li",href:"https://datahub.figment.io/services/Polygon/"},"DataHub Services Dashboard")),(0,r.kt)("li",{parentName:"ul"},"Scroll down to see the Polygon endpoint URLs"),(0,r.kt)("li",{parentName:"ul"},"Copy the Mumbai Testnet JSONRPC URL. It is probably located ",(0,r.kt)("a",{parentName:"li",href:"https://datahub.figment.io/services/Polygon/matic-mumbai--jsonrpc"},"here")),(0,r.kt)("li",{parentName:"ul"},"Form the URL like so, replacing the text YOUR_API_KEY with the API key you got from DataHub:\n",(0,r.kt)("inlineCode",{parentName:"li"},"https://matic-mumbai--jsonrpc.datahub.figment.io/apikey/YOUR_API_KEY/"))),(0,r.kt)("h2",{id:"installing-helpers"},"Installing helpers"),(0,r.kt)("p",null,"Now that we have the information we need and the other important pieces in place, we can write some useful code using the maticjs client library and the HDWalletProvider class from Truffle.",(0,r.kt)("br",{parentName:"p"}),"\n","We will need to install both of these packages on the commandline with the node package manager. Use these commands to install the packages and save them in the project manifest, ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"npm install @maticnetwork/maticjs --save\nnpm install @truffle/hdwallet-provider --save\n")),(0,r.kt)("h2",{id:"approve"},"Approve"),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"approve")," the ",(0,r.kt)("strong",{parentName:"p"},"Ethereum Predicate Contract")," we just need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"approveERC20ForDeposit")," function. The code for this is straightforward:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await maticPOSClient.approveERC20ForDeposit(rootToken, amount.toString(), {\n from,\n gasPrice: "10000000000"\n});\n')),(0,r.kt)("h2",{id:"deposit"},"Deposit"),(0,r.kt)("p",null,"Next, we would call the ",(0,r.kt)("inlineCode",{parentName:"p"},"depositERC20ForUser")," function of the ",(0,r.kt)("strong",{parentName:"p"},"Ethereum Predicate Contract"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await maticPOSClient.depositERC20ForUser(rootToken, from, amount.toString(), {\n from,\n gasPrice: "10000000000",\n});\n')),(0,r.kt)("p",null,"To bring it all together in JavaScript that can be executed either in a web browser or on the commandline, we can add some constants and use an external file to hold the sensitive API keys and wallet seed phrases. This is a complete example of how to use maticjs and the HDWalletProvider class to communicate with a deployed smart contract on Polygon. Use the following code as a guide for building your own solution!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// main.js\nimport { HDWalletProvider } from \'@truffle/hdwallet-provider\';\nimport { MaticPOSClient } from \'@maticnetwork/maticjs\');\nimport { secrets } from \'./secrets.json\'\n\nconst from = "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C";\nconst rootToken = "0xd2d40892B3EebdA85e4A2742A97CA787559BF92f";\nconst amount = 999 * (10 ** 18);\n\nconst parentProvider = new HDWalletProvider(secrets.seed, \'http://127.0.0.1:8545\'); // Local Geth client address\nconst maticProvider = new HDWalletProvider(secrets.seed, secrets.mumbai)  // DataHub Mumbai Testnet JSONRPC URL\n\nconst maticPOSClient = new MaticPOSClient({\n  network: "testnet",\n  version: "mumbai",\n  parentProvider,\n  maticProvider,\n});\n\n(async () => {\n  try {\n    let result = await maticPOSClient.approveERC20ForDeposit(\n      rootToken,\n      amount.toString(),\n      {\n        from,\n        gasPrice: "10000000000",\n      }\n    );\n    let result_2 = await maticPOSClient.depositERC20ForUser(\n      rootToken,\n      from,\n      amount.toString(),\n      {\n        from,\n        gasPrice: "10000000000",\n      }\n    );\n    console.log(result);\n    console.log(result_2);\n  } catch (error) {\n    console.log(error);\n  }\n})();\n')),(0,r.kt)("p",null,"The expected output for ",(0,r.kt)("strong",{parentName:"p"},"approveERC20ForDeposit")," is something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  blockHash: '0x9616fab5f19fb93580fe5dc71da9062168f1f1f5a4a5297094cad0b2b3e2dceb',\n  blockNumber: 5513011,\n  contractAddress: null,\n  cumulativeGasUsed: 46263,\n  effectiveGasPrice: '0x2540be400',\n  from: '0xd8f24d419153e5d03d614c5155f900f4b5c8a65c',\n  gasUsed: 46263,\n  logsBloom: '0x0000000000000000000000000000000000000000000000800000000000000000000080000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000010000000000000000000000',\n  status: true,\n  to: '0xd2d40892b3eebda85e4a2742a97ca787559bf92f',\n  transactionHash: '0x3aba80ae8938ed1abbb18560cb061f4915d202a731e5e2ec443aded67169e28a',\n  transactionIndex: 0,\n  type: '0x0',\n  events: {\n    Approval: {\n      address: '0xd2d40892B3EebdA85e4A2742A97CA787559BF92f',\n      blockNumber: 5513011,\n      transactionHash: '0x3aba80ae8938ed1abbb18560cb061f4915d202a731e5e2ec443aded67169e28a',\n      transactionIndex: 0,\n      blockHash: '0x9616fab5f19fb93580fe5dc71da9062168f1f1f5a4a5297094cad0b2b3e2dceb',\n      logIndex: 0,\n      removed: false,\n      id: 'log_0e714fbf',\n      returnValues: [Result],\n      event: 'Approval',\n      signature: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',\n      raw: [Object]\n    }\n  }\n}\n")),(0,r.kt)("p",null,"And for ",(0,r.kt)("strong",{parentName:"p"},"depositERC20ForUser"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  blockHash: '0x622989e0d1097ea59c557663bf4fa19b3064cfb858706021a6eecb11bb1c19b2',\n  blockNumber: 5513012,\n  contractAddress: null,\n  cumulativeGasUsed: 89761,\n  effectiveGasPrice: '0x2540be400',\n  from: '0xd8f24d419153e5d03d614c5155f900f4b5c8a65c',\n  gasUsed: 89761,\n  logsBloom: '0x0200000000000000000000000000000800000040000000800000000000000000000080000000000000040008000000000000200000000000008000100020000000000000000000001000000a000000000000000000000100000000000000000000000000000008000000000400000014000000000000000000000010200000000000000000000000000000000200000000000000000000000000020000080000020000000200008000000000000000040000000000000800000000000000000000000002000000000000000000000002000000140000000000200000000000000010000000000000000000000000000000000000010000000000000000000000',\n  status: true,\n  to: '0xbbd7cbfa79faee899eaf900f13c9065bf03b1a74',\n  transactionHash: '0x58a7f01edc2b9772f87fca57789f0912152615813e6231ab137e4759c8f6415f',\n  transactionIndex: 0,\n  type: '0x0',\n  events: {\n    '0': {\n      address: '0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34',\n      blockNumber: 5513012,\n      transactionHash: '0x58a7f01edc2b9772f87fca57789f0912152615813e6231ab137e4759c8f6415f',\n      transactionIndex: 0,\n      blockHash: '0x622989e0d1097ea59c557663bf4fa19b3064cfb858706021a6eecb11bb1c19b2',\n      logIndex: 0,\n      removed: false,\n      id: 'log_20b9b372',\n      returnValues: Result {},\n      event: undefined,\n      signature: null,\n      raw: [Object]\n    },\n    '1': {\n      .\n      .\n      .\n")),(0,r.kt)("p",null,"Just a few things to mention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secrets.json"),": contains ",(0,r.kt)("strong",{parentName:"li"},"Seed"),", ",(0,r.kt)("strong",{parentName:"li"},"privateKey")," of the address (0xd8f2). And ",(0,r.kt)("strong",{parentName:"li"},"Mumbai API URL"),". ex:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "privateKey": "This should be the private key of an account specifically made for use on the Goerli testnet",\n "seed": "This should be a Secret Recovery Phrase from Metamask and ONLY used on Ethereum testnets",\n "mumbai": "https://matic-mumbai--jsonrpc.datahub.figment.io/apikey/YOUR_API_KEY/"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@truffle/hdwallet-provider"),": Handles signing transactions process"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from"),": The Goerli address we created token and want to send transactions with"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rootToken"),": The ERC-20 contract address on the Goerli testnet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": the amount of ",(0,r.kt)("strong",{parentName:"li"},"token")," we want to transfer. By default, the ",(0,r.kt)("strong",{parentName:"li"},"open zeppelin")," V4 ",(0,r.kt)("inlineCode",{parentName:"li"},"ERC20")," contract uses a value of ",(0,r.kt)("strong",{parentName:"li"},"18")," for ",(0,r.kt)("strong",{parentName:"li"},"decimals"),". That is why ",(0,r.kt)("strong",{parentName:"li"},"999")," is multiplied by ",(0,r.kt)("strong",{parentName:"li"},"(10")," 18)**")),(0,r.kt)("h2",{id:"not-able-to-run-mainjs"},"Not able to run main.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are facing an error message like")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Error: execution reverted: ERC20: approve to the zero address\n")),(0,r.kt)("p",null,"The contract probably has not been mapped yet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you have not run Geth, you will get an error like this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"(node:3962) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)\n(node:3962) [DEP0018] DeprecationWarning: Unhandled terminate the Node.js process with a non-zero exit code.\nnode_modules/safe-event-emitter/index.js:74\n      throw err\n      ^\n\nError: PollingBlockTracker - encountered an error while attempting to update latest block:\nError: connect ECONNREFUSED 127.0.0.1:8545\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you get an error like this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  code: -32000,\n  message: 'getDeleteStateObject (0000000000000000000000000000000000000000) error: no suitable peers available'\n}\n")),(0,r.kt)("p",null,"Wait a bit and try again"),(0,r.kt)("h2",{id:"sync--confirmation"},"Sync & Confirmation"),(0,r.kt)("p",null,"It takes up to 5 minutes for Mumbai to read data from the Goerli chain and sync itself. Once it has synced, then we can check the token balance in Metamask."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MLB Metamask",src:a(4498).Z,width:"344",height:"582"})),(0,r.kt)("h1",{id:"transfer-using-web-ui"},"Transfer using Web UI"),(0,r.kt)("p",null,"Transferring assets through ",(0,r.kt)("strong",{parentName:"p"},"Web UI")," is pretty simple.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Note")," that we can't use ",(0,r.kt)("strong",{parentName:"p"},"Goerli")," to ",(0,r.kt)("strong",{parentName:"p"},"Mumbai")," here. Because ",(0,r.kt)("strong",{parentName:"p"},"Web UI")," only supports Ethereum and Polygon ",(0,r.kt)("strong",{parentName:"p"},"mainnets"),".",(0,r.kt)("br",{parentName:"p"}),"\n","So I am going to transfer some ",(0,r.kt)("strong",{parentName:"p"},"real tokens")," from my ",(0,r.kt)("strong",{parentName:"p"},"Ethereum")," account to ",(0,r.kt)("strong",{parentName:"p"},"Polygon")," and pay the fees. You may just follow the images below to see how the process works."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.polygon.technology/login"},"wallet.polygon.technology"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure Ethereum Mainnet is selected in Metamask"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Metamask Ethereum",src:a(1910).Z,width:"348",height:"126"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Metamask"),". first login option")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be asked to sign a ",(0,r.kt)("strong",{parentName:"p"},"Signature Request")," to make sure you have access to the wallet. It costs no fees"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"pos web ui login",src:a(5009).Z,width:"1093",height:"672"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"I chose ",(0,r.kt)("inlineCode",{parentName:"p"},"DAI")," token from Ethereum"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"DAI",src:a(608).Z,width:"1881",height:"851"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Transfer"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then review the transaction details, like gas fees and the smart contract you are sending tokens to - before clicking on ",(0,r.kt)("strong",{parentName:"p"},"Confirm")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"transfer",src:a(1316).Z,width:"1918",height:"847"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the transaction is mined, the process is complete! It takes about 7 minutes to complete the transfer, as mentioned before Polygon needs about 5 minutes to sync."))),(0,r.kt)("h1",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! By completing this tutorial you learned how to use the ",(0,r.kt)("strong",{parentName:"p"},"Polygon PoS Bridge"),". We have configured ",(0,r.kt)("strong",{parentName:"p"},"Metamask")," and ",(0,r.kt)("strong",{parentName:"p"},"Geth"),", to communicate with the ",(0,r.kt)("strong",{parentName:"p"},"Goerli")," testnet and the ",(0,r.kt)("strong",{parentName:"p"},"Mumbai")," testnet. We then ",(0,r.kt)("strong",{parentName:"p"},"mapped")," an ",(0,r.kt)("strong",{parentName:"p"},"ERC-20")," token between the networks so it can be transferred via the bridge. Finally, we called functions on the PoS Bridge contracts and moved our assets from Ethereum to Polygon."),(0,r.kt)("h1",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"I'm mlibre, a random guy from the solar galaxy. I am interested in blockchain tech and find it very useful in lots of things.",(0,r.kt)("br",{parentName:"p"}),"\n","Feel free to check my ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlibre"},"Github")))}h.isMDXComponent=!0},4498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-MLB-token-b47500caeae1b596e49b646001ba7c87.png"},9253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-pos-map-fef81bdbb15cf9a0645b6aa6d8d12297.png"},5880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-pos-mapped-29249d2b99704b02abd415e82220b09a.png"},9737:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-pos-metamask-after-map-5e1b16e45ec38e737b7a0eff3a5429de.png"},1910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-pos-metamask-eth-mainnet-cdf907f64b4acbe5831fbe6986995d62.png"},5710:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-pos-mumbai-7ec5cc3c33d31e0d637ec6552b1df78a.png"},608:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-pos-web-ui-dai-5798c844a8105a7d48939010d47b4a31.png"},5009:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-pos-web-ui-login-b2872a5ea10913fb238f3414a9b14ff8.png"},1316:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/erc20-pos-web-ui-transfer-b72eb8847ec76bf73253607bfae5734a.png"}}]);