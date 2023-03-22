import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
username:string;
password:string;
@ViewChild('nameRef') nameElementRef:ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }
  ngOnInit(): void {
  }

  login()
  {
    console.log(this.username,this.password);
  }

}
