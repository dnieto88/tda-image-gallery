import {Component, Input, OnInit} from '@angular/core';
import {TDAImage} from '../shared/tdaimage';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() tdaImage: TDAImage;

  constructor() {
  }

  ngOnInit() {
  }

}
