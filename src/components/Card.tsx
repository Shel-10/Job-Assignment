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
  };
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
  },
}: Props) {
  return (
    <div className="relative card-container border-l-4 border-white hover:border-primary transition-color-300">
      <div className="absolute md:static -top-8 ss:right-8 ss:top-8">
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16 ss:w-20 ss:h-20 md:w-28 md:h-28 object-contain"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-3 md:gap-2">
        <div className="flex flex-row gap-4">
          <div className="text-primary font-bold sm:font-medium">{company}</div>
          {recent && (
            <div className="badge bg-primary">
              <span className="badge-text">new!</span>
            </div>
          )}
          {featured && (
            <div className="badge bg-cyan-darker">
              <span className="badge-text">featured</span>
            </div>
          )}
        </div>

        <div>
          <div className="text-cyan-darker cursor-pointer font-bold hover:text-primary text-[18px] transition-color-300">
            {position}
          </div>
        </div>

        <div className="text-cyan-dark font-medium">
          {/* status */}
          <div className="flex gap-2 ss:gap-4 list-disc">
            <div className="list-none">{postedAt}</div>
            <div>&bull; {contract}</div>
            <div>&bull; {location}</div>
          </div>
        </div>
      </div>

      <hr className="md:hidden border-t-[0.5px] border-cyan-dark" />
      <div className="grow flex items-center md:justify-end">
        <div className="flex flex-wrap flex-row md:justify-end gap-3.5 ">
          {[role, level, ...languages, ...tools].map((badge, index) => {
            return <FilterButton key={index} name={badge} />;
          })}
        </div>
      </div>
    </div>
  );
}
