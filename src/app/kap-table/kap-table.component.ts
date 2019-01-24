import { Component, OnInit,OnChanges } from '@angular/core';
import { UsersService } from './shared1/users.service';


@Component({
  selector: 'kap-table',
  templateUrl: './kap-table.component.html',
  styleUrls: ['./kap-table.component.css'],
 
})

export class KapTableComponent implements OnInit{

 users:any[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
 

}


