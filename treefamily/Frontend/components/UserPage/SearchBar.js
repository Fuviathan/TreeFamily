import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
export default function SearchBar() {
  return (
    <div class="relative mx-auto text-gray-600">
      <input
        className="h-10 px-5 pr-10 text-base bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      ></input>

      <button type="submit" class="absolute right-0 top-0 mr-1">
        <MagnifyingGlassCircleIcon className="w-auto h-10 text-gray-400 rounded-lg hover:text-gray-600"></MagnifyingGlassCircleIcon>
      </button>
    </div>
  );
}
