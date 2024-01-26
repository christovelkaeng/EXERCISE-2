const membersData = [
    { id: 1, nim: '12345', nama: 'Cristovel Kaeng, Kevin Ombeng', nomorTelp: '081242577286' },
    { id: 2, nim: '12345', nama: 'letisya', nomorTelp: '082292909191' },
    { id: 3, nim: '12345', nama: 'Moty', nomorTelp: '082243577286' },
    { id: 4, nim: '12345', nama: 'Cony', nomorTelp: '081237829023' },
  ];
  
  function getMembers() {
    return membersData;
  }
  
  module.exports = {
    getMembers
  };