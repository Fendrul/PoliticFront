export class ServerData {
  private static instance: ServerData;
  private serverUrl: string = 'http://localhost:';
  private serverPort: string = '8080';
  private constructor() {}
  public static getInstance(): ServerData {
    if (!ServerData.instance) {
      ServerData.instance = new ServerData();
    }
    return ServerData.instance;
  }

  public setServerPort(port: string) {
    this.serverPort = port;
  }

  public getServerUrl(): string {
    return this.serverUrl + this.serverPort;
  }
}
