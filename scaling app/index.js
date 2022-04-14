const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/scaling');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Now, Port:8000 is working!");
})

app.use("/user", authRoutes);

const port = 8000;


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


