const db =require('../firebaseConfig')
exports.getSlots = async (req, res) => {
  try {
    const slotsRef = db.ref('parking_slots'); // Firebase reference to 'parking_slots'
    slotsRef.once('value', (snapshot) => {
      const slots = snapshot.val(); // Retrieve data
      res.json(slots); // Send response to frontend
    });
  } catch (error) {
    console.error('Error fetching parking slots:', error);
    res.status(500).json({ error: 'Failed to fetch parking slots' });
  }
};
