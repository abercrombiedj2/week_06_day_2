const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let trex;
  let stegosaurus;
  let triceratops;
  let velociraptor;
  let spinosaurus;
  let allosaurus;
  let megalosaurus;
  let diplodocus;


  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    trex = new Dinosaur('t-rex', 'carnivore', 80);
    stegosaurus = new Dinosaur('stegosaurus', 'herbivore', 70);
    triceratops = new Dinosaur('triceratops', 'herbivore', 60);
    velociraptor = new Dinosaur('velociraptor', 'carnivore', 50);
    spinosaurus = new Dinosaur('spinosaurus', 'carnivore', 40);
    allosaurus = new Dinosaur('allosaurus', 'carnivore', 30);
    megalosaurus = new Dinosaur('megalosaurus', 'carnivore', 20);
    diplodocus = new Dinosaur('diplodocus', 'herbivore', 10);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.add(diplodocus);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.add(stegosaurus);
    park.add(triceratops);
    park.remove(triceratops);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.add(trex);
    park.add(stegosaurus);
    park.add(triceratops);
    park.add(velociraptor);
    park.add(spinosaurus);
    park.add(allosaurus);
    park.add(megalosaurus);
    park.add(diplodocus);
    const actual = park.favourite();
    assert.strictEqual(actual, trex);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.add(trex);
    park.add(stegosaurus);
    park.add(triceratops);
    park.add(velociraptor);
    park.add(spinosaurus);
    park.add(allosaurus);
    park.add(megalosaurus);
    park.add(diplodocus);
    const actual = park.find('megalosaurus')
    assert.deepStrictEqual(actual, [megalosaurus]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.add(trex);
    park.add(stegosaurus);
    park.add(triceratops);
    park.add(velociraptor);
    park.add(spinosaurus);
    park.add(allosaurus);
    park.add(megalosaurus);
    park.add(diplodocus);
    const actual = park.dailyVisitors();
    assert.strictEqual(actual, 360);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.add(trex);
    park.add(stegosaurus);
    park.add(triceratops);
    park.add(velociraptor);
    park.add(spinosaurus);
    park.add(allosaurus);
    park.add(megalosaurus);
    park.add(diplodocus);
    const actual = park.yearlyVisitors();
    assert.strictEqual(actual, 131400);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.add(trex);
    park.add(stegosaurus);
    park.add(triceratops);
    park.add(velociraptor);
    park.add(spinosaurus);
    park.add(allosaurus);
    park.add(megalosaurus);
    park.add(diplodocus);
    const actual = park.revenue();
    assert.strictEqual(actual, 1314000);
  });

});
