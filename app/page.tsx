'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Page() {
  const [filter, setFilter] = useState("All")

  const destinations = [
    { title: "Bali", price: "$960", duration: "7 Days", image: "/images/bali.jpg" },
    { title: "Santorini", price: "$1200", duration: "5 Days", image: "/images/santorini.jpg" },
    { title: "Peru", price: "$800", duration: "6 Days", image: "/images/peru.jpg" },
    { title: "Switzerland", price: "$1500", duration: "8 Days", image: "/images/switzerland.jpg" },
    { title: "Dubai", price: "$1100", duration: "5 Days", image: "/images/dubai.jpg" },
    { title: "Iceland", price: "$1400", duration: "6 Days", image: "/images/iceland.jpg" },
  ]

  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-orange-50 to-orange-100 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">TravelCo</h1>
        <ul className="hidden md:flex gap-6">
          <li>Destination</li>
          <li>Services</li>
          <li>Schedule</li>
          <li>Contact</li>
        </ul>
        <div className="space-x-2">
          <Button variant="outline">Login</Button>
          <Button>Sign up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Badge variant="secondary" className="mb-2">Best Destinations Around The World</Badge>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Travel, enjoy and live a new and full life
          </h2>
          <p className="mb-6 text-gray-600">
            Discover amazing places at exclusive deals. Explore, experience, and enjoy the best vacations around the world.
          </p>
          <div className="space-x-4">
            <Button>Find Destinations</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold">Find your next trip</h3>
          <Input placeholder="Enter destination" />
          <Input placeholder="Select date" />
          <Button className="w-full">Search</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 py-16 text-center">
        <Badge className="mb-4">Category</Badge>
        <h3 className="text-2xl font-bold mb-6">We offer Best Services</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Guided Tours", "Best Destinations", "Group Adventure"].map((title, i) => (
            <Card key={i} className="bg-gradient-to-b from-orange-100 to-orange-200 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-sm text-gray-700">
                  Many desktop publishing packages and web page editors now use Lorem Ipsum.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Destinations Section */}
      <section className="px-8 py-16 text-center">
        <Badge className="mb-4">Top Destination</Badge>
        <h3 className="text-2xl font-bold mb-6">Explore Top Destination</h3>
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {["All", "Asia", "Europe", "Desert", "Winter", "Tropical"].map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {destinations.map((place, i) => (
            <Card key={i} className="text-left">
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg">{place.title}</h4>
                <p className="text-sm text-gray-600">{place.duration}</p>
                <p className="text-orange-500 font-bold mt-2">{place.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-8 py-16 text-center">
        <Badge className="mb-4">Newsletter</Badge>
        <h3 className="text-2xl font-bold mb-4">Subscribe & Get Offers</h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
        </p>
        <div className="max-w-md mx-auto flex gap-2">
          <Input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        &copy; 2025 TravelCo. All rights reserved.
      </footer>
    </main>
  )
}
