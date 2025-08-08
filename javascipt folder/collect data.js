
var staffArray = [];
function getForm(){
      event.preventDefault();
 const staff =  getData();
staffArray.push(staff);
console.log(staffArray);
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

staff.firstName =name1;
staff.lastName = name2;
staff.dateOfBirth=dateOfBirth;
staff.placeOfBirth=placeOfBirth;
staff.gender=gender;
staff.department=department;
staff.status=status;
staff.id = id ;
id +1;
    console.log(staff);

return staff;
                 
}

function saveData(staffArray){
    localStorage.setItem("staffArray",JSON.stringify(staffArray));
}

function selectedDepartment(){
    var department = document.getElementById('department').value;
    var staff = JSON.parse(localStorage.getItem("staffArray"));
    console.log(staff);
    var selectedStaff = staff.filter(staf=>staf.department ===department
        
    )
    var staffNames = document.getElementById('staffs');
    console.log(selectedStaff);
    selectedStaff.forEach(
        st=>{
            const option = document.createElement("option");
            option.value = st.id;
            option.text= `${st.firstName} ${st.lastName}`;
            staffNames.appendChild(option);
        }
    );

    
}

function attendance(){
          event.preventDefault();
var staffssss = JSON.parse(localStorage.getItem("staffArray"));
    var id =  document.getElementById('staffs').value;
 let currentTime = new Date();
var now = new Date();
var getHours =now.getHours().toString();
var getminuite  =now.getMinutes().toString();
var getsecond =now.getSeconds().toString();
var staff = staffssss.filter(st=>st.id ===id);
var time = `${getHours}:${getminuite}:${getsecond}`
var attendance = {};
console.log(staffssss);
alert(time);
alert(staff);
attendance.staff= staff;
attendance.time = time;
console.log ( staff + "came to the office at " + time );




}





