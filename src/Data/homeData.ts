import { HouseLogo, CatLogo, BathLogo } from "../../public/assets/images";
import { MinSwiper, TesimonialData } from "./types";

export const minSwiper: MinSwiper[] = [
  {
    image: HouseLogo,
    title: "Dog Boarding",
    content: "Short term and long term pet board. Luxury dog kennels, exercise",
  },
  {
    image: CatLogo,
    title: "Cat Boarding",
    content:
      "Your pets will also be exposed to plenty of human interaction, time outside",
  },
  {
    image: BathLogo,
    title: "Pet Spa",
    content:
      "We have a variety of quality shampoos as well as medicated shampoos.",
  },
];

export const offers = [
  {
    title: "Dog Boarding",
    link: "/",
  },
  {
    title: "Cat Boarding",
    link: "/",
  },
  {
    title: "Pet Spa and Grooming",
    link: "/",
  },
  {
    title: "Healthy Meal",
    link: "/",
  },
  {
    title: "Activity Exercise",
    link: "/",
  },
  {
    title: "Veterinary Service",
    link: "/",
  },
];

export const testimonialData: TesimonialData[] = [
  {
    testimonial:
      "Just wanted to let you know how blessed I have been to have you guys care for me over the past few years.",
    name: "Jack Russell",
    subName: "Dog",
  },
  {
    testimonial:
      "We love bring Lexi to Pawsitive! The staff is always so friendly and it’s so convenient for our busy schedules!",
    name: "Jane Cole",
    subName: "Owner",
  },
  {
    testimonial:
      "My boxer is spoiled rotten and needs a lot of human interaction which he always receives. Pawsitive is the best!!",
    name: "John Doe",
    subName: "Owner",
  },
];
