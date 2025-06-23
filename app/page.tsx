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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6
