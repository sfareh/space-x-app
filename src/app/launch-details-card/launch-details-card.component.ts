import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-launch-details-card',
  templateUrl: './launch-details-card.component.html',
  styleUrls: ['./launch-details-card.component.css']
})
export class LaunchDetailsCardComponent implements OnInit, OnChanges {
  // get data from parent component
 @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
