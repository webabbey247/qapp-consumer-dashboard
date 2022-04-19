export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: require("../assets/images/dashboard-icon.png"),
  },
  {
    title: "Services",
    path: "/services",
    icon: require("../assets/images/services-icon.png"),
    iconClosed: require("../assets/images/menu-dropdown-right-icon.png"),
    iconOpened: require("../assets/images/menu-dropdown-icon.png"),
    subNav: [
      {
        title: "Deposit",
        path: "/services/deposit",
      },
      {
        title: "Withdrawal",
        path: "/services/withdrawal",
      },
      {
        title: "Transfer",
        path: "/services/transfer",
      },
    ],
  },
  {
    title: "Cards",
    path: "/cards",
    icon: require("../assets/images/cc-icon.png"),
    iconClosed: require("../assets/images/menu-dropdown-right-icon.png"),
    iconOpened: require("../assets/images/menu-dropdown-icon.png"),
    subNav: [
      {
        title: "Debit Cards",
        path: "/cards/debit-cards",
      },
      {
        title: "Credit Cards",
        path: "/card/credit-cards",
      },
    ],
  },
  {
    title: "Loans",
    path: "/loans",
    icon: require("../assets/images/money-icon.png"),
  },
  {
    title: "Investment",
    path: "/investment",
    icon: require("../assets/images/agent-icon.png"),
  },
  {
    title: "Donations",
    path: "/donations",
    icon: require("../assets/images/money-icon.png"),
  },
  {
    title: "Utility",
    path: "/utility",
    icon: require("../assets/images/utility-icon-1.png"),
  },
  {
    title: "Settings",
    path: "/settings",
    icon: require("../assets/images/settings-icon.png"),
  },
];
