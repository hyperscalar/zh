document.addEventListener("page:loaded",(()=>{const e=document.querySelectorAll("pre > .mermaid");e.length&&NexT.utils.getScript(CONFIG.mermaid.js,{condition:window.mermaid}).then((()=>{e.forEach((e=>{const t=document.createElement("div");t.className="code-container";const a=document.createElement("div");a.innerHTML=e.innerHTML,a.className="mermaid",t.appendChild(a),CONFIG.copycode.enable&&NexT.utils.registerCopyButton(t,t,e.textContent);const n=e.parentNode;n.parentNode.replaceChild(t,n)})),mermaid.initialize({theme:CONFIG.darkmode&&window.matchMedia("(prefers-color-scheme: dark)").matches?CONFIG.mermaid.theme.dark:CONFIG.mermaid.theme.light,logLevel:4,flowchart:{curve:"linear"},gantt:{axisFormat:"%m/%d/%Y"},sequence:{actorMargin:50}}),mermaid.run()}))}));