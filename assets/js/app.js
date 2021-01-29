'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', true),            
            new Route('pliante', 'pliante.html'),
            new Route('cataloage&brosuri', 'cataloage&brosuri.html'),
            new Route('mape&cartivizita', 'mape&cartivizita.html'),
            new Route('carti', 'carti.html'),
            new Route('notesuripersonalizate', 'notesuripersonalizate.html'),
            new Route('materiale&diplome', 'materiale&diplome.html'),
            new Route('materialepromotionale', 'materialepromotionale.html'),
            new Route('formulare', 'formulare.html'),
            new Route('cutiitransport', 'cutiitransport.html'),
            new Route('cutiiprezentare', 'cutiiprezentare.html'),
            new Route('ambalajeindustriale', 'ambalajeindustriale.html'),
            new Route('standuriprezentare', 'standuriprezentare.html'),
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
