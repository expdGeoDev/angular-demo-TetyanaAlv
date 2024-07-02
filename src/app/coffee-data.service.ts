import { Injectable } from '@angular/core';
import { Coffee, coffeeData, GroundOrBeans, RoastType } from '../data/coffee-data';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CoffeeDataService {
	coffeeData: Coffee[];
	private nextId: number = 4;

	constructor() {
		this.coffeeData = coffeeData;
	}

	getAllBeans(): Coffee[] {
		return this.coffeeData;
	}

	findById(id: number): Coffee | undefined {
		return this.coffeeData.find((coffee) => coffee.id === id);
	}

	findByBrand(brandName: string): Coffee[] | undefined {
		return this.coffeeData.filter((coffee) => coffee.brand === brandName);
	}

	add(brand: string, roast: RoastType, groundOrBeans: GroundOrBeans): Coffee|undefined {
		this.nextId = this.nextId + 1;
		let coffee: Coffee = {id: this.nextId, brand: brand, roast: roast, groundOrBeans: groundOrBeans};
		this.coffeeData.push(coffee);
		return coffee;
	}
}
