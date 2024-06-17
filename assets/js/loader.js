const loaderHTMLContext =
    `
    <div class="row" id="row_one">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_two">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_two">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_two">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_two">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_one">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_two">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_two">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_two">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>

    <div class="row" id="row_two">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
`
const loader = document.getElementById('loader');
loader.innerHTML = loaderHTMLContext;

const allGrids = document.getElementsByClassName('block');
console.log(allGrids.length);

function dissapearGrid1() {
    for (let index = 0; index < 20; index++) {
        const range = Math.floor(Math.random() * (20 - 0) + 1);
        allGrids[range].style.opacity = 0;
    }
}

function dissapearGrid2() {
    for (let index = 0; index < 20; index++) {
        const range = Math.floor(Math.random() * (40 - 20) + 20);
        // console.log((40 - index) + range);
        allGrids[range].style.opacity = 0;
    }
    setTimeout(() => {
        for (let index = 0; index < allGrids.length; index++) {
            allGrids[index].style.opacity = 0;
        }
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 600);
}

function dissapearGrid3() {
    for (let index = 0; index < 20; index++) {
        const range = Math.floor(Math.random() * (60 - 40) + 40);
        // console.log((60 - index) + range);
        allGrids[range].style.opacity = 0;
    }
}

function dissapearGrid4() {
    for (let index = 0; index < 20; index++) {
        const range = Math.floor(Math.random() * (80 - 60) + 60);
        // console.log((80 - index) + range);
        allGrids[range].style.opacity = 0;
    }
}

function dissapearGrid5() {
    for (let index = 0; index < 20; index++) {
        const range = Math.floor(Math.random() * (100 - 80) + 80);
        // console.log(range);
        allGrids[range].style.opacity = 0;
    }
}

const gridRemoveTimeout1 = setTimeout(dissapearGrid1, 1000);
const gridRemoveTimeout2 = setTimeout(dissapearGrid2, 2600);
const gridRemoveTimeout3 = setTimeout(dissapearGrid3, 1400);
const gridRemoveTimeout4 = setTimeout(dissapearGrid4, 1800);
const gridRemoveTimeout5 = setTimeout(dissapearGrid5, 2200);