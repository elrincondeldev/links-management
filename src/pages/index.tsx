import NavBar from "@/components/NavBar";
import SocialBox from "@/components/SocialBox";
import LinkBox from "@/components/LinkBox";
import SmallLinkBox from "@/components/SmallLinkBox";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="md:flex hidden flex-col m-auto gap-10 max-w-[700px] text-white h-full">
        <main className="md:flex flex-col m-auto gap-10 max-w-[700px] text-white">
          <NavBar />
          <section>
            <p className="satoshi-regular text-lg mb-2">Social Links</p>
            <SocialBox />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">
              Participa en mi Hackathon
            </p>
            <LinkBox
              title="La Hackathon Del Dev"
              buttonText="Ir a la web"
              link="https://www.lahackathondeldev.com/"
            />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">
              Último vídeo de YouTube
            </p>
            <LinkBox
              title="Mi experiencia trabajando 1 año como programador"
              buttonText="Ver vídeo"
              link="https://infiniteurl.com/programador"
            />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">4Geeks Academy</p>
            <LinkBox
              title="Descuento de 1800€ en todos sus bootcamps"
              buttonText="Más información"
              link="https://4geeksacademy.com/es/inicio?utm_source=influencers&utm_medium=referral&utm_campaign=elrincondeldev&utm_location=madrid-spain&utm_content=ig"
            />
          </section>
          <section>
            <p className="satoshi-regular text-lg mb-2">Nuwe</p>
            <LinkBox
              title="Consigue trabajo con Nuwe"
              buttonText="Más información"
              link="https://bit.ly/JobOffersNUWE"
            />
          </section>
          <section className="flex flex-col">
            <p className="satoshi-regular text-lg mb-2">Otros links</p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <SmallLinkBox
                  title="Máster en Programación para Creativos de LABASAD"
                  link="https://hubs.ly/Q02kHdR40"
                />
              </div>
              <div className="flex flex-col gap-5">
                <SmallLinkBox
                  title="Roadmaps detallados para desarrolladores"
                  link="https://roadmap.sh/"
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <div className="flex md:hidden flex-col px-5 text-white">
        <main className="flex md:hidden flex-col gap-10">
          <NavBar />
          <section className="flex flex-col gap-5">
            <section>
              <p className="satoshi-regular text-lg mb-2">Social Links</p>
              <SocialBox />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">
                Participa en mi Hackathon
              </p>
              <LinkBox
                title="La Hackathon Del Dev"
                buttonText="Ir a la web"
                link="https://www.lahackathondeldev.com/"
              />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">
                Último vídeo de YouTube
              </p>
              <LinkBox
                title="Mi experiencia trabajando 1 año como programador"
                buttonText="Ver vídeo"
                link="https://infiniteurl.com/programador"
              />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">4Geeks Academy</p>
              <LinkBox
                title="Descuento de 1800€ en cualquiera de sus bootcamps"
                buttonText="Más información"
                link="https://4geeksacademy.com/es/inicio?utm_source=influencers&utm_medium=referral&utm_campaign=elrincondeldev&utm_location=madrid-spain&utm_content=ig"
              />
            </section>
            <section>
              <p className="satoshi-regular text-lg mb-2">Nuwe</p>
              <LinkBox
                title="Consigue trabajo con Nuwe"
                buttonText="Más información"
                link="https://bit.ly/JobOffersNUWE"
              />
            </section>
          </section>
          <section className="flex flex-col mb-10">
            <p className="satoshi-regular text-lg mb-2">Otros links</p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <SmallLinkBox
                  title="Máster Online en Programación para Creativos de LABASAD"
                  link="https://hubs.ly/Q02kHdR40"
                />
              </div>
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
        <Footer />
      </div>
    </>
  );
}
