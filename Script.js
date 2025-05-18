async function updateImagesByGender() {
  const imgElements = document.querySelectorAll('.campaign-card__img');

  for (const imgElement of imgElements) {
    const gender = imgElement.getAttribute('data-gender'); // "male" o "female"
    try {
      // Hacemos la petición a la API filtrando por género
      const response = await fetch(`https://randomuser.me/api/?gender=${gender}`);
      const data = await response.json();
      const person = data.results[0];
      
      // Actualizamos la imagen y el alt (opcional)
      imgElement.src = person.picture.large;
      imgElement.alt = `${person.name.first} ${person.name.last}, beneficiari${gender === 'male' ? 'o' : 'a'}`;
    } catch (error) {
      console.error(`Error al cargar imagen para género ${gender}:`, error);
      // Mantiene la imagen original (ej: juan-perez-real.jpg)
    }
  }
}

// Ejecutamos al cargar la página
window.addEventListener('DOMContentLoaded', updateImagesByGender);

document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuButton = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav');

  if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('show');

      const icon = mobileMenuButton.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

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


  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('¡Formulario enviado (simulación)! En un caso real, aquí se procesaría la información.');
    });
  });

  const fileUploadLabels = document.querySelectorAll('.file-upload');
  fileUploadLabels.forEach(label => {
    const input = label.querySelector('input[type="file"]');
    const textSpan = label.querySelector('span');
    const defaultText = textSpan ? textSpan.textContent : 'Haz clic o arrastra un archivo';

    if (input && textSpan) {
      input.addEventListener('change', (event) => {
        const files = event.target.files;
        if (files.length > 0) {
          textSpan.textContent = files[0].name;
        } else {
          textSpan.textContent = defaultText;
        }
      });
    }
  });


}); 