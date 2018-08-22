import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SelectionEvent, RowArgs } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  selectedUser: User;

  constructor(private svc:UserService) { }

  ngOnInit() {
    this.svc.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  onSelectionChanged($event: SelectionEvent) {
    if ($event.selectedRows.length > 0) {
      let selectedRow:RowArgs = $event.selectedRows[0];
      this.selectedUser = <User>selectedRow.dataItem;
    } else {
      this.selectedUser = null;
    }
  }

}
