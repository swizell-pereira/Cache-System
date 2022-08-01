let net = require('net'); 

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
}); 

class Client {
    private _host: String = process.argv[2];
    private _port: String = process.argv[3];

    connectToServer() {
        const client = new net.Socket();
        client.connect(this._port, this._host, () => {
            console.log(`client connected to ${this._host}:${this._port}`);
            client.write(`Hello, I am ${client.address().address}`);
        });
        this.handleCloseClientEvent(client)
        this.handleErrorEvent(client)
        this.readDataFromServer(client);
    }

    handleErrorEvent(client) {
        client.on('error', (err) => {
            console.error("error occured in client: ", err); 
        }); 
    }

    handleCloseClientEvent(client) {
        client.on('close', () => {
            console.log('Client closed. Press "ctrl + C"');
        }); 
    }

    readDataFromServer(client) {
        client.on('data', (data) => {
            console.log(`Client received: ${data}`);
            this.displayOptionsToClient(client)
        });
    }

    displayOptionsToClient(client) {
        readline.question("enter your choice: \n1. ICS SET key “Value”\n2. ICS GET key\n3.Close connection\n", (choice) => {
            if ( choice == "3") {
                return client.end();
            }

            if ( choice == "1") {
                readline.question("enter the key: \n", (arg) => {
                    readline.question("enter the value: \n", (num) => {
                        client.write("Set " + arg + " " + num);
                    });
                });
            }
            if ( choice == "2") {
                readline.question("enter the key: \n", (arg) => {
                    client.write("Get " + arg );
                });
            }
        })
    }
}

let client = new Client();
client.connectToServer();