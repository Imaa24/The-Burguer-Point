function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var elementsDiv = section.querySelector('.elements');
    var icon = section.querySelector('i');

    if (elementsDiv.style.display === 'none' || elementsDiv.style.display === '') {
      elementsDiv.style.display = 'flex';
      icon.className = 'fa-solid fa-xmark';
      elementsDiv.classList.add('elementsi');
    } else {
      elementsDiv.style.display = 'none';
      icon.className = 'fa-solid fa-arrow-down';
      elementsDiv.classList.remove('elementsi');
    }
}

var nombre="admin"
var clave="admin"

function guardar() {
 
  let n = document.getElementById("txtNombre").value
  let c = document.getElementById("txtclave").value

  if ((n==nombre)&&(c==clave)){
    window.location.href = "admin.html";
  }
  else{
    alert("Credenciales invalidas")
  }

}

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});