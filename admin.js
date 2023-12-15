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
    var elements = document.querySelectorAll('#' + sectionId + ' .element');
    elements.forEach(function (element) {
      element.addEventListener('click', function () {
        openModal(element);
      });
    });
}

function openModal(element) {
    var activeElement = document.querySelector('.element.active');
    if (activeElement) {
      activeElement.classList.remove('active');
    }
  
    element.classList.add('active');
  
    var itemName = element.querySelector('h3').innerText;
    var itemDescription = element.querySelector('p').innerText;
  
    document.getElementById('itemName').value = itemName;
    document.getElementById('itemDescription').value = itemDescription;
  
    document.getElementById('editModal').style.display = 'block';
}

function saveChanges() {
    var newName = document.getElementById('itemName').value;
    var newDescription = document.getElementById('itemDescription').value;
  
    var activeElement = document.querySelector('.element.active');
    if (activeElement) {
      activeElement.querySelector('h3').innerText = newName;
      activeElement.querySelector('p').innerText = newDescription;
  
      activeElement.classList.remove('active');
    }
  
    closeModal();
}

function closeModal() {
    var activeElement = document.querySelector('.element.active');
  
    document.getElementById('editModal').style.display = 'none';
  
    if (activeElement) {
      activeElement.classList.remove('active');
    }
}
  
function openAddElementModal(sectionId) {
    currentSectionId = sectionId;
    document.getElementById('addElementModal').style.display = 'block';
}
  
function closeAddElementModal() {
    currentSectionId = null;
    document.getElementById('addElementModal').style.display = 'none';
}

function addNewElement() {
    var newItemName = document.getElementById('newItemName').value;
    var newItemDescription = document.getElementById('newItemDescription').value;
    var newItemImageUrl = document.getElementById('newItemImageUrl').value;

    var newElement = document.createElement('div');
    newElement.classList.add('element');
    newElement.innerHTML = `
      <img src="${newItemImageUrl}" alt="${newItemName}">
      <h3>${newItemName}</h3>
      <p>${newItemDescription}</p>
    `;
  
    var section = document.getElementById(currentSectionId);
    section.querySelector('.elements').appendChild(newElement);
  
    closeAddElementModal();
}