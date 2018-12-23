import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-wallet-movement-form',
  templateUrl: './wallet-movement-form.component.html',
  styleUrls: ['./wallet-movement-form.component.css']
})
export class WalletMovementFormComponent implements OnInit {
  private movementTypes = ['Income', 'Expense'];

  constructor(public dialogRef: MatDialogRef<WalletMovementFormComponent>,
    @Inject(MAT_DIALOG_DATA) private movement: any) { }

  ngOnInit() {
  }

}
