import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {

  }

  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if(classObj[key] === true){
        this.element.nativeElement.classList.add(key)
      } else {
        this.element.nativeElement.classList.remove(key)
      }
    }
  }
}

/* //    setTimeout(() => {
  this.element.nativeElement.style.backgroundColor = this.backgroundColor;
}, 50); */
//NEVER DO THIS
