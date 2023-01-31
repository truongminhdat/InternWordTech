const amqplib = require("amqplib");

const amqp_url = `amqp://localhost:5672`;
const receiveNoti = async () => {
  try {
    const conn = await amqplib.connect(amqp_url);
    const channel = await conn.createChannel();

    const nameExchange = "video";
    await channel.assertExchange(nameExchange, "fanout", {
      durable: false,
    });
    const { queue } = await channel.assertQueue("");
    console.log(`nameQueue: ${queue}`);
    await channel.bindQueue(queue, nameExchange); // bindQueue là mối quan hệ giữa exchange và queue
    await channel.consume(
      queue,
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
    console.error(error.message);
  }
};

receiveNoti();
