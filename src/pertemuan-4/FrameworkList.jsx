import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
   <div className="p-6 bg-gray-900 min-h-screen">
  <div className="max-w-2xl mx-auto space-y-4">
    {frameworkData.map((item) => (
      <div
        key={item.id}
        className="bg-gray-800 border border-gray-700 p-5 rounded-xl hover:border-blue-500 transition-colors"
      >
        <h2 className="text-lg font-bold text-white mb-1">
          {item.name}
        </h2>
        <p className="text-gray-400 text-sm mb-3">
          {item.description}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span>👤 {item.details.developer}</span>
          <span>📅 {item.details.releaseYear}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
  )
}
