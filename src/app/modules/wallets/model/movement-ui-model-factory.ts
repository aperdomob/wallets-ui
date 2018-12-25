import { Movement } from './movement';
import { MovementBody } from './service/movement-body';
import { MovementResponse } from './service/movement-response';

export class MovementUiModelFactory {
  static toBody(movement: Movement): MovementBody {
    return {
      type: movement.type,
      value: movement.value,
      name: movement.name,
      date: movement.date,
      id: movement.movementId
    };
  }

  static fromResponse(response: MovementResponse): Movement {
    return {
      movementId: response.walletMovementId,
      name: response.name,
      type: response.type,
      value: response.value,
      date: response.date
    };
  }

  static fromResponseList(response: MovementResponse[]): Movement[] {
    return response.map((movement) => MovementUiModelFactory.fromResponse(movement));
  }
}
