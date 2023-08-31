"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8160],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=o.createContext({}),a=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=a(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=a(t),m=l,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?o.createElement(h,r(r({ref:n},u),{},{components:t})):o.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:l,r[1]=s;for(var a=2;a<i;a++)r[a]=t[a];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=t(7462),l=(t(7294),t(3905));const i={sidebar_position:13,tags:["Linux","shell","bash","zsh","script"]},r="Shell",s={unversionedId:"linux/shell",id:"linux/shell",title:"Shell",description:"Bash",source:"@site/docs/linux/shell.md",sourceDirName:"linux",slug:"/linux/shell",permalink:"/Tutorials/linux/shell",draft:!1,tags:[{label:"Linux",permalink:"/Tutorials/tags/linux"},{label:"shell",permalink:"/Tutorials/tags/shell"},{label:"bash",permalink:"/Tutorials/tags/bash"},{label:"zsh",permalink:"/Tutorials/tags/zsh"},{label:"script",permalink:"/Tutorials/tags/script"}],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,tags:["Linux","shell","bash","zsh","script"]},sidebar:"tutorialSidebar",previous:{title:"Editor",permalink:"/Tutorials/linux/editor"},next:{title:"GRUB",permalink:"/Tutorials/linux/grub"}},c={},a=[{value:"Bash",id:"bash",level:2},{value:"Case-insensitive auto completion",id:"case-insensitive-auto-completion",level:3},{value:"Simple Bash Scripts",id:"simple-bash-scripts",level:2},{value:"Mouse location",id:"mouse-location",level:3},{value:"Get screen resolution",id:"get-screen-resolution",level:3},{value:"Click, Move and scroll on the screen",id:"click-move-and-scroll-on-the-screen",level:3},{value:"zsh",id:"zsh",level:2}],u={toc:a},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shell"},"Shell"),(0,l.kt)("h2",{id:"bash"},"Bash"),(0,l.kt)("h3",{id:"case-insensitive-auto-completion"},"Case-insensitive auto completion"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Add the following line to the /etc/inputrc file to enable case-insensitive auto completion\necho 'set completion-ignore-case On' | sudo tee -a /etc/inputrc\n\n# or as root\necho 'set completion-ignore-case On' >> /etc/inputrc \n\n# or for current user only\necho \"set completion-ignore-case on\" >> ~/.inputrc\n")),(0,l.kt)("h2",{id:"simple-bash-scripts"},"Simple Bash Scripts"),(0,l.kt)("h3",{id:"mouse-location"},"Mouse location"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"while true; do\n  sleep 2\n  xdotool getmouselocation\ndone\n")),(0,l.kt)("h3",{id:"get-screen-resolution"},"Get screen resolution"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RES=$(xdpyinfo | grep dimensions | awk '{print $2}')\nWIDTH=$(echo $RES | awk -Fx '{print $1}')\nHEIGHT=$(echo $RES | awk -Fx '{print $2}')\n")),(0,l.kt)("h3",{id:"click-move-and-scroll-on-the-screen"},"Click, Move and scroll on the screen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Usage: ./click2.bash 3 30\n\n# Check for two arguments\nif [[ $# -ne 3 ]]; then\n echo "Usage: $0 <mouse idle time in seconds> <sleep time in each loop> <specific action each Nth time>"\n exit 1\nfi\n\nmousemoveAndClick() {\n # Move the mouse to the specified coordinates\n xdotool mousemove $1 $2\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\nscroll() {\n local direction=$1\n local count=$2\n if [[ $direction == "up" ]]; then\n  for i in $(seq 1 $count); do\n   xdotool click 4\n   sleep 0.5\n  done    \n elif [[ $direction == "down" ]]; then\n  for i in $(seq 1 $count); do   \n   xdotool click 5 \n   sleep 0.5\n  done\n fi\n}\n\nremove_esc() {\n # Move the mouse to the specified coordinates\n xdotool mousemove 1575 572\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\npress_esc_and_click() {\n # Press ESC\n xdotool key Escape\n # Sleep for 1 second\n sleep 1\n # mouse click\n xdotool click 1\n remove_esc\n}\n\n\n\nbuy() {\n # Move the mouse to the specified coordinates\n xdotool mousemove 1556 1230\n # mouse click\n xdotool click 1\n # Sleep for 1 second\n sleep 1\n}\n\ncounter=0\n# Get the idle time in milliseconds\nIDLE_TIME=$(echo "$1 * 1000" | bc)\n\nwhile true; do\n # Get the current idle time of the mouse pointer in milliseconds\n IDLE=$(xprintidle)\n\n # Check if the mouse has been idle for at least the specified time\n if [[ $IDLE -ge $IDLE_TIME ]]; then\n   \n  ((counter++))\n  echo "Increasing $counter"\n\n  # Boss\n  mousemoveAndClick 34 393\n  press_esc_and_click\n  \n  # top left\n  mousemoveAndClick 1173 647\n  buy\n\n  if [[ $((counter % $3)) -eq 0 ]]; then\n   scroll "down" 40\n  fi\n fi\n\n # Sleep for specified time\n sleep $2\ndone\n')),(0,l.kt)("p",null,"And run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x click.sh\n./click.sh 1 30 50\n")),(0,l.kt)("h2",{id:"zsh"},"zsh"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S zsh\n")))}d.isMDXComponent=!0}}]);