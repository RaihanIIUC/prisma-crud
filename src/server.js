import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/user',async (req,res )=> {
          const data = req.body;

          try {
                    
          const user = await prisma.users.create({
                   data : {
                    'first_name': data.first_name,
                    'email': data.email,
                    'address': data.address,
                    'last_name' : data.last_name 
                   }
          });
          console.log('ddddd', data , user );

          res.status(201).send(user);
          } catch (error) {
            console.log(error);
            res.status(500).send('not stored'); 
          }
});


app.post('/regi',async (req,res )=> {
  const data = req.body;
  try {
  const user = await prisma.user.create({
           data : {
             'email': data.email,
            'username': data.username,
           }
  });

  const firstTweet = await prisma.tweet.create({
    data : {
      text: data.text,
      userId : user.id
    }
  });
  const tweetResult = await prisma.tweet.findMany({
    where : {
      id : firstTweet.id
    },
    include : { user : true }
  })

  const result = await prisma.User.findMany({
    where : {
      id : user.id
    },
    include : { tweets : true }
  })
 
  res.status(201).send([ tweetResult ,  result ]);
  } catch (error) {
    console.log(error);
    res.status(500).send('not stored'); 
  }
});




const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

