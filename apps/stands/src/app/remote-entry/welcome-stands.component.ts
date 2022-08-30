import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'stands-welcome',
  template: `
    <div>{{ localeId }}</div>
    <div>{{ translationMessage }}</div>
  `
})
export class WelcomeStandsComponent {
  public translationMessage = $localize`Welcome Stands`;
  constructor(@Inject(LOCALE_ID) public readonly localeId: string) {}
}
