import { WalletFormModel } from './ui/wallet-form-model';
import { Wallet } from './wallet';
import { WalletResponse } from './service/wallet-response';
import { WalletBody } from './service/wallet-body';
import { MovementUiModelFactory } from './movement-ui-model-factory';

export class WalletUiModelFactory {
  static fromResponseToModel(walletResponse: WalletResponse): Wallet {
    return {
      id: walletResponse.id,
      name: walletResponse.name,
      priority: walletResponse.priority,
      description: walletResponse.description,
      goal: walletResponse.goal,
      dueDate: walletResponse.dueDate ? new Date(walletResponse.dueDate) : undefined,
      isPostponable: walletResponse.postponable,
      status: walletResponse.status,
      saved: walletResponse.saved,
      movements: MovementUiModelFactory.fromResponseList(walletResponse.movements)
    };
  }
  static fromModelToBody(wallet: Wallet): WalletBody {
    let date;

    if (wallet.dueDate !== null && typeof wallet.dueDate !== 'undefined') {
      date = new Date(Date.UTC(wallet.dueDate.getFullYear(), wallet.dueDate.getMonth(), wallet.dueDate.getDate()));
    }

    return {
      id: wallet.id,
      name: wallet.name,
      priority: wallet.priority,
      description: wallet.description,
      goal: wallet.goal,
      dueDate: date,
      postponable: wallet.isPostponable,
      status: wallet.status
    };
  }

  public static defaultWalletFormModel(): WalletFormModel {
    return {
      status: 'Created'
    };
  }
}
