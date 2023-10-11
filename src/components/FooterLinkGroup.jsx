import PropTypes from "prop-types";
import FooterLink from "./FooterLink";

const FooterLinkGroup = ({ header, linksData }) => (
    <div className="w-max h-fit grid gap-[26px] items-start">
        <h3 className="text-blue-6 text-fh-base-bold lg:text-fh-lg-bold tracking-[0.8px] lg:tracking-[0.9px] uppercase">{header}</h3>
        <div className="w-max grid gap-4">
            {linksData.map((item, idx) => <FooterLink key={`flink-${idx}`} link={item.link} text={item.text} />)}
        </div>
    </div>
)

FooterLinkGroup.propTypes = {
    header: PropTypes.string,
    linksData: PropTypes.array
}

export default FooterLinkGroup