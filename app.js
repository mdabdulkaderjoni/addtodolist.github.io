let addBtn=document.getElementById('addBtn');
    let container=document.getElementById('container');
    let input=document.getElementById("input");
    let total=0; 
    let completed=0;
    let remaining=0;
    
    
    function totalTask(){
      let totalTask=document.getElementById('total-task');
      totalTask.innerHTML=total;
    }
    function completedTask(){
      let completedTask=document.getElementById('completed-task');
      completedTask.innerHTML=completed;
    }
    function remainingTask(){     
      let remainingTask=document.getElementById('remaining-task');
      remainingTask.innerHTML=remaining;
    }
    function display(value){
      document.getElementById('container').style.display=value;
    }
    
    
    <!-- Add button event -->
    function todoEvent(){     
      let text=document.getElementById("input").value
      if(text==""){
        alert("Add a todo");
      }else{
        createElement();
        display("inline-block");
        
        total++;
        remaining++;
        remove();
        checkTodo();
        update();

      }
    }

    <!-- Create element after event -->
    function createElement(){
              let text=document.getElementById('input').value;
        let div=document.createElement('DIV');
        div.className='todo';
        div.innerHTML=`
          <span class="task">${text}</span>
          <span class="icon"> <i class="done-btn fa fa-plus"></i></span> 
          <i class="fa fa-times"></i>`;
        container.appendChild(div);
      document.getElementById('input').value="";

    }
    
    <!-- update values -->
    function update(){
      totalTask();
      completedTask();
      remainingTask();
    }
    
    

    <!-- remove todo event -->
    function remove(){
      
      let removeIcon=document.getElementsByClassName('fa-times');
      let todo=document.getElementsByClassName('todo');
      
      for(let i=0;i<removeIcon.length;i++){
        removeIcon[i].onclick=function(){
          todo[i].style.display='none'; 
          total--;
          //console.log(todo[i].children[1].children[0].className);
          let faClass=todo[i].children[1].children[0].className;
          if(faClass=="done-btn fa fa-plus"){
            remaining--;
          }else{
            completed--;
          }
          update();
          
        }
      } 
    }
    
   function checkTodo(){
     let icon=document.getElementsByClassName("icon");
     let iTag=document.getElementsByClassName('done-btn');
     let task=document.getElementsByClassName("task");
     for(let i=0;i<icon.length;i++){
        icon[i].onclick=function(){
          task[i].classList.toggle('line');
          if(iTag[i].className=="done-btn fa fa-plus"){
            iTag[i].className="done-btn fa fa-minus";
            if(remaining>0){
              remaining--;
              completed++;
            }
            
            update();
            
          }else{
            iTag[i].className="done-btn fa fa-plus"
            if(completed>0){
              completed--;
              remaining++;
            } 
            update();
          }
        }
     }
   }
  
   
    <!-- Event Listener -->  
    addBtn.onclick=todoEvent;

    input.addEventListener("keyup", function(event) {  
        if(event.keyCode === 13) {
            todoEvent();
            document.getElementById('addBtn').onclick=todoEvent;
        }
    });