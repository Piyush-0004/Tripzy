// new

const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware"); // adjust path if needed

// Show dummy payment page
router.get("/:id/pay", isLoggedIn, async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  res.render("bookings/payment", { listing });
});

// Confirm payment and save booking
router.post("/:id/pay", isLoggedIn, async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  const booking = new Booking({
    listing: listing._id,
    user: req.user._id
  });

  await booking.save();

  req.flash("success", "Payment successful. Booking confirmed!");
  res.redirect(`/listings/${listing._id}`);
});

module.exports = router;
