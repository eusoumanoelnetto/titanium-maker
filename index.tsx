import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// LazyVideo: only sets video src when the element enters viewport to improve load/time-to-interactive
const LazyVideo: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            });
        }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full bg-gray-800 flex items-center justify-center overflow-hidden">
            {visible ? (
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className={className}
                >
                    Seu navegador não suporta a tag de vídeo.
                </video>
            ) : (
                <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse" />
            )}
        </div>
    );
};

// --- Landing Page Sections ---
const Header = () => (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
        <h1 className="text-2xl font-bold"><span className="text-gray-400">Titanium</span><span className="text-cyan-400">Maker</span></h1>
        <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Serviços</a>
            <a href="#diferenciais" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Diferenciais</a>
            <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Portfólio</a>
        </nav>
        <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105">
            Orçamento
        </a>
    </header>
);

const Hero = () => (
    <section className="text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                <span className="block">Suas Ideias, Nossa Impressão.</span>
                <span className="block text-cyan-400 mt-2">Realidade em 3D.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
                Serviços de impressão 3D de alta precisão para protótipos, peças personalizadas e projetos inovadores. Da imaginação à materialização.
            </p>
            <div className="mt-8 flex justify-center">
                <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 text-xl">
                    Solicitar Orçamento Agora
                </a>
            </div>
        </div>
    </section>
);

const Services = () => (
    <section id="services" className="py-20 px-4 bg-gray-950">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">O Que Fazemos</h2>
            <p className="mt-4 text-lg text-gray-400">Soluções completas em impressão 3D para todas as necessidades.</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                <i className="fa-solid fa-cube text-4xl mb-4 text-cyan-400"></i>
                <h3 className="text-2xl font-bold mb-2">Prototipagem Rápida</h3>
                <p className="text-gray-400">Valide seus projetos com protótipos funcionais e de alta fidelidade.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                <i className="fa-solid fa-gear text-4xl mb-4 text-cyan-400"></i>
                <h3 className="text-2xl font-bold mb-2">Peças Personalizadas</h3>
                <p className="text-gray-400">Criação de peças únicas, de itens de decoração a componentes específicos.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                <i className="fa-solid fa-users text-4xl mb-4 text-cyan-400"></i>
                <h3 className="text-2xl font-bold mb-2">Miniaturas e Colecionáveis</h3>
                <p className="text-gray-400">Dê vida aos seus personagens e modelos favoritos com detalhes incríveis.</p>
            </div>
        </div>
    </section>
);

const Diferenciais = () => (
    <section id="diferenciais" className="py-20 px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Nossos Diferenciais</h2>
            <p className="mt-4 text-lg text-gray-400">Por que escolher a Titanium Maker?</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <i className="fa-solid fa-shield-halved text-4xl mb-4 text-cyan-400"></i>
                <h3 className="text-2xl font-bold mb-2">Qualidade Superior</h3>
                <p className="text-gray-400">Utilizamos apenas materiais premium para garantir durabilidade e acabamento impecável.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <i className="fa-solid fa-flask-vial text-4xl mb-4 text-cyan-400"></i>
                <h3 className="text-2xl font-bold mb-2">Precisão Milimétrica</h3>
                <p className="text-gray-400">Nossa tecnologia de ponta assegura que cada detalhe do seu projeto seja perfeito.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                 <i className="fa-solid fa-comments text-4xl mb-4 text-cyan-400"></i>
                <h3 className="text-2xl font-bold mb-2">Suporte Dedicado</h3>
                <p className="text-gray-400">Acompanhamos você do início ao fim, garantindo que sua visão se torne realidade.</p>
            </div>
        </div>
    </section>
);

const HowItWorks = () => (
    <section className="py-20 px-4 bg-gray-950">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Como Funciona?</h2>
            <p className="mt-4 text-lg text-gray-400">Nosso processo é simples, rápido e transparente.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8 text-center relative">
             <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-700 hidden md:block" style={{zIndex: 0}}></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 mb-4 bg-gray-800 border-2 border-cyan-500 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400">1</div>
                <h3 className="font-bold text-lg">Envie sua Ideia</h3>
                <p className="text-sm text-gray-400">Conte sua ideia ou envie o modelo 3D.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 mb-4 bg-gray-800 border-2 border-cyan-500 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400">2</div>
                <h3 className="font-bold text-lg">Orçamento</h3>
                <p className="text-sm text-gray-400">Analisamos e enviamos um orçamento detalhado.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 mb-4 bg-gray-800 border-2 border-cyan-500 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400">3</div>
                <h3 className="font-bold text-lg">Impressão</h3>
                <p className="text-sm text-gray-400">Produzimos sua peça com materiais de alta qualidade.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 mb-4 bg-gray-800 border-2 border-cyan-500 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400">4</div>
                <h3 className="font-bold text-lg">Receba em Casa</h3>
                <p className="text-sm text-gray-400">Enviamos para todo o Brasil com segurança.</p>
            </div>
        </div>
    </section>
);

