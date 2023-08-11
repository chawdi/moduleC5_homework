const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const students = xmlDoc.querySelectorAll("student");
const result = {
  list: []
};

students.forEach(student => {
  const nameElement = student.querySelector("name");
  const firstName = nameElement.querySelector("first").textContent;
  const lastName = nameElement.querySelector("second").textContent;
  const lang = nameElement.getAttribute("lang");
  const age = parseInt(student.querySelector("age").textContent, 10);
  const prof = student.querySelector("prof").textContent;

  result.list.push({
    name: `${firstName} ${lastName}`,
    age,
    prof,
    lang
  });
});

console.log(result);