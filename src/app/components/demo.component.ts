import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent {
  constructor(private ts: ToastrService) {}

  notify: string;
  config: any = { leftTime: 10, notify: [2, 5] };
  onStart() {
    this.notify = '开始鸟';
  }
  onFinished() {
    this.notify = '结束了！';
  }
  onNotify(time: number) {
    this.notify = `在${time}ms时通知了一下`;
  }

  stopConfig: any = { stopTime: new Date().getTime() + 1000 * 30 };
  resetStop() {
    this.stopConfig = { stopTime: new Date().getTime() + 1000 * 30 };
  }

  onEvent(value: any) {
    console.log('event', value);
  }

  @ViewChild('countdown') counter: CountdownComponent;
  resetTimer() {
    this.counter.restart();
  }
}
