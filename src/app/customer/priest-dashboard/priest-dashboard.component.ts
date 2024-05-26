import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-priest-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './priest-dashboard.component.html',
  styleUrl: './priest-dashboard.component.css'
})
export class PriestDashboardComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
