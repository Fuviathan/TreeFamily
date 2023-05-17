import { Fragment, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useFormContext } from "react-hook-form";

export default function ComboBoxFamily(props) {
  const people = props.people;
  const { register, setValue } = useFormContext({});

  const indices = people
    .map((data, index) => (data.id === props.data ? index : -1))
    .filter((index) => index !== -1);

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[indices] || people[0]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          removeVietnameseAccent(
            person.fullName.toLowerCase().replace(/\s+/g, "")
          ).includes(
            removeVietnameseAccent(query.toLowerCase().replace(/\s+/g, ""))
          )
        );

  function removeVietnameseAccent(str) {
    str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a");
    str = str.replace(/[èéẹẻẽêềếệểễ]/g, "e");
    str = str.replace(/[ìíịỉĩ]/g, "i");
    str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o");
    str = str.replace(/[ùúụủũưừứựửữ]/g, "u");
    str = str.replace(/[ỳýỵỷỹ]/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
  }
  // console.log(selected);
  // useEffect(() => {}, []);

  const handleSelectedChange = (value) => {
    setSelected(value);
    setValue(props.name, value.id);
  };

  return (
    <div className={props.className}>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.title}
      </label>
      <div className="mt-2">
        <Combobox
          {...register(props.name)}
          defaultValue={selected}
          // value={selected}
          onChange={handleSelectedChange}
        >
          <div className="relative mt-1">
            <div>
              <Combobox.Input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-4"
                // className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-none focus:ring-0"
                displayValue={(person) => person.fullName}
                onChange={(event) => setQuery(event.target.defaultValue)}

                // defaultValue={props.data}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-8 pr-4 ${
                          active ? "bg-gray-200 text-black" : "text-black"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.fullName}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-black" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
}
