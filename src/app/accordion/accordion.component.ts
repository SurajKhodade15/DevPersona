import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  expandedSections: { [key: string]: boolean } = {
    highlights: false,
    technologies: false,
    experience: false,
    globant: false,
    citiustech: false,
    independent: false,
    fullstack: false,
    education: false,
    languages: false,
    research: false
  };

  toggleSection(sectionName: string): void {
    this.expandedSections[sectionName] = !this.expandedSections[sectionName];
  }
}