import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleHomeComponent } from './components/example-home/example-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: ExampleHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
