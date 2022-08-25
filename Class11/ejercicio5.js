let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ];
  
  function callback(itemActual) {
      return itemActual.score >=  10;
  }
  
  let arregloResultante = students.filter(callback);
  
  console.log(arregloResultante);