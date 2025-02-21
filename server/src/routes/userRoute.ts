import express, { Request, Response } from 'express';
import { Task } from '../controllers/Task';
import { User } from '../controllers/User';
import { FindTask } from '../controllers/FindTask';
import { GiveTask } from '../controllers/GiveTask';
import { index } from '../models';
import { Op } from 'sequelize';
import { FindUser } from '../controllers/FindUser';

export const router=express.Router();

//@ts-ignore
router.post('/create',User)
//@ts-ignore
router.post('/Task',Task)
//@ts-ignore
router.get('/FindTask',FindTask)
//@ts-ignore
router.get('/GiveTask',GiveTask)
router.get('/Find', FindUser)


router.post('/Find', async (req: Request, res: Response) => {
    const data = await index.Task.findAll({})
    res.json(data)
})