   const mongoose = require('mongoose');

   const dbURI = 'mongodb://localhost:27017/student'; // Replace with your MongoDB URI


   mongoose.connect(dbURI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       // Other options as needed, e.g., user, pass for authentication
   })
   .then(() => {console.log('Connected to MongoDB');
    main()
})
   .catch((error) => {
       console.error('Error connecting to MongoDB:', error.message);
       process.exit(1); // Exit the application if connection fails
   });

async function main() {
    
    console.log("called")

   const userinfo = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
   })

   const user = mongoose.model("user",userinfo);

   const user1 = new user ({
    name:"om",
    email:"ghewadeom@gmail.com"


   });
   user1.save()
   .then((res)=>
   {
     console.log(res)
   })
   .catch((err)=>{
    console.log(err)
   });

}