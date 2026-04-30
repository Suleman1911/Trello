import { Button } from "@/components/ui/button"
import { Medal } from "lucide-react"
import Link from "next/link"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

const HeadingFont = localFont({
  src: "../../public/fonts/font.woff2",
})

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn(" flex items-center justify-center flex-col", HeadingFont.className)}>
        <div className="mb-4 p-4 flex items-center border shadow-sm bg-amber-100 text-amber-700 rounded-full uppercase ">
          <Medal className="h-6 w-6 mr-2" />
          No 1 Task Management Tool
        </div>
        <h1 className="tex-3xl md:text-6xl text-neutral-800 text-center">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-linear-to-r from-fuchsia-600 to-pink-600 text-white px-2 p-2 rounded-md pb-4 w-fit mt-4">
          Work forward.
        </div>
      </div>
      <div className={cn("text-sm md:text-xl text-neutral-400 text-center mt-4 max-w-xs md:max-w-2xl mx-auto ", textFont.className)}>
        Collabrate, manage projects, and reach new productivity peaks.
        From high rises to the home office, the way your team works
        is unique — accomplish it all with Taskify.
      </div>
      <Button className="mt-4" size="lg" asChild>
        <Link href="/sign-up" className="text-sm md:text-lg">
          Get Taskify for free
        </Link>
      </Button>
    </div>
  )
}

export default page
