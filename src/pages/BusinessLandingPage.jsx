import MainLayout from "../layouts/MainLayout";
import UniqueTools from "../sections/BusinessLandingPage/UniqueTools";
import DesignedToFit from "../sections/BusinessLandingPage/DesignedToFit";
import WhatOurCustomers from "../sections/BusinessLandingPage/WhatOurCustomers";

const BusinessLandingPage = () => {

    return (
        <MainLayout>
            <>
                <UniqueTools />
                <DesignedToFit />
                <WhatOurCustomers />
            </>

        </MainLayout>
    )
}

export default BusinessLandingPage;