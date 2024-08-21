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

export { app };