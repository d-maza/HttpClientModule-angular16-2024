import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';



describe('TodoService', () => {
  let service: TodoService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getUsers function', () => {
    expect(service.getUsers).toBeTruthy();
  });

  it('should have deleteUser function', () => {
    expect(service.deleteUser).toBeTruthy();
  });

});
