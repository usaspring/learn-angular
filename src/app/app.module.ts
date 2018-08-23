import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoComponent } from './components/photo/photo.component';
import { UserComponent } from './components/user/user.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PdfExportComponent } from './components/pdf-export/pdf-export.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule }   from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    UserComponent,
    UserDetailComponent,
    InvoiceComponent,
    PdfExportComponent,
    UserFormComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
