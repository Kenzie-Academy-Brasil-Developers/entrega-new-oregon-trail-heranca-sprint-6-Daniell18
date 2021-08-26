const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doctor, viajante } = require("./../../app");

Given('um Doctor de nome {string}', function (string) {
   doctor.name=string
  });

  When('Doctor curar um Travaler', function () {
    doctor.heal(viajante)
  });
  Then('Travaler ficara  saudável', function () {
    assert.strictEqual(viajante.isHealthy,true)
  });