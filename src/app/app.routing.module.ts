import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImageWorkspaceComponent} from './image-workspace/image-workspace.component';
import {ThumbnailComponent} from './image-workspace/thumbnail/thumbnail.component';
import {PreviewComponent} from './image-workspace/preview/preview.component';
import {TDAImageResolverService} from './image-workspace/tdaimage-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/images', pathMatch: 'full'},
  {
    path: 'images',
    component: ImageWorkspaceComponent,
    children: [
      {
        path: ':id',
        component: PreviewComponent,
        // canDeactivate: [CanDeactivateGuard],
        resolve: {
          tdaImage: TDAImageResolverService
        }
      }
    ]
  },
  {path: '**', redirectTo: '/images'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
