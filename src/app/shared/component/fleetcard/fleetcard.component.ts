import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import feather from 'feather-icons';

@Component({
  selector: 'app-fleetcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fleetcard.component.html',
  styleUrl: './fleetcard.component.scss',
})
export class FleetcardComponent implements AfterViewInit {
  @Input() title: string = 'Fleet Name';
  @Input() subtitle: string = '';
  @Input() capacity: string = '';
  @Input() locations: string[] = [];

  ngAfterViewInit() {
    feather.replace(); // Initialize Feather Icons
  }
}
