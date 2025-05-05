import { EskizClient } from "eskiz-sms-client";

const client = new EskizClient({
  email: "gnarzullayev2000@gmail.com",
  password: "JQCeenqIhjGQpWAuSCEyNSLHFxbgt9xSKyqHrWLD",
});

(async () => {
  const response = await client.sms.send({
    message:
      "Xurmomarket.uz: Shaxsiy kabinetga kirish uchun tasdiqlash kodi - 12345",
    to: "998908717181",
  });

  console.log(response);
})();
