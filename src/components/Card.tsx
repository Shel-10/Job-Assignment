import FilterButton from "./FilterButton";

interface Props {
  data: {
    logo: string;
    company: string;
    recent: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: [string];
    tools: [string];
  }
}


export default function Card({
  data: {
    logo,
    company,
    recent,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  }
}: Props) {
  return (
    <div className="bg-white flex px-10 py-5 gap-6 rounded shadow-xl text-base hover:border-l-4 hover:border-primary cursor-pointer">
      <div>
        <img src={logo} alt="logo" className="w-28 h-28 object-fit" />
      </div>

      <div className="flex flex-col justify-center items-start gap-2">
        <div className="flex flex-row gap-4">
          <div className="text-primary font-medium">{company}</div>
          {recent && (
            <div className="bg-primary rounded-2xl">
              <span className="text-sm text-white uppercase px-2 font-medium">
                new!
              </span>
            </div>
          )}
          {featured && (
            <div className="bg-cyan-darker rounded-2xl">
              <span className="text-sm text-white uppercase px-2 font-medium">
                featured
              </span>
            </div>
          )}
        </div>

        <div>
          <div className="text-cyan-darker cursor-pointer font-bold hover:text-primary text-[18px]">
            {position}
          </div>
        </div>

        <div className="text-cyan-dark font-medium">
          {/* status */}
          <div className="flex gap-4 list-disc">
            <div className="list-none">{postedAt}</div>
            <div>&bull; {contract}</div>
            <div>&bull; {location}</div>
          </div>
        </div>
      </div>

      <div className="grow flex justify-end items-center">
        <div className="flex flex-row gap-3.5">
          {
            [role, level, ...languages, ...tools].map((badge, index) => {
              return <FilterButton key={index} name={badge} />;
            })
          }
        </div>
      </div>
    </div>
  );
}

/* {/* <div
                  className="mr-3 bg-cyan-light text-cyan-medium rounded-md cursor-pointer hover:bg-cyan-medium hover:text-cyan-light"
                  key={index}
                >
                  <div className="p-2">{badge}</div>
                </div>  */
