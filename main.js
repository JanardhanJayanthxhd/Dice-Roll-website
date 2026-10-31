
const diceToImg = {
    1: 'assets/dice_1.png',
    2: 'assets/dice_2.png',
    3: 'assets/dice_3.png',
    4: 'assets/dice_4.png',
    5: 'assets/dice_5.png',
    6: 'assets/dice_6.png'
};

const randomDiceValue = () => Math.floor(Math.random() * 6) + 1;

window.addEventListener('load', () => {
    const diceOneValue = randomDiceValue();
    const diceTwoValue = randomDiceValue();

    const dices = document.querySelectorAll('.dice-img');

    if (dices.length >= 2) {
        dices[0].src = diceToImg[diceOneValue];
        dices[1].src = diceToImg[diceTwoValue];
    }

    const conclusionText = document.querySelector('.conclusion-text');

    if (!conclusionText) {
        return;
    }

    let winnerText = 'Draw, Try again';
    if (diceOneValue > diceTwoValue) {
        winnerText = 'Player 1 has won!';
    } else if (diceTwoValue > diceOneValue) {
        winnerText = 'Player 2 has won!';
    }

    conclusionText.textContent = winnerText;
});
