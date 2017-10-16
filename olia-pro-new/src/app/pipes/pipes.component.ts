import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2017,3,24),
    text: `Lore@@m ipsum## dolor & sit amet, consectetur adipisicing elit. Accusamus aliquam architecto, aspernatur autem cum
           exercitationem maiores molestiae neque nesciunt numquam quia quisquam recusandae rerum sint soluta ullam vero
           voluptate voluptatum.`

  }
}
