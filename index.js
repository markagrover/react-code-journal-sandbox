const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/api/test', (req, res) => {
   res.json({
       data: "Test Passed!"
   });
});

app.listen(PORT, (err) => {
    if(err){
        console.error("Error connection to the server :",err);
    } else {
        console.log("Listening on port "+ PORT);
    }
});
