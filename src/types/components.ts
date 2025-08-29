/**
 * TypeScript type definitions for component props
 * 
 * @description
 * Centralized type definitions ensure type safety and consistency across all components.
 * These interfaces define the contract for component props and provide IntelliSense support.
 */

/**
 * Base properties shared by all components
 */
export interface BaseComponentProps {
  /** CSS class names to apply to the component */
  class?: string;
  /** Unique identifier for the component */
  id?: string;
}

/**
 * Properties for section components that wrap content areas
 */
export interface SectionProps extends BaseComponentProps {
  /** Section title for semantic structure */
  title?: string;
  /** Custom margin overrides for spacing control */
  customMargin?: string;
}

/**
 * Button component properties with variant and behavior options
 */
export interface ButtonProps extends BaseComponentProps {
  /** Visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'accent';
  /** Size variant of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Type attribute for button element */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Link component properties for navigation elements
 */
export interface LinkProps extends BaseComponentProps {
  /** Target URL for the link */
  href: string;
  /** Target window/frame for the link */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Relationship attribute for security and SEO */
  rel?: string;
  /** Whether the link is external (adds security attributes) */
  external?: boolean;
}

/**
 * Image component properties with performance and accessibility features
 */
export interface ImageProps extends BaseComponentProps {
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility */
  alt: string;
  /** Image width in pixels or CSS units */
  width?: number | string;
  /** Image height in pixels or CSS units */
  height?: number | string;
  /** Loading strategy for performance optimization */
  loading?: 'lazy' | 'eager';
  /** Decoding hint for browser optimization */
  decoding?: 'async' | 'sync' | 'auto';
  /** Image sizes for responsive design */
  sizes?: string;
  /** Source set for responsive images */
  srcset?: string;
  /** Whether this image should be prioritized for loading */
  priority?: boolean;
}

/**
 * Icon component properties for scalable vector graphics
 */
export interface IconProps extends BaseComponentProps {
  /** Icon size in pixels */
  size?: number;
  /** Icon color (CSS color value) */
  color?: string;
  /** Stroke width for outline icons */
  strokeWidth?: number;
}

/**
 * Card component properties for content containers
 */
export interface CardProps extends BaseComponentProps {
  /** Card title for header content */
  title?: string;
  /** Visual style variant of the card */
  variant?: 'default' | 'highlight' | 'minimal';
  /** Padding size variant */
  padding?: 'sm' | 'md' | 'lg';
}
