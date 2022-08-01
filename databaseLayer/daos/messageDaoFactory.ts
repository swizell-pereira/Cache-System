export interface IMessageDaoFactory {
    saveData:(key, value) => void;
    getData:(key, value) => void;
    findDataAndUpdate: (key, value) => void;
}