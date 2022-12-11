const nameDisplay = document.getElementById('nameDisplay');
const button = document.getElementById('updateButton');
const nameInput = document.getElementById('nameInput');
nameDisplay.textContent = nameInput;
const colorChange = document.getElementById("nametag");
//colorChange.style.backgroundColor= 'steelblue';


button.addEventListener('click', ()=>{
    if(colorChange.style.backgroundColor === 'red') {
        colorChange.style.backgroundColor = 'steelblue';
    } else {
        colorChange.style.backgroundColor = 'red'
    }
    console.log('clicking away!');
    return 'color changed';
})
    // nameDisplay.addEventListener('mouseover', ()=>{
    //     if(nameDisplay.value === 'Nick'){
    //         nameDisplay.textContent = `Whoa! it's magic!`
    //     } else if(nameDisplay === `Whoa! it's magic!`) {
    //         nameDisplay = 'Nick C Mason'
    //     }
        
    // })
    nameDisplay.addEventListener('keyup',()=>{
        nameDisplay = nameInput.value;
    })
