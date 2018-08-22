import { Component, OnInit, Input } from '@angular/core';
import { InvoiceRow } from '../../models/invoice-row';
import { aggregateBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input() invoices: InvoiceRow[] = [];

  constructor() { }

  ngOnInit() {
    
  }

  private aggregates: any[] = [{
    field: 'qty', aggregate: 'sum'
  }, {
    field: 'total', aggregate: 'sum'
  }];

  public get totals(): any {
    return aggregateBy(this.invoices, this.aggregates) || {};
  }
}
