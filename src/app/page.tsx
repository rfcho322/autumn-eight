import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { HeroParallax } from "@/components/global/hero-parallax";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clientLogos, pricePlans, products } from "@/lib/constants";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        {/* GRADIENT BACKGROUND */}
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#233_100%)]">
        </div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                {/* <Button size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-orange-400 group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start for free today
                  </span>
                </Button> */}
                <h1 className="text-4xl mb-8 md:mb-12 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-orange-700 to-orange-400 font-sans font-bold">
                  Autumn 8: <br /> Simplifying Messaging <br /> Automation!
                  {/* Autumn 8: <br/> Automation <br/>will Never Fall  */}
                </h1>
                <Button className="p-[3px] h-full relative mb-0 md:mb-12 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-400 rounded-full" />
                  <div className="px-8 py-3 text-2xl bg-black rounded-full relative group transition ease-in-out duration-500 text-white hover:bg-transparent">
                    Start For Free Today
                  </div>
                </Button>
              </div>
            }
          >
            <Image
              src="/screen-image.png"
              alt="screen image"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <section className="w-full flex justify-center items-center">
        <InfiniteMovingCards
          className="md:mt-[26rem] mt-[-80px]"
          items={clientLogos}
          direction="right"
          speed="slow"
        />
      </section>
      <section>
        <HeroParallax products={products} />
      </section>
      <section className="mt-[-500px]">
        {/* LAMP */}
        <LampComponent />
        {/* PLANS CARD */}
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          {pricePlans.map((plan, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border ${index === 1 && `border-2 dark:!border-orange-500`}`}>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {plan.title}
                  <h2 className="text-4xl">{plan.price}</h2>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {plan.desc}
                  <ul className="my-4 flex flex-col gap-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 ">
                        <CheckIcon /> {feature.feature}
                      </li>
                    ))}
                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Get Started
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
          }
        </div>
      </section>
    </main>
  );
}
