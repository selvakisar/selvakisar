// let a=fetch('https://restcountries.com/v3.1/all')
//    .then(res=>res.json())
//    .then(data=>console.log(data))
//    .catch(error=>console.log(error))
   
//   let d=document.createElement('div')
//   d.innerHTML=a
//   document.body.appendChild(d)

   
   
  //asyc await  function

// async function getcountries(){
//    try {
//       let res = await fetch("https://restcountries.com/v3.1/all")
//       let country=await res.json();
//       return country
//    }catch(error){
//       console.log(error)
//    }
// }
// async function mycountries()
// {
//    let data= await getcountries()

//    let parent=document.createElement('div')
//    parent.style.display ='flex'
//    parent.style.flexwrap='wrap'
//    parent.style.flexDirection='column'
//    document.body.appendChild(parent)


      

//   data.forEach((a)=>{
//    let child=document.createElement('div')
//       child.innerHTML = a.name
//       parent.appendChild(child)

//    })
// }
// mycountries()


 

async function getcountries(){
   try {
      let res =await fetch("https://restcountries.com/v3.1/all")
      let country =await res.json()
      // console.log(country)
      return country
      // return await res.json()
   } catch(error){
      console.log(error)
   }
}
//weather api 

async function getWeather(latlng){
   try {
      let res =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=699d7cc6f8bf3177b04477579e04ae0b`)
      let data=await res.json()
      return data.main.temp - 273.15
   } catch(error){
      console.log(error)
   }
}
// preventDefault(getWeather)

async function mycoun(){
   let data=await getcountries()




let apd = document.createElement("div")
apd.setAttribute("id","apd")
 document.body.appendChild(apd)
 
data.forEach((e) => {
   let cpd = document.createElement("div")
   cpd.setAttribute("id","cpd")

   let h2=document.createElement("h2")
   h2.setAttribute("id","country")
   h2.innerHTML=e.name.common
   cpd.appendChild(h2)

   let imge=document.createElement("img")
   imge.setAttribute("id","flag")
   imge.setAttribute("src",e.flags.png)
   cpd.appendChild(imge)


   let h3=document.createElement("h3")
   h3.setAttribute("id","reg")
   h3.innerHTML="Capital:-"+ [e.capital?e.capital[0]:e.capital,""]
   cpd.appendChild(h3)

   let h4=document.createElement("h3")
   h4.setAttribute("id","reg")
   h4.innerHTML="Region:-"+e.region
   cpd.appendChild(h4)
   
   let cc=document.createElement("h3")
   cc.setAttribute("id","reg")
   cc.innerHTML="Countrycode:- "+e.cca2
   // cc.innerHTML=
   cpd.appendChild(cc)


   let button=document.createElement("button")
   button.innerHTML="Get weather"
   button.addEventListener ('click',async ()=>{
      let temp=await getWeather(e.latlng)
      let h3 = document.createElement("h3")
      h3.setAttribute("id","temp")
      h3.innerHTML=temp.toFixed(2)+"°C"
      cpd.appendChild(h3)

      
   })
   cpd.appendChild(button)
   


   apd.appendChild(cpd)
})

}
mycoun()