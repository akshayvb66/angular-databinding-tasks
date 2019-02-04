import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Component1Component } from './scenario3/component1.component';
import { Component2Component } from './scenario3/component2.component';
import { Child4Component } from './scenario4/child.component';
import { Parent4Component } from './scenario4/parent.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { GrandparentComponent } from './scenario5/grandparent/grandparent.component';
import { ParentComponent } from './scenario5/parent/parent.component';
import { ChildComponent } from './scenario5/child/child.component';
import { Scenario6Component } from './scenario6/scenario6.component';
import { Scenario6component1Component } from './scenario6/scenario6component1/scenario6component1.component';
import { Scenario6component2Component } from './scenario6/scenario6component2/scenario6component2.component';
import { Scenario6parentComponent } from './scenario6/scenario6parent/scenario6parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    Scenario1Component,
    Scenario2Component,
    Component1Component,
    Component2Component,
    Child4Component,
    Parent4Component,
    Scenario5Component,
    GrandparentComponent,
    ParentComponent,
    ChildComponent,
    Scenario6Component,
    Scenario6component1Component,
    Scenario6component2Component,
    Scenario6parentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
