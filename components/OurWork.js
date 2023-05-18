// import image projects
import autoSetters from "../public/assets/auto-setters.png";
import fortune from "../public/assets/fortune-health.png";
import center from "../public/assets/dbn-events-1.png";
import crypto from "../public/assets/crypto.png";
import creditScore from "../public/assets/creditScore.png";
import topfit from "../public/assets/topfit.png";
import ecommerce from "../public/assets/ecommerce.png";
import checker from "../public/assets/checker.png";
//import project item component
import ProjectItem from "./ProjectItem";

// List of my projects so far
const OurWork = () => {
  return (
    <div id="ourwork" className="w-full pt-24 mt-24">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-5xl tracking-wide text-[#1A5276]">
          Some of Our Work
        </p>
        <br />

        <p className="py-4 text-xl tracking-widest uppercase text-[#1A5276]">
          OUR WORK
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Car Dealership"
            backgroundImg={autoSetters}
            projectUrl="https://auto-setters.netlify.app/"
            tech="Dealership"
          />

          <ProjectItem
            title="Convention Center"
            backgroundImg={center}
            projectUrl="https://combative-hen-fatigues.cyclic.app/"
            tech="ICC"
          />

          <ProjectItem
            title="Personal Trainer"
            backgroundImg={fortune}
            projectUrl="https://fortune-health.netlify.app/"
            tech="Trainer"
          />
          <ProjectItem
            title="Crypto Markets"
            backgroundImg={crypto}
            projectUrl="https://crypto-markets-willtech.netlify.app/"
            tech="Crypto"
          />
          <ProjectItem
            title="Check Credit Score"
            backgroundImg={creditScore}
            projectUrl="https://willtech-check-credit.netlify.app/"
            tech="Credit Score"
          />
          <ProjectItem
            title="Topfit"
            backgroundImg={topfit}
            projectUrl="https://topfit.netlify.app/"
            tech="Credit Score"
          />
          <ProjectItem
            title="Spending Checker App"
            backgroundImg={checker}
            projectUrl="https://spendingchecker.netlify.app"
            tech="Credit Score"
          />
          <ProjectItem
            title="eCommerce"
            backgroundImg={ecommerce}
            projectUrl="https://ecommerce-pi-vert.vercel.app/"
            tech="Credit Score"
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
