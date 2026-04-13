import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  /** Deklarasi state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");
  /*Inisialisasi DataForm Baru */
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  /** Deklarasi Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const name = framework.name?.toLowerCase() || "";
    const developer = framework.details.developer?.toLowerCase() || "";
    const releaseYear = framework.details.releaseYear?.toString() || "";
    const description = framework.description?.toLowerCase() || "";

    const matchesSearch =
      name.includes(_searchTerm) ||
      developer.includes(_searchTerm) ||
      releaseYear.includes(_searchTerm) ||
      description.includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags?.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  // Ditambahkan .sort() agar urutan dropdown lebih rapi secara alfabetis
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ].sort();

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans selection:bg-rose-100 selection:text-rose-700 pb-20">
      {/* Background Decor - Mesh Gradient Style */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-200/30 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-violet-200/30 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section - More Dramatic */}
        <header className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/50 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-rose-600 shadow-sm mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            v2.0 ECOSYSTEM
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-910">
            Dev
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-500 via-violet-600 to-indigo-600">
              Canvas.
            </span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Kurasi framework modern untuk membangun antarmuka masa depan yang
            <span className="text-slate-800">
              {" "}
              intuitif, cepat, dan elegan.
            </span>
          </p>
        </header>

        {/* Control Bar - Floating Glass Style */}
        <div className="max-w-4xl mx-auto mb-20 p-2 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-xl flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1 group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-rose-500 transition-colors">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari framework favoritmu..."
              value={dataForm.searchTerm}
              name="searchTerm"
              onChange={handleChange}
              className="w-full pl-14 pr-6 py-4 bg-white/80 border-none rounded-2xl focus:ring-0 text-slate-700 placeholder:text-slate-400 font-semibold transition-all"
            />
          </div>

          <div className="relative sm:w-72">
            <select
              value={dataForm.selectedTag}
              name="selectedTag"
              onChange={handleChange}
              className="w-full pl-6 pr-12 py-4 bg-white/80 border-none rounded-2xl appearance-none cursor-pointer font-bold text-slate-600 focus:ring-2 focus:ring-rose-500/20 transition-all"
            >
              <option value="">Semua Kategori</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid Layout - Clean Minimalist Cards */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredFrameworks.length > 0 ? (
            filteredFrameworks.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col bg-white rounded-[2.5rem] p-1 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-10">
                    <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl group-hover:rotate-6 transition-transform duration-500">
                      <span className="text-3xl font-black">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-[10px] font-black tracking-widest text-rose-500 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100">
                      EST. {item.details.releaseYear}
                    </div>
                  </div>

                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-slate-500 text-base leading-relaxed mb-8 line-clamp-3 font-medium">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 group-hover:border-rose-200 group-hover:bg-rose-50 group-hover:text-rose-600 transition-all"
                      >
                        #{tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer - Solid Contrast */}
                <div className="mx-2 mb-2 p-6 bg-slate-50 rounded-[2rem] flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="text-[9px] text-slate-400 uppercase font-black tracking-tighter mb-0.5">
                      Author
                    </p>
                    <p className="text-sm font-bold text-slate-700 truncate">
                      {item.details.developer}
                    </p>
                  </div>

                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm hover:bg-rose-600 hover:text-white hover:-rotate-12 transition-all duration-300"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            /* Enhanced Empty State */
            <div className="col-span-full py-32 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm rounded-[3rem] border-2 border-dashed border-slate-200">
              <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mb-8 animate-bounce">
                <svg
                  className="h-10 w-10 text-rose-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-3">
                Pencarian Nihil
              </h3>
              <p className="text-slate-500 font-medium mb-10 text-center px-6">
                Wah, framework itu belum masuk radar kami. <br /> Coba kata
                kunci lain atau reset filternya!
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag("");
                }}
                className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-rose-600 shadow-xl shadow-slate-900/10 transition-all active:scale-95"
              >
                Bersihkan Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
