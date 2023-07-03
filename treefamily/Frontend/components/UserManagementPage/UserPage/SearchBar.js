import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import { For } from "react-haiku";

export default function SearchBar({ setNameSearch }) {
  const [valueSearch, setValueSearch] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { data, error } = useSWR(
    `http://localhost:8080/member/search?name=${valueSearch}`
  );

  const inputRef = useRef(null); // Reference to the input element

  useEffect(() => {
    // Event listener to check if a click occurs outside the input element
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching data.</div>;
  }

  const onChange = (e) => {
    setValueSearch(e.target.value);
    setDropdownVisible(true);
  };

  const selectPerson = (person) => {
    setValueSearch(person.fullName);
    setDropdownVisible(false);
  };

  return (
    <div className="relative mx-auto text-gray-600">
      <div>
        <input
          className="h-10 px-5 pr-10 text-base bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={valueSearch}
          onChange={onChange}
          ref={inputRef} // Set the ref to the input element
        />
        <button type="submit" className="absolute top-0 right-0 mr-1">
          <MagnifyingGlassCircleIcon
            onClick={() => setNameSearch(valueSearch)}
            className="w-auto h-10 text-gray-400 rounded-lg hover:text-gray-600"
          />
        </button>
      </div>
      {isDropdownVisible && (
        <div
          id="drop-down"
          className="flex flex-col bg-gray-200 border-4 rounded-lg min-h-0 overflow-y-scroll absolute z-50 w-full"
        >
          {data &&
            data.map((person) => (
              <div
                key={person.id}
                onClick={() => selectPerson(person)}
                className="z-50 px-2 py-1 text-start my-1 hover:bg-gray-400"
              >
                {person.fullName}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
