import mongoose from 'mongoose';



export async function connectDb() {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${process.env.APP_NAME}`)
      .then((connectionInstance) => {
        console.log(`MongoDB connection successful Instance Name ${connectionInstance.connection.host }`);
      })
      .catch(error => {
        console.error('MongoDB connection error:', error);
      });
  } catch (error) {
    console.log(error);
  }
}
