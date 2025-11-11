import React from 'react';
import { CiCreditCard1 } from 'react-icons/ci';
import { IoShieldCheckmarkOutline, IoTimeOutline, IoWalletOutline } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';

const FeatureSection = () => {
    return (
        <section>
            <div className="text-center mb-10 mt-10">
                <span className="bg-[#f3edff] border border-purple-200 px-2 rounded-lg text-sm font-semibold text-center text-[#8559ff]">FEATURE</span>

                <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
                    Our <span className="text-[#8559ff]">Special Features</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Connect your money to your friends & family from anywhere, anytime regardless any delay. Lorem ipsum Nullana integer sagittis, eleifend. met, aliquere.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-6 max-w-[380px] w-full rounded-sm shadow-md duration-300 bg-[#f3edff] border-gray-100">
                    <div className="p-2 w-fit mb-1 rounded-sm shadow-md bg-white">
                        <IoShieldCheckmarkOutline className="text-[#8559ff] w-10 h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold">Secure Payment Gateways</h3>
                    <p className=" text-gray-400 leading-relaxed text-base">
                        Rest easy knowing that your financial transactions are protected by advanced and secure payment gateways. We prioritize the safety of your data, ensuring that every payment is processed securely and with the utmost privacy.
                    </p>
                </div>
                <div className="p-6 max-w-[380px] w-full rounded-sm shadow-md duration-300 border border-purple-100">
                    <div className="p-2 w-fit mb-1 rounded-sm shadow-md bg-[#8559ff]">
                        <CiCreditCard1 className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold">Multiple Payment Option</h3>
                    <p className=" text-gray-400 leading-relaxed text-base">
                        We understand that flexibility matters when it comes to paying bills. That's why we offer a wide array of payment options, allowing you to choose the method that suits you best. Whether you prefer credit cards, bank transfers, or other options, we've got you covered.
                    </p>
                </div>
                <div className="p-6 max-w-[380px] w-full rounded-sm shadow-md duration-300 bg-[#f3edff] border-gray-100">
                    <div className="p-2 w-fit mb-1 rounded-sm shadow-md bg-white">
                        <LuUsers className="text-[#8559ff] w-10 h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold">User-Friendly Interface</h3>
                    <p className=" text-gray-400 leading-relaxed text-base">
                        Our platform is designed with you in mind. The user-friendly interface ensures that you can navigate effortlessly, set up payments, and manage your bills without any confusion. It's a seamless experience for both beginners and seasoned users.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto mt-5">
                <div className="p-6 max-w-[380px] w-full rounded-sm shadow-md duration-300 border border-gray-100">
                    <div className="p-2 w-fit mb-1 rounded-sm shadow-md bg-[#8559ff]">
                        <IoTimeOutline className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold">24/7 Availability</h3>
                    <p className=" text-gray-400 leading-relaxed text-base">Your bills don't keep office hours, and neither do we. With 24/7 availability, you can make payments at your convenience, any time of the day or night. Say goodbye to waiting for business hours to manage your expenses.</p>
                </div>
                <div className="p-6 max-w-[380px] w-full rounded-sm shadow-md duration-300 bg-[#f3edff] border-gray-100">
                    <div className="p-2 w-fit mb-1 rounded-sm shadow-md bg-white">
                        <IoWalletOutline className="text-[#8559ff] w-10 h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold">Get Amazing Cashbacke</h3>
                    <p className=" text-gray-400 leading-relaxed text-base">Who doesn't love a little extra? When you pay your bills through our platform, you get more than just convenience; you get amazing cashback rewards. Enjoy savings while handling your financial responsibilities.</p>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;