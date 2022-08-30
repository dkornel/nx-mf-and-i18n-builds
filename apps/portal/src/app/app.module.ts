import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomePortalComponent } from './welcome-portal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, WelcomePortalComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'stands',
          loadChildren: () =>
            import('stands/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          component: WelcomePortalComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
