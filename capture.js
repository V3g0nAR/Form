
/*------------------ADD INFO IN TABLE------------------*/

window.onload = function(){
  let form = document.getElementById('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
}

const roles = [];

function addInfo(){
  let technology = document.getElementById('technology').value;
  let experience = document.getElementById('experience').value;
  let button = document.getElementById('btn-addInfo');
  let btnPropreties = button;

  let techExists = false;

  roles.forEach(function(element){
    if(technology === element.tech){
      techExists = true;
    }
  });

  if(technology == '' || experience == ''){
    alert('É obrigatório introduzir uma técnologia e a sua experiência!');
  }else if(techExists){
    alert('Essa tecnologia já se encontra registada!');
  }else if(!techExists){
    roles.push({tech: technology, exp: experience});
    let table = document.getElementsByTagName('table') [0];

    let newRow = table.insertRow(1);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = technology;
    cell2.innerHTML = experience;
    cell3.innerHTML = '<button id="btn-removeInfo" onclick="btnRemoveInfo();" type="submit">Delete</button>';

    btnPropreties.style.background = '#45a049';
    btnPropreties.innerText = 'ADDED';
  }
}


/*------------------ADD INFO IN TABLE------------------*/

/*------------------REVOME ROW OF TABLE WITH BUTTON------------------*/

function btnRemoveInfo(){
  if (window.confirm('Deseja mesmo eliminar essa tecnologia?')){
    let button = event.target;
    let tdCell = button.parentNode;
    let trRow = tdCell.parentNode;
    trRow.remove();
  }else{
    return false;
  }

  }

/*------------------REVOME ROW OF TABLE WITH BUTTON------------------*/

/*------------------ANIMATION BUTTONS------------------*/

function btnAddMouseEnter(){
  let button = document.getElementById("btn-addInfo");
  let btnPropreties = button;
  btnPropreties.style.background = '#3399FF';
}

function btnAddMouseOut(){
  let button = document.getElementById("btn-addInfo");
  let btnPropreties = button;
  btnPropreties.style.background = '#0066CC';
  btnPropreties.innerText = 'ADD';
}

/*------------------ANIMATION BUTTONS------------------*/
