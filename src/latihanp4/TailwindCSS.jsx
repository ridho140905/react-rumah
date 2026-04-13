export default function TailwindCSS() {
  return (
    <div>
      <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
      <button className="bg-blue-500 text-white p-2 mx-4 rounded shadow-lg">
        Click Me
      </button>
       <FlexboxGrid/>
      <Spacing />
      <Typography/>
      <BorderRadius/>
      <BackgroundColors/>
      <FlexboxGrid/>


      <ShadowEffects/>
      <Showcase/>
    </div>
  );
}

function Spacing() {
  return (
    <div className="bg-gray-500 shadow-lg p-5 m-4 rounded-lg">
      <h2 className="text-lg font-extrabold">Belajar Tailwind CSS 4</h2>
      <p className="mt-2">Ini adalah contoh paragraf dengan Tailwind CSS.</p>
    </div>
  );
}

function Typography(){
    return (
        <div>
            <h1 className="text-5xl font-bold text-blue-150">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    );
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-xs"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-10">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function Showcase() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4 inline-block">
          Belajar Tailwind CSS 4
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Semua fitur Tailwind dalam satu komponen yang rapi
        </p>
      </header>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {/* Typography Card */}
        <section className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Typography
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Belajar Tailwind sangat menyenangkan dan cepat! 
            <span className="block mt-2 text-sm text-gray-400">
              Menggunakan font-bold, text-lg, dan text-gray-600
            </span>
          </p>
        </section>

        {/* Spacing & Colors Card */}
        <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-extrabold mb-2">Spacing & Colors</h2>
          <p className="mt-4 opacity-90">
            Padding, margin, dan gradient background bekerja harmonis.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">p-6</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">m-4</span>
          </div>
        </section>

        {/* Buttons & Borders */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Buttons & Borders</h2>
          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Primary
            </button>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-lg transition-colors duration-200">
              Outline
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
              Rounded Full
            </button>
          </div>
        </section>

        {/* Shadow Effects */}
        <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group">
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            Shadow Effects
          </h2>
          <p className="text-gray-600 mt-2">
            Hover pada card ini untuk melihat efek shadow-2xl yang dramatis!
          </p>
        </section>
      </main>

      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4 rounded-xl shadow-lg max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-lg font-bold text-blue-400">Flexbox Layout</h1>
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm pt-8">
        <p>Tailwind CSS 4 - Simple & Clean Implementation</p>
      </footer>
    </div>
  );
}