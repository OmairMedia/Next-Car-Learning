import {  Hero, CarCatalogue } from "@/components";



export default function Home({ searchParams }: URLSearchParams) {
 
  return (
    <main className="overflow-hidden">
      <Hero/>
      <CarCatalogue searchParams={searchParams}/>
    </main>
  )
}
