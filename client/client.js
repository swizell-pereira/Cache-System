var net = require('net');
var readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
var Client = /** @class */ (function () {
    function Client() {
        this._host = process.argv[2];
        this._port = process.argv[3];
    }
    Client.prototype.connectToServer = function () {
        var _this = this;
        var client = new net.Socket();
        client.connect(this._port, this._host, function () {
            console.log("client connected to ".concat(_this._host, ":").concat(_this._port));
            client.write("Hello, I am ".concat(client.address().address));
        });
        this.handleCloseClientEvent(client);
        this.handleErrorEvent(client);
        this.readDataFromServer(client);
    };
    Client.prototype.handleErrorEvent = function (client) {
        client.on('error', function (err) {
            console.error("error occured in client: ", err);
        });
    };
    Client.prototype.handleCloseClientEvent = function (client) {
        client.on('close', function () {
            console.log('Client closed. Press "ctrl + C"');
        });
    };
    Client.prototype.readDataFromServer = function (client) {
        var _this = this;
        client.on('data', function (data) {
            console.log("Client received: ".concat(data));
            _this.displayOptionsToClient(client);
        });
    };
    Client.prototype.displayOptionsToClient = function (client) {
        readline.question("enter your choice: \n1. ICS SET key “Value”\n2. ICS GET key\n3.Close connection\n", function (choice) {
            if (choice == "3") {
                return client.end();
            }
            if (choice == "1") {
                readline.question("enter the key: \n", function (arg) {
                    readline.question("enter the value: \n", function (num) {
                        client.write("Set " + arg + " " + num);
                    });
                });
            }
            if (choice == "2") {
                readline.question("enter the key: \n", function (arg) {
                    client.write("Get " + arg);
                });
            }
        });
    };
    return Client;
}());
var client = new Client();
client.connectToServer();
