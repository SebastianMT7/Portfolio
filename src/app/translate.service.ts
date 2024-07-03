import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private data: any = {};

  constructor(private http: HttpClient) { }

  use(lang: string): Observable<any> {
    return this.http.get(`/assets/i18n/${lang}.json`).pipe(
      map((res: any) => {
        this.data = res;
        return res;
      })
    );
  }
 

  get(key: string): string {
    return this.data[key] || key;
  }
}