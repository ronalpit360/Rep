import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Song} from "../../song";
import { RecordingStudios } from 'src/app/recording-studios';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( public firestore:AngularFirestore) { }

  createSong(albumName:string, artistName:string, songDescription:string,songName:string): Promise<void>
  { const id= this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({id,albumName,artistName,songDescription,songName});
  }

  getSongList():AngularFirestoreCollection<Song>{
   return this.firestore.collection('songList');
  } 

  getSongtDetail(path: string, songId: string){
    const value=this.firestore.collection(path);
    return value.doc(songId).valueChanges(); 
   }
   
   deleteSong(songId: string):Promise<void>{
    return this.firestore.doc(`songList/${songId}`).delete();
   }
   updateSong(songId: string,albumName:string, artistName:string, songDescription:string,songName:string):Promise<void>{
    return this.firestore.doc(`songList/${songId}`).update({albumName,artistName,songDescription,songName});
   }
   createStudio(studioName:string, type_of_melody:string, number_of_cabins:number,owner:string): Promise<void>
   { const id= this.firestore.createId();
     return this.firestore.doc(`studioList/${id}`).set({id,studioName,type_of_melody,number_of_cabins,owner});
     
   }
 
   getStudioList():AngularFirestoreCollection<RecordingStudios>{
    return this.firestore.collection('studioList');
   } 
 
   getStudioDetail(path: string, studioId: string){
     const value=this.firestore.collection(path);
     return value.doc(studioId).valueChanges(); 
    }
    
    deleteStudio(studioId: string):Promise<void>{
     return this.firestore.doc(`studioList/${studioId}`).delete();
    }
    updateStudio(studioId: string,studioName:string, type_of_melody:string, number_of_cabins:number,owner:string):Promise<void>{
     return this.firestore.doc(`studioList/${studioId}`).update({studioName,type_of_melody,number_of_cabins,owner});
    }
}
