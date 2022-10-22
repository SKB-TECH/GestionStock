const joi = require("@hapi/joi");

const productRegisterValidation = joi.object({
  name: joi.string().required().min(5).max(50),
  ddescription: joi.string(),
  price: joi.number().required(),
  type: joi
    .string()
    .required()
    .valid("ALIMENTAIRE", "COSMETIQUE", "ELECTRONIQUE"),
});

module.exports = {
  productRegisterValidation,
};
