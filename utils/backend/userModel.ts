import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v: any) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v);
        },
        message: (props: any) => `${props.value} is not a valid email`,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
      minLength: [6, "Password too short"],
    },
    data: {
      type: Object,
      default: {
        name: "",
        designation: "",
        company: "",
        description: "",
        email: "",
        phone: "",
        socials: {
          twitter: null,
          facebook: null,
          instagram: null,
          linkedin: null,
          youtube: null,
          behance: null,
          whatsapp: null,
          github: null,
        },
        businessHours: {
          sunday: "",
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
        },
        services: [],
        testimonials: [],
      },
    },
  },
  { timestamps: true },
);

// @ts-ignore
mongoose.models = {};
export const UserModel = mongoose.model("User", schema);
