class City {
    constructor(name, goods) {
        this.name = name;
        this.goods = goods;
    }
}

class Game {
    constructor() {
        this.cities = [
            new City('City 1', { wheat: 10, iron: 5, wood: 15 }),
            new City('City 2', { wheat: 8, iron: 7, wood: 12 }),
            new City('City 3', { wheat: 12, iron: 6, wood: 10 }),
            new City('City 4', { wheat: 15, iron: 9, wood: 8 }),
            new City('City 5', { wheat: 7, iron: 10, wood: 5 })
        ];
        this.playerInventory = { wheat: 0, iron: 0, wood: 0, gold: 100 };
    }

    updateUI() {
        this.cities.forEach((city, index) => {
            document.getElementById(`city${index + 1}-wheat`).textContent = city.goods.wheat;
            document.getElementById(`city${index + 1}-iron`).textContent = city.goods.iron;
            document.getElementById(`city${index + 1}-wood`).textContent = city.goods.wood;
        });
        document.getElementById('player-gold').textContent = this.playerInventory.gold;
        document.getElementById('player-wheat').textContent = this.playerInventory.wheat;
        document.getElementById('player-iron').textContent = this.playerInventory.iron;
        document.getElementById('player-wood').textContent = this.playerInventory.wood;
    }

    trade(cityId, good) {
        const cityIndex = parseInt(cityId.replace('city', '')) - 1;
        const city = this.cities[cityIndex];

        if (this.playerInventory.gold >= 10 && city.goods[good] > 0) {
            this.playerInventory[good] += 1;
            this.playerInventory.gold -= 10;
            city.goods[good] -= 1;
            this.updateUI();
        } else if (this.playerInventory[good] > 0) {
            this.playerInventory[good] -= 1;
            this.playerInventory.gold += 10;
            city.goods[good] += 1;
            this.updateUI();
        }
    }
}

const game = new Game();
game.updateUI();

function trade(cityId, good) {
    game.trade(cityId, good);
}
