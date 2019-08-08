import { AvaService, SearchType } from './../services/ava.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-ava',
  templateUrl: './ava.page.html',
  styleUrls: ['./ava.page.scss'],
})
export class AvaPage implements OnInit {
  
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  items = [];
  count: number = 0;
  data : Observable<any>;
  url: String;

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  // dataList:any;
  constructor(private avaService: AvaService, public http:HttpClient) { 
    
  }
  
  ngOnInit() {
    // this.results = this.avaService.searchData('spider', this.type);
    // this.results = this.loadAva();
    // this.ionRefresh(event);
    this.getData();
  }
  getData(){
    var url = "http://103.255.240.80/cis/web/apps/api";
    this.data = this.http.get(url);
    this.data.subscribe(
      data => {this.results = data;}
    );
    return this.results;
  }




  loadAva(){
    return this.avaService.cariData();
  }


  ionRefresh(event) {
      console.log('Pull Event Triggered!');
      // this.data.subscribe(data => {
      //   this.results = this.getData();
      //   event.target.complete();
      // });

      setTimeout(() => {
        console.log('Async operation has ended');
        this.results = this.getData();
        event.target.complete();
      }, 2000);
  }

  loadInfinite(event) {
    setTimeout(() => {
      this.results = this.loadAva();
      event.target.complete();
      
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (this.dataList.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }
}
