const btnToggle = document.querySelector('.toggle-btn');
const btnToggle2 = document.querySelector('.toggle-btn2');
const btnClose = document.getElementById('close');
const btnClose2 = document.getElementById('close2');
const btnRemove = document.getElementById('remover');

btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementsByClassName('divBlured')[0].classList.toggle('blured');   
});

btnClose.addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementsByClassName('divBlured')[0].classList.remove('blured');  
});

btnRemove.addEventListener('click', function () {
    document.getElementById('removerCompra').remove()
});


btnToggle2.addEventListener('click', function () {
  document.getElementById('sidebar2').classList.toggle('active2');
  document.getElementsByClassName('divBlured')[0].classList.toggle('blured');   
});

btnClose2.addEventListener('click', function () {
  document.getElementById('sidebar2').classList.remove('active2');
  document.getElementsByClassName('divBlured')[0].classList.remove('blured');  
});