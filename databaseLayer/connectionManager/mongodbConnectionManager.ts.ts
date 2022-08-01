import * as mongo from 'mongodb';
import {ExceptionHandler} from "../../exceptionHandler/exceptionHandler"
let exceptionHandler = new ExceptionHandler();
var MongoClient = require('mongodb').MongoClient;
import { dataBase } from '../../constants';
import {IConnectionManager} from './connectionManagerInterface';

export class MongodbCientManager implements IConnectionManager {
    establishConnection(connectionUrl){
        return new Promise((resolve, reject) => {
            let dbConnection = null;
            try {
                MongoClient.connect(connectionUrl, (err: string, client: mongo.MongoClient) => {
                    dbConnection = client.db(dataBase.dbName);
                    resolve(dbConnection);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }

    closeConnection() {
        MongoClient.close();
    }
}