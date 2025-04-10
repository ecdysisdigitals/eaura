import Image from "next/image"
import { GlassCard } from "@/components/glass-card"
import { FadeInScroll } from "@/components/fade-in-scroll"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <FadeInScroll>
      <GlassCard className="p-6 h-full flex flex-col">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-butter/50">
            <Image src={image || "/placeholder.svg"} alt={name} width={128} height={128} className="object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-cherry">{name}</h3>
            <p className="text-olive-dark font-medium mb-2">{role}</p>
            <p className="text-olive-dark/80">{bio}</p>
          </div>
        </div>
      </GlassCard>
    </FadeInScroll>
  )
}
