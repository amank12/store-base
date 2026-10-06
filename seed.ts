
const prds = require('prisma/products.json');


async function main() {
  for (const product of prds) {
    console.log(product);
  }
}
main()
  .then(async () => {
    console.log('Products seeded successfully');
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });