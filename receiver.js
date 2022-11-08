const amqplib = require('amqplib');

const exchange = 'logs';

async function createChannel(conn, name) {
  const channel = await conn.createChannel();

  await channel.assertExchange(exchange, 'fanout', { durable: false });

  const { queue } = await channel.assertQueue("", { exclusive: true });

  console.log(`[FILIAL ${name}] Esperando mensagem`);

  await channel.bindQueue(queue, exchange, '');

  channel.consume(queue, (msg) => {
    if (msg.content) {
      console.log(`[FILIAL ${name}] Recebeu a mensagem: ${msg.content}`);
    }
  }, { noAck: true })
}

(async () => {
  const conn = await amqplib.connect('amqps://wkotyzcl:IoK4joK4cFZAh8QVf_1JUTQa_T3aQbuF@stingray.rmq.cloudamqp.com/wkotyzcl');

  // for (let filial of ["1", "2", "3", "4", "5"]) {
  for (let filial of ["1"]) {

    await createChannel(conn, filial)
  }
})();