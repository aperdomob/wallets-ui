export interface MovementResponse {
  id?: string;
  name?: string;
  type: string;
  value: number;
  walletMovementId: string;
  date: Date;
}
