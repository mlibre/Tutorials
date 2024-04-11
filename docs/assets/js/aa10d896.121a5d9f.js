"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={title:"Swap DApp From Scratch",tags:["DEX","NEAR"]},o="Building a simple swap DApp On The NEAR Blockchain",i={unversionedId:"blockchain/NEAR/simple-exchange/readme",id:"blockchain/NEAR/simple-exchange/readme",title:"Swap DApp From Scratch",description:"You can find the codes and files in the Github repo.",source:"@site/docs/blockchain/NEAR/simple-exchange/readme.md",sourceDirName:"blockchain/NEAR/simple-exchange",slug:"/blockchain/NEAR/simple-exchange/",permalink:"/Wisdom-Hub/blockchain/NEAR/simple-exchange/",draft:!1,tags:[{label:"DEX",permalink:"/Wisdom-Hub/tags/dex"},{label:"NEAR",permalink:"/Wisdom-Hub/tags/near"}],version:"current",frontMatter:{title:"Swap DApp From Scratch",tags:["DEX","NEAR"]},sidebar:"tutorialSidebar",previous:{title:"NEAR SDKs",permalink:"/Wisdom-Hub/blockchain/NEAR/SDK"},next:{title:"Fungible Token (FT)",permalink:"/Wisdom-Hub/blockchain/NEAR/simple-exchange/MLB1-contract/"}},s={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setting up near-cli",id:"setting-up-near-cli",level:2},{value:"Accounts &amp; Wallet",id:"accounts--wallet",level:2},{value:"Setting up rust",id:"setting-up-rust",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"MLB1 contract",id:"mlb1-contract",level:2},{value:"Building MLB1 contract",id:"building-mlb1-contract",level:3},{value:"Deploying MLB1 contract",id:"deploying-mlb1-contract",level:3},{value:"Exchange contract",id:"exchange-contract",level:2},{value:"Deploying the contract",id:"deploying-the-contract",level:3},{value:"Swap near to token",id:"swap-near-to-token",level:3},{value:"Web UI",id:"web-ui",level:2},{value:"Hosting On Skynet",id:"hosting-on-skynet",level:2},{value:"References",id:"references",level:2},{value:"About The Author",id:"about-the-author",level:2},{value:"Donations",id:"donations",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-a-simple-swap-dapp-on-the-near-blockchain"},"Building a simple swap DApp On The NEAR Blockchain"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can find the ",(0,r.kt)("strong",{parentName:"p"},"codes")," and ",(0,r.kt)("strong",{parentName:"p"},"files")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/NEAR/simple-exchange"},(0,r.kt)("inlineCode",{parentName:"a"},"in the Github repo")),".")),(0,r.kt)("p",null,"In this tutorial, we will go through the process of building a token swap exchange on the ",(0,r.kt)("inlineCode",{parentName:"p"},"NEAR")," blockchain.",(0,r.kt)("br",{parentName:"p"}),"\n","We start by writing ",(0,r.kt)("strong",{parentName:"p"},"Token")," and ",(0,r.kt)("strong",{parentName:"p"},"Exchange")," smart contracts in ",(0,r.kt)("inlineCode",{parentName:"p"},"Rust")," and deploying the contracts on the ",(0,r.kt)("inlineCode",{parentName:"p"},"NEAR")," testnet chain using ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Then we make a simple ",(0,r.kt)("strong",{parentName:"p"},"Web UI")," to interact with the ",(0,r.kt)("strong",{parentName:"p"},"Exchange"),", using the ",(0,r.kt)("inlineCode",{parentName:"p"},"near-sdk-js")," library.",(0,r.kt)("br",{parentName:"p"}),"\n","Finally, we host our DApp on ",(0,r.kt)("inlineCode",{parentName:"p"},"Skynet"),"."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-near-cli"},"Setting up near-cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#accounts--wallet"},"Accounts & Wallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-rust"},"Setting up rust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started"},"Getting started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mlb1-contract"},"MLB1 contract"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-mlb1-contract"},"Building MLB1 contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploying-mlb1-contract"},"Deploying MLB1 contract")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exchange-contract"},"Exchange contract"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploying-the-contract"},"Deploying the contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#swap-near-to-token"},"Swap near to token")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#web-ui"},"Web UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hosting-on-skynet"},"Hosting On Skynet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#references"},"References")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#about-the-author"},"About The Author")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#donations"},"Donations"))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"We will use the following technologies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/near/near-cli"},(0,r.kt)("strong",{parentName:"a"},"NEAR CLI"))," v2.2.0 or higher installed globally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/near-sdk/3.1.0/near_sdk/"},(0,r.kt)("strong",{parentName:"a"},"near-sdk"))," v3 or higher installed globally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},(0,r.kt)("strong",{parentName:"a"},"Nodejs and NPM"))," v14.17.6 LTS or higher installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},(0,r.kt)("strong",{parentName:"a"},"Rust"))," v1.56 or higher installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/"},(0,r.kt)("strong",{parentName:"a"},"React"))," v17.0.1 or higher installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},(0,r.kt)("strong",{parentName:"a"},"near-api-js"))," v0.43.1 or higher installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://parceljs.org/"},(0,r.kt)("strong",{parentName:"a"},"parcel"))," v2 or higher installed")),(0,r.kt)("h2",{id:"setting-up-near-cli"},"Setting up near-cli"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NEAR CLI")," is a Node.js application that relies on ",(0,r.kt)("inlineCode",{parentName:"p"},"near-api-js")," to connect to and interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"NEAR blockchain"),". ",(0,r.kt)("strong",{parentName:"p"},"Create accounts"),", ",(0,r.kt)("strong",{parentName:"p"},"access keys"),", ",(0,r.kt)("strong",{parentName:"p"},"sign & send transactions")," with this command line interface tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo npm install -g near-cli\nnear login # Store testnet access keys locally\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"near login")," will open the browser, ",(0,r.kt)("strong",{parentName:"p"},"testnet wallet")," page. You will login to the ",(0,r.kt)("strong",{parentName:"p"},"testnet")," and ",(0,r.kt)("strong",{parentName:"p"},"store")," the access keys ",(0,r.kt)("strong",{parentName:"p"},"locally"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: All the ",(0,r.kt)("inlineCode",{parentName:"p"},"near")," commands work on the testnet chain (",(0,r.kt)("a",{parentName:"p",href:"https://rpc.testnet.near.org"},"https://rpc.testnet.near.org"),"), unless you specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"NEAR_ENV")," variable or provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodeUrl")," flag.  ")),(0,r.kt)("h2",{id:"accounts--wallet"},"Accounts & Wallet"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"NEAR"),", accounts are ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", like ",(0,r.kt)("inlineCode",{parentName:"p"},"mlibre.near"),". Each account can have multiple keys-pair.",(0,r.kt)("br",{parentName:"p"}),"\n","If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"near login"),", near will save your ",(0,r.kt)("strong",{parentName:"p"},"key-pair")," from the wallet into your local computer. You can find them here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat .near-credentials/testnet/ACCOUNT_ID.near.json\n")),(0,r.kt)("p",null,"You can also query an account's public keys by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near keys mlibre.testnet\n")),(0,r.kt)("p",null,"Go ahead and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," wallet."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://wallet.testnet.near.org/"},"https://wallet.testnet.near.org/"))),(0,r.kt)("h2",{id:"setting-up-rust"},"Setting up rust"),(0,r.kt)("p",null,"Rust is a modern systems programming language, focused on safety, speed and concurrency. It is used to write high-performance, distributed systems. Rust also supports WebAssembly.",(0,r.kt)("br",{parentName:"p"}),"\n","it is currently, the preferred programming language for writing smart contracts on ",(0,r.kt)("strong",{parentName:"p"},"NEAR"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/installation/index.html"},"install")," Rust, and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," to the rust toolchain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# https://www.rust-lang.org/\nrustup target add wasm32-unknown-unknown\n")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, we write a fungible token (FT) named ",(0,r.kt)("inlineCode",{parentName:"li"},"MLB1")," in rust, and will deploy it on the chain. We use it as the ",(0,r.kt)("inlineCode",{parentName:"li"},"near-token")," swap pair."),(0,r.kt)("li",{parentName:"ol"},"We write an ",(0,r.kt)("strong",{parentName:"li"},"Exchange Contract")," that will handle the swap functionality. Each ",(0,r.kt)("inlineCode",{parentName:"li"},"token-near")," pair, one exchange contract."),(0,r.kt)("li",{parentName:"ol"},"We make a simple ",(0,r.kt)("inlineCode",{parentName:"li"},"Web UI")," to interact with the ",(0,r.kt)("strong",{parentName:"li"},"Exchange Contract"),", using ",(0,r.kt)("inlineCode",{parentName:"li"},"near-sdk-js")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"React")," libraries."),(0,r.kt)("li",{parentName:"ol"},"We host our DApp on ",(0,r.kt)("inlineCode",{parentName:"li"},"Skynet"),".")),(0,r.kt)("h2",{id:"mlb1-contract"},"MLB1 contract"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MLB1")," is the symbol of the token we are going to deploy on the ",(0,r.kt)("strong",{parentName:"p"},"NEAR testnet"),". We will use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-examples/FT"},"official")," template for the contract, which is based on the ",(0,r.kt)("strong",{parentName:"p"},"NEP-141")," standard."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note, In NEAR each account can only have one smart contract. And re-deploying contracts ",(0,r.kt)("strong",{parentName:"p"},"DOES NOT")," create a new state.")),(0,r.kt)("h3",{id:"building-mlb1-contract"},"Building MLB1 contract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/near-examples/FT.git MLB1 # cloning the FT template \ncd MLB1\n./build.sh # Build\n")),(0,r.kt)("h3",{id:"deploying-mlb1-contract"},"Deploying MLB1 contract"),(0,r.kt)("p",null,"From now we consider ",(0,r.kt)("inlineCode",{parentName:"p"},"mlibre.testnet")," as the master account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near create-account mlb1.mlibre.testnet --masterAccount mlibre.testnet # Create a sub account for mlb1 contract\nnear state mlb1.mlibre.testnet # checking the newly created account state\nnear deploy --wasmFile res/fungible_token.wasm --accountId mlb1.mlibre.testnet # Deploying the contract\n")),(0,r.kt)("p",null,"Deploy output is something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Starting deployment. Account id: mlb1.mlibre.testnet, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: res/fungible_token.wasm\nTransaction Id 8JJCqCXiwVCppQTExUXJBnnXkj4pzvqjNN2jJx5RPeGs\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/8JJCqCXiwVCppQTExUXJBnnXkj4pzvqjNN2jJx5RPeGs\nDone deploying to mlb1.mlibre.testnet\n")),(0,r.kt)("p",null,"You can check the account in the explorer, there you will find the actions that happened."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mlb1.mlibre.testnet",src:n(3359).Z,width:"1827",height:"871"})),(0,r.kt)("p",null,"Now we should call the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," method of the contract to initialize a token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call mlb1.mlibre.testnet new \'{"owner_id": "mlb1.mlibre.testnet", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "MLB1", "symbol": "MLB1", "decimals": 8 }}\' --accountId mlb1.mlibre.testnet\n')),(0,r.kt)("p",null,"You can check the explorer for details, or query the account's state with cli:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near state mlb1.mlibre.testnet # Account status\n# near view-state mlb1.mlibre.testnet --finality final # key-value status\n# near view-state mlb1.mlibre.testnet --finality final --utf8 # key-value status in utf8\n# near view mlb1.mlibre.testnet ft_metadata # Token metadata\n")),(0,r.kt)("p",null,"Output is something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  amount: '100000262536618865600000010',\n  block_hash: 'Br6C34jP4B587P7S4fXPocxfMYe85bzU252UH9KXjudf',\n  block_height: 72853693,\n  code_hash: '7Mjzf1s65QZ7aeh7xFjfoihrqpinVS7FaNmyh7kqupEN',\n  locked: '0',\n  storage_paid_at: 0,\n  storage_usage: 226967,\n  formattedAmount: '100.00026253661886560000001'\n}\n")),(0,r.kt)("p",null,"And for ",(0,r.kt)("strong",{parentName:"p"},"MLB1")," balance of the account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near view mlb1.mlibre.testnet ft_balance_of \'{"account_id": "mlb1.mlibre.testnet"}\'\n')),(0,r.kt)("h2",{id:"exchange-contract"},"Exchange contract"),(0,r.kt)("p",null,"The exchange contract takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"token address")," parameter in its ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," method, which is the token that can be swapped for ",(0,r.kt)("strong",{parentName:"p"},"NEAR")," and vice versa. Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/develop/contracts/rust/intro"},"official")," template to start a new contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new exchange\n# Follow the doc: https://docs.near.org/docs/develop/contracts/rust/intro\n")),(0,r.kt)("p",null,"The folder structure looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 lib.rs\n\u2514\u2500\u2500 target\n    \u2514\u2500\u2500 exchange.wasm\n")),(0,r.kt)("p",null,"Contract code is straightforward:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// lib.rs\nuse near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{env, log, near_bindgen, ext_contract, AccountId, Balance, PanicOnDefault, PromiseOrValue};\n\nnear_sdk::setup_alloc!();\n\n#[ext_contract(mlb1)]\ntrait FungibleToken {\n    fn ft_transfer(&mut self, receiver_id: String, amount: String, memo: Option<String>);\n    fn ft_total_supply(&self) -> String;\n    fn ft_balance_of(&self, account_id: String) -> String;\n}\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Exchange {\n    token_address: AccountId,\n    logo_url: String\n}\n\n#[near_bindgen]\nimpl Exchange {\n    #[init]\n    pub fn new(_token_address: AccountId) -> Self {\n        assert!(!env::state_exists(), "Already initialized");\n        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner\'s method");\n        Self {\n            token_address: _token_address,\n            logo_url: "".to_string()\n        }\n    }\n\n    #[payable]\n    pub fn near_to_token(&mut self) {\n        let near = env::attached_deposit();\n        let account = &env::signer_account_id();\n        env::log(near.to_string().as_bytes());\n        env::log(account.to_string().as_bytes());\n\n        mlb1::ft_transfer(\n            account.to_string(),\n            near.to_string(),\n            None,\n            &self.token_address.to_string(), // mlb1 account id\n            1, // yocto NEAR to attach\n            5_000_000_000_000 // gas to attach\n        );\n    }\n\n    pub fn get_token_address(self) -> AccountId {\n        self.token_address\n    }\n\n    pub fn set_token_address(&mut self, _token_address: AccountId) {\n        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner\'s method");\n        self.token_address = _token_address\n    }\n\n    pub fn set_logo_url(&mut self, url: String) {\n        assert!(&env::signer_account_id() == &env::current_account_id(), "Owner\'s method");\n        self.logo_url = url\n    }\n\n    pub fn get_logo_url(self) -> String {\n        self.logo_url\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"new")," function is used to initialize the contract.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assert!(&env::signer_account_id() == &env::current_account_id()")," is used to check if the current account is the owner of the contract."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"near_to_token")," function is used to swap ",(0,r.kt)("strong",{parentName:"li"},"NEAR")," for tokens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_token_address")," function is used to set the token address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_token_address")," function is used to get the token address.")),(0,r.kt)("p",null,"And ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'[package]\nname = "exchange"\nversion = "1.0.0"\nauthors = ["Mlibre <m.gh@linuxmail.org>"]\nedition = "2021"\n\n[lib]\ncrate-type = ["cdylib", "rlib"]\n\n[dependencies]\nnear-sdk = "3.1.0"\n\n[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n')),(0,r.kt)("p",null,"As you can see in ",(0,r.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section, we are using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/near-sdk/3.1.0/near_sdk/"},"near-sdk")," version 3.1.0 rust library."),(0,r.kt)("h3",{id:"deploying-the-contract"},"Deploying the contract"),(0,r.kt)("p",null,"Lets create an account for the exchange contract, compile and deploy it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# near delete exchange.mlibre.testnet mlibre.testnet\nnear create-account exchange.mlibre.testnet --masterAccount mlibre.testnet\n\ncargo build --target wasm32-unknown-unknown --release\ncp target/wasm32-unknown-unknown/release/*.wasm ./target\nnear deploy --wasmFile target/exchange.wasm --accountId exchange.mlibre.testnet\n")),(0,r.kt)("p",null,"There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," method in the exchange contract, we should call it to ",(0,r.kt)("strong",{parentName:"p"},"initialize")," the token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call exchange.mlibre.testnet new \'{"_token_address": "mlb1.mlibre.testnet"}\' --accountId exchange.mlibre.testnet\n\n# near call exchange.mlibre.testnet set_token_address \'{"_token_address": "mlb1.mlibre.testnet"}\' --accountId exchange.mlibre.testnet\n# near deploy exchange.mlibre.testnet --wasmFile target/exchange.wasm --initFunction \'new\' --initArgs \'{"_token_address": "mlb1.mlibre.testnet"}\'\n\nnear view exchange.mlibre.testnet get_token_address --accountId exchange.mlibre.testnet\n')),(0,r.kt)("p",null,"In order to deposit some ",(0,r.kt)("strong",{parentName:"p"},"MLB1")," to the exchange contract, we need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"storage_deposit")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call mlb1.mlibre.testnet storage_deposit \'\' --accountId exchange.mlibre.testnet --amount 0.0125\nnear call mlb1.mlibre.testnet ft_transfer \'{"receiver_id": "exchange.mlibre.testnet", "amount": "1900"}\' --accountId mlb1.mlibre.testnet --amount 0.000000000000000000000001\nnear view mlb1.mlibre.testnet ft_balance_of \'{"account_id": "mlb1.mlibre.testnet"}\'\n')),(0,r.kt)("h3",{id:"swap-near-to-token"},"Swap near to token"),(0,r.kt)("p",null,"Now to swap some ",(0,r.kt)("strong",{parentName:"p"},"NEAR")," for ",(0,r.kt)("strong",{parentName:"p"},"MLB1")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"mlibre.testnet"),", we call the ",(0,r.kt)("inlineCode",{parentName:"p"},"near_to_token")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call mlb1.mlibre.testnet storage_deposit \'\' --accountId mlibre.testnet --amount 0.0125\nnear call exchange.mlibre.testnet near_to_token --accountId mlibre.testnet --amount 0.000000000000000000000001\nnear view mlb1.mlibre.testnet ft_balance_of \'{"account_id": "exchange.mlibre.testnet"}\'\nnear view mlb1.mlibre.testnet ft_balance_of \'{"account_id": "mlibre.testnet"}\'\n')),(0,r.kt)("p",null,"You can find the source codes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/NEAR/simple-exchange"},"here")),(0,r.kt)("h2",{id:"web-ui"},"Web UI"),(0,r.kt)("p",null,"Writing a web DApp for the exchange contract is easy. We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"npx create-near-app web-ui")," tool to create a ready-to-use ",(0,r.kt)("inlineCode",{parentName:"p"},"react"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rust"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"parcel")," stack.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-near-app web-ui --frontend=react --contract=rust \ncd web-ui\nyarn start # Installing dependencies and starting the app \n")),(0,r.kt)("p",null,"The folder structure should look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"|\n\u251c\u2500\u2500 babel.config.js\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 favicon.ico\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mlogo-black.svg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 mlogo-white.svg\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 global.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.html\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 wallet\n\u2502\xa0\xa0     \u2514\u2500\u2500 login\n\u2502\xa0\xa0         \u2514\u2500\u2500 index.html\n")),(0,r.kt)("p",null,"To connect to a wallet, signing in and out, NEAR provides ",(0,r.kt)("inlineCode",{parentName:"p"},"near-api-js")," library.",(0,r.kt)("br",{parentName:"p"}),"\n","It is imported in ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export async function initContract() {\n  // Initialize connection to the NEAR testnet\n  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))\n\n  // Initializing Wallet based Account. It can work with NEAR testnet wallet that\n  // is hosted at https://wallet.testnet.near.org\n  window.walletConnection = new WalletConnection(near)\n\n  // Getting the Account ID. If still unauthorized, it's just empty string\n  window.accountId = window.walletConnection.getAccountId()\n  window.account = await window.walletConnection.account();\n\n  // Initializing our contract APIs by contract name and configuration\n  window.contract = await new Contract(window.account, nearConfig.contractName, {\n    viewMethods: ['get_token_address'],\n    changeMethods: ['near_to_token'],\n    sender: window.account\n  })\n}\n")),(0,r.kt)("p",null,"Every time the app starts, the ",(0,r.kt)("inlineCode",{parentName:"p"},"initContract")," function is called. It initializes the connection to the NEAR testnet and creates an ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," object. Then we call the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_token_address")," method to get the token address in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export default function App() {\n  const [token_address, set_token_address] = React.useState()\n  const [showNotification, setShowNotification] = React.useState(false)\n\n  React.useEffect(\n    async () => {\n      if (window.walletConnection.isSignedIn()) {\n        try {\n          let token_address = await window.contract.get_token_address();\n          set_token_address(token_address)\n        } catch (error) {\n          console.log(error);\n        }\n      }\n    },\n    []\n  )\n  .\n  .\n  .\n")),(0,r.kt)("p",null,"We also need to change the form action to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await window.contract.near_to_token({},\n  300000000000000, // attached GAS (optional)\n  token_address.value // attached deposit in yoctoNEAR (optional)\n)\n")),(0,r.kt)("p",null,"Before we start the app we are going to make some changes minor changes as well. Start by upgrading the ",(0,r.kt)("inlineCode",{parentName:"p"},"parcel")," dependency to the latest version:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"parcel-bundler")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"parcel")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i parcel@latest\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},'type="module"')," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," tag in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.html")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="./index.js"><\/script>\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"config.js")," set the contract name to ",(0,r.kt)("inlineCode",{parentName:"p"},"exchange.mlibre.testnet")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getConfig() {\n  return {\n    networkId: 'testnet',\n    nodeUrl: 'https://rpc.testnet.near.org',\n    contractName: 'exchange.mlibre.testnet',\n    walletUrl: 'https://wallet.testnet.near.org',\n    helperUrl: 'https://helper.testnet.near.org',\n    explorerUrl: 'https://explorer.testnet.near.org',\n  }\n}\n\n")))),(0,r.kt)("p",null,"You can now run the app using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"parcel src/index.html --open\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"web-ui",src:n(6297).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"You can find the source codes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/NEAR/simple-exchange"},"here")),(0,r.kt)("h2",{id:"hosting-on-skynet"},"Hosting On Skynet"),(0,r.kt)("p",null,"After running dapp using ",(0,r.kt)("inlineCode",{parentName:"p"},"parcel src/index.html --open"),", copy the dist folder and upload it on ",(0,r.kt)("a",{parentName:"p",href:"https://siasky.net/"},"Skynet"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.near.org"},"https://docs.near.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/near/near-cli"},"https://github.com/near/near-cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mlibre/blockchain/tree/master/NEAR/simple-exchange"},"https://github.com/mlibre/blockchain/tree/master/NEAR/simple-exchange"))),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"I'm mlibre, a random guy from the solar galaxy. I am interested in blockchain tech and find it very useful for lots of things. Feel free to check my ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mlibre"},"Github")),(0,r.kt)("h2",{id:"donations"},"Donations"),(0,r.kt)("p",null,"ETH:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"0xc9b64496986E7b6D4A68fDF69eF132A35e91838e")),(0,r.kt)("p",null,"NEAR:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"mlibre.near")))}u.isMDXComponent=!0},3359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mlb1-c23e1f9f5da7300b647ff0bde18df204.png"},6297:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web-ui-161e68add120afae7d20fda28242e9d6.png"}}]);