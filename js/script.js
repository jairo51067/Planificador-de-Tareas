// Para agregar el elemento ejemplo <i></i>  
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  span.className = "close";
  span.innerHTML = '<i class="fa-solid fa-trash"></i>';
  myNodelist[i].appendChild(span);
}

// Haga clic en el botón de cierre para ocultar el elemento de la lista actual
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Agrega un evento de escucha al elemento de la lista cuando se hace clic en él y se agrega la clase "checked" y se mueve al final de la lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    // Mueve el elemento a la posición deseada
    if (ev.target.classList.contains('checked')) {
      var parent = ev.target.parentNode;
      parent.appendChild(ev.target);
    }
  }
}, false);


// ** funcion newElemnt, para introducir, para usar SweetAlert2 en lugar del alert.
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    // Usar SweetAlert2 en lugar de alert
    Swal.fire({
      title: '¡Olvidas Algo!',
      text: 'Debes escribir alguna tarea!',
      icon: 'warning',
      confirmButtonText: 'Agregar Tarea'
    });
  } else {
    var taskList = document.getElementById("taskList");
    taskList.insertBefore(li, taskList.firstChild);
  }
  
  document.getElementById("taskInput").value = "";

  var span = document.createElement("span");
  var icon = document.createElement("i");
  icon.className = "fa-solid fa-trash";
  span.className = "close";
  span.appendChild(icon);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

