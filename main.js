let tasksArray = [];
let index = 1;


(function onpageLoadShowTasks () {
   tasksArray = gettasksArrayfromLocalStaorage();
    

    displaytasks();
   

})();

function showOldTasks() {
    let strtasksArry = localStorage.getItem()
    
}

// the Main Task function.
function executeTaskProcces() {
   try{
        // getting the user info.
        let usertaskNote = getUserTaskInfo();
        // saving the user in localstorage as a string.
        let strUserTask = saveToLocalStorage(usertaskNote);
        // getting the info as an object.
        let prsUserTask = getTaskFromStorage(strUserTask);

        index++;
        
        tasksArray.push(prsUserTask);
        localStorage.setItem("Tasks",JSON.stringify(tasksArray));
        displaytasks(prsUserTask);
        console.log("Succesfully created a TaskNote");
   }
   catch(err){
        // if for somereason the procces has failed this catch area will notify us in the console.
        console.log("Procces Has Failed");
        console.log(err.stack);
   }
    
}


// function for the Clear button to reset all input fields.
function resetUI() {
    let TaskHeaderBox =document.getElementById("TaskHeaderBox");
    let DateTasksBox = document.getElementById("DateTasksBox");
    let taskDescriptionBox = document.getElementById("taskDescriptionBox");
    let TimeTasksBox = document.getElementById("TimeTasksBox");

    TaskHeaderBox.value = "";
    DateTasksBox.value = "";
    taskDescriptionBox.value= "";
    TimeTasksBox.value = "";

}


// func that recives the user info of the task.
function getUserTaskInfo(){
    let TaskHeaderBox =document.getElementById("TaskHeaderBox");
    let DateTasksBox = document.getElementById("DateTasksBox");
    let taskDescriptionBox = document.getElementById("taskDescriptionBox");
    let TimeTasksBox = document.getElementById("TimeTasksBox");

    validateUserInput();

    let usertask = {
        id: "Task"+index,
        haeder : TaskHeaderBox.value,
        date :DateTasksBox.value,
        time : TimeTasksBox.value,
        taskDescription : taskDescriptionBox.value
    };

    // validateTaskId(usertask.id);
    
    console.log("Succesfully created task object");
    resetUI();
    return usertask;
}


// func that stores the task's info in the LocalStorage.
function saveToLocalStorage(task) {
    localStorage.setItem("Task"+index,JSON.stringify(task));
    console.log("Task Succesfully saved in localStorage");
    return task;
}

// func that pulls the tasks info from the LocalStorage
function getTaskFromStorage(task) {
    let strTask = localStorage.getItem("Task"+index);
    task = JSON.parse(strTask);
    return task;
    
}

function gettasksArrayfromLocalStaorage() {
    tasksArray = JSON.parse(localStorage.getItem("Tasks"));
    if (tasksArray==null) {
        tasksArray = [];
    }

    return tasksArray;
}

// the func that creates the View of the Task at the UI(The Note).
function displaytasks() {
     let container = document.getElementById("container");
    container.innerHTML = "";
    tasksArray = gettasksArrayfromLocalStaorage();
    for (let i=0;i < tasksArray.length; i++) {
        
         let div = document.createElement("div");
        div.className = "note row-fluid";
    
        // let x = document.createElement("span");
        // x.id = tasksArray[i].id;
        // x.onclick = deletetask;
        
        let div2 = document.createElement("div");
        div2.className = "DateTimeZone";

        let paragraph = document.createElement("p");
        paragraph.className = "TaskNoteDisc";

        div.innerHTML ="<p><b>"+tasksArray[i].haeder+"<b></p>";

        paragraph.innerHTML = tasksArray[i].taskDescription;

        div2.innerHTML ="<b>"+tasksArray[i].date+"<b>"+"<br>"+"<b>"+tasksArray[i].time+"<b>";
        
         container.appendChild(div);
         div.appendChild(paragraph);
        //  div.appendChild(x);
         div.appendChild(div2);
         

        // container.appendChild(div);
        // div.appendChild(x);
        // div.appendChild(div2);
        // div.appendChild(paragraph);
        
    }
}


// function that delete the task from the UI and LocalStorage.
function deletetask(e) {

    // for (let i = 0; i < tasksArray.length; i++) {
    //     if (tasksArray[i].id == this.id) {
    //         tasksArray.splice(i, 1);
    //         localStorage.removeItem(this.id);
    //         localStorage.setItem("Tasks",JSON.stringify(tasksArray));
    //     }
    // }
    console.log(e)
    displaytasks();
}


// A validation function to check user's Inputs.
function validateUserInput() {
    let TaskHeaderBox =document.getElementById("TaskHeaderBox");
    let DateTasksBox = document.getElementById("DateTasksBox");
    let taskDescriptionBox = document.getElementById("taskDescriptionBox");
    let TimeTasksBox = document.getElementById("TimeTasksBox");

    // The Tasks's Header validation zone.
    if (TaskHeaderBox.value == "") {
        TaskHeaderBox.style.backgroundColor = "pink";
        alert("No Task Header !!")
        throw new Error("No Task Header");
    }

    initInputBoxColor();

    // The Tasks's Date validation zone.
    if (DateTasksBox.value =="") {
        DateTasksBox.style.backgroundColor = "pink";
        alert("No Task Date !!")
        throw new Error("No Task Date");
    }
    
    initInputBoxColor();
   
    // The Tasks's Time validation zone.
    if (TimeTasksBox.value =="") {
        TimeTasksBox.style.backgroundColor = "pink";
        alert("No Task Time !!")
        throw new Error("No Task Time");
    }

    initInputBoxColor();

    // The Tasks's Description validation zone.
    if (taskDescriptionBox.value =="") {
        taskDescriptionBox.style.backgroundColor = "pink";
        alert("No Task Description !!")
        throw new Error("No Task Description");
    }

    initInputBoxColor();



    console.log("All Input Fields Are Valid");
}

function  initInputBoxColor() {
    let TaskHeaderBox =document.getElementById("TaskHeaderBox");
    let DateTasksBox = document.getElementById("DateTasksBox");
    let taskDescriptionBox = document.getElementById("taskDescriptionBox");
    let TimeTasksBox = document.getElementById("TimeTasksBox");

    TaskHeaderBox.style.backgroundColor = "";
    DateTasksBox.style.backgroundColor = "";
    taskDescriptionBox.style.backgroundColor = "";
    TimeTasksBox.style.backgroundColor = "";
}


