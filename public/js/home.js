

let i = 0;
var intervalid;

function start() {
  var div = document.getElementById("banner");

  let back = [
    `<h2>LONG TERM RENTALS</h2><P>CHOOSE FROM MONTHLY AND QUARTLY PLAN</P>`,
    `<H2>SELF RIDE BIKE RENTALS</H2><P>NOW START AT ₹8/HOUR </P>`,
    ` <h2>RENT TODAY,OWN TOMORROW</h2>
      <p>ZERO DOWN PAYMENT,FLEXIBAL OWNERSHIP</p>`,
  ];
//   console.log(back);

  setInterval(function () {
    if (i == 2) {
      i = 0;
    }

    div.innerHTML = null;
    div.innerHTML = back[i];

    i++;
  }, 7000);
}
start();

window.addEventListener("scroll", eight);
function eight() {
  let fw13Nav = document.getElementById("fw13Nav");
  fw13Nav.classList.toggle("active", window.scrollY > 0);
}

function toggle1() {
//   console.log("hello");
  let dark = document.getElementById("container");
//   console.log(dark);
  dark.classList.toggle("Dark");

let popup=document.getElementById("TheDestinyChose");
popup.classList.toggle("Dark123")

}

//TARIKH
function TARIKH(){
    let tarikh1=document.getElementById("tarikhPeTarikh1").value;
    let tarikh2=document.getElementById("tarikhPeTarikh2").value;
    let tari1=+ tarikh1[8]+tarikh1[9]
    let tari2=+ tarikh2[8]+tarikh2[9]
    // console.log(tari2-tari1)
let tari12=tari2-tari1;
    // console.log(tarikh2)
    let antim=[tarikh1,tarikh2,tari12]
    console.log(antim)
localStorage.setItem("antim",JSON.stringify(antim))

    // console.log( Math.abs(tarikh2-tarikh1) )

     window.location.href="/bikedisplay"

}

// faq
function faqKiyaJaye(){
    window.location.href="/Faq"
    // <a href="/faq">faq</a>
  

}


function safetyKhol(){
    window.location.href="/safety"
}

function khojlenge(){
    alert("Thank for visiting our website  we will callback you soon")
}



// fleet and pricing

