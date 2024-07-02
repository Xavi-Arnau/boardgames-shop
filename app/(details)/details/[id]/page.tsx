import Description from "@/components/details/Description";
import Gallery from "@/components/details/Gallery";
import Related from "@/components/details/Related";

interface DetailsPageProps {
  params: {
    id: string;
  };
}

export default function DetailsPage({ params }: DetailsPageProps) {
  console.log(params);

  return (
    <div className="w-full">
      <div className="md:w-8/12 mx-auto flex flex-col md:flex-row ">
        <div className="md:w-1/2">
          <Gallery />
        </div>
        <div className="md:w-1/2">
          <Description />
        </div>
      </div>
      <Related />
    </div>
  );
}
