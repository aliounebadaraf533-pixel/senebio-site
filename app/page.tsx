
export default function ForeverProductsSite() {
   const products = [
  {
    name: "Forever Aloe Vera Gel",
    description: "99,7% d’aloe vera pur.",
    image: "/aloe.jpeg"
  },
  {
    name: "Forever Bee Honey",
    description: "Miel naturel Forever.",
    image: "/honey.jpeg"
  },
  {
    name: "Forever Arctic Sea",
    description: "Complément riche en oméga-3.",
    image: "/arctic.jpeg"
  },
  {
  name: "Forever Aloe Berry Nectar",
  description: "Bien-être digestif et vitalité.",
  image: "/berry.jpeg"
  },
  {
  name: "Forever Vitolize Men",
  description: "Complément pour la vitalité masculine.",
  image: "/vitolize.jpeg"
  },
];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
       <div>
          <h1 className="text-3xl font-bold">Forever Sénégal

          </h1>
          <div className="overflow-hidden whitespace-nowrap">
            <p className="inline-block animate-bounce text-sm mt-1">
              📞 WhatsApp : +221 77 229 48 64
            </p>

          </div>
          </div>
      
          <nav className="flex gap-6 text-sm md:text-base">
            <a href="#products" className="hover:underline">Produits</a>
            <a href="#about" className="hover:underline">À propos</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Produits Forever au Sénégal
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez une sélection de produits Forever adaptés à votre quotidien.
              Commande rapide via WhatsApp avec livraison disponible.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/221772294864"
                target="_blank"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition"
              >
                Commander sur WhatsApp
              </a>

              <a
                href="#products"
                className="border border-green-700 text-green-700 px-6 py-3 rounded-2xl font-semibold hover:bg-green-50 transition"
              >
                Voir les produits
              </a>
            </div>
          </div>

          <div>
            <img
               src="/banner.jpeg"
              alt="Produits bien-être"
              className="rounded-3xl shadow-2xl object-cover h-[450px] w-full"
            />
          </div>
        </div>
      </section>
      

 {/* SECTION PROSTATE */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2 items-center">

    {/* VIDEO */}
    <video
      className="w-80 h-96 rounded-2xl shadow-lg object-cover"
      controls
    >
      <source src="/prostate.mp4" type="video/mp4" />
    </video>

    {/* PRODUITS + BOUTON */}
    <div>

      <div className="grid grid-cols-2 gap-6">

        {/* PRODUIT 1 */}
        <div className="text-center bg-gray-100 p-4 rounded-2xl">
          <img
            src="/berry.jpeg"
            alt="Berry Nectar"
            className="w-40 mx-auto rounded-xl"
          />

          <h3 className="text-xl font-bold mt-4">
            Berry Nectar
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            Riche en antioxydants naturels.
          </p>
        </div>

        {/* PRODUIT 2 */}
        <div className="text-center bg-gray-100 p-4 rounded-2xl">
          <img
            src="/vitolize.jpeg"
            alt="Vitolize"
            className="w-40 mx-auto rounded-xl"
          />

          <h3 className="text-xl font-bold mt-4">
            Vitolize
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            Formule spécialement conçue pour les hommes.
          </p>
        </div>

      </div>

      {/* BOUTON */}
      <div className="text-center mt-6">
         <a
          href="https://wa.me/221772294864?text=Bonjour%20je%20veux%20commander%20Berry%20Nectar%20et%20Vitolize"
          target="_blank"
          className="bg-green-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-800 transition"
>
       Acheter maintenant
      </a>
      </div>

    </div>

  </div>
</section>
</div>
);
}