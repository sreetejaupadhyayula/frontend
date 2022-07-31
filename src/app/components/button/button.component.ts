import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonName = "Sample button";
  @Input() statusType = "google";
  @Output() onBtnClick =  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onTextBtnClick = (value: string) => {
    this.onBtnClick.emit(value);
  }

}