const portfolioProjects = [
    { 
        title: 'Mascote do Vascão', 
        description: 'Mascote do Vasco da Gama impresso em resina 8K para colecionadores e torcedores apaixonados.', 
        videoUrl: 'https://i.imgur.com/YKKKllU.mp4',
        link: 'https://www.instagram.com/titanium.maker/'
    },
    { 
        title: 'Tributo ao Krav Magá', 
        description: 'Kimono personalizado do lutador de Krav Magá - Faixa Azul, Edson Macena. Impressão 3D com acabamento manual e riqueza de detalhes.', 
        videoUrl: 'https://i.imgur.com/EVu0FRi.mp4',
        link: 'https://www.instagram.com/titanium.maker/'
    },
    { 
        title: 'Mascote do Botafogo', 
        description: 'Estátua do mascote do Botafogo, impressa com alta definição para torcedores e colecionadores.', 
        videoUrl: 'https://i.imgur.com/TdHq2wk.mp4',
        link: 'https://www.instagram.com/titanium.maker/'
    },
    { 
        title: 'Mascote do Grêmio', 
        description: 'Estátua do mascote do Grêmio, para a coleção de todos os torcedores do imortal tricolor.', 
        videoUrl: 'https://i.imgur.com/wc5psw6.mp4',
        link: 'https://www.instagram.com/titanium.maker/'
    },
    { 
        title: 'Mascote do Fluminense', 
        description: 'Estátua do mascote do Fluminense, o guerreiro tricolor, para celebrar as vitórias do nense.', 
        videoUrl: 'https://i.imgur.com/JrFVOMj.mp4',
        link: 'https://www.instagram.com/titanium.maker/'
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Projetos em Destaque</h2>
                <p className="mt-4 text-lg text-gray-400">Confira alguns dos nossos trabalhos incríveis.</p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <a href="https://www.instagram.com/reel/DPzRsMVjwYE/" target="_blank" rel="noopener noreferrer" className="block bg-gray-800 rounded-lg overflow-hidden group shadow-lg transition-transform transform hover:-translate-y-2">
                    <div className="relative w-full h-56">
                        <LazyVideo src="https://i.imgur.com/4wurvfO.mp4" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
                        <div className="absolute top-2 right-2 p-1.5 bg-black/40 rounded-full">
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs text-white"></i>
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="text-xl font-bold text-cyan-400">Escultura Personalizada</h3>
                        <p className="text-gray-400 mt-2 text-sm">Action figure de mascote do Flamengo com asas. Clique para ver o vídeo da peça no Instagram.</p>
                    </div>
                </a>
                
                {portfolioProjects.map((project, i) => (
                    <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 rounded-lg overflow-hidden group shadow-lg transition-transform transform hover:-translate-y-2">
                        <div className="relative w-full h-56">
                            <LazyVideo src={project.videoUrl} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
                            <div className="absolute top-2 right-2 p-1.5 bg-black/40 rounded-full">
                                <i className="fa-solid fa-arrow-up-right-from-square text-xs text-white"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
                            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

const FinalCTA = () => (
    <section className="py-20 px-4 text-center bg-gray-950">
         <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Pronto para dar vida ao seu projeto?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Entre em contato conosco hoje mesmo e vamos transformar sua ideia em um objeto real.
        </p>
        <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-lg rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
            <i className="fa-brands fa-whatsapp text-2xl mr-3"></i>
            Fale Conosco no WhatsApp
        </a>
    </section>
);

const Footer = () => (
    <footer className="w-full text-center py-8 border-t border-gray-800 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Titanium Maker. Todos os direitos reservados.</p>
        <p>Contato via <a href="http://instagram.com/titanium.maker" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">Instagram</a></p>
    </footer>
);


// --- Main App ---
const App = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
            <Header />
            <main className="w-full flex flex-col items-center">
                <Hero />
                <Services />
                <Diferenciais />
                <HowItWorks />
                <Portfolio />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);