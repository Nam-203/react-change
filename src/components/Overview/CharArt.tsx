
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, BarChart } from 'lucide-react'

export function Charts() {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4 ">
      <Card className="bg-[#1a1b1f] border-gray-800">
        <CardHeader>
          <CardTitle className="text-sm text-gray-400">TVL</CardTitle>
          <div className="text-2xl font-bold text-white">$5.32b</div>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-end">
            {/* Placeholder for actual chart */}
            <div className="z-10"></div>
            <div className="relative w-full h-[180px] z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent" />
              <div className="absolute bottom-0 w-full h-[2px] bg-pink-500" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1a1b1f] border-gray-800 ">
        <CardHeader className="flex justify-between items-center flex-row">
          <div>
            <CardTitle className="text-sm text-gray-400">Volume 24H</CardTitle>
            <div className="text-2xl font-medium text-white">$860.60m</div>
          </div>
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-white border border-gray-800 rounded-md px-2 py-1">D</button>
            <button className="text-gray-400 hover:text-white border border-gray-800 rounded-md px-2 py-1">W</button>
            <button className="text-gray-400 hover:text-white border border-gray-800 rounded-md px-2 py-1">M</button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-end">
            {/* Placeholder for actual chart */}
            <div className="z-10"></div>
            <div className="relative w-full h-[180px] z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
              <div className="absolute bottom-0 w-full h-[2px] bg-blue-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

