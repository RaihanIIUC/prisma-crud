
const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();


class PackController {

          storePack = packStoreRequest => async (req, res) => {
                    const data = req.body;
                    try {
                              await packStoreRequest.validate(data, { abortEarly: false });
                              const pack = await prisma.pack.create({ data });
                              return res.status(201).json(pack);
                    } catch (err) {
                              return res.status(500).json({ type: err.name, message: err.errors });
                    }

          }
          getAllPack = async (req, res) => {
                    const packs = await prisma.pack.findMany({
                              orderBy: {
                                        id: "desc"
                              }, include: {
                                        products: true,
                              }
                    });
                    return res.status(202).json(packs);
          }

}


module.exports = new PackController();