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
      name: 'Medical Diagnosis AI System',
      summary: 'Deep learning model for automated medical image analysis and disease detection.',
      description: 'Developed a comprehensive medical diagnosis system using TensorFlow and PyTorch for analyzing medical images (X-rays, CT scans, MRI). Implemented convolutional neural networks with attention mechanisms for early detection of pneumonia, fractures, and tumors. Achieved 94% accuracy through transfer learning with ResNet and EfficientNet. Deployed using Azure ML Studio with real-time inference APIs. Integrated DICOM image processing and HIPAA-compliant data handling.',
      projectLink: 'https://github.com/SurajKhodade15/medical-ai-diagnosis',
      tags: [
        Tag.PYTHON,
        Tag.TENSORFLOW,
        Tag.PYTORCH,
        Tag.OPENCV,
        Tag.AZURE,
        Tag.MACHINELEARNING,
        Tag.DEEPLEARNING,
        Tag.RESTAPI
      ]
    },
    {
      id: 2,
      name: 'Healthcare Predictive Analytics',
      summary: 'ML pipeline for patient outcome prediction and risk assessment.',
      description: 'Built a comprehensive healthcare analytics platform using Python, scikit-learn, and Azure ML. Developed predictive models for patient readmission risk, treatment outcome forecasting, and resource allocation optimization. Implemented feature engineering for EHR data, time-series analysis for vital signs, and ensemble methods achieving 91% accuracy. Created HIPAA-compliant data pipelines with automated model retraining and monitoring dashboards.',
      projectLink: 'https://github.com/SurajKhodade15/healthcare-ml',
      tags: [
        Tag.PYTHON,
        Tag.SCIKITLEARN,
        Tag.PANDAS,
        Tag.NUMPY,
        Tag.MACHINELEARNING,
        Tag.AZURE,
        Tag.JUPYTER,
        Tag.MATPLOTLIB
      ]
    },
    {
      id: 3,
      name: 'Computer Vision for Retail',
      summary: 'Real-time object detection and inventory management using deep learning.',
      description: 'Developed an end-to-end computer vision solution for retail inventory management using YOLO v5 and OpenCV. Implemented real-time product detection, shelf monitoring, and automated stock counting. Built custom datasets with 50,000+ annotated images and achieved 96% mAP. Deployed using Azure Container Instances with REST APIs for integration with existing POS systems. Included customer behavior analysis and heat mapping.',
      projectLink: 'https://github.com/SurajKhodade15/retail-cv',
      tags: [
        Tag.PYTHON,
        Tag.PYTORCH,
        Tag.OPENCV,
        Tag.DEEPLEARNING,
        Tag.AZURE,
        Tag.DOCKER,
        Tag.RESTAPI,
        Tag.TENSORFLOW
      ]
    },
    {
      id: 4,
      name: 'NLP Sentiment Analysis Engine',
      summary: 'Multi-language sentiment analysis with transformer models.',
      description: 'Created a sophisticated NLP engine using BERT, RoBERTa, and custom transformer architectures for real-time sentiment analysis across multiple languages. Processed social media data, customer reviews, and feedback forms. Implemented attention visualization, emotion detection, and topic modeling. Achieved 94% accuracy on multilingual datasets with support for English, Spanish, French, and German. Deployed using FastAPI and Azure Functions.',
      projectLink: 'https://github.com/SurajKhodade15/nlp-sentiment',
      tags: [
        Tag.PYTHON,
        Tag.TENSORFLOW,
        Tag.PYTORCH,
        Tag.NLTK,
        Tag.SPACY,
        Tag.FASTAPI,
        Tag.AZURE,
        Tag.DEEPLEARNING
      ]
    },
    {
      id: 5,
      name: 'AI-Powered Drug Discovery',
      summary: 'Machine learning platform for molecular property prediction and drug design.',
      description: 'Developed a comprehensive drug discovery platform using graph neural networks and molecular descriptors. Implemented ADMET property prediction, drug-target interaction modeling, and molecular generation using GANs. Built custom datasets from ChEMBL and PubChem with 2M+ compounds. Achieved significant improvement in lead compound identification and reduced screening time by 60%. Integrated with pharmaceutical research workflows.',
      projectLink: 'https://github.com/SurajKhodade15/ai-drug-discovery',
      tags: [
        Tag.PYTHON,
        Tag.TENSORFLOW,
        Tag.PYTORCH,
        Tag.MACHINELEARNING,
        Tag.DEEPLEARNING,
        Tag.PANDAS,
        Tag.NUMPY,
        Tag.JUPYTER
      ]
    },
    {
      id: 6,
      name: 'Smart Healthcare Chatbot',
      summary: 'Conversational AI for medical consultation and symptom analysis.',
      description: 'Built an intelligent healthcare chatbot using natural language processing and medical knowledge graphs. Implemented symptom checker, medication reminders, appointment scheduling, and emergency detection. Used BERT for intent recognition and trained on medical literature and diagnostic guidelines. Integrated with telemedicine platforms and achieved 88% accuracy in symptom-to-condition mapping. HIPAA-compliant with end-to-end encryption.',
      projectLink: 'https://github.com/SurajKhodade15/medical-chatbot',
      tags: [
        Tag.PYTHON,
        Tag.TENSORFLOW,
        Tag.NLTK,
        Tag.SPACY,
        Tag.FASTAPI,
        Tag.AZURE,
        Tag.DEEPLEARNING,
        Tag.RESTAPI
      ]
    },
    {
      id: 7,
      name: 'Time Series Forecasting Platform',
      summary: 'Advanced forecasting models for business and healthcare metrics.',
      description: 'Developed a comprehensive time series forecasting platform using LSTM, GRU, and Transformer models. Implemented forecasting for patient census, equipment utilization, and resource demand in healthcare settings. Built automated feature engineering, model selection, and hyperparameter optimization. Achieved 15% improvement in forecast accuracy over traditional methods. Deployed with real-time monitoring and automated retraining pipelines.',
      projectLink: 'https://github.com/SurajKhodade15/timeseries-forecast',
      tags: [
        Tag.PYTHON,
        Tag.TENSORFLOW,
        Tag.PYTORCH,
        Tag.PANDAS,
        Tag.MACHINELEARNING,
        Tag.DEEPLEARNING,
        Tag.AZURE,
        Tag.JUPYTER
      ]
    },
    {
      id: 8,
      name: 'MLOps Pipeline Framework',
      summary: 'End-to-end machine learning operations and model deployment platform.',
      description: 'Built a comprehensive MLOps framework for automated model training, validation, and deployment. Implemented CI/CD pipelines for ML models using Azure DevOps, model versioning with MLflow, and automated testing with great expectations. Created monitoring dashboards for model drift detection and performance tracking. Supported multiple deployment targets including Azure ML, Azure Functions, and container instances.',
      projectLink: 'https://github.com/SurajKhodade15/mlops-framework',
      tags: [
        Tag.PYTHON,
        Tag.AZURE,
        Tag.DOCKER,
        Tag.AZUREDEVOPS,
        Tag.MACHINELEARNING,
        Tag.CI_CD,
        Tag.GIT,
        Tag.RESTAPI
      ]
    },
    {
      id: 9,
      name: 'Medical Image Segmentation',
      summary: 'Deep learning for precise organ and tumor segmentation in medical images.',
      description: 'Developed advanced image segmentation models using U-Net, SegNet, and custom architectures for medical imaging. Specialized in brain tumor segmentation, lung nodule detection, and cardiac structure analysis. Implemented data augmentation techniques and transfer learning achieving 95% Dice coefficient. Used DICOM processing and integrated with PACS systems. Validated on multiple medical imaging datasets including BraTS and LUNA16.',
      projectLink: 'https://github.com/SurajKhodade15/medical-segmentation',
      tags: [
        Tag.PYTHON,
        Tag.TENSORFLOW,
        Tag.PYTORCH,
        Tag.OPENCV,
        Tag.DEEPLEARNING,
        Tag.NUMPY,
        Tag.MATPLOTLIB,
        Tag.JUPYTER
      ]
    },
    {
      id: 10,
      name: 'AI Portfolio Website',
      summary: 'Personal portfolio showcasing AI/ML expertise with modern Angular architecture.',
      description: 'Modern portfolio website built with Angular standalone components and .NET Core API backend. Features responsive design with glass-morphism effects, dynamic project filtering, and interactive technology showcases. Implements custom animations, mobile-optimized navigation, and accessibility features. Showcases AI/ML projects with detailed case studies and technical implementations. Deployed with CI/CD pipelines and optimized for performance.',
      projectLink: 'https://github.com/SurajKhodade15/ai-portfolio',
      tags: [
        Tag.ANGULAR,
        Tag.TYPESCRIPT,
        Tag.DOTNETCORE,
        Tag.HTML5,
        Tag.CSS3,
        Tag.RESTAPI,
        Tag.AZURE,
        Tag.GIT,
        Tag.GITHUB
      ]
    }

  ];
}
