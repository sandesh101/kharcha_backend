import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
import userRouter from './routes/userRoutes.js';

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };