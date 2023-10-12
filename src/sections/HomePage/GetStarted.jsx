import DestructiveButton from "../../components/Button/DestructiveButton"
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import man from '../../assets/images/man.png'
// import background from '../../assets/images/background.png'
// import form from '../../assets/images/form.png'
// import abstract from '../../assets/images/abstract.png'

const GetStarted = () => {

    return (
        <section  class='bg-yellow-1 container-64 md:container-108 my-11 grid grid-cols-1 md:grid-cols-2 md:gap-20 '>
            <div >
                <div class='text-center'>
                    <span class=' text-bluegray-9 mt-3.5 text-fh-3xl-bold md:text-fh-5xl-bold inline md:block' >Ready to </span>
                    <span class='text-pri-blue text-fh-3xl-bold md:text-fh-5xl-bold inline mb:block'> get started</span>
                </div>
                <p class='text-grey-4f  text-fh-base-mid md:text-fh-lg-mid mt-3.5' >Explore the product further, or create an account
                     now and start sharing your feedback to make a
                     difference in the products and services you use every day!
                </p>
                <div class='flex gap-7 mt-7 mb-11 place-content-center'>
                    <SecondaryButton text='Login' />
                    <PrimaryButton text='Get Started' />
                </div>
                
            </div>
            <div class='order-first md:order-last my-7'>
                <img src={man} alt='man'/>
            </div>

            
            
        </section>
    )
}

export default GetStarted;