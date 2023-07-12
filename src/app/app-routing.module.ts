import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { MainlayoutComponent } from "./components/mainlayout/mainlayout.component";
import { TransferComponent } from "./components/transfer/transfer.component";
import { WithdrawComponent } from "./components/withdraw/withdraw.component";
import { AuthGuard } from './auth.guard';
import {DepositComponent} from "./components/deposit/deposit.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "home",
    component: MainlayoutComponent,
    canActivate: [AuthGuard], // Apply the authentication guard
    children: [
      { path: "", component: HomeComponent },
      { path: "deposit", component: DepositComponent },
      { path: "transfer", component: TransferComponent },
      { path: "withdraw", component: WithdrawComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
