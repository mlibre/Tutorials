"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7624],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>b});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,l=n.parentName,u=p(n,["components","mdxType","originalType","parentName"]),c=s(t),m=i,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(b,o(o({ref:e},u),{},{components:t})):r.createElement(b,o({ref:e},u))}));function b(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p[c]="string"==typeof n?n:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3802:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:1,tags:["Linux","python","ai"]},o="Python",p={unversionedId:"ai/python-for-ai",id:"ai/python-for-ai",title:"Python",description:"Install",source:"@site/docs/ai/python-for-ai.md",sourceDirName:"ai",slug:"/ai/python-for-ai",permalink:"/Wisdom-Hub/ai/python-for-ai",draft:!1,tags:[{label:"Linux",permalink:"/Wisdom-Hub/tags/linux"},{label:"python",permalink:"/Wisdom-Hub/tags/python"},{label:"ai",permalink:"/Wisdom-Hub/tags/ai"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Linux","python","ai"]},sidebar:"tutorialSidebar",previous:{title:"AI",permalink:"/Wisdom-Hub/ai/"},next:{title:"Geenrative AI",permalink:"/Wisdom-Hub/ai/generative ai"}},l={},s=[{value:"Install",id:"install",level:2},{value:"Jupyter Notebook",id:"jupyter-notebook",level:2},{value:"Concepts",id:"concepts",level:2},{value:"String",id:"string",level:3},{value:"Number",id:"number",level:3},{value:"List",id:"list",level:3},{value:"Tuple",id:"tuple",level:3},{value:"Dictionary",id:"dictionary",level:3},{value:"Loop",id:"loop",level:3},{value:"Functions",id:"functions",level:3},{value:"Math",id:"math",level:2}],u={toc:s},c="wrapper";function d(n){let{components:e,...t}=n;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python"},"Python"),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S python\npython --version\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Libraries and Executable path:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import sys\n\nprint ('\\n'.join(sys.path))\n# /usr/lib/python312.zip\n# /usr/lib/python3.12\n# /usr/lib/python3.12/lib-dynload\n# /home/mlibre/.local/lib/python3.12/site-packages\n# /usr/lib/python3.12/site-packages\n\nprint (sys.executable)\n# /usr/bin/python\n\nhelp(\"a\".find)\n# Help on built-in function find:\n\n# find(...) method of builtins.str instance\n#     S.find(sub[, start[, end]]) -> int\n\n#     Return the lowest index in S where substring sub is found,\n#     such that sub is contained within S[start:end].  Optional\n#     arguments start and end are interpreted as in slice notation.\n\n#     Return -1 on failure.\n")),(0,i.kt)("h2",{id:"jupyter-notebook"},"Jupyter Notebook"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install notebook --break-system-packages\njupyter notebook\n")),(0,i.kt)("p",null,"You can also open ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8888/tree")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8888/lab")),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("h3",{id:"string"},"String"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'text = "abcd"\nprint ("thank :) %s" % text) # abcd\nprint (f"thank :) {text[0:3]}") # abc\nprint (f\'\'\'thanks\n:)\n{text[1:]} # bcd\n{text[-1]} # d\n\'\'\')\n\ntext2 = "pi is {pi:.2f}"\nprint(text2.format(pi = 3.144444)) # pi is 3.14\n\ntext3 = "pi is {} or {}"\nprint(text3.format(3.14, 3)) # pi is 3.14 or 3\n\ntext4 = "pi is {0} or {1}"\nprint(text4.format(3.14, 3)) # pi is 3.14 or 3\n\ntext5 = "a big number {0:,.3f}"\nprint(text5.format(3000.14567)) # a big number 3,000.146\n\ntext6 = "a big number {:,.3f}"\nprint(text6.format(3000.14567)) # a big number 3,000.146\n\ntext7 = "pi is a number"\nisLoc, isLoc2 = text7.find("is"), text2.index("is")\nprint(isLoc, isLoc2) # 3 3\n')),(0,i.kt)("h3",{id:"number"},"Number"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"piString = \"3.14\"\npi = float(piString) # 3.14\nb = int(pi) # 3\nprint(f'''\nMultiplication: {pi * b}\nDivision: {pi / b}\nFloor division: {pi // b}\nModulus: {pi % b}\nExponentiation: {pi ** b}\n''')\n")),(0,i.kt)("h3",{id:"list"},"List"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mixed = [\"apple\", 2, 3.5, True]\nmixed.append(\"orange\")\nmixed.remove(3.5)\nprint(mixed) # ['apple', 2, True, 'orange']\n\nsquares = [x ** 2 for x in range(10)]\nprint(squares) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n")),(0,i.kt)("h3",{id:"tuple"},"Tuple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'fruits = ("apple", "banana", "cherry")\n# Tuples are immutable, so you can\'t modify them directly\nfruits[0] = "kiwi" # would raise an error\n')),(0,i.kt)("h3",{id:"dictionary"},"Dictionary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"person = {\n  \"name\": \"Alice\",\n  \"age\": 25,\n  \"city\": \"New York\"\n}\nprint(person) # {'name': 'Alice', 'age': 25, 'city': 'New York'}\nprint(person[\"name\"]) # Alice\nprint(person.keys()) # dict_keys(['name', 'age', 'city'])\nprint(person.items()) # dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York')])\n")),(0,i.kt)("h3",{id:"loop"},"Loop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'text = "abcd"\nfor i in text:\n  print(i)\n# a b c d\n\nfor i in range(5):\n    print(i)\n# 0 1 2 3 4\n\n# Looping through a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n# apple banana cherry\n\n# Looping through a dictionary\nperson = {"name": "Alice", "age": 25, "city": "New York"}\nfor key, value in person.items():\n    print(f"{key}: {value}")\n# name: Alice\n# age: 25\n# city: New York\n')),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def greet(name="Guest"):\n    return f"Hello, {name}!"\n\nprint(greet()) # Hello, Guest!\nprint(greet("Bob")) # Hello, Bob!\n\n\ndef sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3, 4)) # 10\n\n\ndef describe_person(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")\n\ndescribe_person(name="Alice", age=25, city="New York")\n# name: Alice\n# age: 25\n# city: New York\n\n\nadd = lambda x, y: x + y\nprint(add(3, 5)) # 8\n\n# Using lambda with sort\npoints = [(2, 3), (1, 2), (4, 1)]\nsecondValue = lambda point: point[1] # always returns second value\npoints.sort(key=secondValue)\nprint(points) # [(4, 1), (1, 2), (2, 3)]\n\n\ndef my_decorator(func):\n    def wrapper():\n        print("Something is happening before the function is called.")\n        func()\n        print("Something is happening after the function is called.")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()\n# Output:\n# Something is happening before the function is called.\n# Hello!\n# Something is happening after the function is called.\n')),(0,i.kt)("h2",{id:"math"},"Math"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import math as m\nm.pi # 3.141592653589793\n\nfrom math import *\nprint(pi)\n\nimport random as r\nprint(r.random())\n")))}d.isMDXComponent=!0}}]);