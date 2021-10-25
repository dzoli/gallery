import { PhotoService } from './../service/photo.service';
import { Photo } from './../service/photo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-photo-preview',
	templateUrl: './photo-preview.component.html',
	styleUrls: ['./photo-preview.component.scss'],
})
export class PhotoPreviewComponent implements OnInit {
	public photo: Photo | null = null;

	constructor(private route: ActivatedRoute, private servicePhoto: PhotoService) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			const id = Number(params['id']);
			this.photo = this.servicePhoto.byId(id);
		});
	}
}
