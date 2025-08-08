
/*console.log('hi');
document.getElementById("check").addEventListener("submit", function(event){
    event.preventDefault();
    alert("try");

});

*/


function getForm(){
      event.preventDefault();

   hi();
}
function hi(){
   
    const name1 =document.getElementById('fname').value;
    console.log(name1);
    const name2 =document.getElementById('Lastname').value;
    console.log(name2)
    const dateOfBirth =document.getElementById('date').value;
     console.log(dateOfBirth)
      const placeOfBirth=document.getElementById('place').value;
        console.log(placeOfBirth)
        const gender=document.querySelector('input[name="gender"]:checked').value;
        console.log(gender)
                const department=document.getElementById('department').value;
                 console.log(department)
                 const status=document.getElementById('stattus').value;
                  console.log(status)

                 
}
if(!window.indexedDB){
    console.log("your brower doesn't support indexedDB.");
} else {
alert('sucess!')
}

let db;

const request =indexedDB.open("StaffAttendanceDB",1);

    request.onerror= function(){
        alert( "Database failed to open");
    };
    request.onsuccess= function(){
        db = request.result
        alert("Database opened sucessfully!");
    };
    request.onupgradeneeded = function (e){

        db = e.target.result;
     
    };

const store = db.createObjectStore( "staff",{ keypath:"id",autoIncrement:true});

store.createIndex("firstname", "firstname",{ unqiue:false});
store.createIndex("lastname"," lastname", {unqiue:false});
store.createIndex("dateofbirth", "dateofbirth",{ unqiue:false});
store.createIndex("placeofbirth", "placeofbirth",{ unqiue:false});
store.createIndex("gender", "gender",{ unqiue:false});
store.createIndex("department", "department",{ unqiue:false});
store.createIndex("status", "status",{ unqiue:false});
;
function registerStaff(){
    getData()
    handleChange(selectObj)
    const staffData ={
        firstName:"Pryde",
        lastName:"Angum",
        dateOfBirth:"3/05/25",
        placeOfBirth:"Doula"
        dePartment:"IT",
        Status:"intern",
    };
    const transaction =db.transaction(["staff"]," readwrite");
        const store = transaction.objectStore("staff");
        const request = store.add(staffData);

        request.onsucess = () => alert("Staff registered sucessfully!");
        request.onerror = () => alert("Failed to registerstaff")
}






