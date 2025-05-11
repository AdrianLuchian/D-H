import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardActiveDirective } from './directives/card-active.directive';
import { CardConfigurationComponent } from './components/card-configuration/card-configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardConfigurationComponent,
    CardInformationComponent,
    CardContainerComponent,
    CardActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
