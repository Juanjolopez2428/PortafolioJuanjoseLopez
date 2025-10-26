// Alternar menú en móviles
document.getElementById('navToggle').addEventListener('click', function(){
const nav = document.getElementById('mainNav');
nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
nav.style.flexDirection = 'column';
});

// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Estado del formulario (mensaje simple)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if(form){
form.addEventListener('submit', async (e) => {
status.textContent = 'Enviando...';
setTimeout(()=> {
status.textContent = 'Mensaje enviado (simulado). Si configuraste Formspree, recibirás confirmación real.';
}, 1000);
});
}
