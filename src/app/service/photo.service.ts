import { Photo } from './photo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class PhotoService {
	list: Photo[] = [
		{ src: './assets/img1.jpg', name: 'img1', id: 1 },
		{ src: './assets/img2.jpg', name: 'img2', id: 2 },
	];

	constructor(private http: HttpClient) {
		// this.http.get('./assets/').subscribe((res) => {
		// 	console.log(res);
		// });
	}

	get all(): Photo[] {
		return this.list;
	}

	public byId(id: number): Photo {
		return this.list.filter((p) => {
			return p.id === id;
		})[0];
	}
}
