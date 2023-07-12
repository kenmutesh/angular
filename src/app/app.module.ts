import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {WithdrawComponent} from "./components/withdraw/withdraw.component";
import {DepositComponent} from "./components/deposit/deposit.component";
import {MainlayoutComponent} from "./components/mainlayout/mainlayout.component";
import {TransferComponent} from "./components/transfer/transfer.component";
import {AuthGuard} from "./auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SidenavComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    MainlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
