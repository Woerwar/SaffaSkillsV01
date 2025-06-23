"use client"

import { useState } from "react"
import {
  Search,
  MapPin,
  Clock,
  Star,
  Users,
  Briefcase,
  Home,
  Car,
  Utensils,
  Hammer,
  Menu,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

// Updated job data for casual/peace work with proper ZAR currency
const jobs = [
  {
    id: 1,
    title: "Weekend House Cleaner",
    company: "Private Household",
    location: "Sandton, Gauteng",
    pay: "R180/day",
    type: "Weekend Work",
    category: "Domestic Work",
    posted: "2 hours ago",
    description: "Looking for reliable cleaner for weekend house cleaning. Own transport preferred.",
    duration: "2 days",
    urgent: true,
    verified: true,
  },
  {
    id: 2,
    title: "Food Delivery Driver",
    company: "Mr D Food",
    location: "Cape Town CBD",
    pay: "R95-140/hour",
    type: "Flexible Hours",
    category: "Delivery & Transport",
    posted: "1 hour ago",
    description: "Deliver food with your own vehicle. Work when you want, earn what you need.",
    duration: "Ongoing",
    urgent: false,
    verified: true,
  },
  {
    id: 3,
    title: "Garden Maintenance",
    company: "Homeowner",
    location: "Durban North",
    pay: "R350/day",
    type: "One-time Job",
    category: "Garden & Outdoor",
    posted: "3 hours ago",
    description: "Need someone to trim hedges and clean garden. Tools provided.",
    duration: "1 day",
    urgent: true,
    verified: false,
  },
  {
    id: 4,
    title: "Event Setup Assistant",
    company: "Wedding Venue",
    location: "Pretoria East",
    pay: "R220/day",
    type: "Weekend Work",
    category: "Events & Hospitality",
    posted: "4 hours ago",
    description: "Help with wedding setup and cleanup. No experience needed.",
    duration: "1 day",
    urgent: false,
    verified: true,
  },
  {
    id: 5,
    title: "Moving Assistant",
    company: "Family",
    location: "Johannesburg South",
    pay: "R280/day",
    type: "One-time Job",
    category: "Moving & Labor",
    posted: "1 hour ago",
    description: "Help family move furniture and boxes. Strong back needed!",
    duration: "1 day",
    urgent: true,
    verified: false,
  },
  {
    id: 6,
    title: "After-School Childcare",
    company: "Working Mom",
    location: "Stellenbosch",
    pay: "R120/hour",
    type: "Part-time",
    category: "Childcare",
    posted: "2 hours ago",
    description: "Watch 2 kids (ages 5 & 8) after school. References required.",
    duration: "Ongoing",
    urgent: false,
    verified: true,
  },
]

const areas = [
  "All Areas",
  "Johannesburg",
  "Cape Town",
  "Durban",
  "Pretoria",
  "Port Elizabeth",
  "Bloemfontein",
  "East London",
  "Pietermaritzburg",
  "Rustenburg",
]

const categories = [
  { name: "All Categories", icon: Briefcase },
  { name: "Domestic Work", icon: Home },
  { name: "Delivery & Transport", icon: Car },
  { name: "Garden & Outdoor", icon: Hammer },
  { name: "Events & Hospitality", icon: Utensils },
  { name: "Moving & Labor", icon: Hammer },
  { name: "Childcare", icon: Users },
  { name: "Retail & Sales", icon: Briefcase },
  { name: "Security", icon: Shield },
  { name: "Construction", icon: Hammer },
]

export default function SaffaSkills() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("All Areas")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleSearch = () => {
    let filtered = jobs

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedArea !== "All Areas") {
      filtered = filtered.filter((job) => job.location.includes(selectedArea))
    }

    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((job) => job.category === selectedCategory)
    }

    setFilteredJobs(filtered)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modern Header */}
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
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                Find Work
              </Link>
              <Link href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                Post a Job
              </Link>
              <Link href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                How it Works
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/post-job">
                <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  Employers
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg">
                Sign up
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <TrendingUp className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">Over 15,000 jobs posted this month</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Find work you'll
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                love, fast.
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-emerald-50 max-w-3xl mx-auto">
              Get paid today for work you can do today. South Africa's premier platform for flexible work opportunities.
            </p>

            {/* Modern Search Bar */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative group">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                    <Input
                      placeholder="What work are you looking for?"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-14 h-16 text-lg border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-2xl transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <MapPin className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <Select value={selectedArea} onValueChange={setSelectedArea}>
                      <SelectTrigger className="pl-14 h-16 text-lg border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-2xl">
                        <SelectValue placeholder="Where?" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    onClick={handleSearch}
                    className="h-16 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Find Work
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Experience Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-4xl font-bold mb-4">Experience the new way to work</h3>
              <p className="text-xl text-slate-300">See jobs we've picked just for you</p>
            </div>
            <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
              Get started
            </Button>
          </div>
        </div>
      </section>

      {/* Modern Job Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h3>
            <p className="text-xl text-gray-600">Find the perfect opportunity in your field</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.slice(1).map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.name}
                  className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 shadow-lg hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-300">
                      <IconComponent className="h-10 w-10 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">{category.name}</h4>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modern Latest Jobs */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">Latest Opportunities</h3>
              <p className="text-xl text-gray-600">Fresh jobs posted today</p>
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-48 h-12 rounded-xl border-0 bg-white shadow-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="pay-high">Highest Pay</SelectItem>
                <SelectItem value="urgent">Urgent Jobs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {job.urgent && (
                          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">
                            URGENT
                          </Badge>
                        )}
                        {job.verified && (
                          <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                            ✓ VERIFIED
                          </Badge>
                        )}
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
                    <Badge variant="secondary" className="text-sm bg-slate-100 text-slate-700">
                      {job.type}
                    </Badge>
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg">
                      Apply Now
                    </Button>
                  </div>

                  <div className="mt-4 text-xs text-gray-500">Posted {job.posted}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-4 rounded-2xl text-lg border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              View All Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Modern How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">How SaffaSkills Works</h3>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Search className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-gray-900">1. Search for Work</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Browse hundreds of local jobs that fit your schedule and skills. Filter by location, pay, and job type.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-gray-900">2. Apply Instantly</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Apply with one click. No long forms or waiting around. Connect directly with employers via WhatsApp.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-gray-900">3. Get Paid</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Complete the work and get paid quickly. Build your reputation for more opportunities and higher pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Trusted by South Africans</h3>
            <p className="text-xl text-slate-300">Join thousands of successful workers and employers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                18,500+
              </div>
              <div className="text-slate-300 text-lg">Jobs Posted</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                12,200+
              </div>
              <div className="text-slate-300 text-lg">Active Workers</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                R3.2M+
              </div>
              <div className="text-slate-300 text-lg">Paid Out</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                4.9★
              </div>
              <div className="text-slate-300 text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-xl text-gray-600 mb-8">Get in touch with us - we're here to help!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">WhatsApp Support</h4>
              <p className="text-gray-600 mb-4">Quick help via WhatsApp</p>
              <Button className="bg-green-500 hover:bg-green-600">
                <a
                  href="https://wa.me/27795167553?text=Hi%20SaffaSkills!%20I%20need%20help%20with%20the%20platform."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Email Support</h4>
              <p className="text-gray-600 mb-4">Send us an email anytime</p>
              <Button variant="outline">
                <a href="mailto:saffaskillssa@gmail.com">saffaskillssa@gmail.com</a>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Call Us</h4>
              <p className="text-gray-600 mb-4">Speak to us directly</p>
              <Button variant="outline">
                <a href="tel:+27795167553">+27795167553</a>
              </Button>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 4:00 PM (SAST)</p>
            <p className="text-gray-600">Saturday & Sunday: Closed</p>
            <div className="mt-4 text-sm text-emerald-600">
              <strong>WhatsApp available 24/7 for urgent payment issues</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
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
              <p className="text-gray-600 mb-6 text-lg leading-relaxed max-w-md">
                Connecting South Africans with flexible work opportunities. Find skills, find work, find success.
              </p>
              <div className="text-sm text-emerald-600 font-medium">Made with ❤️ in South Africa</div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900 text-lg">For Workers</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-emerald-600 transition-colors">
                    Find Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-600 transition-colors">
                    How to Apply
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="hover:text-emerald-600 transition-colors">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-600 transition-colors">
                    Payment Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900 text-lg">For Employers</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link href="/post-job" className="hover:text-emerald-600 transition-colors">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-600 transition-colors">
                    Find Workers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-600 transition-colors">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 SaffaSkills.co.za. All rights reserved. Empowering South African workers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
