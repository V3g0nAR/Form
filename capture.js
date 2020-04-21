
/*------------------ADD INFO IN TABLE------------------*/

/*window.onload = function(){
  let addInfoPreventDefault = document.getElementById('btn-addInfo').addEventListener('click', function(event){
    event.preventDefault();
    window.history.back();
  });
}*/

function addInfo(){
  let technology = document.getElementById('technology').value;
  let experience = document.getElementById('experience').value;

  let table = document.getElementsByTagName('table') [0];

  let newRow = table.insertRow(1);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);

  cell1.innerHTML = technology;
  cell2.innerHTML = experience;
  cell3.innerHTML = '<button id="btn-removeInfo" onclick="btnRemoveInfo();" type="submit">Delete</button>';
}

/*------------------ADD INFO IN TABLE------------------*/

/*------------------REVOME ROW OF TABLE WITH BUTTON------------------*/

function btnRemoveInfo(){
    let button = event.target;
    let tdCell = button.parentNode;
    let trRow = tdCell.parentNode;
    trRow.remove();
  }

/*------------------REVOME ROW OF TABLE WITH BUTTON------------------*/

/*------------------ANIMATION BUTTONS------------------*/

function btnAddOnClick(){
  let button = document.getElementById("btn-addInfo");
  let btnPropreties = button;
  btnPropreties.style.background = '#45a049';
  btnPropreties.innerText = 'ADDED';
}

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

/*------------------CHECK INPUT TEXT------------------*/

function checkInputText(){
  let inTechnology = document.getElementById("technology");
  let inExperience = document.getElementById("experience");

  if(inTechnology.value == '' || inExperience.value == ''){
    alert('É obrigatório introduzir uma técnologia e a sua experiência!');
    return false;
  }
}

/*------------------CHECK INPUT TEXT------------------*/

/*------------------CONFIRM REMOVE ROW------------------*/


function confirmRemoveRow(){
  if(document.getElementById('btn-removeInfo').clicked==true){
    console.log('clicado');
    alert('clicado');
  }
}

/*------------------COMFIRM REMOVE ROW------------------*/
