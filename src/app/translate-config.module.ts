import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './translate.service';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class TranslateConfigModule {

  /**
   * Initializes the TranslateService for language translation.
   * Sets the default language to English.
   *
   * @param translate - An instance of TranslateService used for handling translations.
   */
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }

}