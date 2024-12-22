function pisahkanMenu(menu) {
  const navMenu = document.getElementById('nav-menu');
  const items = navMenu.getElementsByTagName('li');

  // Menghapus kelas 'separated' dari semua item
  for (let item of items) {
      item.classList.remove('separated');
  }

  // Menambahkan kelas 'separated' ke item menu yang diklik
  if (menu === 'home') {
      items[0].classList.add('separated'); // Home
  } else if (menu === 'products') {
      items[2].classList.add('separated'); // Produk
  }
}