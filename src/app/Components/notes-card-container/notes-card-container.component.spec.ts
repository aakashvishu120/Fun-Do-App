import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCardContainerComponent } from './notes-card-container.component';

describe('NotesCardContainerComponent', () => {
  let component: NotesCardContainerComponent;
  let fixture: ComponentFixture<NotesCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesCardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
