import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

class Toolbox {
  $input: Subject<any>;
  output: any;
}

@Pipe({
  name: 'delay',
  pure: false
})
export class DelayPipe implements PipeTransform {

  private toolbox: 
  Toolbox[] = [];

  transform(value: any, id: string, duration: number = 1000): any {
    if (!this.toolbox[id]) {
      this.toolbox[id] = new Toolbox();
      this.toolbox[id].$input = new Subject();
      this.toolbox[id].$input.pipe(delay(duration)).subscribe(next => {
        this.toolbox[id].output = next;
      });
    }
    this.toolbox[id].$input.next(value);
    return this.toolbox[id].output;
  }

}
