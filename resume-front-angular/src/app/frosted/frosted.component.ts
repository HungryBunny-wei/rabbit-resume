import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ra-frosted',
  templateUrl: './frosted.component.html',
  styleUrls: ['./frosted.component.less']
})
export class FrostedComponent {
  title = 'resume-front-angular';
  resume: Resume = {
    skills: [
      {title: 'Angular', level: 9},
      {title: 'Typescript', level: 4},
      {title: 'NodeJs', level: 9},
      {title: 'Deno', level: 5},
    ]
  };

  constructor(public httpClient: HttpClient) {
  }

}

export interface Resume {
  skills: Array<{ title: string, level: number }>;
}
