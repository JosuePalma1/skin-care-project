// Generador de flores cayendo (solo en hero)
let flowersEnabled = true;

function createFlower() {
  if (!flowersEnabled) return;
  const container = document.getElementById('fallingFlowers');
  const flower = document.createElement('div');
  flower.className = 'flower';
  // Tipos de flores/pétalos
  const flowers = ['🌸', '🌺', '🌷', '💮', '✿'];
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  // Posición horizontal aleatoria
  flower.style.left = Math.random() * 100 + 'vw';
  // Tamaño aleatorio (más pequeño)
  const size = Math.random() * 12 + 12;
  flower.style.fontSize = size + 'px';
  // Duración de caída
  const duration = Math.random() * 4 + 6;
  flower.style.animationDuration = duration + 's';
  // Opacidad más suave
  flower.style.opacity = Math.random() * 0.3 + 0.2;
  container.appendChild(flower);
  // Eliminar después de la animación
  setTimeout(() => {
    flower.remove();
  }, duration * 1000);
}

// Crear flores solo cada 2 segundos (menos frecuente)
const flowerInterval = setInterval(createFlower, 2000);

// Crear solo 5 flores iniciales
for (let i = 0; i < 5; i++) {
  setTimeout(createFlower, i * 400);
}

// Detener flores cuando se hace scroll más allá del hero
window.addEventListener('scroll', function() {
  const heroHeight = document.getElementById('inicio').offsetHeight;
  if (window.scrollY > heroHeight * 0.5) {
    flowersEnabled = false;
    document.getElementById('fallingFlowers').style.opacity = '0';
  } else {
    flowersEnabled = true;
    document.getElementById('fallingFlowers').style.opacity = '1';
  }
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});