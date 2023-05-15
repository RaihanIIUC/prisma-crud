
const yup = require("yup");


const packStoreRequest = yup.object({
          weight: yup.number().required(),
          name: yup.string().required()
});

module.exports = { packStoreRequest }