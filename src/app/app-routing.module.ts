import { SignupComponent } from './registeration/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './registeration/signin/signin.component';
import { NetworkComponent } from './network/network.component';
import { PostComponent } from './post/post.component';
import { SignoutComponent } from './signout/signout.component';


const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'network', component: NetworkComponent},
  { path: 'home', component: PostComponent},
  { path: 'signout', component: SignoutComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
