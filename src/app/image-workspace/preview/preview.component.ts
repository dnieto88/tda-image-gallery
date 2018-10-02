import {Component, Input, OnInit} from '@angular/core';
import {TDAImage} from '../shared/tdaimage';
import {ActivatedRoute} from '@angular/router';
import {TDAImageService} from '../shared/tdaimage.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() tdaImage: TDAImage;
  newComment: string;

  constructor(private route: ActivatedRoute, private tdaImageService: TDAImageService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { tdaImage: TDAImage }) => {
        this.tdaImage = data.tdaImage;
      });
  }

  rotateImage() {
    this.tdaImage.rotationDegrees += 90;
  }

  submitComment(newComment: string) {
    const tdaComment = {
      date: new Date(),
      content: newComment,
      user: 'tdaUser'
    };

    // Mock purposes only
    this.tdaImage.comments.push(tdaComment);

    // Service is fake so this is just doing nothing except resetting value
    this.tdaImageService.addComment(this.tdaImage.id, tdaComment).subscribe({
      next: () => {
      },
      error: () => {
        this.newComment = '';
      }
    });
  }

}
