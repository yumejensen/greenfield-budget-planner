// SAMPLE DATA FOR TESTING

// TRIPS
const tripsSample = [
  {
    title: 'New Orleans',
    start: '2025/08/30',
    end: '2025/09/07',
    nativeCurrency: 'USD',
    foreignCurrency: 'USD',
    budget: 2500,
  },
  {
    title: 'Tokyo Disneyland',
    start: '2025/12/11',
    end: '2025/12/29',
    nativeCurrency: 'USD',
    foreignCurrency: 'JPY',
    budget: 6000,
  }
];

// EVENTS
const eventsNewOrleans = [
  {
    eventDay: '2025/08/30',
    time: '11:30',
    title: 'Lunch',
    description: 'Meeting up with the group at LaMadeline',
    location: '601 S Carrollton Ave, New Orleans, LA 70118'
  },
  {
    eventDay: '2025/08/30',
    time: '15:00',
    title: 'Coffee',
    description: 'Refreshing with afternoon coffee!',
    location: '2801 Magazine St, New Orleans, LA 70115'
  },
  {
    eventDay: '2025/08/30',
    time: '20:15',
    title: 'Dinner at Houston\'s',
    description: 'Park at the restaurant and meet with the family',
    location: '1755 St Charles Ave, New Orleans, LA 70130'
  }
];

const eventsTokyo = [
  {
    eventDay: '2025/12/12',
    time: '08:30',
    title: 'Rope drop Tokyo Disney',
    description: 'Be at Disneyland in time for rope drop!',
    location: '1-1 Maihama, Urayasu, Chiba 279-0031, Japan'
  },
  {
    eventDay: '2025/12/12',
    time: '09:15',
    title: 'Splash Mountain',
    description: 'Be at splash mountain for lightning lane',
    location: '1-1 Maihama, Urayasu, Chiba 279-0031, Japan'
  },
  {
    eventDay: '2025/12/12',
    time: '10:45',
    title: 'Character Breakfast',
    description: 'Be at Disneyland in time for rope drop!',
    location: '1-1 Maihama, Urayasu, Chiba 279-0031, Japan'
  }
];

// TRANSACTIONS
const transactionsNewOrleans = [
  {
    amount: 25.60,
    currencyName: 'USD',
    details: 'Lunch at LaMadeline',
    createdAt: '2025/08/30 12:45'
  },
  {
    amount: 15.24,
    currencyName: 'USD',
    details: 'Keychain from boardwalk',
    createdAt: '2025/08/30 13:22'
  },
  {
    amount: 12.35,
    currencyName: 'USD',
    details: 'Coffee',
    createdAt: '2025/08/30 15:13'
  }
];

const transactionsTokyo = [

];

module.exports = {
  tripsSample,
  eventsNewOrleans,
  eventsTokyo,
  transactionsNewOrleans,
  transactionsTokyo
};
