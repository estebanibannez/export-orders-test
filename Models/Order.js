const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  rut: { type: String, required: false },
  passport: { type: String, required: false },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  secondLastName: { type: String, required: false },
  birthdate: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: false },
  email: { type: String, required: false },
});

const PaymentSchema = mongoose.Schema({
  commerceOrder: { type: String },
  status: { type: Number },
  amount: { type: String },
  paymentDate: { type: Date },
});

const BookingSchema = mongoose.Schema({
  stateName: {
    type: String,
    required: false,
  },
  province: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  addressNumber: {
    type: String,
    required: false,
  },
  addressDetail: {
    type: String,
    required: false,
  },
  blockId: {
    type: String,
    required: false,
  },
  start: {
    type: String,
    required: false,
  },
  end: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  isLab: {
    type: Boolean,
    required: true,
  },
});

const ExamSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completeTitle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  resultTime: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isFast: {
    type: Boolean,
    required: true,
  },
  isLabOnly: {
    type: Boolean,
    required: true,
  },
  isCovid: {
    type: Boolean,
    required: true,
  },
  isPack: {
    type: Boolean,
    required: false,
    default: false,
  },
  user: {
    type: UserSchema,
    required: true,
  },
});

const schema = mongoose.Schema(
  {
    orderNumber: { type: Number, required: true },
    payment: PaymentSchema,
    testReason: { type: String, required: false },
    delivery: { type: Number, required: false },
    paymentMethod: {
      type: String,
      enum: ["Flow", "Paypal", "PayInPerson"],
      required: true,
    },
    booking: BookingSchema,
    exams: [ExamSchema],
    deliveryPayment: { type: String, required: false },
    isCanceled: { type: Boolean, required: false, default: false },
  },
  {
    timestamps: true,
  },
);

// schema.methods.encryptPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// schema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const Order = mongoose.model("Order", schema);

module.exports = Order;
