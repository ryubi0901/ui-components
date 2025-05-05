export const limit = 9

export const createPager = (totalCount: number) => [
  ...Array.from({ length: Math.ceil(totalCount / limit) }, (_, i) => i + 1),
]
