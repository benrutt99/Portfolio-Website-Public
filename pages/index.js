import Head from "next/head";

import Navbar from "components/navbar/Navbar";
import Hero from "components/hero/Hero";
import About from "components/about/About";
import Skills from "components/skills/Skills";
import Contact from "components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Ben Rutt</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='About Ben Rutt' />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
