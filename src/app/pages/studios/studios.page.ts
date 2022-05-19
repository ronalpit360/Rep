import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.page.html',
  styleUrls: ['./studios.page.scss'],
})
export class StudiosPage implements OnInit {
studioList:any=[];
  constructor(private fservice:FirestoreService) { }

  ngOnInit() {
    this.studioList= this.fservice.getStudioList().valueChanges();
  }

}
