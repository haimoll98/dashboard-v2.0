export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calender",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "/noavatar.png",
    username: "Syelind",
    email: "syelin@example.com",
    amount: "3.668.000",
  },
  {
    id: 2,
    img: "/noavatar.png",
    username: "Milla",
    email: "milla@example.com",
    amount: "3.256.000",
  },
  {
    id: 3,
    img: "/noavatar.png",
    username: "Derry",
    email: "derry@example.com",
    amount: "2.998.000",
  },
  {
    id: 4,
    img: "/noavatar.png",
    username: "Fatmawati",
    email: "wati@example.com",
    amount: "1.225.000",
  },
  {
    id: 5,
    img: "/noavatar.png",
    username: "Ibrahim",
    email: "ibrahim@example.com",
    amount: "3.225.000",
  },
  {
    id: 6,
    img: "/noavatar.png",
    username: "Bunda Eva",
    email: "buneva70@example.com",
    amount: "6.090.000",
  },
  {
    id: 7,
    img: "/noavatar.png",
    username: "Vetas",
    email: "acmadvetas@example.com",
    amount: "3.190.000",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "users",
  percentage: 21,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "Rp56.432.000",
  dataKey: "users",
  percentage: -12,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/userconversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "users",
  percentage: 12,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "./one-piece.webp",
    lastName: "Ayu",
    firstName: "Diana",
    email: "dianaaayu@example.com",
    phone: "08123456789",
    createdAt: "01.01.1990",
    verified: true,
  },
  {
    id: 2,
    img: "./one-piece.webp",
    lastName: "Firmansyah",
    firstName: "David",
    email: "davidfirm@example.com",
    phone: "08123456789",
    createdAt: "01.01.1991",
    verified: true,
  },
  {
    id: 3,
    img: "./one-piece.webp",
    lastName: "Watik",
    firstName: "Fatimah",
    email: "watikfatimah@example.com",
    phone: "08123456789",
    createdAt: "01.01.1992",
  },
  {
    id: 4,
    img: "./one-piece.webp",
    lastName: "Karmelia Tamba",
    firstName: "Milla",
    email: "millamilla@example.com",
    phone: "08123456789",
    createdAt: "01.01.1993",
    verified: true,
  },
  {
    id: 5,
    img: "./one-piece.webp",
    lastName: "Pratiwi",
    firstName: "Syelin",
    email: "syelin123@example.com",
    phone: "08123456789",
    createdAt: "01.01.1994",
  },
  {
    id: 6,
    img: "./one-piece.webp",
    lastName: "Alvaro",
    firstName: "Mollid",
    email: "alvaromoll1212@example.com",
    phone: "08123456789",
    createdAt: "01.01.1995",
    verified: true,
  },
  {
    id: 7,
    img: "./one-piece.webp",
    lastName: "Tadarus",
    firstName: "Derry",
    email: "derrytadarus@example.com",
    phone: "08123456789",
    createdAt: "01.01.1996",
  },
  {
    id: 8,
    img: "./one-piece.webp",
    lastName: "Bunda Eva",
    firstName: "Bunda Farlina",
    email: "bundaeva@example.com",
    phone: "08123456789",
    createdAt: "01.01.1997",
    verified: true,
  },
  {
    id: 9,
    img: "./one-piece.webp",
    lastName: "Armiva",
    firstName: "Dea",
    email: "armi@example.com",
    phone: "08123456789",
    createdAt: "01.01.1998",
  },
  {
    id: 10,
    img: "./one-piece.webp",
    lastName: "Ikram",
    firstName: "Muhammad",
    email: "muhammad@example.com",
    phone: "08123456789",
    createdAt: "01.01.1999",
    verified: true,
  },
  {
    id: 11,
    img: "./one-piece.webp",
    lastName: "Aziz",
    firstName: "Akbar",
    email: "akbarazz@example.com",
    phone: "08123456789",
    createdAt: "01.01.2000",
    verified: true,
  },
  {
    id: 12,
    img: "./one-piece.webp",
    lastName: "Olsa",
    firstName: "Olaf",
    email: "olsaolaf44@example.com",
    phone: "08123456789",
    createdAt: "01.01.2001",
  },
  {
    id: 13,
    img: "./one-piece.webp",
    lastName: "Olif",
    firstName: "Olvin",
    email: "olifolvin674@example.com",
    phone: "08123456789",
    createdAt: "01.01.2002",
  },
  {
    id: 14,
    img: "./one-piece.webp",
    lastName: "Omak",
    firstName: "Olput",
    email: "omakolput55@example.com",
    phone: "08123456789",
    createdAt: "01.01.2003",
  },
];

export const products = [
  {
    id: 1,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp11.000.000.00",
    createdAt: "01.01.2000",
    inStock: true,
  },
  {
    id: 2,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp10.000.000.00",
    createdAt: "01.01.2001",
    inStock: true,
  },
  {
    id: 3,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp9.000.000.00",
    createdAt: "01.01.2002",
    inStock: true,
  },
  {
    id: 4,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp8.000.000.00",
    createdAt: "01.01.2003",
  },
  {
    id: 5,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp7.000.000.00",
    createdAt: "01.01.2004",
    inStock: true,
  },
  {
    id: 6,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp6.000.000.00",
    createdAt: "01.01.2005",
  },
  {
    id: 7,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp5.000.000.00",
    createdAt: "01.01.2006",
    inStock: true,
  },
  {
    id: 8,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp4.000.000.00",
    createdAt: "01.01.2007",
  },
  {
    id: 9,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp3.000.000.00",
    createdAt: "01.01.2008",
    inStock: true,
  },
  {
    id: 10,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp2.000.000.00",
    createdAt: "01.01.2009",
    inStock: true,
  },
  {
    id: 11,
    img: "./one-piece.webp",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "sony",
    price: "Rp1.000.000.00",
    createdAt: "01.01.2010",
  },
];

export const singleUser = {
  id: 1,
  title: "Mollid",
  img: "/",
  info: {
    username: "Mollid321",
    fullname: "Mollid Alvaro",
    email: "mollid6613@example.com",
    phone: "08123456789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Mollid Alvaro purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Mollid Alvaro added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mollid Alvaro purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "Mollid Alvaro reviewed a product",
      time: "1 month ago",
    },
    {
      text: "Mollid Alvaro added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Mollid Alvaro reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "Rp4.500.999",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Mollid Alvaro purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Mollid Alvaro added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Syelind purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Milla reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Derry added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Mollid Alvaro reviewed the product",
      time: "2 months ago",
    },
  ],
};
