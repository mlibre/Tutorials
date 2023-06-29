"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Fungible Token (FT)",l={unversionedId:"blockchain/NEAR/simple-exchange/MLB1-contract/README",id:"blockchain/NEAR/simple-exchange/MLB1-contract/README",title:"Fungible Token (FT)",description:"Example implementation of a [Fungible Token] contract which uses [near-contract-standards] and [simulation] tests. This is a contract-only example.",source:"@site/docs/blockchain/NEAR/simple-exchange/MLB1-contract/README.md",sourceDirName:"blockchain/NEAR/simple-exchange/MLB1-contract",slug:"/blockchain/NEAR/simple-exchange/MLB1-contract/",permalink:"/Tutorials/blockchain/NEAR/simple-exchange/MLB1-contract/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Swap DApp From Scratch",permalink:"/Tutorials/blockchain/NEAR/simple-exchange/"},next:{title:"Polygon",permalink:"/Tutorials/blockchain/Polygon/"}},s={},c=[{value:"Building",id:"building",level:2},{value:"Quickest deploy",id:"quickest-deploy",level:3},{value:"Standard deploy",id:"standard-deploy",level:3},{value:"Transfer Example",id:"transfer-example",level:2},{value:"Testing",id:"testing",level:2},{value:"Notes",id:"notes",level:2},{value:"No AssemblyScript?",id:"no-assemblyscript",level:2},{value:"Contributing",id:"contributing",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fungible-token-ft"},"Fungible Token (FT)"),(0,r.kt)("p",null,"Example implementation of a ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/FungibleToken/Core.html"},"Fungible Token")," contract which uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/tree/master/near-contract-standards"},"near-contract-standards")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/tree/master/near-sdk-sim"},"simulation")," tests. This is a contract-only example."),(0,r.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"If you're using Gitpod, you can skip this step."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure Rust is installed per the prerequisites in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-rs#pre-requisites"},(0,r.kt)("inlineCode",{parentName:"a"},"near-sdk-rs"))),(0,r.kt)("li",{parentName:"ol"},"Ensure ",(0,r.kt)("inlineCode",{parentName:"li"},"near-cli")," is installed by running ",(0,r.kt)("inlineCode",{parentName:"li"},"near --version"),". If not installed, install with: ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install -g near-cli"))),(0,r.kt)("h2",{id:"building"},"Building"),(0,r.kt)("p",null,"To build run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build.sh\n")),(0,r.kt)("h1",{id:"using-this-contract"},"Using this contract"),(0,r.kt)("h3",{id:"quickest-deploy"},"Quickest deploy"),(0,r.kt)("p",null,"You can build and deploy this smart contract to a development account. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/concepts/account#dev-accounts"},"Dev Accounts")," are auto-generated accounts to assist in developing and testing smart contracts. Please see the ",(0,r.kt)("a",{parentName:"p",href:"#standard-deploy"},"Standard deploy")," section for creating a more personalized account to deploy to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near dev-deploy --wasmFile res/fungible_token.wasm --helperUrl https://near-contract-helper.onrender.com\n")),(0,r.kt)("p",null,"Behind the scenes, this is creating an account and deploying a contract to it. On the console, notice a message like:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Done deploying to dev-1234567890123")),(0,r.kt)("p",null,"In this instance, the account is ",(0,r.kt)("inlineCode",{parentName:"p"},"dev-1234567890123"),". A file has been created containing a key pair to\nthe account, located at ",(0,r.kt)("inlineCode",{parentName:"p"},"neardev/dev-account"),". To make the next few steps easier, we're going to set an\nenvironment variable containing this development account id and use that when copy/pasting commands.\nRun this command to the environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source neardev/dev-account.env\n")),(0,r.kt)("p",null,"You can tell if the environment variable is set correctly if your command line prints the account name after this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo $CONTRACT_NAME\n")),(0,r.kt)("p",null,"The next command will initialize the contract using the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'near call $CONTRACT_NAME new \'{"owner_id": "\'$CONTRACT_NAME\'", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "Example Token Name", "symbol": "EXLT", "decimals": 8 }}\' --accountId $CONTRACT_NAME\n')),(0,r.kt)("p",null,"To get the fungible token metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"near view $CONTRACT_NAME ft_metadata\n")),(0,r.kt)("h3",{id:"standard-deploy"},"Standard deploy"),(0,r.kt)("p",null,"This smart contract will get deployed to your NEAR account. For this example, please create a new NEAR account. Because NEAR allows the ability to upgrade contracts on the same account, initialization functions must be cleared. If you'd like to run this example on a NEAR account that has had prior contracts deployed, please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli")," command ",(0,r.kt)("inlineCode",{parentName:"p"},"near delete"),", and then recreate it in Wallet. To create (or recreate) an account, please follow the directions on ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.near.org/"},"NEAR Wallet"),"."),(0,r.kt)("p",null,"Switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet"),". You can skip this step to use ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," as a default network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export NEAR_ENV=mainnet\n")),(0,r.kt)("p",null,"In the project root, log in to your newly created account  with ",(0,r.kt)("inlineCode",{parentName:"p"},"near-cli")," by following the instructions after this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near login\n")),(0,r.kt)("p",null,"To make this tutorial easier to copy/paste, we're going to set an environment variable for your account id. In the below command, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"MY_ACCOUNT_NAME")," with the account name you just logged in with, including the ",(0,r.kt)("inlineCode",{parentName:"p"},".near"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ID=MY_ACCOUNT_NAME\n")),(0,r.kt)("p",null,"You can tell if the environment variable is set correctly if your command line prints the account name after this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"echo $ID\n")),(0,r.kt)("p",null,"Now we can deploy the compiled contract in this example to your account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near deploy --wasmFile res/fungible_token.wasm --accountId $ID\n")),(0,r.kt)("p",null,"FT contract should be initialized before usage. You can read more about metadata at ",(0,r.kt)("a",{parentName:"p",href:"https://nomicon.io/Standards/FungibleToken/Metadata.html#reference-level-explanation"},"'nomicon.io'"),". Modify the parameters and create a token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'near call $ID new \'{"owner_id": "\'$ID\'", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "Example Token Name", "symbol": "EXLT", "decimals": 8 }}\' --accountId $ID\n')),(0,r.kt)("p",null,"Get metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near view $ID ft_metadata\n")),(0,r.kt)("h2",{id:"transfer-example"},"Transfer Example"),(0,r.kt)("p",null,"Let's set up an account to transfer some tokens to. These account will be a sub-account of the NEAR account you logged in with."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near create-account bob.$ID --masterAccount $ID --initialBalance 1\n")),(0,r.kt)("p",null,"Add storage deposit for Bob's account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near call $ID storage_deposit '' --accountId bob.$ID --amount 0.00125\n")),(0,r.kt)("p",null,"Check balance of Bob's account, it should be ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," for now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"near view $ID ft_balance_of '{\"account_id\": \"'bob.$ID'\"}'\n")),(0,r.kt)("p",null,"Transfer tokens to Bob from the contract that minted these fungible tokens, exactly 1 yoctoNEAR of deposit should be attached:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'near call $ID ft_transfer \'{"receiver_id": "\'bob.$ID\'", "amount": "19"}\' --accountId $ID --amount 0.000000000000000000000001\n')),(0,r.kt)("p",null,"Check the balance of Bob again with the command from before and it will now return ",(0,r.kt)("inlineCode",{parentName:"p"},"19"),"."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"As with many Rust libraries and contracts, there are tests in the main fungible token implementation at ",(0,r.kt)("inlineCode",{parentName:"p"},"ft/src/lib.rs"),"."),(0,r.kt)("p",null,"Additionally, this project has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/tree/master/near-sdk-sim"},"simulation")," tests in ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/sim"),". Simulation tests allow testing cross-contract calls, which is crucial to ensuring that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ft_transfer_call")," function works properly. These simulation tests are the reason this project has the file structure it does. Note that the root project has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," which sets it up as a workspace. ",(0,r.kt)("inlineCode",{parentName:"p"},"ft")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test-contract-defi")," are both small & focused contract projects, the latter only existing for simulation tests. The root project imports ",(0,r.kt)("inlineCode",{parentName:"p"},"near-sdk-sim")," and tests interaction between these contracts."),(0,r.kt)("p",null,"You can run all these tests with one command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test\n")),(0,r.kt)("p",null,"If you want to run only simulation tests, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo test simulate"),', since all the simulation tests include "simulate" in their names.'),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The maximum balance value is limited by U128 (",(0,r.kt)("inlineCode",{parentName:"li"},"2**128 - 1"),")."),(0,r.kt)("li",{parentName:"ul"},'JSON calls should pass U128 as a base-10 string. E.g. "100".'),(0,r.kt)("li",{parentName:"ul"},"This does not include escrow functionality, as ",(0,r.kt)("inlineCode",{parentName:"li"},"ft_transfer_call")," provides a superior approach. An escrow system can, of course, be added as a separate contract or additional functionality within this contract.")),(0,r.kt)("h2",{id:"no-assemblyscript"},"No AssemblyScript?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-sdk-rs/tree/master/near-contract-standards"},"near-contract-standards")," is currently Rust-only. We strongly suggest using this library to create your own Fungible Token contract to ensure it works as expected."),(0,r.kt)("p",null,"Someday NEAR core or community contributors may provide a similar library for AssemblyScript, at which point this example will be updated to include both a Rust and AssemblyScript version."),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"When making changes to the files in ",(0,r.kt)("inlineCode",{parentName:"p"},"ft")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"test-contract-defi"),", remember to use ",(0,r.kt)("inlineCode",{parentName:"p"},"./build.sh")," to compile all contracts and copy the output to the ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," folder. If you forget this, ",(0,r.kt)("strong",{parentName:"p"},"the simulation tests will not use the latest versions"),"."),(0,r.kt)("p",null,"Note that if the ",(0,r.kt)("inlineCode",{parentName:"p"},"rust-toolchain")," file in this repository changes, please make sure to update the ",(0,r.kt)("inlineCode",{parentName:"p"},".gitpod.Dockerfile")," to explicitly specify using that as default as well."))}d.isMDXComponent=!0}}]);