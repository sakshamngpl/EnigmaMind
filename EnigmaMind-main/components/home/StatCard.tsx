import Image from "next/image";

interface StatCardProps {
  imageURL: string;
  percentage?: number;
  title?: string;
};

const StatCard = (props: StatCardProps) => {
  return (
    <div className=" w-[20rem] p-2 flex items-center mx-auto">
      <Image className="w-14 h-14 sm:w-12 sm:h-12 " src={props.imageURL} alt="img" width={50} height={50} />
      <div className="ml-6">
        <span className="w-full text-4xl sm:text-3xl text-misc-blue font-semibold">{props.percentage + '%'}</span>
        <h1 className="text-sm text-gray-700">{props.title}</h1>
      </div>
    </div>
  )
}

export default StatCard