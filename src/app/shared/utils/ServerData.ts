export class ServerData {
  private static instance: ServerData;
  private serverUrl: string = 'http://10.26.128.2:';
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
