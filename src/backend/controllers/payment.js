import axios from "axios";

const paymentTicket = async () => {
  const data = {
    reference_id: "ex-00001",
    description: "Motivo do pagamento",
    amount: {
      value: 1000,
      currency: "BRL",
    },
    payment_method: {
      type: "CREDIT_CARD",
      installments: 1,
      capture: false,
      soft_descriptor: "MyStore",
      card: {
        number: "4111111111111111",
        exp_month: "03",
        exp_year: "2026",
        security_code: "123",
        holder: {
          name: "Jose da Silva",
        },
      },
    },
    metadata: {
      Exemplo: "Aceita qualquer informação",
      NotaFiscal: "123",
      idComprador: "123456",
    },
  };
  const config = {
    headers: {
      Authorization: "15BEC8F12D0343B58AEDE8791A43D6AD",
      "Content-type": "application/json",
      "x-api-version": "4.0",
    },
  };
  const url = "https://sandbox.api.pagseguro.com/charges";

  await axios
    .post(
      url,
      JSON.stringify({
        reference_id: "ex-00001",
        description: "Motivo do pagamento",
        amount: {
          value: 1000,
          currency: "BRL",
        },
        payment_method: {
          type: "CREDIT_CARD",
          installments: 1,
          capture: false,
          soft_descriptor: "MyStore",
          card: {
            number: "4111111111111111",
            exp_month: "03",
            exp_year: "2026",
            security_code: "123",
            holder: {
              name: "Jose da Silva",
            },
          },
        },
        metadata: {
          Exemplo: "Aceita qualquer informação",
          NotaFiscal: "123",
          idComprador: "123456",
        },
      }),
      config
    )
    .then((res) => {
      console.log("RESPONSE ==== : ", res);
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
    });
};
export { paymentTicket };
