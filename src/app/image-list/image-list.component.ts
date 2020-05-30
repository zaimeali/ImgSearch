import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

// import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;

  constructor(private _imageService: ImageService) { }

  handleSuccess(data){
    this.imagesFound = true;
    console.log(data.hits);
    this.images = data.hits;
  }

  handleError(error){
    console.log(error);
  }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe((data) => {
      this.handleSuccess(data)
    }, (error) => {
      this.handleError(error)
    }, () => {
      this.searching = false
    });
  }

  ngOnInit(): void {
  }

}
