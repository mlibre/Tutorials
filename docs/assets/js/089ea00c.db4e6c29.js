"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),k=o,m=h["".concat(l,".").concat(k)]||h[k]||d[k]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={},r="Bitcoin",s={unversionedId:"blockchain/Bitcoin/readme",id:"blockchain/Bitcoin/readme",title:"Bitcoin",description:"A blockchain is a list of records, called blocks, which are linked and secured using cryptography.",source:"@site/docs/blockchain/Bitcoin/readme.md",sourceDirName:"blockchain/Bitcoin",slug:"/blockchain/Bitcoin/",permalink:"/Wisdom-Hub/blockchain/Bitcoin/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blockchain",permalink:"/Wisdom-Hub/blockchain/"},next:{title:"Simple implementation",permalink:"/Wisdom-Hub/blockchain/Bitcoin/pow-from-scratch/"}},l={},c=[{value:"Table of content",id:"table-of-content",level:2},{value:"Visualization of how Bitcoin is Workings",id:"visualization-of-how-bitcoin-is-workings",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Network Discovery",id:"network-discovery",level:3},{value:"Consensus",id:"consensus",level:2},{value:"Incentives",id:"incentives",level:2},{value:"Addresses And Wallets",id:"addresses-and-wallets",level:2},{value:"Transaction",id:"transaction",level:2},{value:"Longest chain",id:"longest-chain",level:2},{value:"Chain Reorganisation",id:"chain-reorganisation",level:2},{value:"Double Spending",id:"double-spending",level:2},{value:"Where do bitcoins come from?",id:"where-do-bitcoins-come-from",level:2},{value:"Bitcoin Storage",id:"bitcoin-storage",level:2},{value:"Merkle Root",id:"merkle-root",level:2},{value:"Simple POW Blockchain in nodejs",id:"simple-pow-blockchain-in-nodejs",level:2},{value:"References",id:"references",level:2},{value:"My Bitcoin Address",id:"my-bitcoin-address",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bitcoin"},"Bitcoin"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"blockchain")," is a list of records, called blocks, which are linked and secured using cryptography.",(0,o.kt)("br",{parentName:"p"}),"\n","Each block contains a cryptographic hash of the previous block, a timestamp, and a list of transactions.",(0,o.kt)("br",{parentName:"p"}),"\n","A blockchain is simply a public distributed ledger, and ",(0,o.kt)("inlineCode",{parentName:"p"},"bitcoin")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"blockchain"),".  "),(0,o.kt)("p",null,"I have also implemented a simple Proof-of-Work (POW) blockchain like bitcoin, you can find it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/pow-from-scratch"},"here")),(0,o.kt)("h2",{id:"table-of-content"},"Table of content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#table-of-content"},"Table of content")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#visualization-of-how-bitcoin-is-workings"},"Visualization of how Bitcoin is Workings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#architecture"},"Architecture"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-discovery"},"Network Discovery")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#consensus"},"Consensus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#incentives"},"Incentives")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#addresses-and-wallets"},"Addresses And Wallets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#transaction"},"Transaction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#longest-chain"},"Longest chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#chain-reorganisation"},"Chain Reorganisation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#double-spending"},"Double Spending")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#where-do-bitcoins-come-from"},"Where do bitcoins come from?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#bitcoin-storage"},"Bitcoin Storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#merkle-root"},"Merkle Root")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#simple-pow-blockchain-in-nodejs"},"Simple POW Blockchain in nodejs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#references"},"References")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#my-bitcoin-address"},"My Bitcoin Address"))),(0,o.kt)("h2",{id:"visualization-of-how-bitcoin-is-workings"},"Visualization of how Bitcoin is Workings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A visualization of how bitcoin works under the hood",src:n(960).Z,width:"5619",height:"2358"})),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin")," network is a ",(0,o.kt)("inlineCode",{parentName:"p"},"decentralized peer-to-peer")," network, meaning that it operates without a central authority or server. Nodes, connect to each other directly, allowing data to be shared and stored.  "),(0,o.kt)("p",null,"Bitcoin combines its ",(0,o.kt)("strong",{parentName:"p"},"network"),", ",(0,o.kt)("strong",{parentName:"p"},"cryptocurrency"),", and ",(0,o.kt)("strong",{parentName:"p"},"blockchain")," to record transactions transparently, prevent double spending, and ensure consensus via a process called ",(0,o.kt)("strong",{parentName:"p"},"proof-of-work")),(0,o.kt)("h3",{id:"network-discovery"},"Network Discovery"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Network Discovery")," or ",(0,o.kt)("strong",{parentName:"p"},"Peer Discovery")," in Bitcoin refers to the process by which nodes in the Bitcoin network find and connect with each other. When a new node joins the network, it starts to discover other nodes to connect with in order to participate in the network. This is typically done through a process called ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrapping"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When started for the first time, programs don\u2019t know the ",(0,o.kt)("strong",{parentName:"p"},"IP addresses")," of any active full ",(0,o.kt)("strong",{parentName:"p"},"nodes"),". In order to ",(0,o.kt)("strong",{parentName:"p"},"discover")," some IP addresses, they ",(0,o.kt)("strong",{parentName:"p"},"query")," one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS seeds")," hardcoded into ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin Core")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BitcoinJ"),". The response to the lookup should include one or more DNS A records with the IP addresses of full nodes that may accept new incoming connections. For example, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dig")," command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dig seed.bitcoin.sipa.be\n\n;; ANSWER SECTION:\nseed.bitcoin.sipa.be.   3600    IN      A       185.14.30.25\nseed.bitcoin.sipa.be.   3600    IN      A       18.213.155.196\nseed.bitcoin.sipa.be.   3600    IN      A       176.9.150.253\nseed.bitcoin.sipa.be.   3600    IN      A       79.137.224.63\nseed.bitcoin.sipa.be.   3600    IN      A       76.138.214.41\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"DNS seed: A DNS server which returns IP addresses of full nodes on the Bitcoin network to assist in peer discovery."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once a program has connected to the network, its ",(0,o.kt)("inlineCode",{parentName:"p"},"peers")," can begin to send it ",(0,o.kt)("inlineCode",{parentName:"p"},"addr")," (address) messages with the ",(0,o.kt)("inlineCode",{parentName:"p"},"IP addresses")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"port numbers of other peers")," on the network, providing a fully decentralized method of peer discovery. ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin Core")," keeps a record of known peers in a ",(0,o.kt)("strong",{parentName:"p"},"persistent on-disk database")," which usually allows it to connect directly to those peers on subsequent startups without having to use DNS seeds"))),(0,o.kt)("h2",{id:"consensus"},"Consensus"),(0,o.kt)("p",null,"Bitcoin achieves consensus through a process called ",(0,o.kt)("inlineCode",{parentName:"p"},"proof-of-work mining"),". Miners spend computational resources to find a solution to a cryptographic puzzle, and whichever miner finds the solution is able to create the next block."),(0,o.kt)("h2",{id:"incentives"},"Incentives"),(0,o.kt)("p",null,"The Bitcoin protocol offers two main incentives for mining:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Block rewards: New bitcoins are minted with each block, and the miner who finds the block receives the block reward"),(0,o.kt)("li",{parentName:"ul"},"Transaction fees: Each transaction on the Bitcoin network includes a transaction fee, paid to the miner who includes that transaction in a block")),(0,o.kt)("h2",{id:"addresses-and-wallets"},"Addresses And Wallets"),(0,o.kt)("p",null,"There is no such thing as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Wallet")," in the Bitcoin network. It is ",(0,o.kt)("inlineCode",{parentName:"p"},"abstract"),".  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Address")),(0,o.kt)("p",null,"An address is a hash of a bitcoin public-key wallet.",(0,o.kt)("br",{parentName:"p"}),"\n","You can use an address as many as you want to send and receive Bitcoin.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wallet")),(0,o.kt)("p",null,"A wallet is a software program that stores ",(0,o.kt)("inlineCode",{parentName:"p"},"key-pairs"),", created ",(0,o.kt)("inlineCode",{parentName:"p"},"addresses"),", and other information needed to access and manage your ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoins"),".  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key-pairs")),(0,o.kt)("p",null,"Key-pairs are a public key of an address to which some amount bitcoin was previously sent and the corresponding unique private key, which authorizes the bitcoin previously sent to the above public key (address) to be sent elsewhere."),(0,o.kt)("h2",{id:"transaction"},"Transaction"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin")," ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction")," is a transfer of Bitcoins from one user to another. It is a data structure that contains several fields, including inputs, outputs, and other metadata.",(0,o.kt)("br",{parentName:"p"}),"\n","When a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin")," transaction is created, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcast")," to the Bitcoin network and propagated to all ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes")," on the network. Each node verifies the transaction by checking that the digital signatures in the inputs field are valid. Once the transaction is verified by the nodes, it is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"mempool"),", which is a pool of ",(0,o.kt)("inlineCode",{parentName:"p"},"unconfirmed transactions")," ",(0,o.kt)("inlineCode",{parentName:"p"},"waiting")," to be ",(0,o.kt)("inlineCode",{parentName:"p"},"included")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"next block"),"."),(0,o.kt)("p",null,"A transaction components are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inputs - Information about the Bitcoin previously sent to Mark's address. For example, imagine Mark previously received 0.6 BTC from Alice and 0.6 BTC from Bob. Now, in order to send 1 BTC to Jessica, there might be two inputs: one input of 0.6 BTC previously from Alice and one input of 0.6 BTC previously from Bob."),(0,o.kt)("li",{parentName:"ul"},"Amount - The amount being sent, In this case Mark wants to send 1 BTC."),(0,o.kt)("li",{parentName:"ul"},"Outputs - The destination addresses of the Bitcoins. The first is 1.2 BTC (0.6 BTC + 0.6 BTC) to Jessica\u2019s public address. The second is 0.2 BTC returned as 'change' to Mark.")),(0,o.kt)("h2",{id:"longest-chain"},"Longest chain"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"longest chain")," refers to the chain of blocks that the majority of nodes on the network agree to and adopt as the authoritative blockchain. The longest chain is not determined by the number of blocks but by the amount of computational power or energy used to mine the blocks in the chain."),(0,o.kt)("h2",{id:"chain-reorganisation"},"Chain Reorganisation"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"chain reorganisation")," takes place when your node receives blocks that are part of a new ",(0,o.kt)("strong",{parentName:"p"},"longest chain"),". Your node will ",(0,o.kt)("strong",{parentName:"p"},"deactivate")," blocks in its ",(0,o.kt)("strong",{parentName:"p"},"old longest chain")," in favour of the blocks that build the new longest chain.  "),(0,o.kt)("p",null,"A chain reorganisation most commonly takes place after ",(0,o.kt)("strong",{parentName:"p"},"two blocks have been mined")," at the same time."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"next block")," to be mined will build upon one of these two blocks, creating a new longest chain that all nodes on the network will be happy to adopt"),(0,o.kt)("h2",{id:"double-spending"},"Double Spending"),(0,o.kt)("p",null,"Double spending is when someone (A) tries spending the same bitcoin twice. Bitcoin network prevents this.",(0,o.kt)("br",{parentName:"p"}),"\n","When A broadcast the two transactions, they will go in unconfirmed transactions' pools. From there when a miner (X) validates the first transaction, the bitcoin will be sent to the new owner. so X will invalidate the second transaction because A is not the owner of the bitcoin anymore. But if the two transactions gets validated and mined by two different miners and gets added to the next block. it means there are two different blockchains now. (one with the first transaction and one with the second transaction). Now Chain Reorganisation comes into play. miners will always accept the longest chain.  "),(0,o.kt)("h2",{id:"where-do-bitcoins-come-from"},"Where do bitcoins come from?"),(0,o.kt)("p",null,"As an incentive to use processing power to try and add new blocks of transactions on to the blockchain, each new block makes available a fixed amount of bitcoins that did not previously exist. Therefore, if you are able to successfully mine a block, you are able to \u201csend\u201d yourself these new bitcoins as a reward for your effort."),(0,o.kt)("h2",{id:"bitcoin-storage"},"Bitcoin Storage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin")," does not enforce a specific structure for storing the transaction journal, but most implementations utilize a database like ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDB")," for efficient storage of transactions and related metadata"),(0,o.kt)("h2",{id:"merkle-root"},"Merkle Root"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Merkle root")," is an important part of blocks in the Bitcoin blockchain. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin")," blockchain is ",(0,o.kt)("strong",{parentName:"p"},"not a single Merkle tree"),", but rather a chain of blocks. Each block contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"Merkle root"),", This ",(0,o.kt)("inlineCode",{parentName:"p"},"Merkle root")," is built using a ",(0,o.kt)("strong",{parentName:"p"},"Merkle tree")," structure and is used to verify the integrity of the transactions in the block. To get the ",(0,o.kt)("strong",{parentName:"p"},"leaves")," for our tree, we use the transaction hash (the ",(0,o.kt)("inlineCode",{parentName:"p"},"TXID"),") of every transaction included in the block.",(0,o.kt)("br",{parentName:"p"}),"\n","You get a ",(0,o.kt)("inlineCode",{parentName:"p"},"TXID")," by hashing transaction data through ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA256")," twice."),(0,o.kt)("p",null,"Each new block contains a hash of the ",(0,o.kt)("strong",{parentName:"p"},"previous block's header"),". This connects the blocks in a chain, because if anything changes in a previous block, the hash will change too."),(0,o.kt)("p",null,"Specifically, each block header includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Merkle root")," hash representing all the transactions in that block. If even a single transaction in the block were ",(0,o.kt)("strong",{parentName:"p"},"modified"),", it would cause the ",(0,o.kt)("inlineCode",{parentName:"p"},"TXID")," of that trasnaction to change. and so the ",(0,o.kt)("strong",{parentName:"p"},"Merkle root to change"),". This would make the block's overall ",(0,o.kt)("strong",{parentName:"p"},"header hash")," change too."),(0,o.kt)("p",null,"So the ",(0,o.kt)("inlineCode",{parentName:"p"},"Merkle root")," allows any changes to previous transactions to be detected. If a transaction were deleted from a previous block, the Merkle root in the header of all following blocks would change. This would break the chain of hashes connecting the blocks."),(0,o.kt)("p",null,"You might wonder why we don't simply ",(0,o.kt)("strong",{parentName:"p"},"hash all transactions")," together to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions hash")," field in the block header, instead of hashing them in ",(0,o.kt)("strong",{parentName:"p"},"pairs")," to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Merkle root"),".",(0,o.kt)("br",{parentName:"p"}),"\n","While hashing all transactions together would ensure data ",(0,o.kt)("strong",{parentName:"p"},"integrity"),", it would ",(0,o.kt)("strong",{parentName:"p"},"not be efficient")," for ",(0,o.kt)("strong",{parentName:"p"},"verification"),". For instance, if a node wants to verify that a transaction is contained in a block (which has, let's say, 100 transactions), it would need to download and hash all 99 other transactions hashes. If the resulting hash matches the expected hash, then the transaction is confirmed to be in the block."),(0,o.kt)("p",null,"However, with a Merkle tree, the process is much more efficient. The node only needs to obtain a few ",(0,o.kt)("inlineCode",{parentName:"p"},"Merkle proofs"),". With a simple mathematical algorithm, it can confirm that the transaction is indeed included in the block. This is because Merkle trees allow for the proof of data belonging to a set without needing to store the entire set."),(0,o.kt)("p",null,"For instance, to prove that a specific transaction 'a' is part of a Merkle tree, everyone in the network will be aware of the hash function used by all Merkle trees. The hash of 'a' and its corresponding hash are hashed together, moving up the tree until the ",(0,o.kt)("strong",{parentName:"p"},"root hash"),", which is ",(0,o.kt)("strong",{parentName:"p"},"publicly known"),", is obtained. By comparing the obtained ",(0,o.kt)("strong",{parentName:"p"},"Merkle root")," and the ",(0,o.kt)("strong",{parentName:"p"},"Merkle root")," already available within the block header, the presence of transaction 'a' in this block can be verified. From this example, it is clear that in order to verify the presence of 'a', 'a' does not have to be revealed, nor do the other transactions have to be revealed; only some of their hashes are sufficient. This makes ",(0,o.kt)("strong",{parentName:"p"},"Merkle proof")," an efficient and simple method of verifying inclusivity."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"mathematical")," process of verifying a Merkle proof involves hashing the value in question with the hashes provided in the proof, iteratively, until you arrive at a computed Merkle root. If this computed root matches the known Merkle root of the block, the proof is valid, and the transaction is confirmed to be part of the block"),(0,o.kt)("p",null,"When you broadcast a transaction to the Bitcoin network, your wallet can download the new block headers and check if the transaction it created for you is included in the new block or not. This is made possible by the Merkle Tree structure."),(0,o.kt)("h2",{id:"simple-pow-blockchain-in-nodejs"},"Simple POW Blockchain in nodejs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mlibre/blockchain/tree/master/Tutorials/Bitcoin/pow-from-scratch"},"Here you can find a simple complete POW blockchain written in nodejs")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.bitcoin.com/get-started/"},"https://www.bitcoin.com/get-started/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/double-spending-explained"},"https://academy.binance.com/en/articles/double-spending-explained")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=phLSjZdDc5A"},"https://www.youtube.com/watch?v=phLSjZdDc5A")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learnmeabitcoin.com/technical/longest-chain"},"https://learnmeabitcoin.com/technical/longest-chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/blockchain-merkle-trees/"},"https://www.geeksforgeeks.org/blockchain-merkle-trees/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/blockchain-merkle-trees/"},"https://www.geeksforgeeks.org/blockchain-merkle-trees/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/merkle-trees-and-merkle-roots-explained"},"https://academy.binance.com/en/articles/merkle-trees-and-merkle-roots-explained"))),(0,o.kt)("h2",{id:"my-bitcoin-address"},"My Bitcoin Address"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"bc1qgwu903shgs4fse3s8u2vsufrsaxhnz26skqmzu")))}d.isMDXComponent=!0},960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/btc-48322f967f4ab665059cd395c8bceee8.jpg"}}]);