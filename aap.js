const express      = require('express');
const app          = express();


const PORT = 5000



app.get('/', (req, res) =>  res.send('hello word from emirates'));

app.listen(PORT, () => {
    console.log('MY APP IS RUNNING ON PORT ${PORT)!')
})