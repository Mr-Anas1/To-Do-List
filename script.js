var task = document.querySelector(".task");
var btn = document.querySelector(".btn");
var ul = document.querySelector(".task")

btn.addEventListener("click", (event)=> {
    var new_task = document.createElement("li");
    var input = document.querySelector(".input");
    if (input.value===''){
        alert("You must write something.")
    } else {
          
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        new_task.innerHTML=input.value;
        new_task.appendChild(span);
        task.append(new_task);
    }
    input.value="";
    
})


task.addEventListener("click", function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove("checked");
    }
})
