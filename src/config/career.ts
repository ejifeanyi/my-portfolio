// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: 'CampusNex',
    title: 'Software Engineer',
    logo: 'college',
    start: '2023',
    end: 'Present',
  },
  {
    company: 'Skywardops',
    title: 'Software Engineer',
    logo: 'bank',
    start: '2022',
    end: '2023',
  },
  {
    company: 'Lockedfunds',
    title: 'Backend Engineer',
    logo: 'bank',
    start: '2022',
    end: '2021',
  },
]
