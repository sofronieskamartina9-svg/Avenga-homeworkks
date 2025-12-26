
function checkType(value) {
  let type = typeof value;

  // Посебно правило за null (бидејќи typeof null = "object")
  if (value === null) {
    type = "null";
  }

  console.log("Вредност:", value, "| Тип:", type);

  return type;
}

// Повик 5 пати со различни типови
checkType({});               // object
checkType(true);             // boolean
checkType(123);              // number
checkType("Hello");          // string
checkType(undefined);        // undefined

// (бонус – не мора, ама е убаво)
checkType(null);             // null
checkType([1, 2, 3]);        // object (array technically)
