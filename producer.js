const amqplib = require('amqplib');

(async () => {
  const conn = await amqplib.connect('amqps://wkotyzcl:IoK4joK4cFZAh8QVf_1JUTQa_T3aQbuF@stingray.rmq.cloudamqp.com/wkotyzcl');

  const channel = await conn.createChannel();

  const exchange = 'logs';
  const msg = [{ id: 1, name: "tanquinho" }, { id: 2, name: "lava e seca" }];

  await channel.assertExchange(exchange, 'fanout', { durable: false });

  channel.publish(exchange, '', Buffer.from(JSON.stringify(msg)));

  console.log("[x] Enviado %s", msg);

  setTimeout(() => {
    conn.close();
    process.exit(0);
  }, 500);
})();