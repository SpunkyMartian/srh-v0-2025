import { Analytics } from "@vercel/analytics/react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Calendar, CheckCircle2, Clock, Trophy, XCircle } from "lucide-react"
import Image from "next/image"
import PointsTable from "@/components/points-table"
import RemainingMatches from "@/components/remaining-matches"
import QualificationRequirements from "@/components/qualification-requirements"
import EliminationScenarios from "@/components/elimination-scenarios"
import OptimalResults from "@/components/optimal-results"
import ProbabilityMeter from "@/components/probability-meter"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#ff6b00] text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative h-16 w-16 mr-4">
              <Image src="/teams/srh.png" alt="SRH Logo" width={64} height={64} className="object-contain" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">SRH Playoff Qualification Tracker</h1>
              <p className="text-sm md:text-base opacity-90">IPL 2025 Season</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20">
              <Clock className="h-3 w-3 mr-1" />
              Last Updated: May 5, 2025
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Summary Card */}
        <Card className="p-6 mb-8 border-l-4 border-l-[#ff6b00]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Current Standing</h2>
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-2">9th</span>
                <span className="text-sm text-gray-500">of 10 teams</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">6 points</span>
                <span>(3 wins, 7 losses)</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">NRR:</span> -1.192
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Remaining Matches</h2>
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Max Possible Points:</span> 14
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">Must win:</span>
                <span className="text-red-600 font-medium">ALL matches</span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Qualification Probability</h2>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-red-600 mr-2">0.0122%</span>
              </div>
              <div className="text-sm text-gray-600">(1 in 8,200 chance)</div>
              <div className="mt-2">
                <Progress value={0.0122} className="h-2 bg-gray-200" />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content - 70% */}
          <div className="lg:col-span-8 space-y-8">
            <Tabs defaultValue="points">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="points">Points Table</TabsTrigger>
                <TabsTrigger value="qualification">Qualification Path</TabsTrigger>
                <TabsTrigger value="matches">Remaining Matches</TabsTrigger>
                <TabsTrigger value="optimal">Optimal Results</TabsTrigger>
              </TabsList>

              <TabsContent value="points" className="space-y-4">
                <h2 className="text-xl font-bold flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-[#ff6b00]" />
                  Current Points Table
                </h2>
                <PointsTable />
              </TabsContent>

              <TabsContent value="qualification" className="space-y-4">
                <h2 className="text-xl font-bold flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-[#ff6b00]" />
                  Qualification Requirements
                </h2>
                <QualificationRequirements />
              </TabsContent>

              <TabsContent value="matches" className="space-y-4">
                <h2 className="text-xl font-bold flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-[#ff6b00]" />
                  SRH's Remaining Matches
                </h2>
                <RemainingMatches />
              </TabsContent>

              <TabsContent value="optimal" className="space-y-4">
                <h2 className="text-xl font-bold flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-[#ff6b00]" />
                  Optimal Results Needed
                </h2>
                <OptimalResults />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - 30% */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-6 border-t-4 border-t-[#ff6b00]">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-[#ff6b00]" />
                Qualification Meter
              </h2>
              <ProbabilityMeter />
            </Card>

            <Card className="p-6 border-t-4 border-t-red-500">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <XCircle className="h-5 w-5 mr-2 text-red-500" />
                Elimination Scenarios
              </h2>
              <EliminationScenarios />
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Historical Context</h2>
              <p className="text-sm text-gray-600 mb-4">Teams qualifying for IPL playoffs with 14 points:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>2023:</span>
                  <span className="font-medium">None (16 points minimum)</span>
                </li>
                <li className="flex justify-between">
                  <span>2022:</span>
                  <span className="font-medium">None (16 points minimum)</span>
                </li>
                <li className="flex justify-between">
                  <span>2021:</span>
                  <span className="font-medium">KKR qualified with 14 points</span>
                </li>
                <li className="flex justify-between">
                  <span>2020:</span>
                  <span className="font-medium">SRH qualified with 14 points</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">SRH Qualification Tracker</h2>
              <p className="text-sm opacity-75">IPL 2025 Season</p>
            </div>
            <div className="text-sm opacity-75">© {new Date().getFullYear()} SRH Tracker. All rights reserved.</div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}
