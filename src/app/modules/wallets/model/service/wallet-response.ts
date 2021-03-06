export interface WalletResponse {
  id: string;
  name: string;
  priority?: number;
  description?: string;
  goal?: number;
  dueDate?: Date;
  postponable?: boolean;
  status: string;
}
