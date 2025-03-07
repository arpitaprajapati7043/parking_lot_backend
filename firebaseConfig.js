// const admin = require('firebase-admin');
// const serviceAccount = require('./config/serviceAccount.json');

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "process.env.FDB_URL"
//   });
//   console.log('Firebase Initialized');
// } catch (error) {
//   console.error('Error initializing Firebase: ', error);
// }

// const db = admin.database(); // Firebase database instance

// module.exports = db; // Export the database instance


// Import required packages
require('dotenv').config(); // Load environment variables from .env file
const admin = require('firebase-admin');

// Setup Firebase credentials using environment variables
const serviceAccount = {
  type: "service_account",
  project_id: "truck-project9",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,  // Store these in .env
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),  // Fix multi-line private key format
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40truck-parking-app-dade9.iam.gserviceaccount.com"
};

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL // Database URL from .env file
  });
  console.log('Firebase Initialized');
} catch (error) {
  console.error('Error initializing Firebase: ', error);
}

const db = admin.database(); // Firebase database instance
module.exports = db; // Export the database instance
