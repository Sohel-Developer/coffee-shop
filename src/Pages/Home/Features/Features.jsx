import icon1 from '../../../assets/icons/1.png'
import icon2 from '../../../assets/icons/2.png'
import icon3 from '../../../assets/icons/3.png'
import icon4 from '../../../assets/icons/4.png'

const Features = () => {
    return (
        <section className="bg-[#ECEAE3]">
            <div className="max-w-7xl mx-auto p-5">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-14 gap-5 text-center '>
                    <div className='space-y-4'>
                        <img className='w-16 mx-auto ' src={icon1} alt="icon" />
                        <h3 className='font-rancho text-4xl '>Awesome Aroma</h3>
                        <p className='raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='space-y-4'>
                        <img className='w-16 mx-auto ' src={icon2} alt="icon" />
                        <h3 className='font-rancho text-4xl '>High Quality</h3>
                        <p className='raleway'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='space-y-4'>
                        <img className='w-16 mx-auto ' src={icon3} alt="icon" />
                        <h3 className='font-rancho text-4xl '>Pure Grades</h3>
                        <p className='raleway'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='space-y-4'>
                        <img className='w-16 mx-auto ' src={icon4} alt="icon" />
                        <h3 className='font-rancho text-4xl '>Proper Roasting</h3>
                        <p className='raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;