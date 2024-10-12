import Steps
 from "../assets/comps/about/Steps";
export const About = () => {
  return (
    <>
      <div className="min-h-screen place-items-center mt-20 bg-red-500 " id="about"> {/**  mt-20 */}
        <h1 className="title text-left">Somos senzu!</h1>
        <div className="container">
          <Steps />
        </div>
      </div>
    </>
  );
};
