import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbackSetupComponent } from './cardback-setup.component';

describe('CardbackSetupComponent', () => {
  let component: CardbackSetupComponent;
  let fixture: ComponentFixture<CardbackSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardbackSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbackSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
