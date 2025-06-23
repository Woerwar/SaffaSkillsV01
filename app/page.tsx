"use client"

import { useState } from "react"
import { Search, MapPin, Clock, Zap } from 'lucide-react'

// Sample jobs data
const jobs = [
  {
    id: 1,
    title: "Weekend House Cleaner",
    company: "Private Household",
    location: "Sandton, Gauteng",
    pay: "R180/day",
    type: "Weekend Work",
    posted: "2 hours ago",
    description: "Looking for reliable cleaner for weekend house cleaning. Own transport preferred.",
    duration: "2 days",
    urgent: true,
  },
  {
    id: 2,
    title: "Food Delivery Driver",
    company: "Mr D Food",
    location: "Cape Town CBD",
    pay: "R95-140/hour",
    type: "Flexible Hours",
    posted: "1 hour ago",
    description: "Deliver food with your own vehicle. Work when you want, earn what you need.",
    duration: "Ongoing",
    urgent: false,
  },
]

export default function SaffaSkills() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  SaffaSkills
                </h1>
                <p className="text-xs text-gray-500 -mt-1">.co.za</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg text-white px-6 py-2 rounded-lg font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Find work you'll
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                love, fast.
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-emerald-50 max-w-3xl mx-auto">
              Get paid today for work you can do today. South Africa's premier platform for flexible work opportunities.
            </p>

            {/* Search Bar */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative group">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="What work are you looking for?"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-14 h-16 w-full text-lg border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-2xl outline-none transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <MapPin className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <select className="pl-14 h-16 w-full text-lg border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-2xl outline-none appearance-none">
                      <option>Where?</option>
                      <option>Johannesburg</option>
                      <option>Cape Town</option>
                      <option>Durban</option>
                    </select>
                  </div>
                  <button className="h-16 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-2xl shadow-lg text-white font-medium">
                    Find Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">Latest Opportunities</h3>
            <p className="text-xl text-gray-600">Fresh jobs posted today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {job.urgent && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          URGENT
                        </span>
                      )}
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ✓ VERIFIED
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h4>
                    <p className="text-gray-600 mb-3 font-medium">{job.company}</p>
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {job.pay}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{job.duration}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg text-white px-6 py-2 rounded-lg font-medium">
                    Apply Now
                  </button>
                </div>

                <div className="mt-4 text-xs text-gray-500">Posted {job.posted}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                SaffaSkills
              </h4>
              <p className="text-sm text-gray-500">.co.za</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6 text-lg">Connecting South Africans with flexible work opportunities.</p>
          <div className="text-sm text-emerald-600 font-medium">Made with ❤️ in South Africa</div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-gray-500">
            <p>&copy; 2024 SaffaSkills.co.za. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
