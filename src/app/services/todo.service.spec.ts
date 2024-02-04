import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { User } from '../models/user';
import { HttpClientModule } from '@angular/common/http';

describe('TodoService', () => {

   let service: TodoService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TodoService, HttpClientModule]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getUsers function', () => {
    expect(service.getUsers()).toBeTruthy();
  });

  it('should have deleteUser function', () => {
    const user : User = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
    expect(service.deleteUser(user)).toBeTruthy();
  });
});

