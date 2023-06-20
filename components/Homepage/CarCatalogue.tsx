import SearchBar from "../SearchBar";
import CustomFilter from "../CustomFilter";
import { getAllCars } from "@/utils";
import CarCard from "../CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "../ShowMore";

const CarCatalogue = async ({ searchParams }: URLSearchParams) => {
  console.log('searchParams -> ',searchParams)
  let data = {
    manufacturer: searchParams?.manufacturer || '',
    year: searchParams?.year || 2023,
    fuel: searchParams?.fuel || '',
    limit: searchParams?.limits || 10,
    model: searchParams?.model || ''
  };
  const allcars = await getAllCars(data);
   
  
  const isAllCarsEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  if(!isAllCarsEmpty) {
    allcars.forEach((x)=>{
      let randomKey = crypto.randomUUID();
      x.id = randomKey;
    })
  }
  

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
            {/* Search Bar Component */}
            <SearchBar/>

            <div className="home__filter-container">
                {/* CustomFilter Component */}
                <CustomFilter title="Fuel" options={fuels}/>
                <CustomFilter title="Year" options={yearsOfProduction}/>

            </div>
        </div>

        {!isAllCarsEmpty ? (
        <section>
          <div className="home__cars-wrapper">
             {allcars?.map((car)=> <CarCard car={car} key={car.id}/> )}     
          </div>
          <ShowMore
           pageNumber={(searchParams.pageNumber || 10) / 10}
           isNext={(searchParams.limit || 10) > allcars.length}
          />
        </section>
        ) 
        : 
        (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no data!</h2>
            <p>{allcars?.message}</p>
          </div>
        )
        }
    </div>
  )
}

export default CarCatalogue