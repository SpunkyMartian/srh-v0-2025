import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

const teams = [
  { rank: 1, team: "RCB", matches: 11, wins: 8, losses: 3, points: 16, nrr: 0.482, color: "#D1171B" },
  { rank: 2, team: "PBKS", matches: 11, wins: 7, losses: 3, points: 15, nrr: 0.199, color: "#ED1B24", noResult: 1 },
  { rank: 3, team: "MI", matches: 11, wins: 7, losses: 4, points: 14, nrr: 1.274, color: "#004BA0" },
  { rank: 4, team: "GT", matches: 10, wins: 7, losses: 3, points: 14, nrr: 0.867, color: "#1D2951" },
  { rank: 5, team: "DC", matches: 10, wins: 6, losses: 4, points: 12, nrr: 0.362, color: "#00008B" },
  { rank: 6, team: "KKR", matches: 11, wins: 5, losses: 5, points: 11, nrr: 0.249, color: "#3A225D", noResult: 1 },
  { rank: 7, team: "LSG", matches: 11, wins: 5, losses: 6, points: 10, nrr: -0.325, color: "#9BC4E2" },
  { rank: 8, team: "RR", matches: 12, wins: 3, losses: 9, points: 6, nrr: -0.718, color: "#FF1493" },
  { rank: 9, team: "SRH", matches: 10, wins: 3, losses: 7, points: 6, nrr: -1.192, color: "#FF6B00" },
  { rank: 10, team: "CSK", matches: 11, wins: 2, losses: 9, points: 4, nrr: -1.117, color: "#FFFF00" },
]

export default function PointsTable() {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-12 text-center">Rank</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-center">M</TableHead>
            <TableHead className="text-center">W</TableHead>
            <TableHead className="text-center">L</TableHead>
            <TableHead className="text-center">NR</TableHead>
            <TableHead className="text-center">Points</TableHead>
            <TableHead className="text-center">NRR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.rank} className={team.team === "SRH" ? "bg-orange-50" : ""}>
              <TableCell className="text-center font-medium">{team.rank}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <div className="relative w-8 h-8 mr-2">
                    <Image
                      src={`/teams/${team.team.toLowerCase()}.png`}
                      alt={`${team.team} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">{team.team}</span>
                  {team.team === "SRH" && <span className="text-xs text-orange-600 font-medium ml-2">(Your team)</span>}
                </div>
              </TableCell>
              <TableCell className="text-center">{team.matches}</TableCell>
              <TableCell className="text-center">{team.wins}</TableCell>
              <TableCell className="text-center">{team.losses}</TableCell>
              <TableCell className="text-center">{team.noResult || 0}</TableCell>
              <TableCell className="text-center font-medium">{team.points}</TableCell>
              <TableCell className="text-center">{team.nrr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
