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
            <p className="satoshi-regular text-lg mb-2">
              Encuesta Develop Nation
            </p>
            <LinkBox
              title="Participa en la encuesta de desarrolladores más grande del mundo y gana premios como tarjetas de regalo, suscripciones a servicios y mucho más."
              buttonText="Participa aquí"
              link="https://developereconomics.net/?member_id=elrincondeldev&lang=es&locale=es"
            />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">
              Curso iniciación en programación web
            </p>
            <LinkBox
              title="He podido participar en este curso de iniciación en programación web, donde aprenderás los conceptos básicos de HTML, CSS y JavaScript. ¡Totalmente gratuito!"
              buttonText="Visitar web"
              link="https://hubs.li/Q02C1cg50"
            />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">
              Mi Último Vídeo de YouTube
            </p>
            <LinkBox
              title="4 consejos que me hicieron conseguir TRABAJO como PROGRAMADOR siendo AUTODIDACTA"
              buttonText="Visitar web"
              link="https://dub.sh/jK01bJn"
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
              <p className="satoshi-regular text-lg mb-2">
                Encuesta Develop Nation
              </p>
              <LinkBox
                title="Participa en la encuesta de desarrolladores más grande del mundo y gana premios como tarjetas de regalo, suscripciones a servicios y mucho más."
                buttonText="Participa aquí"
                link="https://developereconomics.net/?member_id=elrincondeldev&lang=es&locale=es"
              />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">
                Curso iniciación en programación web
              </p>
              <LinkBox
                title="He podido participar en este curso de iniciación en programación web, donde aprenderás los conceptos básicos de HTML, CSS y JavaScript. ¡Totalmente gratuito!"
                buttonText="Visitar web"
                link="https://hubs.li/Q02C1cg50"
              />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">
                Mi Último Vídeo de YouTube
              </p>
              <LinkBox
                title="4 consejos que me hicieron conseguir TRABAJO como PROGRAMADOR siendo AUTODIDACTA"
                buttonText="Visitar web"
                link="https://dub.sh/jK01bJn"
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
