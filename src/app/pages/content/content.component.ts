import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover = 'https://placehold.co/400x200';
  contentTitle = 'Minha Noticia';
  contentDescription =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorem placeat. Aliquam praesentium totam nobis, laborum iure quae expedita repellendus, vel ab ipsam labore doloremque.';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get('id')));
  }
}
