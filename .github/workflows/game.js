let city1Goods = 0;
let city2Goods = 0;

function updateGoods() {
    document.getElementById('city1-goods').textContent = city1Goods;
    document.getElementById('city2-goods').textContent = city2Goods;
}

function trade(city) {
    if (city === 'city1') {
        city1Goods += 1;
        city2Goods -= 1;
    } else if (city === 'city2') {
        city1Goods -= 1;
        city2Goods += 1;
    }
    updateGoods();
}

// Initialize game state
updateGoods();
