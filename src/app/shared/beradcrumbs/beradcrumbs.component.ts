import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-beradcrumbs',
  templateUrl: './beradcrumbs.component.html',
  styleUrls: ['./beradcrumbs.component.sass']
})
export class BeradcrumbsComponent implements OnInit {

  public titulo: string = '';
  constructor(private router: Router, private title: Title, private meta: Meta) {
    /* this.getDataRouter()
    .subscribe( data => {
        this.titulo = data.titulo;
        this.title.setTitle(this.titulo);

        const metaTag: MetaDefinition = {
          name: 'Descripcion',
          content: this.titulo
        };

        this.meta.addTag(metaTag);
      }); */
   }

  ngOnInit(): void {
  }

  /* getDataRouter(){
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd ) => event.snapshot.data )
    );
  } */

}
