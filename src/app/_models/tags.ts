export class Tag {
  // Frontend
  static readonly ANGULAR = new Tag('Angular', '#569CD6');
  static readonly TYPESCRIPT = new Tag('Typescript', '#569CD6');
  static readonly JAVASCRIPT = new Tag('Javascript', '#569CD6');
  static readonly HTML5 = new Tag('HTML5', '#569CD6');
  static readonly CSS3 = new Tag('CSS3', '#569CD6');
  static readonly BOOTSTRAP = new Tag('Bootstrap', '#569CD6');

  // .NET / C# / Architecture
  static readonly DOTNETCORE = new Tag('.NET Core', '#204070');
  static readonly ASPNETCORE = new Tag('ASP.NET Core', '#204070');
  static readonly ASPNETMVC = new Tag('ASP.NET MVC', '#204070');
  static readonly CSHARP = new Tag('C#', '#204070');
  static readonly EFCORE = new Tag('EF Core', '#204070');
  static readonly LINQ = new Tag('LINQ', '#204070');
  static readonly MEDIATR = new Tag('MediatR', '#204070');
  static readonly MINIMALAPI = new Tag('Minimal API', '#204070');
  static readonly MICROSERVICES = new Tag('Microservices', '#204070');

  // Azure
  static readonly AZURE = new Tag('Azure', '#007ACC');
  static readonly AZUREFUNCTIONS = new Tag('Azure Functions', '#007ACC');
  static readonly SERVICEBUS = new Tag('Azure Service Bus', '#007ACC');
  static readonly AZUREDEVOPS = new Tag('Azure DevOps', '#007ACC');
  static readonly AZURESERVICE = new Tag('Azure Web Service', '#007ACC');
  static readonly APPINSIGHTS = new Tag('App Insights', '#007ACC');

  // Database / DevOps / Infrastructure
  static readonly SQLSERVER = new Tag('SQL Server', '#3C3C3C');
  static readonly POSTGRESQL = new Tag('PostgreSQL', '#3C3C3C');
  static readonly SQLITE = new Tag('SQLite', '#3C3C3C');
  static readonly SQL = new Tag('SQL', '#3C3C3C');
  static readonly ETL = new Tag('ETL', '#3C3C3C');
  static readonly RESTAPI = new Tag('REST API', '#3C3C3C');
  static readonly DOCKER = new Tag('Docker', '#3C3C3C');
  static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#3C3C3C');
  static readonly GIT = new Tag('Git', '#3C3C3C');
  static readonly GITHUB = new Tag('GitHub', '#3C3C3C');
  static readonly CI_CD = new Tag('CI/CD', '#3C3C3C');
  static readonly POSTMAN = new Tag('Postman', '#3C3C3C');

  // Messaging & Queueing
  static readonly RABBITMQ = new Tag('RabbitMQ', '#457189');

  // Python / Data / Automation
  static readonly PYTHON = new Tag('Python', '#4a6a77');
  static readonly PYTEST = new Tag('Pytest', '#4a6a77');
  static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
  static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
  static readonly PANDAS = new Tag('Pandas', '#4a6a77');
  static readonly PYDANTIC = new Tag('Pydantic', '#4a6a77');
  static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
  static readonly SELENIUM = new Tag('Selenium', '#4a6a77');

  // AI/ML & Data Science
  static readonly TENSORFLOW = new Tag('TensorFlow', '#00D4FF');
  static readonly PYTORCH = new Tag('PyTorch', '#00D4FF');
  static readonly OPENCV = new Tag('OpenCV', '#00D4FF');
  static readonly MACHINELEARNING = new Tag('Machine Learning', '#00FF88');
  static readonly DEEPLEARNING = new Tag('Deep Learning', '#00FF88');
  static readonly NUMPY = new Tag('NumPy', '#4a6a77');
  static readonly MATPLOTLIB = new Tag('Matplotlib', '#4a6a77');
  static readonly SCIKITLEARN = new Tag('Scikit-Learn', '#00D4FF');
  static readonly KERAS = new Tag('Keras', '#00D4FF');
  static readonly NLTK = new Tag('NLTK', '#4a6a77');
  static readonly SPACY = new Tag('spaCy', '#4a6a77');
  static readonly JUPYTER = new Tag('Jupyter', '#4a6a77');

  // Additional AI / ML tags
  static readonly NLP = new Tag('NLP', '#00C0A0');
  static readonly GENAI = new Tag('Generative AI', '#FFB86B');
  static readonly LLM = new Tag('LLM', '#DDB6F2');
  static readonly AGENTIC = new Tag('Agentic AI', '#9CDCFE');
  static readonly MCP = new Tag('MCP', '#C586C0');

  // Java / Spring
  static readonly JAVA = new Tag('Java', '#5a7581');
  static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
  static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
  static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
  static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
  static readonly LOMBOK = new Tag('Lombok', '#5a7581');
  static readonly JPA = new Tag('JPA', '#5a7581');
  static readonly JDBC = new Tag('JDBC', '#5a7581');
  static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
  static readonly JUNIT = new Tag('JUnit', '#5a7581');
  static readonly MOCKITO = new Tag('Mockito', '#5a7581');

  // Tools / IDEs
  static readonly VISUALSTUDIO = new Tag('Visual Studio', '#204070');
  static readonly VSCODE = new Tag('VS Code', '#204070');

  // Golang
  static readonly GOLANG = new Tag('Golang', '#457189');

  private constructor(private readonly key: string, public readonly color: string) { }

  toString() {
    return this.key;
  }
}
