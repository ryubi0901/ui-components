'use client'

import NextImage, { type ImageLoader, type ImageProps } from 'next/image'

type Props = ImageProps & {
  src: string
  width: number
  height: number
  alt: string
}

const defaultLoader: ImageLoader = ({ src, width, quality }) => {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w-300
  const url = new URL(src)
  const params = url.searchParams

  params.set('auto', params.get('auto') || 'compress')
  params.set('fit', params.get('fit') || 'max')
  params.set('w', params.get('w') || width.toString())

  if (quality) {
    params.delete('auto')
    params.set('q', quality.toString())
  }

  return url.href
}

const MicroCMSImage = ({ loader, className, alt, ...imageProps }: Props) => {
  return (
    <div className={className}>
      <NextImage
        {...imageProps}
        loader={loader ?? defaultLoader}
        placeholder="blur"
        blurDataURL={`${imageProps.src}?auto=compress$w=10`}
        alt={alt}
      />
    </div>
  )
}

export default MicroCMSImage
