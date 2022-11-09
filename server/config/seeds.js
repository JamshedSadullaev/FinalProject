const db = require('./connection');
const { Product, User } = require('../models');


db.once('open', async () => {
   s
      await Product.deleteMany({});
      
      const products = await Product.insertMany([
        {
          "name" : "Apa",
          "description": "Two Sisters and two beauties. Great gift if you have a sister or a best friend.",
          "image": "images/apa.png",
          "price": 45.99,
          "quantity": 3
      },
  
      {
          "name" : "Duhtar",
          "description": "Perfect for a mother who has a little daughter.",
          "image": "images/duhtar.jpg",
          "price": 44.99,
          "quantity": 2
      },
      {
          "name" : "Ginger",
          "description": "Absolutly stunning jacket that depicts girl with ginger hair.",
          "image": "images/ginger.png",
          "price": 65.99,
          "quantity": 5
      },
      {
          "name" : "Gulya",
          "description": "Vibrant colors and a very unique gift from Central Asia.",
          "image": "images/gulya.png",
          "price": 45.99
      },
      {
          "name" : "Izo",
          "description": "Mysterious girl with charming smile.",
          "image": "images/izo.png",
          "price": 65.99,
          "quantity": 3
      },
      {
          "name" : "Kashang",
          "description": "Sucha a beuty and tenderness all in one work of art.",
          "image": "images/kashang.png",
          "price": 45.99,
          "quantity": 4
      },
      {
          "name" : "Lali",
          "description": "Beutiful girl from the Pamir mountans.",
          "image": "images/lali.png",
          "price": 45.99,
          "quantity": 7
      },
      {
          "name" : "Lola",
          "description": "Gorgious and yet so simple. Perfeclt frozen in a moment. lola would be excellent choice. ",
          "image": "images/Lola.png",
          "price": 75.99,
          "quantity": 3
      },
      {
          "name" : "Manija",
          "description": "Middle Eastern princess. Excusite choice would be perfect just for  anybody.",
          "image": "images/manija.png",
          "price": 75.99,
          "quantity": 5
      },
      {
          "name" : "Masha",
          "description": "It is a Slovonic beauty that portrays a girl in traditional crown like headband",
          "image": "images/masha.png",
          "price": 45.99,
          "quantity": 3
      },
      {
          "name" : "Paree",
          "description": "Magical Fairy in enchanted wonderland.",
          "image": "images/paree.png",
          "price": 45.99,
          "quantity": 4
      },
      {
          "name" : "Piyola",
          "description": "Have a bedass attutute and cool  friend then this jacket is excellent choice for you",
          "image": "images/piyola.png",
          "price": 75.99,
          "quantity": 3
      },
      {
          "name" : "Pomir",
          "description": "Such a tendersness in stokes of the brush. Simply stunning.",
          "image": "images/pomir.png",
          "price": 45.99,
          "quantity": 7
      },
      {
          "name" : "Rajah",
          "description": "Such an amazing product for bug cat lovers.",
          "image": "images/rajah.png",
          "price": 65.99,
          "quantity": 1
      },
      {
          "name" : "Safed",
          "description": "Another perfect gitf for lovely mothers",
          "image": "images/safed.png",
          "price": 55.99,
          "quantity": 3
  
      },
      {
          "name" : "Safed Psree",
          "description": "Beutifl blond braides would be amazing choice for you or your friend.",
          "image": "images/safedparee.png",
          "price": 55.99,
          "quantity": 4
      }
  
  
    ]);
    console.log('products seeded');

    await User.deleteMany();

    await User.create({
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@admin.com',
      password: 'password12345',
      orders: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id]
        }
      ],
      admin: true
    });
  
    await User.create({
      firstName: 'James',
      lastName: 'Sadu',
      email: 'ejamest@testmail.com',
      password: 'password12345'
    });
  
    console.log('users seeded');
  
    process.exit();

  });
