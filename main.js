
import ip from 'ip'
import express from 'express'

const app = new express()
app.use(express.json())


const PORT = 3000;

app.get('/',(req, res) => {
  res.send('Hello World')
})

app.post('/test', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})

app.post('/hentai', (req,res) => {
    const result = {};
    result.code = 200;
    result.url = "https://i.imgur.com/GLYEUNw.jpg";
    console.log(result)
    res.send(JSON.stringify(result))
})

app.listen(PORT, () => {
    console.log(`Surver running at ${ip.address()}:${PORT}`);
})
