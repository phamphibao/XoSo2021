$(document).ready(function () { //Starting DOM
    document.onkeydown = function (e) { //F5 Key code
        var event = window.event || e;
        if (event.keyCode == 116) {
            event.keyCode = 0;
            return false;
        }
    }
    $(document).bind('keypress keydown keyup', function (e) {
        if (e.which === 82 && e.ctrlKey) { // Ctrl +R key code
            console.log('blocked');
            return false;
        }
    });
});

let theWheel = new Winwheel({
    'canvasId': 'myCanvas',
    'numSegments': 24, // Number of segments
    'outerRadius': 230, // The size of the wheel.
    'textFontSize': 28, // Font size.
    'centerX': 235, // Set x and y as number.
    'centerY': 230,
    'segments': // Definition of all the segments.
        [ {'fillStyle' : '#ee1c24', 'text' : '300'},
        {'fillStyle' : '#3cb878', 'text' : '450'},
        {'fillStyle' : '#f6989d', 'text' : '600'},
        {'fillStyle' : '#00aef0', 'text' : '750'},
        {'fillStyle' : '#f26522', 'text' : '500'},
        {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
        {'fillStyle' : '#e70697', 'text' : '3000'},
        {'fillStyle' : '#fff200', 'text' : '600'},
        {'fillStyle' : '#f6989d', 'text' : '700'},
        {'fillStyle' : '#ee1c24', 'text' : '350'},
        {'fillStyle' : '#3cb878', 'text' : '500'},
        {'fillStyle' : '#f26522', 'text' : '800'},
        {'fillStyle' : '#a186be', 'text' : '300'},
        {'fillStyle' : '#fff200', 'text' : '400'},
        {'fillStyle' : '#00aef0', 'text' : '650'},
        {'fillStyle' : '#ee1c24', 'text' : '1000'},
        {'fillStyle' : '#f6989d', 'text' : '500'},
        {'fillStyle' : '#f26522', 'text' : '400'},
        {'fillStyle' : '#3cb878', 'text' : '900'},
        {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
        {'fillStyle' : '#a186be', 'text' : '600'},
        {'fillStyle' : '#fff200', 'text' : '700'},
        {'fillStyle' : '#00aef0', 'text' : '800'},
        {'fillStyle' : '#ffffff', 'text' : 'LOOSE TURN', 'textFontSize' : 12},
        ],
    'animation': // Definition of the animation
    {
        'type': 'spinToStop',
        'duration': 10,
        'spins': 10,
        'callbackFinished': resetWheel,
        'callbackSound': playSound,
        'soundTrigger': 'pin'
    },
    'pins': // Display pins, and if desired specify the number.
    {
        'number': 24
    }
});

// Called when the animation has finished.
function alertPrize() {
    // min and max number
    var max = 200;
    var min = 0;
    var result = Math.floor((Math.random() * max) + min);
    // localStorage.setItem(result, result);
    var item = localStorage.getItem(result)
    if (item === null) {
        localStorage.setItem(result, result);
    } else {
        console.log('da ton tai' + result);
        result = Math.floor((Math.random() * max) + min);
        localStorage.setItem(result, result);
        console.log('Số mới được thêm vào là: ' + result);
    }
    var number = localStorage.getItem(result);

    if(number < 10){
        console.log(' be hon 10');
        string = "00";
        number =  string + number;
    }else if(number < 100){
        console.log('be hon 100');
        string = "0";
        number =  string + number;
    }

    if (number != null) {
        $("#result").append('<b style="font-size:450%" class="ml-3 text-center"><img src="img/medal.png" alt="">' + number + "</b> ");
    }

    alertResult(number);

}

function alertResult(number) {
    var text = '<b style="font-size:450%">' + number + "</b> ";
    Swal.fire({
        html: text,
        text: number,
        // padding: '5em',
        timer: 4000,
        showConfirmButton: false,
        backdrop: `
            rgba(0,0,123,0.4)
            url("img/giphy.gif")
            center top
            no-repeat
        `

    })
    playEndSound();
    closeModal();
}

function closeModal() {
    $('#myModal').modal('hide')
}


function resetWheel() {
    theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
    theWheel.draw(); // Call draw to render changes to the wheel.
    alertPrize();
    wheelSpinning = false; // Reset to false to power buttons and spin can be clicked again.
}

let audio = new Audio('audio/spin.mp3'); // Create audio object and load desired file.
let audioEnd = new Audio('audio/win-sound.mp3')


function playSound() {
    // Stop and rewind the sound (stops it if already playing).
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}


function playEndSound() {
    // Stop and rewind the sound (stops it if already playing).
    audioEnd.pause();
    audioEnd.currentTime = 0;

    // Play the sound.
    audioEnd.play();
}