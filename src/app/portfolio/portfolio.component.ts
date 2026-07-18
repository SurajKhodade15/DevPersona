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
      name: 'AutoShift - Intelligent Shift Automation Platform',
      summary: 'Enterprise Agentic AI platform for workforce scheduling and shift lifecycle automation.',
      description: 'Designed and developed AutoShift, an enterprise-grade Agentic AI platform for intelligent workforce scheduling automation. Built end-to-end AI pipelines using Python, AWS Bedrock (Claude Sonnet 4.5), RAG, Qdrant Vector Database, RabbitMQ, and Docker to process natural language emails, extract shift details, match business entities, and automate shift lifecycle operations. Implemented Human-in-the-Loop (HIL) workflows, correction learning, thread tracking, observability, and enterprise API integrations to improve automation accuracy, scalability, and operational efficiency.',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.AISERVICE, Tag.QDRANT, Tag.AWSBEDROCK, Tag.GENAI, Tag.AGENTIC, Tag.RABBITMQ, Tag.DOCKER]
    },
    {
      id: 2,
      name: 'Employee-Project Alignment Engine (Recommender)',
      summary: 'Recommender that semantically matches employee skills to project needs.',
      description: 'Semantic search recommender using embeddings and transformer-based encoders to match employee profiles (skills, experience, certifications) with project requirements. Includes taxonomic skill normalization, confidence scoring, and a human-in-the-loop review workflow. Built with Python, vector stores for retrieval, and lightweight LLM prompts for explainability. Impact: reduced time-to-staff and improved match quality across pilots. Focus: ML, NLP, LLM, MCP, Agentic AI.',
      projectLink: 'https://github.com/SurajKhodade15/employee_project_allignment_engine_nlp',
      tags: [Tag.PYTHON, Tag.NLP, Tag.LLM, Tag.GENAI, Tag.MACHINELEARNING, Tag.GIT, Tag.MCP]
    },
    {
      id: 3,
      name: 'Payroll Gen AI Query Assistant',
      summary: 'LLM-powered assistant for payroll and HR queries with document retrieval.',
      description: 'LLM-driven conversational assistant for payroll and HR queries. Combines vector-store retrieval over payroll documents, redaction/compliance controls, and a safe-generation pipeline. Built as a modular agentic service with audit logs and role-based access. Reduced HR ticket volume by routing common queries to the assistant. Focus: Gen AI, LLM, Agentic AI, MCP.',
      projectLink: 'https://github.com/SurajKhodade15/payroll_query_assistance_genai',
      tags: [Tag.PYTHON, Tag.FASTAPI, Tag.LLM, Tag.GENAI, Tag.AGENTIC, Tag.GIT]
    },
    {
      id: 4,
      name: 'Invoice Summarization and Chatbot Assistant',
      summary: 'Generative AI assistant to summarize invoices and answer finance queries.',
      description: 'Generative AI pipeline to extract structured line-items from invoices, produce concise summaries, and power a conversational assistant for finance teams. Includes OCR, field extraction, confidence scores, and XLS/CSV export. Uses transformer models for abstractive summarization and retrieval-augmented generation for Q&A. Focus: Gen AI, NLP, LLM.',
      projectLink: 'https://github.com/SurajKhodade15/invoice_summarization_genai',
      tags: [Tag.PYTHON, Tag.GENAI, Tag.LLM, Tag.FASTAPI, Tag.PANDAS, Tag.GIT]
    },
    {
      id: 5,
      name: 'Generative AI–Powered Web Data Summarization',
      summary: 'Pipeline to scrape, process and summarize web content using LLMs.',
      description: 'End-to-end pipeline that scrapes web proposals and product pages, cleans and normalizes content, and uses LLMs to generate structured summaries (title, scope, budget, deadlines). Includes rate-limited scrapers, heuristics for noise reduction, and vector-indexed retrieval for incremental updates. Focus: Gen AI, MCP, LLM, Data Engineering.',
      projectLink: 'https://github.com/SurajKhodade15/web_data_summarization_genai',
      tags: [Tag.PYTHON, Tag.BEAUTIFULSOUP, Tag.GENAI, Tag.LLM, Tag.MCP, Tag.GIT]
    },
    {
      id: 6,
      name: 'US Healthcare Insurance Claim Fraud Analysis',
      summary: 'NLP + ML classifiers to detect potentially fraudulent insurance claims.',
      description: 'Hybrid NLP and ML system for insurance claim fraud detection. Extracted textual and numerical features from claims, applied NLP embeddings and engineered domain features, then trained ensemble classifiers (XGBoost, CatBoost). Provided analyst-facing dashboards and active learning loops to improve label quality. Focus: ML, NLP.',
      projectLink: 'https://github.com/SurajKhodade15/us-healthcare-claims-fraud-ml',
      tags: [Tag.PYTHON, Tag.SCIKITLEARN, Tag.NLP, Tag.PANDAS, Tag.MACHINELEARNING, Tag.MATPLOTLIB, Tag.GIT]
    },
    {
      id: 7,
      name: 'Employee Feedback Sentiment Analysis',
      summary: 'NLP-based sentiment classifier for employee feedback and surveys.',
      description: 'NLP pipeline for sentiment classification and topic extraction from employee feedback and exit interviews. Combines transformer embeddings, rule-based redaction, and an explainability layer to surface drivers of sentiment. Delivered dashboards to HR for action plans. Focus: NLP, ML.',
      projectLink: 'https://github.com/SurajKhodade15/employee-feedback-sentiment',
      tags: [Tag.PYTHON, Tag.SCIKITLEARN, Tag.NLP, Tag.SPACY, Tag.JUPYTER, Tag.GIT]
    },
    {
      id: 8,
      name: 'NLP Sentiment Analysis Engine',
      summary: 'Transformer-based multilingual sentiment & emotion detection.',
      description: 'Transformer-based sentiment engine with multilingual support, emotion detection, and topic modeling. Designed for streaming social data and long-form feedback via chunking and RAG (retrieval-augmented generation) where helpful. Focus: NLP, LLM.',
      projectLink: 'https://github.com/SurajKhodade15/nlp-sentiment',
      tags: [Tag.PYTHON, Tag.NLP, Tag.LLM, Tag.SPACY, Tag.FASTAPI, Tag.JUPYTER, Tag.GIT]
    },
    {
      id: 9,
      name: 'AI Portfolio Website',
      summary: 'Personal portfolio showcasing AI/ML expertise with modern Angular architecture.',
      description: 'Modern portfolio built with Angular standalone components to showcase case studies, selected public projects, and recruiter-focused career highlights. Includes responsive UI, reusable cards, and accessible interaction patterns.',
      projectLink: 'https://github.com/SurajKhodade15/DevPersona',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.GIT, Tag.GITHUB]
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio');
  }
  
  // Keep explicit portfolio order managed by id (AutoShift first).
  get sortedProjects(): Card[] {
    return this.projects
      .slice()
      .sort((a, b) => (a.id || 0) - (b.id || 0));
  }
  }
