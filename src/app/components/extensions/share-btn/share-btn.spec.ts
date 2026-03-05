import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBtn } from './share-btn';

describe('ShareBtn', () => {
  let component: ShareBtn;
  let fixture: ComponentFixture<ShareBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
