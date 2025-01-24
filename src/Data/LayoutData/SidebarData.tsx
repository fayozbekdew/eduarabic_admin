import { MenuItem } from "../../Types/Layout/SidebarType";

export const MenuList: MenuItem[] = [
  {
    title: "Umumiy",
    lanClass: "lan-1",
    Items: [
      {
        title: "Statistika",
        id: 1,
        icon: "charts",
        lanClass: "lan-3",
        type:"link",
        active: false,
        path: "/dashboard",
        
      },
      {
        title: "Kurs qo'shish",
        id: 3000,
        icon: "learning",
        type: "sub",
        lanClass: "lan-6",
        active: false,
        children: [
          { path: `/kurs/umumiy`, title: "Umumiy", type: "link" },
          { path: `/kurs/dars`, title: "Dars qo'shish", type: "link" },
          { path: `/kurs/bo'lim`, title: "Bo'lim qo'shish", type: "link" },
          { path: `/kurs/o'chirish`, title: "Kursni o'chirish", type: "link" },
          {
            title: "Darslar uchun testlar",
            active: false,
            lanClass: "lan-7",
            type: "sub",
            children: [
              {
                path: `/kurs/dars/test/qo'shish`,
                title: "Test qo'shish",
                type: "link",
              },
              {
                path: `/kurs/dars/test/sozlash`,
                title: "Testni sozlash",
                type: "link",
              },
            ],
          },
        ],
      },
      {
        title: "Maqola qo'shish",
        id: 3001,
        icon: "builders",
        type: "sub",
        lanClass: "lan-6",
        active: false,
        children: [
          { path: `/blog`, title: "Maqola qo'shish", type: "link" },
          // { path: `/blog/edit`, title: "Maqolani tahrirlash", type: "link" },
          { path: `/blog/delete`, title: "Maqolani o'chirish", type: "link" },
        ],
      },
      {
        title: "O'qituvchilar",
        id: 3002,
        icon: "user",
        type: "sub",
        lanClass: "lan-6",
        active: false,
        children: [
          { path: `/teacher`, title: "O'qituvchi qo'shish", type: "link" },
          // {
          //   path: `/teacher/edit`,
          //   title: "O'qituvchini tahrirlash",
          //   type: "link",
          // },
          {
            path: `/teacher/delete`,
            title: "O'qituvchini o'chirish",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    title: "O'quvchilar",
    lanClass: "lan-8",
    Items: [
      {
        title: "O'quchilar",
        id: 3,
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/project/project_list`,
            type: "link",
            title: "O'quvchi qo'shish",
          },
          {
            path: `/project/create_new`,
            type: "link",
            title: "O'quvchi o'chirish",
          },
          // {
          //   path: `/project/create_new`,
          //   type: "link",
          //   title: "O'quvchi tahrirlash",
          // },
        ],
      },
      {
        title: "Kursga biriktirish",
        id: 6,
        icon: "layout",
        type: "sub",
        active: false,
        children: [
          {
            path: `/ecommerce/add_product`,
            title: "Kursga o'quvchi qo'shish",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    title: "Sozlamalar",
    lanClass: "lan-8",
    Items: [
      {
        title: "Sozlamalar",
        id: 3,
        icon: "project",
        type: "sub",
        active: false,
        children: [
          {
            path: `/project/project_list`,
            type: "link",
            title: "Sozlamalar",
          },
        ],
      },
      {
        title: "Sms habarnoma",
        icon: "email",
        id: 6,
        type: "sub",
        active: false,
        children: [
          {
            path: `/ecommerce/add_product`,
            title: "Sms habarnoma",
            type: "link",
          },
        ],
      },
      // {
      //   title: "support",
      //   icon: "",
      //   id: 6,
      //   type: "sub",
      //   active: false,
      //   children: [
      //     {
      //       // path: `/ecommerce/add_product`,
      //       title: "Sms habarnoma",
      //       type: "link",
      //     },
      //   ],
      // },
    ],
  },
];
