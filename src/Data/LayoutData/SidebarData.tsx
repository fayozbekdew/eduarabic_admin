import { MenuItem } from "../../Types/Layout/SidebarType";

export const MenuList: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    Items: [
      {
        title: "Dashboards",
        id: 1,
        icon: "home",
        type: "sub",
        lanClass: "lan-3",
        children: [
          {
            path: `/dashboard/default`,
            title: "Default",
            type: "link",
            lanClass: "lan-4",
          },
          {
            path: `/dashboard/project`,
            title: "Project",
            type: "link",
            lanClass: "lan-5",
          },
          { path: `/dashboard/ecommerce`, title: "Ecommerce", type: "link" },
          { path: `/dashboard/education`, title: "Education", type: "link" },
        ],
      },
      {
        title: "Widgets",
        id: 2,
        icon: "widget",
        type: "sub",
        lanClass: "lan-6",
        active: false,
        children: [
          { path: `/widgets/general`, title: "General", type: "link" },
          { path: `/widgets/chart`, title: "Chart", type: "link" },
        ],
      },
      {
        title: "Page layout",
        id: 3,
        icon: "layout",
        type: "sub",
        active: false,
        children: [
          {
            path:  `/page_layout/hide_nav_scroll`,
            title: "Hide Nav Scroll",
            type:  "link",
          },
        ],
      },
    ],
  },
  {
    title: "Applications",
    lanClass: "lan-8",
    Items: [
      {
        title: "Project",
        id: 3,
        icon: "project",
        type: "sub",
        active: false,
        children: [
          {
            path: `/project/project_list`,
            type: "link",
            title: "Project-List",
          },
          { path: `/project/create_new`, type: "link", title: "Create New" },
        ],
      },
      {
        path: `/app/file_manager`,
        icon: "file",
        title: "File Manager",
        type: "link",
      },
      {
        title: "Ecommerce",
        id: 6,
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          {
            path: `/ecommerce/add_product`,
            title: "Add Products",
            type: "link",
          },
          { path: `/ecommerce/products`, title: "Products", type: "link" },
          {
            path: `/ecommerce/product_page`,
            title: "Product Page",
            type: "link",
          },
          {
            path: `/ecommerce/product_list`,
            title: "Product List",
            type: "link",
          },
          {
            path: `/ecommerce/payment_details`,
            title: "Payment Detail",
            type: "link",
          },
          {
            path: `/ecommerce/order_history`,
            title: "OrderHistory",
            type: "link",
          },
          {
            title: "Invoice",
            type: "sub",
            children: [
              {
                path: `/ecommerce/invoice/invoice1`,
                title: "Invoice-1",
                type: "link",
              },
              {
                path: `/ecommerce/invoice/invoice2`,
                title: "Invoice-2",
                type: "link",
              },
              {
                path: `/ecommerce/invoice/invoice3`,
                title: "Invoice-3",
                type: "link",
              },
              {
                path: `/ecommerce/invoice/invoice4`,
                title: "Invoice-4",
                type: "link",
              },
              {
                path: `/ecommerce/invoice/invoice5`,
                title: "Invoice-5",
                type: "link",
              },
              {
                path: `/ecommerce/invoice/invoice6`,
                title: "Invoice-6",
                type: "link",
              },
            ],
          },
          { path: `/ecommerce/cart`, title: "Cart", type: "link" },
          { path: `/ecommerce/wishlist`, title: "Wishlist", type: "link" },
          { path: `/ecommerce/checkout`, title: "Checkout", type: "link" },
          { path: `/ecommerce/pricing`, title: "Pricing", type: "link" },
        ],
      },
      {
        path: `/email/letter_box`,
        icon: "email",
        title: "Letter Box",
        type: "link",
        id: 7,
      },
      {
        title: "Chat",
        id: 8,
        icon: "chat",
        type: "sub",
        active: false,
        children: [
          { path: `/chat/private_chat`, type: "link", title: "Private Chat" },
          { path: `/chat/group_chat`, type: "link", title: "Group Chat" },
        ],
      },
      {
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          { path: `/users/user_profile`, type: "link", title: "User Profile" },
          { path: `/users/user_edit`, type: "link", title: "User Edit" },
          { path: `/users/cards`, type: "link", title: "User Cards" },
        ],
      },
      {
        path: `/app/bookmark`,
        icon: "bookmark",
        type: "link",
        title: "Bookmark",
        id: 10,
      },
      {
        path: `/app/contacts`,
        title: "Contact",
        icon: "contact",
        type: "link",
        id: 11,
        active: false,
      },
      { path: `/app/task`, icon: "task", type: "link", title: "Task" },
      {
        path: `/app/calendar`,
        icon: "calendar",
        type: "link",
        title: "Calendar",
      },
      {
        path: `/app/social_app`,
        icon: "social",
        type: "link",
        title: "Social App",
      },
      { path: `/app/todo`, icon: "to-do", type: "link", title: "Todo" },
      {
        path: `/app/search_result`,
        icon: "search",
        type: "link",
        title: "Search Result",
      },
    ],
  },
  {
    title: "Forms & Table",
    Items: [
      {
        title: "Forms",
        id: 17,
        icon: "form",
        type: "sub",
        active: false,
        children: [
          {
            title: "Form Controls",
            type: "sub",
            children: [
              {
                title: "Form Validation",
                type: "link",
                path: `/forms/forms_controls/form_validation`,
                bookmark: true,
              },
              {
                title: "Base Inputs",
                type: "link",
                path: `/forms/forms_controls/base_input`,
              },
              {
                title: "Checkbox & Radio",
                type: "link",
                path: `/forms/forms_controls/radio_checkbox`,
              },
              {
                title: "Input Groups",
                type: "link",
                path: `/forms/forms_controls/input_groups`,
              },
              {
                title: "Input Mask",
                type: "link",
                path: `/forms/forms_controls/input_mask`,
              },
              {
                title: "Mega Option",
                type: "link",
                path: `/forms/forms_controls/mega_option`,
              },
            ],
          },
          {
            title: "Form Widget",
            type: "sub",
            children: [
              {
                title: "Datepicker",
                type: "link",
                path: `/forms/forms_widget/datepicker`,
              },
              {
                title: "Touchspin",
                type: "link",
                path: `/forms/forms_widget/touchspin`,
              },
              {
                title: "Switch",
                type: "link",
                path: `/forms/forms_widget/switch`,
              },
              {
                title: "Typeahead",
                type: "link",
                path: `/forms/forms_widget/typeahead`,
              },
              {
                title: "Clipboard",
                type: "link",
                path: `/forms/forms_widget/clipboard`,
              },
            ],
          },
          {
            title: "Form Layout",
            type: "sub",
            children: [
              {
                path: `/forms/forms_layout/form_wizard_1`,
                title: "Form Wizard 1",
                type: "link",
              },
              {
                path: `/forms/forms_layout/form_wizard_2`,
                title: "Form Wizard 2",
                type: "link",
              },
              {
                path: `/forms/forms_layout/two_factor`,
                title: "Two factor",
                type: "link",
              },
            ],
          },
        ],
      },

      {
        title: "Table",
        icon: "table",
        id: 18,
        type: "sub",
        children: [
          {
            title: "Bootstrap Tables",
            type: "sub",
            children: [
              {
                title: "Basic Tables",
                type: "link",
                path: `/table/reactstrap_table/basic_table`,
              },
              {
                title: "Table Components",
                type: "link",
                path: `/table/reactstrap_table/table_component`,
              },
            ],
          },
          {
            title: "Data Tables",
            type: "sub",
            children: [
              {
                path: `/table/data_table/basic_init`,
                title: "Basic Init",
                type: "link",
              },
              {
                path: `/table/data_table/advance_init`,
                title: "Advance Init",
                type: "link",
              },
              { path: `/table/data_table/api`, title: "API", type: "link" },
              {
                path: `/table/data_table/data_sources`,
                title: "Data Source",
                type: "link",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Components",
    Items: [
      {
        title: "Ui-Kits",
        icon: "ui-kits",
        id: 19,
        type: "sub",
        active: false,
        children: [
          { path: `/uikits/typography`, title: "Typography", type: "link" },
          { path: `/uikits/avatars`, title: "Avatars", type: "link" },
          {
            path: `/uikits/helperclass`,
            title: "Helper Classes",
            type: "link",
          },
          { path: `/uikits/grid`, title: "Grid", type: "link" },
          { path: `/uikits/tagpills`, title: "Tag & Pills", type: "link" },
          { path: `/uikits/progress`, title: "Progress", type: "link" },
          { path: `/uikits/modal`, title: "Modal", type: "link" },
          { path: `/uikits/alert`, title: "Alert", type: "link" },
          { path: `/uikits/popover`, title: "Popover", type: "link" },
          { path: `/uikits/tooltip`, title: "Tooltip", type: "link" },
          { path: `/uikits/dropdown`, title: "Dropdown", type: "link" },
          { path: `/uikits/accordion`, title: "Accordion", type: "link" },
          { path: `/uikits/tabs`, title: "Tabs", type: "link" },
          { path: `/uikits/list`, title: "Lists", type: "link" },
        ],
      },

      {
        title: "Bonus-Ui",
        icon: "bonus-kit",
        id: 20,
        type: "sub",
        active: false,
        children: [
          { path: `/bonusui/scrollable`, title: "Scrollable", type: "link" },
          { path: `/bonusui/tree_view`, title: "Tree View", type: "link" },
          { path: `/bonusui/toasts`, title: "Toasts", type: "link" },
          { path: `/bonusui/rating`, title: "Rating", type: "link" },
          { path: `/bonusui/dropzone`, title: "Dropzone", type: "link" },
          { path: `/bonusui/tour`, title: "Tour ", type: "link" },
          { path: `/bonusui/sweet_alert2`, title: "SweetAlert2", type: "link" },
          {
            path: `/bonusui/owl_carousel`,
            title: "Owl Carousel",
            type: "link",
          },
          { path: `/bonusui/ribbons`, title: "Ribbons", type: "link" },
          { path: `/bonusui/pagination`, title: "Pagination", type: "link" },
          { path: `/bonusui/breadcrumb`, title: "Breadcrumb", type: "link" },
          { path: `/bonusui/range_slider`, title: "RangeSlider", type: "link" },
          {
            path: `/bonusui/image_cropper`,
            title: "ImageCropper",
            type: "link",
          },
          { path: `/bonusui/basic_cards`, title: "Basic Card", type: "link" },
          {
            path: `/bonusui/creative_cards`,
            title: "Creative Card",
            type: "link",
          },
          { path: `/bonusui/timeline`, title: "Timeline", type: "link" },
        ],
      },

      {
        title: "Icons",
        icon: "icons",
        id: 21,
        type: "sub",
        active: false,
        children: [
          { path: `/icons/flag_icons`, title: "Flag Icon", type: "link" },
          {
            path: `/icons/fontawesome_icon`,
            title: "Fontawesome Icon",
            type: "link",
          },
          { path: `/icons/ico_icon`, title: "Ico Icon", type: "link" },
          { path: `/icons/themify_icon`, title: "Themify Icon", type: "link" },
          { path: `/icons/feather_icon`, title: "Feather Icon", type: "link" },
          { path: `/icons/weather_icon`, title: "Weather Icon", type: "link" },
        ],
      },

      {
        title: "Buttons",
        icon: "button",
        id: 22,
        type: "sub",
        active: false,
        children: [
          {
            path: `/buttons/default_style`,
            title: "Default Style",
            type: "link",
          },
          { path: `/buttons/flat_style`, title: "Flat Style", type: "link" },
          { path: `/buttons/edge_style`, title: "Edge Style", type: "link" },
          {
            path: `/buttons/raised_style`,
            title: "Raised Style",
            type: "link",
          },
          {
            path: `/buttons/button_group`,
            title: "Button Group",
            type: "link",
          },
        ],
      },

      {
        title: "Charts",
        icon: "charts",
        type: "sub",
        id: 23,
        active: false,
        children: [
          { path: `/charts/apex_chart`, type: "link", title: "Apex Chart" },
          { path: `/charts/google_chart`, type: "link", title: "Google Chart" },
          {
            path: `/charts/chartjs_chart`,
            type: "link",
            title: "Chartjs Chart",
          },
        ],
      },
    ],
  },
  {
    title: "Pages",
    Items: [
      {
        icon: "sample-page",
        id: 24,
        active: false,
        path: `/pages/sample_page`,
        title: "Sample Page",
        type: "link",
      },
      {
        title: "Others",
        icon: "others",
        id: 25,
        type: "sub",
        children: [
          {
            title: "Error Pages",
            type: "sub",
            children: [
              { title: "Error 400", type: "link", path: `/errors/error_400` },
              { title: "Error 401", type: "link", path: `/errors/error_401` },
              { title: "Error 403", type: "link", path: `/errors/error_403` },
              { title: "Error 404", type: "link", path: `/errors/error_404` },
              { title: "Error 500", type: "link", path: `/errors/error_500` },
              { title: "Error 503", type: "link", path: `/errors/error_503` },
            ],
          },
          {
            title: "Authentication",
            type: "sub",
            children: [
              {
                title: "Login Simple",
                type: "link",
                path: `/authentication/login_simple`,
              },
              {
                title: "Login with bg image",
                type: "link",
                path: `/authentication/login_bg_image`,
              },
              {
                title: "Login with image two",
                type: "link",
                path: `/authentication/login_with_image_two`,
              },
              {
                title: "Login with validation",
                type: "link",
                path: `/authentication/login_validation`,
              },
              {
                title: "Login with tooltip",
                type: "link",
                path: `/authentication/login_tooltip`,
              },
              {
                title: "Login with sweetalert",
                type: "link",
                path: `/authentication/login_sweetalert`,
              },
              {
                title: "Register Simple",
                type: "link",
                path: `/authentication/register_simple`,
              },
              {
                title: "Register with Bg Image",
                type: "link",
                path: `/authentication/register_bg_image`,
              },
              {
                title: "Register with Bg Two",
                type: "link",
                path: `/authentication/register_with_image_two`,
              },
              {
                title: "Register Wizard",
                type: "link",
                path: `/authentication/register_wizard`,
              },
              {
                title: "Unloack User",
                type: "link",
                path: `/authentication/unlock_user`,
              },
              {
                title: "Forget Password",
                type: "link",
                path: `/authentication/forget_password`,
              },
              {
                title: "Reset Password",
                type: "link",
                path: `/authentication/reset_password`,
              },
              {
                title: "Maintenance",
                type: "link",
                path: `/authentication/maintenance`,
              },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",
            children: [
              {
                title: "Coming Simple",
                type: "link",
                path: `/comingsoon/coming_soon_simple`,
              },
              {
                title: "Coming with Bg Video",
                type: "link",
                path: `/comingsoon/coming_bg_video`,
              },
              {
                title: "Coming with bg Image",
                type: "link",
                path: `/comingsoon/coming_bg_img`,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Miscellaneous",
    Items: [
      {
        title: "Gallery",
        icon: "gallery",
        id: 26,
        type: "sub",
        active: false,
        children: [
          {
            path: `/gallery/gallery_grids`,
            title: "Gallery Grids",
            type: "link",
          },
          {
            path: `/gallery/gallery_grid_desc`,
            title: "Gallery Grid Desc",
            type: "link",
          },
          {
            path: `/gallery/masonry_gallery`,
            title: "Masonry Gallery",
            type: "link",
          },
          {
            path: `/gallery/masonry_with_desc`,
            title: "Masonry With Desc",
            type: "link",
          },
          {
            path: `/gallery/hover_effect`,
            title: "Hover Effect",
            type: "link",
          },
        ],
      },

      {
        title: "Blog",
        icon: "blog",
        id: 27,
        type: "sub",
        active: false,
        children: [
          { path: `/blog/blog_details`, title: "Blog Details", type: "link" },
          { path: `/blog/blog_single`, title: "Blog Single", type: "link" },
          { path: `/blog/add_post`, title: "Add Post", type: "link" },
        ],
      },
      {
        path: `/fag/faq`,
        icon: "faq",
        type: "link",
        active: false,
        title: "FAQ",
      },
      {
        title: "JobSearch",
        icon: "job-search",
        id: 28,
        type: "sub",
        active: false,
        children: [
          { path: `/job_search/card_view`, title: "Cards View", type: "link" },
          { path: `/job_search/list_view`, title: "List View", type: "link" },
          { path: `/job_search/job_detail`, title: "Job Detail", type: "link" },
          { path: `/job_search/apply`, title: "Apply", type: "link" },
        ],
      },
      {
        title: "Learning",
        icon: "learning",
        id: 29,
        type: "sub",
        active: false,
        children: [
          {
            path: `/learning/learning_list`,
            title: "Learning List",
            type: "link",
          },
          {
            path: `/learning/learning_course`,
            title: "Detailed Course",
            type: "link",
          },
        ],
      },
      {
        title: "Map",
        icon: "maps",
        type: "sub",
        id: 30,
        active: false,
        children: [
          { path: `/map/google_map`, type: "link", title: "Google Map" },
          { path: `/map/leaflet_map`, type: "link", title: "Leaflet Map" },
        ],
      },
      {
        title: "Editor",
        id: 31,
        icon: "editors",
        type: "sub",
        active: false,
        children: [
          { path: `/editor/ck_editor`, type: "link", title: "CK Editor" },
          { path: `/editor/mde_editor`, type: "link", title: "MDE Editor" },
          { path: `/editor/ace_editor`, type: "link", title: "ACE Editor" },
        ],
      },
      {
        id: 32,
        path: `/knowledgebase/knowledgebase`,
        icon: "knowledgebase",
        type: "link",
        active: false,
        title: "Knowledgebase",
      },
      {
        id: 33,
        path: `/support_ticket/support_ticket`,
        icon: "support-tickets",
        type: "link",
        active: false,
        title: "SupportTicket",
      },
    ],
  },
];
