// new

const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware");

// GET: Show dummy payment page
router.get("/:id/pay", isLoggedIn, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }
    res.render("bookings/payment", { listing });
  } catch (err) {
    console.error("Error loading payment page:", err);
    req.flash("error", "Something went wrong.");
    res.redirect("/listings");
  }
});

// POST: Simulate payment and confirm booking
router.post("/:id/pay", isLoggedIn, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    const booking = new Booking({
      listing: listing._id,
      user: req.user._id,
    });

    await booking.save();

    req.flash("success", "✅ Payment successful! Your booking has been confirmed.");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.error("Error during payment confirmation:", err);
    req.flash("error", "Booking failed. Please try again.");
    res.redirect(`/listings/${req.params.id}`);
  }
});

module.exports = router;
