import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { DescriptionComponent } from '../../components/description/description.component';
import { ToolsComponent } from '../../components/tools/tools.component';
import { WorksComponent } from '../../components/works/works.component';
import { ProjectComponent } from '../../components/project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    MenuComponent,
    DescriptionComponent,
    ToolsComponent,
    WorksComponent,
    ProjectComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {}
