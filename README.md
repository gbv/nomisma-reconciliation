# Nomisma OpenRefine Reconciliation API Proxy

A simple proxy for the Nomisma OpenRefine Reconciliation API. ~~Why? Because [the official API](http://nomisma.org/apis/reconcile) does not support HTTPS.~~ Update: **This project is deprecated.** The official API now supports both HTTPS and access via CORS.

## Installation

```bash
git clone https://github.com/gbv/nomisma-reconciliation.git
cd nomisma-reconciliation
npm i
```

## Usage

```bash
# default port: 3334
npm run start
# with custom port
PORT=12345 npm run start
```

## License
MIT ©2019 Verbundzentrale des GBV (VZG)
