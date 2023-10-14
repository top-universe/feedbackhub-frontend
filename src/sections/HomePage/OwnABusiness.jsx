import PropTypes from 'prop-types';
    
import checked from '../../assets/checked.png'
import businessImg from '../../assets/business-img.png'
import Ellipse2 from '../../assets/Ellipse-2.png'
import PrimaryButton from '../../components/Button/PrimaryButton'
import SecondaryButton from '../../components/Button/SecondaryButton'
const OwnABusiness = () => {

    return (
        <section className="container-108 bg-white py-16 grid md:grid-cols-2 overflow-hidden  ">
            <div className='flex flex-col justify-between '>
                <h2 className="font-outfit text-5xl text-pri-blue font-bold mb-8">Own a Business?</h2>
                <div className='mb-12'>
                    <List text={'Streamline Feedback Collection'}/>
                    <List text={'Powerful Analytics and Reporting'}/>
                    <List text={'Enhance Customer Engagement'}/>
                    <List text={'Seamless Integrations'}/>
                </div>
                <div className='flex gap-4 items-center'>
                    <SecondaryButton text={'Request a Demo'} />
                    <PrimaryButton text={'Get Started'}/>
                </div>
            </div>  
            <div className='flex items-center lg:justify-end business relative  '>
                <img src={businessImg} alt="a woman holding a tab in a restaurant and she smiling " width={500} height={400} className='w-4/5 z-10' />
                <img src={Ellipse2} alt=" an ellipse shape" className='absolute top-0 -right-36 w-60 hidden lg:block'/>
            </div>
        </section>
    )
}
const List = ({text}) => {
    return (
        <div className='flex items-center space-x-3 mb-4'>
            <img src={checked} alt={'a check mark icon'}  className='w-4'/>
            <p className='text-xl text-grey-4f'> {text}</p>
        </div>)
}

List.propTypes = {
    text: PropTypes.string,
}

export default OwnABusiness;