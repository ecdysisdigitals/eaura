import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedImage } from "@/components/animated-image"
import { FloatingElement } from "@/components/floating-element"
import { FadeInScroll } from "@/components/fade-in-scroll"
import { PageTransition } from "@/components/page-transition"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"

export default function Gawi() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-oat">
        <Header />
        <main>
          <section className="relative py-20 bg-gradient-to-b from-cherry to-cherry/90 text-oat overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/aurora-pattern.svg')] bg-repeat"></div>
            </div>
            <FloatingElement className="absolute top-20 left-10 opacity-20">
              <div className="w-20 h-20 rounded-full bg-butter/30 blur-md"></div>
            </FloatingElement>
            <FloatingElement className="absolute bottom-20 right-10 opacity-20" delay={1}>
              <div className="w-32 h-32 rounded-full bg-butter/30 blur-md"></div>
            </FloatingElement>
            <div className="container relative z-10">
              <div className="flex flex-col items-center text-center space-y-6">
                <BackButton href="/naratibong-danas" label="Bumalik sa Naratibong Danas" />
                <AnimatedText>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Mga <span className="text-butter">Gawi</span> at Tradisyon
                  </h1>
                </AnimatedText>
                <p className="max-w-2xl text-lg text-oat/90">
                  Alamin ang mga tradisyonal na gawi at kaugalian na may kaugnayan sa aurorahan.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-oat to-transparent"></div>
          </section>

          <section className="py-16 bg-oat">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInScroll direction="right">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium">
                      Tradisyonal na Gawi
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Pagsalubong sa Aurorahan</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Ang mga ninuno natin ay may mga partikular na ritwal at seremonya kapag may aurorahan. Isa sa mga
                      ito ay ang pagsalubong sa aurorahan, kung saan ang mga matatanda ay nagtitipon-tipon at nagdarasal
                      upang ipakita ang kanilang paggalang sa natural na phenomenon na ito.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Ang mga gawing ito ay nagpapakita ng malalim na koneksyon ng ating kultura sa mga natural na
                      phenomenon tulad ng aurorahan. Ito ay nagpapakita rin ng ating pagpapahalaga sa kalikasan at sa
                      mga bagay na hindi natin lubusang nauunawaan.
                    </p>
                  </div>
                </FadeInScroll>
                <FadeInScroll direction="left">
                  <AnimatedImage>
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Pagsalubong sa Aurorahan"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </AnimatedImage>
                </FadeInScroll>
              </div>
            </div>
          </section>

          <section className="py-16 bg-butter/30">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInScroll direction="up" className="order-2 md:order-1">
                  <AnimatedImage>
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Pagdiriwang ng Aurorahan"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </AnimatedImage>
                </FadeInScroll>
                <FadeInScroll direction="up" delay={0.2} className="order-1 md:order-2">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium">
                      Pagdiriwang
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Pagdiriwang ng Aurorahan</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Ang pagdiriwang ng aurorahan ay isang mahalagang bahagi ng ating kultura. Ito ay isang pagkakataon
                      para sa komunidad na magtipon-tipon at ipagdiwang ang kagandahan at kahulugan ng aurorahan.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Sa pagdiriwang na ito, may mga tradisyonal na sayaw, awit, at pagkain na inihahanda. Ito ay isang
                      paraan upang ipakita ang ating pasasalamat sa mga biyayang natatanggap natin mula sa kalikasan.
                    </p>
                  </div>
                </FadeInScroll>
              </div>
            </div>
          </section>

          <section className="py-16 bg-oat">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <FadeInScroll>
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium mb-4">
                      Mga Ritwal
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Mga Ritwal at Seremonya</h2>
                  </div>
                </FadeInScroll>
                <FadeInScroll delay={0.2}>
                  <div className="prose prose-lg max-w-none text-olive-dark">
                    <p>
                      Ang mga ritwal at seremonya na may kaugnayan sa aurorahan ay nagpapakita ng malalim na
                      pagpapahalaga ng ating mga ninuno sa kalikasan. Ang mga ritwal na ito ay may iba't ibang layunin,
                      tulad ng:
                    </p>
                    <ul>
                      <li>Paghingi ng biyaya at proteksyon</li>
                      <li>Pagpapasalamat sa mga biyayang natanggap</li>
                      <li>Paghingi ng gabay sa mga ninuno</li>
                      <li>Pagdiriwang ng buhay at kalikasan</li>
                    </ul>
                    <p>
                      Ang mga ritwal na ito ay karaniwang ginagawa ng mga matatanda o mga lider ng komunidad. Sila ay
                      gumagamit ng mga tradisyonal na instrumento at mga simbolo na may malalim na kahulugan sa ating
                      kultura.
                    </p>
                    <p>
                      Ang mga seremonya ay karaniwang ginagawa sa mga espesyal na lugar, tulad ng mga bundok, ilog, o
                      mga lugar na may malalim na koneksyon sa ating kasaysayan at kultura. Ang mga lugar na ito ay
                      itinuturing na sagrado at may espesyal na kahulugan sa ating mga ninuno.
                    </p>
                    <h3 className="text-cherry">Kahalagahan ng mga Ritwal</h3>
                    <p>
                      Ang mga ritwal at seremonya ay hindi lamang isang paraan upang ipakita ang ating pagpapahalaga sa
                      aurorahan. Ito ay nagsisilbi ring paraan upang maipasa ang ating kultura at tradisyon sa susunod
                      na henerasyon.
                    </p>
                    <p>
                      Sa pamamagitan ng mga ritwal na ito, naiintindihan ng mga kabataan ang kahalagahan ng aurorahan sa
                      ating kultura at kung paano ito nakakaapekto sa ating buhay at paniniwala.
                    </p>
                  </div>
                </FadeInScroll>
              </div>
            </div>
          </section>

          <section className="py-16 bg-olive text-oat">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <AnimatedText>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Alamin Pa</h2>
                </AnimatedText>
                <p className="text-oat/90 mb-8">
                  Gusto mo bang malaman pa ang tungkol sa mga gawi at tradisyon na may kaugnayan sa aurorahan? Bisitahin
                  ang iba pang mga bahagi ng aming website.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild className="bg-butter text-olive hover:bg-butter/90">
                    <Link href="/naratibong-danas/kaparaanan">Kaparaanan</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-butter text-butter hover:bg-butter/10">
                    <Link href="/naratibong-danas/paniniwala">Paniniwala</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
