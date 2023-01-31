const app = require("amqplib/callback_api");
app.connect(`amqp://localhost`, (err, connection) => {
  if (err) {
    throw err;
  }
  connection.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    let queueName = "technical";
    let message = "This is message truong minh dat";
    channel.assertQueue(queueName, {
      durable: false,
    });
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Message: ${message}`);
    setTimeout(() => {
      connection.close();
    }, 1000);
  });
});
