import Steps from "../assets/comps/about/Steps";

export const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center mt-20" id="about">
        <h2 className="title font-quicksand text-center mb-8">
          <span className="text-szDarkGreen bg-szBeige">Somos Senzu!</span>
        </h2>
        <div className="container flex flex-col md:flex-row justify-center items-center">
          <div className="left w-full md:w-1/2">
            <p className="text-szText text-lg">
              Una agencia emergente formada por un equipo de profesionales altamente capacitados que comparten una pasión por el desarrollo digital. Nos especializamos en crear soluciones personalizadas para cada cliente, enfocándonos en plasmar su identidad y valores en cada proyecto. Nuestro objetivo es no solo construir una presencia digital atractiva, sino también estratégica y funcional, que ayude a impulsar el crecimiento y éxito de tu negocio. Nos comprometemos a trabajar de la mano contigo, desde la concepción de la idea hasta la ejecución, para asegurarnos de que cada detalle esté alineado con tus metas y necesidades.
            </p>
          </div>
          <div className="right w-full md:w-1/2 mt-10">
            <Steps />
          </div>
        </div>
      </div>
    </>
  );
};
