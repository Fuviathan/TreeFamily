import { useEffect, useState } from "react";

// import classes from "./tree.module.css";
const FamilyTreeChart = () => {
  const jsonData = [
    {
      id: 1,
      pid: 2,
      gender: "male",
      title: "Title",
      name: "Father",
      photo: "",
      addr: "Hà Nội",
    },
    {
      id: 2,
      pid: 1,
      gender: "female",
      title: "Title",
      name: "Mother",
      photo: "",
      addr: "NY",
      cn: "us",
    },
    {
      id: 3,
      pid: 4,
      mid: 2,
      fid: 1,
      gender: "female",
      title: "Title",
      name: "Daughter",
      photo: "//unsplash.it/80/80",
      addr: "USA",
      cn: "us",
    },
    {
      id: 4,
      pid: 3,
      gender: "male",
      title: "Title",
      name: "Son-in-Law",
      photo: "",
      addr: "",
      cn: "ca",
    },
    {
      id: 5,

      mid: 3,
      gender: "male",
      title: "Title",
      name: "Son-in-Law",
      photo: "",
      addr: "",
      cn: "ca",
    },
    {
      id: 6,
      fid: 1,
      mid: 2,
      gender: "male",
      title: "Title",
      name: "Son-in-Law",
      photo: "",
      addr: "",
      cn: "ca",
    },
  ];

  useEffect(() => {
    const scriptJquery = document.createElement("script");
    scriptJquery.src = "https://code.jquery.com/jquery-3.6.0.js";
    scriptJquery.async = true;
    document.body.appendChild(scriptJquery);

    const scriptLineage = document.createElement("script");
    scriptLineage.src = "https://shrihari-lib.netlify.app/lineage.min.js";
    scriptLineage.async = true;
    scriptLineage.onload = () => {
      async function loadScript() {
        const scriptTree = document.createElement("script");
        scriptTree.innerHTML = `
          const params = {
            data: ${JSON.stringify(jsonData)},
            search: false,
            container: "divFamily",
            template: "tilted"//"rounded" // "raised" // "tilted"//"circle
          };
          const tree = new Lineage(params);
          tree.load();
        `;
        const bodyElement = document.querySelector("body");
        await new Promise((resolve) => {
          scriptTree.onload = resolve;
          bodyElement.appendChild(scriptTree);
        });
      }

      loadScript();

      // bodyElement.insertAdjacentHTML("afterbegin", scriptTree.outerHTML);
      // document.head.appendChild(scriptTree);
      // document.querySelector("body").appendChild(scriptTree);
      // document
      //   .querySelector("body")
      //   .insertAdjacentElement("beforeend", scriptTree);

      // setIsLoaded(true);
    };

    document.body.appendChild(scriptLineage);

    return () => {
      document.body.removeChild(scriptJquery);
      document.body.removeChild(scriptLineage);
    };
  }, [jsonData]);

  return (
    <div>

      <div id="divFamily" className="h-screen bg-white"></div>
    </div>
  );
};

export default FamilyTreeChart;
