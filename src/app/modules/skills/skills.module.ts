import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './components/skills/skills.component'; 
import { SkillsService } from './services/skills.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SkillsComponent],
  exports: [SkillsComponent],
  providers: [SkillsService]
})
export class SkillsModule { }