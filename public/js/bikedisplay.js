// let data=
// [
	
// 	{
// 		brand:"Bajaj",
// 		model:"CT100",
// 		price:129,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajCT100.jpg",
// 		excessFee:2,
// 		type:"bike",
		
//         },
	
// 	{
// 		brand:"Honda",
// 		model:"Navi",
// 		price:159,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaNavi.jpg",
// 		excessFee:2,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Honda",
// 		model:"Activa",
// 		price:209,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaActiva4G.jpg",
// 		excessFee:2.5,
// 		type:"scooty",
		
// 	},

// 	{
// 		brand:"Honda",
// 		model:"Dio",
// 		price:259,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaDio.jpg",
// 		excessFee:2,
// 		type:"scooty",
		
// 	},
	
// 	{
// 		brand:"Bajaj",
// 		model:"Pulsar",
// 		price:269,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar150.jpg",
// 		excessFee:3,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Bajaj",
// 		model:"Avenger 220 Street",
// 		price:489,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerStreet220.jpg",
// 		excessFee:2.5,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Bajaj",
// 		model:"Avenger 200 Cruise",
// 		price:489,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajAvengerCruise220.jpg",
// 		excessFee:2.5,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Bajaj",
// 		model:"Pulsar NS 200",
// 		price:765,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsarNS160.jpg",
// 		excessFee:3,
// 		type:"bike",
		
// 	},
	
// 	{
// 		brand:"Ktm",
// 		model:"Duke 250",
// 		price:1000,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/KTMDuke250.jpg",
// 		excessFee:4,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Honda",
// 		model:"Hornet",
// 		price:500,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaHornet.jpg",
// 		excessFee:2,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Royal Enfield",
// 		model:"350 ThunderBird",
// 		price:900,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/RoyalEnfieldThunderbird350.jpg",
// 		excessFee:3.5,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Honda",
// 		model:"Dream Neo",
// 		price:400,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaCD110.jpg",
// 		excessFee:2,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Honda",
// 		model:"Livo",
// 		price:499,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/HondaLivo.jpg",
// 		excessFee:2,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Bajaj",
// 		model:"Pulsar 133LS",
// 		price:500,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar135.jpg",
// 		excessFee:2,
// 		type:"bike",
		
// 	},
	
// 	{
// 		brand:"Bajaj",
// 		model:"Pulsar 180",
// 		price:700,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajPulsar180.jpg",
// 		excessFee:2.5,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Yamaha",
// 		model:"FZ",
// 		price:800,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/YamahaFZ.jpg",
// 		excessFee:3,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Royal Enfield",
// 		model:"Classic 350",
// 		price:1000,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/RoyalEnfieldClassic350.jpg",
// 		excessFee:3.5,
// 		type:"bike",
		
// 	},

// 	{
// 		brand:"Bajaj",
// 		model:"DOMINOR 400ABS",
// 		price:700,
// 		imageurl:"https://d3bvfezcznypk7.cloudfront.net/BikeImages/JPG/BajajDominar400ABS.jpg",
// 		excessFee:3,
// 		type:"bike",
		
// 	},

	

// ];
// console.log(data);

let data;
getdata();
async function getdata()
{
    let response=await fetch("/bike")
    data=await response.json();
    console.log(data)
    displaydata(data)
}
console.log(data)



let brand=[];
let brandnewdata=[];

let vehicletype=[];
let vehicletypedata=[];

let closebtn=document.querySelector(".close-btn")
let popup=document.querySelector("#popup")

let date=2;

function displaydata(data)
{
    data.map((item)=>
    {
        console.log(item)
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=item.imageurl;

        let bikename=document.createElement("h5");
        bikename.innerHTML=`${item.brand} ${item.model}`

        let excess=document.createElement("p");
        excess.innerHTML=`Free-300Kms &nbsp;&nbsp;&nbsp;Excess ₹${item.excessFee}/Km`

        let innerdiv=document.createElement("div");

        let price=document.createElement("h3");
        price.innerHTML=`₹${item.price*date}`

        let button=document.createElement("button");
        button.innerText="BOOK NOW"
		button.addEventListener("click",()=>
		{
			getpopup(item)
		})

        innerdiv.append(price,button);

        div.append(img,bikename,excess,innerdiv)
        document.getElementById("bikediv").append(div)

    })
}


let bikeCheckboxes=document.querySelectorAll(".brand")

console.log(bikeCheckboxes);

bikeCheckboxes.forEach((checkbox)=>
{
	checkbox.addEventListener('change',()=>
    {
        brand=Array.from(bikeCheckboxes).filter(i=> i.checked).map(i => i.value)

        displayfilteredbrand(brand);
    })
})


function displayfilteredbrand(brand)
{
	document.getElementById("bikediv").innerHTML=null

	if(brand.length==0)
	{
		displaydata(data)
	}
	for(let i=0;i<brand.length;i++)
	{
		let item=brand[i];

		brandnewdata=data.filter((ele)=>
		{
			return ele.brand==item;
		})

		displaydata(brandnewdata)
		
	}
	
}

let vehicletypecheckboxes=document.querySelectorAll(".vehicletype");


vehicletypecheckboxes.forEach((checkbox)=>
{
	checkbox.addEventListener('change',()=>
    {
        vehicletype=Array.from(vehicletypecheckboxes).filter(i=> i.checked).map(i => i.value)

        displayfilteredtype(vehicletype);
    })
})


function displayfilteredtype(vehicletype)
{
	
	document.getElementById("bikediv").innerHTML=null

    if(vehicletype.length==0)
	{
		displaydata(data)
	}
	
	
		for(let i=0;i<vehicletype.length;i++)
		{
			
		let item=vehicletype[i];

		vehicletypedata=data.filter((ele)=>
		{
			return ele.type==item;
		})

		displaydata(vehicletypedata)
		}
	
}

function removecheck()
{
	console.log("hello")

	
}

let itemid;
function getpopup(item)
{ 
	localStorage.setItem("bikedata",JSON.stringify(item));
	itemid=item._id;
	localStorage.setItem("bikeid",itemid)
	popup.classList.add('active');
}

closebtn.addEventListener("click",()=>
{
	popup.classList.remove('active')
})

function gotodetails()
{
	
	window.location.href="/bikedetails"


	
}


	