export const truck = {
  id: "67",
  location: "Lidl Blaha",
  city: "Budapest, Hungary",
  latency: 34,
};

export function renderTruck(vehicle) {
  return `
    <h1>Truck ${vehicle.id}</h1>
    <dl>
      <dt>Location</dt>
      <dd>${vehicle.location}<br>${vehicle.city}</dd>
      <dt>Connection</dt>
      <dd>Connected</dd>
      <dt>Latency</dt>
      <dd>${vehicle.latency} ms</dd>
    </dl>
  `;
}

if (typeof document !== "undefined") {
  document.querySelector("#truck").innerHTML = renderTruck(truck);
}
