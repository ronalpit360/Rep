import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-detailstudio',
  templateUrl: './detailstudio.page.html',
  styleUrls: ['./detailstudio.page.scss'],
})
export class DetailstudioPage implements OnInit {
  studio: any={}; 
  studioId:any; 
  constructor(public fs:FirestoreService,
    public r:Router,
    public ac:AlertController,
    public ar:ActivatedRoute) { }

  ngOnInit() {
    this.studioId= this.ar.snapshot.paramMap.get('id');
    console.log("El id es", this.studioId);
    const des_subscribir= this.fs.getSongtDetail('studioList',this.studioId).subscribe( result => {
      this.studio=result; 
      des_subscribir.unsubscribe();
      
      });
  }
  async deleteStudio(){
    const alert= await this.ac.create({message: 'Estas seguro que quieres eliminar el estudio',buttons: [
      { text: 'Cancel', role: 'cancel', handler: blah=>{
  
        console.log('Comfirm Cancel:  blah');
      },
      },
      {
        text: 'Okay', handler: ()=>{
        this.fs.deleteStudio(this.studioId).then(()=>{
        this.r.navigateByUrl('');
        });
  
        },
      },],
    });
    await alert.present();
    }
     
}
