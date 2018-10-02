import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';
import {TDAImage} from './shared/tdaimage';
import {TDAImageService} from './shared/tdaimage.service';

@Injectable({
  providedIn: 'root',
})
export class TDAImageResolverService implements Resolve<TDAImage> {
  constructor(private tdaImageService: TDAImageService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TDAImage> | Observable<never> {
    console.log('resolver');
    const id = +route.paramMap.get('id');

    return this.tdaImageService.getById(id).pipe(
      take(1),
      mergeMap(tdaImage => {
        if (tdaImage) {
          return of(tdaImage);
        } else { // id not found
          this.router.navigate(['/images']);
          return EMPTY;
        }
      })
    );
  }
}
