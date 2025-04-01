    // Criar o mapa centralizado em São Paulo
    var map = L.map('map', {
        center: [-20.294915659067243, -40.347506360915474],
        zoom: 40,
        zoomControl: false // Remove o controle de zoom padrão
    });
    
    // Adicionar camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    // Adicionar controle de zoom em outra posição (exemplo: canto inferior direito)
    L.control.zoom({
        position: 'bottomright' // Posição do zoom
    }).addTo(map);
    
    
    var popupContent = `
                <div class="popup-content">
                    <h3>Meu Local</h3>
                    <p>Este é um local muito interessante!</p>
                    <p><strong>Endereço:</strong> Rua Fictícia, 123</p>
                    <p><strong>Descrição:</strong> Localizado no coração da cidade, com acesso fácil a várias atrações turísticas.</p>
                    <p><a href="https://www.exemplo.com" target="_blank">Saiba mais</a></p>
                </div>
            `;
    
    
    L.marker([-20.294915659067243, -40.347506360915474]).addTo(map)
        .bindPopup(popupContent)
        autoPan: true
        // .openPopup();
    
    let status_menu = false;
    
    function clikMenu() {
        let timeout = 2;  // Tempo mais adequado para o delay em milissegundos
        let btn_menu_vertical = document.getElementById("mn");
        let btns_menu_vertical_interno = document.getElementById("menu")
    
        // Pega a altura atual do elemento
        const altura = window.getComputedStyle(btn_menu_vertical).height;
    
        // Caso a altura seja 46px (fechado)
        if (altura == "46px") {
            for (let index = 46; index <= 300; index++) {
                // Usamos setTimeout com a variável "index"
                setTimeout(() => {
                    btn_menu_vertical.style.height = index + "px"; 
                    if (index == 300) {// abri botoes internos
                        btns_menu_vertical_interno.style.display = "block";
                    }
                }, (index - 46) * timeout); // Calcula o delay baseado na iteração
    
            }
            status_menu = true;
        } else {  // Caso contrário, vai diminuir a altura
            for (let index = 300; index >= 46; index--) {
                // Usamos setTimeout com a variável "index"
                setTimeout(() => {
                    btn_menu_vertical.style.height = index + "px";
                    if (index == 300 || index != 300) {// fecha botoes internos
                        btns_menu_vertical_interno.style.display = "none";
                    }
                }, (300 - index) * timeout);  // Calcula o delay baseado na iteração
            }
    
            let menu_horizontal = document.getElementById("menu-container");
            let menu_lista_interna = document.getElementById("menu_maximo");
            let icone_menu = document.getElementById("mn");
    
            for (let index = 300; index >= 0; index--) {
                // Usamos setTimeout com a variável "index"
                setTimeout(() => {
                    menu_horizontal.style.width = index + "px";
                    menu_lista_interna.style.width = index + "px";
                    if (index == 300) {// abri botoes internos
                        menu_lista_interna.style.display = "none"
                        icone_menu.style.right = "0px"
                    }
                }, (300 - index) * timeout); // Calcula o delay baseado na iteração
    
            }
        }
    }
    
    function click_Itens_Menu(btn) {
        let timeout = 2;  // Tempo mais adequado para o delay em milissegundos
        // Obtenha o botão clicado usando o ID passado como argumento
        let btn_clicado = document.getElementById(btn);
    
        // Obtenha o menu horizontal
        let menu_horizontal = document.getElementById("menu-container");
        let menu_lista_interna = document.getElementById("menu_maximo");
        let icone_menu = document.getElementById("mn");
    
        // Obtenha a largura do menu horizontal através do estilo computado
        const largura = window.getComputedStyle(menu_horizontal).width;
    
        // Defina os menus individuais
        let menu_perfil = document.getElementById("combo_perfil"); // Corrigido "menu_perfio" para "menu_perfil"
        let menu_salvos = document.getElementById("combo_sua_lista");
        let menu_historico = document.getElementById("combo_sua_historico");
    
        // Se a largura do menu for "0px", significa que ele está fechado, então abre
        if (largura === "0px") {
            for (let index = 0; index <= 300; index++) {
                // Usamos setTimeout com a variável "index"
                setTimeout(() => {
                    menu_horizontal.style.width = index + "px";
                    menu_lista_interna.style.width = index + "px";
                    if (index == 300) {// abri botoes internos
                        menu_lista_interna.style.display = "flex"
                        icone_menu.style.right = "27px"
                    }
                }, (index - 46) * timeout); // Calcula o delay baseado na iteração
    
            }
            status_menu = true;
        }
    
        // Verifique a ação do botão clicado usando o switch
        switch (btn) {
            case "perfil":
                console.log("Botão Perfil Clicado", btn_clicado);
                menu_perfil.style.display = "block"
                menu_salvos.style.display = "none"
                menu_historico.style.display = "none"
                break;
            case "salvar":
                console.log("Botão Salvar Clicado", btn_clicado);
                menu_perfil.style.display = "none"
                menu_salvos.style.display = "block"
                menu_historico.style.display = "none"
                break;
            case "historico":
                console.log("Botão Histórico Clicado", btn_clicado);
                menu_perfil.style.display = "none"
                menu_salvos.style.display = "none"
                menu_historico.style.display = "block"
                break;
            default:
                console.log("Botão desconhecido clicado", btn_clicado);
                break;
        }    
    }
    