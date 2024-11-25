import { FieldValue } from 'firebase/firestore'

export interface AppProps{
  communityId: string | undefined;
}
export interface MessageData {
  uid: string;
  photoURL: string;
  displayName: string;
  text: string;
  timestamp: FieldValue;
  communityId: string;
}

export interface Message {
  id: string;
  data: MessageData;
}