const amqplib = require("amqplib");

const amqp_url = `amqp://localhost:5672`;
const postVideo = async ({ msg }) => {
  try {
    const conn = await amqplib.connect(amqp_url);
    const channel = await conn.createChannel();

    const nameExchange = "video";
    await channel.assertExchange(nameExchange, "fanout", {
      durable: false,
    });
    await channel.publish(nameExchange, "", Buffer.from(msg));
    console.log(`Send Ok::::${msg}`);
    setTimeout(function () {
      conn.close();
      process.exit(0);
    });
  } catch (error) {
    console.error(error.message);
  }
};
const msg = process.argv.slice(2).join("") || "Hello exchange";
postVideo({ msg });
