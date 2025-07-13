export enum EBreed {
  LabradorRetriever = "Labrador Retriever",
  PastorAleman = "Pastor Aleman",
  GoldenRetriever = "Golden Retriever",
  Bulldog = "Bulldog",
  Caniche = "Caniche",
  Beagle = "Bleagle",
  Rottweiler = "Rotweiller",
  YorkshireTerrier = "Yorkshire Terrier",
  Dachshund = "Dachshund (Salchica)",
  Boxer = "Boxer",
  OtraRaza = "Otra raza",
}

export default interface IPet {
  id: number;
  name: string;
  breed: EBreed;
  birthdate: string;
  user_id: number;
}
