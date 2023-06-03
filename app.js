require('dotenv').config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const dbURI = process.env.DB_URL;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));
app.get('/', (req, res) => {
    res.redirect('/graphql');
})
mongoose.connect(dbURI)
    .then((result) => {
        console.log("success");
        app.listen(4000, () => {
            console.log('now listening on port 4000');
        })
    })
    .catch((err) => console.log(err));
