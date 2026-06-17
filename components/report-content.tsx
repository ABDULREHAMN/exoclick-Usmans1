"use client"
import { useState } from "react"
import { Download, Filter, RefreshCw, BarChart2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const reportData = {
  "This Month": {
    "All Countries": {
      "All Devices": [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
        { date: "13-Jun-2026", impressions: "12430", clicks: "346", ctr: "2.78%", ecpm: "$81.42", revenue: "$82.22" },
        { date: "12-Jun-2026", impressions: "12398", clicks: "348", ctr: "2.81%", ecpm: "$82.99", revenue: "$83.87" },
        { date: "11-Jun-2026", impressions: "12345", clicks: "346", ctr: "2.80%", ecpm: "$83.11", revenue: "$81.81" },
        { date: "10-Jun-2026", impressions: "12768", clicks: "348", ctr: "2.72%", ecpm: "$81.34", revenue: "$80.12" },
        { date: "09-Jun-2026", impressions: "12902", clicks: "351", ctr: "2.72%", ecpm: "$83.09", revenue: "$83.56" },
        { date: "08-Jun-2026", impressions: "12322", clicks: "365", ctr: "2.96%", ecpm: "$83.98", revenue: "$83.33" },
        { date: "07-Jun-2026", impressions: "12322", clicks: "361", ctr: "2.93%", ecpm: "$83.66", revenue: "$82.98" },
        { date: "06-Jun-2026", impressions: "12322", clicks: "357", ctr: "2.90%", ecpm: "$83.22", revenue: "$82.65" },
        { date: "05-Jun-2026", impressions: "12322", clicks: "353", ctr: "2.86%", ecpm: "$82.88", revenue: "$82.31" },
        { date: "04-Jun-2026", impressions: "12322", clicks: "349", ctr: "2.83%", ecpm: "$82.02", revenue: "$81.88" },
        { date: "03-Jun-2026", impressions: "12322", clicks: "346", ctr: "2.81%", ecpm: "$81.66", revenue: "$81.55" },
        { date: "02-Jun-2026", impressions: "12322", clicks: "342", ctr: "2.77%", ecpm: "$81.22", revenue: "$81.22" },
        { date: "01-Jun-2026", impressions: "12322", clicks: "342", ctr: "2.77%", ecpm: "$84.99", revenue: "$80.34" },
      ],
      Desktop: [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
      ],
      Mobile: [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
      ],
    },
  },
  "Last 7 Days": {
    "All Countries": {
      "All Devices": [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
        { date: "13-Jun-2026", impressions: "12430", clicks: "346", ctr: "2.78%", ecpm: "$81.42", revenue: "$82.22" },
        { date: "12-Jun-2026", impressions: "12398", clicks: "348", ctr: "2.81%", ecpm: "$82.99", revenue: "$83.87" },
        { date: "11-Jun-2026", impressions: "12345", clicks: "346", ctr: "2.80%", ecpm: "$83.11", revenue: "$81.81" },
        { date: "10-Jun-2026", impressions: "12768", clicks: "348", ctr: "2.72%", ecpm: "$81.34", revenue: "$80.12" },
      ],
      Desktop: [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
      ],
      Mobile: [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
      ],
    },
  },
  "Last 30 Days": {
    "All Countries": {
      "All Devices": [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
        { date: "13-Jun-2026", impressions: "12430", clicks: "346", ctr: "2.78%", ecpm: "$81.42", revenue: "$82.22" },
        { date: "12-Jun-2026", impressions: "12398", clicks: "348", ctr: "2.81%", ecpm: "$82.99", revenue: "$83.87" },
        { date: "11-Jun-2026", impressions: "12345", clicks: "346", ctr: "2.80%", ecpm: "$83.11", revenue: "$81.81" },
        { date: "10-Jun-2026", impressions: "12768", clicks: "348", ctr: "2.72%", ecpm: "$81.34", revenue: "$80.12" },
        { date: "09-Jun-2026", impressions: "12902", clicks: "351", ctr: "2.72%", ecpm: "$83.09", revenue: "$83.56" },
        { date: "08-Jun-2026", impressions: "12322", clicks: "365", ctr: "2.96%", ecpm: "$83.98", revenue: "$83.33" },
        { date: "07-Jun-2026", impressions: "12322", clicks: "361", ctr: "2.93%", ecpm: "$83.66", revenue: "$82.98" },
        { date: "06-Jun-2026", impressions: "12322", clicks: "357", ctr: "2.90%", ecpm: "$83.22", revenue: "$82.65" },
        { date: "05-Jun-2026", impressions: "12322", clicks: "353", ctr: "2.86%", ecpm: "$82.88", revenue: "$82.31" },
        { date: "04-Jun-2026", impressions: "12322", clicks: "349", ctr: "2.83%", ecpm: "$82.02", revenue: "$81.88" },
        { date: "03-Jun-2026", impressions: "12322", clicks: "346", ctr: "2.81%", ecpm: "$81.66", revenue: "$81.55" },
        { date: "02-Jun-2026", impressions: "12322", clicks: "342", ctr: "2.77%", ecpm: "$81.22", revenue: "$81.22" },
        { date: "01-Jun-2026", impressions: "12322", clicks: "342", ctr: "2.77%", ecpm: "$84.99", revenue: "$80.34" },
      ],
      Desktop: [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
        { date: "13-Jun-2026", impressions: "12430", clicks: "346", ctr: "2.78%", ecpm: "$81.42", revenue: "$82.22" },
      ],
      Mobile: [
        { date: "17-Jun-2026", impressions: "4456", clicks: "197", ctr: "4.42%", ecpm: "$81.74", revenue: "$38.99" },
        { date: "16-Jun-2026", impressions: "12811", clicks: "341", ctr: "2.66%", ecpm: "$81.56", revenue: "$81.55" },
        { date: "15-Jun-2026", impressions: "12534", clicks: "343", ctr: "2.73%", ecpm: "$82.66", revenue: "$82.65" },
        { date: "14-Jun-2026", impressions: "12476", clicks: "347", ctr: "2.78%", ecpm: "$82.77", revenue: "$81.66" },
        { date: "13-Jun-2026", impressions: "12430", clicks: "346", ctr: "2.78%", ecpm: "$81.42", revenue: "$82.22" },
      ],
    },
  },
  "Last 3 Months": {
    "All Countries": {
      "All Devices": [
        { date: "14-Jun-2026", impressions: "4654", clicks: "197", ctr: "4.23%", ecpm: "$81.45", revenue: "$36.44" },
        { date: "13-Jun-2026", impressions: "12430", clicks: "346", ctr: "2.78%", ecpm: "$81.42", revenue: "$82.22" },
        { date: "12-Jun-2026", impressions: "12398", clicks: "348", ctr: "2.81%", ecpm: "$82.99", revenue: "$83.87" },
        { date: "11-Jun-2026", impressions: "12345", clicks: "346", ctr: "2.80%", ecpm: "$83.11", revenue: "$81.81" },
        { date: "10-Jun-2026", impressions: "12768", clicks: "348", ctr: "2.72%", ecpm: "$81.34", revenue: "$80.12" },
        { date: "09-Jun-2026", impressions: "12902", clicks: "351", ctr: "2.72%", ecpm: "$83.09", revenue: "$83.56" },
        { date: "08-Jun-2026", impressions: "12322", clicks: "365", ctr: "2.96%", ecpm: "$83.98", revenue: "$83.33" },
        { date: "07-Jun-2026", impressions: "12322", clicks: "361", ctr: "2.93%", ecpm: "$83.66", revenue: "$82.98" },
        { date: "06-Jun-2026", impressions: "12322", clicks: "357", ctr: "2.90%", ecpm: "$83.22", revenue: "$82.65" },
        { date: "05-Jun-2026", impressions: "12322", clicks: "353", ctr: "2.86%", ecpm: "$82.88", revenue: "$82.31" },
        { date: "04-Jun-2026", impressions: "12322", clicks: "349", ctr: "2.83%", ecpm: "$82.02", revenue: "$81.88" },
        { date: "03-Jun-2026", impressions: "12322", clicks: "346", ctr: "2.81%", ecpm: "$81.66", revenue: "$81.55" },
        { date: "02-Jun-2026", impressions: "12322", clicks: "342", ctr: "2.77%", ecpm: "$81.22", revenue: "$81.22" },
        { date: "01-Jun-2026", impressions: "12322", clicks: "342", ctr: "2.77%", ecpm: "$84.99", revenue: "$80.34" },
      ],
      Desktop: [
        { date: "14-Jun-2026", impressions: "4654", clicks: "197", ctr: "4.23%", ecpm: "$81.45", revenue: "$36.44" },
        { date: "13-Jun-2026", impressions: "12430", clicks: "346", ctr: "2.78%", ecpm: "$81.42", revenue: "$82.22" },
        { date: "12-Jun-2026", impressions: "12398", clicks: "348", ctr: "2.81%", ecpm: "$82.99", revenue: "$83.87" },
      ],
      Mobile: [
        { date: "14-Jun-2026", impressions: "4654", clicks: "197", ctr: "4.23%", ecpm: "$81.45", revenue: "$36.44" },
        { date: "13-Jun-2026", impressions: "12430", clicks: "346", ctr: "2.78%", ecpm: "$81.42", revenue: "$82.22" },
        { date: "12-Jun-2026", impressions: "12398", clicks: "348", ctr: "2.81%", ecpm: "$82.99", revenue: "$83.87" },
      ],
    },
  },
  "Last 6 Months": {
    "All Countries": {
      "All Devices": [
        { date: "20-May-2026", impressions: "4532", clicks: "199", ctr: "4.39%", ecpm: "$83.22", revenue: "$34.44" },
        { date: "19-May-2026", impressions: "12274", clicks: "344", ctr: "2.80%", ecpm: "$82.88", revenue: "$80.66" },
        { date: "18-May-2026", impressions: "12282", clicks: "343", ctr: "2.79%", ecpm: "$82.44", revenue: "$80.01" },
        { date: "17-May-2026", impressions: "12294", clicks: "342", ctr: "2.78%", ecpm: "$82.11", revenue: "$79.55" },
        { date: "16-May-2026", impressions: "12301", clicks: "341", ctr: "2.77%", ecpm: "$81.66", revenue: "$79.11" },
      ],
      Desktop: [
        { date: "20-May-2026", impressions: "4532", clicks: "199", ctr: "4.39%", ecpm: "$83.22", revenue: "$34.44" },
        { date: "19-May-2026", impressions: "12274", clicks: "344", ctr: "2.80%", ecpm: "$82.88", revenue: "$80.66" },
        { date: "18-May-2026", impressions: "12282", clicks: "343", ctr: "2.79%", ecpm: "$82.44", revenue: "$80.01" },
      ],
      Mobile: [
        { date: "20-May-2026", impressions: "4532", clicks: "199", ctr: "4.39%", ecpm: "$83.22", revenue: "$34.44" },
        { date: "19-May-2026", impressions: "12274", clicks: "344", ctr: "2.80%", ecpm: "$82.88", revenue: "$80.66" },
        { date: "18-May-2026", impressions: "12282", clicks: "343", ctr: "2.79%", ecpm: "$82.44", revenue: "$80.01" },
      ],
    },
  },
  "This Year": {
    "All Countries": {
      "All Devices": [
        { date: "14-May-2026", impressions: "12602", clicks: "347", ctr: "2.75%", ecpm: "$84.11", revenue: "$84.33" },
      ],
      Desktop: [
        { date: "14-May-2026", impressions: "12602", clicks: "347", ctr: "2.75%", ecpm: "$84.11", revenue: "$84.33" },
      ],
      Mobile: [
        { date: "14-May-2026", impressions: "12602", clicks: "347", ctr: "2.75%", ecpm: "$84.11", revenue: "$84.33" },
      ],
    },
  },
}

const statisticsTotals = {
  impressions: 493498,
  clicks: 15120,
  revenue: 3710.61,
  ecpm: 82.74,
  ctr: 3.06,
}

export function ReportContent() {
  const [showReport] = useState(true)
  const [selectedDateRange, setSelectedDateRange] = useState("Last 7 Days")
  const [selectedGroupBy, setSelectedGroupBy] = useState("Day")
  const [selectedMetrics, setSelectedMetrics] = useState("All Metrics")
  const [selectedSite, setSelectedSite] = useState("All Sites")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [selectedDevice, setSelectedDevice] = useState("All Devices")
  const [currentReportData, setCurrentReportData] = useState(reportData["Last 7 Days"]["All Countries"]["All Devices"])
  const [isFiltered, setIsFiltered] = useState(false)

  const handleGenerateReport = () => {
    // Data already rendered, no action needed
  }

  const handleRefresh = () => {
    // Data already current, no action needed
  }

  const handleApplyFilters = () => {
    const dateData = reportData[selectedDateRange as keyof typeof reportData]
    const countryData = dateData?.[selectedCountry as keyof typeof dateData]
    const deviceData = countryData?.[selectedDevice as keyof typeof countryData]

    if (deviceData) {
      setCurrentReportData(deviceData)
      setIsFiltered(true)
    } else {
      setCurrentReportData(reportData["Last 7 Days"]["All Countries"]["All Devices"])
      setIsFiltered(false)
    }
  }

  const handleReset = () => {
    setSelectedDateRange("Last 7 Days")
    setSelectedGroupBy("Day")
    setSelectedMetrics("All Metrics")
    setSelectedSite("All Sites")
    setSelectedCountry("All Countries")
    setSelectedDevice("All Devices")

    setCurrentReportData(reportData["Last 7 Days"]["All Countries"]["All Devices"])
    setIsFiltered(false)
  }

  const calculateTotals = () => {
    if (currentReportData.length === 0) {
      return {
        totalRevenue: statisticsTotals.revenue.toFixed(3),
        totalImpressions: statisticsTotals.impressions.toLocaleString(),
        totalClicks: statisticsTotals.clicks.toLocaleString(),
        avgCTR: `${statisticsTotals.ctr.toFixed(2)}%`,
        avgECPM: `$${statisticsTotals.ecpm.toFixed(2)}`,
      }
    }

    const totalRevenue = currentReportData.reduce((sum, row) => {
      const revenue = Number.parseFloat(row.revenue.replace("$", "").replace(",", ""))
      return sum + revenue
    }, 0)

    const totalImpressions = currentReportData.reduce((sum, row) => {
      const impressions = Number.parseInt(row.impressions.replace(",", ""))
      return sum + impressions
    }, 0)

    const totalClicks = currentReportData.reduce((sum, row) => {
      const clicks = Number.parseInt(row.clicks.replace(",", ""))
      return sum + clicks
    }, 0)

    const avgCTR = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : "0.00"
    const avgECPM = totalImpressions > 0 ? ((totalRevenue / totalImpressions) * 1000).toFixed(2) : "0.00"

    return {
      totalRevenue: totalRevenue.toFixed(3),
      totalImpressions: totalImpressions.toLocaleString(),
      totalClicks: totalClicks.toLocaleString(),
      avgCTR: `${avgCTR}%`,
      avgECPM: `$${avgECPM}`,
    }
  }

  const totals = calculateTotals()

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex items-center space-x-2 flex-wrap gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center bg-transparent" onClick={handleRefresh}>
                  <RefreshCw size={16} className="mr-2" />
                  Refresh
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh report data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center bg-transparent">
                  <Download size={16} className="mr-2" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export report as CSV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Filter size={18} className="mr-2" />
          <h3 className="font-medium">Report Filters</h3>
          {isFiltered && (
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Filters Applied</span>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Date Range</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Group By</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedGroupBy}
              onChange={(e) => setSelectedGroupBy(e.target.value)}
            >
              <option>Hour</option>
              <option>Day</option>
              <option>Week</option>
              <option>Month</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Metrics</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedMetrics}
              onChange={(e) => setSelectedMetrics(e.target.value)}
            >
              <option>All Metrics</option>
              <option>Revenue Only</option>
              <option>Traffic Only</option>
              <option>Performance Only</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Sites</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value)}
            >
              <option>http://techjoni.com/</option>
              <option>All Sites</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Countries</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option>All Countries</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Device</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
            >
              <option>All Devices</option>
              <option>Desktop</option>
              <option>Mobile</option>
              <option>Tablet</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <Button className="bg-green-500 hover:bg-green-600 flex-1" onClick={handleApplyFilters}>
              Apply Filters
            </Button>
            <Button variant="outline" onClick={handleReset} className="bg-transparent">
              Reset
            </Button>
          </div>
        </div>

        {/* Filter Summary */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">
            <strong>Current Filters:</strong> {selectedDateRange} • {selectedGroupBy} • {selectedSite} •{" "}
            {selectedCountry} • {selectedDevice} • {selectedMetrics}
          </div>
        </div>
      </Card>

      {/* Statistics Summary - Always visible */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalRevenue}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Impressions</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalImpressions}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Clicks</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalClicks}</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Average CTR</div>
          <div className="text-xl font-bold text-gray-800">{totals.avgCTR}</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Average eCPM</div>
          <div className="text-xl font-bold text-gray-800">{totals.avgECPM}</div>
        </div>
      </div>

      {/* Report Table */}
      {showReport && (
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Report Results</h3>
            <div className="text-sm text-gray-500">
              Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Impressions</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Clicks</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">CTR</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">eCPM</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {currentReportData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center">
                      <div className="text-gray-400">
                        <BarChart2 className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm font-medium">No records available</p>
                        <p className="text-xs mt-1">Reports will be visible after data is added</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentReportData.map((row, index) => (
                    <ReportRow
                      key={index}
                      date={row.date}
                      impressions={row.impressions}
                      clicks={row.clicks}
                      ctr={row.ctr}
                      ecpm={row.ecpm}
                      revenue={row.revenue}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  )
}

interface ReportRowProps {
  date: string
  impressions: string
  clicks: string
  ctr: string
  ecpm: string
  revenue: string
}

function ReportRow({ date, impressions, clicks, ctr, ecpm, revenue }: ReportRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 px-4 text-sm">{date}</td>
      <td className="py-3 px-4 text-sm">{impressions}</td>
      <td className="py-3 px-4 text-sm">{clicks}</td>
      <td className="py-3 px-4 text-sm">{ctr}</td>
      <td className="py-3 px-4 text-sm">{ecpm}</td>
      <td className="py-3 px-4 text-sm font-medium">{revenue}</td>
    </tr>
  )
}
