import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {RecordEvent} from "../shared/interface";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: BehaviorSubject<'open' | 'close'> =
    new BehaviorSubject('close');

  private dataSource: BehaviorSubject<RecordEvent> = new BehaviorSubject<RecordEvent>(null);
  public currentData: Observable<RecordEvent> = this.dataSource.asObservable();


  updateData(data): void {
    this.dataSource.next(data);
  }

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
