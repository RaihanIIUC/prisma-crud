const express = require('express');
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const users_routes = require("./Routes/UserRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Hi I am live!');
});

app.use('/api/users',users_routes);
 

const PORT = process.env.PORT || 5000;



const start = async () => { 
  try{
  app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
  });
  }catch(error){
            console.log(error);
  }
  };
  
  start();
  