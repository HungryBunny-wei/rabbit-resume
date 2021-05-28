import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ra-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.less']
})
export class NormalComponent {
  title = 'resume-front-angular';
  resume: Resume = {
    skills: [
      {title: 'Angular', level: 9},
      {title: 'Typescript', level: 4},
      {title: 'NodeJs', level: 9},
      {title: 'Deno', level: 5},
    ],
    educations: [
      {degreeTitle: '中山中专', universityName: '计算机网络', time: '2028 - 2030'},
    ]
  };

  constructor(
    public httpClient: HttpClient,
    ) {
  }
}

export interface Resume {
  skills: Array<{ title: string, level: number }>;
  educations: Array<{degreeTitle: string, universityName: string, time: string}>;
}
