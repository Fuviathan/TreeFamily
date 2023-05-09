import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
export default function SearchBar() {
  return (
    <div class="relative mx-auto text-gray-600">
      <input
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-base focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      ></input>

      <button type="submit" class="absolute right-0 top-0">
        <MagnifyingGlassCircleIcon className="w-auto h-10 text-indigo-500 rounded-lg color-red bg-violet-200 hover:text-indigo-700"></MagnifyingGlassCircleIcon>
      </button>
    </div>
  );
}
