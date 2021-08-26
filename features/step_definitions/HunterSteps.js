const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { hunter, viajante } = require("./../../app");

Given('um Hunter de nome {string}', function (string) {
    hunter.name=string
  });
  Given('o Hunter sempre começa a viagem com {int} refeições', function (int) {
  hunter.food=int
    });
    Given('o Hunter sempre começa a viagem saudável.', function () {
      hunter.isHealthy=true
    });
  When('o Hunter sair para caçar {int} vezes', function (int) {
    for(let i=0;i<int;i++){
      hunter.hunt()
        }
    });
  

    When('o Hunter parar para comer {int} vezes', function (int) {
      for(let i=0;i<int;i++){
    hunter.eat()
      }
      });
      When('o Hunter der {int} refeições para {string}', function (int, string) {
        let x=viajante
        hunter.giveFood(x,int)
        });

      
      Then('o Hunter não ficará doente', function () {
      assert.strictEqual(hunter.isHealthy,true)
      });
      Then('a quantidade de refeições do Hunter deve ser igual a {int}', function (int) {
      assert.strictEqual(hunter.food,int)
        });
        Then('o Hunter ficará doente', function () {
          assert.strictEqual(hunter.isHealthy,false)
        });
  
