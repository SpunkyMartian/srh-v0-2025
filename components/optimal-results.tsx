import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const optimalResults = [
  { date: "May 5", match: "SRH vs DC", result: "SRH must win", impact: "Critical for qualification", critical: true },
  { date: "May 6", match: "MI vs GT", result: "Either can win", impact: "Loser must lose all remaining matches" },
  { date: "May 7", match: "KKR vs CSK", result: "CSK Win", impact: "Keeps KKR at 11 points" },
  { date: "May 8", match: "PBKS vs DC", result: "PBKS Win", impact: "Keeps DC at 12 points" },
  { date: "May 9", match: "LSG vs RCB", result: "RCB Win", impact: "Keeps LSG at 10 points" },
  { date: "May 10", match: "SRH vs KKR", result: "SRH must win", impact: "Critical for qualification", critical: true },
  { date: "May 11", match: "PBKS vs MI", result: "PBKS Win", impact: "Keeps MI at 14 points (if they lost to GT)" },
  { date: "May 11", match: "DC vs GT", result: "DC Win", impact: "Keeps GT at 14 points (if they lost to MI)" },
  { date: "May 13", match: "RCB vs SRH", result: "SRH must win", impact: "Critical for qualification", critical: true },
  {
    date: "May 14",
    match: "GT vs LSG",
    result: "Depends on MI-GT",
    impact: "Based on which team needs to stay at 14 points",
  },
  { date: "May 15", match: "MI vs DC", result: "DC Win", impact: "Keeps MI at 14 points (if they lost to GT)" },
  { date: "May 17", match: "RCB vs KKR", result: "RCB Win", impact: "Keeps KKR at 11 points" },
  { date: "May 18", match: "GT vs CSK", result: "CSK Win", impact: "Keeps GT at 14 points (if they lost to MI)" },
  { date: "May 18", match: "LSG vs SRH", result: "SRH must win", impact: "Critical for qualification", critical: true },
]

export default function OptimalResults() {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Date</TableHead>
            <TableHead>Match</TableHead>
            <TableHead>Optimal Result</TableHead>
            <TableHead>Impact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {optimalResults.map((match, index) => (
            <TableRow key={index} className={match.critical ? "bg-orange-50" : ""}>
              <TableCell>{match.date}</TableCell>
              <TableCell>
                {match.match.includes("SRH") ? (
                  <span className="font-medium text-[#ff6b00]">{match.match}</span>
                ) : (
                  match.match
                )}
              </TableCell>
              <TableCell>
                {match.critical ? <Badge className="bg-[#ff6b00]">{match.result}</Badge> : match.result}
              </TableCell>
              <TableCell>{match.impact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
