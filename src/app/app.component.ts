import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatorApp';
  toshow = '0'
  currvalue =''

  writetoinput(value:string){
    this.currvalue += value
    this.toshow = this.currvalue
  }

  equal() {
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
  }

  clear() {
    this.currvalue = ''
    this.toshow = '0'
  }

  back() {
    this.currvalue = this.currvalue.slice(0, -1)
    this.toshow = this.currvalue
    if(this.toshow == ''){
      this.toshow = '0'
    }
  }

  calcval (solve: any){
    if(solve.charAt(0) == '0'){
      solve = solve.slice(1,)
    }
    this.toshow = eval(solve)
  }
}
