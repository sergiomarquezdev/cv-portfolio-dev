/**
 * @fileoverview Icon exports for Astro portfolio components
 *
 * This file centralizes all icon exports with multiple naming strategies:
 * - Direct exports for simple usage (e.g., import { GitHub } from '@/icons')
 * - Icon-suffixed exports for explicit identification (e.g., GitHubIcon)
 * - Compatibility aliases for legacy components (marked for backward compatibility)
 *
 * Icon Categories:
 * - UI: General interface icons (Menu, Arrow, etc.)
 * - Tech: Technology stack icons (Spring, Java, Python, etc.)
 * - Social: Social platform icons (GitHub, LinkedIn, X, etc.)
 */

// Social Icons
export { default as Blog } from './social/Blog.astro';
// Explicit exports for components that use the 'Icon' suffix
// These provide alternative import names for better component clarity
export {
  default as Certificate,
  default as CertificateIcon,
} from './social/Certificate.astro';
export {
  default as GitHub,
  default as GitHubIcon,
} from './social/GitHub.astro';
export { default as LinkedIn } from './social/LinkedIn.astro';
export { default as Mail } from './social/Mail.astro';
export {
  default as Website,
  default as WorldMapIcon,
  default as WebsiteIcon,
} from './social/WorldMap.astro'; // Renamed for Hero component
export { default as X } from './social/X.astro';
export { default as YouTube } from './social/YouTube.astro';
// Tech Icons
export { default as Ai } from './tech/ai.astro';
export { default as CICD } from './tech/cicd.astro';
export { default as Docker } from './tech/docker.astro';
export { default as FastAPI } from './tech/fastapi.astro';
export { default as GCP } from './tech/gcp.astro';
export { default as Go } from './tech/go.astro';
export { default as Java } from './tech/java.astro';
export { default as Kubernetes } from './tech/kubernetes.astro';
export { default as LLMOps } from './tech/llmops.astro';
export { default as MongoDB } from './tech/mongodb.astro';
export { default as N8n } from './tech/n8n.astro';
export { default as Node } from './tech/node.astro';
export { default as Pinecone } from './tech/pinecone.astro';
export { default as PostgreSQL } from './tech/postgresql.astro';
export { default as Python } from './tech/python.astro';
export { default as Spring } from './tech/spring.astro';
// UI Icons
export { default as ArrowUpIcon } from './ui/ArrowUpIcon.astro';
export { default as MenuIcon } from './ui/MenuIcon.astro';

// Type definition
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SocialIcon = Record<string, any>;

/**
 * Usage Examples:
 *
 * // Direct import (preferred for most cases)
 * import { GitHub, LinkedIn } from '@/icons';
 *
 * // Icon-suffixed import (for explicit naming)
 * import { GitHubIcon, CertificateIcon } from '@/icons';
 *
 * // Aliased import (for renaming)
 * import { CertificateIcon as Certificate } from '@/icons';
 */
