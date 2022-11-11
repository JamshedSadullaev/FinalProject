const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany(
    { name: 'BAGS ARE COMING SOON' },
  );


  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Apa',
      description:
        'Two Sisters and two beauties. Great gift if you have a sister or a best friend.',
      image: '/apa.png',
      category: categories[0],
      price: 45.99,
      quantity: 3
    },
    {
      name : "Duhtar",
      description: "Perfect for a mother who has a little daughter.",
      image: "/duhtar.jpg",
      category: categories[0],
      price: 44.99,
      quantity: 2
  },

{
    name : "Gulya",
    description: "Vibrant colors and a very unique gift from Central Asia.",
    image: "/gulya.png",
    category: categories[0],
    price: 45.99
},
{
    name : "Izo",
    description: "Mysterious girl with charming smile.",
    image: "/izo.jpg",
    category: categories[0],
    price: 65.99,
    quantity: 3
},
{
    name : "Kashang",
    description: "Sucha a beuty and tenderness all in one work of art.",
    image: "/kashang.jpg",
    category: categories[0],
    price: 45.99,
    quantity: 4
},
{
    name : "Lali",
    description: "Beutiful girl from the Pamir mountans.",
    image: "/lali.png",
    category: categories[0],
    price: 45.99,
    quantity: 7
},
{
    name : "Lola",
    description: "Gorgious and yet so simple. Perfeclt frozen in a moment. lola would be excellent choice. ",
    image: "/lolla.png",
    category: categories[0],
    price: 75.99,
    quantity: 3
},
{
    name : "Manija",
    description: "Middle Eastern princess. Excusite choice would be perfect just for  anybody.",
    image: "/manija.png",
    category: categories[0],
    price: 75.99,
    quantity: 5
},
{
    name : "Masha",
    description: "It is a Slovonic beauty that portrays a girl in traditional crown like headband",
    image: "/masha.png",
    category: categories[0],
    price: 45.99,
    quantity: 3
},
{
    name : "Paree",
    description: "Magical Fairy in enchanted wonderland.",
    image: "/paree.jpg",
    category: categories[0],
    price: 45.99,
    quantity: 4
},
{
    name : "Piyola",
    description: "Have a bedass attutute and cool  friend then this jacket is excellent choice for you",
    image: "/piyola.jpg",
    category: categories[0],
    price: 75.99,
    quantity: 3
},
{
    name : "Pomir",
    description: "Such a tendersness in stokes of the brush. Simply stunning.",
    image: "/pomir.png",
    category: categories[0],
    price: 45.99,
    quantity: 7
},
{
    name : "Rajah",
    description: "Such an amazing product for bug cat lovers.",
    image: "/rajah.jpg",
    category: categories[0],
    price: 65.99,
    quantity: 1
},
{
    name : "Safed",
    description: "Another perfect gitf for lovely mothers",
    image: "/safed.jpg",
    category: categories[0],
    price: 55.99,
    quantity: 3

},
{
    name: "Safed Psree",
    description: "Beutifl blond braides would be amazing choice for you or your friend.",
    image: "/safedparee.jpg",
    category: categories[0],
    price: 55.99,
    quantity: 4
}
    

  ]);


  await User.deleteMany();

  // await User.create({
  //   firstName: 'admin',
  //   lastName: 'admin',
  //   email: 'attidack@gmail.com',
  //   password: 'password12345',
  //   orders: [
  //     {
  //       products: [products[0]._id, products[0]._id, products[1]._id]
  //     }
  //   ],
  //   admin: true
  // });

  // await User.create({
  //   firstName: 'Elijah',
  //   lastName: 'Holt',
  //   email: 'eholt@testmail.com',
  //   password: 'password12345'
  // });

  console.log('All users seeded');

  process.exit();
});
