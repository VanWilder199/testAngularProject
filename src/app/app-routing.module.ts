import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPageComponent} from "./list-page/page/list-page.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'navigator', component: ListPageComponent},
  {path: '', redirectTo: '/navigator', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
