import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertTriangle } from "lucide-react"

export default function QualificationRequirements() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">For SRH to qualify:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
            <span>Must win ALL 4 remaining matches to reach 14 points</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
            <span>No more than 3 other teams can finish with ≥15 points</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
            <span>If tied with other teams at 14 points, SRH needs a better NRR</span>
          </li>
        </ul>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 mr-2 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium mb-1">Key Insight: The MI vs GT Match</h4>
            <ul className="text-sm text-gray-700 list-disc pl-5 mt-1 space-y-1">
              <li>MI and GT play each other (Match #56 on May 6)</li>
              <li>One team must win this match</li>
              <li>The winner will reach 16 points (above SRH's maximum)</li>
              <li>This means at least 3 teams will already finish above SRH: RCB, PBKS, and either MI or GT</li>
              <li>Therefore, SRH can only take the 4th playoff spot at best</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Detailed Requirements for Qualification:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
            <span>SRH must win all 4 remaining matches to reach 14 points</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
            <span>The losing team in the MI vs GT match must not win any of their other matches</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
            <span>DC must win at most 1 of their remaining 3 matches (excluding vs SRH)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
            <span>KKR must win at most 1 of their remaining 2 matches (excluding vs SRH)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
            <span>LSG must win at most 2 of their remaining 2 matches (excluding vs SRH)</span>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Team-by-Team Requirements:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4 border-l-4 border-l-red-500">
            <h4 className="font-medium mb-2">RCB</h4>
            <p className="text-sm text-gray-600">Already at 16 points - will finish ahead of SRH</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-red-600">
            <h4 className="font-medium mb-2">PBKS</h4>
            <p className="text-sm text-gray-600">Already at 15 points - will finish ahead of SRH</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-blue-600">
            <h4 className="font-medium mb-2">MI</h4>
            <p className="text-sm text-gray-600">If they win vs GT: Must lose all other 2 matches</p>
            <p className="text-sm text-gray-600">If they lose vs GT: Must lose all other 2 matches</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-blue-900">
            <h4 className="font-medium mb-2">GT</h4>
            <p className="text-sm text-gray-600">If they win vs MI: Must lose all other 3 matches</p>
            <p className="text-sm text-gray-600">If they lose vs MI: Must lose all other 3 matches</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-blue-800">
            <h4 className="font-medium mb-2">DC</h4>
            <p className="text-sm text-gray-600">Must lose to SRH and win at most 1 of their remaining 3 matches</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-purple-800">
            <h4 className="font-medium mb-2">KKR</h4>
            <p className="text-sm text-gray-600">Must lose to SRH and win at most 1 of their remaining 2 matches</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-blue-300">
            <h4 className="font-medium mb-2">LSG</h4>
            <p className="text-sm text-gray-600">Must lose to SRH and can win at most 2 of their other 2 matches</p>
          </Card>
        </div>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 mr-2 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium mb-1">NRR Strategy</h4>
            <p className="text-sm text-gray-700">Given SRH's poor NRR (-1.192), they must:</p>
            <ul className="text-sm text-gray-700 list-disc pl-5 mt-1 space-y-1">
              <li>Win by 80+ runs when batting first</li>
              <li>Chase targets with 3+ overs to spare</li>
              <li>Focus on big wins against DC and LSG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
