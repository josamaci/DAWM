import { Component, OnInit } from '@angular/core';
import { Notification } from 'rxjs';
import { FuenteService } from '../servicios/fuente.service';

interface Noticia {
  title: string;
  author: string;
  url_to_image:string;
  description:string;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {
  
  noticias:Noticia[] = []

  constructor(private fuenteService:FuenteService){
    fuenteService.obtenerDatos().subscribe(respuesta => {
      let noticiasApi = respuesta as any
      this.noticias = noticiasApi.noticias as Noticia[]
    })

  }

  ngOnInit(): void {
  }

}
