
import {records, screening, user, apps} from '../assets'

export const navLinks = [
  {
    name : 'Dashboard',
    imageUrl : apps,
    path : '/'
  },
  {
    name : 'Records',
    imageUrl : records,
    path : '/medical-records'
  },
  {
    name : 'Screening',
    imageUrl : screening,
    path : '/screening-schedules'
  },
  {
    name : 'Profile',
    imageUrl : user,
    path : '/profile'
  }
  
]