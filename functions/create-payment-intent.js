// domain/.netlify/functions/create-payment-intent
require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51LQQUISJGRB5eXTmyOuMxZ2aeQGjRE3DPcOvYNGyCDwThsFA676ASNMIQVxatQLHPPatMNwmcyZx8J07mu4NKaV7005dirrvI1"
);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "inr",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
