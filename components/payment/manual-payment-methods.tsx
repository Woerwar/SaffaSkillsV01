import { Button } from "@/components/ui/button"

const ManualPaymentMethods = () => {
  return (
    <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
      <h4 className="font-semibold text-emerald-800 mb-2">Need Payment Help?</h4>
      <p className="text-emerald-700 text-sm mb-3">Having trouble with your payment? Contact us immediately:</p>
      <div className="flex gap-2">
        <Button size="sm" className="bg-green-500 hover:bg-green-600">
          <a
            href="https://wa.me/27795167553?text=Hi%20SaffaSkills!%20I%20need%20help%20with%20my%20payment."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Support
          </a>
        </Button>
        <Button size="sm" variant="outline">
          <a href="mailto:saffaskillssa@gmail.com?subject=Payment%20Help%20Needed">Email Support</a>
        </Button>
      </div>
    </div>
  )
}

export default ManualPaymentMethods
