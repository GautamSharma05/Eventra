import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
 
} from "@/components/ui/card";
const latestMedia = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1603689033_SPP_5397.JPG",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1603689038_SPP_5380.JPG",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    image: "	https://image.wedmegood.com/resized/450X/uploads/member/827689/1598705614_IMG_6160.JPG",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1598705629_IMG_6161.JPG",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1598705599_IMG_6169.JPG",
  },
  
]
export default function LatestMedia() {
  return (
    <div>
      <div className="flex justify-between">
        <h5 className="px-4 pt-4 font-medium">Latest Media</h5>
        <h5 className="px-4 pt-4 text-xs">view all(10)</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8 gap-4 p-4">
        {latestMedia.map((item:any) => (
          <Card className="md:w-[252px]" key={item.id}>
            <CardContent className="p-4 flex justify-center items-center">
              <img
                width={150}
                height={150}
                src={item.image}
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
        ))}
      </div>
    </div>
  );
}
