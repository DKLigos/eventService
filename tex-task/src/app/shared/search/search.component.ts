import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {EventService} from "../../event.service";
import {debounceTime, distinctUntilChanged, switchMap, takeWhile} from "rxjs/operators";
import {ModalService} from "../../modal/modal.service";
import {RecordEvent} from "../interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [EventService]
})
export class SearchComponent implements OnInit {
  events$: Observable<RecordEvent[]>;
  private searchTerms = new Subject<string>();

  constructor(private eventService: EventService,
              private modalService: ModalService) { }

  search(term: string): void {
    if (term.length>=3){
      this.searchTerms.next(term);
    }else {
      this.searchTerms.next('');
    }
  }
  toggle(event) {
    this.modalService.updateData(event);
    this.modalService.open();
     this.searchTerms.next('');
  }
  ngOnInit(): void {
    this.events$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.eventService.searchEvent(term)),
    );
  }

}
