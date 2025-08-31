const {
  User,
  Transaction,
  POI,
  Event,
  Trip
} = require('./index')


const seedDB = new Promise((resolve, reject)=>{
  Promise.all([
    User.create({
      email: 'abrahamlincoln@us.gov',
      googleId: 'bestPrezEver'
    }),
    

  ])

  


})


const abe = User.findOne({email: 'abrahamlincoln@us.gov'})

console.log(abe)

