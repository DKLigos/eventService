import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscribable, Subscription} from "rxjs";
import {ModalService} from "./modal.service";
import {switchMap} from "rxjs/operators";
import {RecordEvent} from "../shared/interface";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  public data: RecordEvent;
  private dataSub: Subscription;

  display$: Observable<'open' | 'close'>;


  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
   this.dataSub = this.modalService.currentData.subscribe(data => this.data = data);
  }

  close() {
    this.modalService.close();
  }
  ngOnDestroy() {
    if (this.dataSub){
      this.dataSub.unsubscribe()
    }
  }

}
