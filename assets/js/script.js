// music animation
const bars = document.getElementsByClassName('volume_bar');
const volumeBarWrapper = document.getElementById('volume_bar_wrapper');
const mutedLabel = document.getElementById('muted_label');
const backgroundScore = document.getElementById('background_score');

const highestValue = 20;
const lowestValue = 7;
const frequency = 140;
var randomValue = 0;
var barAnimationInterval;
var isMuteButtonClicked = true;

volumeBarWrapper.addEventListener('click', () => {
    if (isMuteButtonClicked) {
        backgroundScore.play();
        backgroundScore.volume = .35;
        
        mutedLabel.innerText = '[UM] The Chicago Night';
        isMuteButtonClicked = false;

        barAnimationInterval = setInterval(animateBar, frequency);
        function animateBar() {
            for (let index = 0; index < bars.length; index++) {
                randomValue = Math.floor(Math.random() *
                    (highestValue - lowestValue) + lowestValue);
                bars[index].style.height = randomValue + 'px';
            }
        }
    }
    else {
        backgroundScore.pause();

        clearInterval(barAnimationInterval);
        isMuteButtonClicked = true;
        mutedLabel.innerText = '[M] The Chicago Night';
        
        for (let index = 0; index < bars.length; index++) {
            bars[index].style.height = 5 + 'px';
        }
    }
});



