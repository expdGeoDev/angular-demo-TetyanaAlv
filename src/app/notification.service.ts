import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from './notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
	constructor(private dialog: MatDialog) {}

	openPopup() {
		this.dialog.open(NotificationComponent);
	}
	closePopup() {
		this.dialog.closeAll();
	}
}
