document.getElementById("welcome").addEventListener("click", dilip);
document.getElementById("TheCross").addEventListener("click",dilip)
      function dilip() {
        
          var blur = document.getElementById("blur");
          blur.classList.toggle('active')
          var popup420 = document.getElementById("popup420");
          popup420.classList.toggle('active')
        }

    function log() {
    
        document.getElementById("input").style.display="none";

        document.getElementById("inputs").style.display="inline-block";
        document.getElementById("lo").innerHTML="Login";
   
       
    }
    function sig() {
        document.getElementById("inputs").style.display="none";
        
        document.getElementById("input").style.display="inline-block";
        
        document.getElementById("lo").innerHTML="Signup";
  

        
    }