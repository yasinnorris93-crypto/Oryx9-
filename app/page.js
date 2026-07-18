export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Oryx9</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-lg bg-gray-800">Login</button>
          <button className="px-4 py-2 rounded-lg bg-green-600">Sign Up</button>
        </div>
      </nav>

      <section className="text-center py-20 px-4">
        <h2 className="text-5xl font-bold mb-4">Trade Rise & Fall</h2>
        <p className="text-gray-400 mb-8">Predict market movements and win in 60 seconds</p>
        <button className="px-8 py-4 bg-green-600 rounded-xl text-lg font-semibold">
          Start Trading
        </button>
      </section>
    </main>
  )
}
