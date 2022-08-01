export class ExceptionHandler{
    printServerConnectionError(errorMessage) {
        console.log(`Failed to start Server: ${errorMessage} `);
    }

    printvalidationError(errorMessage, operation) {
        console.log(`${operation} data failed : ${errorMessage}`);
    }

    handleFailedToGetClient(errorMessage) {
        console.log(`Failed to get client: ${errorMessage} `);
    }

    handleFailedToReadData(errorMessage) {
        console.log(`Failed to read data from server: ${errorMessage} `);
    }


    handleFailedToCloseClient(errorMessage) {
        console.log(`Failed to close client: ${errorMessage} `);
    }


    handleFailedToConnectToDb(errorMessage) {

        console.log(`Failed to connect to Db: ${errorMessage} `);

    }


    handleFailedToSaveDataToDb(errorMessage) {
        console.log(`Failed to save data to db: ${errorMessage} `);
    }


    handleFailedToUpdateToDb(errorMessage) {
        console.log(`Failed to update to Db: ${errorMessage} `);
    }


    handleFailedToGetDataToDb(errorMessage) {
        console.log(`Failed to get from Db: ${errorMessage} `);
    }
}