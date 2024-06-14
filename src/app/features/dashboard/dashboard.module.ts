import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [DashboardHomeComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        FullCalendarModule
    ]
})
export class DashboardModule { }
