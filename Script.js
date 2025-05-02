document.addEventListener('DOMContentLoaded', () => {
    // --- Toggle mobile menu ---
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
  
    if (mobileMenuButton && nav) {
      mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('show');
  
        // Cambiar icono (opcional)
        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times'); // Icono de 'X' al abrir
        }
      });
  
      // Cerrar menú si se hace clic fuera (opcional pero recomendado)
      document.addEventListener('click', (event) => {
          if (!nav.contains(event.target) && !mobileMenuButton.contains(event.target) && nav.classList.contains('show')) {
              nav.classList.remove('show');
              mobileMenuButton.setAttribute('aria-expanded', 'false');
               const icon = mobileMenuButton.querySelector('i');
               if (icon && icon.classList.contains('fa-times')) {
                  icon.classList.remove('fa-times');
                  icon.classList.add('fa-bars');
               }
          }
      });
  
    } else {
        console.warn("Mobile menu button or navigation not found.");
    }
  
  
    // --- Simple script to simulate form submission (para una demo) ---
    // Esto es MUY básico. En una app real, tendrías validación y envío AJAX.
    const forms = document.querySelectorAll('form'); // Asumiendo que tendrás formularios
  
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el envío real para la demo
        alert('¡Formulario enviado (simulación)! En un caso real, aquí se procesaría la información.');
        // Podrías añadir aquí lógica para limpiar el form, mostrar un mensaje de éxito, etc.
        // form.reset(); // Limpia el formulario
      });
    });
  
    // --- Placeholder para interactividad de carga de archivo (si se usa) ---
    const fileUploadLabels = document.querySelectorAll('.file-upload');
    fileUploadLabels.forEach(label => {
        const input = label.querySelector('input[type="file"]');
        const textSpan = label.querySelector('span'); // Asumiendo que tienes un span para el texto
        const defaultText = textSpan ? textSpan.textContent : 'Haz clic o arrastra un archivo';
  
        if (input && textSpan) {
            input.addEventListener('change', (event) => {
                const files = event.target.files;
                if (files.length > 0) {
                    textSpan.textContent = files[0].name; // Muestra el nombre del archivo
                } else {
                    textSpan.textContent = defaultText; // Vuelve al texto original si se cancela
                }
            });
        }
    });
  
  
  }); // Fin de DOMContentLoaded