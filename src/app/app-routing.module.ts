import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialPageComponent } from './components/special-page/special-page.component';
import { PhotoPageComponent } from './components/photo-page/photo-page.component';

const routes: Routes = [
  { path: '', component: SpecialPageComponent },
  { path: 'photo-page', component: PhotoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
