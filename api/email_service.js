module.exports = function (app) {
  app.post('/api/send_email/:order_id/:email', (req, res) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(
      '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'
    );

    const msg = {
      to: req.params.email,
      from: 'ters.ghoneim@hotmail.com',
      subject: 'Product ordered successfully',
      text: 'you ordered our product successfully.',
      html:
        '<br/>Order id is ' +
        req.params.order_id +
        '<br/><strong>Regards</strong>',
    };

    console.log(msg);

    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        res.send(response[0].statusCode);
        console.log(response[0].headers);
      })
      .catch((error) => {
        res.send({ error: error });
        console.error(error);
      });
  });
};
