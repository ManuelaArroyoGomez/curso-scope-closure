// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins; //adición 
//     console.log(`MoneyBox: $${saveCoins}`)
// }
// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxManu = moneyBox();
moneyBoxManu(10);
moneyBoxManu(20);
moneyBoxManu(5);