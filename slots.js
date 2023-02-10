function getId(id) {
    return document.getElementById(id);
}

function randomNum() {
    return Math.floor(Math.random() * 2) + 1;
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

    const ran1 = randomNum();
    const ran2 = randomNum();
    const ran3 = randomNum();

    if(ran1 == 1) {
        
        cherry.style.display = "block";
    }
    else {
        cherry.style.display = "none";
    }

    if(ran1 == 2) {
        daimond.style.display = "block";
    }
    else {
        daimond.style.display = "none";
    }

    if(ran2 == 1) {
        
        cherry2.style.display = "block";
    }
    else {
        cherry2.style.display = "none";
    }

    if(ran2 == 2) {
        daimond2.style.display = "block";
    }
    else {
        daimond2.style.display = "none";
    }

    if(ran3 == 1) {
        
        cherry3.style.display = "block";
    }
    else {
        cherry3.style.display = "none";
    }

    if(ran3 == 2) {
        daimond3.style.display = "block";
    }
    else {
        daimond3.style.display = "none";
    }

    // item1.innerHTML = `${ran1}`;
    // item2.innerHTML = `${ran2}`;
    // item3.innerHTML = `${ran3}`;

    if( ran1 == ran2 && ran1 == ran3) {
        playBruh()
        
    }

}

function playBruh() {
    const bruh = getId("bruh");
    bruh.play()
}