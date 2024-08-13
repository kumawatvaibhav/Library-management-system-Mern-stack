import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Header from "@/components/header";
import Spline from '@splinetool/react-spline';

export default function book() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">   
      <Spline
        scene="https://prod.spline.design/arrJvKN-VV5e9NI5/scene.splinecode" 
      />
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Trending Books
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Discover our most popular and recommended books.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/1.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">The Great Gatsby</h3>
                <p className="text-muted-foreground">F. Scott Fitzgerald</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/2.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">The Great Gatsby</h3>
                <p className="text-muted-foreground">F. Scott Fitzgerald</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/3.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">To Kill a Mockingbird</h3>
                <p className="text-muted-foreground">Harper Lee</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/4.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">1984</h3>
                <p className="text-muted-foreground">George Orwell</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/89.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">Pride and Prejudice</h3>
                <p className="text-muted-foreground">Jane Austen</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/9.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">The Catcher in the Rye</h3>
                <p className="text-muted-foreground">J.D. Salinger</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                New Arrivals
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Discover a whole new world we these new books.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/1.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">The Great Gatsby</h3>
                <p className="text-muted-foreground">F. Scott Fitzgerald</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/2.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">The Great Gatsby</h3>
                <p className="text-muted-foreground">F. Scott Fitzgerald</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/5.jpeg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">The Great Gatsby</h3>
                <p className="text-muted-foreground">F. Scott Fitzgerald</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/placeholder.svg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">To Kill a Mockingbird</h3>
                <p className="text-muted-foreground">Harper Lee</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/placeholder.svg"
                  width="160"
                  height="240"
                  alt="Book Cover"
                  className="rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold">1984</h3>
                <p className="text-muted-foreground">George Orwell</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About the Library
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  The Public Library has been serving the community for over 50
                  years, providing access to a vast collection of books,
                  resources, and educational programs. Our knowledgeable
                  librarians are always available to assist you in finding your
                  next great read.
                </p>
              </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 8pm
                      <br />
                      Saturday: 10am - 6pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      123 Main Street
                      <br />
                      Anytown, Vadodara 12345
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">Services</h3>
                    <p className="text-muted-foreground">
                      - Book Lending
                      <br />- Computer Access
                      <br />- Study Spaces
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <p className="text-muted-foreground">
                      Phone: 7016563416
                      <br />
                      Email: info@publiclibrary.com
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-muted-foreground py-6 px-4 md:px-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            &copy; 2024 Public Library. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
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
