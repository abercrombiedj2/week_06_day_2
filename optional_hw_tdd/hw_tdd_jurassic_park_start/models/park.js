const Park = function (name, price) {
    this.name = name;
    this.price = price;
    this.dinosaurs = [];
}

Park.prototype.add = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function (dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.favourite = function () {
    let favourite = this.dinosaurs[0];

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > favourite.guestsAttractedPerDay) {
            favourite = dinosaur;
        }
    }
    return favourite;
}

Park.prototype.find = function (species) {
    found = [];

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            found.push(dinosaur);
        }
    }
    return found;
}

Park.prototype.dailyVisitors = function () {
    total = 0;

    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.yearlyVisitors = function () {
    return this.dailyVisitors() * 365;
}

Park.prototype.revenue = function () {
    return this.yearlyVisitors() * this.price;
}

module.exports = Park;