function CatTemplate (data) {
  return `
  <li><br>${data.Name} is ${data.Age} years/months old belongs to the Clan ${data.Affiliation}, is ${data.Color}, and was educated by ${data.Education}</li>
    `;
  }
    export default CatTemplate;
