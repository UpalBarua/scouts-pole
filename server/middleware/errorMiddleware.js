const catchError = (error, req, res, next) => {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "An error occurred", error: error.message });
    next(error);
  };
  
  export default catchError;
  