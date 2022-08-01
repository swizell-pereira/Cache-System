export interface IConnectionManager {
    establishConnection(connectionUrl: string): Promise<any>;
    closeConnection(): void;
}