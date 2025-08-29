/**
 * Utility function to highlight technical keywords in text content
 * Used across multiple components for consistent keyword highlighting
 */
export const highlightKeywords = (text: string): string => {
  const keywords = [
    "Java",
    "Spring Framework",
    "Python",
    "Go",
    "Docker",
    "Kubernetes",
    "Google Cloud",
    "PostgreSQL",
    "MongoDB",
    "Pinecone",
    "FastAPI",
    "n8n",
    "CI/CD",
    "LLMOps",
    "backend",
    "APIs",
    "inteligencia artificial",
    "machine learning",
    "microservicios",
    "DevOps",
  ];

  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
  return text.replace(regex, `<strong class="text-primary font-semibold">$1</strong>`);
};

/**
 * Common CSS class patterns for consistent styling
 */
export const stylePatterns = {
  // Container patterns
  card: "bg-background-surface p-l rounded-lg border border-border shadow-lg",
  section: "max-w-6xl mx-auto px-6 md:px-8 lg:px-6",

  // Text patterns
  heading: "text-h2 font-bold text-primary border-l-4 border-primary pl-4",
  subheading: "text-h4 font-semibold text-text",
  bodyText: "text-body-reg text-text-muted leading-relaxed",

  // Interactive patterns
  button: "px-4 py-2 rounded-lg transition-colors duration-200",
  link: "relative after:absolute after:bg-gradient-to-r after:from-primary after:to-secondary-blue after:h-0.5 after:w-0 after:left-1/2 after:-bottom-1 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full",

  // Layout patterns
  flexCenter: "flex items-center justify-center",
  gridResponsive: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
} as const;
