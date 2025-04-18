import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent {
  works = [
    {
      title: 'Desenvolvedor .NET Squad Gestão',
      desc: 'Desenvolvimento de aplicações web com Angular, c#, .NET, ASP NET.',
      period: '2024 - Presente',
      tools: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'c#',
        '.Net',
        ' Azure',
        'SQL Server',
        'worker service',
        'service bus',
        'storage account',
        'blob storage',
        'Azure function',
        'Azure DevOps',
        'Entity Framework',
        'Postman',
        'Swagger',
        'Dapper',
      ],
      logo: '/assets/wiz_co_logo.jpg',
    },
    {
      title: 'Desenvolvedor .NET - Squad Vendas',
      desc: 'Desenvolvimento de APIs RESTful com .Net e ASP Net.',
      period: '2023 - 2024',
      tools: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'c#',
        '.Net',
        ' Azure',
        'SQL Server',
        'worker service',
        'service bus',
        'storage account',
        'blob storage',
        'Azure function',
        'Azure DevOps',
        'Entity Framework',
        'Postman',
        'Swagger',
        'Dapper',
      ],
      logo: '/assets/wiz_co_logo.jpg',
    },
    {
      title: 'Freelancer',
      desc: 'Criação de site estático, 2º tabelionato de notas Luziânia-go .',
      period: '2021 - 2023',
      tools: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap'],
      logo: '/assets/cartorio.jpg',
    },
  ];
}
