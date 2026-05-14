
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
  <h1 className="text-3xl font-bold">Forever Sénégal</h1>
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
         <video
  className="w-full max-w-md mx-auto rounded-2xl"
  controls
>
  <source src="/vision.mp4" type="vision/mp4" />
</video>
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

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold mb-4">Nos Produits</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Produits Forever sélectionnés pour répondre aux besoins du quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                 className="w-30 h-40 object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3">{product.name}</h4>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <a
                  href="https://wa.me/221772294864"
                  target="_blank"
                  className="inline-block bg-green-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
                >
                  Acheter maintenant
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Pourquoi choisir Forever ?</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Forever propose des produits de bien-être appréciés dans plusieurs pays.
            Notre objectif est d’offrir un service simple, rapide et professionnel au Sénégal.
          </p>
        </div>
      </section>

      {/* Contact */}
       {/* Contact */}
<section id="contact" className="max-w-5xl mx-auto px-6 py-20">
  <div className="bg-green-700 text-white rounded-3xl p-10 shadow-2xl text-center">
    <h3 className="text-4xl font-bold mb-4">Contactez-nous</h3>

    <p className="text-lg mb-4">
      📞 Téléphone : +221 77 229 48 64
    </p>

    <p className="text-lg mb-4">
      💬 WhatsApp : +221 77 229 48 64
    </p>

    <p className="text-lg mb-4">
      📧 Email : aliounebadaraf533@gmail.com
    </p>

    <p className="text-lg mb-8">
      📍 Dakar, Sénégal,parcelle assainie unite 5
    </p>

    <a
      href="https://wa.me/221772294864"
      target="_blank"
      className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition"
    >
      Commander sur WhatsApp
    </a>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>© 2026 Forever Sénégal - Tous droits réservés.</p>
      </footer>
    </div>
  );
}
  