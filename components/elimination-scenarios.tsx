import { XCircle } from "lucide-react"

export default function EliminationScenarios() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 mb-2">SRH will be mathematically eliminated if ANY of these occur:</p>
      <ul className="space-y-3">
        <li className="flex items-start">
          <XCircle className="h-5 w-5 mr-2 text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm">SRH loses any remaining match</span>
        </li>
        <li className="flex items-start">
          <XCircle className="h-5 w-5 mr-2 text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm">Both MI and GT win at least one match each after their head-to-head</span>
        </li>
        <li className="flex items-start">
          <XCircle className="h-5 w-5 mr-2 text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm">DC wins 2 or more of their remaining matches (excluding vs SRH)</span>
        </li>
        <li className="flex items-start">
          <XCircle className="h-5 w-5 mr-2 text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm">KKR wins 2 or more of their remaining matches (excluding vs SRH)</span>
        </li>
        <li className="flex items-start">
          <XCircle className="h-5 w-5 mr-2 text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm">LSG wins all 3 of their remaining matches (excluding vs SRH)</span>
        </li>
      </ul>
    </div>
  )
}
