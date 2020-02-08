import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  key = "563492ad6f91700001000001bf8dd6e419824b36bed7191b2185f2f7";
  url = "https://api.pexels.com/v1/search";

  constructor(private http: HttpClient) { }

  GetPhotos(subject: string) {
    return this.http.get<IPhotoObject>(`${this.url}?query=${subject}+query&per_page=1&page=1`, {
      headers: {"Authorization": this.key}
    });
  }
}

export interface Src {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  src: Src;
}

export interface IPhotoObject {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photo[];
}