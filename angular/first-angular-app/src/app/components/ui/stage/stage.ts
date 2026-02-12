import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stage',
  imports: [],
  templateUrl: './stage.html',
  styleUrl: './stage.scss',
})
export class Stage {
  title = input.required<string>();
  subtitle = input<string>();
}
