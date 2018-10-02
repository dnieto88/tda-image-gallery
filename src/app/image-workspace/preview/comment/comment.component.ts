import {Component, Input, OnInit} from '@angular/core';
import {TDAComment} from '../../shared/tdacomment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: TDAComment;

  ngOnInit() {
  }

}
