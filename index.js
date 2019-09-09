/**
 * A simple proxy for the Nomisma OpenRefine Reconciliation API. Running by default under port 3334.
 */

const express = require("express")
const request = require("request")
const app = express()

const url = "http://nomisma.org/apis/reconcile"

app.use("/", (req, res) => {
  req.pipe(request(url)).pipe(res)
})

app.listen(process.env.PORT || 3334)
