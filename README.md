# ReprogramaAPI

API para as aulas de BackEnd da Reprograma

## Introdução ao Mongo

O mongo é um banco de dados NoSQL. Através dele conseguimos trabalhar com a estrutura em formato de documentos.

### Estrutura do Mongo

Um banco de dados do mongo é constituído pela estrutura de Banco de Dados, Collections e Documentos.

### MVC

A arquitetura padrão MVC é composta por Model, View e Controller, que representam:
```
    Model: parte da aplicação que que terá os contratos de para conexão com os bancos de dados ou com outras estruturas relacionadas.
    View: basicamente são as estruturas que o cliente verá, tudo aquilo que estará disponível para interação com o cliente.
    Controller: a lógica da aplicação, essa por sua vez faz a junção, entre o model e a view, pegando dados através dos models e direcionando-os a view, para interação com os usuários.
```
No nosso servidor, não teremos a estrutura View, porém teremos as nossas rotas que conterão as estruturas da nossa url para a chamada dos métodos HTTP.
