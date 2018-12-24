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
      movementId: response.id,
      name: response.name,
      value: response.type === 'Income' ? response.value : -response.value
    };
  }
}
