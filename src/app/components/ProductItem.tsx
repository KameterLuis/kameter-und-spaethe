type productItemType = {
  title: string;
  description: string;
  img: string;
};

const ProductItem = ({ title, description, img }: productItemType) => {
  return (
    <div className="bg-[#F5F5F5] cursor-pointer group relative overflow-hidden rounded-xl p-6 border border-[#E0E0E0] hover:border-[#205da9]/30 transition-all duration-300 hover:shadow-lg">
      <div className="absolute w-full h-full inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        {img.length > 0 ? (
          <img
            src={img}
            alt="Arbeitsschutz"
            className={`${
              img.length > 0 ? "" : "hidden"
            } w-full h-32 object-cover rounded-lg mb-4`}
          />
        ) : (
          ""
        )}
        <h3 className="text-lg font-bold text-[#333333] mb-2">{title}</h3>
        <p className="text-[#666666] text-sm mb-3">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
