import { WalletFormModel } from './ui/wallet-form-model';
import { Wallet } from './wallet';
import { WalletResponse } from './service/wallet-response';
import { WalletBody } from './service/wallet-body';
import { MovementUiModelFactory } from './movement-ui-model-factory';
import * as moment from 'moment';

export class WalletUiModelFactory {
  static fromResponseToModel(walletResponse: WalletResponse): Wallet {
    return {
      id: walletResponse.id,
      name: walletResponse.name,
      priority: walletResponse.priority,
      description: walletResponse.description,
      goal: walletResponse.goal,
      dueDate: typeof walletResponse.dueDate === 'string' ? new Date(moment( walletResponse.dueDate).format()) : undefined,
      isPostponable: walletResponse.postponable,
      status: walletResponse.status,
      saved: walletResponse.saved,
      movements: MovementUiModelFactory.fromResponseList(walletResponse.movements)
    };
  }
  static fromModelToBody(wallet: Wallet): WalletBody {
    let date;

    if (wallet.dueDate !== null && typeof wallet.dueDate !== 'undefined') {
      date = moment(wallet.dueDate).format('YYYY-MM-DD');
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
