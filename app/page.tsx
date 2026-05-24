
export default function ForeverProductsSite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* HEADER */}
      <header className="bg-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Forever Sénégal
            </h1>

            <p className="text-sm mt-1">
              📞 WhatsApp : +221 77 229 48 64
            </p>
          </div>

          <nav className="flex gap-6">
            <a href="#products">Produits</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-5xl font-extrabold mb-6">
              Produits Forever au Sénégal
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Découvrez nos gammes naturelles pour le bien-être.
            </p>

            <a
              href="https://wa.me/221772294864"
              target="_blank"
              className="bg-green-700 text-white px-6 py-3 rounded-2xl font-bold"
            >
              Commander sur WhatsApp
            </a>

          </div>

          <img
            src="/banner.jpeg"
            alt="Forever"
            className="rounded-3xl shadow-2xl"
          />

        </div>
      </section>

       {/* SECTION PROSTATE */}
<section className="py-16 px-6 bg-white">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

    {/* VIDEO */}
    <video
      className="w-72 h-96 rounded-2xl shadow-lg object-cover"
      controls
    >
      <source src="/prostate.mp4" type="video/mp4" />
    </video>

    {/* IMAGE GAMME */}
    <div className="bg-gray-100 p-6 rounded-3xl shadow-xl">

      <img
        src="/gamme-prostate.jpeg"
        alt="Gamme Prostate"
        className="w-full rounded-2xl shadow-lg"
      />

      <div className="mt-6 text-center">

        <h3 className="text-3xl font-bold text-green-700">
          Gamme Prostate
        </h3>

        <p className="text-gray-600 mt-3">
          Berry Nectar et Vitolize
          pour le bien-être masculin.
        </p>

        {/* PRIX */}
        <div className="mt-6 space-y-2">

          <p className="text-lg text-gray-700">
            Berry Nectar :
            <span className="font-bold"> 19.500f</span>
          </p>

          <p className="text-lg text-gray-700">
            Vitolize :
            <span className="font-bold"> 23.500f</span>
          </p>

          <p className="text-2xl font-extrabold text-green-700 mt-4">
            Total : 43.000f
          </p>

        </div>

        {/* BOUTON */}
        <div className="mt-8">

          <a
            href="https://wa.me/221772294864?text=Bonjour%20je%20veux%20commander%20la%20gamme%20prostate%20https://senebio-site.vercel.app/prostate"
            target="_blank"
            className="bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-800 transition shadow-lg"
          >
            Commander la gamme
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* SECTION INFECTION URINAIRE */}
<section className="py-16 px-6 bg-gray-50">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

    {/* VIDEO */}
    <video
      className="w-72 h-96 rounded-2xl shadow-lg object-cover"
      controls
    >
      <source src="/infection.mp4" type="video/mp4" />
    </video>

    {/* PRODUITS */}
    <div className="bg-white p-6 rounded-3xl shadow-xl">

      <img
        src="/gamme-urinaire.jpeg"
        alt="Gamme Infection Urinaire"
        className="w-full rounded-2xl"
      />

      <div className="mt-6 text-center">

        <h3 className="text-3xl font-bold text-green-700">
          Gamme Infection Urinaire
        </h3>

        <p className="text-gray-600 mt-3">
          Association de Berry Nectar, Bee Propolis,
          Vitolize et Fields of Greens.
        </p>

        <div className="mt-6 space-y-2">

          <p className="text-lg">
            Berry Nectar :
            <span className="font-bold"> 19.500fx2</span>
          </p>

          <p className="text-lg">
            Bee Propolis :
            <span className="font-bold"> 25.500f</span>
          </p>

          <p className="text-lg">
            Vitolize :
            <span className="font-bold"> 23.500f</span>
          </p>

          <p className="text-lg">
            Fields of Greens :
            <span className="font-bold"> 10.000f</span>
          </p>

          <p className="text-2xl font-bold text-green-700 mt-4">
            Total : 98000
          </p>

        </div>

        <div className="mt-8">

          <a
            href="https://wa.me/221772294864?text=Bonjour%20je%20veux%20commander%20la%20gamme%20infection%20urinaire"
            target="_blank"
            className="bg-green-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-800 transition"
          >
            Commander la gamme
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* SECTION VISION */}
<section className="py-16 px-6 bg-white">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

    {/* VIDEO */}
    <video
      className="w-72 h-96 rounded-2xl shadow-lg object-cover"
      controls
    >
      <source src="/vision.mp4" type="video/mp4" />
    </video>

    {/* PRODUITS */}
    <div className="bg-gray-100 p-6 rounded-3xl shadow-xl">

      <img
        src="/gamme-vision.jpeg"
        alt="Gamme Vision"
        className="w-full rounded-2xl"
      />

      <div className="mt-6 text-center">

        <h3 className="text-3xl font-bold text-blue-700">
          Gamme Vision
        </h3>

        <p className="text-gray-600 mt-3">
          Association de Forever Arctic Sea et Forever iVision
          pour le bien-être des yeux et de la vision.
        </p>

        <div className="mt-6 space-y-2">

          <p className="text-lg">
            Forever Arctic Sea :
            <span className="font-bold"> 23.500f</span>
          </p>

          <p className="text-lg">
            Forever iVision :
            <span className="font-bold"> 27.500f</span>
          </p>

          <p className="text-2xl font-bold text-blue-700 mt-4">
            Total : 51.000f
          </p>

        </div>

        <div className="mt-8">

          <a
            href="https://wa.me/221772294864?text=Bonjour%20je%20veux%20commander%20la%20gamme%20vision"
            target="_blank"
            className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition"
          >
            Commander la gamme
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* SECTION ARTICULATION */}
<section className="py-16 px-6 bg-white">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

    {/* VIDEO */}
    <video
      className="w-72 h-96 rounded-2xl shadow-lg object-cover"
      controls
    >
      <source src="/articulation.mp4" type="video/mp4" />
    </video>

    {/* PRODUITS */}
    <div className="bg-gray-100 p-6 rounded-3xl shadow-xl">

      <img
        src="/gamme-articulation.jpeg"
        alt="Gamme Articulation"
        className="w-full rounded-2xl"
      />

      <div className="mt-6 text-center">

        <h3 className="text-3xl font-bold text-blue-700">
          Gamme Articulation
        </h3>

        <p className="text-gray-600 mt-3">
          Association de Forever Freedom et Aloe Heat Lotion
          pour le confort articulaire et musculaire.
        </p>

        <div className="mt-6">

          <p className="text-lg">
            Forever Freedom :
            <span className="font-bold"> 28.000f</span>
          </p>

          <p className="text-lg mt-2">
            Aloe Heat Lotion :
            <span className="font-bold"> 11.500f</span>
          </p>

          <p className="text-2xl font-bold text-blue-700 mt-4">
            Total : 40.000f
          </p>

        </div>

        <div className="mt-8">

          <a
            href="https://wa.me/221772294864?text=Bonjour%20je%20veux%20commander%20la%20gamme%20articulation%20https://senebio-site.vercel.app"
            target="_blank"
            className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition"
          >
            Commander la gamme
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* SECTION DIGESTION */}
<section className="py-16 px-6 bg-gray-100">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

    {/* VIDEO */}
    <video
      className="w-72 h-96 rounded-2xl shadow-lg object-cover"
      controls
    >
      <source src="/digestion.mp4" type="video/mp4" />
    </video>

    {/* PRODUITS */}
    <div className="bg-white p-6 rounded-3xl shadow-xl">

      <img
        src="/gamme-digestion.jpeg"
        alt="Gamme Digestion"
        className="w-full rounded-2xl"
      />

      <div className="mt-6 text-center">

        <h3 className="text-3xl font-bold text-green-700">
          Gamme Digestion
        </h3>

        <p className="text-gray-600 mt-3">
          Association de Aloe Vera Gel, Active Pro-B
          et Fields Of Greens pour une bonne digestion.
        </p>

        <div className="mt-6">

          <p className="text-lg">
            Aloe Vera Gel :
            <span className="font-bold"> 19.500f</span>
          </p>

          <p className="text-lg mt-2">
            Active Pro-B :
            <span className="font-bold"> 28.500f</span>
          </p>

          <p className="text-lg mt-2">
            Fields Of Greens :
            <span className="font-bold"> 10.000f</span>
          </p>

          <p className="text-2xl font-bold text-green-700 mt-4">
            Total : 58.000f
          </p>

        </div>

        <div className="mt-8">

          <a
            href="https://wa.me/221772294864?text=Bonjour%20je%20veux%20commander%20la%20gamme%20digestion%20https://senebio-site.vercel.app/gamme-digestion.jpeg"
            target="_blank"
            className="bg-green-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-800 transition"
          >
            Commander la gamme
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
    </div>
  );
}