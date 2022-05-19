import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailstudioPageRoutingModule } from './detailstudio-routing.module';

import { DetailstudioPage } from './detailstudio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailstudioPageRoutingModule
  ],
  declarations: [DetailstudioPage]
})
export class DetailstudioPageModule {}
