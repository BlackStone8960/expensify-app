import moment from 'moment';

export default [{
  id: '1',
  description: 'water',
  note: '',
  amount: 100,
  createdAt: 0
}, {
  id: '2',
  description: 'PC',
  note: '',
  amount: 150000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Humberger',
  note: '',
  amount: 300,
  createdAt: moment(0).add(4, 'days').valueOf()
}];