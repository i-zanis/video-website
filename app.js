const express = require('express');
const colorLog = require("@/utils");
const app = express();
const PORT = 4000;
app.listen(PORT, () =>{colorLog(`API running on P${PORT}...`),'green'});
