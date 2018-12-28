import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Movement } from '../../model/movement';
import { WalletMovementService } from '../../services/wallet-movement.service';
import { WalletComponentService } from '../../services/wallet-component.service';

@Component({
  selector: 'app-wallet-movement-form',
  templateUrl: './wallet-movement-form.component.html',
  styleUrls: ['./wallet-movement-form.component.css']
})
export class WalletMovementFormComponent implements OnInit {
  private movementTypes = ['Income', 'Expense'];

  constructor(
    private walletMovementService: WalletMovementService,
    private walletComponentService: WalletComponentService,
    public dialogRef: MatDialogRef<WalletMovementFormComponent>,
    @Inject(MAT_DIALOG_DATA) private movement: Movement) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(movement: Movement) {
    this.walletComponentService.saveMovement(movement);
    this.dialogRef.close();
  }
}
