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

