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
              Mi Newsletter Semanal
            </p>
            <LinkBox
              title="Comparto mi aprendizaje y experiencia como desarrollador Full Stack, así como tips y herramientas que te harán más productivo en tu día a día."
              buttonText="Visitar web"
              link="https://elrincondeldev.substack.com/"
            />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">Logitech Work Days</p>
            <LinkBox
              title="Los mayores descuentos en productos Logitech"
              buttonText="Más información"
              link="https://www.amazon.es/stores/page/E90C1BCD-58B5-4D56-98DF-3E01C821F75F?channel=LOGIWORK"
            />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">
              Dr.Fone de Wondershare
            </p>
            <LinkBox
              title="Herramienta para gestionar por completo tu móvil"
              buttonText="Más información"
              link="https://bit.ly/4dNYXwQ"
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
                Mi Newsletter Semanal
              </p>
              <LinkBox
                title="Comparto mi aprendizaje y experiencia como desarrollador Full Stack, así como tips y herramientas que te harán más productivo en tu día a día."
                buttonText="Visitar web"
                link="https://elrincondeldev.substack.com/"
              />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">Logitech Work Days</p>
              <LinkBox
                title="Los mayores descuentos en productos Logitech"
                buttonText="Más información"
                link="https://www.amazon.es/stores/page/E90C1BCD-58B5-4D56-98DF-3E01C821F75F?channel=LOGIWORK"
              />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">
                Dr.Fone de Wondershare
              </p>
              <LinkBox
                title="Herramienta para gestionar por completo tu móvil"
                buttonText="Más información"
                link="https://bit.ly/4dNYXwQ"
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
