import BrowseByCategory from "@/components/Browse By Category/BrowseByCategory";
import FeaturedVideos from "@/components/Featured Videos/FeaturedVideos";
import LatestMedia from "@/components/Latest Media/LatestMedia";
import PopularVenues from "@/components/Popular Venues/PopularVenues";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <img
        className="w-100 h-100"
        src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/17/jaipur_bg.jpg"
        alt="banner"
      />

      <BrowseByCategory />
      <PopularVenues />
      <FeaturedVideos />
      <LatestMedia />
    </>
  );
}
