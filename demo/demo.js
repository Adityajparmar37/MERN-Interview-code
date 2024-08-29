let nbutton = document.querySelector('button');

nbutton.addEventListener('click' , inputMsg);

function inputMsg()
{
    let name = prompt('Enter name of student');

    nbutton.textContent = 'Roll No.:' + name ;
}
