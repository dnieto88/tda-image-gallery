import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageWorkspaceComponent } from './image-workspace/image-workspace.component';
import { ThumbnailComponent } from './image-workspace/thumbnail/thumbnail.component';
import { PreviewComponent } from './image-workspace/preview/preview.component';
import {AppRoutingModule} from './app.routing.module';
import {CommentComponent} from './image-workspace/preview/comment/comment.component';
import {CommentsComponent} from './image-workspace/preview/comments/comments.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImageWorkspaceComponent,
    ThumbnailComponent,
    PreviewComponent,
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
