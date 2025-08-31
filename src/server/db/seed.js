const {
  User,
  Transaction,
  POI,
  Event,
  Trip
} = require('./index')


async function seedDB(){
  await User.create({
    email: 'abrahamlincoln@us.gov',
    googleId: '1234'
  })
  const abe = await User.findOne({
    email: 'abrahamlincoln@us.gov'
  })
  console.log('Abe found :)', abe)
}

seedDB()
  .then(()=>{
    console.log('Database seeded successfully')
    process.exit(0)
  })
  .catch((err)=>{
    console.log('Error seeding Database', err)
    process.exit(1)
  })