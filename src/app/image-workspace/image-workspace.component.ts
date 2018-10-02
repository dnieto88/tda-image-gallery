import {Component, OnInit} from '@angular/core';
import {TDAImageService} from './shared/tdaimage.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TDAImage} from './shared/tdaimage';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-image-workspace',
  templateUrl: './image-workspace.component.html',
  styleUrls: ['./image-workspace.component.css']
})
export class ImageWorkspaceComponent implements OnInit {
  thumbnails: Observable<TDAImage[]>;

  constructor(private tdaImageService: TDAImageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.thumbnails = this.route.paramMap.pipe(
      switchMap(params => {
        return this.tdaImageService.getAll();
      })
    );
  }

}
