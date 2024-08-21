import { app } from './app.js';
import connectDB from './db/index.js';

connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log(`MongoDB Connection Failed`, err);
});
