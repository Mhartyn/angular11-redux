import { Pipe, PipeTransform } from '@angular/core';
import enumServicio from 'src/app/config/enumServicio';
import enumImagenes from '../config/enumImagenes';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: enumImagenes = enumImagenes.usuario): unknown {
    let url = `${enumServicio.url_services}/${enumServicio.url_services_descarga_archivo}`;

    if (!img) {
      img = '';
    }

    if (img.indexOf('https') > -1) {
      return img;
    }

    url = `${url}/${tipo}/${img}`;
    return url;
  }

}
