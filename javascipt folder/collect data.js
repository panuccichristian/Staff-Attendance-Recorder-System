
var staffArray = [];
var attendanceStorage = [];

function getForm(){
      event.preventDefault();
 const staff =  getData();
staffArray.push(staff);
alert("staff successfully saved");
saveData(staffArray);
document.getElementById('check').reset();

}
function getData(){
     var staff={};
     var id = 0;
    const name1 =document.getElementById('fname').value;
    const name2 =document.getElementById('Lastname').value;
    const dateOfBirth =document.getElementById('date').value;
    const placeOfBirth=document.getElementById('place').value;
    const gender=document.querySelector('input[name="gender"]:checked').value;
    const department=document.getElementById('department').value;
    const status=document.getElementById('status').value;
var staffArraySize = JSON.parse(localStorage.getItem("staffArray"));
staff.firstName =name1;
staff.lastName = name2;
staff.dateOfBirth=dateOfBirth;
staff.placeOfBirth=placeOfBirth;
staff.gender=gender;
staff.department=department;
staff.status=status;
staff.id = name1 ;


return staff;
                 
}

function saveData(staffArray){
    localStorage.setItem("staffArray",JSON.stringify(staffArray));
}

function selectedDepartment(){
    var department = document.getElementById('department').value;
    var staff = JSON.parse(localStorage.getItem("staffArray"));
    var selectedStaff = staff.filter(staf=>staf.department ===department  )
    var staffNames = document.getElementById('staffs');
    selectedStaff.forEach(
        st=>{
            const option = document.createElement("option");
            option.value = st.firstName;
            option.text= `${st.firstName} ${st.lastName}`;
            staffNames.appendChild(option);
        }
    );  
}

function attendance(){
          event.preventDefault();
var staffssss = JSON.parse(localStorage.getItem("staffArray"));
 var firstname =  document.getElementById('staffs').value;
 let currentTime = new Date();
var now = new Date();
var getHours =now.getHours().toString();
var getminuite  =now.getMinutes().toString();
var getsecond =now.getSeconds().toString();
var staff = staffssss.filter(st=>st.firstName ===firstname);
var time = `${getHours}:${getminuite}:${getsecond}`
var attendance = {};
console.log(staff[0].firstName);
attendance.timein = time;
attendance.timeout = null;
attendance.firstName = staff[0].firstName;
attendance.lastName = staff[0].lastName;
attendance.department =staff[0].department;
attendance.status = staff[0].status;

attendanceStorage.push(attendance);

alert("attendance registered Successfully!");

localStorage.setItem("attendance",JSON.stringify(attendanceStorage));
attendanceStorage = JSON.parse(localStorage.getItem("attendance"));
document.getElementById("Attendace").reset();



/*const table = document.getElementById('table-body');
console.log(table);
console.log(pat + " this is me ohhh");
 table.innerHTML="";
 console.log(data);
data.forEach((staf,index)=> {
    const row = document.createElement("tr");
     console.log(staf.staff.status);




    row.innerHTML=`
    <td>${staf.staff[index].firstName} ${staf.time}</td>
     <td></td>
      <td></td>
       <td></td>
        <td></td>
    `;
   
    table.appendChild(row);
});
loadPage('display.html');

}


*/

async function loadpage(pageUrl) {
  const res = await fetch(pageUrl);
  const html = await res.text();
  document.getElementById('main').innerHTML = html;

  if (pageUrl === 'display.html') {
    var value = document.getElementById('table-body');
    const storedData = localStorage.getItem('attendanceStorage');
    const staff = JSON.parse(localStorage.getItem('attendanceStorage '));
    const display = document.getElementById('table-body');
    staff.forEach((attendanceStorage ) => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${attendance.staff}</td>
       <td>${attendance.stafflastname}</td>
       <td>${attendance.time}</td>
       <td>${attendance.time}</td>
       <td>${attendance.time}</td>
       <td>${attendance.time}</td>
       <td>${attendance.time}</td>

      
    `;
      value.appendChild(row);
    });
  }
}

function Loadpage(page) {
  fetch(page)
    .then((res) => {
      if (res.ok) {
        console.log(res.text);
        return res.text();
      } else {
        console.log('erro fetching page');
      }
    })
    .then((data) => {
      document.getElementById('main').innerHTML = data;
    });
}
}
