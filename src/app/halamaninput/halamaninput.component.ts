import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import appComponentHtml from '../app.component.html';

@Component({
  selector: 'app-halamaninput',
  templateUrl: './halamaninput.component.html',
  styleUrls: ['./halamaninput.component.css']
})
export class HalamaninputComponent implements OnInit {

  njurusan ="";
  pjurusan="";
  a ="";
  b ="";

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
 
    
  }

  Masukan(){
 this.njurusan = this.a;
 this.pjurusan = this.b;

  }


}