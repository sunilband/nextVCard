import { saveAs } from "file-saver";

export const generateVCard = (userData: any) => {
  const { name, email, phone, socials } = userData || {};

  const vCardContent = `
    BEGIN:VCARD
    VERSION:3.0
    FN:${name || ""}
    ORG:${userData.company || ""}
    EMAIL:${email || ""}
    TEL:${phone || ""}
    ${socials ? `URL:${socials.linkedin || ""}` : ""}
    END:VCARD
      `;

  const data = encodeURIComponent(vCardContent);

  var file = new File([data], `${name || "user"}.vcf`, {
    type: "text/plain;charset=utf-8",
  });
  saveAs(file);
};
