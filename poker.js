const cardNum = [];
const cardSyb = [];

function getCardNum() {
    let rand = Math.floor(Math.random() * 13) + 1
    return rand;

}

function getCardSyb() {
    let rand = Math.floor(Math.random() * 4) + 1
    return rand;
}

function getId(id) {
    return document.getElementById(id);
}

console.log(getCardNum());

function getCards() {

    let firstcardNum = getCardNum();
    cardNum.push(firstcardNum);
    let firstcardSyb = getCardSyb();



    let secondcardNum = getCardNum();
    let secondcardSyb = getCardSyb();

    cardNum.forEach(element => {
        if(secondcardNum == element) {
            
        }
    });

    console.log(cardNum.toString())

    

    let thirdcardNum = getCardNum();
    let thirdcardSyb = getCardSyb();


const cardOne = getId("cardNum1");
cardOne.innerHTML = firstcardNum
const cardOneSyb = getId("cardSyb1")
cardOneSyb.innerHTML = firstcardSyb

const cardTwo = getId("cardNum2");
cardTwo.innerHTML = secondcardNum
const cardTwoSyb = getId("cardSyb2");
cardTwoSyb.innerHTML = secondcardSyb



}