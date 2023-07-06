const signout = async (req, res) =>{
    const { email } = req.body;
  
    try {
      // Find the user by email and delete it
      await form.findOneAndDelete({ email });
  
      res.json({ message: 'User signed out successfully.' });
    } catch (error) {
      console.error('Error signing out:', error);
      res.status(500).json({ error: 'An error occurred while signing out.' });
    }

}