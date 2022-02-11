import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextComponent } from './components/next/next.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "next", component: NextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
