interface DetailsPageProps {
  params: {
    id: string;
  };
}

export default function DetailsPage({ params }: DetailsPageProps) {
  console.log(params);

  return (
    <div className="w-full">
      <div>sdfsdf</div>
    </div>
  );
}
