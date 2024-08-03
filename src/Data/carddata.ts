import { CardData } from "./types";
import {
  DogIcon,
  CatIcon,
  BrushIcon,
  TaxiIcon,
} from "../../public/assets/images";

export const cardData: CardData[] = [
  {
    title: "Dog Boarding",
    description:
      "While you’re on holiday, here’s where furry friends will spend their time.",
    linkName: "View More",
    linkUrl: "/",
    image: DogIcon,
  },
  {
    title: "Cat Boarding",
    description:
      "We have highest quality accommodations for even the fussiest feline.",
    linkName: "View More",
    linkUrl: "/",
    image: CatIcon,
  },
  {
    title: "Pet Grooming",
    description:
      "Your dog will leave feeling happy, looking and smelling great.",
    linkName: "View More",
    linkUrl: "/",
    image: BrushIcon,
  },
  {
    title: "Pet Taxi",
    description:
      "If you are short on time we can arrange taxi transport for you.",
    linkName: "View More",
    linkUrl: "/",
    image: TaxiIcon,
  },
];
