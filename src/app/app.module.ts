import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PdfExportComponent } from './components/pdf-export/pdf-export.component';
import 'hammerjs';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardResolver } from './resolvers/DashboardResolver';
import { NavHeaderComponent } from './components/layout/nav-header/nav-header.component';

// route definitions
const routes: Route[] = [
  { path: 'dashboard', component: DashboardComponent, resolve: { dash: DashboardResolver } },
  { path: 'grid', component: UserComponent },
  { path: 'form', component: UserFormComponent },
  { path: 'pdf', component: PdfExportComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    UserComponent,
    UserDetailComponent,
    InvoiceComponent,
    PdfExportComponent,
    UserFormComponent,
    ChartComponent,
    DashboardComponent,
    NavHeaderComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
    PDFExportModule,
    IntlModule,
    ChartsModule,
    FormsModule,
    InputsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DashboardResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
