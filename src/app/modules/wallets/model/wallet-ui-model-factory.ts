import { WalletFormModel } from './ui/wallet-form-model';
import { Wallet } from './wallet';
import { WalletResponse } from './service/wallet-response';
import { WalletBody } from './service/wallet-body';

export class WalletUiModelFactory {
  static fromResponseToModel(walletResponse: WalletResponse): Wallet {
    return {
      id: walletResponse.id,
      name: walletResponse.name,
      priority: walletResponse.priority,
      description: walletResponse.description,
      goal: walletResponse.goal,
      dueDate: walletResponse.dueDate,
      isPostponable: walletResponse.isPostponable,
      status: walletResponse.status
    };
  }
  static fromModelToBody(wallet: Wallet): WalletBody {
    return {
      id: wallet.id,
      name: wallet.name,
      priority: wallet.priority,
      description: wallet.description,
      goal: wallet.goal,
      dueDate: wallet.dueDate,
      isPostponable: wallet.isPostponable,
      status: wallet.status
    };
  }

  public static defaultWalletFormModel(): WalletFormModel {
    return {
      status: 'Created'
    };
  }
}
