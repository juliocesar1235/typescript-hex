import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from "../src/api/router";
import serverless from "serverless-http";



// Express server
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/27017", {
  
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Connected to the database.');
});


dotenv.config()
// Server configuration
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());


// Define Express routes
app.use('/', router);

// Start server


export const handler = serverless(app);