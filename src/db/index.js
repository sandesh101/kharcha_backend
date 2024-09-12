import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log("🟢 DB CONNECTION SUCCESSFUL");
    } catch (e) {
        console.log(`🔴 DB CONNECTION FAILED: ${e}`);
        process.exit(1);
    }
}

export default connectDB;