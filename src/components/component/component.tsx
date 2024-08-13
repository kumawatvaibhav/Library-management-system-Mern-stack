"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    author: [],
  })
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      category: "Fiction",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Fiction",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
    },
    {
      id: 6,
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      category: "Fiction",
    },
    {
      id: 7,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Biography",
    },
    {
      id: 8,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      category: "Non-Fiction",
    },
  ]
  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      if (selectedFilters.category.length > 0 && !selectedFilters.category.includes(book.category)) {
        return false
      }
      if (selectedFilters.author.length > 0 && !selectedFilters.author.includes(book.author)) {
        return false
      }
      return book.title.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }, [searchQuery, selectedFilters])
  const handleFilterChange = (type, value) => {
    if (type === "category") {
      setSelectedFilters({
        ...selectedFilters,
        category: selectedFilters.category.includes(value)
          ? selectedFilters.category.filter((item) => item !== value)
          : [...selectedFilters.category, value],
      })
    } else if (type === "author") {
      setSelectedFilters({
        ...selectedFilters,
        author: selectedFilters.author.includes(value)
          ? selectedFilters.author.filter((item) => item !== value)
          : [...selectedFilters.author, value],
      })
    }
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-semibold">Public Library</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/#about" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:underline" prefetch={false}>
            Profile
          </Link>
          
        </nav>
        
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Discover the Joy of Reading
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Explore our vast collection of books, from classic literature to the latest bestsellers. Find your
                  next adventure at the Public Library.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Input
                    type="text"
                    placeholder="Search books..."
                    className="flex-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button>Explore Library</Button>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Library"
                className="mx-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Books</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Discover our most popular and recommended books.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="filters">
                    <AccordionTrigger className="flex items-center gap-2 text-sm font-medium">
                      <FilterIcon className="h-4 w-4" />
                      Filters
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-4">
                        <div>
                          <h3 className="mb-2 text-sm font-medium">Category</h3>
                          <div className="grid gap-2">
                            <Label className="flex items-center gap-2 font-normal">
                              <Checkbox
                                checked={selectedFilters.category.includes("Fiction")}
                                onCheckedChange={() => handleFilterChange("category", "Fiction")}
                              />
                              Fiction
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                              <Checkbox
                                checked={selectedFilters.category.includes("Non-Fiction")}
                                onCheckedChange={() => handleFilterChange("category", "Non-Fiction")}
                              />
                              Non-Fiction
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                              <Checkbox
                                checked={selectedFilters.category.includes("Biography")}
                                onCheckedChange={() => handleFilterChange("category", "Biography")}
                              />
                              Biography
                            </Label>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm font-medium">Author</h3>
                          <div className="grid gap-2">
                            <Label className="flex items-center gap-2 font-normal">
                              <Checkbox
                                checked={selectedFilters.author.includes("F. Scott Fitzgerald")}
                                onCheckedChange={() => handleFilterChange("author", "F. Scott Fitzgerald")}
                              />
                              F. Scott Fitzgerald
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                              <Checkbox
                                checked={selectedFilters.author.includes("Harper Lee")}
                                onCheckedChange={() => handleFilterChange("author", "Harper Lee")}
                              />
                              Harper Lee
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                              <Checkbox
                                checked={selectedFilters.author.includes("George Orwell")}
                                onCheckedChange={() => handleFilterChange("author", "George Orwell")}
                              />
                              George Orwell
                            </Label>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredBooks.map((book) => (
                <div key={book.id} className="flex flex-col items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    width="160"
                    height="240"
                    alt={`Book Cover: ${book.title}`}
                    className="rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-muted-foreground">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}