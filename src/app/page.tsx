import BrowseByCategory from "@/components/Browse By Category/BrowseByCategory";
import FeaturedVideos from "@/components/Featured Videos/FeaturedVideos";
import LatestMedia from "@/components/Latest Media/LatestMedia";
import PopularVenues from "@/components/Popular Venues/PopularVenues";
import Image from "next/image";

export default function Home() {
  return <>
  <div className="h-80 bg-[#F4F4F4]"></div>
  <BrowseByCategory/>
  <PopularVenues/>
  <FeaturedVideos/>
  <LatestMedia/>
  </>;
}
