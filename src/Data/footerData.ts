import { FooterData } from "./types";

export const footerData: FooterData[] = [
  {
    id: 1,
    title: "About",
    withLinks: false,
    textInfo: [
      "PO BOX Collins Street West",
      "+2342 5446 67",
      "Mon - Sun: 8AM - 8PM",
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    withLinks: true,
    sublink: [
      {
        sublinkTitle: "Dog Boarding Services",
        sublinkLink: "/",
      },
      {
        sublinkTitle: "Cat Boarding Services",
        sublinkLink: "/",
      },
      {
        sublinkTitle: "Spa and Grooming Services",
        sublinkLink: "/",
      },
    ],
  },
];
