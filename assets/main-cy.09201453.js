import{r as o,Z as m}from"./core.3bf32fc3.js";const d=o.child({name:"main"}),e=document.querySelector("pre.zenuml");var n;const c=((n=e==null?void 0:e.textContent)==null?void 0:n.trim())||`
// comment
A
A.method`,t=new m(e);console.log("set zenUML to window");window.zenUml=t;t.render(c,{theme:"theme-nab"}).then(r=>{d.debug("render resolved",r)});window.parentLogger=o;
