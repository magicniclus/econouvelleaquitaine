/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "@heroicons/react/20/solid";

interface AvisItem {
  id: number;
  avis: string;
  name: string;
  note: number;
}

export const avis: AvisItem[] = [
  {
    id: 1,
    note: 5,
    avis: `
        J'ai fais appel à Terabois pour isoler ma maison, les travaux ont étés parfaitement réalisés, super bon contact. Je recommande fortement cette entreprise.
      `,
    name: "PATRICK MASSE",
  },
  {
    id: 2,
    note: 5,
    avis: `
        Sérieux, efficacité, suivi… les travaux que j’ai entrepris avec maison Terabois m’ont totalement satisfaits. Les idées et suggestions du maître d’œuvre (en bonus) sont un vrai plus. Mon habitation à rénover, a pris une vraie dimension. Je recommande vraiment.
      `,
    name: "Natacha CALESTREME",
  },
  {
    id: 3,
    note: 5,
    avis: `
        J’ai rencontré Mr Castera de chez Terabois, pour conseils. Il a été très professionnel et rassurant, et je lui ai confié la réalisation de mes travaux. Tout a été réalisé en temps et en heure, et respect du devis! Je recommande vivement cette entreprise. À consommer sans modération 😊
      `,
    name: "Perus Nathalie",
  },
  {
    id: 4,
    note: 5,
    avis: `
        
      `,
    name: "MAISON ISOLATION",
  },
  {
    id: 5,
    note: 5,
    avis: `
        J'ai rencontré Messieurs Castera par le biais de connaissances, ils ont su répondre à mes demandes tout en s'adaptant aux contraintes rencontrées pendant l'avancement des travaux. Je recommande à 100%.
      `,
    name: "Camille",
  },
  {
    id: 6,
    note: 5,
    avis: `
        Une équipe sérieuse et efficace, merci maison terabois!
      `,
    name: "Alex Lagane",
  },
  {
    id: 7,
    note: 5,
    avis: `
        J’ai confié mes travaux d’agrandissement de ma maison, à Terabois. Travail soigné, prix et délais respectés. Le maître d’œuvre est humain et à l’écoute de son client.
      `,
    name: "Pascal LAURENT",
  },
  // Autres avis
];

const Avis = () => {
  return (
    <section className=" py-24 md:py-16 relative">
      {/* <div className="absolute bottom-0 right-0 h-4 bg-slate-300 w-full" /> */}
      <div className="mx-auto sm:px-6 px-4 flex justify-between flex-col items-center max-w-5xl">
        <h2 className="text-2xl text-slate-700 font-bold text-center">
          Nos cliens nous recommandent
        </h2>
        <p>Nos avis préférés</p>
        <div className="w-[80%] max-w-[250px] h-2 rounded-full bg-yellow-500 mt-7" />
        <Carousel className="w-full mt-12">
          <CarouselContent className="-ml-1">
            {avis.map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 px-3 flex flex-col items-center">
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="p-1 rounded-full bg-white shadow-lg">
                      <img
                        src="/google.png"
                        alt="avis google"
                        className="w-5 h-5 objet-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center text-sm mt-2">
                    <p>{_?.avis}</p>
                  </div>
                  <div className="text-center text-sm mt-2">
                    <p>{_?.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Avis;
