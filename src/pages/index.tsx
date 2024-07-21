import ResponsiveAppBar from "@/components/appbar/Appbar";
import Melodytest from "@/components/appbar/melodytest";
import Homes from "@/pages/home";
import "@/app/globals.css"

export default function Home() {
  return (
    <>
      <Melodytest/>
      <ResponsiveAppBar />
     <Homes />
    </>
  );

 
 
}
