
import { name } from 'ejs';
import express from 'express'

const app = express()

const PORT = 3000


app.get('/user/:id', (req,res)=>{
    const userid = req.params.id;
    res.send(`User ID is ${userid}`);
});

// /search?keyword=node
app.get('/search',(req,res)=> {
  const keyword = req.query.keyword;
  res.send(`Searching for ${keyword}`);
});



app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
});
