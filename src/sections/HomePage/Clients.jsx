import PropTypes from "prop-types";

import asana from "../../assets/clients-logo/asana.png";
import buzzFeedNew from "../../assets/clients-logo/buzzFeedNew.png";
import forbes from "../../assets/clients-logo/forbes.png";
import ocbs from "../../assets/clients-logo/ocbs.png";
import solarWinds from "../../assets/clients-logo/solarWinds.png";
import workFront from "../../assets/clients-logo/workFront.png";

const Clients = () => {
  return (
    <section className="bg-white container-108 py-4">
      <h2 className="text-center font-bold text-xl text-pri-blue mb-2">
        FEEDBACK HUB HELP BUSINESS GROW
      </h2>

      <div className="w-full flex items-center justify-center">
        <div className="scroll-sideway">
          <Client element={asana} />
          <Client element={buzzFeedNew} />
          <Client element={forbes} />
          <Client element={ocbs} />
          <Client element={solarWinds} />
          <Client element={workFront} />
        </div>
      </div>
    </section>
  );
};
const Client = ({ element }) => {
  return (
    <img src={element} alt={"client logo"} className="w-30 object-contain" />
  );
};

export default Clients;
