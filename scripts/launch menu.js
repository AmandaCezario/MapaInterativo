let abri_fechar_menu = document.getElementById("div_btn_menu");
let display_menu = document.getElementById("opcoes_btn");
let abri_fechar_menu1 = document.getElementById("lista_menu");
let display_menu1 = document.getElementById("lista_menu");

// Função que ajusta o layout dependendo do tamanho da tela
function ajustarLayout() {
    let btn_menu = document.getElementById("menu-btn");
    let larguraTela = window.innerWidth;

    // Verifica o tamanho da tela e faz as alterações
    if (larguraTela <= 720) {
        // Para telas menores (celulares), fecha o menu
        display_menu.style.display = "none";
        abri_fechar_menu.style.height = "50px"; // Reseta a altura do menu
        btn_menu.style.backgroundColor = "lightblue";
        return 720;
    } else if (larguraTela > 720 && larguraTela <= 1024) {
        // Para telas médias (tablets)
        btn_menu.style.backgroundColor = "lightgreen";
        return 1024;
    } else {
        // Para telas maiores (desktops)
        btn_menu.style.backgroundColor = "lightcoral";
        return 1025;
    }
}

// Chama a função para ajustar o layout quando a página for carregada pela primeira vez
window.addEventListener("resize", ajustarLayout);
ajustarLayout(); // Chama imediatamente para verificar o tamanho da tela na carga

// Função para abrir ou fechar o menu ao clicar
function clickMenu() {
    // Função para abrir ou fechar o menu de forma gradual
    function animarMenu(abrir) {
        let alturaInicial = parseInt(window.getComputedStyle(abri_fechar_menu).height, 10);
        let alturaFinal = abrir ? 200 : 50; // Valor da altura final (200px ao abrir, 50px ao fechar)
        let incremento = abrir ? 10 : -10; // Aumenta ou diminui a altura
        let intervalo = 10; // Tempo entre cada incremento (em milissegundos)

        let intervaloId = setInterval(function() {
            // Atualiza a altura do menu
            alturaInicial += incremento;

            // Se atingiu o valor final, para a animação
            if ((abrir && alturaInicial >= alturaFinal) || (!abrir && alturaInicial <= alturaFinal)) {
                alturaInicial = alturaFinal; // Ajusta para o valor final
                clearInterval(intervaloId); // Para a animação
            }

            abri_fechar_menu.style.height = alturaInicial + "px";
        }, intervalo);
    }

    // Verifica se o menu está fechado ou aberto e chama a função de animação
    let valor_menu = parseInt(window.getComputedStyle(abri_fechar_menu).height, 10);
    if (valor_menu <= 50) {
        animarMenu(true); // Abre o menu
        display_menu.style.display = "block"; // Mostra o menu
    } else {
        display_menu.style.display = "none"; // Esconde o menu
        animarMenu(false); // Fecha o menu com a animação para 50px
    }
}

// Função para abrir ou fechar o menu lateral
function clickAbriOpcao1() {
    // Função para abrir ou fechar o menu lateral de forma gradual
    function animarMenu1(abrir) {
        let larguraInicial = parseFloat(window.getComputedStyle(abri_fechar_menu1).width, 10);  // Use parseFloat para lidar com valores decimais
        let larguraFinal = abrir ? 300 : 0;  // Largura final para abrir ou fechar o menu
        let incremento = abrir ? 10 : -10;  // Aumenta ou diminui a largura
        let intervalo = 10;  // Tempo entre cada incremento (em milissegundos)

        let intervaloId = setInterval(function() {
            // Atualiza a largura do menu
            larguraInicial += incremento;

            // Se atingiu o valor final, para a animação
            if ((abrir && larguraInicial >= larguraFinal) || (!abrir && larguraInicial <= larguraFinal)) {
                larguraInicial = larguraFinal;  // Ajusta para o valor final
                clearInterval(intervaloId);  // Para a animação
            }

            abri_fechar_menu1.style.width = larguraInicial + "px";  // Aplica a largura ao menu
        }, intervalo);
    }

    // Verifica se o menu está fechado ou aberto e chama a função de animação
    let valor_menu = parseFloat(window.getComputedStyle(abri_fechar_menu1).width, 10);  // Use parseFloat aqui também

    if (valor_menu <= 0) {  // Verifica se a largura é 0 ou próxima de 0
        display_menu1.style.display = "block";  // Mostra o menu
        animarMenu1(true);  // Abre o menu
    } else {
        display_menu1.style.display = "none";  // Esconde o menu
        animarMenu1(false);  // Fecha o menu
    }
}

// Função para fechar os menus ao clicar fora deles
function fecharMenus(event) {
    if (!abri_fechar_menu.contains(event.target) && !abri_fechar_menu1.contains(event.target) && !display_menu.contains(event.target) && !display_menu1.contains(event.target)) {
        // Fechar ambos os menus
        display_menu.style.display = "none";
        display_menu1.style.display = "none";
        abri_fechar_menu.style.height = "50px";
        animarMenu(false); // Fechar o primeiro menu
        animarMenu1(false); // Fechar o segundo menu
    }
}

// Adiciona um ouvinte de eventos para fechar os menus ao clicar fora
document.addEventListener("click", fecharMenus);
