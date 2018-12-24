import { Wallet } from './wallet';

export interface Movement {
  movementId?: string;
  name?: string;
  type?: string;
  value?: number;
  wallet?: Wallet;
  date?: Date;
}
