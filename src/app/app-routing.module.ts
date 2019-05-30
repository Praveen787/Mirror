import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { OverviewComponent } from './overview/overview.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { UsageComponent } from './usage/usage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  {path:'' , redirectTo :'login', pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'overview' , component:OverviewComponent},
    {path:'billing' , component:BillingComponent},
    {path:'payment' , component:PaymentComponent},
    {path:'usage' , component:UsageComponent},
    {path:'profile' , component:ProfileComponent},
    {path: 'register', component : RegisterComponent},
  {path :"**" , component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BillingComponent,
  OverviewComponent,PaymentComponent,ProfileComponent,UsageComponent,PagenotfoundComponent,LoginComponent,
  RegisterComponent
];
