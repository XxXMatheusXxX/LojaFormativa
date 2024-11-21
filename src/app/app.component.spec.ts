import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });
  it('1. Deve verificar se o componente foi criado', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('2. O texto do h1 deve ser "Popular Products ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Popular Products');
  });
 
  it('3. Verificando a cor do botão', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('.btn');
    const buttonStyle = window.getComputedStyle(buttonElement);
    expect(buttonStyle.backgroundColor).toBe('rgb(255, 100, 82)');
  });
  it('4. Verificando o p', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('The insole are Confortable so you can wear them everyday');
  });

});
