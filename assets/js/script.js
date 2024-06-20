import baffle from 'baffle';
import { Application } from '@splinetool/runtime';

// spline canvas
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/hDCubbyljWlwEQFh/scene.splinecode').finally(() => {
    console.log("laoded");
});

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


// side pointer animation 
// const rootElement = document.querySelector(':root');
// const computedStyles = getComputedStyle(rootElement);
// computedStyles.setProperty('--pointer-one-top-value',
//     Math.floor(Math.random() * (35 - 25) + 25));
// console.log(computedStyles.getPropertyValue('--pointer-one-top-value'))

// revealing effect and hover effect
// scroll text
const scrollText = document.getElementById('scroll_text');
let text = baffle(scrollText, {
    characters: 'scroll_down',
    speed: 200
}).start();
setInterval(() => {
    text.start();
}, 2600);
setInterval(() => {
    text.reveal();
}, 4000);

const navItem = document.getElementsByClassName('route_name');
const timeoutDuration = 600;
const routeNames = ["services", "shop now", "category", "account"]

for (let index = 0; index < navItem.length; index++) {
    navItem[index].addEventListener('mouseover', () => {
        try {
            switch (index + 1) {
                case 1:
                    animateTextObject(
                        navItem[index],
                        routeNames[index],
                        timeoutDuration);
                    break;

                case 2:
                    animateTextObject(
                        navItem[index],
                        routeNames[index],
                        timeoutDuration);
                    break;

                case 3:
                    animateTextObject(
                        navItem[index],
                        routeNames[index],
                        timeoutDuration);
                    break;

                case 4:
                    animateTextObject(
                        navItem[index],
                        routeNames[index],
                        timeoutDuration);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log("Some error has occured - " + error);
        }

    });

    navItem[index].addEventListener('mouseout', () => {
        try {
            switch (index + 1) {
                case 1:
                    resetShuffleText(navItem[index], routeNames[index]);
                    break;

                case 2:
                    resetShuffleText(navItem[index], routeNames[index]);
                    break;

                case 3:
                    resetShuffleText(navItem[index], routeNames[index]);
                    break;

                case 4:
                    resetShuffleText(navItem[index], routeNames[index]);
                    break;

                default:
                    break;
            }
        } catch (error) {

        }
    })
}

// text animation
function animateTextObject(textObject, routeName, timeoutDuration) {
    try {
        let hoverTextObj = baffle(textObject, {
            characters: routeName,
            speed: 200
        }).start();
        setTimeout(() => {
            hoverTextObj.reveal();
        }, timeoutDuration);
    } catch (error) {
        console.log("Some error occured in the baffle library - " + error);
    }
}

function resetShuffleText(textObject, routeName) {
    textObject.innerText = routeName;
}


