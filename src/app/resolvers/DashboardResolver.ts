import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

const data:any = {
  customer: 125,
  opportunity: 368,
  findings: 36,
  collection: 134560,
  chart: {
    title: 'Collection Amount Trending',
    series: [
        {
            name: "CMS",
            data: [390.7, 794.3, 784.8, 928.4, 926.3, 980.1, 389.0, 823.8, 955.2, 685.5]
          }, {
            name: "CCV",
            data: [474.3, 729.5, 717.5, 637.6, 815.3, 853.5, 524.7, 783.2, 430.6, 639.8]
          }, {
            name: "COB",
            data: [2105.8, 3759.7, 1161.9, 2684.3, 3707.5, 3269.8, 1083.8, 5127.7, 3690.4, 2995.8]
          },{
            name: "RMS",
            data: [198.8, 273.3, 399.4, 346.4, 400.1, 393.9, 133.3, 224.5, 433.9, 272.7]
          }
      ],
      categories: ['11/2017', '12/2017', '01/2018', '02/2018', '03/2018', '04/2018', '05/2018', '06/2018', '07/2018', '08/2018']
  }
};

/**
 * This class 
 */
@Injectable()
export class DashboardResolver implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
        return of(data);
    }
}