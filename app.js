const bodyParser = require('body-parser')
const routes = require('./routes/index')
const express = require('express');
const { engine } = require('express-handlebars');
const app = express()


// View Engine
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use(routes)

// Static files
app.use(express.static('views/images'))
app.use(express.static('views/'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Servidor rodando em modo ${process.env.NODE_ENV} na porta ${PORT}`))