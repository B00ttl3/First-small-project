function addTask(){
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        // appendChild means we are adding the thing which is written in () to the taskList (in this code)
        taskInput.value = "";
    }
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; 
    // (textContent MediaSession, to write what is written in the "" to the button which we have created in the above code)
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    }
    listItem.appendChild(deleteButton);
}