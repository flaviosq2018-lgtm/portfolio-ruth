"use client";

import { motion } from "framer-motion";

const redes = [
  {
    nome: "Instagram",
    link: "https://www.instagram.com/ruth__tamara/",
  },
];

const marcas = [
  {
    nome: "Dark Lab",
    link: "https://darklabsuplementos.com.br/",
    cupom: "RUTH",
  },
  {
    nome: "Bold Snacks",
    link: "https://www.boldsnacks.com.br/",
    cupom: "RUTH10",
  },
  {
    nome: "Beleza Brasileira",
    link: "https://belezabrasileira.com.br/",
    cupom: "RUTH15",
  },
];

const produtos = [
  {
    nome: "BumBum Cream",
    imagem:
      "https://belezabrasileira.com.br/cdn/shop/files/Bumbum-Cream-Produto.png?v=1774985159&width=800",
    link: "https://belezabrasileira.com.br/products/bumbum-cream-200g",
  },
  {
    nome: "Creatina 500g",
    imagem:
      "https://darklabsuplementos.com.br/cdn/shop/files/refil-creatina-500g-dark-lab-1.png?v=1766071203&width=823",
    link: "https://darklabsuplementos.com.br/products/creatina-refil-500g-monohidratada-dark-lab",
    destaque: true,
  },
  {
    nome: "Bold Whey 900g",
    imagem:
      "https://www.boldsnacks.com.br/cdn/shop/files/bold-whey.png",
    link: "https://www.boldsnacks.com.br/products/bold-whey-doce-de-leite-900g",
  },
];

export default function Home() {
  const copiarCupom = (texto) => {
    navigator.clipboard.writeText(texto);
    alert("Cupom copiado: " + texto);
  };

  return (
    <main className="bg-[#0a0a0f] text-white min-h-screen flex flex-col items-center px-4">

      {/* PERFIL */}
      <section className="mt-10 text-center">
        <img
          src="/foto.jpg"
          alt="Ruth Tamara"
          className="w-24 h-24 rounded-full border-4 border-purple-500 mx-auto object-cover"
        />

        <h1 className="text-2xl mt-3 text-purple-400 font-bold">
          Ruth Tamara 💜
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Dicas reais • Cupons ativos
        </p>
      </section>

      {/* REDES SOCIAIS */}
      <section className="w-full max-w-md mt-4">
        {redes.map((r, i) => (
          <a
            key={i}
            href={r.link}
            target="_blank"
            className="block bg-[#14141f] text-center py-2 rounded-lg text-sm hover:bg-purple-600"
          >
            @{r.nome}
          </a>
        ))}
      </section>

      {/* MARCAS + CUPOM */}
      <section className="w-full max-w-md mt-6 space-y-3">
        {marcas.map((m, i) => (
          <div
            key={i}
            className="bg-[#14141f] p-3 rounded-xl flex flex-col gap-2"
          >
            <a
              href={m.link}
              target="_blank"
              className="font-semibold text-purple-400"
            >
              {m.nome}
            </a>

            <div className="flex justify-between items-center">
              <span className="text-sm">Cupom: {m.cupom}</span>

              <button
                onClick={() => copiarCupom(m.cupom)}
                className="bg-purple-600 px-3 py-1 text-sm rounded"
              >
                Copiar
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* PRODUTOS */}
      <section className="w-full max-w-md mt-6">
        <h2 className="text-sm text-purple-400 mb-2">
          Recomendados
        </h2>

        <div className="space-y-3">
          {produtos.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              whileTap={{ scale: 0.97 }}
              className="flex gap-3 bg-[#14141f] p-3 rounded-xl items-center"
            >
              <img
                src={p.imagem}
                alt={p.nome}
                className="w-16 h-16 object-contain bg-white rounded p-1"
              />

              <div className="flex-1">
                <p className="text-sm">{p.nome}</p>

                {p.destaque && (
                  <span className="text-xs text-purple-400">
                    🔥 Mais vendido
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <div className="h-10"></div>

    </main>
  );
}