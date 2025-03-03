import clsx from 'clsx'
import Link from 'next/link'

const variantStyles = {
  primary:
    'bg-green-800 font-semibold text-green-100 hover:bg-green-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-green-50 font-medium text-green-900 hover:bg-green-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
  className?: string
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (React.ComponentPropsWithoutRef<typeof Link> & { href: string })
)

export function Button({
  variant = 'primary',
  className,
  href,
  ...props
}: ButtonProps) {
  const finalClassName = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  if (href) {
    return (
      <Link
        className={finalClassName}
        href={href}
        {...(props as React.ComponentPropsWithoutRef<typeof Link>)}
      />
    )
  }

  return (
    <button
      className={finalClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  )
}
