import { Button } from "@/components/ui/button"

const ApplicationForm = () => {
  return (
    <div>
      {/* Application Form Content - Replace with actual form elements */}
      <p>Please fill out the application form below:</p>
      {/* Example Form Fields (Replace with your actual form) */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <br />

        <label htmlFor="resume">Resume:</label>
        <input type="file" id="resume" name="resume" />
        <br />
        <br />

        <Button type="submit">Submit Application</Button>
      </form>

      {/* Application Success Section */}
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">Application Submitted!</h4>
        <p className="text-green-700 mb-3">Your application has been sent to the employer.</p>
        <div className="space-y-2">
          <Button className="bg-green-500 hover:bg-green-600 w-full">
            <a
              href="https://wa.me/27795167553?text=Hi%20SaffaSkills!%20I%20applied%20for%20a%20job%20and%20need%20help%20with%20my%20application."
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow up on WhatsApp
            </a>
          </Button>
          <p className="text-xs text-green-600">Need help? Contact us on WhatsApp for application support</p>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm
