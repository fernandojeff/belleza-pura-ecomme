// Selecionando os elementos do carrossel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const products = document.querySelectorAll('.produto-card');
const totalProducts = products.length;

let currentIndex = 0;

// Função para mover o carrossel para a esquerda 
function moveToPrev() {
    if (currentIndex === 0) {
        // Se estiver no primeiro, vai para o último produto
        currentIndex = totalProducts - 1;
    } else {
        // Senão, diminui o índice
        currentIndex--;
    }
    updateCarousel();
}

// Função para mover o carrossel para a direita 
function moveToNext() {
    if (currentIndex === totalProducts - 1) {
        // Se estiver no último produto, vai para o primeiro
        currentIndex = 0;
    } else {
        // aumenta o índice
        currentIndex++;
    }
    updateCarousel();
}

// Função para atualizar o carrossel com base no índice atual
function updateCarousel() {
    const productWidth = products[0].offsetWidth; 
    const offset = -currentIndex * productWidth; 
    carousel.style.transform = `translateX(${offset}px)`; 
}

// Evento de clique nos botões de navegação
prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);

// Inicialização do carrossel
updateCarousel();

//rolar o cabeçalho
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Rolou para baixo, esconde o cabeçalho
        header.style.transform = 'translateY(-100%)';
    } else {
        // Rolou para cima, mostra o cabeçalho
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Scroll suave ao clicar nos links do menu
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validação do formulário de captura
const form = document.getElementById('form-captura');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = form.querySelector('input[name="nome"]');
    const email = form.querySelector('input[name="email"]');
    
    if (nome.value.trim() === '' || email.value.trim() === '') {
        alert('Por favor, preencha todos os campos!');
    } else {
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Cadastro realizado com sucesso!';
        successMessage.style.fontSize = '16px';
        successMessage.style.fontWeight = 'bold';
        successMessage.style.color = '#5a7f5f';
        form.appendChild(successMessage);
        
        nome.value = '';
        email.value = '';
    }
});

// Função para trocar a imagem principal
function trocarImagem(imagem) {
    const imagemPrincipal = document.getElementById('imagem-principal');
    imagemPrincipal.src = imagem;
}
