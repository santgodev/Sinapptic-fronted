import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NGXLogger } from 'ngx-logger';
import { usuario } from 'src/app/core/models/moduloModel';
import { ModuloService } from 'src/app/core/services/modulo.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usuarios: usuario[] = [];
  constructor(
    private usuario: ModuloService,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Users');
    this.logger.log('Users loaded');
    this.usuario.listarUsuario().subscribe((usuarios) => {
      this.usuarios=usuarios;

    })
  }
}
