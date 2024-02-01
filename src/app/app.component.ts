import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Angular 16 HTTP Client Example';

  listUsers: User[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.todoService.getUsers()
    .subscribe({
      next: (users : User[]) => {
        this.listUsers = users;
      }
    });
  }

  deleteUser(user: User) {

    this.todoService.deleteUser(user)
    .subscribe({
      next: () => {
          this.listUsers = this.listUsers.filter(u => u.id !== user.id);
      }
    });
  }

  generateAvatar(user: User) {
    return `https://api.dicebear.com/7.x/pixel-art/svg?seed={${user.name}`;
   }


}

