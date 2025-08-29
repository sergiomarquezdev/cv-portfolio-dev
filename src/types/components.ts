/**
 * Common component prop interfaces for type consistency
 */

export interface BaseComponentProps {
  class?: string;
  id?: string;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  customMargin?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface LinkProps extends BaseComponentProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  external?: boolean;
}

export interface ImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
  srcset?: string;
  priority?: boolean;
}

export interface IconProps extends BaseComponentProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  variant?: 'default' | 'highlight' | 'minimal';
  padding?: 'sm' | 'md' | 'lg';
}
