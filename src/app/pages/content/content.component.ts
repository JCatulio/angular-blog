import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  photoCover = 'https://placehold.co/400x200';
  contentTitle = 'Minha Noticia';
  contentDescription =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorem placeat. Aliquam praesentium totam nobis, laborum iure quae expedita repellendus, vel ab ipsam labore doloremque.';
}
