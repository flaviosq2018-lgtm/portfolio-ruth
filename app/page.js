"use client";

import { motion } from "framer-motion";

const marcas = [
  {
    nome: "Dark Lab",
    link: "https://darklabsuplementos.com.br/",
  },
  {
    nome: "Bold Snacks",
    link: "https://www.boldsnacks.com.br/",
  },
  {
    nome: "Beleza Brasileira",
    link: "https://belezabrasileira.com.br/",
  },
];

const produtos = [
  {
    nome: "BumBum Cream 200g",
    marca: "Beleza Brasileira",
    imagem: "https://belezabrasileira.com.br/cdn/shop/files/bumbum-cream.png",
    link: "https://belezabrasileira.com.br/products/bumbum-cream-200g",
  },
  {
    nome: "Creatina 500g",
    marca: "Dark Lab",
    imagem: "https://darklabsuplementos.com.br/cdn/shop/files/creatina-darklab.png",
    link: "https://darklabsuplementos.com.br/products/creatina-refil-500g-monohidratada-dark-lab",
  },
  {
    nome: "Bold Whey 900g",
    marca: "Bold Snacks",
    imagem: "https://www.boldsnacks.com.br/cdn/shop/files/bold-whey.png",
    link: "https://www.boldsnacks.com.br/products/bold-whey-doce-de-leite-900g",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <img
          src="/foto.jpg"
          alt="Ruth Tamara"
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-purple-400"
        >
          Ruth Tamara 💜
        </motion.h1>

        <p className="mt-4 text-gray-300 max-w-md">
          Recomendações reais, sem enrolação.
        </p>
      </section>

      {/* MARCAS */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl text-purple-400 font-semibold">
          Marcas parceiras
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {marcas.map((marca, i) => (
            <a
              key={i}
              href={marca.link}
              target="_blank"
              className="bg-[#14141f] px-6 py-3 rounded-xl hover:bg-purple-600 transition"
            >
              {marca.nome}
            </a>
          ))}
        </div>
      </section>

      {/* RECOMENDADOS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl text-center text-purple-400 font-semibold">
          Recomendados
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {produtos.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#14141f] p-6 rounded-2xl shadow-lg"
            >
              <img
                src={p.imagem}
                alt={p.nome}
                className="h-40 w-full object-contain mb-4"
              />

              <h3 className="text-xl">{p.nome}</h3>
              <p className="text-gray-400 text-sm">{p.marca}</p>

              <a
                href={p.link}
                target="_blank"
                className="block mt-4 bg-purple-600 text-center py-2 rounded-lg"
              >
                Ver produto
              </a>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}