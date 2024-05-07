import { Button, type buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';
import type React from 'react';

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

export const ButtonLink = ({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonLinkProps) => {
  return (
    <Button className={className} size={size} variant={variant} asChild>
      <a {...props}>{children}</a>
    </Button>
  );
};

export default ButtonLink;
