import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../event.service";
import {ValidationService} from "../shared/validation.service";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
  providers: [EventService]
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;

  constructor(private eventService: EventService,
              public validationService: ValidationService) {
    setInterval(() => {
      this.eventForm.patchValue({
        currentDate: new Date().toLocaleDateString(),
        currentTime: new Date().toLocaleTimeString()
      })
    }, 1);
  }


  ngOnInit(): void {
    this.eventForm = new FormGroup({
      fio: new FormControl(null,Validators.required),
      department: new FormControl(null,Validators.required),
      listEvent: new FormControl(null,Validators.required),
      theme: new FormControl(null,Validators.required),
      description: new FormControl(null,Validators.required),
      currentDate: new FormControl(),
      currentTime: new FormControl()
    })
  }

  clear(){
    this.eventForm.reset()
  }

  submit() {
    if (this.eventForm.invalid) {
       this.validationService.markAllFormFieldsAsTouched(this.eventForm);
      return;
    }
    const event = {
      fio: this.eventForm.value.fio,
      department: this.eventForm.value.department,
      listEvent: this.eventForm.value.listEvent,
      theme: this.eventForm.value.theme,
      description: this.eventForm.value.description,
      currentDate: new Date(),
      currentTime: new Date()
    }
    this.eventService.postEvent(event).subscribe(() =>
      this.clear())

  }
}
