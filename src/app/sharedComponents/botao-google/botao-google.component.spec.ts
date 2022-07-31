import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoGoogleComponent } from './botao-google.component';

describe('BotaoGoogleComponent', () => {
  let component: BotaoGoogleComponent;
  let fixture: ComponentFixture<BotaoGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
