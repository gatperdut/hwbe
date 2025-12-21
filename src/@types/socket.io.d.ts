// socket-data.d.ts

import { User } from 'src/generated/client';

declare module 'socket.io' {
  interface Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData> {
    data: {
      user: User;
    };
  }
}
