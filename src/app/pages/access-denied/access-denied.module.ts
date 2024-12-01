import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccessDeniedPageRoutingModule } from './access-denied-routing.module';
import { AccessDeniedPage } from './access-denied.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessDeniedPageRoutingModule,
    TranslateModule
  ],
  declarations: [AccessDeniedPage]
})
export class AccessDeniedPageModule {}