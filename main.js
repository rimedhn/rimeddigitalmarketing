// Modal functions
function showModal(title, message, type = 'success') {
    const modal = document.getElementById('customModal');
    const modalContent = document.getElementById('modalContent');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    if (type === 'success') {
        modalIcon.className = 'w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-green-100';
        modalIcon.innerHTML = '<i class="fas fa-check text-green-500 text-2xl"></i>';
    } else if (type === 'info') {
        modalIcon.className = 'w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-blue-100';
        modalIcon.innerHTML = '<i class="fas fa-info text-blue-500 text-2xl"></i>';
    } else if (type === 'warning') {
        modalIcon.className = 'w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-yellow-100';
        modalIcon.innerHTML = '<i class="fas fa-exclamation-triangle text-yellow-500 text-2xl"></i>';
    }
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
}
function closeModal() {
    const modal = document.getElementById('customModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}
document.getElementById('customModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    mobileMenu.classList.toggle('nav__mobile--active');
    const isActive = mobileMenu.classList.contains('nav__mobile--active');
    menuButton.setAttribute('aria-expanded', isActive);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 80;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const message = `¡Hola Rimed Digital! 👋

*Nuevo contacto desde el sitio web:*

📝 *Nombre:* ${data.name}
📧 *Email:* ${data.email}
📱 *Teléfono:* ${data.phone || 'No proporcionado'}
🎯 *Servicio de interés:* ${getServiceName(data.service)}

💬 *Mensaje:*
${data.message}

¡Espero su respuesta!`;
    const whatsappNumber = '50493593126';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    showModal('¡Mensaje Enviado!', 'Te estamos redirigiendo a WhatsApp para enviar tu mensaje.', 'success');
    event.target.reset();
}
function getServiceName(serviceValue) {
    const services = {
        'marketing-digital': 'Marketing Digital',
        'desarrollo-web': 'Desarrollo Web',
        'presencia-digital': 'Presencia Digital',
        'aplicaciones': 'Aplicaciones',
        'sistemas-gestion': 'Sistemas de Gestión',
        'consultoria': 'Consultoría Digital'
    };
    return services[serviceValue] || serviceValue;
}
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('shadow-xl');
    } else {
        header.classList.remove('shadow-xl');
    }
});
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        mobileMenu.classList.remove('nav__mobile--active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});
function openWhatsApp() {
    const whatsappNumber = '50493593126';
    const message = `¡Hola Rimed Digital! 👋

Me interesa conocer más sobre sus servicios de digitalización de negocios. 

¿Podrían brindarme más información?

¡Gracias!`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}
