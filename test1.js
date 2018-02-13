(() => {
  const myInfo = [
    {
      fName: 'Ali',
      lName: 'Ramezani',
    },
    {
      fName: 'Ali',
      lName: 'Mihandoost',
    },
    {
      fName: 'javad',
      lName: 'javadi',
    }
  ];

  printList = (list) => {
    for(item of list) {
      console.log(item.fName, item.lName);
    }
  }

  printList(myInfo);
})();