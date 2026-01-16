import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    //  here we just kept it simple
    // in a real world app you'd like to put the userId or ipAddress as your key. 
    // User ID and IP Address - or production purposes.
    const { success } = await ratelimit.limit("my-rate-limit");
    if (!success) {
      return res.status(429).json({
        messase: "Too many requests, please try again later",
      });
    }
    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
