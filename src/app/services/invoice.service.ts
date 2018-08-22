import { Injectable } from '@angular/core';
import { InvoiceRow } from '../models/invoice-row';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoices:InvoiceRow[] = [
    new InvoiceRow('QUESO CABRALES', 21, 5),
    new InvoiceRow('ALICE MUTTON', 39, 7),
    new InvoiceRow('GENEN SHOUYU', 15.50, 3),
    new InvoiceRow('CHARTREUSE VERTE', 18, 1),
    new InvoiceRow('MASCARPONE FABIOLI', 32, 2),
    new InvoiceRow('VALKOINEN SUKLAA', 16.25, 3)
  ];


  constructor() { }

  getInvoices():InvoiceRow[] {
    return this.invoices;
  }
}