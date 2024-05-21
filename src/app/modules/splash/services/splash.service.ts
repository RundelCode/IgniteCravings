import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashService {
  private _loading: boolean = true;

  get loading(): boolean {
    return this._loading;
  }

  hideSplashScreen() {
    this._loading = false;
  }
}
