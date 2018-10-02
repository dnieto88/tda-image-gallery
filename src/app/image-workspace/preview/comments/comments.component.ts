import {Component, Input, OnInit } from '@angular/core';
import {TDAComment} from '../../shared/tdacomment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments: TDAComment[];
  ngOnInit() {
  }
}
