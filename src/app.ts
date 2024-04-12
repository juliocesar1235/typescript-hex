import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from "../src/api/router";


// Express server
const app = express();
const port = 3000;


// Server configuration
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


// Define Express routes
app.use('/', router);

// Start server
app.listen(port, () => {
  console.log(`Server started at loca http://localhost:${port}`);
});

export default app;