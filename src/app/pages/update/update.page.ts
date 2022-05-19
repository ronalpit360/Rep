import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { LoadingController} from "@ionic/angular";
import {FormBuilder,Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  song: any={}; 
  songId:any; 
  
  constructor(public fs:FirestoreService,
    public r:Router,
    public lc:LoadingController,
    public ac:AlertController,
    public fb:FormBuilder,
    public ar:ActivatedRoute) { 
      this.updateSongForm=fb.group({
        albumName:['',Validators.required],
        artistName:['',Validators.required],
        songDescription:['',Validators.required],
        songName:['',Validators.required], 
        });
   
    }
    public updateSongForm: any;  
    
  ngOnInit() {
    this.songId= this.ar.snapshot.paramMap.get('id');
    console.log("El id es", this.songId);
    const des_subscribir= this.fs.getSongtDetail('songList',this.songId).subscribe( result => {
      this.song=result; 
      des_subscribir.unsubscribe();
      
      });
  }
  async updateSong(){
    const loading= await this.lc.create();
    const albumName= this.updateSongForm.value.albumName;
    const artistName= this.updateSongForm.value.artistName;
    const songDescription= this.updateSongForm.value.songDescription;
    const songName= this.updateSongForm.value.songName;
    this.fs.updateSong(this.songId,albumName,artistName,songDescription,songName).then(
      ()=>{loading.dismiss().then(()=>
       {this.r.navigateByUrl('/home'); });  },
      error =>{
        console.error(error);
      }); 
      return await loading.present();
      }
}
