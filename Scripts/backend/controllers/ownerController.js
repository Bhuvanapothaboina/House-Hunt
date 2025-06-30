const bookingSchema = require("../schemas/bookingModel");
const propertySchema = require("../schemas/propertyModel");
const userSchema = require("../schemas/userModel");

//////////adding property by owner////////
const addPropertyController = async (req, res) => {
  try {
    let images = [];
    if (req.files) {
      images = req.files.map((file) => ({
        filename: file.filename,
        path: `/uploads/${file.filename}`,
      }));
    }

    const user = await userSchema.findById(req.userId);
    if (!user || user.granted!="granted"){
      return res.status(403).send({success:false,
        message:"Owner is not granted"
      });
    }


    const newPropertyData = new propertySchema({
      ...req.body,
      propertyImage: images,
      ownerId: user._id,
      ownerName: user.name,
      isAvailable: "Available",
    });

    await newPropertyData.save();

    return res.status(200).send({
      success: true,
      message: "New Property has been stored",
    });
  } catch (error) {
    console.log("Error in get All Users Controller ", error);
    return res.status(500).send({success:false,
      message:"Server error while adding property"
    });
  }
};

///////////all properties of owner/////////
const getAllOwnerPropertiesController = async (req, res) => {
  try {
    const userId = req.userId;
    const ownerProperties = await propertySchema.find({ownerId: userId});
     return res.status(200).send({
      success:true,
      data:ownerProperties,
     });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Internal server error", success: false });
  }
};

//////delete the property by owner/////
const deletePropertyController = async (req, res) => {
  try {
    const result=await propertySchema.findByIdAndDelete(req.params.id);
    if(!result){
      return res.status(400).send({success:false,message:"Property  not deleted successfully"});
    }

     res.status(200).send({
      success: true,
      message: "The property is deleted",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Internal server error", success: false });
  }
};

//////updating the property/////////////
const updatePropertyController = async (req, res) => {
  try {
    console.log("Update ID:", req.params.id);  // ✅ Add this for debug

    const updates = req.body;
    if (req.file) {
      updates.propertyImage = {
        path: `/uploads/${req.file.filename}`,
        filename: req.file.filename
      };
    }

    const property = await propertySchema.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    return res.status(200).send({
      success: true,
      data: property,
      message: "Property updated successfully.",
    });
  } catch (error) {
    console.error("Error updating property:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update property.",
    });
  }
};

const getAllBookingsController = async (req, res) => {

  try {
     const userId  = req.userId;
    const getAllBookings = await bookingSchema.find();
    const updatedBookings = getAllBookings.filter(
      (booking) => booking.ownerID.toString() === userId
    );
    return res.status(200).send({
      success: true,
      data: updatedBookings,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Internal server error", success: false });
  }
};

//////////handle bookings status//////////////
const handleAllBookingstatusController = async (req, res) => {
  const { bookingId, propertyId, status } = req.body;
  try {
     await bookingSchema.findByIdAndUpdate(
      bookingId ,
      {
        bookingStatus: status,
      },
      {
        new: true,
      }
    );

     await propertySchema.findByIdAndUpdate(
      propertyId ,
      {
        isAvailable: status === 'booked' ? 'Unavailable' : 'Available', 
      },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: `changed the status of property to ${status}`,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Internal server error", success: false });
  }
};
module.exports = {
  addPropertyController,
  getAllOwnerPropertiesController,
  deletePropertyController,
  updatePropertyController,
  getAllBookingsController,
  handleAllBookingstatusController,
};
