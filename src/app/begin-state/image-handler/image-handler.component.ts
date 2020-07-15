import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'image-handler',
  templateUrl: './image-handler.component.html',
  styleUrls: ['./image-handler.component.css']
})
export class ImageHandlerComponent implements OnInit {

  @ViewChild('imageUpload', {static: true}) imageUpload: ElementRef;
  imgUrl = new Array<string>();
  inputImgsNum = 0;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }


  uploadImage() {
    const fileUpload = this.imageUpload.nativeElement;

    fileUpload.onchange = () => {
      this.inputImgsNum = this.inputImgsNum + fileUpload.files.length;
      if (this.inputImgsNum < 5){
        let imagePath = fileUpload.files;
        for (let index = 0; index < fileUpload.files.length; index++) {  
          let reader = new FileReader();
          reader.readAsDataURL(fileUpload.files[index]); 
          reader.onload = (event: any) => { 
            if(this.imgUrl[index] === undefined){
              this.imgUrl[index] = event.target.result
            }else{
              this.imgUrl.push(event.target.result); 
            }
          } 
        }  
          //this.uploadFiles();  
        };  
      }
    fileUpload.click();  
  }

  uploadFile(file) {  
    const formData = new FormData();  
    formData.append('file', file.data);  
    file.inProgress = true;  
    this.uploadService.upload(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            file.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      }),  
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body);  
        }  
      });  
  }


  private uploadFiles() {  
    this.imageUpload.nativeElement.value = '';  
    this.imgUrl.forEach(file => {  
      this.uploadFile(file);  
    });  
  }

  getMessage(){
    if (this.inputImgsNum === 0) {
      return "Oops! Pictures of the Item must be at least one image.";
    }
    if (this.inputImgsNum > 4) {
      return "Please keep up to 4 images that best describe your item.";
    }
  }

  deleteImage(num: number){
    this.imgUrl.splice(num,1);
    this.inputImgsNum = this.inputImgsNum - 1;
    console.log("length : " + this.imgUrl.length)
  }
}
