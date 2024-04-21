import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
export default function FeaturedVideos() {
  return (
    <div>
        <div className="flex justify-between">
        <h5 className="px-4 pt-4 font-medium">Featured Videos</h5>
        <h5 className="px-4 pt-4 text-xs">view all(10)</h5>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8 gap-4 p-4">
       {
            [1, 2, 3, 4,5,6,7,8].map((item) => (
                <Card className="md:w-[252px]">
                <CardContent className="p-4 flex justify-center items-center">
                  <img
                    width={150}
                    height={150}
                    src="https://via.placeholder.com/150"
                    alt="media"
                  />
                </CardContent>
                <CardFooter>
                  <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                    voluptates.
                  </CardDescription>
                </CardFooter>
              </Card>
            ))
       }
    </div>
    </div>
  )
}
