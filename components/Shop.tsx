import React from 'react';
import { ShoppingBag } from 'lucide-react';

const PRODUCTS = [
    { id: 1, name: "Home Kit 24/25", price: "€100,00", img: "https://picsum.photos/400/400?random=50" },
    { id: 2, name: "Sciarpa Fino Alla Fine", price: "€25,00", img: "https://picsum.photos/400/400?random=51" },
    { id: 3, name: "Training Top", price: "€65,00", img: "https://picsum.photos/400/400?random=52" },
    { id: 4, name: "Cappello Logo", price: "€30,00", img: "https://picsum.photos/400/400?random=53" },
];

const Shop: React.FC = () => {
    return (
        <section id="shop" className="py-20 bg-white text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-12">
                    <ShoppingBag className="w-8 h-8 text-juve-gold" />
                    <h2 className="text-4xl md:text-5xl font-display font-bold">OFFICIAL STORE</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.map(product => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="bg-gray-100 mb-4 overflow-hidden relative">
                                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 bg-juve-gold text-black font-bold px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    ACQUISTA
                                </div>
                            </div>
                            <h3 className="font-bold text-xl uppercase font-display">{product.name}</h3>
                            <p className="text-gray-500">{product.price}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <button className="border-2 border-black text-black px-8 py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors">
                        Vedi tutti i prodotti
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Shop;