import { PhotoPreviewComponent } from './photo-preview/photo-preview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'preview',
		pathMatch: 'full',
	},
	{
		path: 'preview/:id',
		component: PhotoPreviewComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
