async function apicall(){
    let result=await fetch("https://meowfacts.herokuapp.com/");
    let finalresult=await result.json()
    let ultimateresullt=finalresult.data[0]
    //console.log(finalresult)
    document.getElementById('content').innerText=ultimateresullt
}

let finalresult={
    data:["cat is an animal"]
}
