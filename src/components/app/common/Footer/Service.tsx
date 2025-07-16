function Service() {
  return (
    <div className="flex w-64 flex-col justify-center gap-y-1 rounded-2xl bg-[#578FCA] px-6 py-8">
      <p className="text-background mb-3 text-xl font-semibold md:text-2xl">
        Service :
      </p>
      <div className="text-primary-foreground flex flex-col gap-y-2 font-extralight">
        <a href="#" className="w-fit hover:underline">
          Tentang Kami
        </a>
        <a href="#" className="w-fit hover:underline">
          Provider Pilihan
        </a>
        <a href="#" className="w-fit hover:underline">
          Info Provider
        </a>
        <a href="#" className="w-fit hover:underline">
          Shop
        </a>
        <a href="#" className="w-fit hover:underline">
          Karir
        </a>
        <a href="#" className="w-fit hover:underline">
          Garansi Aman
        </a>
        <a href="#" className="w-fit hover:underline">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Service;
