// get elements
const clear = document.querySelector('.clear'),
      dateElement= document.getElementById('date'),
      list= document.getElementById('list'),
      input=document.getElementById('input')

// CSS Classes name
const CHECK = 'fa-check-circle'
const UNCHECK = 'fa-circle'
const LINE_THROUGH = 'line_through'

// Variables
let LIST = [],
    id =0

// get date

const options = {weekday : 'long', month:'short', day : 'numeric'}
const today = new Date()

dateElement.innerHTML = today.toLocaleDateString('en-US', options)

// add to do function

function addToDo(todo, id, done, trash){

    if(trash){return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH: ''
    const item =  ` 
                <li class="item">
                    <i class="far  ${DONE} co" job='complete' ${id}="0"></i>
                    <p class="text ${LINE}">${todo}</p>
                    <i class="far fa-trash-alt" job='delete' ${id}="0"></i>
                </li>
    `
    const position = 'beforeend'
    list.insertAdjacentHTML(position, item)
}
input.addEventListener('keyup', function(e){
    if(e.keyCode==13){
        const todo = input.value
        // if the input is not empty ie.
        if(todo){
            addToDo(todo, id, false, false)
            LIST.push({
                name:todo,
                id: id,
                done : false,
                trash:false
            })
            id++
        }
        input.value= ''
    }
})
addToDo('Study',1, true, true)

// complete to do
function completetodo(element){
    element.classList.toggle(CHECK)
    element.classList.toggle(UNCHECK)
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
    LIST[element.id].done= LIST[element.id].done ? false :true
}
// remove a todo

function removetodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
LIST[element.id].trash = true;
}
list.addEventListener('click', function(e){
    const element =e.target
    const elementJob= element.attributes.job.value;
    if(elementJob=='complete'){
        completetodo(element)
    }else if(elementJob =='delete'){
        removetodo(element)
    }
})

const button = document.querySelector('.fa-plus-circle')
button.addEventListener('click', function(e){
     
        const todo = input.value
        // if the input is not empty ie.
        if(todo){
            addToDo(todo, id, false, false)
            LIST.push({
                name:todo,
                id: id,
                done : false,
                trash:false
            })
            id++
        }
        input.value= ''

})
clear.addEventListener('click', function(e){
    list.innerHTML=''
})