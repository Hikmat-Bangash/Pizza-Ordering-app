import dbConnection from "../../../lib/mongodb.js";
import ProductModel from "../../../models/Products.js";

export default async function handler(req, res) {
  await dbConnection();

  const { method } = req;

  // checking method requests
  switch (method) {
    case "GET":
      try {
        const products = await ProductModel.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ err: error });
      }
      break;

    case "POST":
      try {
        const product = await ProductModel.create(req.body);
        res.status(201).json(product);
      } catch (error) {
        res.status(501).json({ err: error });
      }
  }
}
