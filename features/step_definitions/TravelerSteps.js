const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { viajante,hunter,doctor } = require("./../../app");

/** GIVEN */

Given('um Traveler de nome {string}', function (string) {
    viajante.name = string;
});
Given('ele sempre começa a viagem com {int} refeições', function (int) {
    viajante.food = int;
    });


Given('ele sempre começa a viagem saudável.', function () {
    viajante.isHealthy = true;
});

/** WHEN */

When('o Traveler sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        viajante.hunt();
    }
});

When('o Traveler parar para comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        viajante.eat();
    }
});
When('Travaler ganhar {int} refeições', function (int) {
    hunter.giveFood(viajante,int)
    });
    When('Travaler receber cura', function () {
        doctor.heal(viajante)
      });

/** THEN */

Then('a quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(viajante.food, int);
});

Then('o Traveler não ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, true)
});

Then('o Traveler ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, false)
});
Then('Travaler ficará saudável', function () {
    assert.strictEqual(viajante.isHealthy,true)
  });