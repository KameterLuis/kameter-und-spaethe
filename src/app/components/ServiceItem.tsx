import Link from "next/link";

type serviceItemType = {
  title: string;
  description: string;
};

const ServiceItem = ({ title, description }: serviceItemType) => {
  return (
    <div className="group cursor-pointer relative overflow-hidden bg-gray-50 rounded-xl border border-gray-200 transition-all hover:border-[#205da9]/30 duration-300 hover:shadow-lg">
      <Link href="#kontakt">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative p-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-[#205da9] rounded-full mr-3"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
          <div className="pt-4 flex items-center text-[#205da9] font-semibold">
            <span>Erfahren Sie mehr →</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceItem;
