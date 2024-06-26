import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NGXLogger } from 'ngx-logger';
import { NotificationService } from 'src/app/core/services/notification.service';
import esLocale from '@fullcalendar/core/locales/es'; // Asegúrate de que la ruta sea correcta según la ubicación de tu instalación de FullCalendar

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: esLocale, // Configuración del idioma español
    plugins: [dayGridPlugin]
    
  };
  constructor(
    private notificationService:NotificationService,
    private titleService:Title,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Sinapptic - Dashboard');
    this.logger.log('Dashboard loaded');

    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });

}
}