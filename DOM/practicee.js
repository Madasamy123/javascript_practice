const container=document.querySelector(".container");
const addlist=document.getElementById("change")

addlist.addEventListener("click",()=>{
    const head=document.getElementById("heading");
    head.textContent="My product list";
    const newdiv=document.createElement("div");
    newdiv.textContent="Heading";
    newdiv.classList.add("newdiv1");
    head.appendChild(newdiv)



    const newlist=document.createElement("p");
    newlist.textContent="I am madasamy from tirunelveli";
    newlist.classList.add("paragraph");
    newdiv.appendChild(newlist);
   



});