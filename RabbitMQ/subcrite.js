const app = require("amqplib/callback_api");
// const amqp_url = `amqps://eiqzesvf:Ktlv4Ht4v6xmfuYwe20PMgvSNML9KV__@cougar.rmq.cloudamqp.com/eiqzesvf`;
const amqp_url = `amqp://localhost:5672`;
app.connect(amqp_url, (err, connection) => {
  if (err) {
    throw err;
  }
  connection.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    let queueName = "q1";
    let message = "This is message truong minh dat";
    channel.assertQueue(queueName, {
      durable: false,
    });
    channel.consume(queueName, (msg) => {
      console.log(`Recieved: ${msg.content.toString()}`);
    });
    // channel.ack(message);
    // channel.close();
  });
});
