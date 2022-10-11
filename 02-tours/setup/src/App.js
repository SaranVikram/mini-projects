import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    settours(newTours);
  };

  const fecthData = async () => {
    try {
      const response = await fetch(url);
      const tour = await response.json();
      setloading(false);
      settours(tour);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : tours.length ? (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      ) : (
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button onClick={fecthData}>Refresh</button>
          </div>
        </main>
      )}{" "}
    </>
  );
}

export default App;
