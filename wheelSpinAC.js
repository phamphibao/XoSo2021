let theWheel = new Winwheel({
    'canvasId'    : 'myCanvas',
    'numSegments'  : 17,         // Number of segments
    'outerRadius'  : 212,       // The size of the wheel.
    'textFontSize' : 28,        // Font size.
    'segments'     :            // Definition of all the segments.
    [{'fillStyle' : '#ee1c24', 'text' : '300'},
                    {'fillStyle' : '#3cb878', 'text' : '450'},
                    {'fillStyle' : '#f6989d', 'text' : '600'},
                    {'fillStyle' : '#00aef0', 'text' : '750'},
                    {'fillStyle' : '#f26522', 'text' : '500'},
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
    ],
    'animation' :               // Definition of the animation
    {
        'type'     : 'spinToStop',
        'duration' : 5,
        'spins'    : 8,
        'callbackFinished' : resetWheel,
        'callbackSound' : playSound,
        'soundTrigger'  : 'pin' 
    },
    'pins' :    // Display pins, and if desired specify the number.
        {
            'number' : 16
        }
});

// Called when the animation has finished.
function alertPrize(indicatedSegment)
{
    // Do basic alert of the segment text.
    alert("You have won " + indicatedSegment.text);
}

function resetWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}

let audio = new Audio('audio/spin.mp3');  // Create audio object and load desired file.
 
    function playSound()
    {
        // Stop and rewind the sound (stops it if already playing).
        audio.pause();
        audio.currentTime = 0;
 
        // Play the sound.
        audio.play();
    }