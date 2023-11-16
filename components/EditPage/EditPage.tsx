"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { set } from "mongoose";
type Props = {};

const EditPage = (props: Props) => {
  const [service, setService] = useState<any>({
    name: "",
    details: "",
  });
  const [testimonial, setTestmonial] = useState<any>({
    name: "",
    details: "",
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
  });

  return (
    <div className="max-w-screen overflow-hidden">
      <Navbar />
      <div className="w-screen min-h-screen flex justify-center items-center">
        {/* name */}
        <div className="flex flex-col gap-6 items-center w-[80%] max-w-[80%]  min-h-[500px]">
          <h2 className="text-center text-3xl tracking-widest mt-5">
            Personal Information
          </h2>
          <div className="w-[80%] flex flex-col gap-6">
            <Input
              type="text"
              label="Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <Input
              type="text"
              label="Designation"
              onChange={(e) =>
                setData({ ...data, designation: e.target.value })
              }
            />
            <Input
              type="text"
              label="Company"
              onChange={(e) => setData({ ...data, company: e.target.value })}
            />
            <Input
              type="text"
              label="Description"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
            <Input
              type="email"
              label="Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Input
              type="text"
              label="Phone"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
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
                setService({ ...service, details: e.target.value });
              }}
              value={service.details}
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
                setTestmonial({ ...testimonial, details: e.target.value });
              }}
              value={testimonial.details}
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
        </div>
      </div>
    </div>
  );
};

export default EditPage;
