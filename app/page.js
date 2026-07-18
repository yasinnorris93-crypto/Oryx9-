export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Oryx9</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">Login</button>
          <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500">Sign Up</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h2 className="text-5xl font-bold mb-4">Trade Rise & Fall</h2>
        <p className="text-gray-400 mb-8">Predict market movements and win in 60 seconds</p>
        <button className="px-8 py-4 bg-green-600 rounded-xl text-lg font-semibold hover:bg-green-500">
          Start Trading
        </button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-3 gap-6 px-8 pb-20">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold mb-2">⚡ Fast Trading</h3>
          <p className="text-gray-400">60 second predictions</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold mb-2">💰 Secure Wallet</h3>
          <p className="text-gray-400">Deposit & withdraw instantly</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold mb-2">📊 Live Charts</h3>
          <p className="text-gray-400">Real-time market data</p>
        </div>
      </section>
    </main>
  )
    }
