import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo-canvas',
  template: `<canvas #canvas style="width: 100%; height: 100%; background-color: #ccc;"></canvas>`
})
export class DemoCanvasComponent implements AfterViewInit {
  @ViewChild('canvas') canvasEl: ElementRef<HTMLCanvasElement>;

  constructor(private hostElement: ElementRef) {}

  async ngAfterViewInit() {
    const content = this.hostElement.nativeElement.closest('ion-content');
    if (content) {
      await content.componentOnReady();
    }
    this.printCanvasSize('canvas size on view init');
    setTimeout(() => this.printCanvasSize('canvas size after timeout'), 500);
  }

  printCanvasSize(message: string) {
      const width = this.canvasEl.nativeElement.offsetWidth;
      const height = this.canvasEl.nativeElement.offsetHeight;
      console.log(`${message}: ${width}x${height}`);
  }
}
