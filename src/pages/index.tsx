import NavBar from '@/components/NavBar';
import SocialBox from '@/components/SocialBox';
import LinkBox from '@/components/LinkBox';
import SmallLinkBox from '@/components/SmallLinkBox';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className='md:flex hidden flex-col m-auto gap-10 max-w-[700px] text-white h-full'>
        <main className='md:flex flex-col m-auto gap-10 max-w-[700px] text-white'>
          <NavBar />
          <section>
            <p className='satoshi-regular text-lg mb-2'>Social Links</p>
            <SocialBox />
          </section>
          <section>
            <p className='satoshi-regular text-lg mb-2'>
              Mi último vídeo de YouTube
            </p>
            <LinkBox
              title='Cómo me mantengo motivado como programador'
              buttonText='Míralo aquí'
              link='https://linktw.in/LczudD'
            />
          </section>
          <section>
            <p className='satoshi-regular text-lg mb-2'>Mi Portfolio</p>
            <LinkBox
              title='Aquí podrás encontrar un poco más de información sobre mi :)'
              buttonText='¡Échale un vistazo!'
              link='https://elrincondeldev.com/about'
            />
          </section>
          <section>
            <p className='satoshi-regular text-lg mb-2'>CodeCrafters</p>
            <LinkBox
              title='Proyectos que van mucho más allá de lo básico'
              buttonText='Más información'
              link='https://app.codecrafters.io/join?via=jmontes33'
            />
          </section>
          <section className='flex flex-col'>
            <p className='satoshi-regular text-lg mb-2'>Otros links</p>
            <div className='flex flex-col gap-5'>
              <SmallLinkBox
                title='Roadmaps detallados para desarrolladores'
                link='https://roadmap.sh/'
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <div className='flex md:hidden flex-col gap-10 px-5 text-white'>
        <main className='flex md:hidden flex-col gap-10'>
          <NavBar />
          <section className='flex flex-col gap-5'>
            <section>
              <p className='satoshi-regular text-lg mb-2'>Social Links</p>
              <SocialBox />
            </section>
            <section>
              <p className='satoshi-regular text-lg mb-2'>
                Mi último vídeo de YouTube
              </p>
              <LinkBox
                title='Cómo me mantengo motivado como programador'
                buttonText='Míralo aquí'
                link='https://linktw.in/LczudD'
              />
            </section>
            <section>
              <p className='satoshi-regular text-lg mb-2'>Mi Portfolio</p>
              <LinkBox
                title='Aquí podrás encontrar un poco más de información sobre mi :)'
                buttonText='¡Échale un vistazo!'
                link='https://elrincondeldev.com/about'
              />
            </section>
            <section>
              <p className='satoshi-regular text-lg mb-2'>CodeCrafters</p>
              <LinkBox
                title='Proyectos que van mucho más allá de lo básico'
                buttonText='Más información'
                link='https://app.codecrafters.io/join?via=jmontes33'
              />
            </section>
          </section>
          <section className='flex flex-col mb-10'>
            <p className='satoshi-regular text-lg mb-2'>Otros links</p>
            <div className='flex flex-col gap-5'>
              <SmallLinkBox
                title='Roadmaps detallados para desarrolladores'
                link='https://roadmap.sh/'
              />
            </div>
          </section>
          <section className='flex justify-center'></section>
          <Footer />
        </main>
      </div>
    </>
  );
}
