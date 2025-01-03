import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biz1Component } from './biz1.component';

describe('Biz1Component', () => {
  let component: Biz1Component;
  let fixture: ComponentFixture<Biz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biz1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Biz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
