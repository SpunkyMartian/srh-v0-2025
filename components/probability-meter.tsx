import { Progress } from "@/components/ui/progress"

export default function ProbabilityMeter() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Very Low</span>
          <span className="font-medium">0.0122%</span>
        </div>
        <Progress value={0.0122} className="h-3 bg-gray-200" />
        <div className="flex justify-between text-xs text-gray-500">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="text-sm text-gray-600 mt-2">(roughly 1 in 8,200 chance)</div>

      <div className="space-y-3 mt-6">
        <h3 className="text-sm font-medium">Potential Top 4 Scenarios</h3>

        <div className="p-3 bg-gray-50 rounded-md border">
          <h4 className="text-sm font-medium mb-2">Most Likely Scenario</h4>
          <ul className="text-sm space-y-1">
            <li>• RCB (already at 16+ points)</li>
            <li>• PBKS (already at 15+ points)</li>
            <li>• MI or GT (winner of their match, 16+ points)</li>
            <li>• SRH (wins all matches, finishes with 14 points)</li>
          </ul>
        </div>

        <div className="p-3 bg-gray-50 rounded-md border">
          <h4 className="text-sm font-medium mb-2">Probability Calculation</h4>
          <ul className="text-sm space-y-1">
            <li>• SRH winning all 4 matches: 6.25% (0.5⁴)</li>
            <li>• Losing team in MI-GT match losing all their other matches: 12.5% (0.5²) or 25% (0.5³)</li>
            <li>• Other teams staying below required thresholds: ~1.56%</li>
            <li>• Combined probability: ~0.0122%</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
