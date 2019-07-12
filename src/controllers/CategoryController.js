const Category = require('../models/Category');

module.exports = {
  async store(req, res) {

    try {

      const { name } = req.body;

      const category = await Category.create({ name });

      return res.status(201).json(category);

    } catch (error) {

      if (error.code === 11000) {

        const message = 'duplicate key error';

        return res.status(400).json({ message });

      }

      return res.status(400).json(error);

    }

  },

  async show(req, res) {

    const category = await Category.findById(req.params.id);

    res.status(200).json(category);
},
};