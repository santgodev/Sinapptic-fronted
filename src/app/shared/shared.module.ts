import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ContentPlaceholderAnimationComponent } from './content-placeholder-animation/content-placeholder-animation.component';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { LayoutComponent } from './layout/layout.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu'; // Importar MatMenuModule

@NgModule({
    imports: [
        RouterModule,
        CustomMaterialModule,
        MatTableModule, // Asegúrate de que esté aquí si es necesario
        MatMenuModule, // Agregar el módulo de menú
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ContentPlaceholderAnimationComponent,
        LimitToPipe,
        LocalDatePipe,
        YesNoPipe,
        LayoutComponent,
        SpinnerComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CustomMaterialModule,
        MatTableModule,
        MatMenuModule, // Exportar el módulo de menú
        LimitToPipe,
        ContentPlaceholderAnimationComponent,
        LocalDatePipe,
        YesNoPipe,
        SpinnerComponent
    ]
})
export class SharedModule { }
