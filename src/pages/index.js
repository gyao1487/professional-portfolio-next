import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


import AnimatedText from "@/components/AnimatedText";
import Typewriter from "typewriter-effect";

import { Work_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import ResumeBtn from "@/components/ResumeBtn";
import ContactLink from "@/components/ContactLink";

import profilePic from "../../public/profilePic.png";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-ws",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Grace Yao</title>
        <meta
          name="description"
          content="Grace Yao professional porfolio generated by create next app"
        />
      </Head>

      <main
        // I removed items-center but can add it if it causes problems
        className={`${workSans.variable} font-ws flex text-dark w-full min-h-screen`}
      >
        <Layout className="pt-0">
  {/* -----------------TOP SECTION------------------ */}
          <div className="flex items-center justify-between w-full pt-10">
            <div className="w-1/2 pr-10">
              <Image
                src={profilePic}
                alt="GraceY"
                className="rounded-full"
                width={350}
                min-width={200}
              />
            </div>

            <div className="w-1/2 text-lg flex flex-col self-center">
              <p>Hi, my name is</p>
              {/* <AnimatedText text="GRACE YAO"/> */}

             <h1 className="typedName py-5">
              {/* I want to figure out how to loop */}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("GRACE YAO")
                    .callFunction(() => {
                      console.log("String typed!");
                    })
                    .pauseFor(3000)
                    .start()
                }}
              />
            </h1>

              <p>
                A Chicago-based full-stack developer with a passion for creating
                beautiful, functional, and accessible web applications.
              </p>
              <div className ="flex items-center self-start mt-5">
                <ResumeBtn/>
                <ContactLink/>
              </div>
            </div>
          </div>

{/* -----------------SKILLS SECTION------------------ */}







{/* -----------------PROJECTS HIGHLIGHT----------------- */}



        </Layout>
      </main>
    </>
  );
}
