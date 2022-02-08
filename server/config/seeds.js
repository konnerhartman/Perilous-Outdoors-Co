const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Tees' },
    { name: 'Long Sleeves' },
    { name: 'Hoodies' },
    { name: 'Hats' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'POCO. Classic Tee',
      description:
        'Lightweight, tri-blend material that deals great with moisture and only gets more comfortable with every wash!',
      image: 'poco-classic-tee.jpeg',
      category: categories[0]._id,
      price: 10.00,
      quantity: 500
    },
    {
      name: 'PO Flag Tee',
      description:
      'Lightweight, tri-blend material that deals great with moisture and only gets more comfortable with every wash!',
      image: 'poco-flag-tee.jpeg',
      category: categories[0]._id,
      price: 18.00,
      quantity: 500
    },
    {
      name: 'POCO. Logo Tee',
      category: categories[0]._id,
      description:
      'Lightweight, tri-blend material that deals great with moisture and only gets more comfortable with every wash!',
      image: 'poco-logo-tee.jpeg',
      price: 18.00,
      quantity: 20
    },
    {
      name: 'POCO. Tee',
      category: categories[0]._id,
      description:
      'Lightweight, tri-blend material that deals great with moisture and only gets more comfortable with every wash!',
      image: 'poco-block-tee.png',
      price: 18.00,
      quantity: 50
    },
    {
      name: 'POCO. Long Sleeve',
      category: categories[1]._id,
      description:
      'Lightweight, tri-blend material that deals great with moisture and only gets more comfortable with every wash!',
      image: 'poco-block-long.png',
      price: 20.00,
      quantity: 100
    },
    {
      name: 'POCO. Hoodie',
      category: categories[2]._id,
      description:
        '100% cotton to offer the most comfortable experience you’ll ever have in a hoodie!',
      image: 'poco-hoodie.png',
      price: 30.00,
      quantity: 30
    },
    {
      name: 'Perched POCO. Hat',
      category: categories[3]._id,
      description: 
        'Your new favorite hat! Light weight 100% cotton. One size fits most (strap back).',
      image: 'poco-hat.jpeg',
      price: 20.00,
      quantity: 30
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
