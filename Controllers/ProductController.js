
const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();


class ProductController {

          storeProduct = productStoreRequest => async (req, res) => {
                    const data = req.body;
                    try {
                              await productStoreRequest.validate(data, { abortEarly: false });
                              const product = await prisma.product.create({ data });
                              return res.status(201).json(product);
                    } catch (err) {
                              return res.status(500).json({ type: err.name, message: err.errors });
                    }

          }
          getAllProduct = async (req, res) => {
                    const products = await prisma.product.findMany({
                              orderBy: {
                                        id: "desc"
                              },
                              include: {
                                        pack: true,
                              }
                    });
                    return res.status(202).json(products);
          }

}


module.exports = new ProductController();