const vissible=document.querySelector("#online");
 const dekhaa=()=>{
   const nadekhiyeko = document.querySelector(".containeer");
   nadekhiyeko.classList.add("yes");
   const close=document.querySelector("#cross");

   close.addEventListener('click',()=>{
    nadekhiyeko.classList.remove("yes");
   });
   const removed=document.querySelector("main");
   removed.addEventListener('click',()=>{
    nadekhiyeko.classList.remove("yes");
   })
 }
 const formSend=document.querySelector("#send");
const formsub=()=>{
  const names=document.querySelector("#name").value;
  const emails=document.querySelector("#email").value;
  const contact=document.querySelector("#contact").value;
    if (names=="") {
      document.getElementById("namespan").innerHTML="required***"
      return false;
    }
    if(!isNaN(names)){
      document.getElementById("namespan").innerHTML="number not avilable**";
      return false;
    }
    if (names.length<=2 || names.length>=20) {
      document.getElementById("namespan").innerHTML="invalid name";
      return false;
    }
    if (isNaN(contact)) {
      document.getElementById("contactspan").innerHTML="enter number";
      return false;
    }
    if (contact.length!=10) {
      document.getElementById("contactspan").innerHTML="invalid contact";
      return false;
    }
   if(emails=="" || emails==null){
      document.getElementById("emailspan").innerHTML=`required***`;
      return false;
     }
     if(emails.indexOf("@")<=0){
      document.getElementById("emailspan").innerHTML=`invalid email`;
      return false;
     }
     if (emails.charAt(emails.length-4)!=="." && emails.charAt(emails.length-3)!==".") {
      document.getElementById("emailspan").innerHTML=`invalid position of . in email`;
      return false;
     }
}
function entered(){
 document.querySelector(".emailicon").style.color="blue"; 
 document.querySelector(".below").innerHTML="mail us"; 
}
function leaved(){
  document.querySelector(".emailicon").style.color="white"; 
  document.querySelector(".below").innerHTML=""; 
 }
 function entered1(){
  document.querySelector(".ntc").style.color="blue";
  document.querySelector(".here").innerHTML="call us"; 
 }
 function leaved1(){
   document.querySelector(".ntc").style.color="white";
   document.querySelector(".here").innerHTML="";  
  }
  function entered2(){
    document.querySelector(".ncell").style.color="blue"; 
    document.querySelector(".there").innerHTML="call us"; 
   }
   function leaved2(){
     document.querySelector(".ncell").style.color="white";
     document.querySelector(".there").innerHTML="";  
    }
    const open=document.querySelector(".mobilenav");
    const func=()=>{
      const header=document.querySelector(".head");
        header.classList.toggle("acts");
    }
    open.addEventListener('click',func);
formSend.addEventListener('click',formsub);
vissible.addEventListener('click',dekhaa);