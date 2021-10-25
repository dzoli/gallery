import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialModuleComponents = [MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule, MatSidenavModule];

@NgModule({
	imports: [MaterialModuleComponents],
	exports: [MaterialModuleComponents],
})
export class MaterialModule {}
