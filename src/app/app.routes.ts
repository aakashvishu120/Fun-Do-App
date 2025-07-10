import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AuthGuardService } from './Services/authGuard/auth-guard.service';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { RemaindersComponent } from './Components/remainders/remainders.component';
import { EditlabelComponent } from './Components/editlabel/editlabel.component';
import { NotesComponent } from './Components/notes/notes.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],//property - true or false
    children: [
      { path: 'archive', component: ArchiveComponent },
      { path: 'editlabel', component: EditlabelComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'remainders', component: RemaindersComponent },
      { path: 'trash', component: TrashComponent },
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
