import { MessageDao } from './messageDaoForMongoDb';

export class MessageDaoFactory { 
    async getDbType(db) {
        if(db == 'mongoDb')
        {
            return new MessageDao();
        }
    }
}