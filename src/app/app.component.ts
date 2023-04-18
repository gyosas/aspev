import { Component } from '@angular/core';
import { ApiService } from './pages/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public someData: any[];

  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService.getSomeData().subscribe((data) => {
      this.someData = data;
    });
  }
}
