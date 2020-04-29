import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ProductRegistrationService } from 'src/app/services/data-sharing/product-registration.service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;

  constructor(private productRegistration: ProductRegistrationService) {
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
    
    
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
 
    this.response = '';
 
    this.uploader.response.subscribe( res => this.response = res );
   }

  ngOnInit() {
    console.log('Proizvod ', this.productRegistration.currentProduct.subscribe(product => console.log(product))) //.subscribe(product => console.log('Proiznod ', product));
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  stepTwo(){
    console.log('Nazad');
  }
  
  stepThree() {
    console.log('Radi stepThree');
  }

}
