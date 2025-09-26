       let hrs = document.getElementById("h")
      let min = document.getElementById("m")
      let sec = document.getElementById("s")

      setInterval(() => {
        
       let currentTime = new Date();

      hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
      min.innerHTML =(currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    //  sec.innerHTML =(currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSecond();

      },1000);



async function loadPage(page){
  const res = await fetch(page);
  const html = await res.text();
  document.getElementById("main").innerHTML = html;


if (page=="display.html") {
 var table = document.getElementById("table-body");
var attendances = JSON.parse(localStorage.getItem("attendance"));
 attendances.forEach((attendance,index) => {

   console.log( attendance.firstName);
      const row = document.createElement('tr');
      row.innerHTML = `
         <td>${index + 1}</td>
        <td>${attendance.firstName} </td>
        <td>${attendance.lastName}</td>
        <td>${attendance.department}</td>
        <td>${attendance.status}</td> 
        <td>${attendance.timein}</td>
       <td id="time-out${index}"><button type="button" onclick="signOut(${index})" class="btn btn-sm btn-primary w-100">Sign Out</button>
     </td>
          

    `
          table.appendChild(row);
    });


} else if(page =="home.html"){
  console.log("hii");
    var value = document.getElementById('table');
    const staff = JSON.parse(localStorage.getItem("staffArray"));
    const display = document.getElementById('table');
    staff.forEach((staffArray,index ) => {
      console.log( staffArray.firstName);
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${index + 1}</tb>
      <td>${staffArray.firstName}</td>
       <td>${staffArray.lastName}</td>
       <td>${staffArray.dateOfBirth}</td>
       <td>${staffArray.placeOfBirth}</td>
       <td>${staffArray.gender}</td>
       <td>${staffArray.department}</td>
       <td>${staffArray.status}</td>
      

      
    `;
      value.appendChild(row);
    });
}
}

function signOut(index){
  var now = new Date();
var getHours =now.getHours().toString();
var getminuite  =now.getMinutes().toString();
var getsecond =now.getSeconds().toString();
var timeout = `${getHours}:${getminuite}:${getsecond}`
document.getElementById(`time-out${index}`).innerHTML=timeout;
console.log(index);

}
