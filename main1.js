function message(){
  message =document.getElementById("message") .value;
    
    
   
     localStorage.setItem("send a message",message);
     
    
    window.location="index2.html";
}