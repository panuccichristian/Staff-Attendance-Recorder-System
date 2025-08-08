       let hrs = document.getElementById("h")
      let min = document.getElementById("m")
      let sec = document.getElementById("s")

      setInterval(() => {
        
       let currentTime = new Date();

      hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
      min.innerHTML =(currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    //  sec.innerHTML =(currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSecond();

      },1000);



function loadPage(page){
fetch(page).then((res) =>{

    if(!res.ok){
            document.getElementById("main").innerHTML = " <h3> Page not Found </h3>";
          
    }
      return res.text();
}) .then(data=>{
    document.getElementById("main").innerHTML =data;

}).catch(error=>{
                document.getElementById("main").innerHTML = error;

})
}


