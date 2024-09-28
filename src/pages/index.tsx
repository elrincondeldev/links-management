import NavBar from "@/components/NavBar";
import SocialBox from "@/components/SocialBox";
import LinkBox from "@/components/LinkBox";
import SmallLinkBox from "@/components/SmallLinkBox";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"; // Importamos framer-motion

export default function Home() {
  // Definimos las variantes de animación
  const fadeInUp = {
    initial: { opacity: 0, y: 20 }, // Comienza invisible y desplazado hacia abajo
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Se vuelve visible y sube con duración
    exit: { opacity: 0, y: 20, transition: { duration: 0.4 } }, // Se desvanece y baja al salir
  };

  return (
    <>
      {/* Versión para pantallas medianas o grandes */}
      <div className="md:flex hidden flex-col m-auto gap-10 max-w-[700px] text-white min-h-screen">
        <motion.main
          className="md:flex flex-col mx-auto gap-10 max-w-[700px] text-white"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <NavBar />
          {/* Animaciones para cada sección */}
          <motion.section variants={fadeInUp}>
            <p className="satoshi-regular text-lg mb-2">Social Links</p>
            <SocialBox />
          </motion.section>

          <motion.section variants={fadeInUp}>
            <p className="satoshi-regular text-lg mb-2">
              Encuenta Global Developer Nation
            </p>
            <LinkBox
              title="Gana premios por tan solo contestar unas preguntas en 15 minutos."
              buttonText="Completa la encuesta"
              link="https://developereconomics.net/?member_id=elrincondeldev&lang=es&locale=es"
            />
          </motion.section>

          <motion.section variants={fadeInUp}>
            <p className="satoshi-regular text-lg mb-2">Pure Code AI</p>
            <LinkBox
              title="Genera componentes mediante prompts."
              buttonText="Link a la herramienta"
              link="https://purecode.ai/"
            />
          </motion.section>

          <motion.section variants={fadeInUp} className="flex flex-col">
            <p className="satoshi-regular text-lg mb-2">Otros links</p>
            <div className="flex flex-col gap-5">
              <SmallLinkBox
                title="Roadmaps detallados para desarrolladores"
                link="https://roadmap.sh/"
              />
            </div>
          </motion.section>
        </motion.main>
      </div>

      {/* Versión para pantallas pequeñas */}
      <div className="flex md:hidden flex-col px-5 text-white min-h-screen">
        <motion.main
          className="flex md:hidden flex-col gap-10"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <NavBar />
          <section className="flex flex-col gap-5">
            <motion.section variants={fadeInUp}>
              <p className="satoshi-regular text-lg mb-2">Social Links</p>
              <SocialBox />
            </motion.section>

            <motion.section variants={fadeInUp}>
              <p className="satoshi-regular text-lg mb-2">
                Encuenta Global Developer Nation
              </p>
              <LinkBox
                title="Gana premios por tan solo contestar unas preguntas en 15 minutos."
                buttonText="Completa la encuesta"
                link="https://developereconomics.net/?member_id=elrincondeldev&lang=es&locale=es"
              />
            </motion.section>

            <motion.section variants={fadeInUp}>
              <p className="satoshi-regular text-lg mb-2">Pure Code AI</p>
              <LinkBox
                title="Genera componentes mediante prompts."
                buttonText="Link a la herramienta"
                link="https://purecode.ai/"
              />
            </motion.section>
          </section>

          <motion.section variants={fadeInUp} className="flex flex-col mb-10">
            <p className="satoshi-regular text-lg mb-2">Otros links</p>
            <div className="flex flex-col gap-5">
              <SmallLinkBox
                title="Roadmaps detallados para desarrolladores"
                link="https://roadmap.sh/"
              />
            </div>
          </motion.section>
        </motion.main>
      </div>

      <Footer />
    </>
  );
}
