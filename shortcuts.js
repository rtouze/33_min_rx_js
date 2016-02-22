$(function() {
    console.log("c'est parti!");
    const $result = $('#result');
    // J'observe les keyup sur mon document
    let keyups = Rx.Observable.fromEvent(document.body, 'keyup')
        // Plutot que de filtrer sur tout l'event, je ne filtre que sur la
        // propriete key
        .pluck('key')
        .filter(key => key === 'f' )
        // Je m'abonne pour declencher des comportements
        .subscribe(
            () => requestFullScreen()
        )

    function requestFullScreen() {
        if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen){
            document.documentElement.webkitRequestFullScreen();
        }
    }
});

