function CatTemplate (data) {
  return `
  <li>${data.Name} is ${data.Age} years/months old belongs to ${data.Affiliation} Clan is ${data.Color} color and was educated by ${data.Education} </li>
    `;
  }
    export default CatTemplate;
