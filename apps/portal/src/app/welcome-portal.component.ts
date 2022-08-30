import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'mf-i18n-nx-welcome',
  template: `
    <div>{{ localeId }}</div>
    <div>{{ translationMessage }}</div>
  `
})
export class WelcomePortalComponent {
  public translationMessage = $localize`Welcome Portal`;
  constructor(@Inject(LOCALE_ID) public readonly localeId: string) {}
}
