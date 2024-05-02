import NavBar from "@/components/NavBar";
import SocialBox from "@/components/SocialBox";
import LinkBox from "@/components/LinkBox";
import SmallLinkBox from "@/components/SmallLinkBox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="md:flex hidden flex-col m-auto gap-10 max-w-[700px] text-white min-h-screen">
        <main className="md:flex flex-col mx-auto gap-10 max-w-[700px] text-white">
          <NavBar />
          <section>
            <p className="satoshi-regular text-lg mb-2">Social Links</p>
            <SocialBox />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">
              Charla en Nuclio Digital School
            </p>
            <LinkBox
              title="El 15 de mayo daré una charla junto a r2d2.Coder en Nuclio Digital School"
              buttonText="Más información"
              link="https://dub.sh/j3qFisy"
            />
          </section>
          <section className="flex flex-col">
            <p className="satoshi-regular text-lg mb-2">Otros links</p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <SmallLinkBox
                  title="Roadmaps detallados para desarrolladores"
                  link="https://roadmap.sh/"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="flex md:hidden flex-col px-5 text-white min-h-screen">
        <main className="flex md:hidden flex-col gap-10">
          <NavBar />
          <section className="flex flex-col gap-5">
            <section>
              <p className="satoshi-regular text-lg mb-2">Social Links</p>
              <SocialBox />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">
                Charla en Nuclio Digital School
              </p>
              <LinkBox
                title="El 15 de mayo daré una charla junto a r2d2.coder en Nuclio Digital School"
                buttonText="Más información"
                link="https://dub.sh/j3qFisy"
              />
            </section>
          </section>
          <section className="flex flex-col mb-10">
            <p className="satoshi-regular text-lg mb-2">Otros links</p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <SmallLinkBox
                  title="Roadmaps detallados para desarrolladores"
                  link="https://roadmap.sh/"
                />
              </div>
            </div>
          </section>
          <section className="flex justify-center"></section>
        </main>
      </div>
      <Footer />
    </>
  );
}
