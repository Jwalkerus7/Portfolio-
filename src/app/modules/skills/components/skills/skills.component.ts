import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../shared/models/skill';

    import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService: SkillsService;

  constructor(private skillsService: SkillsService) {
    this.dataService = this.skillsService;
  }

  ngOnInit(): void {
    this.dataService.getSkills().subscribe(skills => this.skills = skills);
  }
}