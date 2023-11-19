import React from "react";
import WhatOur from "../../components/WhatOur";

  
function WhatOurCustomers() {
  return (
        <div className="bg-bluegray-1 p-8">
        <div className="text-center pt-0 px-0 mb-8">
          <h1 className="text-bluegray-9 text-center lg:text-fh-4xl-bold p-4 text-fh-2xl-semi">
            What our customers are saying
          </h1>
        </div>
        <WhatOur
        />
        </div>
  );
}

export default WhatOurCustomers;
