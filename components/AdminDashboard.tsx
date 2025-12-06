import React, { useState } from 'react';
import { NewsItem } from '../types';
import { generateArticleSummary } from '../services/geminiService';
import { Trash2, Plus, ArrowLeft, Sparkles, Loader2, Save } from 'lucide-react';

interface AdminDashboardProps {
  articles: NewsItem[];
  setArticles: React.Dispatch<React.SetStateAction<NewsItem[]>>;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ articles, setArticles, onClose }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Prima Squadra");
  const [newImage, setNewImage] = useState("https://picsum.photos/600/400?random=100");
  const [newSummary, setNewSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSummary = async () => {
    if (!newTitle) return;
    setIsGenerating(true);
    const summary = await generateArticleSummary(newTitle);
    setNewSummary(summary);
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newArticle: NewsItem = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      imageUrl: newImage,
      summary: newSummary,
      date: new Date().toLocaleDateString('it-IT')
    };
    setArticles([newArticle, ...articles]);
    
    // Reset form
    setNewTitle("");
    setNewSummary("");
  };

  const handleDelete = (id: number) => {
    setArticles(articles.filter(a => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-800">
            <div className="flex items-center gap-4">
                <button onClick={onClose} className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <h1 className="text-3xl font-display font-bold">AREA AMMINISTRATIVA</h1>
            </div>
            <div className="text-sm text-gray-400">
                Loggato come <span className="text-juve-gold font-bold">Admin</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-1">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg sticky top-6">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-juve-gold">
                        <Plus className="w-5 h-5" /> Nuovo Articolo
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Titolo</label>
                            <input 
                                type="text" 
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-juve-gold outline-none transition-colors"
                                placeholder="Es: Vittoria allo scadere..."
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Categoria</label>
                            <select 
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-juve-gold outline-none"
                            >
                                <option>Prima Squadra</option>
                                <option>Mercato</option>
                                <option>Settore Giovanile</option>
                                <option>Women</option>
                                <option>Club</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">URL Immagine</label>
                            <input 
                                type="text" 
                                value={newImage}
                                onChange={(e) => setNewImage(e.target.value)}
                                className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-juve-gold outline-none"
                                required
                            />
                            {newImage && (
                                <div className="mt-2 h-20 w-full overflow-hidden rounded bg-gray-800">
                                    <img src={newImage} alt="Preview" className="w-full h-full object-cover opacity-60" />
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-xs font-bold uppercase text-gray-500">Sommario</label>
                                <button 
                                    type="button"
                                    onClick={handleGenerateSummary}
                                    disabled={!newTitle || isGenerating}
                                    className="text-xs text-juve-gold hover:text-white flex items-center gap-1 transition-colors disabled:opacity-50"
                                >
                                    {isGenerating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                                    Genera con AI
                                </button>
                            </div>
                            <textarea 
                                value={newSummary}
                                onChange={(e) => setNewSummary(e.target.value)}
                                rows={4}
                                className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-juve-gold outline-none"
                                placeholder="Scrivi il contenuto o generalo con l'AI..."
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-juve-gold text-black font-bold uppercase py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
                        >
                            <Save className="w-5 h-5" /> Pubblica
                        </button>
                    </form>
                </div>
            </div>

            {/* List Section */}
            <div className="lg:col-span-2">
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                    <div className="p-4 bg-gray-800/50 border-b border-gray-800 flex justify-between items-center">
                         <h3 className="font-bold text-gray-300">Articoli Pubblicati ({articles.length})</h3>
                    </div>
                    
                    {articles.length === 0 ? (
                        <div className="p-12 text-center text-gray-600">
                            Nessun articolo presente. Creane uno nuovo!
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-800">
                            {articles.map((article) => (
                                <div key={article.id} className="p-4 hover:bg-gray-800/30 transition-colors flex gap-4 items-start">
                                    <img src={article.imageUrl} alt={article.title} className="w-24 h-16 object-cover rounded bg-gray-800 flex-shrink-0" />
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-lg text-white mb-1">{article.title}</h4>
                                                <div className="flex items-center gap-3 text-xs text-gray-400">
                                                    <span className="text-juve-gold uppercase font-bold">{article.category}</span>
                                                    <span>•</span>
                                                    <span>{article.date}</span>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => handleDelete(article.id)}
                                                className="text-gray-500 hover:text-red-500 p-2 transition-colors"
                                                title="Elimina"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-2 line-clamp-2">{article.summary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;