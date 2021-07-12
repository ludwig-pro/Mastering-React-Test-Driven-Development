const today = new Date();

export const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  {
    startsAt: at(9),
    firstName: { label: 'First name', value: 'Orange' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
  {
    startsAt: at(10),
    firstName: { label: 'First name', value: 'Frankie' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
  {
    startsAt: at(11),
    firstName: { label: 'First name', value: 'Casey' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
  {
    startsAt: at(12),
    firstName: { label: 'First name', value: 'Ashley' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
  {
    startsAt: at(13),
    firstName: { label: 'First name', value: 'Jordan' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
  {
    startsAt: at(14),
    firstName: { label: 'First name', value: 'Jay' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
  {
    startsAt: at(15),
    firstName: { label: 'First name', value: 'Alex' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
  {
    startsAt: at(16),
    firstName: { label: 'First name', value: 'Jules' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
  {
    startsAt: at(17),
    firstName: { label: 'First name', value: 'Stevie' },
    lastName: { label: 'Last name', value: 'Mechanical' },
    phoneNumber: { label: 'Phone number', value: '3434343434' },
    stylist: { label: 'Stylist', value: 'P!nk' },
    service: { label: 'Service', value: 'Hair cut' },
    note: { label: 'Note', value: 'Another Private note' },
  },
];
