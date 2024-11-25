import { User } from "firebase/auth";
import { FieldValue } from "firebase/firestore";

export interface AppProps {
  communityId: string | undefined;
}
export interface UserData {
  uid: string | null;
  photoURL: string | undefined;
  displayName: string | null;
  text: string | null;
  timestamp: FieldValue;
  communityId: string | null;
}

export interface Message {
  id: string;
  data: UserData;
}
