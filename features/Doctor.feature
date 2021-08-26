# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo racionar meus mantimentos
    E devo curar os doentes
    Para que eu possa seguir a viagem saudável.

    Contexto:
        Dado um Doctor de nome "João"
        E ele sempre começa a viagem com 1 refeições
        E ele sempre começa a viagem saudável.

        Cenario: Doctor curou traveler
                Quando Doctor curar um Travaler
                Então Travaler ficara  saudável