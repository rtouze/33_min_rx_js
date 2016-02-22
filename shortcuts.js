$(function() {
    console.log("c'est parti!");
    const $result = $('#result');

    const $wiki_search = $('#wiki_search');

    let keyups = Rx.Observable.fromEvent(document.body, 'keyup')
        .pluck('key');


    keyups.filter(key => key === 'f' )
    .subscribe(() => requestFullScreen());

    // Capture des event par groupe de deux
    keyups.windowWithCount(2, 1)
    .selectMany(x => x.toArray())
    // on ne cherche que la séquence sw
    .filter(x => x[0] === 's' && x[1] === 'w')
    // on affiche le champ de recherche
    .subscribe(function() {
        console.log('Tu as pressé la séquance sw');
        $wiki_search.show();
    });

    // on ajoute également un comportement sur la touche Escape
    keyups.filter(k => k === 'Escape')
    .subscribe(function() { 
        console.log('tu as pressé echap');
        $wiki_search.hide();
    });

    function requestFullScreen() {
        if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen){
            document.documentElement.webkitRequestFullScreen();
        }
    }
});

