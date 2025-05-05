const { EskizClient } = require("eskiz-sms-client");

const client = new EskizClient({
  email: "gnarzullayev2000@gmail.com",
  password: "JQCeenqIhjGQpWAuSCEyNSLHFxbgt9xSKyqHrWLD",
});

const sendMessage = async () => {
  try {
    await client.login();

    const response = await client.sms.send({
      to: "998908717181",
      message:
        "Xurmomarket.uz: Shaxsiy kabinetga kirish uchun tasdiqlash kodi - 12345",
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await sendMessage();
})();
