"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="CLI",l={unversionedId:"blockchain/Ethereum/CLI",id:"blockchain/Ethereum/CLI",title:"CLI",description:"it is not possible to run an execution client on its own anymore. After The Merge, both execution and consensus clients must be run together in order for a user to gain access to the Ethereum network.",source:"@site/docs/blockchain/Ethereum/CLI.md",sourceDirName:"blockchain/Ethereum",slug:"/blockchain/Ethereum/CLI",permalink:"/Wisdom-Hub/blockchain/Ethereum/CLI",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DEX from scratch",permalink:"/Wisdom-Hub/blockchain/Ethereum/Build a DEX from scratch/"},next:{title:"ERC-1155 From Scratch",permalink:"/Wisdom-Hub/blockchain/Ethereum/ERC1155/"}},s={},p=[{value:"Table of content",id:"table-of-content",level:2},{value:"Online Providers",id:"online-providers",level:2},{value:"getblock.io",id:"getblockio",level:3},{value:"Infura",id:"infura",level:3},{value:"Testnet Node",id:"testnet-node",level:2},{value:"Geth, Clef, Consensus client",id:"geth-clef-consensus-client",level:3},{value:"Sync modes",id:"sync-modes",level:3},{value:"Installation &amp; Requirements",id:"installation--requirements",level:3},{value:"Clef",id:"clef",level:3},{value:"Geth",id:"geth",level:3},{value:"Consensus clients",id:"consensus-clients",level:3},{value:"Testing the network",id:"testing-the-network",level:3},{value:"Useful commands",id:"useful-commands",level:3},{value:"References",id:"references",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"CLI"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"it is not possible to run an execution client on its own anymore. After The Merge, ",(0,o.kt)("strong",{parentName:"p"},"both execution and consensus clients")," must be run together in order for a user to gain access to the Ethereum network.")),(0,o.kt)("h2",{id:"table-of-content"},"Table of content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#table-of-content"},"Table of content")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#online-providers"},"Online Providers"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#getblockio"},"getblock.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#infura"},"Infura")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#testnet-node"},"Testnet Node"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#geth-clef-consensus-client"},"Geth, Clef, Consensus client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sync-modes"},"Sync modes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation--requirements"},"Installation \\& Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#clef"},"Clef")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#geth"},"Geth")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#consensus-clients"},"Consensus clients")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#testing-the-network"},"Testing the network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#useful-commands"},"Useful commands")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,o.kt)("p",null,"You can either run your ",(0,o.kt)("inlineCode",{parentName:"p"},"own")," ethereum ",(0,o.kt)("inlineCode",{parentName:"p"},"layers")," (node) or use ",(0,o.kt)("inlineCode",{parentName:"p"},"free providers"),"."),(0,o.kt)("h2",{id:"online-providers"},"Online Providers"),(0,o.kt)("h3",{id:"getblockio"},"getblock.io"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth attach https://eth.getblock.io/token/mainnet/\n")),(0,o.kt)("h3",{id:"infura"},"Infura"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n-H "Content-Type: application/json" \\\n--data \'{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}\' \\\n"https://sepolia.infura.io/v3/api-key"\n')),(0,o.kt)("h2",{id:"testnet-node"},"Testnet Node"),(0,o.kt)("h3",{id:"geth-clef-consensus-client"},"Geth, Clef, Consensus client"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," is Official implementation of the Ethereum execution layer in ",(0,o.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/"},"Go"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," is a command-line interface for the Ethereum blockchain. ",(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," is an Ethereum client written in Go. This means running ",(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," turns a computer into an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ethereum node"),". Ethereum is a ",(0,o.kt)("inlineCode",{parentName:"p"},"peer-to-peer")," network where information is shared directly between nodes rather than being managed by a central server. Every 12 seconds one node is randomly selected to generate a new block containing a list of transactions that nodes receiving the block should execute. This ",(0,o.kt)("inlineCode",{parentName:"p"},"block proposer")," node sends the new block to its peers. On receiving a new block, each node checks that it is ",(0,o.kt)("inlineCode",{parentName:"p"},"valid")," and adds it to their database. The sequence of discrete blocks is called a ",(0,o.kt)("inlineCode",{parentName:"p"},"blockchain"),". The information provided in each block is used by Geth to ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," its ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Clef")," is an account management tool external to ",(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," itself that allows users to sign transactions.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," also needs to be connected to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Consensus client")," in order to function as an Ethereum node.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Clef",src:n(917).Z,width:"3638",height:"1249"})),(0,o.kt)("h3",{id:"sync-modes"},"Sync modes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Snap (default): Snap sync starts from a relatively recent block and syncs from there to the head of the chain,."),(0,o.kt)("li",{parentName:"ul"},"Full: An archive node is a node that retains all historical data right back to genesis"),(0,o.kt)("li",{parentName:"ul"},"Light: A light node syncs very quickly and stores the bare minimum of blockchain data")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Light")," nodes are not currently working on ",(0,o.kt)("inlineCode",{parentName:"p"},"proof-of-stake")," Ethereum")),(0,o.kt)("h3",{id:"installation--requirements"},"Installation & Requirements"),(0,o.kt)("p",null,"These commands will intall ",(0,o.kt)("inlineCode",{parentName:"p"},"geth"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clef"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"devp2p"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"abigen"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bootnode"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"evm"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rlpdump")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeth")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Ubuntu\nsudo apt-get install -y software-properties-common\nsudo add-apt-repository -y ppa:ethereum/ethereum\nsudo apt-get update\nsudo apt-get install ethereum\n\n# Arch\nsudo pacman -Syyuu geth nodejs\npamac install lighthouse-ethereum-bin\n")),(0,o.kt)("p",null,"An accurate clock is required to participate in the Ethereum network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ntpdate -s time.nist.gov\n")),(0,o.kt)("p",null,"Make sure you have the following ports open"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo iptables -I INPUT -p tcp --dport 30311 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 30311 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 30303 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 30303 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 30304 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 30304 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 37608 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 37608 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 8546 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 8546 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 8551 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 8551 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 8545 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 8545 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 3334 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 3334 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 9000 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 9000 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 9001 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 9001 -j ACCEPT\nsudo iptables -I INPUT -p tcp --dport 5052 -j ACCEPT\nsudo iptables -I INPUT -p udp --dport 5052 -j ACCEPT\nsudo iptables -I INPUT 1 -i lo -j ACCEPT\nsudo iptables -A INPUT -i ens3 -p udp -m multiport --dports 1900,5351,5353 -j ACCEPT\nsudo iptables -A INPUT -i ens3 -p tcp -m multiport --dports 49152 -j ACCEPT\n")),(0,o.kt)("h3",{id:"clef"},"Clef"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Clef")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts Management")," and has the responsibility of generating and storing keys, and signing transactions."),(0,o.kt)("p",null,"Create a new account with ",(0,o.kt)("inlineCode",{parentName:"p"},"Clef"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir enode\nclef newaccount --keystore enode/keystore\n")),(0,o.kt)("p",null,"To start ",(0,o.kt)("inlineCode",{parentName:"p"},"Clef"),", run the ",(0,o.kt)("inlineCode",{parentName:"p"},"Clef")," executable passing as arguments the ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore")," file location, config directory location and a ",(0,o.kt)("inlineCode",{parentName:"p"},"chain ID"),". The config directory was automatically created inside the geth-tutorial directory during the previous step. The chain ID is an integer that defines which Ethereum network to connect to. Ethereum mainnet has ",(0,o.kt)("inlineCode",{parentName:"p"},"chain ID 1"),". In this tutorial ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID 11155111")," is used which is that of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sepolia")," testnet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"clef --keystore enode/keystore --configdir enode/clef --chainid 11155111\n")),(0,o.kt)("h3",{id:"geth"},"Geth"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," is responsible for running the Ethereum node. Communicating with the network, ",(0,o.kt)("inlineCode",{parentName:"p"},"sending and validating transactions"),", and interacting with ",(0,o.kt)("inlineCode",{parentName:"p"},"Smart Contracts"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," also keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," of the blockchain."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"Geth")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"snap-sync")," which download blocks sequentially from a ",(0,o.kt)("inlineCode",{parentName:"p"},"relatively recent block"),", not the genesis block.",(0,o.kt)("br",{parentName:"p"}),"\n","Your ",(0,o.kt)("inlineCode",{parentName:"p"},"ISP")," must also allow ",(0,o.kt)("inlineCode",{parentName:"p"},"UDP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TCP")," traffics to pass through."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'geth --sepolia --datadir enode --authrpc.addr 0.0.0.0 --authrpc.port 8551 --authrpc.vhosts "*" --authrpc.jwtsecret enode/jwtsecret --http --http.api eth,net,admin --signer enode/clef/clef.ipc --verbosity 5 --maxpeers 100 --allow-insecure-unlock --discv5 --bootnodes "enode://ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7@52.14.151.177:30303","enode://9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066@18.168.182.86:30303"\n# --nat=none --maxpendpeers 10 --nodiscover\n')),(0,o.kt)("p",null,"Get some Sepolia ETH from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.infura.io/faucet/sepolia"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Connet to your ",(0,o.kt)("inlineCode",{parentName:"p"},"geth")," node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth attach http://127.0.0.1:8545\n")),(0,o.kt)("p",null,"Check if ",(0,o.kt)("inlineCode",{parentName:"p"},"geth")," has connected to the network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"admin.peers\n")),(0,o.kt)("p",null,"To manullay add static peers to the netwrok, first find the ",(0,o.kt)("inlineCode",{parentName:"p"},"enode")," address of the peer you want to connect to. for example, for ",(0,o.kt)("inlineCode",{parentName:"p"},"sepolia")," you can find some ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/sepolia"},"here"),", and for mainnet you can find ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/nodetracker/nodes"},"here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'admin.addPeer("enode://ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7@52.14.151.177:30303")\nadmin.addPeer("enode://9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066@18.168.182.86:30303")\n')),(0,o.kt)("p",null,"Get connected accounts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"eth.accounts;\n")),(0,o.kt)("p",null,"The console will hang, because ",(0,o.kt)("inlineCode",{parentName:"p"},"Clef")," is waiting for approval. approve it.  "),(0,o.kt)("h3",{id:"consensus-clients"},"Consensus clients"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Consensus client")," is responsible for ",(0,o.kt)("inlineCode",{parentName:"p"},"Block Proposals"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Agreement Process")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Final Decision"),".",(0,o.kt)("br",{parentName:"p"}),"\n","A ",(0,o.kt)("inlineCode",{parentName:"p"},"Consensus client")," alongside ",(0,o.kt)("inlineCode",{parentName:"p"},"geth")," is required to function as an Ethereum node and start syncing the blockchain.",(0,o.kt)("br",{parentName:"p"}),"\n","One of the famous ",(0,o.kt)("inlineCode",{parentName:"p"},"Consensus clients")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Lighthouse"),". To use ",(0,o.kt)("inlineCode",{parentName:"p"},"checkpoint syncing")," you need to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Beacon Node")," running. There is list ",(0,o.kt)("a",{parentName:"p",href:"https://eth-clients.github.io/checkpoint-sync-endpoints/"},"here"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Lighthouse")," needs to be publicly accessible to the network, otherwise it will not be able to sync the blockchain.",(0,o.kt)("br",{parentName:"p"}),"\n","You can check it you are connected to the network by running ",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://localhost:5052/lighthouse/nat")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r enode/lighthouse\nmkdir -p enode/lighthouse\n\nlighthouse bn \\\n    --network sepolia \\\n    --datadir enode/lighthouse \\\n    --http \\\n    --execution-endpoint http://127.0.0.1:8551 \\\n    --metrics \\\n    --validator-monitor-auto \\\n    --checkpoint-sync-url https://sepolia.beaconstate.info \\\n    --execution-jwt enode/jwtsecret --disable-deposit-contract-sync\n")),(0,o.kt)("h3",{id:"testing-the-network"},"Testing the network"),(0,o.kt)("p",null,"Get latest block number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"eth.blockNumber\n")),(0,o.kt)("h3",{id:"useful-commands"},"Useful commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'geth account import ~/Data/myself/cryptocurrency-info-recovery/metamask/mforgood/D8_private_key\n\ngeth attach http://127.0.0.1:3334\nweb3.fromWei(eth.getBalance(\'0x7e932ab056a3dce4bcdd73092430c3f967e1bea3\'), \'ether\');\n\nweb3.personal.importRawKey("111111111PRIVATEKEY1111111111", "password")\npersonal.unlockAccount("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")\npersonal.listAccounts\neth.getBalance("0xD8f24D419153E5D03d614C5155f900f4B5C8A65C")\neth.getBalance(eth.accounts[1])\nnet.peerCount\neth.getCode("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC")\nvar voter = eth.contract([{"inputs":[{"internalType":"string","name":"option","type":"string"}],"name":"addOption","outputs":[],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]).at("0xE683007C5BfB5BEBA5481C3e938dD4DC47cddbFC");\nvoter\nvoter.addOption("mlibre" , {from: "0xD8f24D419153E5D03d614C5155f900f4B5C8A65C"})\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://geth.ethereum.org/docs/"},"https://geth.ethereum.org/docs/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/eth-educators/ethstaker-guides/blob/main/merge-goerli-prater.md"},"https://github.com/eth-educators/ethstaker-guides/blob/main/merge-goerli-prater.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://consensys.io/quorum/developers"},"https://consensys.io/quorum/developers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.goquorum.consensys.io/"},"https://docs.goquorum.consensys.io/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.goquorum.consensys.io/deploy/install/overview"},"https://docs.goquorum.consensys.io/deploy/install/overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.goquorum.consensys.io/concepts/blockchain-basics"},"https://docs.goquorum.consensys.io/concepts/blockchain-basics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/quorum-genesis-tool"},"https://www.npmjs.com/package/quorum-genesis-tool"))))}u.isMDXComponent=!0},917:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clef-cdffd95e38638cf7f346748161487106.png"}}]);