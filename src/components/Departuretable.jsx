import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const Departuretable = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get(
        "https://opensky-network.org/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800"
      );
      setFlights(res.data);
      console.log(res.data);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callBck();
  }, [callBck]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div>
      <table>
      <tr>
              <th>ICAO addess of transponder</th>
              <th>Estimated time of arrival(unix format)</th>
              <th>Call Sign</th>
              <th>ICAO code of the estimated departure airport</th>
            </tr>
      </table>
      {flights.map(flight => (
        <div key={flight.id}>
          <table>
            <tr>
              <td>{flight.icao24}</td>
              <td>{flight.lastSeen}</td>
              <td>{flight.callsign}</td>
              <td>{flight.estArrivalAirport}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Departuretable;
