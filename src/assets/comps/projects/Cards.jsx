import { motion } from "framer-motion";
import aluminios from '../../images/projects/aluminios.png';
import crujinola from '../../images/projects/crujinola.png';
import helenas from '../../images/projects/helenas.png';

export const BouncyCardsFeatures = () => {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="title">
            Algunas de nuestras <br />
            <span className="text-szBeige bg-szGreen">creaciones</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn button"
          >
            Trabajemos juntos
          </motion.button>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4 bg-szGreen">
            <img src={crujinola} alt="" className="w-full h-full object-cover rounded-3xl" />
          </BounceCard>
          {/**  <a href="#" target="_blank" rel="noopener noreferrer"> </a>*/}
          <BounceCard className="col-span-12 md:col-span-8 bg-szGreen">
            <img src={aluminios} alt="" className="w-full h-full object-cover rounded-3xl" />
          </BounceCard>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-8 bg-szGreen">
            <img src={helenas} alt="" className="w-full h-full object-cover rounded-3xl" />
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4 bg-szGreen">
            <img src={helenas} alt="" className="w-full h-full object-cover rounded-3xl" />
          </BounceCard>
        </div>
      </section>
    );
  };
  
  const BounceCard = ({ className, children }) => {
    return (
      <motion.div
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
      >
        {children}
      </motion.div>
    );
  };
  
  const CardTitle = ({ children }) => {
    return (
      <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
  };

