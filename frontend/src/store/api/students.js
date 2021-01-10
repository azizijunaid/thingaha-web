import last from 'lodash/last'
import thingahaApiClient from '../../utils/thingahaApiClient'

const studentsDb = [
  {
    id: 1,
    name: 'naruto-1',
    deactivated_at: null,
    birth_date: '1990-08-02',
    father_name: 'U Aye',
    mother_name: 'Daw Aye',
    parents_occupation: 'Farmer',
    photo: 'http://lorempixel.com/200/240',
    address: {
      id: 1,
      division: 'ayeyarwaddy',
      district: 'Maubin',
      township: 'Nyaungdon',
      street_address: 'Bo Min Road',
    },
  },
  {
    id: 2,
    name: 'naruto-2',
    deactivated_at: null,
    birth_date: '1990-08-01',
    father_name: 'U Aye Aye',
    mother_name: 'Daw Aye Aye',
    parents_occupation: 'Farmer',
    photo: 'http://lorempixel.com/200/240',
    address: {
      id: 2,
      division: 'ayeyarwaddy',
      district: 'Maubin',
      township: 'Nyaungdon',
      street_address: 'Bo Gyoke Road',
    },
  },
  {
    id: 3,
    name: 'naruto-3',
    deactivated_at: null,
    birth_date: '1990-08-03',
    father_name: 'U Mya',
    mother_name: 'Daw Mya',
    parents_occupation: 'Farmer',
    photo: 'http://lorempixel.com/200/240',
    address: {
      id: 3,
      division: 'ayeyarwaddy',
      district: 'Maubin',
      township: 'Nyaungdon',
      street_address: 'Zar Ni Road',
    },
  },
  {
    id: 4,
    name: 'naruto-4',
    deactivated_at: '2020-07-26T03:37:05.836Z',
    birth_date: '1990-08-05',
    father_name: 'U Hla',
    mother_name: 'Daw Hla',
    parents_occupation: 'Teacher',
    photo: 'http://lorempixel.com/200/240',
    address: {
      id: 4,
      division: 'ayeyarwaddy',
      district: 'Maubin',
      township: 'Nyaungdon',
      street_address: 'ABC Road',
    },
  },
]

export const fetchStudent = async (studentId) => {
  const { data } = await thingahaApiClient.get(`/students/${studentId}`)
  return {
    data: {
      student: data.student,
    },
  }
}

export const fetchStudents = async ({ page } = { page: 1 }) => {
  const { data } = await thingahaApiClient.get('/students', {
    params: { page },
  })

  return {
    data: {
      students: data.students,
      total_count: data.total_count,
      total_pages: data.pages,
    },
  }
}

export const createStudent = async (studentFormValues) => {
  const { data } = await thingahaApiClient.post('/students', studentFormValues)

  return {
    student: data.student,
  }
}

export const editStudent = async (studentFormValues) => {
  const { data } = await thingahaApiClient.put(
    `/students/${studentFormValues.id}`,
    studentFormValues
  )

  return {
    student: data.student,
  }
}
