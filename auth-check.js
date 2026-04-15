// Este script deve ser carregado no topo das páginas
(function() {
    const perfil = localStorage.getItem('perfilWMS');
    const paginaAtual = window.location.pathname.split("/").pop();

    if (!perfil) {
        window.location.href = 'login.html';
        return;
    }

    // Regras de Acesso
    const permissoes = {
        'gerente': ['index.html', 'entrada.html', 'mapa.html', 'consulta.html', 'ruptura.html','dashboard.html', 'usuarios.html', 'compras.html'],
        'deposito': ['index.html', 'entrada.html', 'mapa.html'],
        'repositor': ['index.html', 'consulta.html', 'ruptura.html', 'compras.html'],
        'comprador': ['index.html', 'ruptura.html', 'compras.html'] // Novo perfil
};

    if (!permissoes[perfil].includes(paginaAtual)) {
        alert("Acesso Negado para seu perfil!");
        window.location.href = 'index.html';
    }
})();