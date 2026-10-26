
export const img = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const school = {
  name: 'Kontoh Educational Complex',
  shortName: 'Kontoh',
  motto: 'Strong foundations for every child.', // school motto
  address: ['Ejisu-Fumesua', 'Ashanti Region', 'Ghana'],
  phone: '+233 598 559 814', // Phone number
  phoneLink: '+233598559814', // digits only, with country code
  whatsapp: '233243321512', // digits only, no + sign
  email: 'info@kecomplex.org', // this email also receives the contact form messages
  hours: [
    { days: 'Monday to Friday', time: '7:00 am to 4:00 pm' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],
  formspreeId: 'myeeyqpr', //FormSpree ID goes here

  social: {
    facebook: '', // paste full URLs, leave empty to hide
    instagram: '',
    youtube: '',
  },
}

// Home page slideshow.
export const carousel = [
  { file: 'web/img/classroom-teaching.webp', alt: 'A teacher supporting pupils during a classroom lesson', title: 'Learning together', text: 'A look inside the classroom at Kontoh Educational Complex.' },
  { file: 'web/img/pupils-together.webp', alt: 'Pupils in yellow school shirts gathered in the courtyard', title: 'Our school community', text: 'Pupils come together in the school courtyard.' },
  { file: 'web/img/choreography-performance.webp', alt: 'Pupils performing a choreographed dance in the courtyard', title: 'Taking the stage', text: 'Pupils share their choreography performance.' },
  { file: 'web/img/girls-club.webp', alt: 'Girls and adults gathered beneath an empowering girls and women banner', title: 'Girls Club', text: 'A moment from our Girls Club activities.' },
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
// Gallery images
export const galleryCategories = ['Classroom', 'School activities', 'Clubs', 'Visits', 'Campus']

export const gallery = [
  { file: 'web/img/writing-practice.webp', alt: 'A teacher sitting beside a pupil and guiding her writing in an exercise book', caption: 'Writing practice with teacher support', category: 'Classroom' },
  { file: 'web/img/classroom-lesson.webp', alt: 'A teacher leaning over a desk to help pupils with their books during a lesson', caption: 'Working through a lesson together', category: 'Classroom' },
  { file: 'web/img/school-march.webp', alt: 'Pupils in blue school uniforms marching along a street with adults nearby', caption: 'Pupils taking part in a school march', category: 'School activities' },
  { file: 'web/img/early-years-learning.webp', alt: 'A teacher helping young pupils with their books around classroom tables', caption: 'Learning with teacher support', category: 'Classroom' },
  { file: 'web/img/girls-club.webp', alt: 'Girls and adults gathered beneath an empowering girls and women banner', caption: 'Girls Club', category: 'Clubs' },
  { file: 'web/img/campus-entrance.webp', alt: 'School entrance, buildings and courtyard', caption: 'Our school campus', category: 'Campus' },
  { file: 'web/img/classroom-teaching.webp', alt: 'A teacher supporting pupils during a classroom lesson', caption: 'Classroom learning', category: 'Classroom' },
  { file: 'web/img/classroom-activity.webp', alt: 'Pupils taking part in a classroom activity beside their desks', caption: 'Taking part in class', category: 'Classroom' },
  { file: 'web/img/early-years-classroom.webp', alt: 'Young pupils and a teacher in a classroom with colourful furniture and wall drawings', caption: 'Our Early Years classroom', category: 'Classroom' },
  { file: 'web/img/school-assembly.webp', alt: 'Pupils and adults gathered in a large circle in the school courtyard', caption: 'School assembly', category: 'School activities' },
  { file: 'web/img/school-group.webp', alt: 'A large school group gathered outside the school buildings', caption: 'Together at school', category: 'School activities' },
  { file: 'web/img/school-community.webp', alt: 'Pupils waving outside the school building', caption: 'Our school community', category: 'School activities' },
  { file: 'web/img/pupils-together.webp', alt: 'Pupils in yellow school shirts gathered in the courtyard', caption: 'Pupils together', category: 'School activities' },
  { file: 'web/img/choreography-performance.webp', alt: 'Pupils performing a choreographed dance in the courtyard', caption: 'Choreography performance', category: 'School activities' },
  { file: 'web/img/career-costumes.webp', alt: 'A group of pupils wearing military-style career costumes', caption: 'Pupils in career costumes', category: 'School activities' },
  { file: 'web/img/school-procession-banner.webp', alt: 'Pupils walking outdoors behind a Kontoh Educational Complex banner', caption: 'School procession', category: 'School activities' },
  { file: 'web/img/school-procession.webp', alt: 'Pupils in school uniform walking in a procession along a road', caption: 'Pupils on procession', category: 'School activities' },
  { file: 'web/img/jhs-catering-group.webp', alt: 'JHS pupils in catering aprons and chef hats outside the school', caption: 'JHS catering group', category: 'School activities' },
  { file: 'web/img/helicopter-visit.webp', alt: 'Pupils and adults posing beside a helicopter', caption: 'A visit to see a helicopter', category: 'Visits' },
  { file: 'web/img/group-outing.webp', alt: 'A group in yellow shirts gathered beneath a large tree', caption: 'A group outing', category: 'Visits' },
  { file: 'web/img/campus-courtyard.webp', alt: 'School buildings and courtyard', caption: 'The school courtyard', category: 'Campus' },
  { file: 'web/img/school-building.webp', alt: 'A two-storey school building with blue railings and an outdoor staircase', caption: 'Our school building', category: 'Campus' },
]

const galleryImage = (name) => gallery.find((photo) => photo.file === `web/img/${name}.webp`)

// Choose level images explicitly so unrelated gallery additions cannot change them.
export const levelImages = {
  early: ['early-years-learning', 'early-years-classroom', 'classroom-activity'].map(galleryImage),
  primary: ['writing-practice', 'classroom-lesson', 'school-assembly'].map(galleryImage),
  // Campus views stand in until Francis supplies a suitable JHS photograph.
  jhs: ['campus-entrance', 'school-building'].map(galleryImage),
}

export const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.207601042497!2d-1.5268119!3d6.7329742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ae587e970de1f09!2sKONTOH%20EDUCATIONAL%20COMPLEX!5e0!3m2!1sen!2sgh!4v1672112108043!5m2!1sen!2sgh'
