export interface IObject {
  total: number,
  data: IData[]
}

export interface IData {
  _id: string,
  amount: string,
  type: string,
  name: IName
  company: string,
  email: string,
  phone: string,
  address: string
}

export interface IName {
  first: string,
  last: string
}


