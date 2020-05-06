

window.onload = function(){
  let form = document.getElementById('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
}


const roles = [];

/*------------------MSG ON INPUT------------------*/

function msgOnInput(){
  let technology = document.getElementById('technology').value;
  let msgTechExist = document.getElementById('msg-technology-exist');
  let msgEmptyTech = document.getElementById('msg-empty-technology');

  let techExists = false;

  roles.forEach(function(element){
    if(technology.toLowerCase() === element.tech.toLowerCase()){
      techExists = true;
    }
  });
  if (techExists){
    msgEmptyTech.innerHTML = ('');
    msgTechExist.innerHTML = ('Essa tecnologia já se encontra registada!');
  }else{
    msgEmptyTech.innerHTML = ('');
    msgTechExist.innerHTML = ('');
  }
}

/*------------------MSG ON INPUT------------------*/

/*------------------ADD INFO IN TABLE------------------*/

function addInfo(){
  let technology = document.getElementById('technology').value;
  let experience = document.getElementById('experience').value;
  let button = document.getElementById('btn-addInfo');
  let msgEmpty = document.getElementById('msg-empty');
  let msgEmptyTech = document.getElementById('msg-empty-technology');
  let msgEmptyExp = document.getElementById('msg-empty-experience');
  let btnPropreties = button;

  let techExists = false;

  roles.forEach(function(element){
    if(technology.toLowerCase() === element.tech.toLowerCase()){
      techExists = true;
    }
  });

  if (technology == '' && experience == ''){
    msgEmptyTech.innerHTML = ('');
    msgEmptyExp.innerHTML = ('');
    msgEmpty.innerHTML = ('É obrigatório introduzir uma tecnologia e a sua experiência!');
  }else if(technology == ''){
    msgEmpty.innerHTML = ('');
    msgEmptyExp.innerHTML = ('');
    msgEmptyTech.innerHTML = ('É obrigatório introduzir uma tecnologia!');
  }else if (techExists){
    msgEmptyExp.innerHTML = (''); 
  }else if(experience == ''){
    msgEmpty.innerHTML = ('');
    msgEmptyTech.innerHTML = ('');
    msgEmptyExp.innerHTML = ('É obrigatório introduzir a sua experiência!');
  }else if(!techExists){
    msgEmpty.innerHTML = ('');
    msgEmptyTech.innerHTML = ('');
    msgEmptyExp.innerHTML = ('');
    roles.push({tech: technology, exp: experience});
    let table = document.getElementsByTagName('table') [0];

    let newRow = table.insertRow(1);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    roles.forEach(function(element){
      cell1.innerHTML = element.tech;
      cell2.innerHTML = element.exp;
    });

    cell3.innerHTML = '<button id="btn-removeInfo" type="submit">Delete</button>';
    cell3.onclick = () => popUpDelete(technology, newRow);
    btnPropreties.style.background = '#45a049';
    btnPropreties.innerText = 'ADDED';
    document.getElementById('technology').value = '';
    document.getElementById('experience').value = '';
  }
}

/*------------------ADD INFO IN TABLE------------------*/

/*------------------REVOME ROW OF TABLE WITH BUTTON------------------*/

function btnRemoveInfo(name, row){
  let msgTechExist = document.getElementById('msg-technology-exist');
  let indexOfObject;
  roles.forEach((element, index) => {
    if(element.tech === name){
      indexOfObject = index;
      roles.splice(indexOfObject, 1);
      msgTechExist.innerHTML = ('');
    }
  });
  row.remove(); 
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

/*------------------POP-UP DELETE------------------*/

function popUpDelete(name, row){
  let idDelete = document.getElementById('pop-up-container');
  if(idDelete){
    idDelete.classList.add('show');
    idDelete.addEventListener('click', (e) => {
      if(e.target.className == 'btn-delete'){
        btnRemoveInfo(name, row);
        idDelete.classList.remove('show');
      }else if (e.target.className == 'btn-cancel'){
        idDelete.classList.remove('show');
      }else if(e.target.id == 'close' || e.target == idDelete){
        idDelete.classList.remove('show');
      }
    });
  }
}

/*------------------POP-UP DELETE------------------*/
