const PIdols = {
  Saki: '-hski',
  Temari: '-ttmr',
  Kotone: '-fktn',
  Mao: '-amao',
  Lilja: '-kllj',
  China: '-kcna',
  Sumika: '-ssmk',
  Hiro: '-shiro',
  Sena: '-jsna',
  Misuzu: '-hmsz',
  Ume: '-hume',
  Rinami: '-hrnm',
} as const

type PIdol = (typeof PIdols)[keyof typeof PIdols]

export { PIdols }
export type { PIdol }
