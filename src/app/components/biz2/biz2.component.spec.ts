import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biz2Component } from './biz2.component';

describe('Biz2Component', () => {
  let component: Biz2Component;
  let fixture: ComponentFixture<Biz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biz2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Biz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
