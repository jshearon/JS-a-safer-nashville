const businesses = [
  {
    type: 'All Residents',
    phaseNowStatus: 'partial',
    phaseOneStatus: 'partial',
    phaseTwoStatus: 'partial',
    phaseThreeStatus: 'partial',
    phaseFourStatus: 'partial',
    phaseNowNotes: [
      'All residents stay home unless absolutely necessary',
      'All work from home unless essential',
      'Wear masks in public',
      'Schools closed',
      'No gatherings over 10'
    ],
    phaseOneNotes: [
      'Age 65+ and High-risk stay at home',
      'All work from home if possible',
      'All residents wear masks in public',
      'Schools closed',
      'No gatherings over 10'
    ],
    phaseTwoNotes: [
      'Age 65+ and high-risk stay at home',
      'Work from home if possible',
      'Wear masks in public',
      'Schools closed',
      'Small gatherings up to 50 (meetings, religious services, weddings, etc.)'
    ],
    phaseThreeNotes: [
      'Age 65+ and high-risk stay at home',
      'Work from home if possible',
      'Wear masks in public',
      'Non-residential K-12 schools can reopen',
      'Gatherings up to 100 (meetings, religious services, weddings, etc.)'
    ],
    phaseFourNotes: [
      'Age 65+ and high-risk stay home',
      'Work from home is optional',
      'Wearing masks is optional, but recommended',
      'Non-residential K-12 schools can reopen',
      'Gatherings over 100 permitted (meetings, religious services, weddings, etc.)'
    ]
  }, 
  { 
    type: 'Restaurants & Bars Serving Food',
    phaseNowStatus: 'closed',
    phaseOneStatus: 'partial',
    phaseTwoStatus: 'partial',
    phaseThreeStatus: 'open',
    phaseFourStatus: 'open',
    phaseNowNotes: [
      'Only curbside service and takeout'
    ],
    phaseOneNotes: [
      '1/2 capacity',
      'Clean all surfaces after every use',
      'Employees screened daily and required to wear face masks',
      'Bar areas closed and no live music'
    ],
    phaseTwoNotes: [
      'Open at 3/4 capacity',
      'Clean all surfaces after every use',
      'Employees screened daily and required to wear face masks',
      'Bar areas closed and no live music'
    ],
    phaseThreeNotes: [
      'Open at full capacity',
      'Clean all surfaces after every use',
      'Employees screened daily and required to wear face masks',
      'Bars open at 50% capacity',
      'No standing at bars',
      'Live music permitted'
    ],
    phaseFourNotes: [
      'Open at full capacity',
      'Clean all surfaces after every use',
      'Employees screened daily',
      'Employees wearing masks is optional, but recommended'
    ]
  },
  {
    type: 'Bars & Entertainment Venues',
    phaseNowStatus: 'closed',
    phaseOneStatus: 'closed',
    phaseTwoStatus: 'closed',
    phaseThreeStatus: 'partial',
    phaseFourStatus: 'open',
    phaseOneNotes: [
    ],
    phaseTwoNotes: [
    ],
    phaseThreeNotes: [
      'Open at 1/2 Capacity',
      'Includes tours, museums, theaters, etc.',
      'Clean all surfaces after every use',
      'Employees screened daily and required to wear face masks'
    ],
    phaseFourNotes: [
      'Open at full capacity',
      'Clean all surfaces after every use',
      'Employees screened daily',
      'Employees wearing masks is optional, but recommended'
    ]
  },
  {
    type: 'Retail Stores & Commercial Businesses',
    phaseNowStatus: 'closed',
    phaseOneStatus: 'partial',
    phaseTwoStatus: 'partial',
    phaseThreeStatus: 'open',
    phaseFourStatus: 'open',
    phaseNowNotes: [

    ],
    phaseOneNotes: [
      'Open at 1/2 capacity',
      'Employees screened daily and wear face masks'
    ],
    phaseTwoNotes: [
      'Open at 3/4 capacity',
      'Employees screened daily and wear face masks'
    ],
    phaseThreeNotes: [
      'Open at full Capacity',
      'Employees screened daily and wear face masks'
    ],
    phaseFourNotes: [
      'Open at full capacity',
      'Employees screened daily',
      'Employees wearing masks is optional but recommended'
    ]
  }
];
