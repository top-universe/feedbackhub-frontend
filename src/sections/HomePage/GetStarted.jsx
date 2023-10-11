import DestructiveButton from "../../components/Button/DestructiveButton"
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import background from '../../assets/images/background.png'
import form from '../../assets/images/form.png'
import abstract from '../../assets/images/abstract.png'

const GetStarted = () => {

    return (
        <section  style={{ backgroundImage: `url(${background})`,paddingTop:'50px',marginTop:'50px' }}>
            {/* <img src={background}  alt='logo'/> */}

            <div className="  grid place-items-center mt-7 relative sm:mx-6  " >
                <div className='bg-pri-blue py-8 sm:mx-48  mb-0 mb-28 container-64 md:container-108 fh-inner rounded-xl text-center relative '>
                    <p class=' text-white-f9 mb-6 mt-5 text-fh-sm md:text-fh-base'>GET STARTED WITH FEEDBACK HUB FOR FREE</p>
                    <p class='text-bluegray-9 text-fh-2xl-semi md:text-fh-4xl-semi'>Ready to Take Your Business </p>
                    <p class='text-bluegray-9 text-fh-2xl-semi md:text-fh-4xl-semi'> to the Next Level?</p>
                    
                    <p class='text-blue-2 text-fh-xs-mid md:text-fh-sm-mid mt-9'>Collect, Manage, and Analyze Customer
                        Feedback for Better Business 
                    </p>
                    <p class='text-blue-2 text-fh-xs-mid md:text-fh-sm-mid mb-8 '> Insights Feedback for Better Business Insights</p>
                   
                   
                    <img class=' absolute bottom-0 right-0 w-64 h-52' src={form} alt="pic" />
                    {/* <button class='rounded-xl white-f9'>get started</button> */}
                     <PrimaryButton text='get started'/>
                     {/* <SecondaryButton text='get started'/> */}
                     {/* <DestructiveButton text='get stared'/> */}
                
                </div>
                <img class=' absolute bottom-14 right-12 h-52 w-64 z-50' src={abstract} alt='picture'/>
                
            </div>
            
        </section>
    )
}

export default GetStarted;