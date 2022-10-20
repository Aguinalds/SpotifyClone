import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './player.routes';
import {RouterModule} from '@angular/router'
import { PainelEsquerdoComponent } from 'src/app/componentes/painel-esquerdo/painel-esquerdo.component';



@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
