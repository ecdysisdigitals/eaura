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
import { BackButton } from "@/components/back-button"
import { GlassCard } from "@/components/glass-card"
import { EnhancedParticles } from "@/components/enhanced-particles"
import { AuroraWave } from "@/components/aurora-wave"

export default function Implikasyon() {
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
                    <span className="text-butter">Implikasyon</span> ng Aurorahan
                  </h1>
                </AnimatedText>
                <p className="max-w-2xl text-lg text-oat/90">
                  Alamin ang mga implikasyon ng aurorahan sa ating esperitwalidad at kultura.
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
                      Esperitwalidad
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Koneksyon sa Espiritu</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Ang mga naratibong danas ng mga kalahok sa Aurorahan sa bayan ng Daet ay nagpapakita ng malalim na
                      epekto sa kanilang espiritwalidad. Ayon sa mga kalahok, ang patuloy na pagsali sa tradisyong ito
                      ay nagiging isang paraan upang mas mapalalim ang kanilang pananampalataya at ugnayan sa Diyos.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Ang espiritwal na epekto ng Aurorahan ay nakikita sa mga damdamin ng kapayapaan ng loob, pag-asa,
                      at pasasalamat. Sa tuwing isinasagawa ito, nararanasan ng mga kalahok ang isang malalim na
                      koneksyon sa Diyos at sa kanilang kapwa, na nagiging daan upang magkaroon ng mas matibay na
                      pananampalataya.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Marami sa kanila ang naniniwala na kapag sumasali sila sa Aurorahan, nararamdaman nilang gumagaan
                      ang kanilang pakiramdam at ang kanilang buhay. Pinaniniwalaan din nilang ang kanilang mga
                      kahilingan, maging ito ay para sa biyaya o proteksyon mula sa kapahamakan, ay maaaring matupad.
                    </p>
                    <Button asChild className="bg-cherry hover:bg-cherry/90">
                      <Link href="/implikasyon/esperitwalidad" className="inline-flex items-center">
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
                        alt="Espirituwal na Koneksyon"
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
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Kultural na Kahalagahan"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cherry/30 to-transparent opacity-60"></div>
                    </div>
                  </AnimatedImage>
                </FadeInScroll>
                <FadeInScroll direction="up" delay={0.2} className="order-1 md:order-2">
                  <GlassCard className="p-6 space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium">
                      Kultural
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-cherry">Impluwensya sa Kultura</h2>
                    <p className="text-olive-dark leading-relaxed">
                      Sa kabila ng mga espiritwal na aspekto, ang Aurorahan ay may malalim ding epekto sa kultura ng
                      bayan ng Daet. Pinapatibay nito ang pagkakaisa, pagtutulungan, at diwa ng bayanihan sa buong
                      komunidad. Itinuturing itong isang pamana ng kanilang mga ninuno, isang tradisyon na patuloy
                      nilang pinahahalagahan at isinasabuhay.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Ayon sa mga naratibo ng mga kalahok, ang mga tao ay patuloy na nagbibigay ng kanilang oras at
                      lakas upang matiyak ang tagumpay ng Aurorahan taon-taon. Ang kanilang pagsasama-sama, mula sa mga
                      matatanda hanggang sa mga bata, upang magsagawa ng mga panalangin at magdiwang ng pagkakaisa, ay
                      nagpapakita ng isang buhay na kultura na nakatali sa kanilang pananampalataya at pagkakabuklod
                      bilang isang bayan.
                    </p>
                    <p className="text-olive-dark leading-relaxed">
                      Ang Aurorahan ay hindi lamang isang relihiyosong gawain, kundi isang kultural na gawain na
                      nagbubuklod sa bawat isa sa bayan ng Daet. Sa bawat prusisyon at pagtitipon, napapalakas ang diwa
                      ng bayanihan at paggalang sa mga tradisyon.
                    </p>
                    <Button asChild className="bg-cherry hover:bg-cherry/90">
                      <Link href="/implikasyon/kultural" className="inline-flex items-center">
                        Alamin Pa <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </GlassCard>
                </FadeInScroll>
              </div>
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
              <div className="text-center mb-12">
                <AnimatedText>
                  <h2 className="text-3xl md:text-4xl font-bold">Kahalagahan ng Pag-unawa</h2>
                </AnimatedText>
                <p className="mt-4 max-w-2xl mx-auto text-oat/90">
                  Ang pag-unawa sa mga implikasyon ng aurorahan ay mahalaga upang mapahalagahan natin ang ating kultura
                  at tradisyon.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <FadeInScroll direction="left">
                  <GlassCard className="bg-olive-dark/30 p-6 backdrop-blur-sm" intensity="light">
                    <h3 className="text-xl font-bold text-butter mb-4">Pagpapanatili ng Tradisyon</h3>
                    <p className="text-oat/90 mb-4">
                      Sa pamamagitan ng pag-unawa sa mga implikasyon ng aurorahan, napapanatili natin ang mga tradisyon
                      at kaugalian na may kaugnayan dito. Ito ay isang paraan upang maipasa natin sa susunod na
                      henerasyon ang mayamang kultura na ating minana.
                    </p>
                    <p className="text-oat/90">
                      Ang pagpapanatili ng mga tradisyong ito ay nakakatulong upang mapanatili ang ating pagkakakilanlan
                      bilang isang kultura at lipunan.
                    </p>
                  </GlassCard>
                </FadeInScroll>
                <FadeInScroll direction="right">
                  <GlassCard className="bg-olive-dark/30 p-6 backdrop-blur-sm" intensity="light">
                    <h3 className="text-xl font-bold text-butter mb-4">Pagpapayaman ng Kaalaman</h3>
                    <p className="text-oat/90 mb-4">
                      Ang pag-aaral ng mga implikasyon ng aurorahan ay nagpapayaman sa ating kaalaman tungkol sa ating
                      sariling kultura at kasaysayan. Ito ay nagbibigay sa atin ng mas malalim na pag-unawa sa kung sino
                      tayo bilang isang lipunan.
                    </p>
                    <p className="text-oat/90">
                      Sa pamamagitan ng pagpapayaman ng ating kaalaman, mas nauunawaan natin ang ating sarili at ang
                      ating lugar sa mundo.
                    </p>
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
