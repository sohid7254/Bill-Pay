import image from "../assets/newsletter-bg.png"
const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        
        <section
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="w-full py-16 px-4"
        >
            <div className="max-w-xl mx-auto text-center rounded-md">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-700 uppercase">SUBSCRIBE TO OUR</h3>
                    <h2 className="text-3xl font-bold text-gray-900 uppercase">NEWSLETTER</h2>
                </div>

                {/* Form */}
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                    <input type="email"  placeholder="Enter your mail" className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    <button type="submit" onClick={handleSubmit} className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
