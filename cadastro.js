function submitVetForm(event) {
    event.preventDefault();


    document.getElementById("vet-registration-form").style.display = "none";
    document.getElementById("vet-registration-success").style.display = "block";
}

function sendWhatsAppMessage() {
    // Obter dados do formulário
    const vetName = document.getElementById('vet-name').value;
    const vetSpecialty = document.getElementById('vet-specialty').value;
    const vetGraduationYear = document.getElementById('vet-graduation-year').value;
    const vetCrmv = document.getElementById('vet-crmv').value;
    const vetcity = document.getElementById('cidade').value;
    // Montar a mensagem
    const message = `Olá, meu nome é ${vetName}, CRMV ${vetCrmv} sou de ${vetcity} me formei no ano de ${vetGraduationYear}. Gostaria de me cadastrar na Vet Connect como veterinário(a) com especialidade em ${vetSpecialty}.`;

    // Criar link do WhatsApp com a mensagem
    const whatsappLink = `https://wa.me/+5584991847301?text=${encodeURIComponent(message)}`;

    // Abrir o link no WhatsApp
    window.location.href = whatsappLink;
}


