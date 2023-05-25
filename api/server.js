import stripe from "stripe";
import express from "express";
import { networkInterfaces } from "os";

const app = express();

app.use(express.json());

const getCurrentIPAddress = () => {
  const nets = networkInterfaces();
  let result;

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        result = net.address;
      }
    }
  }
  return result;
};

const ipAddress = getCurrentIPAddress();

const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51N9nsNJS4a5jZOk37qveW8SoO1LWE2E9kSBHWvZaLJqz5WE1jbmqBMWcODyTvPCwle9qtKiLYBjnAnKroUwrkVBR00C2etyTLV";
const STRIPE_SECRET_KEY =
  "sk_test_51N9nsNJS4a5jZOk308ryU5tutRTkLpelUtFOIbT94oe0d1dW4DAaVf9yDnOJCV45MDOYnVMtWzfgyzLoq2WDAzDD00LkBEmCKQ";

let sp;
const endpointSecret =
  "whsec_567818053ef881c9d6c8c93bb6de23d75a413162abb11ed6f8da0f7a865e7626";
app.post("/", async (req, res) => {
  console.log(req.body);
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ error: "missing amount" });
  }
  if (!sp) {
    sp = stripe(STRIPE_SECRET_KEY);
  }
  // Use an existing Customer ID if this is a returning customer.
  const customer = await sp.customers.create();
  const ephemeralKey = await sp.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2020-08-27" }
  );
  const paymentIntent = await sp.paymentIntents.create({
    amount: +amount * 100,
    currency: "LKR",
    customer: customer.id,
  });
  res.json({
    paymentIntentId: paymentIntent.id,
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: STRIPE_PUBLISHABLE_KEY,
  });
});

app.listen(5000, ipAddress, () =>
  console.log(`Server running on ${ipAddress}:5000`)
);
