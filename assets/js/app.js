'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', true),            
            new Route('pliante', 'pliante.html'),
            new Route('mape', 'mape.html'),
            new Route('brosuri', 'brosuri.html'),
            new Route('materiale', 'materiale.html'),
            new Route('diplome', 'diplome.html'),
            new Route('agende', 'agende.html'),
            new Route('stoc', 'stoc.html'),
            new Route('formulare', 'formulare.html'),
            new Route('felicitari', 'felicitari.html'),
            new Route('ambalaje', 'ambalaje.html'),
            new Route('servicii-tipografice', 'servicii-tipografice.html'),
            new Route('servicii-transport', 'servicii-transport.html'),
            new Route('oferta-tiparituri', 'oferta-tiparituri.html'),
            new Route('oferta-ambalaje', 'oferta-ambalaje.html'),
            new Route('noutati', 'noutati.html'),
            new Route('contact', 'contact.html'),
            new Route('sugestii', 'sugestii.html')
        ]);
    }
    init();
}());
