
import gellaryImg1 from '../../../assets/cups/Rectangle9.png'
import gellaryImg2 from '../../../assets/cups/Rectangle10.png'
import gellaryImg3 from '../../../assets/cups/Rectangle11.png'
import gellaryImg4 from '../../../assets/cups/Rectangle12.png'
import gellaryImg5 from '../../../assets/cups/Rectangle13.png'
import gellaryImg6 from '../../../assets/cups/Rectangle14.png'
import gellaryImg7 from '../../../assets/cups/Rectangle15.png'
import gellaryImg8 from '../../../assets/cups/Rectangle16.png'



const Gellary = () => {
    return (
        <section className="my-10">
            <div className="max-w-7xl p-5 mx-auto">
                <div className="text-center space-y-5">
                    <p>--- Sip & Savor ---</p>
                    <h2 className="font-rancho  text-6xl">Our Popular Products</h2>

                </div>
                <div className='py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center '>
                    <div>
                        <img src={gellaryImg1} alt="" />
                    </div>
                    <div>
                        <img src={gellaryImg2} alt="" />
                    </div>
                    <div>
                        <img src={gellaryImg3} alt="" />
                    </div>
                    <div>
                        <img src={gellaryImg4} alt="" />
                    </div>
                    <div>
                        <img src={gellaryImg5} alt="" />
                    </div>
                    <div>
                        <img src={gellaryImg6} alt="" />
                    </div>
                    <div>
                        <img src={gellaryImg7} alt="" />
                    </div>
                    <div>
                        <img src={gellaryImg8} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gellary;