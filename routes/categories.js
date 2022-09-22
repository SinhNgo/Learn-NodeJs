const _ = require("lodash");
const express = require("express");
const category = express.Router();

const products = [
  {
    id: 1,
    name: "CPU",
    description: "Cac loai CPU cho may tinh",
  },
  {
    id: 2,
    name: "HDD",
    description: "Cac loai dia cung cho may tinh",
  },
  {
    id: 3,
    name: "RAM",
    description: "Các loại ram cho máy tính",
  },
];

category.get("/", function (req, res) {
  res.json(products);
});

// API: Get a category
category.get("/:id", (req, res) => {
  const getId = req.params.id;
  const product = products.filter((product) => {
    return product.id === +getId;
  });

  res.json(product);
});

// API: Create a category
category.post("/", function (req, res, next) {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      res.sendStatus(400);
      return;
    }

    const max = _.maxBy(products, "id");
    products.push({ id: max.id + 1, name, description });
    // res.sendStatus(201);
    res.json(products);
    return;
  } catch (error) {
    res.status(500).json(error);
    return;
  }
});

// API: Update a category
category.patch("/:id", function (req, res, next) {
  try {
    // Bắt lỗi
    const { id } = req.params;
    if (!id) {
      res.sendStatus(400);
      return;
    }
    const { name, description } = req.body;
    if (!name || !description) {
      res.sendStatus(400);
      return;
    }
    // Xử lí
    let product = products.find((product) => {
      return product.id.toString() === id;
    });

    if (product) {
      product.name = name;
      product.description = description;
      res.status(200).json(product);
      return;
    } else {
      res.sendStatus(410);
      return;
    }
  } catch (error) {
    res.status(500).json(error);
    return;
  }
});

// 🔶 API: Delete a category
category.delete("/:id", function (req, res) {
  try {
    // Bắt lỗi
    const { id } = req.params;
    if (!id) {
      res.sendStatus(400);
      return;
    }

    // Xử lí
    let product = products.find((product) => {
      return product.id.toString() === id;
    });

    if (product) {
      _.remove(products, (product) => {
        return product.id.toString() === id;
      });

      res.json(products);
      return;
    } else {
      res.sendStatus(410);
      return;
    }
  } catch (error) {
    res.status(500).json(error);
    return;
  }
});

module.exports = category;
