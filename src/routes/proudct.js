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
          console.log(req.params,'hello', req.query.hello);
           try {
            const result = await prisma.product.findMany({
              where: {
                id : id
              }
            });
            console.log(result);
            res.status(201).send(result);
          } catch (error) {
            console.log(error);
            res.status(500).send('not stored');
          }
        });
        