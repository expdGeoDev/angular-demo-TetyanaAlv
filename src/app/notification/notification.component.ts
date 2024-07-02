import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styles: ``
})
export class NotificationComponent {
	constructor(private notificationService: NotificationService){}

	closeDialog(){this.notificationService.closePopup()};
}
