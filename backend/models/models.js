const { Schema } = require("mongoose");

const userSchema = Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  emailAddress: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  userCV: {
    type: Array,
    default: [],
  },
  userResume: {
    type: Array,
    default: [],
  },
  userFeedback: {
    type: Array,
    default: [],
  },
});

const resumeSchema = Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  designation: {
    type: String,
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
  },
  skills: {
    type: Map,
    default: {},
  },
  education: {
    type: Array,
    default: [],
  },
  projects: {
    type: Array,
    default: [],
  },
  contactDetails: {
    type: Map,
    default: {},
  },
  languages: {
    type: Array,
    default: [],
  },
  interests: {
    type: Array,
    default: [],
  },
  certifications: {
    type: Array,
    default: [],
  },
});

const cvSchema = Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  designation: {
    type: String,
    trim: true,
  },
  aboutMe: {
    type: String,
    trim: true,
  },
  skills: {
    type: Map,
    default: {},
  },
  detailedEducation: {
    type: Array,
    default: [],
  },
  projects: {
    type: Array,
    default: [],
  },
  contactDetails: {
    type: Map,
    default: {},
  },
  languages: {
    type: Array,
    default: [],
  },
  interests: {
    type: Array,
    default: [],
  },
  certifications: {
    type: Array,
    default: [],
  },
  workExperience: {
    type: Array,
    default: [],
  },
});

const feedbackSchema = Schema({
    emojis: {
        type: Map,
        default: {}
    },
    comments : {
        type: String,
        required: true
    },
    type: {
        type: Map,
        required: true
    }
})