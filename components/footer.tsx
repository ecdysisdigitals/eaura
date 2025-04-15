import Image from "next/image"
import Link from "next/link"
import { FloatingElement } from "@/components/floating-element"

export function Footer() {
  return (
    <footer className="bg-cherry text-oat py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FloatingElement>
                <Image src="/logo.svg" alt="Eaura Logo" width={40} height={40} />
              </FloatingElement>
              <span className="text-xl font-bold">Eaura</span>
            </div>
            <p className="text-oat/80">
              Tuklasin ang mga kakaibang karanasan at kahulugan ng aurorahan sa ating kultura at paniniwala.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-butter mb-4">Pangunahing Pahina</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#tungkol-sa-web" className="text-oat/80 hover:text-butter transition-colors">
                  Tungkol sa Web
                </Link>
              </li>
              <li>
                <Link href="/#tungkol-sa-aurorahan" className="text-oat/80 hover:text-butter transition-colors">
                  Tungkol sa Aurorahan
                </Link>
              </li>
              <li>
                <Link href="/#aurorahan-sa-daet" className="text-oat/80 hover:text-butter transition-colors">
                  Aurorahan sa Daet
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-butter mb-4">Naratibong Danas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/naratibong-danas/gawi" className="text-oat/80 hover:text-butter transition-colors">
                  Gawi
                </Link>
              </li>
              <li>
                <Link href="/naratibong-danas/kaparaanan" className="text-oat/80 hover:text-butter transition-colors">
                  Kaparaanan
                </Link>
              </li>
              <li>
                <Link href="/naratibong-danas/paniniwala" className="text-oat/80 hover:text-butter transition-colors">
                  Paniniwala
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-butter mb-4">Implikasyon</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/implikasyon/esperitwalidad" className="text-oat/80 hover:text-butter transition-colors">
                  Ispirituwalidad
                </Link>
              </li>
              <li>
                <Link href="/implikasyon/kultural" className="text-oat/80 hover:text-butter transition-colors">
                  Kultural
                </Link>
              </li>
              <li>
                <Link href="/tungkol-sa-mananaliksik" className="text-oat/80 hover:text-butter transition-colors">
                  Tungkol sa Mananaliksik
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-oat/20 mt-8 pt-8 text-center text-oat/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Eaura. Lahat ng karapatan ay nakalaan.</p>
        </div>
      </div>
    </footer>
  )
}
