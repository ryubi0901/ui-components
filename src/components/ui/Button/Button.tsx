'use client'
import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { Size } from '~/src/types/ui/Size'
import type { Variant } from '~/src/types/ui/Variant'

const variantStyles: Record<Variant, string> = {
  solid: 'bg-violet-700 text-white hover:bg-violet-400',
  outline: 'bg-white border-1 border-violet-700 text-violet-700 hover:border-violet-400 hover:text-violet-400',
  danger: 'bg-red-600 text-white hover:bg-red-400',
  success: 'bg-green-600 text-white hover:bg-green-400',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

interface CommonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンの見た目 */
  variant?: Variant
  /** ボタンのサイズ */
  size?: Size
  className?: string
}

type LabelProps = {
  /** 表示テキスト */
  label: string
  /**
   * 表示アイコン
   * - `element`: React要素（例: `<Icon />`）
   * - `position`: `left` or `right`（デフォルトは`right`）
   */
  icon?: {
    element: ReactNode
    position?: 'right' | 'left'
  }
  /**
   * スクリーンリーダー向けのラベル
   */
  ariaLabel?: string
  children?: never
}

type ChildrenProps = {
  children: ReactNode
  /**
   * スクリーンリーダー向けのラベル
   */
  ariaLabel: string
  label?: never
  icon?: never
}

type ButtonProps = Omit<CommonProps, 'aria-label'> & (LabelProps | ChildrenProps)

const Button = ({
  type = 'button',
  disabled,
  variant = 'solid',
  size = 'md',
  className,
  label,
  icon,
  ariaLabel,
  ...props
}: ButtonProps) => {
  const isChildButton = 'children' in props
  const iconPosition = isChildButton || icon === undefined ? null : (icon.position ?? 'right')

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      aria-label={ariaLabel ?? label}
      className={clsx(
        'duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-black',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {isChildButton ? (
        props.children
      ) : (
        <span className="flex items-center gap-2">
          {icon && iconPosition === 'left' && <span className="inline-flex items-center">{icon.element}</span>}
          <span>{label}</span>
          {icon && iconPosition === 'right' && <span className="inline-flex items-center">{icon.element}</span>}
        </span>
      )}
    </button>
  )
}

export default Button
