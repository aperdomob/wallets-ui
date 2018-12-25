import { MovementResponse } from './movement-response';

export interface WalletResponse {
  id: string;
  name: string;
  priority?: number;
  description?: string;
  goal?: number;
  dueDate?: string;
  postponable?: boolean;
  status: string;
  saved: number;
  movements: MovementResponse[];
}
