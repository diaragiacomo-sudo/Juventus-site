import React from 'react';
import { NewsItem } from '../types';
import { Clock, ArrowRight } from 'lucide-react';

interface NewsSectionProps {
  articles: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ articles }) => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h3 className="text-juve-gold font-bold uppercase tracking-widest text-sm mb-2">Mondo Juve</h3>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-black">ULTIME NOTIZIE</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-black hover:text-juve-gold transition-colors font-bold uppercase text-sm tracking-wider">
                Archivio News <ArrowRight className="w-4 h-4" />
            </button>
        </div>

        {articles.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
                <p>Nessuna notizia disponibile al momento. Torna più tardi!</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                <article key={article.id} className="group cursor-pointer flex flex-col h-full bg-gray-50 border border-gray-100 hover:border-juve-gold/30 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                    <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-juve-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {article.category}
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{article.date}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-black mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                    {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {article.summary}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200">
                        <span className="text-black font-bold text-sm uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                            Leggi <ArrowRight className="w-4 h-4 text-juve-gold" />
                        </span>
                    </div>
                </div>
                </article>
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;