document.querySelector('#push').onclick = () => {
    if(document.querySelector('#newtask input').value === '') {
        alert('Please enter a todo');
    }else{
        // let newTask = document.createElement('li');
        // newTask.innerHTML = document.querySelector('#newtask input').value;
        // document.querySelector('#tasks').appendChild(newTask);
        // document.querySelector('#newtask input').value = '';


        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        document.querySelector('#newtask input').value = '';

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}