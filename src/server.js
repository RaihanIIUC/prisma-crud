import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/user', async (req, res) => {
  const data = req.body;
  try {
    const user = await prisma.users.create({
      data: {
        'first_name': data.first_name,
        'email': data.email,
        'address': data.address,
        'last_name': data.last_name
      }
    });
    console.log('ddddd', data, user);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('not stored');
  }
});
app.post('/product', async (req, res) => {
  const product = req.body;
  try {
    const new_product = await prisma.product.create({
      data: {
        name: product.name
      }
    });
    console.log(new_product);
    res.status(201).send(new_product);
  } catch (error) {
    console.log(error);
    res.status(500).send('not stored');
  }
});
app.post('/product/price', async (req, res) => {
  const price = req.body;
  try {
    const new_price = await prisma.price.create({
      data: {
        size: price.size,
        stock: price.stock,
        price: price.price,
        productId: price.productId
      }
    });
    console.log(new_price);
    res.status(201).send(new_price);
  } catch (error) {
    console.log(error);
    res.status(500).send('not stored');
  }
});


app.get('/product/:productId/stock', async (req, res) => {
  const id = Number(req.params.productId);
    try {
    const result = await prisma.price.findMany({
      where: {
        productId : id,
        stock :  500
      },
      // _max: {
      //   stock : {
          
      //   }
      // },
      // orderBy : [
      //   {
      //     stock : 'desc'
      //   }
      // ],
      // include: { prices : true}
      // select : {
      //   name : true,
      //   prices: {
      //     select : {
      //       price : true 
      //     }
      //   }
      // }
      // include : {
      //   product : true
      // }
    });
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('not stored');
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
