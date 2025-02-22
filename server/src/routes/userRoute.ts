import express, { Request, Response } from 'express';
import { Task } from '../controllers/Task';
import { User } from '../controllers/User';
import { FindTask } from '../controllers/FindTask';
import { GiveTask } from '../controllers/GiveTask';
import { index } from '../models';
import { Op } from 'sequelize';
import { FindUser } from '../controllers/FindUser';
import { auth } from '../utils/auth';

export const router=express.Router();

//@ts-ignore
router.post('/create',User)
//@ts-ignore
router.post('/Task',auth,Task)
//@ts-ignore
router.get('/FindTask',auth,FindTask)
//@ts-ignore
router.get('/GiveTask',auth,GiveTask)
//@ts-ignore
router.get('/Find',auth, FindUser)


router.post('/Find', async (req: Request, res: Response) => {
    const data = await index.Task.findAll({})
    res.json(data)
})