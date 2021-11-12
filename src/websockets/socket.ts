import { io, Socket, ManagerOptions } from "socket.io-client";

interface MySocketInterface {
  init: (url: string) => void;
  onConnect?: (socket?: Socket) => void;
  onDisConnect?: (socket?: Socket, reason?: Socket.DisconnectReason) => void;
  onConnectError?: (err?: Error) => void;
}

export default class MySocket implements MySocketInterface {
  private url: string;
  private options: ManagerOptions | undefined;

  public socket: Socket | undefined;
  public isConnected: boolean;

  static get instance() {
    return this;
  }

  constructor(url: string, options?: ManagerOptions) {
    this.url = url;
    this.isConnected = false;
  }

  init() {
    console.log(this.url, this.options);
    this.socket = io(this.url, this.options);
    this.socket.on("connect", () => {
      // This event is fired by Socket instance upon connection and reconnection
      this.isConnected = true;
      this.onConnect && this.onConnect(this.socket);
    });
    this.socket.on("disconnect", (reason: Socket.DisconnectReason) => {
      this.isConnected = false;
      this.onDisConnect && this.onDisConnect(this.socket, reason);
    });
    this.socket.on("connect_error", (err) => {
      this.onConnectError && this.onConnectError(err);
      this.socket?.connect();
    });
    return this;
  }

  onConnect?: (socket?: Socket) => void;
  onDisConnect?: (socket?: Socket, reason?: Socket.DisconnectReason) => void;
  onConnectError?: (err?: Error) => void;
}
