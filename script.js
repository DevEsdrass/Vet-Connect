function toggleMenu() {
    var navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}

// Adicione o seguinte código ao seu script.js

document.addEventListener('DOMContentLoaded', function () {
    // Obtém todos os links do menu
    var menuLinks = document.querySelectorAll('nav a');

    // Adiciona um ouvinte de clique para cada link
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Fecha o menu automaticamente
            toggleMenu();
        });
    });
});

// Restante do seu código...
function sendWhatsAppMessage() {
    // Obter dados do formulário
    const tutorName = document.getElementById('tutor-name').value;
    const petName = document.getElementById('pet-name').value;
    const consultDate = document.getElementById('appointment-date').value;
    const vetTime = document.getElementById('appointment-time').value;
    const instructions = document.getElementById('special-instructions').value;
    // Montar a mensagem
    const message = `Olá, meu nome é ${tutorName}, sou tutor do(a) ${petName} gostaria de marcar uma consulta ${consultDate} as ${vetTime}. Motivo da consulta: ${instructions}.`;

    // Criar link do WhatsApp com a mensagem
    const whatsappLink = `https://wa.me/+5584987224578?text=${encodeURIComponent(message)}`;

    // Abrir o link no WhatsApp
    window.location.href = whatsappLink;
}