import { AnimatedText } from "@/components/animated-text"
import { FloatingElement } from "@/components/floating-element"
import { FadeInScroll } from "@/components/fade-in-scroll"
import { PageTransition } from "@/components/page-transition"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { ParallaxSection } from "@/components/parallax-section"
import { GlassCard } from "@/components/glass-card"
import { TeamMember } from "@/components/team-member"
import { EnhancedParticles } from "@/components/enhanced-particles"
import { AuroraWave } from "@/components/aurora-wave"

export default function TungkolSaMananaliksik() {
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
                    Tungkol sa <span className="text-butter">Mananaliksik</span>
                  </h1>
                </AnimatedText>
                <p className="max-w-2xl text-lg text-oat/90">
                  Kilalanin ang mga mananaliksik sa likod ng pag-aaral tungkol sa aurorahan at ang kanilang layunin.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-oat to-transparent"></div>
          </section>

          <section className="py-16 bg-oat relative overflow-hidden">
            <EnhancedParticles
              count={40}
              colors={["#75070C", "#4F6815", "#FFEDAB"]}
              shapes={["circle", "square"]}
              minSize={2}
              maxSize={4}
            />
            <div className="container relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cherry mb-4">Ang Aming Koponan</h2>
                <p className="text-olive-dark max-w-2xl mx-auto">
                  Kilalanin ang mga mananaliksik na nagsaliksik at nagdokumento ng mga tradisyon at paniniwala tungkol
                  sa aurorahan.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <TeamMember
                  name="GRACE JOY A. BAYANI"
                  role="Mananaliksik"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Si Grace Joy Andaya Bayani ay isang mag-aaral mula sa Camarines Norte State College at kasalukuyang nasa ikatlong taon ng kursong Batsilyer sa Pansekondaryang Edukasyon Medyor sa Filipino. May interes siya sa mga gawaing may kinalaman sa pag-aaral at pagtuturo. Mahilig siyang magsulat ng mga tula at iba pang akdang pampanitikan na may kaugnayan sa kanyang mga personal na karanasan. Pangarap niyang maging guro sa asignaturang Filipino at magturo sa sekondarya. Layunin niyang maibahagi ang kanyang kaalaman tungkol sa wika, panitikan, at kulturang Pilipino."
                />

                <TeamMember
                  name="JOMEL H. RECTO"
                  role="Mananaliksik"
                  image="/placeholder.svg?height=300&width=300"
                  bio="Si Jomel Hernandez Recto ay kasalukuyang nasa ikatlong taon ng kanyang kursong Batsilyer sa Pansekondaryang Edukasyon Medyor sa Filipino sa Camarines Norte State College. Ang kanyang mga interes ay nakatuon sa pagtuturo, lalo na ang pagpapalaganap ng wika at kulturang Pilipino. Hangad niyang maging isang guro na makapagbibigay ng inspirasyon sa kabataan. Sa pamamagitan ng kanyang mga kaalaman at kasanayan, nais niyang makatulong sa paghubog ng mga mag-aaral na may malasakit sa kanilang sariling wika at bayan."
                />
              </div>
            </div>
          </section>

          <ParallaxSection id="background" className="py-16 bg-butter/30 relative overflow-hidden">
            <EnhancedParticles
              count={30}
              colors={["#75070C", "#4F6815"]}
              shapes={["circle", "triangle"]}
              minSize={2}
              maxSize={4}
            />
            <div className="container relative z-10">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-cherry/10 text-cherry text-sm font-medium mb-4">
                    Background
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-cherry">Aming Paglalakbay</h2>
                </div>
                <FadeInScroll>
                  <GlassCard className="p-8">
                    <div className="prose prose-lg max-w-none text-olive-dark">
                      <p>
                        Ang website na ito ay produkto ng isang pananaliksik na naglalayong maitala, mapreserba, at
                        maipalaganap ang Aurorahan—isang tradisyon ng pananampalataya na isinasagawa sa bayan ng Daet,
                        Camarines Norte.
                      </p>
                      <p>
                        Ginawa ang website na ito upang magsilbing bukas na sanggunian para sa mga mag-aaral, guro,
                        mananaliksik, at sinumang may interes sa lokal na kultura at panitikan. Sa pamamagitan ng
                        audio-visual na dokumentasyon at naratibong datos mula sa mga kalahok sa Aurorahan, inaasahang
                        makatutulong ito sa mas malawak na pag-unawa at pagpapahalaga sa mga tradisyong Pilipino.
                      </p>
                      <p>
                        Higit sa lahat, nais ng website na ito na ilahad ang mga karanasan at paniniwala ng mga lokal na
                        mamamayan na patuloy na nagsasagawa ng Aurorahan—upang hindi sila makalimutan sa paglipas ng
                        panahon.
                      </p>
                      <h3 className="text-cherry">Aming Metodolohiya</h3>
                      <p>
                        Sa aming pananaliksik, gumamit kami ng iba't ibang metodolohiya upang makakuha ng
                        komprehensibong pag-unawa sa aurorahan at ang kahalagahan nito sa ating kultura.
                      </p>
                      <ul>
                        <li>Pakikipanayam sa mga matatanda at eksperto</li>
                        <li>Pagsusuri ng mga dokumento at literatura</li>
                        <li>Pagmamasid at pagdodokumento ng mga ritwal at seremonya</li>
                        <li>Pagsusuri ng mga artefact at sining na may kaugnayan sa aurorahan</li>
                      </ul>
                      <h3 className="text-cherry">Aming Layunin</h3>
                      <p>
                        Ang aming pangunahing layunin ay maipakita at maipasa ang mayamang kultura at tradisyon na may
                        kaugnayan sa aurorahan. Nais naming matulungan ang mga tao na maunawaan at mapahalagahan ang
                        kahalagahan ng aurorahan sa ating kultura at paniniwala.
                      </p>
                      <p>
                        Umaasa kami na sa pamamagitan ng website na ito, mas maraming tao ang magkakaroon ng interes at
                        pagpapahalaga sa aurorahan at ang kahalagahan nito sa ating kultura.
                      </p>
                    </div>
                  </GlassCard>
                </FadeInScroll>
              </div>
            </div>
          </ParallaxSection>

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
              <div className="max-w-3xl mx-auto text-center">
                <AnimatedText>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Makipag-ugnayan</h2>
                </AnimatedText>
                <p className="text-oat/90 mb-8">
                  Kung mayroon kang mga katanungan, komento, o nais makipagtulungan, huwag mag-atubiling makipag-ugnayan
                  sa amin.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
