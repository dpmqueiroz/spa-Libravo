import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletarUsuarioComponent } from './dialog-deletar-usuario.component';

describe('DialogDeletarUsuarioComponent', () => {
  let component: DialogDeletarUsuarioComponent;
  let fixture: ComponentFixture<DialogDeletarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeletarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeletarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
