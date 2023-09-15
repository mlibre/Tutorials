"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:13,tags:["Linux","shell","bash","zsh","script"]},i="Shell and Scripting",o={unversionedId:"linux/shell-scripting",id:"linux/shell-scripting",title:"Shell and Scripting",description:"Login shell vs non-login-shell",source:"@site/docs/linux/shell-scripting.md",sourceDirName:"linux",slug:"/linux/shell-scripting",permalink:"/Wisdom-Hub/linux/shell-scripting",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"shell",permalink:"/Wisdom-Hub/tags/shell"},{label:"bash",permalink:"/Wisdom-Hub/tags/bash"},{label:"zsh",permalink:"/Wisdom-Hub/tags/zsh"},{label:"script",permalink:"/Wisdom-Hub/tags/script"}],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,tags:["Linux","shell","bash","zsh","script"]},sidebar:"tutorialSidebar",previous:{title:"TextOps",permalink:"/Wisdom-Hub/linux/textOps"},next:{title:"process",permalink:"/Wisdom-Hub/linux/processes"}},s={},p=[{value:"Login shell vs non-login-shell",id:"login-shell-vs-non-login-shell",level:2},{value:"Bash",id:"bash",level:2},{value:"Basics",id:"basics",level:3},{value:"echo, env, export, set, unset, variables",id:"echo-env-export-set-unset-variables",level:3},{value:"source, alias",id:"source-alias",level:3},{value:"history",id:"history",level:3},{value:"Example",id:"example",level:4},{value:"Command types",id:"command-types",level:3},{value:"Prompt Shell",id:"prompt-shell",level:3},{value:"Case-insensitive Auto completion",id:"case-insensitive-auto-completion",level:3},{value:"Simple Bash Scripts",id:"simple-bash-scripts",level:3},{value:"Mouse location",id:"mouse-location",level:4},{value:"Get screen resolution",id:"get-screen-resolution",level:4},{value:"Click, Move and scroll on the screen",id:"click-move-and-scroll-on-the-screen",level:4},{value:"zsh",id:"zsh",level:2},{value:"Font",id:"font",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shell-and-scripting"},"Shell and Scripting"),(0,r.kt)("h2",{id:"login-shell-vs-non-login-shell"},"Login shell vs non-login-shell"),(0,r.kt)("p",null,"A shell session can be either a ",(0,r.kt)("inlineCode",{parentName:"p"},"login shell")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"non-login shell"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"login shell")," is the ",(0,r.kt)("strong",{parentName:"p"},"first shell")," that runs under ",(0,r.kt)("strong",{parentName:"p"},"your user ID")," when you start an interactive session, such as logging in via ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"su -"),". This shell reads and executes the environment configuration files ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/profile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),". You can verify if a shell is a login shell by running ",(0,r.kt)("inlineCode",{parentName:"p"},"shopt login_shell"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"non-login shell")," is any shell started in an ",(0,r.kt)("strong",{parentName:"p"},"existing session"),", like a terminal in a graphical environment, a shell ",(0,r.kt)("strong",{parentName:"p"},"inside tmux"),", or a shell within another shell. These shells ",(0,r.kt)("strong",{parentName:"p"},"do not read")," the environment configuration files (",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/profile")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),"), but they do read the shell configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),")."),(0,r.kt)("h2",{id:"bash"},"Bash"),(0,r.kt)("h3",{id:"basics"},"Basics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can declare and use ",(0,r.kt)("inlineCode",{parentName:"li"},"variables"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'my_var="Hello, World!"\necho $my_var\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"if"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"if [ condition ]; then\n  # Code to execute if condition is true\nfi\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loops"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'for i in {1..5}; do\n  echo "Iteration $i"\ndone\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Functions"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'my_function() {\n  echo "Hello from my function!"\n}\nmy_function\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Command Line Arguments"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "First argument: $1"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Input and Output"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'read -p "Enter your name: " name\necho "Hello, $name!"\n')),(0,r.kt)("h3",{id:"echo-env-export-set-unset-variables"},"echo, env, export, set, unset, variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Commands"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"VAR_NAME=val")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Set ",(0,r.kt)("inlineCode",{parentName:"td"},"VAR_NAME")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"val"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"set")),(0,r.kt)("td",{parentName:"tr",align:"center"},"displays shell variables and functions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"set -o")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display current shell options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"set -e")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Exit immediately if a command in a script exits with a non-zero status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"unset MYVAR")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Unset the environment variable named ",(0,r.kt)("inlineCode",{parentName:"td"},"VAR_NAME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"export VAR")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Make var available to child processes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:"center"},"View current environment vars")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $VAR")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display value of ",(0,r.kt)("inlineCode",{parentName:"td"},"VAR"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $PATH")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display value of ",(0,r.kt)("inlineCode",{parentName:"td"},"PATH"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $HOME")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display user's home directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $EDITOR")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display default text editor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $HISTFILE")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display command history file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $SHELL")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display default shell program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $USER")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display current username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $?")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display last command exit status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"echo $PS1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Display the shell prompt")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," when you want to make a variable available to child processes\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," primarily for managing shell options and attributes, but it can also be used to set local variables")),(0,r.kt)("h3",{id:"source-alias"},"source, alias"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Load functions into the current shell session.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"source ~/.bashrc")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Reloads the user's Bash profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"source my_script.sh")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Executes a shell script within the current shell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"alias")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create or display command aliases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"alias ll='ls -l'")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Creates an alias 'll' for the 'ls -l' command.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"alias c=clear")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Creates an alias 'c' for the 'clear' command.")))),(0,r.kt)("h3",{id:"history"},"history"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Commands"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"history 5")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Displays the last 5 commands in the history")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!!")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Repeats the last executed command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!*")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Represents all arguments of the last command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!n")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Repeats the nth command in ",(0,r.kt)("inlineCode",{parentName:"td"},"history"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!-n")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Repeats the nth command from the current command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Repeats the most recent command that starts with ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!:1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"!:2"),", ..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Represents the first, second, etc. arguments of the last command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!:0")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Represents the command + arguments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"command !:0-2")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Executes the ",(0,r.kt)("strong",{parentName:"td"},"command")," with the first two arguments of the last command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"command !:1-2")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Executes the ",(0,r.kt)("strong",{parentName:"td"},"command")," with the second and third arguments of the last command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"command !:2*")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Executes ",(0,r.kt)("strong",{parentName:"td"},"command")," from the second arguments of the last command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"command !571:2*")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Executes ",(0,r.kt)("strong",{parentName:"td"},"command")," from the secondof the 571st command in the history")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# List all files in current directory\nls -l\n# output\n# -rw-r--r--  1 mlibre mlibre    7 Sep  8 11:52 test\n# -rw-r--r--  1 mlibre mlibre    7 Sep  8 11:51 test2\n# -rw-r--r--  1 mlibre mlibre    7 Sep  8 11:52 test3\n\n# Concatenate the first two files\ncat test test2 test3\n# output\n# salam1\n# salam2\n# salam3\n\n# Concatenate the previous two files again using the history shortcut\ncat !:1-2\n# output\n# cat test test2\n# salam1\n# salam2\n\n# Concatenate the first two files mentioned in the previous command\ncat test test2 test3\ncat !:0-2\n# output\n# cat cat test test2\n# cat: cat: No such file or directory\n# salam1\n# salam2\n\n# Concatenate the second file mentioned in the previous command (file2.txt)\ncat test test2 test3\ncat !:2*\n# output\n# cat test2 test3\n# salam2\n# salam3\n\nhistory 5\n# 598  ls -l file3.txt'\n# 599  ls -l test3 \n# 600  cat test test2 test3\n# Concatenate the second argument of the 599st command in your bash history, which is 'file3.txt'\ncat !599:2*\n# output\n# cat test3\n# salam3\n")),(0,r.kt)("h3",{id:"command-types"},"Command types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"type ls\n# ls is an alias for ls $LS_OPTIONS\n\ntype ssh\n# ssh is /usr/bin/ssh\n")),(0,r.kt)("h3",{id:"prompt-shell"},"Prompt Shell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo $PS1\n\nPS1=\'$(if [ $? -eq 0 ]; then echo -e "\\[\\033[42m\\] \\[\\033[0m\\]"; else echo -e "\\[\\033[41m\\] \\[\\033[0m\\]"; fi) \\[\\033[1;32m\\]$(if [ $(jobs | wc -l) -gt 0 ]; then echo -n "\\j "; fi)\\[\\033[1;36m\\]\\u\\[\\033[0m\\] \\[\\033[1;33m\\]\\w\\[\\033[0m\\] \\[\\033[1;34m\\]$(if [ $(date +%H) -ge 6 -a $(date +%H) -lt 18 ]; then echo -n "\u2600\ufe0f"; else echo -n "\ud83c\udf19"; fi)\\[\\033[0m\\] \'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano .bashrc\n# put your PS1 in the last line\n")),(0,r.kt)("h3",{id:"case-insensitive-auto-completion"},"Case-insensitive Auto completion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Add the following line to the /etc/inputrc file to enable case-insensitive auto completion\necho 'set completion-ignore-case On' | sudo tee -a /etc/inputrc\n\n# or as root\necho 'set completion-ignore-case On' >> /etc/inputrc \n\n# or for current user only\necho \"set completion-ignore-case on\" >> ~/.inputrc\n")),(0,r.kt)("h3",{id:"simple-bash-scripts"},"Simple Bash Scripts"),(0,r.kt)("h4",{id:"mouse-location"},"Mouse location"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"while true; do\n  sleep 2\n  xdotool getmouselocation\ndone\n")),(0,r.kt)("h4",{id:"get-screen-resolution"},"Get screen resolution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"RES=$(xdpyinfo | grep dimensions | awk '{print $2}')\nWIDTH=$(echo $RES | awk -Fx '{print $1}')\nHEIGHT=$(echo $RES | awk -Fx '{print $2}')\n")),(0,r.kt)("h4",{id:"click-move-and-scroll-on-the-screen"},"Click, Move and scroll on the screen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Usage: ./click2.bash 3 30\n\n# Check for two arguments\nif [[ $# -ne 3 ]]; then\n echo "Usage: $0 <mouse idle time in seconds> <sleep time in each loop> <specific action each Nth time>"\n exit 1\nfi\n\nmousemoveAndClick() {\n # Move the mouse to the specified coordinates\n xdotool mousemove $1 $2\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\nscroll() {\n local direction=$1\n local count=$2\n if [[ $direction == "up" ]]; then\n  for i in $(seq 1 $count); do\n   xdotool click 4\n   sleep 0.5\n  done    \n elif [[ $direction == "down" ]]; then\n  for i in $(seq 1 $count); do   \n   xdotool click 5 \n   sleep 0.5\n  done\n fi\n}\n\nremove_esc() {\n # Move the mouse to the specified coordinates\n xdotool mousemove 1575 572\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\npress_esc_and_click() {\n # Press ESC\n xdotool key Escape\n # Sleep for 1 second\n sleep 1\n # mouse click\n xdotool click 1\n remove_esc\n}\n\n\n\nbuy() {\n # Move the mouse to the specified coordinates\n xdotool mousemove 1556 1230\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\ncounter=0\n# Get the idle time in milliseconds\nIDLE_TIME=$(echo "$1 * 1000" | bc)\n\nwhile true; do\n # Get the current idle time of the mouse pointer in milliseconds\n IDLE=$(xprintidle)\n\n # Check if the mouse has been idle for at least the specified time\n if [[ $IDLE -ge $IDLE_TIME ]]; then\n   \n  ((counter++))\n  echo "Increasing $counter"\n\n  # Boss\n  mousemoveAndClick 34 393\n  press_esc_and_click\n  \n  # top left\n  mousemoveAndClick 1173 647\n  buy\n\n  if [[ $((counter % $3)) -eq 0 ]]; then\n   scroll "down" 40\n  fi\n fi\n\n # Sleep for specified time\n sleep $2\ndone\n')),(0,r.kt)("p",null,"And run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x click.sh\n./click.sh 1 30 50\n")),(0,r.kt)("h2",{id:"zsh"},"zsh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S zsh\n")),(0,r.kt)("h2",{id:"font"},"Font"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Monospace 12\n")))}d.isMDXComponent=!0}}]);