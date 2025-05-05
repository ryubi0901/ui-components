import { type ComponentProps, type JSX, createElement } from 'react'

type Props<Tag extends keyof JSX.IntrinsicElements> = {
  as?: Tag
} & ComponentProps<Tag>

const ScrollTopButton = <Tag extends keyof JSX.IntrinsicElements>({ as, ...props }: Props<Tag>) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const componentProps = Object.assign({}, props, { onClick: handleClick })
  const Component = createElement(as ?? 'button', componentProps)

  return Component
}

export default ScrollTopButton
