'use strict';

const parseSalary = (salaryStr) => {
  return Number(salaryStr.replace(/[^0-9]/g, ''));
};

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.append(...items);
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => {
    const employeeName = item.childNodes[0].textContent.trim();

    return {
      name: employeeName,
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

getEmployees(employeeList);
