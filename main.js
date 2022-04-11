
var todoList = [];

document.addEventListener(
    "DOMContentLoaded",
    () => {
        var btnSave = document.querySelector("#btnSave");
        console.info(btnSave);
        btnSave.addEventListener(
            "click",
            () => {
                console.info("save button clicked.");

                var txtsubject = document.querySelector("#txtSubject");
                var txtDetail = document.querySelector("#txtDetail");

                var item = {
                    subject: txtsubject.value,
                    detail: txtDetail.value
                }

                todoList.push(item);
                console.info(todoList);
                
                txtsubject.value = "";
                txtDetail.value = "";

                var lstTodo = document.querySelector("#lstTodo");
                lstTodo.innerHTML = "";

                for(var index = 0; index < todoList.length; index++)
                {
                    lstTodo.innerHTML += "Topic: " + todoList[index].subject 
                        + " Detail: " + todoList[index].detail
                        +"<br/>";
                        
                }

                console.info(item);


            }
        )
    }
);
    