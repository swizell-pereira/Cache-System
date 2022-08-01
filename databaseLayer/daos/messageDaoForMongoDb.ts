import { messageModel } from '../dtos/messageModel'
import { MongodbCientManager } from '../connectionManager/mongodbConnectionManager.ts'
import { dataBase } from '../../constants'
import { ExceptionHandler } from '../../exceptionHandler/exceptionHandler'
let exceptionHandler = new ExceptionHandler();
let mongodbClientManager = new MongodbCientManager()
import {IMessageDaoFactory} from './messageDaoFactory'

export class MessageDao implements IMessageDaoFactory {
    async saveData(key, value) {
        let db:any = await mongodbClientManager.establishConnection('mongodb://localhost:27017');
        let collection = await db.collection('test', messageModel);
        collection.insertOne({ key: `${key}`, value: `${value}`}, (err: any, result: any) => {
        })
    }

    async getData(key) {
        let db:any = await mongodbClientManager.establishConnection('mongodb://localhost:27017');
        let collection = await db.collection('test', messageModel);
        let foundData;
        return await collection.findOne({ key: `${key}`})
    }

    async findDataAndUpdate(key, value) {
        let db:any = await mongodbClientManager.establishConnection('mongodb://localhost:27017');
        let collection = await db.collection('test', messageModel);
        collection.findOneAndUpdate({ key: `${key}`}, { $set: { value: `${value}` } },
        { upsert: true })
    }
}