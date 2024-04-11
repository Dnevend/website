import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-8 border">
          <div className="flex items-center justify-between gap-x-8">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                <span>小学后生</span>
                <br />
                <span className="text-sm sm:text-md">@Dnevend</span>
              </p>
            </CardItem>

            <CardItem translateZ="50">
              <Image
                src="https://avatars.githubusercontent.com/u/34927000?v=4"
                height="1000"
                width="1000"
                className="h-16 sm:h-24 w-16 sm:w-24 object-cover rounded-full group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </div>

          <div className="flex items-center justify-between">
            <CardItem translateZ="50" className="flex gap-x-4">
              <Link
                href="https://github.com/dnevend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </Link>

              <Link
                href="https://twitter.com/Dnevend_09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </Link>
            </CardItem>

            <CardItem
              translateZ="50"
              as={Link}
              href="http://dnevend.github.io/docs/intro"
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Wiki →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
