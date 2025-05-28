import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: Card[] = [
    {
      id: 1,
      name: 'EY Payroll Platform',
      summary: 'Enterprise payroll system built with .NET Core microservices and Angular.',
      description: 'Designed and developed a scalable enterprise payroll system using .NET Core microservices and Angular 16. Implemented secure communication between services using Azure Service Bus and RabbitMQ. Used Entity Framework Core for persistence and SQL Server for structured data storage. The solution supports high-volume processing, audit logging, and role-based access control, and was deployed using CI/CD pipelines on Azure DevOps.',
      projectLink: 'https://github.com/SurajK221b/ey-payroll',
      tags: [
        Tag.DOTNETCORE,
        Tag.EFCORE,
        Tag.MICROSERVICES,
        Tag.ANGULAR,
        Tag.TYPESCRIPT,
        Tag.SQLSERVER,
        Tag.RABBITMQ,
        Tag.AZURE,
        Tag.SERVICEBUS,
        Tag.AZUREDEVOPS
      ]
    },
    {
      id: 2,
      name: 'CentriCT–PGS Integration',
      summary: 'Data integration APIs using .NET Core and Azure Functions.',
      description: 'Built secure RESTful APIs using .NET Core and Azure Functions to synchronize Microsoft CentriCT data with internal systems. Designed scheduled triggers, data transformation, and retry mechanisms. Automated high-volume data flows to reduce manual work and ensure operational continuity, with version-controlled deployment pipelines in Azure DevOps.',
      projectLink: 'https://github.com/SurajK221b/centrict-integration',
      tags: [
        Tag.DOTNETCORE,
        Tag.SQLSERVER,
        Tag.RESTAPI,
        Tag.AZUREFUNCTIONS,
        Tag.AZURE,
        Tag.AZUREDEVOPS
      ]
    },
    {
      id: 3,
      name: 'PGS & QMS Portal – MVC Version',
      summary: 'Legacy ASP.NET MVC application for project and quality governance.',
      description: 'Built the original version of the PGS & QMS portal using ASP.NET MVC and SQL Server. Delivered core governance features including project tracking, quality audits, issue management, and document control. Implemented audit logging, custom reporting, and secure authentication workflows. Deployed and maintained through Azure DevOps pipelines.',
      projectLink: 'https://github.com/SurajK221b/pgs-qms-mvc',
      tags: [
        Tag.ASPNETMVC,
        Tag.SQLSERVER,
        Tag.RESTAPI,
        Tag.AZURESERVICE,
        Tag.AZUREDEVOPS
      ]
    },
    {
      id: 4,
      name: 'PGS & QMS Portal – Angular Upgrade',
      summary: 'Modernized governance portal using Angular and .NET Core microservices.',
      description: 'Migrated the legacy MVC system to a modern Angular and .NET Core microservices-based architecture. Enhanced UX with responsive layouts, dynamic dashboards, and token-based authentication. Backend microservices used EF Core and SQL Server with API-first development. CI/CD pipelines automated using Azure DevOps for seamless delivery and rollback.',
      projectLink: 'https://github.com/SurajK221b/pgs-qms-angular',
      tags: [
        Tag.DOTNETCORE,
        Tag.EFCORE,
        Tag.MICROSERVICES,
        Tag.ANGULAR,
        Tag.SQLSERVER,
        Tag.AZUREDEVOPS
      ]
    },
    {
      id: 5,
      name: 'RMS ETL Integration',
      summary: 'ETL pipeline for MyNextHire recruitment platform.',
      description: 'Developed an end-to-end ETL pipeline for recruitment data migration between MyNextHire and internal HR systems. Performed data cleansing, transformation, validation, and loading into SQL Server. Automated historical sync jobs and improved data reliability through logging, error tracking, and retry workflows. Delivered with CI/CD and version control on Azure DevOps.',
      projectLink: 'https://github.com/SurajK221b/rms-integration',
      tags: [
        Tag.ASPNETMVC,
        Tag.SQLSERVER,
        Tag.ETL,
        Tag.AZUREDEVOPS
      ]
    },
    {
      id: 6,
      name: 'Ventaforce MLM System',
      summary: 'Modular ASP.NET MVC platform for multi-level marketing.',
      description: 'Developed financial and compensation modules in the MLM system Ventaforce using ASP.NET MVC and SQL Server. Implemented e-wallets, business analytics, and customizable commission plans. Integrated REST APIs for external services like SMS and payment gateways. Ensured modularity and scalability for global client use.',
      projectLink: 'https://github.com/SurajK221b/ventaforce',
      tags: [
        Tag.ASPNETMVC,
        Tag.SQLSERVER,
        Tag.RESTAPI,
        Tag.HTML5,
        Tag.CSS3,
        Tag.JAVASCRIPT
      ]
    },
    {
      id: 7,
      name: 'C# Web Scraper',
      summary: 'Browser automation and data extraction using Selenium.',
      description: 'Built a custom C# application using Selenium WebDriver to automate interactions with dynamic websites. Extracted structured data from JavaScript-heavy pages and saved outputs in consumable formats for reporting. Used in internal tooling for client dashboards and recurring reports.',
      projectLink: 'https://github.com/SurajK221b/csharp-scraper',
      tags: [
        Tag.CSHARP,
        Tag.RESTAPI,
        Tag.SELENIUM
      ]
    },
    {
      id: 8,
      name: 'CrewzIT – Transport Locator',
      summary: 'Location-based crew and transport coordination system.',
      description: 'Implemented backend APIs and service logic for CrewzIT, a real-time coordination system for tour crews. Features included crew check-in tracking, ETA calculation using GPS data, and alerts. Built with ASP.NET MVC and Azure-hosted services using SQL Server for storage and Azure DevOps for CI/CD.',
      projectLink: 'https://github.com/SurajK221b/crewzit',
      tags: [
        Tag.ASPNETMVC,
        Tag.SQLSERVER,
        Tag.RESTAPI,
        Tag.AZURE,
        Tag.AZUREDEVOPS
      ]
    },
    {
      id: 9,
      name: 'HRMS Platform',
      summary: 'Human resource management system with full employee lifecycle.',
      description: 'Developed modules for employee onboarding, attendance, payroll, leave, and access control. Implemented role-based UI in Angular with secured API endpoints in ASP.NET Core. Used EF Core with SQL Server and followed layered architecture for maintainability. Delivered using Git and Azure DevOps pipelines.',
      projectLink: 'https://github.com/SurajK221b/hrms-system',
      tags: [
        Tag.DOTNETCORE,
        Tag.EFCORE,
        Tag.ANGULAR,
        Tag.SQLSERVER
      ]
    },
    {
  id: 10,
  name: 'Developer Portfolio Website',
  summary: 'Personal portfolio built with Angular, .NET API, and Visual Studio Dark theme.',
  description: 'Ongoing project showcasing personal projects, technical skills, and experience. Developed with Angular standalone components and integrated with a backend API using .NET Core. The design is aligned with Visual Studio Code Dark Theme for consistent developer branding. Implements modular SCSS styling, custom tag filtering, and route-based navigation. Optimized for responsiveness, accessibility, and code readability.',
  projectLink: 'https://github.com/SurajK221b/portfolio',
  tags: [
    Tag.DOTNETCORE,
    Tag.ANGULAR,
    Tag.TYPESCRIPT,
    Tag.HTML5,
    Tag.CSS3,
    Tag.RESTAPI,
    Tag.VSCODE,
    Tag.VISUALSTUDIO,
    Tag.GIT,
    Tag.GITHUB
  ]
}

  ];
}
