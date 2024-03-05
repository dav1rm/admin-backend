export interface UserData {
  nome: string
  idade: number
  cpf: string
  rg: string
  data_nasc: string
  sexo: string
  signo: string
  mae: string
  pai: string
  email: string
  senha: string
  cep: string
  endereco: string
  numero: number
  bairro: string
  cidade: string
  estado: string
  telefone_fixo: string
  celular: string
  altura: string
  peso: number
  tipo_sanguineo: string
  cor: string
}

export interface UserModel {
  name: string
  email: string
  password: string
  cpf: string
}

export interface AddressModel {
  postcode: string
  street: string
  number: number
  neighborhood: string
  city: string
  state: string
}

export interface InformationModel {
  mother: string
  father: string
  sign: string
  height: number
  weight: number
  gender: string
  blood_type: string
  color: string
  cellphone: string
  telephone: string
  birthday: Date
  rg: string
}

export function dataToUser(data: UserData): UserModel {
  return {
    name: data.nome,
    email: data.email,
    password: data.senha,
    cpf: data.cpf,
  }
}

export function dataToAddress(data: UserData): AddressModel {
  return {
    postcode: data.cep,
    street: data.endereco,
    number: data.numero,
    neighborhood: data.bairro,
    city: data.cidade,
    state: data.estado,
  }
}

export function dataToInformation(data: UserData): InformationModel {
  const [d, m, y] = data.data_nasc.split('/')
  return {
    mother: data.mae,
    father: data.pai,
    sign: data.signo,
    height: Number(data.altura.replace(',', '.')),
    weight: data.peso,
    gender: data.sexo,
    blood_type: data.tipo_sanguineo,
    color: data.cor,
    cellphone: data.celular,
    telephone: data.telefone_fixo,
    birthday: new Date(`${y}/${m}/${d}`),
    rg: data.rg,
  }
}
