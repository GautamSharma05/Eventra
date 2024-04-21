
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function VenuePage() {
  return (
    <>
      <div className="h-80 bg-[#F4F4F4]"></div>
      <div className="flex justify-around mt-5">
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="No of guest" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>No of guest</SelectLabel>
              <SelectItem value="1-50">1-50</SelectItem>
              <SelectItem value="50-100">50-100</SelectItem>
              <SelectItem value="150-200">150-200</SelectItem>
              <SelectItem value="250-300">250-300</SelectItem>
              <SelectItem value="350-400">350-400</SelectItem>
              <SelectItem value="500+">500+</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="venue type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>venue type</SelectLabel>
              <SelectItem value="1-50">1-50</SelectItem>
              <SelectItem value="50-100">50-100</SelectItem>
              <SelectItem value="150-200">150-200</SelectItem>
              <SelectItem value="250-300">250-300</SelectItem>
              <SelectItem value="350-400">350-400</SelectItem>
              <SelectItem value="500+">500+</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Space Preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Space Preference</SelectLabel>
              <SelectItem value="1-50">1-50</SelectItem>
              <SelectItem value="50-100">50-100</SelectItem>
              <SelectItem value="150-200">150-200</SelectItem>
              <SelectItem value="250-300">250-300</SelectItem>
              <SelectItem value="350-400">350-400</SelectItem>
              <SelectItem value="500+">500+</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Rating</SelectLabel>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="w-[200px]">
          Search
        </Button>
      </div>

    <div className="m-4">

      <div className="flex justify-between">
        <h5 className="px-4 pt-4 font-medium">Wedding Venues</h5>
        <h5 className="px-4 pt-4 text-xs">view all(10)</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8 gap-4 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18].map((item) => (
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
        ))}
      </div>
      </div>
      <div className="h-80 bg-[#F4F4F4]"></div>
    </>
  );
}
