import {TDAImage} from './tdaimage';


function randomNumber() {
  return Math.floor(Math.random() * Math.floor(4)) + 1;
}

function lotsOfThumbnails(): TDAImage[] {
  const thumbNails: TDAImage[] = [];

  for (let i = 0; i < 1000; i++) {
    thumbNails.push({
      id: i,
      rotationDegrees: 0,
      path: `assets/image${randomNumber()}.png`,
      comments: []
    });
  }

  return thumbNails;
}


// export const THUMBNAILS: TDAImage[] = [
//   {id: 1, path: 'assets/image1.png', comments: []},
//   {id: 2, path: 'assets/image2.png', comments: []},
//   {id: 3, path: 'assets/image3.png', comments: []}
//   {id: 4, path: 'assets/image4.png', comments: []},
//   {id: 5, path: 'assets/image5.png', comments: []}
// ];

export const THUMBNAILS: TDAImage[] = lotsOfThumbnails();
