import { T } from "gt-next";
import { Num } from "gt-next";
import Header from "@/components/Header";
import Sparkle from "@/components/Sparkle";

export default function CatShrinePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Sparkles scattered around */}
      <Sparkle style={{ top: "10%", left: "5%" }} delay={0} />
      <Sparkle style={{ top: "20%", right: "8%" }} delay={0.5} />
      <Sparkle style={{ top: "45%", left: "3%" }} delay={1} />
      <Sparkle style={{ top: "60%", right: "5%" }} delay={1.5} />
      <Sparkle style={{ top: "80%", left: "10%" }} delay={0.3} />
      <Sparkle style={{ top: "35%", right: "12%" }} delay={0.8} />

      {/* Under Construction Banner */}
      <T>
        <div className="bg-yellow-400 text-black py-2 text-center font-bold text-lg border-y-4 border-dashed border-red-600">
          <span className="blink">{">>> "}</span>
          UNDER CONSTRUCTION - More cats coming soon!!!
          <span className="blink">{" <<<"}</span>
        </div>
      </T>

      {/* Marquee */}
      <div className="bg-[#ff00ff] py-2 overflow-hidden">
        <T>
          <div className="marquee text-yellow-300 font-bold text-xl">
            Welcome to the ULTIMATE Cat Shrine!!! The best cat page on the World Wide Web!!! You are visitor number <Num>{48293}</Num>!!! Please sign my guestbook!!!
          </div>
        </T>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Title Section */}
        <T>
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold rainbow mb-4">
              The Ultimate Cat Shrine
            </h1>
            <p className="text-xl text-[#00ff00]">
              A sacred place dedicated to the worship of our feline overlords
            </p>
            <p className="text-[#ffff00] mt-2 text-sm">
              Best viewed with Netscape Navigator at 800x600 resolution
            </p>
          </div>
        </T>

        {/* Visitor Counter */}
        <T>
          <div className="text-center mb-8 retro-border inline-block mx-auto p-3 bg-black/60" style={{ display: "block", maxWidth: "fit-content", margin: "0 auto 2rem auto" }}>
            <p className="text-[#00ffff] text-sm mb-1">You are visitor number:</p>
            <p className="text-[#ff0000] text-3xl font-bold tracking-widest font-mono">
              <Num>{48293}</Num>
            </p>
            <p className="text-[#c0c0c0] text-xs mt-1">Since January 1st, 1997</p>
          </div>
        </T>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-2xl spin-slow inline-block">{"*"}</span>
          <div className="h-1 w-32 bg-gradient-to-r from-[#ff00ff] via-[#ffff00] to-[#00ffff]" />
          <span className="text-2xl spin-slow inline-block">{"*"}</span>
          <div className="h-1 w-32 bg-gradient-to-r from-[#00ffff] via-[#ffff00] to-[#ff00ff]" />
          <span className="text-2xl spin-slow inline-block">{"*"}</span>
        </div>

        {/* Cat Gallery */}
        <T>
          <h2 className="text-3xl text-[#ff00ff] text-center mb-6 font-bold">
            Hall of Famous Cats
          </h2>
          <p className="text-center text-[#00ff00] mb-8">
            These magnificent creatures grace our shrine with their beauty
          </p>
        </T>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <T>
            <div className="text-center float" style={{ animationDelay: "0s" }}>
              <div className="cat-img inline-block">
                <img src="https://cataas.com/cat?width=300&height=300&_=1" alt="Sir Fluffington III" width={200} height={200} style={{ filter: "sepia(80%) contrast(120%)", width: 200, height: 200, objectFit: "cover" }} />
              </div>
              <h3 className="text-[#ff00ff] font-bold mt-2 text-lg">Sir Fluffington III</h3>
              <p className="text-[#c0c0c0] text-sm mt-1">A majestic feline of noble bearing and impeccable whiskers</p>
            </div>
          </T>
          <T>
            <div className="text-center" style={{ animationDelay: "0.5s" }}>
              <div className="cat-img inline-block">
                <img src="https://cataas.com/cat?width=350&height=250&_=2" alt="Princess Meowsworth" width={200} height={200} style={{ filter: "grayscale(60%) brightness(110%)", width: 200, height: 200, objectFit: "cover" }} />
              </div>
              <h3 className="text-[#ff00ff] font-bold mt-2 text-lg">Princess Meowsworth</h3>
              <p className="text-[#c0c0c0] text-sm mt-1">Ruler of all she surveys, especially the kitchen counter</p>
            </div>
          </T>
          <T>
            <div className="text-center float" style={{ animationDelay: "1s" }}>
              <div className="cat-img inline-block">
                <img src="https://cataas.com/cat?width=280&height=320&_=3" alt="Captain Whiskerface" width={200} height={200} style={{ filter: "saturate(200%) hue-rotate(20deg)", width: 200, height: 200, objectFit: "cover" }} />
              </div>
              <h3 className="text-[#ff00ff] font-bold mt-2 text-lg">Captain Whiskerface</h3>
              <p className="text-[#c0c0c0] text-sm mt-1">Brave explorer of cardboard boxes and paper bags</p>
            </div>
          </T>
          <T>
            <div className="text-center" style={{ animationDelay: "1.5s" }}>
              <div className="cat-img inline-block">
                <img src="https://cataas.com/cat?width=320&height=280&_=4" alt="Lady Purrcelot" width={200} height={200} style={{ filter: "sepia(40%) contrast(130%) brightness(90%)", width: 200, height: 200, objectFit: "cover" }} />
              </div>
              <h3 className="text-[#ff00ff] font-bold mt-2 text-lg">Lady Purrcelot</h3>
              <p className="text-[#c0c0c0] text-sm mt-1">Elegant and refined, with a taste for the finest tuna</p>
            </div>
          </T>
          <T>
            <div className="text-center float" style={{ animationDelay: "2s" }}>
              <div className="cat-img inline-block">
                <img src="https://cataas.com/cat?width=260&height=260&_=5" alt="Baron Von Snuggles" width={200} height={200} style={{ filter: "grayscale(100%)", width: 200, height: 200, objectFit: "cover" }} />
              </div>
              <h3 className="text-[#ff00ff] font-bold mt-2 text-lg">Baron Von Snuggles</h3>
              <p className="text-[#c0c0c0] text-sm mt-1">Professional napper and champion biscuit maker</p>
            </div>
          </T>
          <T>
            <div className="text-center" style={{ animationDelay: "2.5s" }}>
              <div className="cat-img inline-block">
                <img src="https://cataas.com/cat?width=340&height=300&_=6" alt="Duchess Fuzzypaws" width={200} height={200} style={{ filter: "sepia(60%) saturate(150%)", width: 200, height: 200, objectFit: "cover" }} />
              </div>
              <h3 className="text-[#ff00ff] font-bold mt-2 text-lg">Duchess Fuzzypaws</h3>
              <p className="text-[#c0c0c0] text-sm mt-1">Keeper of secrets and destroyer of curtains</p>
            </div>
          </T>
        </div>

        {/* Cat Facts Section */}
        <T>
          <div className="retro-border bg-[#000066]/80 p-6 mb-10">
            <h2 className="text-3xl text-[#ffff00] text-center mb-6 font-bold">
              Amazing Cat Facts
            </h2>
            <ul className="space-y-3 text-[#00ffff]">
              <li className="flex items-start gap-2">
                <span className="text-[#ff00ff] font-bold shrink-0">{">>>"}</span>
                <span>Cats sleep for approximately 70% of their lives. They have the right idea!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff00ff] font-bold shrink-0">{">>>"}</span>
                <span>A group of cats is called a clowder. A group of kittens is called a kindle!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff00ff] font-bold shrink-0">{">>>"}</span>
                <span>Cats have over 20 vocalizations, including the famous purr which vibrates at a frequency that promotes bone healing!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff00ff] font-bold shrink-0">{">>>"}</span>
                <span>The first cat in space was a French cat named Felicette in 1963. She survived the trip!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff00ff] font-bold shrink-0">{">>>"}</span>
                <span>Ancient Egyptians would shave off their eyebrows when their cats died as a sign of mourning.</span>
              </li>
            </ul>
          </div>
        </T>

        {/* Guestbook Section */}
        <T>
          <div className="guestbook-bg retro-border p-6 mb-10">
            <h2 className="text-3xl text-[#ff00ff] text-center mb-4 font-bold">
              Guestbook
            </h2>
            <p className="text-center text-[#ffff00] mb-6">
              Sign my guestbook and tell me about YOUR cats!!!
            </p>
            <div className="space-y-4">
              <div className="bg-black/40 p-3 retro-border">
                <p className="text-[#00ff00] font-bold">xX_CatLover99_Xx</p>
                <p className="text-[#c0c0c0] text-sm">Cool page!!! My cat Whiskers says hi!!!</p>
              </div>
              <div className="bg-black/40 p-3 retro-border">
                <p className="text-[#00ff00] font-bold">~*KittyQueen*~</p>
                <p className="text-[#c0c0c0] text-sm">This is the best cat page on the internet! Added to my bookmarks!</p>
              </div>
              <div className="bg-black/40 p-3 retro-border">
                <p className="text-[#00ff00] font-bold">FelinesForever2000</p>
                <p className="text-[#c0c0c0] text-sm">I have 7 cats and they all approved of this website. Five stars!!!</p>
              </div>
            </div>
          </div>
        </T>

        {/* Links Section */}
        <T>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-[#ffff00] mb-4 font-bold">Cool Cat Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.reddit.com/r/cats/" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] underline hover:text-[#ff00ff]">Cat Pictures Ring</a>
              <span className="text-[#00ffff]">|</span>
              <a href="https://icatcare.org/" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] underline hover:text-[#ff00ff]">Feline Fan Club</a>
              <span className="text-[#00ffff]">|</span>
              <a href="https://giphy.com/search/cats" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] underline hover:text-[#ff00ff]">Cat GIF Archive</a>
              <span className="text-[#00ffff]">|</span>
              <a href="https://en.wikipedia.org/wiki/Cat" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] underline hover:text-[#ff00ff]">Whiskers WebRing</a>
            </div>
          </div>
        </T>

        {/* Example App Disclaimer */}
        <T>
          <div className="text-center text-[#c0c0c0] text-xs mb-6 retro-border p-3 bg-black/40 max-w-2xl mx-auto">
            <p>This is an example application built with General Translation to demonstrate internationalization. No cats were harmed in the making of this website.</p>
          </div>
        </T>

        {/* Footer */}
        <T>
          <footer className="text-center text-[#808080] text-xs pb-8">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent mb-4" />
            <p>Made with love and HTML by CatWebmaster1997</p>
            <p className="mt-1">Last updated: February 14, 1997</p>
            <p className="mt-1">This page is part of the CatLovers WebRing</p>
            <p className="mt-2 text-[#ffff00]">Powered by General Translation</p>
          </footer>
        </T>
      </div>
    </div>
  );
}
