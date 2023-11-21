"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useUserContext } from "@/context/userContexts";
import { getCookie } from "../../utils/getCookie";
import { updateuser } from "../../utils/apiCalls/UpdateUser";
import { getuser } from "../../utils/apiCalls/GetUser";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import QRCode from "react-qr-code";
import Image from "next/image";

// import { UploadDropzone } from "../../utils/uploadthing";
import { UploadButton } from "../../utils/uploadthing";
type Props = {};

const EditPage = (props: Props) => {
  const router = useRouter();
  const { user, setUser } = useUserContext();
  useEffect(() => {
    const token = getCookie("vCardToken");
    if (!token) router.push("/login");
    try {
      if (token) {
        getuser(token).then((res) => {
          setUser(res.user);
          setData(res.user.data);
          toast.success(`Welcome back ${res.user.name} !`);
        });
      }
    } catch (error: any) {
      toast.error(error.error);
    }
  }, []);

  const updateData = () => {
    const token = getCookie("vCardToken");
    if (!token) router.push("/login");
    try {
      if (token) {
        updateuser(data, token).then((res) => {
          console.log(res);
          toast.success(`Details Updated Successfully !`);
        });
      }
    } catch (error: any) {
      toast.error(error.error);
    }
  };

  const [service, setService] = useState<any>({
    name: "",
    description: "",
  });
  const [testimonial, setTestmonial] = useState<any>({
    name: "",
    description: "",
  });
  const [data, setData] = useState<any>({
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
    theme: "one",
    profile: "",
  });

  console.log("user is", user);
  return (
    <div className="max-w-screen overflow-hidden">
      <Navbar />
      <div className="w-screen min-h-screen flex justify-center items-center">
        {/* info */}
        <div className="flex flex-col gap-6 items-center w-[80%] max-w-[80%]  min-h-[500px]">
          {/* QR */}
          <div className="mt-4 flex flex-col gap-4">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              // @ts-ignore
              value={`${process.env.NEXT_PUBLIC_HOST_URL}` + user?._id}
              viewBox={`0 0 256 256`}
            />

            <h2 className="text-center text-3xl tracking-widest mt-5">
              Profile Link
            </h2>
            <p>{`${process.env.NEXT_PUBLIC_HOST_URL}${user?._id}`}</p>
          </div>
          {/* pic upload */}
          <h2 className="text-center text-3xl tracking-widest mt-5">
            Profile picture
          </h2>
          <img
            src={data.profile ? data.profile : null}
            className="w-[300px] h-[300px]"
            alt="profile"
          />
          <div className="flex gap-4">
            <h3>Replace Image</h3>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                toast.success("Image Uploaded Successfully !");

                setData({ ...data, profile: res[0].url });
                console.log("data", data);
              }}
              onUploadError={(error: Error) => {
                toast.error(error.message);
              }}
            />
            I
          </div>

          <h2 className="text-center text-3xl tracking-widest mt-5">
            Personal Information
          </h2>
          <div className="w-[80%] flex flex-col gap-6">
            <Input
              type="text"
              label="Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
            />
            <Input
              type="text"
              label="Designation"
              onChange={(e) =>
                setData({ ...data, designation: e.target.value })
              }
              value={data.designation}
            />
            <Input
              type="text"
              label="Company"
              onChange={(e) => setData({ ...data, company: e.target.value })}
              value={data.company}
            />
            <Input
              type="text"
              label="Description"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              value={data.description}
            />
            <Input
              type="email"
              label="Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
            />
            <Input
              type="text"
              label="Phone"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              value={data.phone}
            />
            {/* socials */}
            <h2 className="text-center text-3xl tracking-widest">Socials</h2>
            <div className="flex flex-col gap-6">
              <Input
                type="text"
                label="Twitter / X"
                variant="bordered"
                onChange={(e) =>
                  setData({
                    ...data,
                    socials: { ...data.socials, twitter: e.target.value },
                  })
                }
                value={data.socials.twitter}
              />
              <Input
                type="text"
                label="Facebook"
                variant="bordered"
                onChange={(e) =>
                  setData({
                    ...data,
                    socials: { ...data.socials, facebook: e.target.value },
                  })
                }
                value={data.socials.facebook}
              />
              <Input
                type="text"
                label="Instagram"
                variant="bordered"
                onChange={(e) =>
                  setData({
                    ...data,
                    socials: { ...data.socials, instagram: e.target.value },
                  })
                }
                value={data.socials.instagram}
              />
              <Input
                type="text"
                label="LinkedIn"
                variant="bordered"
                onChange={(e) =>
                  setData({
                    ...data,
                    socials: { ...data.socials, linkedin: e.target.value },
                  })
                }
                value={data.socials.linkedin}
              />
              <Input
                type="text"
                label="Youtube"
                variant="bordered"
                onChange={(e) =>
                  setData({
                    ...data,
                    socials: { ...data.socials, youtube: e.target.value },
                  })
                }
                value={data.socials.youtube}
              />
              <Input
                type="text"
                label="Behance"
                variant="bordered"
                onChange={(e) =>
                  setData({
                    ...data,
                    socials: { ...data.socials, behance: e.target.value },
                  })
                }
                value={data.socials.behance}
              />
              <Input
                type="text"
                label="Whatsapp"
                variant="bordered"
                onChange={(e) =>
                  setData({
                    ...data,
                    socials: { ...data.socials, whatsapp: e.target.value },
                  })
                }
                value={data.socials.whatsapp}
              />
              <Input
                type="text"
                label="Github"
                variant="bordered"
                onChange={(e) =>
                  setData({
                    ...data,
                    socials: { ...data.socials, github: e.target.value },
                  })
                }
                value={data.socials.github}
              />
            </div>
            {/* business hours */}
            <h2 className="text-center text-3xl tracking-widest">
              Business Hours
            </h2>
            <div className="flex flex-col gap-6">
              <Input
                type="text"
                label="Sunday"
                variant="faded"
                onChange={(e) =>
                  setData({
                    ...data,
                    businessHours: {
                      ...data.businessHours,
                      sunday: e.target.value,
                    },
                  })
                }
                value={data.businessHours.sunday}
              />
              <Input
                type="text"
                label="Monday"
                variant="faded"
                onChange={(e) =>
                  setData({
                    ...data,
                    businessHours: {
                      ...data.businessHours,
                      monday: e.target.value,
                    },
                  })
                }
                value={data.businessHours.monday}
              />
              <Input
                type="text"
                label="Tuesday"
                variant="faded"
                onChange={(e) =>
                  setData({
                    ...data,
                    businessHours: {
                      ...data.businessHours,
                      tuesday: e.target.value,
                    },
                  })
                }
                value={data.businessHours.tuesday}
              />
              <Input
                type="text"
                label="Wednesday"
                variant="faded"
                onChange={(e) =>
                  setData({
                    ...data,
                    businessHours: {
                      ...data.businessHours,
                      wednesday: e.target.value,
                    },
                  })
                }
                value={data.businessHours.wednesday}
              />
              <Input
                type="text"
                label="Thursday"
                variant="faded"
                onChange={(e) =>
                  setData({
                    ...data,
                    businessHours: {
                      ...data.businessHours,
                      thursday: e.target.value,
                    },
                  })
                }
                value={data.businessHours.thursday}
              />
              <Input
                type="text"
                label="Friday"
                variant="faded"
                onChange={(e) =>
                  setData({
                    ...data,
                    businessHours: {
                      ...data.businessHours,
                      friday: e.target.value,
                    },
                  })
                }
                value={data.businessHours.friday}
              />
              <Input
                type="text"
                label="Saturday"
                variant="faded"
                onChange={(e) =>
                  setData({
                    ...data,
                    businessHours: {
                      ...data.businessHours,
                      saturday: e.target.value,
                    },
                  })
                }
                value={data.businessHours.saturday}
              />
            </div>
          </div>

          {/* services */}
          <h2 className="text-center text-3xl tracking-widest">Services</h2>
          <ul className="flex flex-col justify-center items-center">
            {data.services.map((service: any, key: any) => (
              <li className="max-w-[80%] text-center" key={key}>
                <p>{service.name}</p>
                <p>{service.details}</p>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 w-[80%]">
            <Input
              type="text"
              label="Service Name"
              variant="faded"
              onChange={(e) => {
                setService({ ...service, name: e.target.value });
              }}
              value={service.name}
            />
            <Input
              type="text"
              label="Service Details"
              variant="faded"
              onChange={(e) => {
                setService({ ...service, description: e.target.value });
              }}
              value={service.description}
            />
            <Button
              color="primary"
              className="h-14"
              onClick={() => {
                setData({ ...data, services: [...data.services, service] });
                setService({
                  name: "",
                  details: "",
                });
              }}
            >
              Add
            </Button>
          </div>

          {/* Testimonials */}
          <h2 className="text-center text-3xl tracking-widest">Testimonials</h2>
          <ul className="flex flex-col justify-center items-center">
            {data.testimonials.map((testimonial: any, key: any) => (
              <li className="max-w-[80%] text-center" key={key}>
                <p>{testimonial.name}</p>
                <p>{testimonial.details}</p>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 w-[80%]">
            <Input
              type="text"
              label="Testimonial Name"
              variant="faded"
              onChange={(e) => {
                setTestmonial({ ...testimonial, name: e.target.value });
              }}
              value={testimonial.name}
            />
            <Input
              type="text"
              label="Testimonial Details"
              variant="faded"
              onChange={(e) => {
                setTestmonial({ ...testimonial, description: e.target.value });
              }}
              value={testimonial.description}
            />
            <Button
              color="primary"
              className="h-14"
              onClick={() => {
                setData({
                  ...data,
                  testimonials: [...data.testimonials, testimonial],
                });
                setTestmonial({
                  name: "",
                  details: "",
                });
              }}
            >
              Add
            </Button>
          </div>
          {/* Theme */}
          <h2 className="text-center text-3xl tracking-widest">Theme</h2>
          <Select
            label="Select a theme"
            className="w-[80%]"
            onChange={(e) => {
              setData({
                ...data,
                theme: e.target.value,
              });
            }}
            value={data.theme}
          >
            <SelectItem key="one" value="one">
              One
            </SelectItem>
            <SelectItem key="two" value="two">
              Two
            </SelectItem>
            <SelectItem key="three" value="three">
              Three
            </SelectItem>
            <SelectItem key="four" value="four">
              Four
            </SelectItem>
            <SelectItem key="five" value="five">
              Five
            </SelectItem>
            <SelectItem key="six" value="six">
              Six
            </SelectItem>
            <SelectItem key="seven" value="seven">
              Seven
            </SelectItem>
            <SelectItem key="eight" value="eight">
              Eight
            </SelectItem>
            <SelectItem key="nine" value="nine">
              Nine
            </SelectItem>
          </Select>
          <Button
            color="success"
            className="h-14 w-[80%] mt-4 mb-4"
            onClick={() => {
              updateData();
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
