import { Component } from '@angular/core';
import { Coffee, coffeeData, GroundOrBeans, RoastType } from '../../data/coffee-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoffeeDataService } from '../coffee-data.service';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from '../notification.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
	imports: [
		ReactiveFormsModule,
		FormsModule,
		NotificationComponent,
		NgForOf,
	],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css'
})
export class AddCoffeeFormComponent {
	brand: string = '';
	roast: RoastType = 'medium';
	groundOrBeans: GroundOrBeans = 'ground';

	roastTypes = [
		'light',
		'medium',
		'dark'
	]

	constructor(private coffeeDataService: CoffeeDataService, private notificationSerevice: NotificationService){}

	onSubmit(){
		 let newCoffee = this.coffeeDataService.add(this.brand, this.roast, this.groundOrBeans);
			this.notificationSerevice.openPopup();
	};

	reset(){
		this.brand = '';
		this.roast = 'medium';
		this.groundOrBeans = 'ground';
	}

	protected readonly beans = coffeeData;
}
