import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AuthGuardService } from './Services/authGuard/auth-guard.service';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],//property - true or false
    children: [
      // { path: 'archive', component: ArchiveComponent },
      // { path: 'trash', component: TrashComponent },
    ]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  }
];
