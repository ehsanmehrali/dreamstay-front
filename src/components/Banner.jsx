import banner from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="relative rounded-xl overflow-hidden mx-4 mt-4">
      <img
        src={banner}
        alt="Dream Stay Banner"
        className="w-full h-auto object-cover rounded-xl "
      />
      <div className="absolute inset-0 flex flex-col items-start justify-start px-6 py-10 text-white bg-opacity-100 pt-4.5 pl-4.5">
        <h1 className="text-2xl font-bold tracking-wider">DREAM STAY</h1>
        <p className="text-sm -mt-2 tracking-widest">is where life happens</p>
      </div>
    </div>
  );
}
