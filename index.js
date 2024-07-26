const { createInvoice } = require("./generateInvoice");

const invoice = {
  shipping: {
    name: "Ekip",
    address: "Ekip",
    city: "Ekip",
    state: "Ekip",
    country: "",
  },
  items: [
    {
      item: "1",
      description: "Application mobile",
      amount: 250000,
      quantity: 1,
    },
  ],
  subtotal: 250000,
  paid: 75000,
  invoice_nr: 202401,
};

createInvoice(invoice, "facture.pdf");
