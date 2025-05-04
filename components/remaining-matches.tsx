import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const matches = [
  {
    opponent: "DC",
    date: "May 5, 2025",
    venue: "Hyderabad",
    opponentColor: "#00008B",
    importance: "Critical",
  },
  {
    opponent: "KKR",
    date: "May 10, 2025",
    venue: "Hyderabad",
    opponentColor: "#3A225D",
    importance: "Critical",
  },
  {
    opponent: "RCB",
    date: "May 13, 2025",
    venue: "Bengaluru",
    opponentColor: "#D1171B",
    importance: "Critical",
  },
  {
    opponent: "LSG",
    date: "May 18, 2025",
    venue: "Lucknow",
    opponentColor: "#9BC4E2",
    importance: "Critical",
  },
]

export default function RemainingMatches() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {matches.map((match, index) => (
        <Card key={index} className="p-4 border-l-4 border-l-[#ff6b00]">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center">
              <Badge className="mr-2 w-10 justify-center text-white" style={{ backgroundColor: "#FF6B00" }}>
                SRH
              </Badge>
              <span className="text-lg font-medium">vs</span>
              <Badge
                className="ml-2 w-10 justify-center"
                style={{
                  backgroundColor: match.opponentColor,
                  color: match.opponent === "CSK" ? "#000" : "#fff",
                }}
              >
                {match.opponent}
              </Badge>
            </div>
            <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
              {match.importance}
            </Badge>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-1">
            <CalendarDays className="h-4 w-4 mr-1" />
            {match.date}
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            {match.venue}
          </div>
        </Card>
      ))}
    </div>
  )
}
