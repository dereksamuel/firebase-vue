const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

/**
 * Create user in firestore when is created in authentication
 */
exports.sendWelcome = functions.auth.user().onCreate((event) => {
  // Get the uid and display name of the newly created user.
  const uid = event.uid
  console.log('Creating...', event)
  return admin.firestore().collection('usuario').get().then(
    users => {
      let value = false
      const user = event
      const recUsers = users.size
      console.log('How many users?', recUsers)
      if (!recUsers) value = true // First value
      let objetobase = {
        estado: true,
        uid_fb_user: uid,
        tipo: value ? 'super' : 'basico',
        propiedades: {},
        user: JSON.parse(JSON.stringify(user)),
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
      console.log('To save', objetobase)
      return admin.firestore().collection('usuario').doc('user_' + uid).set(objetobase)
    }
  ).then((dt) => {
    console.log('Document successfully written!', dt)
    return dt
  }).catch((error) => {
    console.error('Error writing document: ', error)
  })
})

exports.sendBye = functions.auth.user().onDelete((event) => {
  const uid = event.uid
  console.log('Deleting...', event)
  return admin.firestore().collection('usuario').doc('user_' + uid).delete()
    .then((dt) => {
      console.log('Document successfully deleted!', dt)
      return dt
    }).catch((error) => {
      console.error('Error removing document: ', error)
    })
})
