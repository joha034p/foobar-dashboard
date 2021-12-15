import React, { useState, useEffect } from "react";
import continuousColorLegend from "react-vis/dist/legends/continuous-color-legend";

function Tables(props) {
  function clickAssist(index) {
    console.log(`REMOVED TABLE ${props.tables[index].tableid}`);
    let thisTable = props.tables[index]._id;
    deleteThis(thisTable);

    function deleteThis(id) {
      fetch("https://foobar-cc0c.restdb.io/rest/foobar/" + id, {
        method: "delete",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "61b71e3fa3fedd557f8e0abd",
          "cache-control": "no-cache",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }

  removeAnimation();
  function removeAnimation() {
    const allAssisbtn = document.querySelectorAll(".assistBtn");
    console.log(allAssisbtn);

    for (let i = 0; i < allAssisbtn.length; i++) {
      allAssisbtn[i].addEventListener("click", () => {
        allAssisbtn[i].parentElement.classList.add("assistAnimation");
        console.log(allAssisbtn[i]);
        allAssisbtn[i].parentElement.addEventListener("animationend", () => {
          allAssisbtn[i].parentElement.style.display = "none";
        });
      });
    }
    /*  .addEventListener("click", () => {
      this.classList.add("assistAnimation");
    }); */
  }

  return (
    <section id="tables">
      {/* <h1>Tables</h1> */}
      <div className="tables_preview">
        {props.tables.map((table, index) => (
          <div className="tableContainer">
            <h2>TABLE {table.tableid} NEEDS HELP!</h2>
            <button onClick={() => clickAssist(index)} className="assistBtn">
              Assist
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tables;
