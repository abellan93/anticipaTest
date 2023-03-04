import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentDetailsComponent } from './apartment/pages/apartment-details/apartment-details.component';
import { ApartmentListComponent } from './apartment/pages/apartment-list/apartment-list.component';

const routes: Routes = [
  { path: '', component: ApartmentListComponent, pathMatch: 'full' },
  {
    path: 'apartment/:id',
    component: ApartmentDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
