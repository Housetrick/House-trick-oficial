import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { Menu, X, Whatsapp, PhoneCall } from "lucide-react";

// --- PALETA HOUSE TRICK ---
// Vinho Vintage (#5B0D23) -> Red-800 para destaque/CTA
// Preto Beleza (#14191A) -> Gray-900 para forte contraste
// Trigo (#B79F7F) -> Amber-700 para acento sutil

// -------------------------
// Sample product data (Ajustado para o seu conceito de qualidade)
// -------------------------
const PRODUCTS = [
  {
    id: "polo-ralph",
    name: "Polo Ralph Lauren Black Edition",
    price: 329.0,
    sizes: ["P", "M", "G", "GG"],
    category: "Luxo Casual",
    desc:
      "Clássico atemporal com Qualidade Garantida. Peça essencial para quem busca durabilidade e estilo.",
    img: "https://images.unsplash.com/photo-1520975918521-627dee3b1e56?auto=format&fit=crop&w=800&q=60", // Placeholder
  },
  {
    id: "trapper-hoodie",
    name: "Moletom HYPEBEAST Trapper",
    price: 419.0,
    sizes: ["M", "G"],
    category: "Streetwear/Hype",
    desc:
      "Design exclusivo House Trick. Tecido de alta qualidade e corte único que acompanha a tendência HYPEBEAST.",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60", // Placeholder
  },
  {
    id: "shorts-boss",
    name: "Shorts BOSS Performance",
    price: 299.0,
    sizes: ["38", "40", "42", "44"],
    category: "Performance",
    desc: "Shorts com tecnologia de secagem rápida. Qualidade BOSS para aventura ou estilo urbano, feito para durar.",
    img: "https://images.unsplash.com/photo-1526178616647-124d9d1b3c88?auto=format&fit=crop&w=800&q=60", // Placeholder
  },
];

// -------------------------
// Utility
// -------------------------
const currency = (v) => `R$ ${v.toFixed(2).replace('.', ',')}`;
const WHATSAPP_LINK = "https://wa.me/5511999999999"; // Substitua pelo seu WhatsApp!

// -------------------------
// Header (Ajustado)
// -------------------------
function Header({ onToggleMenu }) {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo House Trick com cor Vinho Vintage de acento */}
          <div className="rounded-md bg-gray-900 text-white px-3 py-1 text-lg font-bold border-2 border-red-800">HT</div>
          <div>
            <h1 className="text-xl font-semibold">House Trick</h1>
            {/* Slogan Secundário - Foco em Qualidade */}
            <p className="text-xs text-amber-700 font-medium">PEÇAS DE QUALIDADE. EXCLUSIVIDADE & ESTILO URBANO.</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/catalog" className="hover:text-red-800 transition font-medium">
            Catálogo
          </Link>
          <Link to="/about" className="hover:text-red-800 transition font-medium">
            A Marca
          </Link>
          {/* CTA Principal - Vinho Vintage (Foco no WhatsApp) */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-800 text-white px-4 py-2 rounded-md font-medium hover:bg-red-900 transition"
          >
            <Whatsapp size={18} />
            <span>Falar com Consultor</span>
          </a>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-red-800">
             <PhoneCall size={24} />
          </a>
          <button onClick={onToggleMenu} aria-label="menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

// -------------------------
// Home
// -------------------------
function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="grid md:grid-cols-2 gap-8 items-center bg-gray-900 text-white p-8 rounded-xl shadow-2xl">
        <div className="order-2 md:order-1">
          {/* Slogan Principal da House Trick */}
          <h2 className="text-5xl font-extrabold tracking-tight">HOUSE TRICK.</h2>
          <h3 className="text-4xl font-extrabold text-red-800 mt-1 tracking-tight">FEITO PARA DURAR.</h3>
          {/* Novo Slogan - Foco em Qualidade */}
          <p className="mt-4 text-amber-700 text-xl font-medium">A moda que você procura com QUALIDADE GARANTIDA.</p>

          <div className="mt-8 flex gap-3">
            <Link
              to="/catalog"
              className="rounded-md border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-gray-900 transition"
            >
              EXPLORE O CATÁLOGO
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-red-800 text-red-800 px-6 py-3 font-medium hover:bg-red-800 hover:text-white transition inline-flex items-center gap-2"
            >
              <Whatsapp size={18} />
              ATENDIMENTO
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=60"
            alt="streetwear"
            className="w-full h-80 object-cover opacity-80"
          />
        </div>
      </section>
      
      {/* Bloco Coleções em Destaque */}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold">Peças em Destaque</h3>
        <p className="text-gray-600">Confira a nossa seleção de alta qualidade. Streetwear, Y2K e Luxo Casual.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id} className="group">
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <img src={p.img} alt={p.name} className="w-full h-56 object-cover group-hover:scale-105 transition" />
              </div>
              <div className="mt-2">
                <div className="text-sm text-amber-700">{p.category}</div>
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-gray-700 mt-1">{currency(p.price)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

