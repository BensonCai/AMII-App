import {
    Search,
    Pill,
    AlertTriangle,
    Database,
    Star,
    Phone,
    Apple,
    Download,
} from "lucide-react";
import React from "react";
import {Link} from "react-router-dom";
export default function Landing() {
    return (
        <main className="min-h-screen bg-white">
            <nav className="sticky top-0 bg-white shadow-sm z-50">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-900">
                AMII
              </span>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/amii" className="text-blue-900 hover:text-blue-700">Home</Link>
                            <Link to="/amii" className="text-blue-900 hover:text-blue-700">Features</Link>
                            <Link to="/amii" className="text-blue-900 hover:text-blue-700">About</Link>
                        </div>
                        {/* Desktop Download Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm">
                                <Apple className="w-4 h-4 mr-2" />
                                App Store
                            </button>
                            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm">
                                <Phone className="w-4 h-4 mr-2" />
                                Play Store
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Hero Section */}
            <section className="relative px-4 py-20 bg-blue-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                                Find Your Medication Information Instantly
                            </h1>
                            <p className="text-xl text-blue-700 mb-8">
                                Access detailed drug information, side effects, and interactions
                                right from your phone. Your trusted medical companion.
                            </p>
                            <Link to="/features" className="text-xl text-blue-700 mb-8 border-2 border-black rounded p-2">
                                <strong> Features </strong>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="https://placehold.co/300x600/blue/white"
                                alt="AMII App Interface"
                                className="mx-auto rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Search Demo Section */}
            {/*<section className="py-20 px-4">*/}
            {/*    <div className="container mx-auto max-w-6xl">*/}
            {/*        <div className="relative max-w-2xl mx-auto">*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                placeholder="Search for any medication..."*/}
            {/*                className="w-full p-4 pl-12 text-lg border-2 border-blue-100 rounded-xl focus:border-blue-500 outline-none"*/}
            {/*            />*/}
            {/*            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />*/}
            {/*        </div>*/}
            {/*<div className="mt-8 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">*/}
            {/*    <div className="space-y-4">*/}
            {/*        {[1, 2, 3].map((i) => (*/}
            {/*            <div*/}
            {/*                key={i}*/}
            {/*                className="flex items-center p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition cursor-pointer"*/}
            {/*            >*/}
            {/*                <Pill className="w-8 h-8 text-blue-500 mr-4" />*/}
            {/*                <div>*/}
            {/*                    <h3 className="font-semibold">Sample Medication {i}</h3>*/}
            {/*                    <p className="text-gray-600">Generic Name • Manufacturer</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* Key Features Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <Search className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Quick Search</h3>
                            <p className="text-gray-600">
                                Find any medication instantly with our powerful search engine
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <Database className="w-12 h-12 text-blue-500 mb-4 justify-self" />
                            <h3 className="text-xl font-bold mb-4">Detailed Information</h3>
                            <p className="text-gray-600">
                                Comprehensive drug information from trusted sources
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <AlertTriangle className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Safety First</h3>
                            <p className="text-gray-600">
                                Know about side effects and potential drug interactions
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Trust Section */}
            <section className="bg-blue-50 py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-10 h-10 text-blue-500" />
                            </div>
                            {/*<h3 className="text-2xl font-bold mb-2">4.9/5</h3>*/}
                            <h3 className="text-2xl font-bold mb-2">-- --</h3>
                            <p className="text-gray-600">Average User Rating</p>
                        </div>
                        <div>
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Database className="w-10 h-10 text-blue-500" />
                            </div>
                            {/*<h3 className="text-2xl font-bold mb-2">10,000+</h3>*/}
                            <h3 className="text-2xl font-bold mb-2">-- --</h3>
                            <p className="text-gray-600">Medications in Database</p>
                        </div>
                        <div>
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="w-10 h-10 text-blue-500" />
                            </div>
                            {/*<h3 className="text-2xl font-bold mb-2">1M+</h3>*/}
                            <h3 className="text-2xl font-bold mb-2">-- --</h3>
                            <p className="text-gray-600">App Downloads</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* App Screenshots */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex overflow-x-auto space-x-6 pb-8 justify-center">
                        {[1, 2, 3, 4].map((i) => (
                            <img
                                key={i}
                                src={`https://placehold.co/250x500/blue/white`}
                                alt={`App Screenshot ${i}`}
                                className="rounded-2xl shadow-lg flex-none"
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="bg-blue-50 py-20 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                        Download AMII Today
                    </h2>
                    <p className="text-xl text-blue-700 mb-8">
                        Join -- -- users who trust AMII for their medication
                        information needs
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                            <Apple className="w-6 h-6 mr-2" />
                            App Store
                        </button>
                        <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                            <Phone className="w-6 h-6 mr-2" />
                            Play Store
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
