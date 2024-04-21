import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
const venues = [
  {
      id: 1,
      title: "Hotel Raj Bagh Palace Jaipur, road, Amer, Jaipur, Rajasthan, India",
      image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1573028225_Screenshot_from_2019_11_06_13_43_54.png",
  },
  {
      id:2,
      title: "Khasa Kothi Flyover, D Circle, Gopalbari, Jaipur, Rajasthan 302001",
      image: "https://image.wedmegood.com/resized/1000X/uploads/member/590315/1558587210_1.jpg",
  },

  {
    id: 3,
    title: "Zorawer Singh gate, Amer road, Jaipur 302002 (India)",
    image: "https://image.wedmegood.com/resized/1000X/uploads/member/780488/1627046807_WhatsApp_Image_2021_07_23_at_14.01.27__38_.jpeg?crop=7,94,1267,712",
  },
  {
    id:4,
    title: "District Jaipur, Chomu, Rajasthan 303702",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1573028225_Screenshot_from_2019_11_06_13_43_54.png",
  },
  {
    id:5,
    title: "Hotel Raj Bagh Palace Jaipur",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1573028225_Screenshot_from_2019_11_06_13_43_54.png",
  },
  {
    id:6,
    title: "Hotel Raj Bagh Palace Jaipur",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1573028225_Screenshot_from_2019_11_06_13_43_54.png",
  },
  {
    id:7,
    title: "Hotel Raj Bagh Palace Jaipur",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1573028225_Screenshot_from_2019_11_06_13_43_54.png",
  },
  {
    id:8,
    title: "Hotel Raj Bagh Palace Jaipur",
    image: "https://image.wedmegood.com/resized/450X/uploads/member/827689/1573028225_Screenshot_from_2019_11_06_13_43_54.png",
  }
 
];
export default function PopularVenues() {
  return (
    <div>
      <div className="flex justify-between">
        <h5 className="px-4 pt-4 font-medium">Popular Venues</h5>
        <h5 className="px-4 pt-4 text-xs">view all(10)</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8 gap-4 p-4">
        {venues.map((item:any) => (
          <Card  key={item.id} className="md:w-[252px]">
            <CardContent className="p-4 flex justify-center items-center">
              <img
                width={450}
                height={450}
                src={item.image}
                alt="media"
              />
            </CardContent>
            <CardFooter>
              <CardDescription>
            
                {item.title}
              </CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
