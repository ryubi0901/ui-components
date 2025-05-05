import Image from 'next/image'

import img from '~/src/images/sample.jpg'

export default function IndexPage() {
  return (
    <div className="w-full">
      <div className="h-screen">
        <Image src={img} sizes="100vw" alt={''} priority />
      </div>
    </div>
  )
}
