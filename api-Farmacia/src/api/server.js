require('dotenv').config({ path: '.env' });

const app = require('./app')
const port = process.env.APP_PORT || 3001;


app.listen(port);
console.log(`Api rodando na porta ${port}`);
