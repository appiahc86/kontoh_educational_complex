
export const img = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const school = {
  name: 'Kontoh Educational Complex',
  shortName: 'Kontoh',
  motto: 'Strong foundations for every child.', // school motto
  address: ['Ejisu-Fumesua', 'Ashanti Region', 'Ghana'],
  phone: '+233 598 559 814', // Phone number
  phoneLink: '+233598559814', // digits only, with country code
  whatsapp: '233243321512', // digits only, no + sign
  email: 'kontohschool@gmail.com', // this email also receives the contact form messages
  hours: [
    { days: 'Monday to Friday', time: '7:00 am to 4:00 pm' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],
  formspreeId: '', //FormSpree ID goes here

  social: {
    facebook: '', // paste full URLs, leave empty to hide
    instagram: '',
    youtube: '',
  },
}

// Home page slideshow.
export const carousel = [
  { file: 'carousel-1.jpg', alt: 'Pupils in a bright classroom', title: 'Lessons that engage', text: 'Small classes and caring teachers help every child take part.' },
  { file: 'carousel-2.jpg', alt: 'Children playing on the field', title: 'Room to play and grow', text: 'Sports and games build teamwork, health and school spirit.' },
  { file: 'carousel-3.jpg', alt: 'Pupils in traditional dress on cultural day', title: 'Proud of our culture', text: 'Cultural days celebrate Ghanaian music, dress and tradition.' },
  { file: 'carousel-4.jpg', alt: 'Graduating students with certificates', title: 'Ready for the next step', text: 'Our JHS students are prepared for the BECE and senior high school.' },
]

export const levels = [
  { name: 'Creche and Nursery', ages: 'Ages 2 to 3', text: 'Gentle, play-based days where children build confidence, language and friendships.' },
  { name: 'Kindergarten', ages: 'Ages 4 to 5', text: 'Early reading, numbers, creative play and the habits that make school feel familiar.' },
  { name: 'Primary School', ages: 'Basic 1 to 6', text: 'The full Ghana Education Service curriculum with strong reading, maths and science.' },
  { name: 'Junior High School', ages: 'Basic 7 to 9', text: 'Focused teaching and regular practice to prepare students for the BECE and senior high school.' },
]

export const reasons = [
  { icon: 'bi-book', title: 'Teaching that follows the curriculum', text: 'Lessons follow the national curriculum, with regular assessments so parents always know how their child is doing.' },
  { icon: 'bi-people', title: 'Teachers who know every child', text: 'Our classes are kept to a size where each teacher can notice who needs help and who is ready for more.' },
  { icon: 'bi-shield-check', title: 'A safe, disciplined campus', text: 'Respect, punctuality and care for others are part of every school day, from the gate to the classroom.' },
  { icon: 'bi-trophy', title: 'More than the classroom', text: 'Sports, culture, clubs and school events help children discover talents beyond exams.' },
]

export const values = [
  { icon: 'bi-lightbulb', title: 'Curiosity', text: 'We encourage children to ask questions and look for answers.' },
  { icon: 'bi-hand-thumbs-up', title: 'Respect', text: 'We teach children to value elders, teachers, classmates and property.' },
  { icon: 'bi-award', title: 'Excellence', text: 'We expect honest effort and celebrate progress as well as top marks.' },
  { icon: 'bi-heart', title: 'Service', text: 'We prepare children to contribute to their families and communities.' },
]

export const facilities = [
  'Bright, well-ventilated classrooms',
  'Science and ICT corner',
  'School library and reading area',
  'Playground and sports field',
  'Clean water and washrooms',
  'Safe, fenced compound',
]

export const leaders = [
  { name: 'Mr Emmanuel Essien', role: 'Headteacher', photo: 't1.jpg' }, // [PLACEHOLDER]
  { name: 'Mr Ernest Yeboah', role: 'Assistant Headteacher, Academics', photo: 't2.jpg' },
  { name: 'Mr Bright Annan', role: 'Head of Junior High School', photo: 't3.jpg' },
]

// Gallery images
export const galleryCategories = ['Classroom', 'Sports', 'Events', 'Campus']

export const gallery = [
  { file: 'g1.jpg', alt: 'Pupils reading in class', caption: 'Reading time in Primary', category: 'Classroom' },
  { file: 'g2.jpg', alt: 'Students working in a science lesson', caption: 'Breaktime in classroom', category: 'Classroom' },
  { file: 'g3.jpg', alt: 'Children running on the sports field', caption: 'Inter-house sports day', category: 'Sports' },
  { file: 'g4.jpg', alt: '6th March rehearsals', caption: 'Football on the school field', category: 'Sports' },
  { file: 'g5.jpg', alt: 'Pupils performing in traditional dress', caption: 'Cultural day performance', category: 'Events' },
  { file: 'g6.jpg', alt: 'Graduation ceremony', caption: 'Graduation day', category: 'Events' },
  { file: 'g7.jpg', alt: 'The front of the school building', caption: 'The school entrance', category: 'Campus' },
  { file: 'g8.jpg', alt: 'The school compound', caption: 'The school compound', category: 'Campus' },
  { file: 'g9.jpg', alt: 'Kindergarten children at play', caption: 'Kindergarten playtime', category: 'Classroom' },
]
