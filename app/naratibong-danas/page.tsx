import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedImage } from "@/components/animated-image"
import { FloatingElement } from "@/components/floating-element"
import { FadeInScroll } from "@/components/fade-in-scroll"
import { PageTransition } from "@/components/page-transition"
import { Header } from "@/components/header"
import { BackButton } from "@/components/back-button"
import { EnhancedParticles } from "@/components/enhanced-particles"
import { GlassCard } from "@/components/glass-card"
import { AuroraWave } from "@/components/aurora-wave"

export default function NaratibongDanas() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-oat">
        <Header />
        <main>
          <section className="relative py-20 bg-gradient-to-b from-cherry to-cherry/90 text-oat overflow-hidden">
            <EnhancedParticles
              count={80}
              colors={["#FFEDAB", "#F0E6DA", "#75070C"]}
              shapes={["circle", "star", "triangle"]}
              minSize={3}
              maxSize={8}
            />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/aurora-pattern.svg')] bg-repeat"></div>
            </div>
            <FloatingElement className="absolute top-20 left-10 opacity-20">
              <div className="w-20 h-20 rounded-full bg-butter/30 blur-md"></div>
            </FloatingElement>
            <FloatingElement className="absolute bottom-20 right-10 opacity-20" delay={1}>
              <div className="w-32 h-32 rounded-full bg-butter/30 blur-md"></div>
            </FloatingElement>
            <AuroraWave className="z-0" height={300} opacity={0.2} />
            <div className="container relative z-10">
              <div className="flex flex-col items-center text-center space-y-6">
                <BackButton href="/" label="Bumalik sa Pangunahing Pahina" />
                <AnimatedText>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Naratibong <span className="text-butter">Danas</span>
                  </h1>
                </AnimatedText>
                <p className="max-w-2xl text-lg text-oat/90">
                  Tuklasin ang mga kwento, gawi, kaparaanan, at paniniwala tungkol sa aurorahan sa ating kultura.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-oat to-transparent"></div>
          </section>

          <section className="py-16 bg-oat relative overflow-hidden">
            <EnhancedParticles
              count={30}
              colors={["#75070C", "#4F6815"]}
              shapes={["circle", "square"]}
              minSize={2}
              maxSize={4}
            />
            <div className="container relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInScroll direction="right">
                  <GlassCard className="p-6 space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium">
                      Gawi
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Mga Kaugalian at Tradisyon</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Ayon sa karamihan, ang tradisyong Aurorahan ay isang pamana na naipasa mula sa mga naunang
                      henerasyon. Ito ay isang bahagi ng kanilang gawi at pamumuhay na kinamulatan at nakagisnan mula pa
                      sa kanilang mga magulang at ninuno.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Para sa mga matatanda sa bayan, hindi ito basta panalangin lamang, kundi isang mahalagang
                      pagpapahayag ng pananampalataya na patuloy nilang isinasagawa. Noong unang panahon, likas na itong
                      bahagi ng kanilang tradisyon. Sa paglipas ng panahon, ang Aurorahan ay nananatiling buhay at
                      ipinamamana sa bawat henerasyon.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Bagamat hindi sapilitan ang pakikilahok, marami pa ring nahihikayat at naengganyo ng mga kaibigan
                      at kamag-anak na sumali, dahil bitbit nito ang paniniwala na maaaring magdulot ito ng kagalingan,
                      kaligtasan, kaginhawaan, kapatawaran, at biyaya sa kanilang buhay.
                    </p>
                    <Button asChild className="bg-cherry hover:bg-cherry/90">
                      <Link href="/naratibong-danas/gawi" className="inline-flex items-center">
                        Tuklasin Pa <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </GlassCard>
                </FadeInScroll>
                <FadeInScroll direction="left">
                  <AnimatedImage>
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Tradisyonal na Gawi"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cherry/30 to-transparent opacity-60"></div>
                    </div>
                  </AnimatedImage>
                </FadeInScroll>
              </div>
            </div>
          </section>

          <section className="py-16 bg-butter/30 relative overflow-hidden">
            <EnhancedParticles
              count={40}
              colors={["#75070C", "#4F6815"]}
              shapes={["circle", "triangle"]}
              minSize={2}
              maxSize={5}
            />
            <div className="container relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInScroll direction="up" className="order-2 md:order-1">
                  <AnimatedImage>
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <div className="aspect-video relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-cherry/10">
                          <FloatingElement>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full w-16 h-16 bg-cherry text-oat hover:bg-cherry/90 hover:text-oat"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-8 w-8"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                              <span className="sr-only">Play Video</span>
                            </Button>
                          </FloatingElement>
                        </div>
                      </div>
                    </div>
                  </AnimatedImage>
                </FadeInScroll>
                <FadeInScroll direction="up" delay={0.2} className="order-1 md:order-2">
                  <GlassCard className="p-6 space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium">
                      Kaparaanan
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Mga Pamamaraan at Proseso</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Sa pagsapit ng hapon, nagtitipon ang mga tao sa maliit na chapel upang magsagawa ng nobena.
                      Tahimik na nagdarasal ang mga deboto at nag-aalay ng mga panalangin ng pasasalamat at paghingi ng
                      biyaya. Pagkatapos ng nobena, inilalabas ang imahen ng santo mula sa chapel at inilalagay sa
                      karosa na binubuhat ng parapas'an. Dito nagsisimula ang mismong Aurorahan.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Inililibot ang santo sa barangay habang ang mga deboto ay umaawit ng dalit para sa kanilang patron
                      at sabayang nagdarasal. May mga kandila, rosaryo, at tukarol na tangan ang mga lumalahok, mula sa
                      matatanda hanggang sa mga bata.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Buong prusisyon ay sinasabayan ng awit at panalangin bilang pagpapakita ng pananampalataya at
                      debosyon. Lahat ay aktibong nakikiisa sa taimtim na pagdiriwang ng pananalig.
                    </p>
                    <Button asChild className="bg-cherry hover:bg-cherry/90">
                      <Link href="/naratibong-danas/kaparaanan" className="inline-flex items-center">
                        Alamin Pa <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </GlassCard>
                </FadeInScroll>
              </div>
            </div>
          </section>

          <section className="py-16 bg-oat relative overflow-hidden">
            <EnhancedParticles
              count={30}
              colors={["#75070C", "#4F6815", "#FFEDAB"]}
              shapes={["circle", "star"]}
              minSize={2}
              maxSize={4}
            />
            <div className="container relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInScroll direction="right">
                  <GlassCard className="p-6 space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium">
                      Paniniwala
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Mga Paniniwala at Kwento</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Ang mga lumalahok sa tradisyong Aurorahan ay may malalim na paniniwala na ito ay isang
                      makapangyarihang paraan ng paglapit sa Diyos. Sa pamamagitan ng pagsama sa prusisyon at taimtim na
                      pagdarasal, napapatibay ng mga deboto ang kanilang pananampalataya.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Para sa mga deboto ni San Roque, ang patron ng mga may sakit, pinaniniwalaan nila na ang Aurorahan
                      ay isang paraan upang maiwasan ang karamdaman at magdulot ng kaginhawaan sa kalooban. Sa
                      tradisyong ito, sila ay naniniwala na sila ay pinoprotektahan mula sa panganib at kapahamakan.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Para naman sa mga deboto ni San Jose, ang patron ng mga manggagawa, itinuturing nilang panata ang
                      Aurorahan, isang pagpapakita ng pasasalamat o paghiling ng tulong.
                    </p>
                    <Button asChild className="bg-cherry hover:bg-cherry/90">
                      <Link href="/naratibong-danas/paniniwala" className="inline-flex items-center">
                        Tuklasin Pa <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </GlassCard>
                </FadeInScroll>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  )
}
