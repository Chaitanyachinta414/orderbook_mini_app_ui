export const menuItemsData = [
    {
      title: 'Dashboard',
      url: '/referencedata'
    },
    {
        title: 'Order Book',
        url: '/referencedata',
        submenu: [
          {
            title: 'Add New Row',
            url: 'addnewreferencedata',
          },
          {
            title: 'Order Book File Upload',
            url: 'orderbookfileupload',
          },
          {
            title: 'Search Order Book',
            url: 'search',
          },
        ],
      },
      {
        title: 'About',
        url: '/',
      },
  ];