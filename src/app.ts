import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from "../src/api/router";
import serverless from "serverless-http";
import { errorHandler } from './middleware/error.middleware';


dotenv.config()

// Express server
const app = express();
const port = 3000;
const mongoConn = process.env.MONGO_CONN ?? "NO_CONN"


mongoose.connect(mongoConn, {
  
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Connected to the database.');
});


// Server configuration
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());


// Define Express routes
app.use('/', router);
app.use(errorHandler);

// Start server


export const handler = serverless(app);