## Mocks
São arquivos utilizados quando precisamos "fingir/forjar" uma base de dados.
<br></br>
`English: Mocks are files used when we need to "fake/forge" a database.`
<br></br>

## Controllers
Responsavel por armazenar toda a regra de negócio da `API`.
<br></br>

`English: Controllers are responsible for storing the entire API business rules.`
<br></br>

## Routes
Podem ser divididas em objects para serem iteradas e assim validar se aquela rota existe 
<br></br>

`English: Routes can be divided into objects to be iterated over to validate that, that route exists.`

___ex.___:

`routes.js`
![routes.js](imgReadme/code.png)

`index.js`
![index.js](imgReadme/code2.png)


## Body, Params, Queries e o Metodo Send
Não são parte intrinseca da request/response e precisam ser tratadas e assim injetadas na request ou na response.
<br></br>

`English: Body, params, queries and the method 'Send' are not intrinsically part of the request/response and need to be handled and thus injected into the request or the response.`

![Body, params, query and send](imgReadme/code3.png)
