import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HalamaninputComponent } from './halamaninput/halamaninput.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Kevin Reynaldi';
  namajurusan = [];
  penjelasanjurusan = [];

constructor(private router:Router){}
    Input(){
      this.router.navigate(['/halamaninput']);

    }

    List(){
      this.router.navigate(['/halamanlist']);
    }

    Edit(){
      this.router.navigate(['/halamanedit']);

    }

    Pemasukan(){
      this.namajurusan.push(HalamaninputComponent.njurusan);
      this.penjelasanjurusan.push(HalamaninputComponent.pjurusan);

    }

}

