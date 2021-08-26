        # language: pt

Funcionalidade:Hunter
        Como um Hunter
        Eu devo racionar meus mantimentos
        E devo dividir refeições com Travaler
        Para que eu possa seguir a viagem saudável.


       
    Contexto:
        Dado um Hunter de nome "João"
        E o Hunter sempre começa a viagem com 5 refeições
        E o Hunter sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 10

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 3
        E o Hunter não ficará doente

        Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 3 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 0
        E o Hunter ficará doente

        Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 11
        E o Hunter não ficará doente

        Cenário: Saiu para caçar, comeu e ficou doente
        Quando o Hunter sair para caçar 1 vezes
        E o Hunter parar para comer 5 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 0
        E o Hunter ficará doente

         Cenário: Doo comido para Traveler
        Quando o Hunter der 1 refeições para "Trav"
        Então a quantidade de refeições do Hunter deve ser igual a 4
       

       