import { DefaultEventsMap, Socket } from 'socket.io';
import { User } from 'src/generated/client';

export interface HwbeSocketData {
  user: User | null;
}

export type HwbeSocket = Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  HwbeSocketData
>;
