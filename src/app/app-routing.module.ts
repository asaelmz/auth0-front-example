import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { PrivateComponent } from './components/private/private.component';
import { PublicComponent } from './components/public/public.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'access-denied', component: AccessDeniedComponent},
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'public'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
