import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Error Local Storage ', e);
    }
  }
  get(key: string): unknown {
    try {
      const localStorageItem = localStorage.getItem(key);
      return  localStorageItem ?JSON.parse(localStorageItem):null
    } catch (err) {
      console.error('not able to GET  THE ITEM', err);
      return null
    }
  }
}
