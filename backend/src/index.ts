import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app'
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://CANARIO:PadelApp@127.0.0.1:27017/PadelApp', {
    });
    app.listen(4000, function(){
        console.log('Servidor escuchando en el puerto '+ 4000);  
    });
    
  } catch (error:any) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};
connectDB();

export default connectDB;
