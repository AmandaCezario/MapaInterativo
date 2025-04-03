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
    <div style="width: 250px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden; font-family: Arial, sans-serif;">
        <img src="img/ExemploDePopup.jpeg" alt="Image cap" style="width: 100%; height: 120px; object-fit: cover;">
        <div style="padding: 15px;">
            <h3 style="margin: 0 0 10px; font-size: 18px; color: #343a40;">Meu local</h3>
            <p style="margin: 0 0 10px; font-size: 14px; color: #6c757d;">Este é um local muito interessante!.</p>
            <p style="margin: 0 0 10px; font-size: 14px; color: #6c757d;">Endereço: Rua Fictícia, 123</p>
            <p style="margin: 0 0 10px; font-size: 14px; color: #6c757d;">Descrição: Localizado no coração da cidade, com acesso fácil a várias atrações turísticas</p>
            <a href="https://getbootstrap.com/docs/5.3/components/card/" target="_blank" style="display: inline-block; padding: 8px 12px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; font-size: 14px;">Saiba mais</a>
        </div>
    </div>
`;


L.marker([-20.294915659067243, -40.347506360915474]).addTo(map)
    .bindPopup(popupContent)
    autoPan: true
    // .openPopup();

