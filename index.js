let bnew = document.getElementById('new');
let formulaire = document.getElementById('formTask');
let body = document.getElementById('body')

bnew.addEventListener('click', createEvent);
formulaire.addEventListener('submit', getInfo)


function createEvent() {
    formulaire.style.display = 'block';
    body.style.display = 'block';
    console.log(formulaire.style.display)
};

function getInfo() {
    event.preventDefault();

    let name = document.getElementById('nom').value;
    let description = document.getElementById('description').value
    let date = document.getElementById('date') .value

    document.getElementById('list').innerHTML += "<p>" + name + "</p>"

    console.log(name, description, date)

    formulaire.style.display = 'none';
    body.style.display = 'none';


}