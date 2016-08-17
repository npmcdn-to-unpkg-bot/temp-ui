import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  open: boolean;
  multiple: boolean = true;
  pick: any = [];

  items = [
    { value: 'Item 1', icon: 'kanban' },
    { value: 'Item 2', icon: 'side_list' },
    { value: 'Item 3', icon: 'table' },
    { value: 'Item 12', icon: 'kanban' },
    { value: 'Item 23', icon: 'side_list' },
    { value: 'Item 34', icon: 'table' },
    { value: 'Item 15', icon: 'kanban' },
    { value: 'Item 26', icon: 'side_list' },
    { value: 'Item 37', icon: 'table' },
  ];

  onToggle($event: Event) {
    $event.stopPropagation();
    this.open = true;
  }

  get pickLabel() {
    if (this.multiple) {
      return this.pick && this.pick.length ? `${this.pick.length} options selected` : 'Select option(s)';
    } else {
      return this.pick.value || 'Select an option';
    }
  }

  toggleMultiple() {
    this.multiple = !this.multiple;
    this.pick = this.multiple ? [] : '';
  }

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
