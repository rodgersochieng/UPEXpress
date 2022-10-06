import React from "react";
import Records from "../Records.json";

export default function Booking() {
  return (
    <div className="book">
      {Records.map((record) => {
        return <>{record.id}</>;
      })}
    </div>
  );
}
