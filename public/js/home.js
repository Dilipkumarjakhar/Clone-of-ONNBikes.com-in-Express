// const express=require('express');

// const app=require('../../../src/index');

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
//=-=-=-=-=-=-=-\=-\\=-=-=\\
function toggle3(){
   
    let dark = document.getElementById("container");
    // console.log(dark);
    dark.classList.toggle("Dark");

    let popup3=document.getElementById("main");
    popup3.classList.toggle("Dark123")

    // let popup2=document.getElementById("")
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
    // window.location.href="FAQ.html"
    // <a href="/faq">faq</a>
  

}


function safetyKhol(){
    window.location.href="safety.html"
}

function khojlenge(){
    alert("Thank for visiting our website  we will callback you soon")
}



// fleet and pricing


let data_b =
[

    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajCT100.jpg",
        brand: "Bajaj",
        model: "CT100",
        Daily:"259/Daily(24hrs)",
        weekly:"1024/Weekly(Mon-Fri)",
        monthly:"3199/Monthly(30 days)",
        bill:"Minimum Billing 79/4hours",
        
    }, 
    
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaNavi.jpg",
        brand: "HONDA",
        model: "Navi",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
     

    },
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajCT100.jpg",
        brand: "Bajaj",
        model: "CT100",
        Daily:"259/Daily(24hrs)",
        weekly:"1024/Weekly(Mon-Fri)",
        monthly:"3199/Monthly(30 days)",
        bill:"Minimum Billing 79/4hours",
        
    }, 
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajCT100.jpg",
        brand: "Bajaj",
        model: "CT100",
        Daily:"259/Daily(24hrs)",
        weekly:"1024/Weekly(Mon-Fri)",
        monthly:"3199/Monthly(30 days)",
        bill:"Minimum Billing 79/4hours",
        
    }, 
    
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaNavi.jpg",
        brand: "HONDA",
        model: "Navi",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
     

    },
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajCT100.jpg",
        brand: "Bajaj",
        model: "CT100",
        Daily:"259/Daily(24hrs)",
        weekly:"1024/Weekly(Mon-Fri)",
        monthly:"3199/Monthly(30 days)",
        bill:"Minimum Billing 79/4hours",
        
    }, 
    
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaNavi.jpg",
        brand: "HONDA",
        model: "Navi",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
     

    },

    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaActiva4G.jpg",
        brand: "Honda",
        model: "Activa",
       Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaDio.jpg",
        brand: "Honda",
        model: "Dio",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajCT100.jpg",
        brand: "Bajaj",
        model: "CT100",
        Daily:"259/Daily(24hrs)",
        weekly:"1024/Weekly(Mon-Fri)",
        monthly:"3199/Monthly(30 days)",
        bill:"Minimum Billing 79/4hours",
        
    }, 
    
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaNavi.jpg",
        brand: "HONDA",
        model: "Navi",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
     

    },

    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaActiva4G.jpg",
        brand: "Honda",
        model: "Activa",
       Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaDio.jpg",
        brand: "Honda",
        model: "Dio",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },
]
let data_p=[
    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar135.jpg",
        brand: "Bajaj",
        model: "Pulsar 133LS",
         Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
      

    },

    {
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar180.jpg",
        brand: "Bajaj",
        model: "Pulsar 180",
         Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
      

    },

    {
        brand: "Yamaha",
        model: "FZ",
    
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/YamahaFZ.jpg",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        brand: "Royal Enfield",
        model: "Classic 350",
      
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/RoyalEnfieldClassic350.jpg",
      Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        brand: "Bajaj",
        model: "DOMINOR 400ABS",
      
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajDominar400ABS.jpg",
         Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },
]
let data_j=[
    {
        brand: "Honda",
        model: "Hornet",
      
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaHornet.jpg",
         Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        brand: "Royal Enfield",
        model: "350 ThunderBird",
      
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/RoyalEnfieldThunderbird350.jpg",
         Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        brand: "Honda",
        model: "Dream Neo",
      
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaCD110.jpg",
       Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        brand: "Honda",
        model: "Livo",
 
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaLivo.jpg",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        brand: "Bajaj",
        model: "Pulsar 133LS",
      
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar135.jpg",
         Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

    {
        brand: "Bajaj",
        model: "Pulsar 180",
   
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar180.jpg",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },
]
let data_h=[{
        brand: "Honda",
        model: "Activa",
    
        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaActiva4G.jpg",
        Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

    },

        {
            brand: "Honda",
            model: "Dio",
         
            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaDio.jpg",
            Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

        },

        {
            brand: "Bajaj",
            model: "Pulsar",
       
            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar150.jpg",
            Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

        },

        {
            brand: "Bajaj",
            model: "Avenger 220 Street",
           
            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerStreet220.jpg",
            Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

        },

        {
            brand: "Bajaj",
            model: "Avenger 200 Cruise",
            
            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerCruise220.jpg",
             Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

        },]
        let data_m=[
                {
                    brand: "Bajaj",
                    model: "Avenger 200 Cruise",
                
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerCruise220.jpg",
                      Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Bajaj",
                    model: "Pulsar NS 200",
              
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsarNS160.jpg",
                     Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
                },

                {
                    brand: "Ktm",
                    model: "Duke 250",
                
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/KTMDuke250.jpg",
                      Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
                },

                {
                    brand: "Honda",
                    model: "Hornet",
                
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaHornet.jpg",
                    Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Royal Enfield",
                    model: "350 ThunderBird",
                  
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/RoyalEnfieldThunderbird350.jpg",
                     Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
                  
                },

                {
                    brand: "Honda",
                    model: "Dream Neo",
                  
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaCD110.jpg",
                     Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },]
        let data_u=[{
                brand: "Honda",
                model: "Livo",
            
                imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaLivo.jpg",
                Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",
            },

                {
                    brand: "Bajaj",
                    model: "Pulsar 133LS",
                
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar135.jpg",
                   Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Bajaj",
                    model: "Pulsar 180",
                   
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar180.jpg",
                    Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Yamaha",
                    model: "FZ",
                 
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/YamahaFZ.jpg",
                   Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Royal Enfield",
                    model: "Classic 350",
               
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/RoyalEnfieldClassic350.jpg",
                  Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Bajaj",
                    model: "DOMINOR 400ABS",
               
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajDominar400ABS.jpg",
                     Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },]
        let data_g=[{
                brand: "Honda",
                model: "Activa",
            
                imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaActiva4G.jpg",
                 Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

            },

                {
                    brand: "Honda",
                    model: "Dio",
                   
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaDio.jpg",
                   Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Bajaj",
                    model: "Pulsar",
               
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar150.jpg",
                    Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Bajaj",
                    model: "Avenger 220 Street",
                
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerStreet220.jpg",
                      Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Bajaj",
                    model: "Avenger 200 Cruise",
                   
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerCruise220.jpg",
                      Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Bajaj",
                    model: "Pulsar NS 200",
                   
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsarNS160.jpg",
                     Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Ktm",
                    model: "Duke 250",
                
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/KTMDuke250.jpg",
                    Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Honda",
                    model: "Hornet",
                  
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaHornet.jpg",
                      Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },

                {
                    brand: "Royal Enfield",
                    model: "350 ThunderBird",
                 
                    imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/RoyalEnfieldThunderbird350.jpg",
                      Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                },]
                let data_a=[{
                        brand: "Honda",
                        model: "Activa",
                        
                        imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaActiva4G.jpg",
                          Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                    },

                        {
                            brand: "Honda",
                            model: "Dio",
                       
                            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaDio.jpg",
                              Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                        },

                        {
                            brand: "Bajaj",
                            model: "Pulsar",
                       
                            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar150.jpg",
                             Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                        },

                        {
                            brand: "Bajaj",
                            model: "Avenger 220 Street",
                         
                            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerStreet220.jpg",
                              Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                        },

                        {
                            brand: "Bajaj",
                            model: "Avenger 200 Cruise",
                           
                            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerCruise220.jpg",
                             Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                        },

                        {
                            brand: "Bajaj",
                            model: "Pulsar NS 200",
                           
                            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsarNS160.jpg",
                              Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                        },

                        {
                            brand: "Ktm",
                            model: "Duke 250",
                            
                            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/KTMDuke250.jpg",
                            Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                        },

                        {
                            brand: "Honda",
                            model: "Hornet",
                          
                            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaHornet.jpg",
                             Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                        },

                        {
                            brand: "Royal Enfield",
                            model: "350 ThunderBird",
                           
                            imageurl: "https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/RoyalEnfieldThunderbird350.jpg",
                             Daily: "259/Daily(24hrs)",
        weekly: "1024/Weekly(Mon-Fri)",
        monthly: "3199/Monthly(30 days)",
        bill: "Minimum Billing 79/4hours",

                        },]

document.getElementById("sec").addEventListener("click",city)
let lshow = document.getElementById("lshow")
// let rshow = document.getElementById("rshow")
let ldiv=document.createElement("div");
// let rdiv = document.getElementById("dilip")
// dis(data_b);
// displaydata()
function city() {
ldiv.innerHTML = "";
// rdiv.innerHTML="";
let b = document.getElementById("sec").value;
if (b === "bangalure") {
// console.log("hi")
let l1 = document.createElement("li");
l1.textContent = "koramangala";
let l2 = document.createElement("li");
l2.textContent = "electronic city";
let l3 = document.createElement("li");
l3.textContent = "ms ramaiah college";
let l4 = document.createElement("li");
l4.textContent = "kundalahalli";
let l5 = document.createElement("li");
l5.textContent = "yelahanka";
let l6 = document.createElement("li");
l6.textContent = "hsr 7th sector";
let l7 = document.createElement("li");
l7.textContent = "silk bord srcm";

let l8 = document.createElement("li");
l8.textContent = "electronic city hub";
ldiv.append(l1, l2, l3, l4, l5, l6, l7, l8)
lshow.append(ldiv)

// displaydata(data_b)


}
else if (b === "hadrabad") {
// console.log("hi")
let l1 = document.createElement("li");
l1.textContent = "madhapur";
let l2 = document.createElement("li");
l2.textContent = "Gachibowli";
let l3 = document.createElement("li");
l3.textContent = "ameerpet";
let l4 = document.createElement("li");
l4.textContent = "dilsukhnagar";
let l5 = document.createElement("li");
l5.textContent = "secundrabad";
let l6 = document.createElement("li");
l6.textContent = "raiddurgam police commissionarate";
let l7 = document.createElement("li");
l7.textContent = "chanda nagar";
let l8 = document.createElement("li");
l8.textContent = "hyderabad partner";
ldiv.append(l1, l2, l3, l4, l5, l6, l7, l8)
lshow.append(ldiv)
// displaydata(data_h)
}
else if (b === "jaipur") {
let l1 = document.createElement("li");
l1.textContent = "gt - gaurav tower";
let l2 = document.createElement("li");
l2.textContent = "gold souk grand mall - jawahar circle";
let l3 = document.createElement("li");
l3.textContent = "c schema";
let l4 = document.createElement("li");
l4.textContent = "new aatish market - metro station";
let l5 = document.createElement("li");
l5.textContent = "jagatpura road";
let l6 = document.createElement("li");
l6.textContent = "raja park";
let l7 = document.createElement("li");
l7.textContent = " mansarover - shipra path";
let l8 = document.createElement("li");
l8.textContent = "vaishali nagar";
ldiv.append(l1, l2, l3, l4, l5, l6, l7, l8)
lshow.append(ldiv)
// dis(data_j)
}
else if (b === "mysuru") {
let l1 = document.createElement("li");
l1.textContent = " INFOSYS";
let l2 = document.createElement("li");
l2.textContent = "JAGANMOHAN PALACE";
let l3 = document.createElement("li");
l3.textContent = "GOKULAM";

ldiv.append(l1, l2, l3)
lshow.append(ldiv)
//    dis(data_m)


}
else if (b === "udaipur") {
let l1 = document.createElement("li");
l1.textContent = "UDAIPOLE";


ldiv.append(l1)
lshow.append(ldiv)
// dis(data_u)
}
else if (b === "ahmedabad") {
let l1 = document.createElement("li");
l1.textContent = "gt - gaurav tower";


ldiv.append(l1)
lshow.append(ldiv)
// dis(data_a)
}
else if (b === "pune") {
// let l1=document.createElement("li");
// l1.textContent="gt - gaurav tower";


// ldiv.append(l1)
lshow.append(ldiv)
// dis(data_p)
}
else if (b === "gurugram") {
let a = document.createElement("li")
a.textContent = "BIKE SURGEON";


ldiv.append(a)
lshow.append(ldiv)
displaydata(data_g)
}
}

//   displaydata()

function productScroll() {
// var prod = JSON.parse(localStorage.getItem("hairList"));

let slider = document.getElementById("slider");
let next = document.getElementsByClassName("pro-next");
let prev = document.getElementsByClassName("pro-prev");
let slide = document.getElementById("slide");
let item = document.getElementById("slide");


displaydata(data_b)
function displaydata(data) {
//   slider.innerHTML = "";
  data_b.map(function (items) {
    var maindiv = document.createElement("div")
    maindiv.setAttribute("id", "maindiv")
    
    var imgdiv = document.createElement("div")
    imgdiv.setAttribute("id", "imgdiv")
    
    
    
    var img = document.createElement("img")
    img.setAttribute("src", items.imageurl)
    
    var div1 = document.createElement("div")
    div1.setAttribute("id", "div1")
    
    var rating = document.createElement("div")
    rating.setAttribute("id", "rating")
    rating.textContent = items.brand;
    
    var title = document.createElement("div")
    title.textContent = items.model;
    
    
    
    var price = document.createElement("div")
    price.textContent = items.Daily;
    var price1 = document.createElement("div")
    price1.textContent = items.weekly;
    var price2 = document.createElement("div")
    price2.textContent = items.monthly;

    imgdiv.append(img)

    div1.append(rating, title, price, price1, price2)
    maindiv.append(imgdiv, div1)
    document.getElementById("slide").append(maindiv)

})
}

for (let i = 0; i < next.length; i++) {
//refer elements by class name

let position = 0; //slider postion

prev[i].addEventListener("click", function () {
    //click previos button
    if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
    }
});

next[i].addEventListener("click", function () {
    if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
    }
});
}

function hiddenItems() {
//get hidden items
let items = getCount(item, false);
let visibleItems = slider.offsetWidth / 210;
return items - Math.ceil(visibleItems);
}
//   }

function translateX(position) {
//translate items
slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
//count no of items
let relevantChildren = 0;
let children = parent.childNodes.length;
for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
        if (getChildrensChildren)
            relevantChildren += getCount(parent.childNodes[i], true);
        relevantChildren++;
    }
}
return relevantChildren;
}
}

productScroll();