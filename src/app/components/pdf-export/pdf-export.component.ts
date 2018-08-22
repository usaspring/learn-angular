import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceRow } from '../../models/invoice-row';

@Component({
  selector: 'app-pdf-export',
  templateUrl: './pdf-export.component.html',
  styleUrls: ['./pdf-export.component.css']
})
export class PdfExportComponent implements OnInit {

  invoices: InvoiceRow[];
  constructor(private svc: InvoiceService) { 
    //this.invoices = svc.getInvoices();
  }

  ngOnInit() {
    this.invoices = this.svc.getInvoices();
  }

}
