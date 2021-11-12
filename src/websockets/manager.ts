import { Socket } from 'socket.io-client';
import MySocket from './socket';

class SocketManager {
  private mySocket: MySocket | undefined;

  async setUp() {
    console.info('SocketManager setUp');
    this.mySocket = new MySocket('http://localhost:8080').init();
    return new Promise((resolve, reject) => {
      if (this.mySocket) {
        this.mySocket.onConnect = () => {
          // if connected
          console.info('Client is connected...');
          resolve(true);
        }
        this.mySocket.onDisConnect = (socket?: Socket, reason?: Socket.DisconnectReason) => {
          reject({
            socket,
            reason
          });
        }
        this.mySocket.onConnectError = (err) => {
          // if error
          reject(err);
        }
      }
    });
  }

  emit(eventName: string, data?: Record<string, unknown>) {
    if (this.mySocket?.isConnected) {
      console.log(eventName, data);
      this.mySocket.socket?.emit(eventName, data);
    }
  }
}

export default new SocketManager();