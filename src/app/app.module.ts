import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PhotoPreviewComponent } from './photo-preview/photo-preview.component';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent, PhotoPreviewComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		PinchZoomModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
