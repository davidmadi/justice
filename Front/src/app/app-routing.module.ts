import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';

const routes: Routes = [
  {
    path: 'preencher/:id',
    component: DynamicPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
