const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const input = document.querySelector('input');
const num = document.querySelector('.number');

let total = 0;

plus.addEventListener('click', (evt)=>{
    // console.log(evt)
    if(!parseInt(input.value)){
        return;
    }else{
        total += parseInt(input.value);
        render()
    }
    // total += parseInt(input.value);
    // render()
})

minus.addEventListener('click', (evt)=>{
    if(!parseInt(input.value)){
        return;
    }else{
        total -= parseInt(input.value);
        render()
    }
})

function render(){
    document.querySelector('.number').textContent = total;
    if(num.textContent < 0){
        num.style.color = 'red'
    } else {
        num.style.color = 'black'
    }
}

