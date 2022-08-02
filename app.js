const express = require("express");
const Odoo = require("odoo-xmlrpc");
const app = express();
const odoo = new Odoo({
  url: "http://localhost",
  port: 9000,
  db: "odoo-erp-14-1",
  username: "satriaputrapratama2002@gmail.com",
  password: "admin",
});

app.get("/api/absence-request", (req, res) => {
  odoo.connect(function (err) {
    if (err) return console.log(err);
    var inParams = [];
    // inParams.push([['is_company', '=', true],['customer', '=', true]]);
    var params = [];
    params.push(inParams);
    odoo.execute_kw(
      "absence.request",
      "search_read",
      params,
      function (err, value) {
        if (err) {
          return console.log(err);
        }
        res.status(200).json({
          data: value,
        });
      }
    );
  });
});

app.listen(3000);
