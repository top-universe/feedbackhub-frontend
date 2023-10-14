import PropTypes from 'prop-types';

const AboutUs = () => {

    return (
        <section className="container-108 bg-white pt-36 pb-52 ">
            <h2 className="text-center font-bold text-4xl text-bluegray-9 mb-8">About Us</h2>
            <div className="bg-mission w-full h-96 bg-no-repeat vision   flex items-center justify-end mb-16">
                <About heading={'Our Vision'}>
                     Our vision is to create a world where feedback is valued and acted upon, fostering continuos improvement and mutual understanding between users and businesses. Together, we can shape a feedback-driven culture that drives positive change.

                </About>

            </div>
            <div className="bg-vision w-full h-96 bg-no-repeat mission flex items-center justify-start">
                <About heading={'Our Mission'}>
                     Our mission is to simplify the feedback process and empower both users and business owners to share their thoughts and experience easily. Together, we can drive positive change and enhance the relationship between consumers and businesses.

                </About>

            </div>
           
        </section>
    )
}
    
const About = ({heading,children}) => {
    return (
         <article className="max-w-[31rem] bg-bluegray-2 px-4 py-5 rounded-md text-center">
            <h3 className="text-pri-blue font-bold font-outfit text-3xl mb-3">{heading}</h3>
            <p className="text-xl text-black-0a">
               {children}
            </p>
        </article>

    )
}

About.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.string,
}

export default AboutUs;