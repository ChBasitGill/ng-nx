import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cbg-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {}
