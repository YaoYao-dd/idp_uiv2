import { TestBed } from '@angular/core/testing';

import { PostsvcService } from './postsvc.service';

describe('PostsvcService', () => {
  let service: PostsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
