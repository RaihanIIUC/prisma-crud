



const getAllUser = userStoreRequest => async (req, res) => {
          const teste = req.body;
          console.error('hello', teste);

          try {
                    await userStoreRequest.validate(teste, { abortEarly: false });
                    return next();
          } catch (err) {
                    return res.status(500).json({ type: err.name, message: err.errors });
          }
}

const getAllUserTester = async (req, res) => {
          res.status(200).json({ msg: 'get all products testing' });
}



module.exports = { getAllUser, getAllUserTester }