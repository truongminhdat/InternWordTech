const amqplib = require("amqplib");
// const amqp_url = `amqps://eiqzesvf:Ktlv4Ht4v6xmfuYwe20PMgvSNML9KV__@cougar.rmq.cloudamqp.com/eiqzesvf`;
const amqp_url = `amqp://localhost:5672`;
const amqp_url_docker = "";
const receiveQueue = async () => {
  try {
    const conn = await amqplib.connect(amqp_url);
    const channel = await conn.createChannel();
    const nameQueue = "q1";

    // create to send
    await channel.assertQueue(nameQueue, {
      durable: false,
    });
    //send to queue
    await channel.consume(
      nameQueue,
      (msg) => {
        console.log(`Msg:::`, msg.content.toString());
      },
      {
        // noAck: false,
        //khi client nhận đc trả lời bằng false và nó trả lời chưa nhận
        noAck: true,
      }
    );
  } catch (error) {
    console.log(`Error::`, error.message);
  }
};
receiveQueue();
