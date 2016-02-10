$(function() {
    console.log("c'est parti!");
    const $result = $('#result');
    document.body.onkeyup = (event) => {
        console.log(event.key);
        if (event.key === "f") {
           requestFullScreen();
        }
        $result.html(`Touche ${event.key}`);

    }

    function requestFullScreen() {
        if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen){
            document.documentElement.webkitRequestFullScreen();
        }
    }
});

