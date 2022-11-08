# Lavanderia

## Requisistos

* [NodeJs](https://nodejs.org/en/)

## Bibliotecas

* [amqplib](https://www.npmjs.com/package/amqplib) - Utilizada para conectar e enviar/receber mensagens utilizando RabbitMQ

## Instalação

1. Faça um clone desse repositório;
2. Entre na pasta `cd lavanderia`;
3. Execute `npm install` dentro da pasta para instalar as dependências ;



## Execução

Execute no terminal o seguinte comando para criar as filiais:

```bash
$ node receiver.js
```

Após todas as filiais criadas aparecerá a seguinte mensagem:
```bash
Todas as filiais foram criadas!
```

Abra outro terminal e execute o seguinte comando para enviar a mensagem para as filiais:

```bash
$ node producer.js
```

Após enviar a mensagem aparecerá a mensagem que foi enviada

```
[x] Enviado [{"id":1,"name":"tanquinho"},{"id":2,"name":"lava e seca"}]
```

No terminal que as filiais foram criadas aparacerá o que cada filial recebeu

```
[FILIAL 5] Recebeu a mensagem: [{"id":1,"name":"tanquinho"},{"id":2,"name":"lava e seca"}]
[FILIAL 2] Recebeu a mensagem: [{"id":1,"name":"tanquinho"},{"id":2,"name":"lava e seca"}]
[FILIAL 4] Recebeu a mensagem: [{"id":1,"name":"tanquinho"},{"id":2,"name":"lava e seca"}]
[FILIAL 1] Recebeu a mensagem: [{"id":1,"name":"tanquinho"},{"id":2,"name":"lava e seca"}]
[FILIAL 3] Recebeu a mensagem: [{"id":1,"name":"tanquinho"},{"id":2,"name":"lava e seca"}]
```

