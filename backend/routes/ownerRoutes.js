const express = require("express");
const multer = require("multer");
const path=require("path");

const authMiddlware = require("../middlewares/authMiddlware");

const {
  addPropertyController,
  getAllOwnerPropertiesController,
  deletePropertyController,
  updatePropertyController,
  getAllBookingsController,
  handleAllBookingstatusController,
} = require("../controllers/ownerController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post(
  "/postproperty",
  upload.array("propertyImages"),
  authMiddlware,
  addPropertyController
);

router.get("/getownerproperties", authMiddlware, getAllOwnerPropertiesController);

router.get("/getallbookings", authMiddlware, getAllBookingsController);

router.post("/handlebookingstatus", authMiddlware, handleAllBookingstatusController);

router.delete(
  "/deleteproperty/:id",
  authMiddlware,
  deletePropertyController
);

router.put(
  "/updateproperty/:id",
   authMiddlware,
  upload.single("propertyImage"),
  updatePropertyController
);

module.exports = router;
