
/*------------------ADD INFO IN TABLE------------------*/

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


window.onload = function(){
  function btnAddOnClick(){
    let button = document.getElementById("btn-addInfo");
    let btnPropreties = button;
    btnPropreties.style.background = '#45a049';
    btnPropreties.innerText = 'ADDED';
  }
  let btnAddClick = document.getElementById('btn-addInfo');
  btnAddClick.addEventListener("click", btnAddOnClick);


  function btnAddMouseOut(){
    let button = document.getElementById("btn-addInfo");
    let btnPropreties = button;
    btnPropreties.style.background = '#FF8000';
    btnPropreties.innerText = 'ADD';
  }
  let btnAddOut = document.getElementById('btn-addInfo');
  btnAddOut = addEventListener("mouseout", btnAddMouseOut);
}

/*------------------ANIMATION BUTTONS------------------*/
