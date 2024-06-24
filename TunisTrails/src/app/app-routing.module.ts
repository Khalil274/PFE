import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AgencyComponent } from './agency/agency.component';
import { EventsComponent } from './events/events.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserblogsComponent } from './userblogs/userblogs.component';
import { LoginCComponent } from './login-c/login-c.component';
import { AgeventsComponent } from './agevents/agevents.component';
import { AgencySigninComponent } from './agency-signin/agency-signin.component';
import { AdminComponent } from './admin/admin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
  { path: 'home', component: HomeComponent }, // Route for the home page
  { path: 'blogs', component: BlogsComponent }, // Route for displaying blogs
  { path: 'agency', component: AgencyComponent }, // Route for the agency page
  { path: 'events', component: EventsComponent}, // Route for displaying events
  { path: 'signup', component: SignupComponent }, // Route for the signup page
  { path: 'login', component: LoginComponent }, // Route for the login page
  { path: 'userblogs', component: UserblogsComponent}, // Route for displaying user blogs
  { path : 'loginC', component: LoginCComponent},// Route for displaying loginCComponent
  { path : 'agevents' , component: AgeventsComponent }, // Route for displaying loginCComponent
  { path : 'agency-signin' , component: AgencySigninComponent }, // Route for displaying loginCComponent
  { path : 'admin', component: AdminComponent }, //Route for displaying adminComponent
  { path : 'adminsignup', component: AdminsignupComponent }, //Route for displaying AdminsignupComponent 
  { path : 'user-events', component: UserEventsComponent }, //Route for UserEventsComponent
  { path : 'user-history', component: UserHistoryComponent }, //Route for displaying UserHistoryComponent
  { path : 'create-event', component: CreateEventComponent }, //Route for displaying CreateEventComponent
  { path : 'profil', component: ProfilComponent }, //Route for displaying CreateEventComponent
  { path: '**', redirectTo: '/home' } // Redirect to home if route not found
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
