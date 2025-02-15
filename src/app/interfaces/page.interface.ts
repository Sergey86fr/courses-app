export interface IPage {
    _id: string
    tags: string[]
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: number
    advantages: IAdvantage[]
    createdAt: string
    updatedAt: string
    __v: number
    hh: IHhData
    qas: unknown[]
    addresses: unknown[]
    categoryOn: string
    blog: IBlog
    sravnikus: ISravnikus
    learningclub: ILearningclub
  }
  
  export interface IAdvantage {
    title: string
    description: string
    _id: string
  }
  
  export interface IHhData {
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: string
    _id: string
  }
  
  export interface IBlog {
    h1: string
    metaTitle: string
    metaDescription: string
    views: number
    _id: string
  }
  
  export interface ISravnikus {
    metaTitle: string
    metaDescription: string
    qas: unknown[]
    _id: string
  }
  
  export interface ILearningclub {
    metaTitle: string
    metaDescription: string
    qas: unknown[]
    _id: string
  }
  