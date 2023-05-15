
const yup = require("yup");


const productStoreRequest = yup.object({
    code: yup.string().required(),
    proccessing_name: yup.string().required(),
    pack_size_id:  yup.number().required(),
     inhouse_selling_price: yup.number().min(10).max(10000).required(),
    online_selling_price: yup.number().min(8).max(10000).required(),
    variant : yup.string().required()
});

module.exports = { productStoreRequest }