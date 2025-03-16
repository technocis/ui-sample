import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import feather from 'feather-icons';
import { FleetcardComponent } from '../../shared/component/fleetcard/fleetcard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fleet-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FleetcardComponent],
  templateUrl: './fleet-list.component.html',
  styleUrl: './fleet-list.component.scss',
})
export class FleetListComponent {
  ngAfterViewInit() {
    feather.replace(); // Replaces <i> tags with SVG
  }

  fleetData = [
    {
      title: 'Fleet A',
      subtitle: '3 Plants',
      capacity: '150Kw Installed Capacity',
      locations: ['Location X', 'Location Y'],
    },
    {
      title: 'Fleet B',
      subtitle: '2 Plants',
      capacity: '100.56Kw Installed Capacity',
      locations: ['Place A', 'Place B'],
    },
  ];
}
