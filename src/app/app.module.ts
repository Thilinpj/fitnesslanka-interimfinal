import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { LoginComponent } from "./signin/signin.component";
import { RegisterComponent } from "./register/register.component";

import { HttpClientModule } from "@angular/common/http";
import { DialogBuilderComponent } from './dialog-builder/dialog-builder.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    LoginComponent,
    RegisterComponent,
    DialogBuilderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [DialogBuilderComponent],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
