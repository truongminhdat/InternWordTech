const amqplib = require("amqplib");
// const amqp_url = `amqps://eiqzesvf:Ktlv4Ht4v6xmfuYwe20PMgvSNML9KV__@cougar.rmq.cloudamqp.com/eiqzesvf`;
const amqp_url = `amqp://localhost:5672`;
const amqp_url_docker = "";
const sendQueue = async ({ msg }) => {
  try {
    const conn = await amqplib.connect(amqp_url);
    const channel = await conn.createChannel();
    const nameQueue = "q2";

    // create to send
    await channel.assertQueue(nameQueue, {
      durable: false, // true nghĩa là khi restart lại queue sẽ không bị mất message
    });
    //send to queue
    await channel.sendToQueue(nameQueue, Buffer.from(msg), {
      // expiration: "10000", // xác định thời gian của 1 message
      persistent: true, // đưa tin nhắn chạy liên tục được đưa vào ổ đĩa hoặc catch
    });
  } catch (error) {
    console.log(`Error::`, error.message);
  }
};

const msg = process.argv.slice(2).join("") || "Hello";

// process.argv = [
//   // bin node
//   // path ,
//   //'hello 1'
// ]
sendQueue({ msg });
