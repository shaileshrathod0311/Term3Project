import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    StepperComponent,
    TabsComponent,
    TableComponent,
    FormComponent,
    HeaderBarComponent,
    SideBarComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
