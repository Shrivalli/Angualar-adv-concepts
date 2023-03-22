import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <form method="post">
      <h1> {{firstnumber}} </h1>
      <div>
        <label for="uname" ><b> Username </b> </label>
        <input type="text" placeholder="Enter username" name="Uname"  required/>
      </div>
      <div>
        <label for="pwd" ><b> Password </b> </label>
        <input type="password" placeholder="Enter password" name="Pwd"  required/>
      </div>
      <div>
        <button type="submit"> Login </button>
      </div>
</form>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  firstnumber:number;
  constructor() { 
    this.firstnumber=10;
  }

  ngOnInit(): void {
  }

}
