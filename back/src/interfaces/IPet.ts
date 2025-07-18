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
  Other = "Otra raza",
}

export default interface IPet {
  name: string;
  breed: EBreed;
  birthdate: string;
  user_id: number;
}
