// Função para alternar o tema entre claro e escuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Salvar preferências no localStorage para manter o tema após recarregar a página
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Função para restaurar o tema quando a página for carregada
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Evento para alternar o tema ao clicar no botão
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

// Carregar o tema salvo ao carregar a página
window.onload = loadTheme;

// Função para mostrar/ocultar um conteúdo extra
function toggleContent() {
    const content = document.getElementById('extra-content');
    content.classList.toggle('hidden');
}

// Evento para mostrar/ocultar conteúdo ao clicar em um botão
document.getElementById('show-more-btn').addEventListener('click', toggleContent);
