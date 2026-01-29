import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "../components/i-skeleton-card/skeleton-card";

export default function ProductLoading(){

    return(
        // <h2>Loading product ......</h2>
        // <Skeleton/>
        <main className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
            <section>
                {
                    [...Array(15)].map((_, index)=>
                        <SkeletonCard key={index}/>
                    )
                }
                {/* <SkeletonCard /> */}
            </section>


           

      {/* const SKELETON_COUNT = 8;

{Array.from({ length: SKELETON_COUNT }).map((_, i) => (
  <SkeletonCard key={i} />
))} */}


            {/* <SkeletonCard/> */}
        </main>
    )
}