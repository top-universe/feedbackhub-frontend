import question from '../../assets/images/question.png'
const FAQs = () => {

    return (
        <section class="container-64 md:container-108 bg-white grid md:grid-cols-4">
            <div class='md:col-span-3' >
                <div class='mb-10'>
                    <h1 class='font-bold text-xl md:text-3xl mb-1'>Frequently Asked Questions</h1>
                    <p class='text-sm'>Got a question? We're here to answer! 
                    f you.</p>
                    <p class='text-sm'>don't see your question here, drop us a line on our <a href="#">contact page</a></p>
                </div>
                <div>
                    <div class='flex justify-start md:justify-between text-lg mb-3 bg-bluegray-2 py-3 px-4'>
                        <p>what is feedbackhub</p>
                        <p>-</p>
                    </div>
                    <p class='py-3 px-4 text-base'>FeedbackHub is an innovative customer feedback
                     management software designed to help businesses gather, analyze, and 
                     manage customer feedback effectively. FeedbackHub is designed to serve 
                     businesses of all sizes, including startups, small businesses, and enterprises, looking to enhance 
                    customer engagement and improve their products and services.
                    </p>
                    <div class='flex justify-start md:justify-between text-lg mb-3 bg-bluegray-2 py-3 px-4'>
                        <p>Who can benefit from FeedbackHub?</p>
                        <p>-</p>
                    </div>
                    <p class='py-3 px-4 text-base'>FeedbackHub is designed to serve businesses of all 
                    sizes, including startups, small businesses, and enterprises, looking to enhance customer 
                    engagement and improve their products and services.
                    </p>
                    <div class='flex justify-start md:justify-between text-lg mb-3 bg-bluegray-2 py-3 px-4'>
                        <p>Is my feedback data secure with FeedbackHub?</p>
                        <p>-</p>
                    </div>
                    <p class='py-3 px-4 text-base'>Absolutely. We take data privacy and security seriously. 
                    Feedback data is encrypted, and we follow 
                    industry best practices to protect your information.
                    </p>
                    <div class='flex justify-start md:justify-between text-lg mb-3 bg-bluegray-2 py-3 px-4'>
                        <p>Can I see the feedback I've submitted in the past?</p>
                        <p>-</p>
                    </div>
                    <p class='py-3 px-4 text-base'>Yes, you can access your feedback history 
                    in your account dashboard, which includes a 
                    record of the feedback you've submitted and its status.
                    </p>
                    {/* <div class='flex justify-start md:justify-between text-lg mb-3 bg-bluegray-2 py-3 px-4'>
                        <p>Can I customize the feedback forms to match my brand identity?</p>
                        <p>-</p>
                    </div>
                    <p class='py-3 px-4 text-base'>Absolutely! FeedbackHub offers customization 
                    options to tailor feedback forms and surveys according to your brand's unique identity, 
                    ensuring a consistent and personalized user experience.
                    </p> */}
                </div>
            </div>
            <div class='col-span-1 hidden md:block'>
                <img  src={question} alt="pic"  />  
            </div>
            

        </section>
    )
}

export default FAQs;