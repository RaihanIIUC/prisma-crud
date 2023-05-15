
const yup = require("yup");


const userStoreRequest = yup.object({
    url: yup.string().url().required(),
    title: yup.string().min(8).max(32).required(),
    content: yup.string().min(8).max(255).required(),
    contact: yup.string().email().required()
});

module.exports = { userStoreRequest }