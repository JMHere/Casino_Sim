function getId(id) {
    return document.getElementById(id);
}

function randomNum() {
    return Math.floor(Math.random() * 10) + 1;
}



function spin() {
    const item1 = getId('slot1');
    const item2 = getId('slot2');
    const item3 = getId('slot3');
    const cherry = getId("cherry1")
    const daimond = getId("diamond1");
    const cherry2 = getId("cherry2")
    const daimond2 = getId("diamond2");
    const cherry3 = getId("cherry3");
    const daimond3 = getId("diamond3");
    const seven = getId("seven1");
    const seven2 = getId("seven2");
    const seven3 = getId("seven3");
    const bar = getId("bar1");
    const bar2 = getId("bar2");
    const bar3 = getId("bar3");

    seven.style.display = "none";
    seven2.style.display = "none";
    seven3.style.display = "none";

    const ran1 = randomNum();
    const ran2 = randomNum();
    const ran3 = randomNum();

    console.log(ran1);
    console.log(ran2);
    console.log(ran3);

    // First Slot
    if(ran1 == 1 || ran1 == 2 || ran1 == 3 || ran1 == 4) {
        
        cherry.style.display = "block";
    }
    else {
        cherry.style.display = "none";
    }

    if(ran1 == 5 || ran1 == 6 || ran1 == 7) {
        daimond.style.display = "block";
    }
    else {
        daimond.style.display = "none";
    }

    if(ran1 == 8) {
        seven.style.display = "block";
    }
    else {
        seven.style.dispaly = "none";
    }

    if(ran1 == 9 || ran1 == 10) {
        bar.style.display = "block"
    }
    else {
        bar.style.display = "none";
    }


    // Second Slot
    if(ran2 == 1 || ran2 == 2 || ran2 == 3 || ran2 == 4) {
        
        cherry2.style.display = "block";
    }
    else {
        cherry2.style.display = "none";
    }

    if(ran2 == 5 || ran2 == 6 || ran2 == 7) {
        daimond2.style.display = "block";
    }
    else {
        daimond2.style.display = "none";
    }

    if(ran2 == 8) {
        seven2.style.display = "block";
    }
    else {
        seven2.style.display = "none";
    }

    if(ran2 == 9 || ran2 == 10) {
        bar2.style.display = "block";
    }
    else {
        bar2.style.display = "none";
    }

    // Third Slot
    if(ran3 == 1 || ran3 == 2 || ran3 == 3 || ran3 == 4) {
        
        cherry3.style.display = "block";
    }
    else {
        cherry3.style.display = "none";
    }

    if(ran3 == 5 || ran3 == 6 || ran3 == 7) {
        daimond3.style.display = "block";
    }
    else {
        daimond3.style.display = "none";
    }

    if(ran3 == 8) {
        seven3.style.display = "block";
    }
    else {
        seven3.style.display = "none";
    }

    if(ran3 == 9 || ran3 == 10) {
        bar3.style.display = "block";
    } 
    else {
        bar3.style.display = "none";
    }

    // item1.innerHTML = `${ran1}`;
    // item2.innerHTML = `${ran2}`;
    // item3.innerHTML = `${ran3}`;

    if ( cherry.style.display == "block" && cherry2.style.display == "block" && cherry3.style.display == "block") {
        playWin()
        win()
    } else if(daimond.style.display == "block" && daimond2.style.display == "block" && daimond3.style.display == "block") {
        playWin()
        win()
        console.log("it works")
    } else if(seven.style.display == "block" && seven2.style.display == "block" && seven3.style.display == "block") {
        playWin()
        win()
    } else if (bar.style.display == "block" && bar2.style.display == "block" && bar3.style.display == "block") {
        playWin()
        win()
    }
    else {
        hideWin()
    }

}

function win() {
    const winTxt = getId("winText");
    winTxt.style.display = "block";
    winTxt.classList.add('animated', 'pulse')
}

function hideWin() {
    const winTxt = getId("winText");
    winTxt.style.display = "none";
}

function playWin() {
    const win = getId("win")
    win.play()
}

function rules() {
    const rules = getId("rules");

    if(rules.style.display == "block") {
        rules.style.display = "none"
    } else {
        rules.style.display = "block"
    }
}




function checkMoney() {

}


