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
              Último vídeo de YouTube
            </p>
            <LinkBox
              title='Los TUTORIALES de PROGRAMACIÓN te están LIMITANDO'
              buttonText='Ver vídeo'
              link='https://infiniteurl.com/tutoriales'
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
              <div className='flex flex-col gap-5'>
                <SmallLinkBox
                  title='Máster en Programación para Creativos de LABASAD'
                  link='https://hubs.ly/Q02kHdR40'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <SmallLinkBox
                  title='Roadmaps detallados para desarrolladores'
                  link='https://roadmap.sh/'
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <div className='flex md:hidden flex-col px-5 text-white'>
        <main className='flex md:hidden flex-col gap-10'>
          <NavBar />
          <section className='flex flex-col gap-5'>
            <section>
              <p className='satoshi-regular text-lg mb-2'>Social Links</p>
              <SocialBox />
            </section>
            <section>
              <p className='satoshi-regular text-lg mb-2'>
                Último vídeo de YouTube
              </p>
              <LinkBox
                title='Los TUTORIALES de PROGRAMACIÓN te están LIMITANDO'
                buttonText='Ver vídeo'
                link='https://infiniteurl.com/tutoriales'
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
              <div className='flex flex-col gap-5'>
                <SmallLinkBox
                  title='Máster Online en Programación para Creativos de LABASAD'
                  link='https://hubs.ly/Q02kHdR40'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <SmallLinkBox
                  title='Roadmaps detallados para desarrolladores'
                  link='https://roadmap.sh/'
                />
              </div>
            </div>
          </section>
          <section className='flex justify-center'></section>
        </main>
        <Footer />
      </div>
    </>
  );
}
