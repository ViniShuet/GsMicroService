import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]',
  standalone: true
})
export class HoverBorderDirective {
  @Input('appHoverBorder') borderColor: string = '#007BFF'; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.borderColor}`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'border');
  }
}
