const app = require('./app')
const morganBody = require("morgan-body");

morganBody(app, {

})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app ready on http://localhost:${port}`);
})