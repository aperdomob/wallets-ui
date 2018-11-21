export interface WalletResponse {
  id: string;
  name: string;
  priority?: number;
  description?: string;
  goal?: number;
  dueDate?: Date;
  isPostponable?: boolean;
  status: string;
}
