export interface UserSession {
  uid: string;
  mail: string;
  displayName: string;
  photoUrl: string;
  sessionId: number;
  token?: string;
}
