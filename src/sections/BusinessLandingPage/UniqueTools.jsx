// import CentralisedSplitContentLeft from "../../components/CentralisedSplitContentLeft";
import CentralisedSplitContentRight from "../../components/CentralisedSplitContentRight";
import HeadingTextCenter from "../../components/HeadingTextCenter";
import boards from "../../assets/icons/ep-boards.svg";
import chat from "../../assets/icons/ep-chat.svg";
import collection from "../../assets/icons/ep-collection.svg";
import pieChart from "../../assets/icons/ep-pie-chart.svg";
import charts from "../../assets/images/charts.png";
import webpage from "../../assets/images/webpage.png";
import { analyticsData, engagementToolsData, feedbackData, managementData } from "../../data/uniqueToolsData";
import TickAndText from "../../components/TickAndText";
import ManagementChildBlock from "../../components/ManagementChildBlock";


const UniqueTools = () => {

    return (
        <section className="container-108 bg-bluegray-1 rounded-[0_0_32px_32px] lg:rounded-[0_0_64px_64px]">
            <div className="w-full pt-[70px] lg:pt-[180px] pb-16 lg:pb-20">
                <HeadingTextCenter
                    heading="Unique tools for maximizing your potential"
                    text="Fuel your growth with Feedback HUB - and get the tools and 
                    strategies you need to make it happen."
                />
                <section className="w-full mt-20 grid gap-[120px]">
                    <CentralisedSplitContentRight
                        icon={collection}
                        heading="Centralized Feedback Collection"
                        image={webpage}
                        clickHandler={() => { }}
                    >
                        <div className="grid gap-6">
                            {feedbackData.map((item, idx) => (
                                <TickAndText key={`feedTick-${idx}`} text={item} />
                            ))}
                        </div>
                    </CentralisedSplitContentRight>
                    <CentralisedSplitContentRight
                        icon={boards}
                        heading="Efficient Management"
                        image={webpage}
                        clickHandler={() => { }}
                        imageRight={false}
                    >
                        <div className="grid gap-6 lg:gap-8">
                            {managementData.map((item, idx) => (
                                <ManagementChildBlock key={`mgtChd-${idx}`} heading={item.heading} text={item.text} />
                            ))}
                        </div>
                    </CentralisedSplitContentRight>
                    <CentralisedSplitContentRight
                        icon={pieChart}
                        heading="Real-Time Analytics"
                        image={charts}
                        clickHandler={() => { }}
                    >
                        <div className="grid gap-6">
                            {analyticsData.map((item, idx) => (
                                <TickAndText key={`feedTick-${idx}`} text={item} />
                            ))}
                        </div>
                    </CentralisedSplitContentRight>
                    <CentralisedSplitContentRight
                        icon={chat}
                        heading="Engagement Tools"
                        image={webpage}
                        clickHandler={() => { }}
                        imageRight={false}
                    >
                        <div className="grid gap-6">
                            {engagementToolsData.map((item, idx) => (
                                <TickAndText key={`feedTick-${idx}`} text={item} />
                            ))}
                        </div>
                    </CentralisedSplitContentRight>
                </section>
            </div>
        </section>
    )
}

export default UniqueTools;