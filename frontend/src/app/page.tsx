export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">
          🚀 Global Brand & Digital Expo
        </h1>
        <p className="text-xl mb-8">
          Brand Exhibition + Digital B2B Platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 bg-white/10">
            <h2 className="text-2xl font-bold mb-2">Products</h2>
            <p>Product showcase and management</p>
          </div>
          <div className="border rounded-lg p-6 bg-white/10">
            <h2 className="text-2xl font-bold mb-2">Exhibitions</h2>
            <p>Exhibition management and leads</p>
          </div>
          <div className="border rounded-lg p-6 bg-white/10">
            <h2 className="text-2xl font-bold mb-2">Analytics</h2>
            <p>Data analytics and insights</p>
          </div>
        </div>
      </div>
    </main>
  )
}