// -------------------------
// Catalog
// -------------------------
function Catalog() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold">Catálogo de Qualidade</h2>
      <p className="text-gray-600 mt-2">Explore nossas coleções exclusivas. Peças com durabilidade e design garantidos.</p>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PRODUCTS.map((p) => (
          <Link to={`/product/${p.id}`} key={p.id} className="group">
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover group-hover:scale-105 transition" />
            </div>
            <div className="mt-2">
              <div className="text-sm text-amber-700">{p.category}</div>
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-gray-700 mt-1">{currency(p.price)}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

// -------------------------
// Product Detail
// -------------------------
function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const [size, setSize] = useState(product?.sizes?.[0] || "Único");
  const navigate = useNavigate();

  if (!product) return <div className="p-6">Produto não encontrado.</div>;

  const handleConsultancy = () => {
    // Simula a adição do item no Inquérito e redireciona para o WhatsApp
    const whatsappMsg = `Olá, gostaria de encomendar a peça *${product.name}* no tamanho *${size}* que vi no catálogo da House Trick.`;
    const whatsappLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <main className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Imagem de Destaque (Coluna 1) */}
      <div>
        <img src={product.img} alt={product.name} className="w-full rounded-lg object-cover h-96 shadow-lg" />
        <p className="mt-4 text-sm text-gray-500">Detalhes de acabamento e etiquetas de autenticidade (Visualizar Fotos Adicionais)</p>
      </div>

      {/* Detalhes e Conversão (Coluna 2) */}
      <div>
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <div className="text-base text-amber-700 font-medium mt-1">{product.category}</div>
        
        <div className="text-2xl font-semibold mt-4">{currency(product.price)}</div>

        <p className="mt-4 text-gray-700 border-l-4 border-red-800 pl-3">{product.desc}</p>

        <div className="mt-6">
          <label className="block text-sm text-gray-600">Tamanho Exclusivo</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="mt-2 border rounded-md px-3 py-2 w-full focus:ring-red-800 focus:border-red-800"
          >
            {product.sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* CTA para Venda Consultiva (Botão Vinho Vintage) */}
        <button
          onClick={handleConsultancy}
          className="mt-6 w-full bg-red-800 text-white px-4 py-3 rounded-md font-extrabold text-lg hover:bg-red-900 transition flex items-center justify-center gap-2"
        >
          <Whatsapp size={20} />
          ENCOMENDAR E FALAR NO WHATSAPP
        </button>

        <p className="mt-4 text-xs text-gray-500 text-center">
            *A House Trick trabalha com venda consultiva. O botão acima abre o chat para garantir sua peça com um consultor.
        </p>
      </div>
    </main>
  );
}

// -------------------------
// About
// -------------------------
function About() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold">HOUSE TRICK: QUALIDADE E ESTILO</h2>
      <p className="mt-4 text-gray-700 text-lg">
        "A House Trick nasceu com o propósito de oferecer peças de **qualidade superior**, unindo a durabilidade que você exige ao estilo que você ama. Nosso foco é em **peças exclusivas**, com design pensado para o universo **Streetwear, Y2K e Luxo Casual**. Nossas roupas são feitas para durar e te acompanhar em todas as suas aventuras."
      </p>
      <p className="mt-4 text-sm text-amber-700 font-medium">QUALIDADE. EXCLUSIVIDADE. ESTILO.</p>
    </main>
  );
}

// -------------------------
// Policies
// -------------------------
function Policies() {
    return (
        <main className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold">Política de Trocas e Devoluções</h2>
            <p className="mt-4 text-gray-700">A House Trick garante a qualidade de todas as peças e a transparência em nossas regras.</p>
            
            <h3 className="text-xl font-semibold mt-6 text-red-800">1. Direito de Arrependimento</h3>
            <p className="mt-2 text-gray-700">Conforme o CDC, o cliente tem 7 (sete) dias corridos a partir do recebimento para solicitar a devolução ou troca por arrependimento, desde que o produto esteja sem uso e com todas as etiquetas.</p>

            <h3 className="text-xl font-semibold mt-6 text-red-800">2. Itens Íntimos e Acessórios</h3>
            <p className="mt-2 text-gray-700">Para garantir a higiene e a segurança, **não aceitamos trocas ou devoluções** de acessórios e **itens de vestuário íntimo** (como cuecas, boxers, meias) após a violação da embalagem original, exceto em caso de comprovado defeito de fabricação.</p>

            <h3 className="text-xl font-semibold mt-6 text-red-800">3. Custos de Frete (Troca de Tamanho/Modelo)</h3>
            <p className="mt-2 text-gray-700">Em casos de troca por tamanho ou modelo (não defeito), o **custo do frete reverso** (do cliente para a House Trick) é de responsabilidade do cliente. O reenvio do novo produto será por nossa conta.</p>
        </main>
    );
}

// -------------------------
// Footer
// -------------------------
function Footer() {
  return (
    <footer className="border-t mt-12 bg-gray-50">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="font-bold text-lg text-gray-900">House Trick</div>
          <div className="text-sm text-amber-700 font-medium">QUALIDADE. EXCLUSIVIDADE. ESTILO.</div>
        </div>

        {/* Links Essenciais de Credibilidade */}
        <nav className="flex flex-col gap-2 text-sm">
            <Link to="/about" className="text-gray-600 hover:text-red-800">A Marca</Link>
            <Link to="/policies" className="text-gray-600 hover:text-red-800">Política de Trocas e Devoluções</Link>
            {/* O link de Contato é o WhatsApp */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-800">Fale Conosco (WhatsApp)</a>
        </nav>

        <div className="text-sm text-gray-600">©️ {new Date().getFullYear()} House Trick. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

// -------------------------
// App (default export)
// -------------------------
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header onToggleMenu={() => setMenuOpen((s) => !s)} />

        {menuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="max-w-6xl mx-auto p-4 flex flex-col gap-3">
              <Link to="/catalog" onClick={() => setMenuOpen(false)} className="font-medium hover:text-red-800">
                Catálogo
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="font-medium hover:text-red-800">
                A Marca
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="font-medium hover:text-red-800 flex items-center gap-1">
                <Whatsapp size={18} /> Atendimento
              </a>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/policies" element={<Policies />} /> 
          <Route path="/about" element={<About />} />
          {/* O componente Contact foi removido */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}