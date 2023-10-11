
import Image from "next/image";

type Props = {
  topic1?: string,
  topic2?: string,
  rowDetails?: {
    title?: string,
    isTopic1?: boolean,
    isTopic2?: boolean
  }[],
};


const TabularSection = (props: Props) => {

  const tick = <Image className="w-5 sm:w-7" src={'/whatsapp/icon-tick.svg'} width={20} height={20} alt="✔" />
  const cross = <Image className="w-4 sm:w-6" src={'/whatsapp/icon-cross.svg'} width={17} height={17} alt="x" />

  return (
    <section className="bg-gray-50 py-16">
      <div className="2xl:container mx-auto">
        <div className="mx-auto max-w-5xl">

          <div className="flex">
            <div className="ml-auto flex items-center justify-center w-[8rem] text-center sm:w-[10rem] lg:w-[12rem] py-6 font-medium px-2 bg-tertiary-dark-blue text-white">
              {props.topic1}
            </div>
            <div className="flex items-center justify-center w-[8rem] sm:w-[10rem] text-center lg:w-[12rem] py-6 font-medium px-2 bg-white text-slate-800">
              {props.topic2}
            </div>
          </div>
          <hr />
          {props.rowDetails?.map((row, index) => {

            const sideRowCol = (index % 2) ? 'bg-gray-100' : 'bg-white';
            const midRowCol = (index % 2) ? 'bg-gray-100' : 'bg-tertiary-dark-blue';

            return (
              <div
                className={`flex`}
                key={index}>

                <div className={`${sideRowCol} py-6 pl-8 flex-grow text-sm text-slate-800 sm:text-lg`}>{row.title}</div>
                <div className={`${midRowCol} flex justify-center ml-auto  min-w-[8rem] sm:min-w-[10rem] lg:min-w-[12rem] items-center`}>{(row.isTopic1) ? tick : cross}</div>
                <div className={`${sideRowCol} flex justify-center  min-w-[8rem] sm:min-w-[10rem] lg:min-w-[12rem] items-center`}>{(row.isTopic2) ? tick : cross}</div>

              </div>
            );
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default TabularSection