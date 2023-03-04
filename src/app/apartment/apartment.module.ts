import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentDetailsComponent } from './pages/apartment-details/apartment-details.component';
import { ApartmentListComponent } from './pages/apartment-list/apartment-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ApartmentDetailsComponent,
    ApartmentDetailsComponent,
    ApartmentListComponent,
  ],
  exports: [ApartmentDetailsComponent],
  imports: [AppRoutingModule, CommonModule],
})
export class ApartmentModule {}
