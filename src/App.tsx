import './App.css'
import { Header } from './components/Header/Header'
import { Charts } from './components/Overview/CharArt' // Fixed typo in import path
import { TokensTable } from './components/TokenTable/TokenRow' // Fixed import path
import { PoolsTable } from './components/TopPoolsTable/PoolRow'
import { TransactionsTable } from './components/TransactionsTable/Transactions-table'

function App() {
  return (
    <div className="min-h-screen bg-[#131313] text-white">
      <Header />
      <main className="container mx-auto">
        <div className="py-6">
          <h1 className="text-xl font-semibold mb-6">Uniswap Overview</h1>
          <Charts />
          <div className="flex flex-wrap gap-4 text-sm my-1 p-5 bg-[#1a1b1f] rounded-lg">
            <div>Volume 24H: <span className="text-red-500">$860.60m</span> <span className="text-red-500">↓30.33%</span></div>
            <div>Fees 24H: <span className="text-red-500">$2.45m</span> <span className="text-red-500">↓15.75%</span></div>
            <div>TVL: <span className="text-green-500">$5.32b</span> <span className="text-green-500">↑0.34%</span></div>
          </div>
          <TokensTable />
          <PoolsTable />
          <TransactionsTable />
        </div>
      </main>
    </div>
  )
}

export default App
