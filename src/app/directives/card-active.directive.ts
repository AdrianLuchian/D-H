import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCardActive]',
})
export class CardActiveDirective {
  @Input() activeClass: string = 'active';
  @Input() disabled: boolean = false;
  @Input() isActive: boolean = false;

  @Output() activeChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isActive']) {
      this.updateClass();
    }

    if (changes['disabled'] && this.disabled) {
      this.isActive = false;
      this.updateClass();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.disabled) {
      event.stopPropagation();
      return;
    }

    this.isActive = true;
    this.updateClass();
    this.activeChange.emit(this.isActive);
  }

  private updateClass() {
    if (this.isActive) {
      this.renderer.addClass(this.el.nativeElement, this.activeClass);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.activeClass);
    }
  }
}
