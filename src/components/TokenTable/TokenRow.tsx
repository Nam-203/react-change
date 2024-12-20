
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { StockData } from "@/types";

const ITEMS_PER_PAGE = 10;


export function TokensTable() {
  const [data, setData] = useState<StockData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentStocks = data.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const formatVolume = (volume: string) => {
    const num = parseInt(volume);
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`;
    return volume;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../../public/data.json');
      const json = await response.json();
      setData(json.top_gainers);
      console.log(json.top_gainers);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Top Gainers</h2>
        <button className="text-sm text-blue-500">Explore →</button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-gray-900 border-b border-gray-800">
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Ticker</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Change</TableHead>
              <TableHead className="text-right">Change %</TableHead>
              <TableHead className="text-right">Volume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentStocks.map((stock, index) => (
              <TableRow key={stock.ticker} className="hover:bg-gray-900 border-b border-gray-800/30">
                <TableCell>{startIndex + index + 1}</TableCell>
                <TableCell className="font-medium">{stock.ticker}</TableCell>
                <TableCell className="text-right">${stock.price}</TableCell>
                <TableCell
                  className={`text-right ${
                    parseFloat(stock.change_amount) > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {parseFloat(stock.change_amount) > 0 ? '+' : ''}
                  {stock.change_amount}
                </TableCell>
                <TableCell
                  className={`text-right ${
                    parseFloat(stock.change_percentage) > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stock.change_percentage}
                </TableCell>
                <TableCell className="text-right">{formatVolume(stock.volume)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-center mt-4 text-sm">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="h-8 w-8 border-gray-800 bg-[#1a1b1f] hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="h-8 w-8 border-gray-800 bg-[#1a1b1f] hover:bg-gray-800"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
