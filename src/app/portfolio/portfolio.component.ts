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
    // Reordered and updated to match requested sequence; descriptions expanded and tags enriched
    {
      id: 1,
      name: 'Employee-Project Alignment Engine (Recommender)',
      summary: 'Recommender that semantically matches employee skills to project needs.',
      description: 'Semantic search recommender using embeddings and transformer-based encoders to match employee profiles (skills, experience, certifications) with project requirements. Includes taxonomic skill normalization, confidence scoring, and a human-in-the-loop review workflow. Built with Python, vector stores for retrieval, and lightweight LLM prompts for explainability. Impact: reduced time-to-staff and improved match quality across pilots. Focus: ML, NLP, LLM, MCP, Agentic AI.',
      projectLink: 'https://github.com/SurajKhodade15/employee_project_allignment_engine_nlp',
      tags: [Tag.PYTHON, Tag.NLP, Tag.LLM, Tag.GENAI, Tag.MACHINELEARNING, Tag.GIT, Tag.MCP]
    },
    {
      id: 2,
      name: 'Payroll Gen AI Query Assistant',
      summary: 'LLM-powered assistant for payroll and HR queries with document retrieval.',
      description: 'LLM-driven conversational assistant for payroll and HR queries. Combines vector-store retrieval over payroll documents, redaction/compliance controls, and a safe-generation pipeline. Built as a modular agentic service with audit logs and role-based access. Reduced HR ticket volume by routing common queries to the assistant. Focus: Gen AI, LLM, Agentic AI, MCP.',
      projectLink: 'https://github.com/SurajKhodade15/payroll_query_assistance_genai',
      tags: [Tag.PYTHON, Tag.FASTAPI, Tag.LLM, Tag.GENAI, Tag.AGENTIC, Tag.GIT]
    },
    {
      id: 3,
      name: 'Invoice Summarization and Chatbot Assistant',
      summary: 'Generative AI assistant to summarize invoices and answer finance queries.',
      description: 'Generative AI pipeline to extract structured line-items from invoices, produce concise summaries, and power a conversational assistant for finance teams. Includes OCR, field extraction, confidence scores, and XLS/CSV export. Uses transformer models for abstractive summarization and retrieval-augmented generation for Q&A. Focus: Gen AI, NLP, LLM.',
      projectLink: 'https://github.com/SurajKhodade15/invoice_summarization_genai',
      tags: [Tag.PYTHON, Tag.GENAI, Tag.LLM, Tag.FASTAPI, Tag.PANDAS, Tag.GIT]
    },
    {
      id: 4,
      name: 'Generative AI–Powered Web Data Summarization',
      summary: 'Pipeline to scrape, process and summarize web content using LLMs.',
      description: 'End-to-end pipeline that scrapes web proposals and product pages, cleans and normalizes content, and uses LLMs to generate structured summaries (title, scope, budget, deadlines). Includes rate-limited scrapers, heuristics for noise reduction, and vector-indexed retrieval for incremental updates. Focus: Gen AI, MCP, LLM, Data Engineering.',
      projectLink: 'https://github.com/SurajKhodade15/web_data_summarization_genai',
      tags: [Tag.PYTHON, Tag.BEAUTIFULSOUP, Tag.GENAI, Tag.LLM, Tag.MCP, Tag.GIT]
    },
    {
      id: 5,
      name: 'US Healthcare Insurance Claim Fraud Analysis',
      summary: 'NLP + ML classifiers to detect potentially fraudulent insurance claims.',
      description: 'Hybrid NLP and ML system for insurance claim fraud detection. Extracted textual and numerical features from claims, applied NLP embeddings and engineered domain features, then trained ensemble classifiers (XGBoost, CatBoost). Provided analyst-facing dashboards and active learning loops to improve label quality. Focus: ML, NLP.',
      projectLink: 'https://github.com/SurajKhodade15/us-healthcare-claims-fraud-ml',
      tags: [Tag.PYTHON, Tag.SCIKITLEARN, Tag.NLP, Tag.PANDAS, Tag.MACHINELEARNING, Tag.MATPLOTLIB, Tag.GIT]
    },
    {
      id: 6,
      name: 'Employee Feedback Sentiment Analysis',
      summary: 'NLP-based sentiment classifier for employee feedback and surveys.',
      description: 'NLP pipeline for sentiment classification and topic extraction from employee feedback and exit interviews. Combines transformer embeddings, rule-based redaction, and an explainability layer to surface drivers of sentiment. Delivered dashboards to HR for action plans. Focus: NLP, ML.',
      projectLink: 'https://github.com/SurajKhodade15/employee-feedback-sentiment',
      tags: [Tag.PYTHON, Tag.SCIKITLEARN, Tag.NLP, Tag.SPACY, Tag.JUPYTER, Tag.GIT]
    },
    {
      id: 7,
      name: 'AI Portfolio Website',
      summary: 'Personal portfolio showcasing AI/ML expertise with modern Angular architecture.',
      description: 'Modern portfolio built with Angular standalone components showcasing projects, case studies, and reproducible notebooks. Implements dynamic filtering by skills/tags, responsive design, and accessible components. Includes CI/CD and static hosting. Focus: Frontend, Deployment, UX.',
      projectLink: 'https://github.com/SurajKhodade15/DevPersona',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.GIT, Tag.GITHUB]
    },
    {
      id: 8,
      name: 'Medical Diagnosis AI System',
      summary: 'Deep learning models for medical image analysis and disease detection.',
      description: 'End-to-end medical image analysis platform using CNNs and attention mechanisms for detection tasks across X-ray, CT and MRI modalities. Emphasizes transfer learning, model explainability, DICOM handling, and deployment as a secure inference service. Validated on public medical datasets and tuned for clinical-style evaluation metrics. Focus: ML, Deep Learning, Explainability.',
      projectLink: 'https://github.com/SurajKhodade15/medical-ai-diagnosis',
      tags: [Tag.PYTHON, Tag.TENSORFLOW, Tag.PYTORCH, Tag.OPENCV, Tag.DEEPLEARNING, Tag.NUMPY, Tag.GIT]
    },
    {
      id: 9,
      name: 'Healthcare Predictive Analytics',
      summary: 'ML platform for patient outcome prediction and operational forecasting.',
      description: 'Predictive models for readmission risk, length-of-stay, and resource allocation using time-series and tabular ML techniques. Feature engineering for EHRs, calibration, and fairness checks were included. Deployed models with monitoring and retraining pipelines. Focus: ML, Time Series.',
      projectLink: 'https://github.com/SurajKhodade15/healthcare-ml',
      tags: [Tag.PYTHON, Tag.PANDAS, Tag.SCIKITLEARN, Tag.MACHINELEARNING, Tag.JUPYTER, Tag.GIT]
    },
    {
      id: 10,
      name: 'Computer Vision for Retail',
      summary: 'Real-time object detection and inventory management using deep learning.',
      description: 'Built a computer vision solution for retail: product detection, shelf analytics, and automated inventory counts using YOLO-family models. Included custom dataset collection, annotation tooling, and edge optimization for on-prem inference. Focus: Computer Vision, Deep Learning.',
      projectLink: 'https://github.com/SurajKhodade15/retail-cv',
      tags: [Tag.PYTHON, Tag.PYTORCH, Tag.OPENCV, Tag.DOCKER, Tag.DEEPLEARNING, Tag.GIT]
    },
    {
      id: 11,
      name: 'NLP Sentiment Analysis Engine',
      summary: 'Transformer-based multilingual sentiment & emotion detection.',
      description: 'Transformer-based sentiment engine with multilingual support, emotion detection, and topic modeling. Designed for streaming social data and long-form feedback via chunking and RAG (retrieval-augmented generation) where helpful. Focus: NLP, LLM.',
      projectLink: 'https://github.com/SurajKhodade15/nlp-sentiment',
      tags: [Tag.PYTHON, Tag.NLP, Tag.LLM, Tag.SPACY, Tag.FASTAPI, Tag.JUPYTER, Tag.GIT]
    },
    {
      id: 12,
      name: 'AI-Powered Drug Discovery',
      summary: 'Graph neural networks and generative models for molecular discovery.',
      description: 'Platform using GNNs for molecular property prediction, ADMET screening, and generative models for molecule design. Includes integration with ChEMBL/PubChem, docking score proxies, and lead prioritization workflows. Focus: ML, Deep Learning, Scientific ML.',
      projectLink: 'https://github.com/SurajKhodade15/ai-drug-discovery',
      tags: [Tag.PYTHON, Tag.PYTORCH, Tag.TENSORFLOW, Tag.MACHINELEARNING, Tag.GENAI, Tag.GIT]
    },
    {
      id: 13,
      name: 'Smart Healthcare Chatbot',
      summary: 'Conversational AI for medical triage, scheduling and reminders.',
      description: 'Conversational agent combining retrieval, medical knowledge graphs and LLM prompts for symptom checking, appointment booking, and follow-up reminders. Built with privacy-preserving design and audit logs to meet compliance requirements. Focus: NLP, Agentic AI, LLM.',
      projectLink: 'https://github.com/SurajKhodade15/medical-chatbot',
      tags: [Tag.PYTHON, Tag.NLP, Tag.LLM, Tag.FASTAPI, Tag.GENAI, Tag.GIT]
    },
    {
      id: 14,
      name: 'Time Series Forecasting Platform',
      summary: 'Forecasting for business and healthcare metrics using deep/time-series models.',
      description: 'Forecasting platform built with LSTM/GRU/Transformer models, automated feature extraction, backtesting and model selection. Used for patient census forecasting, inventory demand and financial time series. Focus: Time Series, ML.',
      projectLink: 'https://github.com/SurajKhodade15/timeseries-forecast',
      tags: [Tag.PYTHON, Tag.PANDAS, Tag.TENSORFLOW, Tag.MACHINELEARNING, Tag.JUPYTER, Tag.GIT]
    },
    {
      id: 15,
      name: 'MLOps Pipeline Framework',
      summary: 'Automated ML pipelines, model governance and deployment tooling.',
      description: 'End-to-end MLOps framework with CI/CD for models, MLflow model versioning, data validation, and monitoring for drift. Supports multiple deployment targets (cloud functions, containers) and integrates with observability tooling for production ML. Focus: MLOps, Deployment, MCP.',
      projectLink: 'https://github.com/SurajKhodade15/mlops-framework',
      tags: [Tag.PYTHON, Tag.AZURE, Tag.DOCKER, Tag.AZUREDEVOPS, Tag.CI_CD, Tag.GIT, Tag.MCP]
    },
    {
      id: 16,
      name: 'Medical Image Segmentation',
      summary: 'Precise organ and lesion segmentation for medical imagery using advanced CNNs.',
      description: 'State-of-the-art segmentation (U-Net family, attention U-Net) for organ and tumor delineation in CT and MRI. Focused on Dice/IoU optimization, post-processing, and integration with clinical pipelines (PACS). Achieved high Dice scores on public benchmarks. Focus: Medical Imaging, Deep Learning.',
      projectLink: 'https://github.com/SurajKhodade15/medical-segmentation',
      tags: [Tag.PYTHON, Tag.TENSORFLOW, Tag.PYTORCH, Tag.OPENCV, Tag.DEEPLEARNING, Tag.JUPYTER, Tag.GIT]
    }
  ];
  
  // Return a view of projects with those having a GitHub/projectLink first
  get sortedProjects(): Card[] {
    return this.projects
      .slice()
      .sort((a, b) => {
        const aHas = a.projectLink && a.projectLink.toString().trim().length > 0 ? 1 : 0;
        const bHas = b.projectLink && b.projectLink.toString().trim().length > 0 ? 1 : 0;
        // Projects with links first. If tie, keep original order by id ascending.
        if (bHas !== aHas) return bHas - aHas;
        return (a.id || 0) - (b.id || 0);
      });
  }
  }
