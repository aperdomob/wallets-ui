export interface WalletBody {
  id: string;
  name: string;
  priority?: number;
  description?: string;
  goal?: number;
  dueDate?: string;
  postponable?: boolean;
  status: string;
}
