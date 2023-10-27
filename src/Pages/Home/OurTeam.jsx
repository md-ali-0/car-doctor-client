import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare, BiLogoTwitter } from "react-icons/bi";
import teamOneImage from '/images/team/1-min.jpg';
import teamTwoImage from '/images/team/2-min.jpg';
import teamThreeImage from '/images/team/3-min.jpg';
const OurTeam = () => {
    return (
        <section className="container mx-auto py-3 px-5">
            <div className="text-center space-y-2">
                <h3 className="text-primary text-2xl font-bold">Team</h3>
                <h2 className="text-4xl text-dark_01 font-bold">
                    Meet Our Team
                </h2>
                <p className="text-lg text-dark_03 max-w-3xl mx-auto">
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don&lsquo;t look
                    even slightly believable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white border rounded-xl p-3">
                        <img
                            className="rounded-lg h-64 mb-2"
                            src={teamOneImage}
                            alt=""
                        />
                        <h3 className="text-dark_02 text-2xl font-bold">
                            Car Engine Plug
                        </h3>
                        <h4 className="text-xl font-medium text-dark_03">
                            Engine Expert
                        </h4>
                        <div className='flex items-center justify-center py-2'>
                            <BiLogoFacebookCircle fill='#0866FF' size={30}/>
                            <BiLogoTwitter fill="#1D9BF0" size={30}/>
                            <BiLogoLinkedinSquare fill="#0A66C2" size={30}/>
                            <BiLogoInstagramAlt fill="#D8215F" size={30}/>
                        </div>
                    </div>
                    <div className="bg-white border rounded-xl p-3">
                        <img
                            className="rounded-lg h-64 mb-2"
                            src={teamTwoImage}
                            alt=""
                        />
                        <h3 className="text-dark_02 text-2xl font-bold">
                            Car Engine Plug
                        </h3>
                        <h4 className="text-xl font-medium text-dark_03">
                            Engine Expert
                        </h4>
                        <div className='flex items-center justify-center py-2'>
                            <BiLogoFacebookCircle fill='#0866FF' size={30}/>
                            <BiLogoTwitter fill="#1D9BF0" size={30}/>
                            <BiLogoLinkedinSquare fill="#0A66C2" size={30}/>
                            <BiLogoInstagramAlt fill="#D8215F" size={30}/>
                        </div>
                    </div>
                    <div className="bg-white border rounded-xl p-3">
                        <img
                            className="rounded-lg h-64 mb-2"
                            src={teamThreeImage}
                            alt=""
                        />
                        <h3 className="text-dark_02 text-2xl font-bold">
                            Car Engine Plug
                        </h3>
                        <h4 className="text-xl font-medium text-dark_03">
                            Engine Expert
                        </h4>
                        <div className='flex items-center justify-center py-2'>
                            <BiLogoFacebookCircle fill='#0866FF' size={30}/>
                            <BiLogoTwitter fill="#1D9BF0" size={30}/>
                            <BiLogoLinkedinSquare fill="#0A66C2" size={30}/>
                            <BiLogoInstagramAlt fill="#D8215F" size={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
