const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const shortid = require("shortid");
shortid.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@"
);
dotenv.config({ path: "../config.env" });

const visitSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  ip: {
    type: String,
  },
  location: {
    type: String,
  },
  browser: {
    type: String,
  },
  os: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: [6, "Password too short"],
  },

  title: {
    type: String,
  },

  about: {
    type: String,
  },

  profilePic: {
    type: String,
  },

  coverPic: {
    type: String,
  },

  phone: {
    type: Number,
  },

  whatsapp: {
    type: Number,
  },

  website: {
    type: String,
  },

  socials: {
    snapchat: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    youtube: {
      type: String,
    },
    tiktok: {
      type: String,
    },
  },

  location: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  totalViews: {
    type: Number,
  },

  visits: {
    type: [visitSchema],
  },
});

userSchema.pre("save", async function (next) {
  console.log("we are in middleware");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  console.log("middleware sent to next");
  next();
});

module.exports = mongoose.model("User", userSchema);
