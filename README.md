API ViaCep
Necessário Thunder Client ou EchoAPI

O servidor é iniciado no server.js, com o comando (node server.js)
No teste.http é possivel consultar o CEP alterando o CEP já instaurado no GET.

Exemplo de um GET com 8 digitos corretamente:

GET http://viacep.com.br/ws/01001000/json/

Exemplo de um GET com digitos errados:

GET  http://viacep.com.br/ws/130583542/json/

