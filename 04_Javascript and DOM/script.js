
function formTable(selector){
    //добавление новых строк
    let wrapper = document.querySelector(selector);
    let form = wrapper.getElementsByTagName("form")[0];
    let table = wrapper.getElementsByTagName("table")[0];

    form.onsubmit = function(ev){        //Создаёт объект Event и возвращает его вызывающему
      ev = ev || event;
      ev.preventDefault();
      
      let tr = document.createElement("tr"), td;
      
      for(let i = 0; i < 7; i++){
        td = document.createElement("td");
        td.innerHTML = this.elements[i].value;
        tr.appendChild(td);
      }    
      table.appendChild(tr);    
    }  
  }


  formTable(".wrapper");



  //редактирование ячеек
  let tdsTable = document.getElementsByTagName('td');

  for (let i = 0; i < tdsTable.length; i++) {
      tdsTable[i].addEventListener('click', function addATextBox() {
          let input = document.createElement('input');
          input.style.background = 'none';
          input.style.border = 'none';
          input.style.outline = 'none';
          input.style.textAlign = 'center';
          input.value = this.innerHTML;
          this.innerHTML = '';
          this.appendChild(input);
  
          let td = this;
          input.addEventListener('blur', function() {
              td.innerHTML = this.value;
              td.addEventListener('click', addATextBox);
          });
          this.removeEventListener('click', addATextBox);
      });
  }

  //удаление строки
  function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }



