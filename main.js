var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send("Welocme");
}
);

app.get('/print', function (req, res) {
    for (i=1;i<11;i++){
        console.log(i);
    }
    res.send("<h1>Check your console</h1>");

}
);

app.listen(5000);