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
import { Footer } from "@/components/footer"
import { ParallaxSection } from "@/components/parallax-section"
import { GlassCard } from "@/components/glass-card"
import { EnhancedParticles } from "@/components/enhanced-particles"
import { AuroraWave } from "@/components/aurora-wave"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-oat">
        <Header />
        <main>
          <section className="relative py-20 bg-gradient-to-b from-cherry to-cherry/90 text-oat overflow-hidden">
            <EnhancedParticles
              count={100}
              colors={["#FFEDAB", "#F0E6DA", "#75070C"]}
              shapes={["circle", "star", "triangle"]}
              minSize={3}
              maxSize={8}
              interactive={true}
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
            <FloatingElement className="absolute top-40 right-1/4 opacity-20" delay={0.5}>
              <div className="w-16 h-16 rounded-full bg-butter/30 blur-md"></div>
            </FloatingElement>
            <AuroraWave className="z-0" height={300} opacity={0.2} />
            <div className="container relative z-10">
              <div className="flex flex-col items-center text-center space-y-6">
                <AnimatedText>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="text-butter">E-AURA</span>
                  </h1>
                </AnimatedText>
                <AnimatedText delay={0.3}>
                  <p className="max-w-2xl text-lg md:text-2xl text-oat/90 font-medium">
                    E-Aura Mo, Tradisyong Pilipino
                  </p>
                </AnimatedText>
                <AnimatedText delay={0.5}>
                  <p className="max-w-2xl text-lg text-oat/90">
                    Tuklasin ang mga kakaibang karanasan at kahulugan ng aurorahan sa ating kultura at paniniwala.
                  </p>
                </AnimatedText>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <AnimatedText delay={0.6}>
                    <Button asChild className="bg-olive hover:bg-olive/90 text-oat">
                      <Link href="#tungkol-sa-web">Simulan ang Paglalakbay</Link>
                    </Button>
                  </AnimatedText>
                  <AnimatedText delay={0.7}>
                    <Button asChild variant="outline" className="border-oat text-oat hover:bg-oat/10">
                      <Link href="/tungkol-sa-mananaliksik">Tungkol sa Mananaliksik</Link>
                    </Button>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-oat to-transparent"></div>
          </section>

          <ParallaxSection className="py-16 bg-oat">
            <div className="container" id="tungkol-sa-web">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInScroll direction="right">
                  <GlassCard className="p-6 space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium">
                      Tungkol sa Website
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Ang Aming Layunin</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Ang website na ito ay produkto ng isang pananaliksik na naglalayong maitala, mapreserba, at
                      maipalaganap ang Aurorahan—isang tradisyon ng pananampalataya na isinasagawa sa bayan ng Daet,
                      Camarines Norte.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Ginawa ang website na ito upang magsilbing bukas na sanggunian para sa mga mag-aaral, guro,
                      mananaliksik, at sinumang may interes sa lokal na kultura at panitikan. Sa pamamagitan ng
                      audio-visual na dokumentasyon at naratibong datos mula sa mga kalahok sa Aurorahan, inaasahang
                      makatutulong ito sa mas malawak na pag-unawa at pagpapahalaga sa mga tradisyong Pilipino.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Higit sa lahat, nais ng website na ito na ilahad ang mga karanasan at paniniwala ng mga lokal na
                      mamamayan na patuloy na nagsasagawa ng Aurorahan—upang hindi sila makalimutan sa paglipas ng
                      panahon.
                    </p>
                    <p className="text-olive-dark leading-relaxed font-bold">
                      HALINA'T E-AURA ANG TRADISYONG PILIPINO!
                    </p>
                    <Button asChild className="bg-cherry hover:bg-cherry/90">
                      <Link href="/naratibong-danas" className="inline-flex items-center">
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
                        alt="Aurora Phenomenon"
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
          </ParallaxSection>

          <ParallaxSection
            className="py-16 bg-butter/30 relative overflow-hidden"
            speed={0.3}
            id="tungkol-sa-aurorahan"
          >
            <EnhancedParticles
              count={50}
              colors={["#75070C", "#4F6815"]}
              shapes={["circle", "square"]}
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
                      Tungkol sa Aurorahan
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Ang Kahulugan ng Aurorahan</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Ang Aurorahan ay isang tradisyong panrelihiyon sa rehiyong Bikol na nakaugat sa pananampalatayang
                      Katoliko ng mga mamamayan. Ipinagdiriwang ito bilang panalangin at paghingi ng tulong sa patron ng
                      bayan—gaya nina San Roque (patron ng mga maysakit), San Jose (patron ng mga manggagawa), at
                      Nuestra Señora de Peñafrancia (patrona ng Kabikulan).
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Tinawag itong Aurorahan dahil unang isinagawa ito tuwing bukang-liwayway (aurora sa wikang
                      Kastila). Sa kasalukuyan, isinasagawa na ito tuwing ika-anim ng gabi. Ipinagdiriwang ito sa buong
                      buwan ng Mayo o Agosto (depende sa lugar) at nahahati sa tatlong yugto ng pasiyam.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Gabi-gabi, nagtitipon ang mga deboto upang magdasal at umawit ng dalit—isang sagutang awit na
                      inaawit ng mga cantoras (paradasal). Kasabay nito, inililibot sa barangay ang karosa na may dalang
                      imahen ng mga santo, na binubuhat ng mga parapa'san. Bahagi rin ng tradisyon ang paghahanda ng
                      pagkain ng may kabig (sponsor), lalo na sa huling gabi na pinangungunahan ng Cabo Mayor
                      (pangunahing sponsor) ng selebrasyon.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Ang Aurorahan ay hindi lamang isang gawaing panrelihiyon kundi isang pagpapahayag ng sama-samang
                      pananampalataya at pasasalamat ng komunidad. Iniaalay ito bilang panalangin para sa masaganang
                      ani, proteksyon sa sakuna, biyaya sa mga manggagawa, at gabay para sa buong pamayanan sa
                      pamamagitan ng pananampalataya sa kanilang mga patron.
                    </p>
                    <Button asChild className="bg-cherry hover:bg-cherry/90">
                      <Link href="/naratibong-danas/gawi" className="inline-flex items-center">
                        Alamin Pa <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </GlassCard>
                </FadeInScroll>
              </div>
            </div>
          </ParallaxSection>

          <section id="aurorahan-sa-daet" className="py-16 bg-oat relative overflow-hidden">
            <EnhancedParticles
              count={70}
              colors={["#75070C", "#4F6815", "#FFEDAB"]}
              shapes={["circle", "star", "triangle"]}
              minSize={2}
              maxSize={6}
            />
            <div className="container relative z-10">
              <FadeInScroll>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium mb-4">
                    Aurorahan sa Daet
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-cherry">Aurorahan sa Daet</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-olive-dark">
                    Kilala ang bayan ng Daet sa mga makulay na tradisyon, lalo na ang mga relihiyosong gawain na
                    nagpapakita ng kanilang matatag na pananampalataya. Isang halimbawa nito ang Aurorahan—isang
                    espiritwal at kultural na debosyon na sumasalamin sa pananampalataya at pagkakaisa ng mga Katoliko
                    sa Daet, Camarines Norte.
                  </p>
                  <p className="mt-4 max-w-2xl mx-auto text-olive-dark">
                    Binubuo ito ng dasal, awit, at prusisyon bilang pagpaparangal sa patron ng bawat barangay. Taon-taon
                    itong isinasagawa sa tatlong yugto ng siyam na araw. Kabilang sa mga barangay na nagsasagawa nito ay
                    ang Gahonon, Pandan, Mancruz, Pamorangon, at Salcedo, at karaniwang ginaganap tuwing Mayo o Agosto
                    bago ang kapistahan.
                  </p>
                </div>
              </FadeInScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Gahonon", "Pandan", "Mancruz", "Pamorangon", "Salcedo", "Daet Center"].map((barangay, i) => (
                  <FadeInScroll key={i} delay={i * 0.1}>
                    <AnimatedImage delay={i * 0.1}>
                      <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Barangay+${barangay}`}
                          alt={`Barangay ${barangay}`}
                          width={400}
                          height={300}
                          className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cherry/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-oat">
                            <h3 className="font-medium">Barangay {barangay}</h3>
                            <p className="text-sm opacity-90">Aurorahan sa {barangay}, Daet</p>
                          </div>
                        </div>
                      </div>
                    </AnimatedImage>
                  </FadeInScroll>
                ))}
              </div>
              <FadeInScroll delay={0.6}>
                <div className="mt-10 text-center">
                  <Button asChild className="bg-cherry hover:bg-cherry/90">
                    <Link href="/gallery">Tingnan Lahat ng Larawan</Link>
                  </Button>
                </div>
              </FadeInScroll>
            </div>
          </section>

          <section className="py-16 bg-olive text-oat relative overflow-hidden">
            <EnhancedParticles
              count={60}
              colors={["#FFEDAB", "#F0E6DA"]}
              shapes={["circle", "star"]}
              minSize={2}
              maxSize={5}
            />
            <AuroraWave className="z-0" height={200} opacity={0.2} />
            <div className="container relative z-10">
              <div className="grid md:grid-cols-3 gap-8">
                <FadeInScroll direction="up">
                  <GlassCard className="p-6 text-center h-full" intensity="light">
                    <FloatingElement className="inline-block">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-butter text-olive mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-bold mb-2">Naratibong Danas</h3>
                    <p className="text-oat/80 mb-4">
                      Tuklasin ang mga kwento, gawi, at paniniwala tungkol sa aurorahan.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-butter text-butter hover:bg-butter hover:text-olive"
                    >
                      <Link href="/naratibong-danas">Tuklasin</Link>
                    </Button>
                  </GlassCard>
                </FadeInScroll>
                <FadeInScroll direction="up" delay={0.2}>
                  <GlassCard className="p-6 text-center h-full" intensity="light">
                    <FloatingElement className="inline-block" delay={0.1}>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-butter text-olive mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.6a2 2 0 0 1 1.4-.6h3.8a2 2 0 0 1 2 2v2.4Z"></path>
                        </svg>
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-bold mb-2">Implikasyon</h3>
                    <p className="text-oat/80 mb-4">Alamin ang mga implikasyon sa esperitwalidad at kultura.</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-butter text-butter hover:bg-butter hover:text-olive"
                    >
                      <Link href="/implikasyon">Alamin</Link>
                    </Button>
                  </GlassCard>
                </FadeInScroll>
                <FadeInScroll direction="up" delay={0.4}>
                  <GlassCard className="p-6 text-center h-full" intensity="light">
                    <FloatingElement className="inline-block" delay={0.2}>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-butter text-olive mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <circle cx="12" cy="8" r="5"></circle>
                          <path d="M20 21a8 8 0 1 0-16 0"></path>
                        </svg>
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-bold mb-2">Tungkol sa Mananaliksik</h3>
                    <p className="text-oat/80 mb-4">Kilalanin ang mananaliksik sa likod ng pag-aaral na ito.</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-butter text-butter hover:bg-butter hover:text-olive"
                    >
                      <Link href="/tungkol-sa-mananaliksik">Kilalanin</Link>
                    </Button>
                  </GlassCard>
                </FadeInScroll>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
