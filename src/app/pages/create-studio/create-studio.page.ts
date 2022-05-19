import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import { LoadingController,AlertController} from "@ionic/angular";
import {FirestoreService  } from "../../services/data/firestore.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-create-studio',
  templateUrl: './create-studio.page.html',
  styleUrls: ['./create-studio.page.scss'],
})
export class CreateStudioPage implements OnInit {
  public createStudioForm: any;  
  constructor(public lc:LoadingController, 
    public ac:AlertController, 
    public fs:FirestoreService,
    public fb:FormBuilder,
    public r:Router) {
      this.createStudioForm=fb.group({
        studioName:['',Validators.required],
        type_of_melody:['',Validators.required],
        number_of_cabins:['',Validators.required],
        owner:['',Validators.required], 
        });
   
     }

  ngOnInit() {
 
  }
 async createStudio(){
    const loading= await this.lc.create();
    const studioName= this.createStudioForm.value.studioName;
    const type_of_melody= this.createStudioForm.value.type_of_melody;
    const number_of_cabins= this.createStudioForm.value.number_of_cabins;
    const owner= this.createStudioForm.value.owner;
    this.fs.createStudio(studioName,type_of_melody,number_of_cabins,owner).then(
      ()=>{loading.dismiss().then(()=>
       {this.r.navigateByUrl('/studios'); });  },
      error =>{
        console.error(error);
      }); 
      return await loading.present();
  }
}
