import express, { Request, Response } from 'express'
import { connectDB } from './config/SequelizeConfig';
import { router } from './routes/userRoute';
import { index } from './models';
import cors from 'cors'
import cookiesParser from 'cookie-parser'
const app = express();
const port = 3000;
app.use(express.json())
app.use(cookiesParser())
app.use(cors(
  {
    credentials:true,
    origin:"http://localhost:5173"
  }
))
connectDB()

app.use('/api',router)
app.get('/', async(req: Request, res: Response) => {
  await index.User.findAll()
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:port`);
});